import * as THREE from 'three';
import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';

import './styles.css';
import leftEyeTextureUrl from '../HDR/church_meeting_room_4k_left_eye.jpg?url';
import rightEyeTextureUrl from '../HDR/church_meeting_room_4k_right_eye.jpg?url';
import webcamIconUrl from '../Design/gesture-guide/Icons_SVG/01_WebCam.svg?url';
import pinchIconUrl from '../Design/gesture-guide/Icons_SVG/02_Pinch.svg?url';
import mouseIconUrl from '../Design/gesture-guide/Icons_SVG/03_Mouse.svg?url';
import crossIconUrl from '../Design/gesture-guide/Icons_SVG/04_Cross.svg?url';
import stereoGuideIconUrl from '../Design/gesture-guide/Icons_SVG/05_Stereo_Guide.svg?url';

const assetBaseUrl = import.meta.env.BASE_URL;

let camera;
let scene;
let renderer;
let stereoCamera;
let leftBackgroundTexture;
let rightBackgroundTexture;
let leftEnvTexture;
let rightEnvTexture;
let sphereMaterial;
let handLandmarker;
let video;
let gestureControl;
let gestureStatus;
let gestureDebug;
let lastVideoTime = -1;
let lastResetTime = 0;
let isHandControlReady = false;
let isHandControlRunning = false;
let isPinching = false;
let pinchStart = null;

const spheres = [];

let mouseX = 0;
let mouseY = 0;
let yaw = 0;
let pitch = 0;
let targetYaw = 0;
let targetPitch = 0;
let targetFov = 60;
let trackedHands = 0;
let isMouseDragging = false;
let previousMouseX = 0;
let previousMouseY = 0;
const mouseDragSensitivity = 0.004;
const pinchDragSensitivity = Math.PI * 0.85;
const initialYaw = 0;
const initialPitch = 0;
const initialFov = 60;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

document.addEventListener( 'pointerdown', onDocumentPointerDown );
document.addEventListener( 'pointermove', onDocumentPointerMove );
document.addEventListener( 'pointerup', onDocumentPointerUp );
document.addEventListener( 'pointercancel', onDocumentPointerUp );

init();

function init() {
  const container = document.querySelector( '#app' );

  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 100 );
  camera.position.z = 3;

  scene = new THREE.Scene();

  const geometry = new THREE.SphereGeometry( 0.1, 32, 16 );

  sphereMaterial = new THREE.MeshBasicMaterial( {
    color: 0xffffff,
    refractionRatio: 0.95
  } );

  loadStereoTextures();

  for ( let i = 0; i < 500; i ++ ) {
    const mesh = new THREE.Mesh( geometry, sphereMaterial );
    mesh.position.x = Math.random() * 10 - 5;
    mesh.position.y = Math.random() * 10 - 5;
    mesh.position.z = Math.random() * 10 - 5;
    mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;
    scene.add( mesh );

    spheres.push( mesh );
  }

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.setAnimationLoop( animate );
  container.appendChild( renderer.domElement );

  stereoCamera = new THREE.StereoCamera();
  stereoCamera.aspect = 0.5;
  renderer.setSize( window.innerWidth, window.innerHeight );

  createGestureGuideUi();
  createHandControlUi();
  window.addEventListener( 'resize', onWindowResize );
}

function loadStereoTextures() {
  const textureLoader = new THREE.TextureLoader();

  leftBackgroundTexture = textureLoader.load( leftEyeTextureUrl );
  rightBackgroundTexture = textureLoader.load( rightEyeTextureUrl );
  leftEnvTexture = textureLoader.load( leftEyeTextureUrl, updateSphereEnvironment );
  rightEnvTexture = textureLoader.load( rightEyeTextureUrl );

  for ( const texture of [ leftBackgroundTexture, rightBackgroundTexture, leftEnvTexture, rightEnvTexture ] ) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }

  leftBackgroundTexture.mapping = THREE.EquirectangularReflectionMapping;
  rightBackgroundTexture.mapping = THREE.EquirectangularReflectionMapping;
  leftEnvTexture.mapping = THREE.EquirectangularRefractionMapping;
  rightEnvTexture.mapping = THREE.EquirectangularRefractionMapping;
}

function updateSphereEnvironment() {
  sphereMaterial.envMap = leftEnvTexture;
  sphereMaterial.needsUpdate = true;
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentPointerDown( event ) {
  if ( event.button !== 0 || event.target.closest( '.hand-control' ) || event.target.closest( '.gesture-guide-ui' ) ) return;

  isMouseDragging = true;
  previousMouseX = event.clientX;
  previousMouseY = event.clientY;
}

function onDocumentPointerMove( event ) {
  mouseX = ( event.clientX - windowHalfX ) * 0.01;
  mouseY = ( event.clientY - windowHalfY ) * 0.01;

  if ( ! isMouseDragging || isHandControlRunning ) return;

  const deltaX = event.clientX - previousMouseX;
  const deltaY = event.clientY - previousMouseY;

  previousMouseX = event.clientX;
  previousMouseY = event.clientY;

  targetYaw -= deltaX * mouseDragSensitivity;
  targetPitch -= deltaY * mouseDragSensitivity;
}

function onDocumentPointerUp() {
  isMouseDragging = false;
}

function createGestureGuideUi() {
  const guide = document.createElement( 'div' );
  guide.className = 'gesture-guide-ui';

  const items = [
    [ webcamIconUrl, 'WebCam', 'ON / OFF', 'カメラ オン / オフ' ],
    [ pinchIconUrl, 'Pinch + Drag', 'look around', 'つまんで視点移動' ],
    [ mouseIconUrl, 'Mouse Drag', 'look around', 'ドラッグで視点移動' ],
    [ crossIconUrl, 'Cross Reset', 'return to zero', '腕をクロスしてリセット' ],
    [ stereoGuideIconUrl, '3D Guide', 'merge dots', '2つの点を重ねて見る' ]
  ];

  for ( const [ iconUrl, label, hint, japanese ] of items ) {
    const item = document.createElement( 'div' );
    item.className = 'gesture-guide-item';

    const icon = document.createElement( 'img' );
    icon.className = 'gesture-guide-icon';
    icon.src = iconUrl;
    icon.alt = '';
    icon.draggable = false;

    const text = document.createElement( 'div' );
    text.className = 'gesture-guide-text';
    text.innerHTML = `
      <strong>${ label }</strong>
      <span>${ hint }</span>
      <em>${ japanese }</em>
    `;

    item.append( icon, text );
    guide.appendChild( item );
  }

  document.body.appendChild( guide );
}

function createHandControlUi() {
  const panel = document.createElement( 'div' );
  panel.className = 'hand-control';

  gestureControl = document.createElement( 'button' );
  gestureControl.type = 'button';
  gestureControl.textContent = 'WebCam ON';
  gestureControl.addEventListener( 'click', toggleHandControl );

  gestureStatus = document.createElement( 'span' );
  gestureStatus.textContent = 'off';

  gestureDebug = document.createElement( 'span' );
  gestureDebug.className = 'hand-debug';
  gestureDebug.textContent = 'camera idle';

  video = document.createElement( 'video' );
  video.className = 'hand-video';
  video.playsInline = true;
  video.autoplay = true;
  video.muted = true;

  panel.append( gestureControl, gestureStatus, gestureDebug, video );
  document.body.appendChild( panel );
}

function toggleHandControl() {
  if ( isHandControlRunning ) {
    disableHandControl();
    return;
  }

  enableHandControl();
}

async function enableHandControl() {
  if ( isHandControlRunning ) return;

  gestureControl.disabled = true;
  gestureStatus.textContent = 'camera starting';

  try {
    if ( ! window.isSecureContext ) {
      throw new Error( 'Camera needs a secure context. Use http://localhost:5173 or http://127.0.0.1:5173.' );
    }

    if ( ! navigator.mediaDevices?.getUserMedia ) {
      throw new Error( 'This browser does not expose getUserMedia.' );
    }

    const stream = await navigator.mediaDevices.getUserMedia( {
      video: {
        facingMode: 'user',
        width: { ideal: 640 },
        height: { ideal: 480 }
      },
      audio: false
    } );

    video.srcObject = stream;
    video.setAttribute( 'data-active', 'true' );
    await video.play();

    if ( ! isHandControlReady ) {
      gestureStatus.textContent = 'loading model';

      const vision = await FilesetResolver.forVisionTasks( `${ assetBaseUrl }mediapipe/wasm/` );

      handLandmarker = await HandLandmarker.createFromOptions( vision, {
        baseOptions: {
          modelAssetPath: `${ assetBaseUrl }models/hand_landmarker.task`
        },
        runningMode: 'VIDEO',
        numHands: 2
      } );

      isHandControlReady = true;
    }

    isHandControlRunning = true;
    gestureControl.textContent = 'WebCam OFF';
    gestureStatus.textContent = 'show your hand';
    gestureDebug.textContent = `${ video.videoWidth || 640 }x${ video.videoHeight || 480 }`;
    gestureControl.disabled = false;
  } catch ( error ) {
    console.error( error );
    gestureStatus.textContent = 'camera error';
    gestureDebug.textContent = getCameraErrorMessage( error );
    gestureControl.disabled = false;
  }
}

function disableHandControl() {
  if ( video?.srcObject ) {
    for ( const track of video.srcObject.getTracks() ) {
      track.stop();
    }
  }

  video.srcObject = null;
  video.removeAttribute( 'data-active' );
  isHandControlRunning = false;
  isPinching = false;
  pinchStart = null;
  lastVideoTime = -1;
  gestureControl.textContent = 'WebCam ON';
  gestureControl.disabled = false;
  gestureStatus.textContent = 'off';
  gestureDebug.textContent = 'camera idle';
}

function updateHandControl() {
  if ( ! isHandControlRunning || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA ) return;
  if ( video.currentTime === lastVideoTime ) return;

  lastVideoTime = video.currentTime;

  const result = handLandmarker.detectForVideo( video, performance.now() );
  const hands = result.landmarks;
  trackedHands = hands.length;
  const landmarks = hands[ 0 ];

  if ( ! landmarks ) {
    gestureStatus.textContent = 'show your hand';
    gestureDebug.textContent = 'camera on, no hand';
    return;
  }

  const indexTip = landmarks[ 8 ];
  const wrist = landmarks[ 0 ];
  const middleMcp = landmarks[ 9 ];
  const centerX = ( wrist.x + middleMcp.x + indexTip.x ) / 3;
  const centerY = ( wrist.y + middleMcp.y + indexTip.y ) / 3;
  const handScale = getHandScale( landmarks );
  const pinchDistance = getPinchDistance( landmarks );
  const pinchThreshold = Math.max( 0.045, handScale * 0.32 );
  const pinchReleaseThreshold = pinchThreshold * 1.35;

  if ( hands.length >= 2 && isCrossGesture( hands[ 0 ], hands[ 1 ] ) ) {
    resetCameraPosition();
    gestureStatus.textContent = 'reset';
    gestureDebug.textContent = 'X gesture';
    return;
  }

  if ( ! isPinching && pinchDistance < pinchThreshold ) {
    isPinching = true;
    pinchStart = {
      centerX,
      centerY,
      handScale,
      yaw: targetYaw,
      pitch: targetPitch,
      fov: targetFov
    };
  } else if ( isPinching && pinchDistance > pinchReleaseThreshold ) {
    isPinching = false;
    pinchStart = null;
  }

  if ( isPinching && pinchStart ) {
    const deltaX = centerX - pinchStart.centerX;
    const deltaY = centerY - pinchStart.centerY;
    const deltaScale = handScale - pinchStart.handScale;

    targetYaw = pinchStart.yaw - deltaX * pinchDragSensitivity;
    targetPitch = pinchStart.pitch - deltaY * pinchDragSensitivity;
    targetFov = THREE.MathUtils.clamp( pinchStart.fov - deltaScale * 85, 35, 75 );
  }

  gestureStatus.textContent = isPinching ? 'pinch drag' : 'pinch to drag';
  gestureDebug.textContent = `hands ${ trackedHands } / pinch ${ pinchDistance.toFixed( 2 ) }`;
}

function getCameraErrorMessage( error ) {
  if ( error.name === 'NotAllowedError' ) return 'allow camera permission';
  if ( error.name === 'NotFoundError' ) return 'camera not found';
  if ( error.name === 'NotReadableError' ) return 'camera busy';
  if ( error.name === 'OverconstrainedError' ) return 'camera constraints failed';

  return error.message || 'unknown error';
}

function resetCameraPosition() {
  const now = performance.now();

  if ( now - lastResetTime < 900 ) return;

  lastResetTime = now;
  yaw = initialYaw;
  pitch = initialPitch;
  targetYaw = initialYaw;
  targetPitch = initialPitch;
  targetFov = initialFov;
  isPinching = false;
  isMouseDragging = false;
  pinchStart = null;
  mouseX = 0;
  mouseY = 0;
  camera.fov = targetFov;
  camera.updateProjectionMatrix();
  applyCameraOrientation();
}

function getPinchDistance( landmarks ) {
  const thumbTip = landmarks[ 4 ];
  const indexTip = landmarks[ 8 ];

  return Math.hypot( thumbTip.x - indexTip.x, thumbTip.y - indexTip.y );
}

function getHandScale( landmarks ) {
  const xs = landmarks.map( ( landmark ) => landmark.x );
  const ys = landmarks.map( ( landmark ) => landmark.y );
  const width = Math.max( ...xs ) - Math.min( ...xs );
  const height = Math.max( ...ys ) - Math.min( ...ys );

  return Math.max( width, height );
}

function isCrossGesture( firstHand, secondHand ) {
  const firstStart = firstHand[ 0 ];
  const firstEnd = firstHand[ 12 ];
  const secondStart = secondHand[ 0 ];
  const secondEnd = secondHand[ 12 ];
  const firstCenter = getHandCenter( firstHand );
  const secondCenter = getHandCenter( secondHand );
  const centerDistance = Math.hypot( firstCenter.x - secondCenter.x, firstCenter.y - secondCenter.y );

  return centerDistance < 0.42 && segmentsIntersect( firstStart, firstEnd, secondStart, secondEnd );
}

function getHandCenter( landmarks ) {
  const center = landmarks.reduce( ( result, landmark ) => {
    result.x += landmark.x;
    result.y += landmark.y;
    return result;
  }, { x: 0, y: 0 } );

  center.x /= landmarks.length;
  center.y /= landmarks.length;

  return center;
}

function segmentsIntersect( a, b, c, d ) {
  const abC = getOrientation( a, b, c );
  const abD = getOrientation( a, b, d );
  const cdA = getOrientation( c, d, a );
  const cdB = getOrientation( c, d, b );

  return abC * abD < 0 && cdA * cdB < 0;
}

function getOrientation( a, b, c ) {
  return ( b.x - a.x ) * ( c.y - a.y ) - ( b.y - a.y ) * ( c.x - a.x );
}

function animate() {
  const timer = 0.0001 * Date.now();

  updateHandControl();

  yaw = THREE.MathUtils.lerp( yaw, targetYaw, 0.12 );
  pitch = THREE.MathUtils.lerp( pitch, targetPitch, 0.12 );
  camera.fov = THREE.MathUtils.lerp( camera.fov, targetFov, 0.08 );
  camera.updateProjectionMatrix();
  applyCameraOrientation();

  for ( let i = 0, il = spheres.length; i < il; i ++ ) {
    const sphere = spheres[ i ];

    sphere.position.x = 5 * Math.cos( timer + i );
    sphere.position.y = 5 * Math.sin( timer + i * 1.1 );
  }

  renderStereoScene();
}

function renderStereoScene() {
  if ( scene.matrixWorldAutoUpdate ) scene.updateMatrixWorld();
  if ( camera.parent === null && camera.matrixWorldAutoUpdate ) camera.updateMatrixWorld();

  stereoCamera.update( camera );

  const width = renderer.domElement.width / renderer.getPixelRatio();
  const height = renderer.domElement.height / renderer.getPixelRatio();
  const currentAutoClear = renderer.autoClear;

  renderer.autoClear = false;
  renderer.clear();
  renderer.setScissorTest( true );

  scene.background = leftBackgroundTexture;
  sphereMaterial.envMap = leftEnvTexture;
  renderer.setScissor( 0, 0, width / 2, height );
  renderer.setViewport( 0, 0, width / 2, height );
  renderer.render( scene, stereoCamera.cameraL );

  scene.background = rightBackgroundTexture;
  sphereMaterial.envMap = rightEnvTexture;
  renderer.setScissor( width / 2, 0, width / 2, height );
  renderer.setViewport( width / 2, 0, width / 2, height );
  renderer.render( scene, stereoCamera.cameraR );

  renderer.setScissorTest( false );
  renderer.autoClear = currentAutoClear;
}

function applyCameraOrientation() {
  camera.position.set( 0, 0, 0 );
  camera.lookAt(
    Math.cos( pitch ) * Math.sin( yaw ),
    Math.sin( pitch ),
    Math.cos( pitch ) * Math.cos( yaw )
  );
}
