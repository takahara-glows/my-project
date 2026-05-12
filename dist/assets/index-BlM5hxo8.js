(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hl="176",a0=0,sh=1,c0=2,xd=1,l0=2,vi=3,qi=0,cn=1,xi=2,Hi=0,Zr=1,oh=2,ah=3,ch=4,u0=5,ur=100,h0=101,f0=102,d0=103,p0=104,m0=200,g0=201,_0=202,v0=203,Oc=204,Bc=205,x0=206,M0=207,S0=208,E0=209,y0=210,T0=211,A0=212,b0=213,w0=214,kc=0,zc=1,Vc=2,ns=3,Gc=4,Hc=5,Wc=6,Xc=7,Md=0,R0=1,C0=2,Wi=0,P0=1,L0=2,D0=3,Sd=4,U0=5,I0=6,N0=7,Ed=300,is=301,rs=302,Zs=303,$s=304,Ta=306,qc=1e3,fr=1001,Yc=1002,Xn=1003,F0=1004,wo=1005,Qn=1006,ec=1007,dr=1008,Ti=1009,yd=1010,Td=1011,Js=1012,Wl=1013,Sr=1014,Si=1015,fo=1016,Xl=1017,ql=1018,Qs=1020,Ad=35902,bd=1021,wd=1022,Hn=1023,eo=1026,to=1027,Rd=1028,Yl=1029,Cd=1030,jl=1031,Kl=1033,na=33776,ia=33777,ra=33778,sa=33779,jc=35840,Kc=35841,Zc=35842,$c=35843,Jc=36196,Qc=37492,el=37496,tl=37808,nl=37809,il=37810,rl=37811,sl=37812,ol=37813,al=37814,cl=37815,ll=37816,ul=37817,hl=37818,fl=37819,dl=37820,pl=37821,oa=36492,ml=36494,gl=36495,Pd=36283,_l=36284,vl=36285,xl=36286,O0=3200,B0=3201,k0=0,z0=1,Vi="",gn="srgb",ss="srgb-linear",ma="linear",nt="srgb",Pr=7680,lh=519,V0=512,G0=513,H0=514,Ld=515,W0=516,X0=517,q0=518,Y0=519,uh=35044,hh="300 es",Ei=2e3,ga=2001;class Ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fh=1234567;const $r=Math.PI/180,no=180/Math.PI;function Ss(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function ze(t,e,n){return Math.max(e,Math.min(n,t))}function Zl(t,e){return(t%e+e)%e}function j0(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function K0(t,e,n){return t!==e?(n-t)/(e-t):0}function Ws(t,e,n){return(1-n)*t+n*e}function Z0(t,e,n,i){return Ws(t,e,1-Math.exp(-n*i))}function $0(t,e=1){return e-Math.abs(Zl(t,e*2)-e)}function J0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Q0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function eg(t,e){return t+Math.floor(Math.random()*(e-t+1))}function tg(t,e){return t+Math.random()*(e-t)}function ng(t){return t*(.5-Math.random())}function ig(t){t!==void 0&&(fh=t);let e=fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rg(t){return t*$r}function sg(t){return t*no}function og(t){return(t&t-1)===0&&t!==0}function ag(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function cg(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function lg(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*u,c*h,c*d,a*l);break;case"YZY":t.set(c*d,a*u,c*h,a*l);break;case"ZXZ":t.set(c*h,c*d,a*u,a*l);break;case"XZX":t.set(a*u,c*_,c*p,a*l);break;case"YXY":t.set(c*p,a*u,c*_,a*l);break;case"ZYZ":t.set(c*_,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const aa={DEG2RAD:$r,RAD2DEG:no,generateUUID:Ss,clamp:ze,euclideanModulo:Zl,mapLinear:j0,inverseLerp:K0,lerp:Ws,damp:Z0,pingpong:$0,smoothstep:J0,smootherstep:Q0,randInt:eg,randFloat:tg,randFloatSpread:ng,seededRandom:ig,degToRad:rg,radToDeg:sg,isPowerOfTwo:og,ceilPowerOfTwo:ag,floorPowerOfTwo:cg,setQuaternionFromProperEuler:lg,normalize:Qt,denormalize:qr};class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ze(this.x,e.x,n.x),this.y=ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ze(this.x,e,n),this.y=ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,l)}set(e,n,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],M=r[0],m=r[3],f=r[6],A=r[1],T=r[4],y=r[7],U=r[2],w=r[5],R=r[8];return s[0]=o*M+a*A+c*U,s[3]=o*m+a*T+c*w,s[6]=o*f+a*y+c*R,s[1]=l*M+u*A+h*U,s[4]=l*m+u*T+h*w,s[7]=l*f+u*y+h*R,s[2]=d*M+p*A+_*U,s[5]=d*m+p*T+_*w,s[8]=d*f+p*y+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,p=l*s-o*c,_=n*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=h*M,e[1]=(r*l-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=d*M,e[4]=(u*n-r*c)*M,e[5]=(r*s-a*n)*M,e[6]=p*M,e[7]=(i*c-l*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(tc.makeScale(e,n)),this}rotate(e){return this.premultiply(tc.makeRotation(-e)),this}translate(e,n){return this.premultiply(tc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new Fe;function Dd(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function io(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ug(){const t=io("canvas");return t.style.display="block",t}const dh={};function ca(t){t in dh||(dh[t]=!0,console.warn(t))}function hg(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function fg(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dg(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ph=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pg(){const t={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=yi(r.r),r.g=yi(r.g),r.b=yi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=Jr(r.r),r.g=Jr(r.g),r.b=Jr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vi?ma:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ss]:{primaries:e,whitePoint:i,transfer:ma,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),t}const Ke=pg();function yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Jr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Lr;class mg{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Lr===void 0&&(Lr=io("canvas")),Lr.width=e.width,Lr.height=e.height;const r=Lr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Lr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=io("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(yi(n[i]/255)*255):n[i]=yi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gg=0;class $l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nc(r[o].image)):s.push(nc(r[o]))}else s=nc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _g=0;class nn extends Ms{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=fr,r=fr,s=Qn,o=dr,a=Hn,c=Ti,l=nn.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Ss(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qc:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case Yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qc:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case Yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Ed;nn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],_=c[9],M=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+M)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(l+1)/2,y=(p+1)/2,U=(f+1)/2,w=(u+d)/4,R=(h+M)/4,I=(_+m)/4;return T>y&&T>U?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=w/i,s=R/i):y>U?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=I/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=R/s,r=I/s),this.set(i,r,s,n),this}let A=Math.sqrt((m-_)*(m-_)+(h-M)*(h-M)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(h-M)/A,this.z=(d-u)/A,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ze(this.x,e.x,n.x),this.y=ze(this.y,e.y,n.y),this.z=ze(this.z,e.z,n.z),this.w=ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ze(this.x,e,n),this.y=ze(this.y,e,n),this.z=ze(this.z,e,n),this.w=ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vg extends Ms{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth?i.depth:1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new $l(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends vg{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ud extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xg extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class po{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],M=s[o+3];if(a===0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=M;return}if(h!==M||c!==d||l!==p||u!==_){let m=1-a;const f=c*d+l*p+u*_+h*M,A=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const U=Math.sqrt(T),w=Math.atan2(U,f*A);m=Math.sin(m*w)/U,a=Math.sin(a*w)/U}const y=a*A;if(c=c*m+d*y,l=l*m+p*y,u=u*m+_*y,h=h*m+M*y,m===1-a){const U=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=U,l*=U,u*=U,h*=U}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*h+c*p-l*d,e[n+1]=c*_+u*d+l*h-a*p,e[n+2]=l*_+u*p+a*d-c*h,e[n+3]=u*_-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),p=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"YZX":this._x=d*u*h+l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h-d*p*_;break;case"XZY":this._x=d*u*h-l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-n)*u)/l,d=Math.sin(n*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ze(this.x,e.x,n.x),this.y=ze(this.y,e.y,n.y),this.z=ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ze(this.x,e,n),this.y=ze(this.y,e,n),this.z=ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new B,gh=new po;class mo{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Co.subVectors(this.max,Fs),Dr.subVectors(e.a,Fs),Ur.subVectors(e.b,Fs),Ir.subVectors(e.c,Fs),Pi.subVectors(Ur,Dr),Li.subVectors(Ir,Ur),er.subVectors(Dr,Ir);let n=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-er.z,er.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,er.z,0,-er.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-er.y,er.x,0];return!rc(n,Dr,Ur,Ir,Co)||(n=[1,0,0,0,1,0,0,0,1],!rc(n,Dr,Ur,Ir,Co))?!1:(Po.crossVectors(Pi,Li),n=[Po.x,Po.y,Po.z],rc(n,Dr,Ur,Ir,Co))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new B,new B,new B,new B,new B,new B,new B,new B],On=new B,Ro=new mo,Dr=new B,Ur=new B,Ir=new B,Pi=new B,Li=new B,er=new B,Fs=new B,Co=new B,Po=new B,tr=new B;function rc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){tr.fromArray(t,s);const a=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),c=e.dot(tr),l=n.dot(tr),u=i.dot(tr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Mg=new mo,Os=new B,sc=new B;class Jl{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Mg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const n=Os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(sc)),this.expandByPoint(Os.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new B,oc=new B,Lo=new B,Di=new B,ac=new B,Do=new B,cc=new B;class Sg{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){oc.copy(e).add(n).multiplyScalar(.5),Lo.copy(n).sub(e).normalize(),Di.copy(this.origin).sub(oc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Lo),a=Di.dot(this.direction),c=-Di.dot(Lo),l=Di.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*c-a,d=o*a-c,_=s*u,h>=0)if(d>=-_)if(d<=_){const M=1/u;h*=M,d*=M,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(oc).addScaledVector(Lo,d),p}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,s){ac.subVectors(n,e),Do.subVectors(i,e),cc.crossVectors(ac,Do);let o=this.direction.dot(cc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const c=a*this.direction.dot(Do.crossVectors(Di,Do));if(c<0)return null;const l=a*this.direction.dot(ac.cross(Di));if(l<0||c+l>o)return null;const u=-a*Di.dot(cc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,c,l,u,h,d,p,_,M,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,l,u,h,d,p,_,M,m)}set(e,n,i,r,s,o,a,c,l,u,h,d,p,_,M,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),s=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,_=a*u,M=a*h;n[0]=c*u,n[4]=-c*h,n[8]=l,n[1]=p+_*l,n[5]=d-M*l,n[9]=-a*c,n[2]=M-d*l,n[6]=_+p*l,n[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,_=l*u,M=l*h;n[0]=d+M*a,n[4]=_*a-p,n[8]=o*l,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=M+d*a,n[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,_=l*u,M=l*h;n[0]=d-M*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=M-d*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*h,_=a*u,M=a*h;n[0]=c*u,n[4]=_*l-p,n[8]=d*l+M,n[1]=c*h,n[5]=M*l+d,n[9]=p*l-_,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,_=a*c,M=a*l;n[0]=c*u,n[4]=M-d*h,n[8]=_*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=p*h+_,n[10]=d-M*h}else if(e.order==="XZY"){const d=o*c,p=o*l,_=a*c,M=a*l;n[0]=c*u,n[4]=-h,n[8]=l*u,n[1]=d*h+M,n[5]=o*u,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*u,n[10]=M*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eg,e,yg)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ui.crossVectors(i,hn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ui.crossVectors(i,hn)),Ui.normalize(),Uo.crossVectors(hn,Ui),r[0]=Ui.x,r[4]=Uo.x,r[8]=hn.x,r[1]=Ui.y,r[5]=Uo.y,r[9]=hn.y,r[2]=Ui.z,r[6]=Uo.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],M=i[6],m=i[10],f=i[14],A=i[3],T=i[7],y=i[11],U=i[15],w=r[0],R=r[4],I=r[8],E=r[12],x=r[1],C=r[5],q=r[9],k=r[13],W=r[2],Z=r[6],H=r[10],Q=r[14],V=r[3],ie=r[7],ue=r[11],Ee=r[15];return s[0]=o*w+a*x+c*W+l*V,s[4]=o*R+a*C+c*Z+l*ie,s[8]=o*I+a*q+c*H+l*ue,s[12]=o*E+a*k+c*Q+l*Ee,s[1]=u*w+h*x+d*W+p*V,s[5]=u*R+h*C+d*Z+p*ie,s[9]=u*I+h*q+d*H+p*ue,s[13]=u*E+h*k+d*Q+p*Ee,s[2]=_*w+M*x+m*W+f*V,s[6]=_*R+M*C+m*Z+f*ie,s[10]=_*I+M*q+m*H+f*ue,s[14]=_*E+M*k+m*Q+f*Ee,s[3]=A*w+T*x+y*W+U*V,s[7]=A*R+T*C+y*Z+U*ie,s[11]=A*I+T*q+y*H+U*ue,s[15]=A*E+T*k+y*Q+U*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],M=e[7],m=e[11],f=e[15];return _*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*p-i*c*p)+M*(+n*c*p-n*l*d+s*o*d-r*o*p+r*l*u-s*c*u)+m*(+n*l*h-n*a*p-s*o*h+i*o*p+s*a*u-i*l*u)+f*(-r*a*u-n*c*h+n*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],M=e[13],m=e[14],f=e[15],A=h*m*l-M*d*l+M*c*p-a*m*p-h*c*f+a*d*f,T=_*d*l-u*m*l-_*c*p+o*m*p+u*c*f-o*d*f,y=u*M*l-_*h*l+_*a*p-o*M*p-u*a*f+o*h*f,U=_*h*c-u*M*c-_*a*d+o*M*d+u*a*m-o*h*m,w=n*A+i*T+r*y+s*U;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=A*R,e[1]=(M*d*s-h*m*s-M*r*p+i*m*p+h*r*f-i*d*f)*R,e[2]=(a*m*s-M*c*s+M*r*l-i*m*l-a*r*f+i*c*f)*R,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*p-i*c*p)*R,e[4]=T*R,e[5]=(u*m*s-_*d*s+_*r*p-n*m*p-u*r*f+n*d*f)*R,e[6]=(_*c*s-o*m*s-_*r*l+n*m*l+o*r*f-n*c*f)*R,e[7]=(o*d*s-u*c*s+u*r*l-n*d*l-o*r*p+n*c*p)*R,e[8]=y*R,e[9]=(_*h*s-u*M*s-_*i*p+n*M*p+u*i*f-n*h*f)*R,e[10]=(o*M*s-_*a*s+_*i*l-n*M*l-o*i*f+n*a*f)*R,e[11]=(u*a*s-o*h*s-u*i*l+n*h*l+o*i*p-n*a*p)*R,e[12]=U*R,e[13]=(u*M*r-_*h*r+_*i*d-n*M*d-u*i*m+n*h*m)*R,e[14]=(_*a*r-o*M*r-_*i*c+n*M*c+o*i*m-n*a*m)*R,e[15]=(o*h*r-u*a*r+u*i*c-n*h*c-o*i*d+n*a*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,u=o+o,h=a+a,d=s*l,p=s*u,_=s*h,M=o*u,m=o*h,f=a*h,A=c*l,T=c*u,y=c*h,U=i.x,w=i.y,R=i.z;return r[0]=(1-(M+f))*U,r[1]=(p+y)*U,r[2]=(_-T)*U,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(d+f))*w,r[6]=(m+A)*w,r[7]=0,r[8]=(_+T)*R,r[9]=(m-A)*R,r[10]=(1-(d+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Nr.set(r[0],r[1],r[2]).length();const o=Nr.set(r[4],r[5],r[6]).length(),a=Nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const l=1/s,u=1/o,h=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const c=this.elements,l=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===Ei)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ga)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const c=this.elements,l=1/(n-e),u=1/(i-r),h=1/(o-s),d=(n+e)*l,p=(i+r)*u;let _,M;if(a===Ei)_=(o+s)*h,M=-2*h;else if(a===ga)_=s*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=M,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Nr=new B,Bn=new xt,Eg=new B(0,0,0),yg=new B(1,1,1),Ui=new B,Uo=new B,hn=new B,_h=new xt,vh=new po;class Ai{constructor(e=0,n=0,i=0,r=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class Id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tg=0;const xh=new B,Fr=new po,mi=new xt,Io=new B,Bs=new B,Ag=new B,bg=new po,Mh=new B(1,0,0),Sh=new B(0,1,0),Eh=new B(0,0,1),yh={type:"added"},wg={type:"removed"},Or={type:"childadded",child:null},lc={type:"childremoved",child:null};class _n extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new B,n=new Ai,i=new po,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Fe}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Mh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(Eh,e)}translateOnAxis(e,n){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(Eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Io.copy(e):Io.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Bs,Io,this.up):mi.lookAt(Io,Bs,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(mi),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yh),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wg),lc.child=e,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yh),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Ag),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,bg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DEFAULT_UP=new B(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new B,gi=new B,uc=new B,_i=new B,Br=new B,kr=new B,Th=new B,hc=new B,fc=new B,dc=new B,pc=new Rt,mc=new Rt,gc=new Rt;class Vn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),gi.subVectors(i,n),uc.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(gi),c=kn.dot(uc),l=gi.dot(gi),u=gi.dot(uc),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,_=(o*u-a*c)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static getInterpolatedAttribute(e,n,i,r,s,o){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,n),mc.fromBufferAttribute(e,i),gc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pc,s.x),o.addScaledVector(mc,s.y),o.addScaledVector(gc,s.z),o}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),gi.subVectors(e,n),kn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),kn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Br.subVectors(r,i),kr.subVectors(s,i),hc.subVectors(e,i);const c=Br.dot(hc),l=kr.dot(hc);if(c<=0&&l<=0)return n.copy(i);fc.subVectors(e,r);const u=Br.dot(fc),h=kr.dot(fc);if(u>=0&&h<=u)return n.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(Br,o);dc.subVectors(e,s);const p=Br.dot(dc),_=kr.dot(dc);if(_>=0&&p<=_)return n.copy(s);const M=p*l-c*_;if(M<=0&&l>=0&&_<=0)return a=l/(l-_),n.copy(i).addScaledVector(kr,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Th.subVectors(s,r),a=(h-u)/(h-u+(p-_)),n.copy(r).addScaledVector(Th,a);const f=1/(m+M+d);return o=M*f,a=d*f,n.copy(i).addScaledVector(Br,o).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},No={h:0,s:0,l:0};function _c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=Zl(e,1),n=ze(n,0,1),i=ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=_c(o,s,e+1/3),this.g=_c(o,s,e),this.b=_c(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gn){const i=Nd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Ke.fromWorkingColorSpace(Yt.copy(this),e),Math.round(ze(Yt.r*255,0,255))*65536+Math.round(ze(Yt.g*255,0,255))*256+Math.round(ze(Yt.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=gn){Ke.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(No);const i=Ws(Ii.h,No.h,n),r=Ws(Ii.s,No.s,n),s=Ws(Ii.l,No.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new it;it.NAMES=Nd;let Rg=0;class Aa extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Zr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Bc,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oc&&(i.blendSrc=this.blendSrc),this.blendDst!==Bc&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ql extends Aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new B,Fo=new at;let Cg=0;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cg++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=uh,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fo.fromBufferAttribute(this,n),Fo.applyMatrix3(e),this.setXY(n,Fo.x,Fo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uh&&(e.usage=this.usage),e}}class Fd extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Od extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ri extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Pg=0;const Rn=new xt,vc=new _n,zr=new B,fn=new mo,ks=new mo,zt=new B;class Zi extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dd(e)?Od:Fd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ri(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(fn.min,ks.min),fn.expandByPoint(zt),zt.addVectors(fn.max,ks.max),fn.expandByPoint(zt)):(fn.expandByPoint(ks.min),fn.expandByPoint(ks.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)zt.fromBufferAttribute(a,l),c&&(zr.fromBufferAttribute(e,l),zt.add(zr)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new B,c[I]=new B;const l=new B,u=new B,h=new B,d=new at,p=new at,_=new at,M=new B,m=new B;function f(I,E,x){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,x),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,x),u.sub(l),h.sub(l),p.sub(d),_.sub(d);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(C),a[I].add(M),a[E].add(M),a[x].add(M),c[I].add(m),c[E].add(m),c[x].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,E=A.length;I<E;++I){const x=A[I],C=x.start,q=x.count;for(let k=C,W=C+q;k<W;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new B,y=new B,U=new B,w=new B;function R(I){U.fromBufferAttribute(r,I),w.copy(U);const E=a[I];T.copy(E),T.sub(U.multiplyScalar(U.dot(E))).normalize(),y.crossVectors(w,E);const C=y.dot(c[I])<0?-1:1;o.setXYZW(I,T.x,T.y,T.z,C)}for(let I=0,E=A.length;I<E;++I){const x=A[I],C=x.start,q=x.count;for(let k=C,W=C+q;k<W;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,c=new B,l=new B,u=new B,h=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let M=0,m=c.length;M<m;M++){a.isInterleavedBufferAttribute?p=c[M]*a.data.stride+a.offset:p=c[M]*u;for(let f=0;f<u;f++)d[_++]=l[p++]}return new ii(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zi,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);n.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,i);c.push(p)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ah=new xt,nr=new Sg,Oo=new Jl,bh=new B,Bo=new B,ko=new B,zo=new B,xc=new B,Vo=new B,wh=new B,Go=new B;class ei extends _n{constructor(e=new Zi,n=new Ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Vo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(xc.fromBufferAttribute(h,e),o?Vo.addScaledVector(xc,u):Vo.addScaledVector(xc.sub(n),u))}n.add(Vo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(Oo.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Oo,bh)===null||nr.origin.distanceToSquared(bh)>(e.far-e.near)**2))&&(Ah.copy(s).invert(),nr.copy(e.ray).applyMatrix4(Ah),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){const m=d[_],f=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,U=T;y<U;y+=3){const w=a.getX(y),R=a.getX(y+1),I=a.getX(y+2);r=Ho(this,f,e,i,l,u,h,w,R,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){const A=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);r=Ho(this,o,e,i,l,u,h,A,T,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){const m=d[_],f=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,U=T;y<U;y+=3){const w=y,R=y+1,I=y+2;r=Ho(this,f,e,i,l,u,h,w,R,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){const A=m,T=m+1,y=m+2;r=Ho(this,o,e,i,l,u,h,A,T,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Lg(t,e,n,i,r,s,o,a){let c;if(e.side===cn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===qi,a),c===null)return null;Go.copy(a),Go.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Go);return l<n.near||l>n.far?null:{distance:l,point:Go.clone(),object:t}}function Ho(t,e,n,i,r,s,o,a,c,l){t.getVertexPosition(a,Bo),t.getVertexPosition(c,ko),t.getVertexPosition(l,zo);const u=Lg(t,e,n,i,Bo,ko,zo,wh);if(u){const h=new B;Vn.getBarycoord(wh,Bo,ko,zo,h),r&&(u.uv=Vn.getInterpolatedAttribute(r,a,c,l,h,new at)),s&&(u.uv1=Vn.getInterpolatedAttribute(s,a,c,l,h,new at)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,c,l,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new B,materialIndex:0};Vn.getNormal(Bo,ko,zo,d.normal),u.face=d,u.barycoord=h}return u}class go extends Zi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ri(l,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(h,2));function _(M,m,f,A,T,y,U,w,R,I,E){const x=y/R,C=U/I,q=y/2,k=U/2,W=w/2,Z=R+1,H=I+1;let Q=0,V=0;const ie=new B;for(let ue=0;ue<H;ue++){const Ee=ue*C-k;for(let ke=0;ke<Z;ke++){const st=ke*x-q;ie[M]=st*A,ie[m]=Ee*T,ie[f]=W,l.push(ie.x,ie.y,ie.z),ie[M]=0,ie[m]=0,ie[f]=w>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(ke/R),h.push(1-ue/I),Q+=1}}for(let ue=0;ue<I;ue++)for(let Ee=0;Ee<R;Ee++){const ke=d+Ee+Z*ue,st=d+Ee+Z*(ue+1),X=d+(Ee+1)+Z*(ue+1),ee=d+(Ee+1)+Z*ue;c.push(ke,st,ee),c.push(st,X,ee),V+=6}a.addGroup(p,V,E),p+=V,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=os(t[n]);for(const r in i)e[r]=i[r]}return e}function Dg(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Bd(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Ug={clone:os,merge:en};var Ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ig,this.fragmentShader=Ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=Dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class kd extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new B,Rh=new at,Ch=new at;class an extends kd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,Rh,Ch),n.subVectors(Ch,Rh)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($r*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vr=-90,Gr=1;class Fg extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(Vr,Gr,e,n);r.layers=this.layers,this.add(r);const s=new an(Vr,Gr,e,n);s.layers=this.layers,this.add(s);const o=new an(Vr,Gr,e,n);o.layers=this.layers,this.add(o);const a=new an(Vr,Gr,e,n);a.layers=this.layers,this.add(a);const c=new an(Vr,Gr,e,n);c.layers=this.layers,this.add(c);const l=new an(Vr,Gr,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,c]=n;for(const l of n)this.remove(l);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class zd extends nn{constructor(e=[],n=is,i,r,s,o,a,c,l,u){super(e,n,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Og extends Er{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zd(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new go(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Hi});s.uniforms.tEquirect.value=n;const o=new ei(r,s),a=n.minFilter;return n.minFilter===dr&&(n.minFilter=Qn),new Fg(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Wo extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bg={type:"move"};class Mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),f=this._getHandJoint(l,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Wo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class kg extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Sc=new B,zg=new B,Vg=new Fe;class cr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Sc.subVectors(i,n).cross(zg.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Sc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Vg.getNormalMatrix(e),r=this.coplanarPoint(Sc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Jl,Xo=new B;class Vd{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,o=new cr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],p=r[8],_=r[9],M=r[10],m=r[11],f=r[12],A=r[13],T=r[14],y=r[15];if(i[0].setComponents(c-s,d-l,m-p,y-f).normalize(),i[1].setComponents(c+s,d+l,m+p,y+f).normalize(),i[2].setComponents(c+o,d+u,m+_,y+A).normalize(),i[3].setComponents(c-o,d-u,m-_,y-A).normalize(),i[4].setComponents(c-a,d-h,m-M,y-T).normalize(),n===Ei)i[5].setComponents(c+a,d+h,m+M,y+T).normalize();else if(n===ga)i[5].setComponents(a,h,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xo.x=r.normal.x>0?e.max.x:e.min.x,Xo.y=r.normal.y>0?e.max.y:e.min.y,Xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gd extends nn{constructor(e,n,i=Sr,r,s,o,a=Xn,c=Xn,l,u=eo){if(u!==eo&&u!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ba extends Zi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=n/c,p=[],_=[],M=[],m=[];for(let f=0;f<u;f++){const A=f*d-o;for(let T=0;T<l;T++){const y=T*h-s;_.push(y,-A,0),M.push(0,0,1),m.push(T/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<a;A++){const T=A+l*f,y=A+l*(f+1),U=A+1+l*(f+1),w=A+1+l*f;p.push(T,y,w),p.push(y,U,w)}this.setIndex(p),this.setAttribute("position",new ri(_,3)),this.setAttribute("normal",new ri(M,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}class eu extends Zi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new B,d=new B,p=[],_=[],M=[],m=[];for(let f=0;f<=i;f++){const A=[],T=f/i;let y=0;f===0&&o===0?y=.5/n:f===i&&c===Math.PI&&(y=-.5/n);for(let U=0;U<=n;U++){const w=U/n;h.x=-e*Math.cos(r+w*s)*Math.sin(o+T*a),h.y=e*Math.cos(o+T*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+T*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),M.push(d.x,d.y,d.z),m.push(w+y,1-T),A.push(l++)}u.push(A)}for(let f=0;f<i;f++)for(let A=0;A<n;A++){const T=u[f][A+1],y=u[f][A],U=u[f+1][A],w=u[f+1][A+1];(f!==0||o>0)&&p.push(T,y,w),(f!==i-1||c<Math.PI)&&p.push(y,U,w)}this.setIndex(p),this.setAttribute("position",new ri(_,3)),this.setAttribute("normal",new ri(M,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gg extends Aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hg extends Aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ph={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Wg{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Xg=new Wg;class tu{constructor(e){this.manager=e!==void 0?e:Xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}tu.DEFAULT_MATERIAL_NAME="__DEFAULT";class qg extends tu{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ph.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=io("img");function c(){u(),Ph.add(e,this),n&&n(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Yg extends tu{constructor(e){super(e)}load(e,n,i,r){const s=new nn,o=new qg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class jg extends kd{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Lh=new xt,Dh=new xt,rr=new xt;class Kg{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new an,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new an,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const n=this._cache;if(n.focus!==e.focus||n.fov!==e.fov||n.aspect!==e.aspect*this.aspect||n.near!==e.near||n.far!==e.far||n.zoom!==e.zoom||n.eyeSep!==this.eyeSep){n.focus=e.focus,n.fov=e.fov,n.aspect=e.aspect*this.aspect,n.near=e.near,n.far=e.far,n.zoom=e.zoom,n.eyeSep=this.eyeSep,rr.copy(e.projectionMatrix);const r=n.eyeSep/2,s=r*n.near/n.focus,o=n.near*Math.tan($r*n.fov*.5)/n.zoom;let a,c;Dh.elements[12]=-r,Lh.elements[12]=r,a=-o*n.aspect+s,c=o*n.aspect+s,rr.elements[0]=2*n.near/(c-a),rr.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(rr),a=-o*n.aspect-s,c=o*n.aspect-s,rr.elements[0]=2*n.near/(c-a),rr.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(rr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Dh),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Lh)}}class Zg extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Uh(t,e,n,i){const r=$g(i);switch(n){case bd:return t*e;case Rd:return t*e/r.components*r.byteLength;case Yl:return t*e/r.components*r.byteLength;case Cd:return t*e*2/r.components*r.byteLength;case jl:return t*e*2/r.components*r.byteLength;case wd:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case Kl:return t*e*4/r.components*r.byteLength;case na:case ia:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ra:case sa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kc:case $c:return Math.max(t,16)*Math.max(e,8)/4;case jc:case Zc:return Math.max(t,8)*Math.max(e,8)/2;case Jc:case Qc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case rl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case fl:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case oa:case ml:case gl:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Pd:case _l:return Math.ceil(t/4)*Math.ceil(e/4)*8;case vl:case xl:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $g(t){switch(t){case Ti:case yd:return{byteLength:1,components:1};case Js:case Td:case fo:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case Sr:case Wl:case Si:return{byteLength:4,components:1};case Ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hd(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Jg(t){const e=new WeakMap;function n(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=t.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=t.SHORT;else if(l instanceof Uint32Array)p=t.UNSIGNED_INT;else if(l instanceof Int32Array)p=t.INT;else if(l instanceof Int8Array)p=t.BYTE;else if(l instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(t.bindBuffer(l,a),h.length===0)t.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],M=h[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,h[d]=M)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const M=h[p];t.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,c1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,E1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,y1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C1="gl_FragColor = linearToOutputTexel( gl_FragColor );",P1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,F1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,m_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,__=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,E_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,R_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,N_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,F_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,O_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,G_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,s2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,c2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,P2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Qg,alphahash_pars_fragment:e1,alphamap_fragment:t1,alphamap_pars_fragment:n1,alphatest_fragment:i1,alphatest_pars_fragment:r1,aomap_fragment:s1,aomap_pars_fragment:o1,batching_pars_vertex:a1,batching_vertex:c1,begin_vertex:l1,beginnormal_vertex:u1,bsdfs:h1,iridescence_fragment:f1,bumpmap_pars_fragment:d1,clipping_planes_fragment:p1,clipping_planes_pars_fragment:m1,clipping_planes_pars_vertex:g1,clipping_planes_vertex:_1,color_fragment:v1,color_pars_fragment:x1,color_pars_vertex:M1,color_vertex:S1,common:E1,cube_uv_reflection_fragment:y1,defaultnormal_vertex:T1,displacementmap_pars_vertex:A1,displacementmap_vertex:b1,emissivemap_fragment:w1,emissivemap_pars_fragment:R1,colorspace_fragment:C1,colorspace_pars_fragment:P1,envmap_fragment:L1,envmap_common_pars_fragment:D1,envmap_pars_fragment:U1,envmap_pars_vertex:I1,envmap_physical_pars_fragment:X1,envmap_vertex:N1,fog_vertex:F1,fog_pars_vertex:O1,fog_fragment:B1,fog_pars_fragment:k1,gradientmap_pars_fragment:z1,lightmap_pars_fragment:V1,lights_lambert_fragment:G1,lights_lambert_pars_fragment:H1,lights_pars_begin:W1,lights_toon_fragment:q1,lights_toon_pars_fragment:Y1,lights_phong_fragment:j1,lights_phong_pars_fragment:K1,lights_physical_fragment:Z1,lights_physical_pars_fragment:$1,lights_fragment_begin:J1,lights_fragment_maps:Q1,lights_fragment_end:e_,logdepthbuf_fragment:t_,logdepthbuf_pars_fragment:n_,logdepthbuf_pars_vertex:i_,logdepthbuf_vertex:r_,map_fragment:s_,map_pars_fragment:o_,map_particle_fragment:a_,map_particle_pars_fragment:c_,metalnessmap_fragment:l_,metalnessmap_pars_fragment:u_,morphinstance_vertex:h_,morphcolor_vertex:f_,morphnormal_vertex:d_,morphtarget_pars_vertex:p_,morphtarget_vertex:m_,normal_fragment_begin:g_,normal_fragment_maps:__,normal_pars_fragment:v_,normal_pars_vertex:x_,normal_vertex:M_,normalmap_pars_fragment:S_,clearcoat_normal_fragment_begin:E_,clearcoat_normal_fragment_maps:y_,clearcoat_pars_fragment:T_,iridescence_pars_fragment:A_,opaque_fragment:b_,packing:w_,premultiplied_alpha_fragment:R_,project_vertex:C_,dithering_fragment:P_,dithering_pars_fragment:L_,roughnessmap_fragment:D_,roughnessmap_pars_fragment:U_,shadowmap_pars_fragment:I_,shadowmap_pars_vertex:N_,shadowmap_vertex:F_,shadowmask_pars_fragment:O_,skinbase_vertex:B_,skinning_pars_vertex:k_,skinning_vertex:z_,skinnormal_vertex:V_,specularmap_fragment:G_,specularmap_pars_fragment:H_,tonemapping_fragment:W_,tonemapping_pars_fragment:X_,transmission_fragment:q_,transmission_pars_fragment:Y_,uv_pars_fragment:j_,uv_pars_vertex:K_,uv_vertex:Z_,worldpos_vertex:$_,background_vert:J_,background_frag:Q_,backgroundCube_vert:e2,backgroundCube_frag:t2,cube_vert:n2,cube_frag:i2,depth_vert:r2,depth_frag:s2,distanceRGBA_vert:o2,distanceRGBA_frag:a2,equirect_vert:c2,equirect_frag:l2,linedashed_vert:u2,linedashed_frag:h2,meshbasic_vert:f2,meshbasic_frag:d2,meshlambert_vert:p2,meshlambert_frag:m2,meshmatcap_vert:g2,meshmatcap_frag:_2,meshnormal_vert:v2,meshnormal_frag:x2,meshphong_vert:M2,meshphong_frag:S2,meshphysical_vert:E2,meshphysical_frag:y2,meshtoon_vert:T2,meshtoon_frag:A2,points_vert:b2,points_frag:w2,shadow_vert:R2,shadow_frag:C2,sprite_vert:P2,sprite_frag:L2},te={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Jn={basic:{uniforms:en([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:en([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new it(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:en([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:en([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:en([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new it(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:en([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:en([te.points,te.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:en([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:en([te.common,te.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:en([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:en([te.sprite,te.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:en([te.common,te.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:en([te.lights,te.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Jn.physical={uniforms:en([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const qo={r:0,b:0,g:0},sr=new Ai,D2=new xt;function U2(t,e,n,i,r,s,o){const a=new it(0);let c=s===!0?0:1,l,u,h=null,d=0,p=null;function _(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?n:e).get(y)),y}function M(T){let y=!1;const U=_(T);U===null?f(a,c):U&&U.isColor&&(f(U,1),y=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(T,y){const U=_(y);U&&(U.isCubeTexture||U.mapping===Ta)?(u===void 0&&(u=new ei(new go(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:os(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),sr.copy(y.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(D2.makeRotationFromEuler(sr)),u.material.toneMapped=Ke.getTransfer(U.colorSpace)!==nt,(h!==U||d!==U.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=U,d=U.version,p=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(l===void 0&&(l=new ei(new ba(2,2),new Yi({name:"BackgroundMaterial",uniforms:os(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=U,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(U.colorSpace)!==nt,U.matrixAutoUpdate===!0&&U.updateMatrix(),l.material.uniforms.uvTransform.value.copy(U.matrix),(h!==U||d!==U.version||p!==t.toneMapping)&&(l.material.needsUpdate=!0,h=U,d=U.version,p=t.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,y){T.getRGB(qo,Bd(t)),i.buffers.color.setClear(qo.r,qo.g,qo.b,y,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(a,c)},render:M,addToRenderList:m,dispose:A}}function I2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,C,q,k,W){let Z=!1;const H=h(k,q,C);s!==H&&(s=H,l(s.object)),Z=p(x,k,q,W),Z&&_(x,k,q,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(x,C,q,k),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return t.createVertexArray()}function l(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function h(x,C,q){const k=q.wireframe===!0;let W=i[x.id];W===void 0&&(W={},i[x.id]=W);let Z=W[C.id];Z===void 0&&(Z={},W[C.id]=Z);let H=Z[k];return H===void 0&&(H=d(c()),Z[k]=H),H}function d(x){const C=[],q=[],k=[];for(let W=0;W<n;W++)C[W]=0,q[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:q,attributeDivisors:k,object:x,attributes:{},index:null}}function p(x,C,q,k){const W=s.attributes,Z=C.attributes;let H=0;const Q=q.getAttributes();for(const V in Q)if(Q[V].location>=0){const ue=W[V];let Ee=Z[V];if(Ee===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Ee=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Ee=x.instanceColor)),ue===void 0||ue.attribute!==Ee||Ee&&ue.data!==Ee.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function _(x,C,q,k){const W={},Z=C.attributes;let H=0;const Q=q.getAttributes();for(const V in Q)if(Q[V].location>=0){let ue=Z[V];ue===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor));const Ee={};Ee.attribute=ue,ue&&ue.data&&(Ee.data=ue.data),W[V]=Ee,H++}s.attributes=W,s.attributesNum=H,s.index=k}function M(){const x=s.newAttributes;for(let C=0,q=x.length;C<q;C++)x[C]=0}function m(x){f(x,0)}function f(x,C){const q=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;q[x]=1,k[x]===0&&(t.enableVertexAttribArray(x),k[x]=1),W[x]!==C&&(t.vertexAttribDivisor(x,C),W[x]=C)}function A(){const x=s.newAttributes,C=s.enabledAttributes;for(let q=0,k=C.length;q<k;q++)C[q]!==x[q]&&(t.disableVertexAttribArray(q),C[q]=0)}function T(x,C,q,k,W,Z,H){H===!0?t.vertexAttribIPointer(x,C,q,W,Z):t.vertexAttribPointer(x,C,q,k,W,Z)}function y(x,C,q,k){M();const W=k.attributes,Z=q.getAttributes(),H=C.defaultAttributeValues;for(const Q in Z){const V=Z[Q];if(V.location>=0){let ie=W[Q];if(ie===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor)),ie!==void 0){const ue=ie.normalized,Ee=ie.itemSize,ke=e.get(ie);if(ke===void 0)continue;const st=ke.buffer,X=ke.type,ee=ke.bytesPerElement,me=X===t.INT||X===t.UNSIGNED_INT||ie.gpuType===Wl;if(ie.isInterleavedBufferAttribute){const re=ie.data,we=re.stride,$e=ie.offset;if(re.isInstancedInterleavedBuffer){for(let Le=0;Le<V.locationSize;Le++)f(V.location+Le,re.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Le=0;Le<V.locationSize;Le++)m(V.location+Le);t.bindBuffer(t.ARRAY_BUFFER,st);for(let Le=0;Le<V.locationSize;Le++)T(V.location+Le,Ee/V.locationSize,X,ue,we*ee,($e+Ee/V.locationSize*Le)*ee,me)}else{if(ie.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)f(V.location+re,ie.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let re=0;re<V.locationSize;re++)m(V.location+re);t.bindBuffer(t.ARRAY_BUFFER,st);for(let re=0;re<V.locationSize;re++)T(V.location+re,Ee/V.locationSize,X,ue,Ee*ee,Ee/V.locationSize*re*ee,me)}}else if(H!==void 0){const ue=H[Q];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(V.location,ue);break;case 3:t.vertexAttrib3fv(V.location,ue);break;case 4:t.vertexAttrib4fv(V.location,ue);break;default:t.vertexAttrib1fv(V.location,ue)}}}}A()}function U(){I();for(const x in i){const C=i[x];for(const q in C){const k=C[q];for(const W in k)u(k[W].object),delete k[W];delete C[q]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const C=i[x.id];for(const q in C){const k=C[q];for(const W in k)u(k[W].object),delete k[W];delete C[q]}delete i[x.id]}function R(x){for(const C in i){const q=i[C];if(q[x.id]===void 0)continue;const k=q[x.id];for(const W in k)u(k[W].object),delete k[W];delete q[x.id]}}function I(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:A}}function N2(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];n.update(p,i,1)}function c(l,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let _=0;for(let M=0;M<h;M++)_+=u[M]*d[M];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function F2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Hn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ti&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Si&&!I)}function c(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:U,maxSamples:w}}function O2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new cr,a=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const A=s?0:i,T=A*4;let y=f.clippingState||null;c.value=y,y=u(_,d,T,p);for(let U=0;U!==T;++U)y[U]=n[U];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,_){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=c.value,_!==!0||m===null){const f=p+M*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,y=p;T!==M;++T,y+=4)o.copy(h[T]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function B2(t){let e=new WeakMap;function n(o,a){return a===Zs?o.mapping=is:a===$s&&(o.mapping=rs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zs||a===$s)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Og(c.height);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",r),n(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const jr=4,Ih=[.125,.215,.35,.446,.526,.582],hr=20,Ec=new jg,Nh=new it;let yc=null,Tc=0,Ac=0,bc=!1;const lr=(1+Math.sqrt(5))/2,Hr=1/lr,Fh=[new B(-lr,Hr,0),new B(lr,Hr,0),new B(-Hr,0,lr),new B(Hr,0,lr),new B(0,lr,-Hr),new B(0,lr,Hr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],k2=new B;class Oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=k2}=s;yc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yc,Tc,Ac),this._renderer.xr.enabled=bc,e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:fo,format:Hn,colorSpace:ss,depthBuffer:!1},r=Bh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z2(s)),this._blurMaterial=V2(s,e,n)}return r}_compileMaterial(e){const n=new ei(this._lodPlanes[0],e);this._renderer.compile(n,Ec)}_sceneToCubeUV(e,n,i,r,s){const c=new an(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Nh),h.toneMapping=Wi,h.autoClear=!1;const _=new Ql({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),M=new ei(new go,_);let m=!1;const f=e.background;f?f.isColor&&(_.color.copy(f),e.background=null,m=!0):(_.color.copy(Nh),m=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[A],s.y,s.z)):T===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[A]));const y=this._cubeSize;Yo(r,T*y,A>2?y:0,y,y),h.setRenderTarget(r),m&&h.render(M,c),h.render(e,c)}M.geometry.dispose(),M.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=f}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===is||e.mapping===rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ei(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Yo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,Ec)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Fh[(r-s-1)%Fh.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ei(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hr-1),M=s/_,m=isFinite(s)?1+Math.floor(u*M):hr;m>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);const f=[];let A=0;for(let R=0;R<hr;++R){const I=R/M,E=Math.exp(-I*I/2);f.push(E),R===0?A+=E:R<m&&(A+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const y=this._sizeLods[r],U=3*y*(r>T-jr?r-T+jr:0),w=4*(this._cubeSize-y);Yo(n,U,w,3*y,2*y),c.setRenderTarget(n),c.render(h,Ec)}}function z2(t){const e=[],n=[],i=[];let r=t;const s=t-jr+1+Ih.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let c=1/a;o>t-jr?c=Ih[o-t+jr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,M=3,m=2,f=1,A=new Float32Array(M*_*p),T=new Float32Array(m*_*p),y=new Float32Array(f*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,I=w>2?0:-1,E=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];A.set(E,M*_*w),T.set(d,m*_*w);const x=[w,w,w,w,w,w];y.set(x,f*_*w)}const U=new Zi;U.setAttribute("position",new ii(A,M)),U.setAttribute("uv",new ii(T,m)),U.setAttribute("faceIndex",new ii(y,f)),e.push(U),r>jr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bh(t,e,n){const i=new Er(t,e,n);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function V2(t,e,n){const i=new Float32Array(hr),r=new B(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function kh(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function zh(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function G2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Zs||c===$s,u=c===is||c===rs;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Oh(t)),h=l?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Oh(t)),h=l?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function H2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ca("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function W2(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,_=h.attributes.position;let M=0;if(p!==null){const A=p.array;M=p.version;for(let T=0,y=A.length;T<y;T+=3){const U=A[T+0],w=A[T+1],R=A[T+2];d.push(U,w,w,R,R,U)}}else if(_!==void 0){const A=_.array;M=_.version;for(let T=0,y=A.length/3-1;T<y;T+=3){const U=T+0,w=T+1,R=T+2;d.push(U,w,w,R,R,U)}}else return;const m=new(Dd(d)?Od:Fd)(d,1);m.version=M;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function X2(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function l(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*o,_),n.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];n.update(m,i,1)}function h(d,p,_,M){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,M,0,_);let f=0;for(let A=0;A<_;A++)f+=p[A]*M[A];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function q2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Y2(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let E=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let T=0;p===!0&&(T=1),_===!0&&(T=2),M===!0&&(T=3);let y=a.attributes.position.count*T,U=1;y>e.maxTextureSize&&(U=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*U*4*h),R=new Ud(w,y,U,h);R.type=Si,R.needsUpdate=!0;const I=T*4;for(let x=0;x<h;x++){const C=m[x],q=f[x],k=A[x],W=y*U*4*x;for(let Z=0;Z<C.count;Z++){const H=Z*I;p===!0&&(r.fromBufferAttribute(C,Z),w[W+H+0]=r.x,w[W+H+1]=r.y,w[W+H+2]=r.z,w[W+H+3]=0),_===!0&&(r.fromBufferAttribute(q,Z),w[W+H+4]=r.x,w[W+H+5]=r.y,w[W+H+6]=r.z,w[W+H+7]=0),M===!0&&(r.fromBufferAttribute(k,Z),w[W+H+8]=r.x,w[W+H+9]=r.y,w[W+H+10]=r.z,w[W+H+11]=k.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new at(y,U)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let M=0;M<l.length;M++)p+=l[M];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",_),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function j2(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}const Wd=new nn,Vh=new Gd(1,1),Xd=new Ud,qd=new xg,Yd=new zd,Gh=[],Hh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),qh=new Float32Array(4);function Es(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Gh[r];if(s===void 0&&(s=new Float32Array(r),Gh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function wa(t,e){let n=Hh[e];n===void 0&&(n=new Int32Array(e),Hh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function K2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function J2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function Q2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;qh.set(i),t.uniformMatrix2fv(this.addr,!1,qh),Bt(n,i)}}function e3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;Xh.set(i),t.uniformMatrix3fv(this.addr,!1,Xh),Bt(n,i)}}function t3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;Wh.set(i),t.uniformMatrix4fv(this.addr,!1,Wh),Bt(n,i)}}function n3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function i3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function r3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function s3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function o3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function a3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function c3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function l3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function u3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Vh.compareFunction=Ld,s=Vh):s=Wd,n.setTexture2D(e||s,r)}function h3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||qd,r)}function f3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Yd,r)}function d3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Xd,r)}function p3(t){switch(t){case 5126:return K2;case 35664:return Z2;case 35665:return $2;case 35666:return J2;case 35674:return Q2;case 35675:return e3;case 35676:return t3;case 5124:case 35670:return n3;case 35667:case 35671:return i3;case 35668:case 35672:return r3;case 35669:case 35673:return s3;case 5125:return o3;case 36294:return a3;case 36295:return c3;case 36296:return l3;case 35678:case 36198:case 36298:case 36306:case 35682:return u3;case 35679:case 36299:case 36307:return h3;case 35680:case 36300:case 36308:case 36293:return f3;case 36289:case 36303:case 36311:case 36292:return d3}}function m3(t,e){t.uniform1fv(this.addr,e)}function g3(t,e){const n=Es(e,this.size,2);t.uniform2fv(this.addr,n)}function _3(t,e){const n=Es(e,this.size,3);t.uniform3fv(this.addr,n)}function v3(t,e){const n=Es(e,this.size,4);t.uniform4fv(this.addr,n)}function x3(t,e){const n=Es(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function M3(t,e){const n=Es(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function S3(t,e){const n=Es(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function E3(t,e){t.uniform1iv(this.addr,e)}function y3(t,e){t.uniform2iv(this.addr,e)}function T3(t,e){t.uniform3iv(this.addr,e)}function A3(t,e){t.uniform4iv(this.addr,e)}function b3(t,e){t.uniform1uiv(this.addr,e)}function w3(t,e){t.uniform2uiv(this.addr,e)}function R3(t,e){t.uniform3uiv(this.addr,e)}function C3(t,e){t.uniform4uiv(this.addr,e)}function P3(t,e,n){const i=this.cache,r=e.length,s=wa(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Wd,s[o])}function L3(t,e,n){const i=this.cache,r=e.length,s=wa(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||qd,s[o])}function D3(t,e,n){const i=this.cache,r=e.length,s=wa(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Yd,s[o])}function U3(t,e,n){const i=this.cache,r=e.length,s=wa(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Xd,s[o])}function I3(t){switch(t){case 5126:return m3;case 35664:return g3;case 35665:return _3;case 35666:return v3;case 35674:return x3;case 35675:return M3;case 35676:return S3;case 5124:case 35670:return E3;case 35667:case 35671:return y3;case 35668:case 35672:return T3;case 35669:case 35673:return A3;case 5125:return b3;case 36294:return w3;case 36295:return R3;case 36296:return C3;case 35678:case 36198:case 36298:case 36306:case 35682:return P3;case 35679:case 36299:case 36307:return L3;case 35680:case 36300:case 36308:case 36293:return D3;case 36289:case 36303:case 36311:case 36292:return U3}}class N3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=p3(n.type)}}class F3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=I3(n.type)}}class O3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const wc=/(\w+)(\])?(\[|\.)?/g;function Yh(t,e){t.seq.push(e),t.map[e.id]=e}function B3(t,e,n){const i=t.name,r=i.length;for(wc.lastIndex=0;;){const s=wc.exec(i),o=wc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Yh(n,l===void 0?new N3(a,t,e):new F3(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new O3(a),Yh(n,h)),n=h}}}class la{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);B3(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function jh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const k3=37297;let z3=0;function V3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Kh=new Fe;function G3(t){Ke._getMatrix(Kh,Ke.workingColorSpace,t);const e=`mat3( ${Kh.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case ma:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Zh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+V3(t.getShaderSource(e),o)}else return r}function H3(t,e){const n=G3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function W3(t,e){let n;switch(e){case P0:n="Linear";break;case L0:n="Reinhard";break;case D0:n="Cineon";break;case Sd:n="ACESFilmic";break;case I0:n="AgX";break;case N0:n="Neutral";break;case U0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jo=new B;function X3(){Ke.getLuminanceCoefficients(jo);const t=jo.x.toFixed(4),e=jo.y.toFixed(4),n=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function Y3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function j3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Vs(t){return t!==""}function $h(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(t){return t.replace(K3,$3)}const Z3=new Map;function $3(t,e){let n=Be[e];if(n===void 0){const i=Z3.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ml(n)}const J3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(t){return t.replace(J3,Q3)}function Q3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ef(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ev(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===l0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function tv(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case is:case rs:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nv(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function iv(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Md:e="ENVMAP_BLENDING_MULTIPLY";break;case R0:e="ENVMAP_BLENDING_MIX";break;case C0:e="ENVMAP_BLENDING_ADD";break}return e}function rv(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function sv(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=ev(n),l=tv(n),u=nv(n),h=iv(n),d=rv(n),p=q3(n),_=Y3(s),M=r.createProgram();let m,f,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Vs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Vs).join(`
`),f.length>0&&(f+=`
`)):(m=[ef(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),f=[ef(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Be.tonemapping_pars_fragment:"",n.toneMapping!==Wi?W3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,H3("linearToOutputTexel",n.outputColorSpace),X3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vs).join(`
`)),o=Ml(o),o=$h(o,n),o=Jh(o,n),a=Ml(a),a=$h(a,n),a=Jh(a,n),o=Qh(o),a=Qh(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=A+m+o,y=A+f+a,U=jh(r,r.VERTEX_SHADER,T),w=jh(r,r.FRAGMENT_SHADER,y);r.attachShader(M,U),r.attachShader(M,w),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(C){if(t.debug.checkShaderErrors){const q=r.getProgramInfoLog(M).trim(),k=r.getShaderInfoLog(U).trim(),W=r.getShaderInfoLog(w).trim();let Z=!0,H=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,U,w);else{const Q=Zh(r,U,"vertex"),V=Zh(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+Q+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(k===""||W==="")&&(H=!1);H&&(C.diagnostics={runnable:Z,programLog:q,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:f}})}r.deleteShader(U),r.deleteShader(w),I=new la(r,M),E=j3(r,M)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,k3)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=z3++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=w,this}let ov=0;class av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new cv(e),n.set(e,i)),i}}class cv{constructor(e){this.id=ov++,this.code=e,this.usedTimes=0}}function lv(t,e,n,i,r,s,o){const a=new Id,c=new av,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,x,C,q,k){const W=q.fog,Z=k.geometry,H=E.isMeshStandardMaterial?q.environment:null,Q=(E.isMeshStandardMaterial?n:e).get(E.envMap||H),V=Q&&Q.mapping===Ta?Q.image.height:null,ie=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ee=ue!==void 0?ue.length:0;let ke=0;Z.morphAttributes.position!==void 0&&(ke=1),Z.morphAttributes.normal!==void 0&&(ke=2),Z.morphAttributes.color!==void 0&&(ke=3);let st,X,ee,me;if(ie){const tt=Jn[ie];st=tt.vertexShader,X=tt.fragmentShader}else st=E.vertexShader,X=E.fragmentShader,c.update(E),ee=c.getVertexShaderID(E),me=c.getFragmentShaderID(E);const re=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),$e=k.isInstancedMesh===!0,Le=k.isBatchedMesh===!0,At=!!E.map,mt=!!E.matcap,Ve=!!Q,b=!!E.aoMap,An=!!E.lightMap,Xe=!!E.bumpMap,Ge=!!E.normalMap,ye=!!E.displacementMap,lt=!!E.emissiveMap,Se=!!E.metalnessMap,S=!!E.roughnessMap,g=E.anisotropy>0,N=E.clearcoat>0,Y=E.dispersion>0,K=E.iridescence>0,G=E.sheen>0,ve=E.transmission>0,se=g&&!!E.anisotropyMap,Re=N&&!!E.clearcoatMap,Ce=N&&!!E.clearcoatNormalMap,$=N&&!!E.clearcoatRoughnessMap,fe=K&&!!E.iridescenceMap,Pe=K&&!!E.iridescenceThicknessMap,Ue=G&&!!E.sheenColorMap,de=G&&!!E.sheenRoughnessMap,He=!!E.specularMap,Oe=!!E.specularColorMap,ct=!!E.specularIntensityMap,P=ve&&!!E.transmissionMap,oe=ve&&!!E.thicknessMap,z=!!E.gradientMap,j=!!E.alphaMap,ce=E.alphaTest>0,ae=!!E.alphaHash,Ne=!!E.extensions;let St=Wi;E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(St=t.toneMapping);const Xt={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:st,fragmentShader:X,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Le,batchingColor:Le&&k._colorsTexture!==null,instancing:$e,instancingColor:$e&&k.instanceColor!==null,instancingMorph:$e&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ss,alphaToCoverage:!!E.alphaToCoverage,map:At,matcap:mt,envMap:Ve,envMapMode:Ve&&Q.mapping,envMapCubeUVHeight:V,aoMap:b,lightMap:An,bumpMap:Xe,normalMap:Ge,displacementMap:d&&ye,emissiveMap:lt,normalMapObjectSpace:Ge&&E.normalMapType===z0,normalMapTangentSpace:Ge&&E.normalMapType===k0,metalnessMap:Se,roughnessMap:S,anisotropy:g,anisotropyMap:se,clearcoat:N,clearcoatMap:Re,clearcoatNormalMap:Ce,clearcoatRoughnessMap:$,dispersion:Y,iridescence:K,iridescenceMap:fe,iridescenceThicknessMap:Pe,sheen:G,sheenColorMap:Ue,sheenRoughnessMap:de,specularMap:He,specularColorMap:Oe,specularIntensityMap:ct,transmission:ve,transmissionMap:P,thicknessMap:oe,gradientMap:z,opaque:E.transparent===!1&&E.blending===Zr&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:ce,alphaHash:ae,combine:E.combine,mapUv:At&&M(E.map.channel),aoMapUv:b&&M(E.aoMap.channel),lightMapUv:An&&M(E.lightMap.channel),bumpMapUv:Xe&&M(E.bumpMap.channel),normalMapUv:Ge&&M(E.normalMap.channel),displacementMapUv:ye&&M(E.displacementMap.channel),emissiveMapUv:lt&&M(E.emissiveMap.channel),metalnessMapUv:Se&&M(E.metalnessMap.channel),roughnessMapUv:S&&M(E.roughnessMap.channel),anisotropyMapUv:se&&M(E.anisotropyMap.channel),clearcoatMapUv:Re&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:de&&M(E.sheenRoughnessMap.channel),specularMapUv:He&&M(E.specularMap.channel),specularColorMapUv:Oe&&M(E.specularColorMap.channel),specularIntensityMapUv:ct&&M(E.specularIntensityMap.channel),transmissionMapUv:P&&M(E.transmissionMap.channel),thicknessMapUv:oe&&M(E.thicknessMap.channel),alphaMapUv:j&&M(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ge||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(At||j),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:we,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ke,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:St,decodeVideoTexture:At&&E.map.isVideoTexture===!0&&Ke.getTransfer(E.map.colorSpace)===nt,decodeVideoTextureEmissive:lt&&E.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(E.emissiveMap.colorSpace)===nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===xi,flipSided:E.side===cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&E.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function f(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)x.push(C),x.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(A(x,E),T(x,E),x.push(t.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function A(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function T(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const x=_[E.type];let C;if(x){const q=Jn[x];C=Ug.clone(q.uniforms)}else C=E.uniforms;return C}function U(E,x){let C;for(let q=0,k=u.length;q<k;q++){const W=u[q];if(W.cacheKey===x){C=W,++C.usedTimes;break}}return C===void 0&&(C=new sv(t,x,E,s),u.push(C)),C}function w(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function R(E){c.remove(E)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:U,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:I}}function uv(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,c){t.get(o)[a]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function hv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function nf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,_,M,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:M,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=M,f.group=m),e++,f}function a(h,d,p,_,M,m){const f=o(h,d,p,_,M,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function c(h,d,p,_,M,m){const f=o(h,d,p,_,M,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function l(h,d){n.length>1&&n.sort(h||hv),i.length>1&&i.sort(d||tf),r.length>1&&r.sort(d||tf)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function fv(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new nf,t.set(i,[o])):r>=s.length?(o=new nf,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function dv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new it};break;case"SpotLight":n={position:new B,direction:new B,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function pv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mv=0;function gv(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _v(t){const e=new dv,n=pv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const r=new B,s=new xt,o=new xt;function a(l){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,M=0,m=0,f=0,A=0,T=0,y=0,U=0,w=0,R=0;l.sort(gv);for(let E=0,x=l.length;E<x;E++){const C=l[E],q=C.color,k=C.intensity,W=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=q.r*k,h+=q.g*k,d+=q.b*k;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],k);R++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,V=n.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=C.shadow.matrix,A++}i.directional[p]=H,p++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(q).multiplyScalar(k),H.distance=W,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[M]=H;const Q=C.shadow;if(C.map&&(i.spotLightMap[U]=C.map,U++,Q.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[M]=Q.matrix,C.castShadow){const V=n.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.spotShadow[M]=V,i.spotShadowMap[M]=Z,y++}M++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(q).multiplyScalar(k),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const Q=C.shadow,V=n.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=C.shadow.matrix,T++}i.point[_]=H,_++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(k),H.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[f]=H,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==p||I.pointLength!==_||I.spotLength!==M||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==A||I.numPointShadows!==T||I.numSpotShadows!==y||I.numSpotMaps!==U||I.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+U-w,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,I.directionalLength=p,I.pointLength=_,I.spotLength=M,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=A,I.numPointShadows=T,I.numSpotShadows=y,I.numSpotMaps=U,I.numLightProbes=R,i.version=mv++)}function c(l,u){let h=0,d=0,p=0,_=0,M=0;const m=u.matrixWorldInverse;for(let f=0,A=l.length;f<A;f++){const T=l[f];if(T.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(T.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),M++}}}return{setup:a,setupView:c,state:i}}function rf(t){const e=new _v(t),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function c(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function vv(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new rf(t),e.set(r,[a])):s>=o.length?(a=new rf(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sv(t,e,n){let i=new Vd;const r=new at,s=new at,o=new Rt,a=new Gg({depthPacking:B0}),c=new Hg,l={},u=n.maxTextureSize,h={[qi]:cn,[cn]:qi,[xi]:xi},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:xv,fragmentShader:Mv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Zi;_.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ei(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let f=this.type;this.render=function(w,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=t.getRenderTarget(),x=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),q=t.state;q.setBlending(Hi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const k=f!==vi&&this.type===vi,W=f===vi&&this.type!==vi;for(let Z=0,H=w.length;Z<H;Z++){const Q=w[Z],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ie=V.getFrameExtents();if(r.multiply(ie),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,V.mapSize.y=s.y)),V.map===null||k===!0||W===!0){const Ee=this.type!==vi?{minFilter:Xn,magFilter:Xn}:{};V.map!==null&&V.map.dispose(),V.map=new Er(r.x,r.y,Ee),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const ue=V.getViewportCount();for(let Ee=0;Ee<ue;Ee++){const ke=V.getViewport(Ee);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),q.viewport(o),V.updateMatrices(Q,Ee),i=V.getFrustum(),y(R,I,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===vi&&A(V,I),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(E,x,C)};function A(w,R){const I=e.update(M);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Er(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,I,d,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,I,p,M,null)}function T(w,R,I,E){let x=null;const C=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)x=C;else if(x=I.isPointLight===!0?c:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const q=x.uuid,k=R.uuid;let W=l[q];W===void 0&&(W={},l[q]=W);let Z=W[k];Z===void 0&&(Z=x.clone(),W[k]=Z,R.addEventListener("dispose",U)),x=Z}if(x.visible=R.visible,x.wireframe=R.wireframe,E===vi?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:h[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const q=t.properties.get(x);q.light=I}return x}function y(w,R,I,E,x){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===vi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const k=e.update(w),W=w.material;if(Array.isArray(W)){const Z=k.groups;for(let H=0,Q=Z.length;H<Q;H++){const V=Z[H],ie=W[V.materialIndex];if(ie&&ie.visible){const ue=T(w,ie,E,x);w.onBeforeShadow(t,w,R,I,k,ue,V),t.renderBufferDirect(I,null,k,ue,w,V),w.onAfterShadow(t,w,R,I,k,ue,V)}}}else if(W.visible){const Z=T(w,W,E,x);w.onBeforeShadow(t,w,R,I,k,Z,null),t.renderBufferDirect(I,null,k,Z,w,null),w.onAfterShadow(t,w,R,I,k,Z,null)}}const q=w.children;for(let k=0,W=q.length;k<W;k++)y(q[k],R,I,E,x)}function U(w){w.target.removeEventListener("dispose",U);for(const I in l){const E=l[I],x=w.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const Ev={[kc]:zc,[Vc]:Wc,[Gc]:Xc,[ns]:Hc,[zc]:kc,[Wc]:Vc,[Xc]:Gc,[Hc]:ns};function yv(t,e){function n(){let P=!1;const oe=new Rt;let z=null;const j=new Rt(0,0,0,0);return{setMask:function(ce){z!==ce&&!P&&(t.colorMask(ce,ce,ce,ce),z=ce)},setLocked:function(ce){P=ce},setClear:function(ce,ae,Ne,St,Xt){Xt===!0&&(ce*=St,ae*=St,Ne*=St),oe.set(ce,ae,Ne,St),j.equals(oe)===!1&&(t.clearColor(ce,ae,Ne,St),j.copy(oe))},reset:function(){P=!1,z=null,j.set(-1,0,0,0)}}}function i(){let P=!1,oe=!1,z=null,j=null,ce=null;return{setReversed:function(ae){if(oe!==ae){const Ne=e.get("EXT_clip_control");ae?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),oe=ae;const St=ce;ce=null,this.setClear(St)}},getReversed:function(){return oe},setTest:function(ae){ae?re(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(ae){z!==ae&&!P&&(t.depthMask(ae),z=ae)},setFunc:function(ae){if(oe&&(ae=Ev[ae]),j!==ae){switch(ae){case kc:t.depthFunc(t.NEVER);break;case zc:t.depthFunc(t.ALWAYS);break;case Vc:t.depthFunc(t.LESS);break;case ns:t.depthFunc(t.LEQUAL);break;case Gc:t.depthFunc(t.EQUAL);break;case Hc:t.depthFunc(t.GEQUAL);break;case Wc:t.depthFunc(t.GREATER);break;case Xc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}j=ae}},setLocked:function(ae){P=ae},setClear:function(ae){ce!==ae&&(oe&&(ae=1-ae),t.clearDepth(ae),ce=ae)},reset:function(){P=!1,z=null,j=null,ce=null,oe=!1}}}function r(){let P=!1,oe=null,z=null,j=null,ce=null,ae=null,Ne=null,St=null,Xt=null;return{setTest:function(tt){P||(tt?re(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(tt){oe!==tt&&!P&&(t.stencilMask(tt),oe=tt)},setFunc:function(tt,Nn,fi){(z!==tt||j!==Nn||ce!==fi)&&(t.stencilFunc(tt,Nn,fi),z=tt,j=Nn,ce=fi)},setOp:function(tt,Nn,fi){(ae!==tt||Ne!==Nn||St!==fi)&&(t.stencilOp(tt,Nn,fi),ae=tt,Ne=Nn,St=fi)},setLocked:function(tt){P=tt},setClear:function(tt){Xt!==tt&&(t.clearStencil(tt),Xt=tt)},reset:function(){P=!1,oe=null,z=null,j=null,ce=null,ae=null,Ne=null,St=null,Xt=null}}}const s=new n,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,M=!1,m=null,f=null,A=null,T=null,y=null,U=null,w=null,R=new it(0,0,0),I=0,E=!1,x=null,C=null,q=null,k=null,W=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Q>=2);let ie=null,ue={};const Ee=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),st=new Rt().fromArray(Ee),X=new Rt().fromArray(ke);function ee(P,oe,z,j){const ce=new Uint8Array(4),ae=t.createTexture();t.bindTexture(P,ae),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<z;Ne++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,j,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(oe+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return ae}const me={};me[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(t.DEPTH_TEST),o.setFunc(ns),Xe(!1),Ge(sh),re(t.CULL_FACE),b(Hi);function re(P){u[P]!==!0&&(t.enable(P),u[P]=!0)}function we(P){u[P]!==!1&&(t.disable(P),u[P]=!1)}function $e(P,oe){return h[P]!==oe?(t.bindFramebuffer(P,oe),h[P]=oe,P===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=oe),P===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Le(P,oe){let z=p,j=!1;if(P){z=d.get(oe),z===void 0&&(z=[],d.set(oe,z));const ce=P.textures;if(z.length!==ce.length||z[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Ne=ce.length;ae<Ne;ae++)z[ae]=t.COLOR_ATTACHMENT0+ae;z.length=ce.length,j=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,j=!0);j&&t.drawBuffers(z)}function At(P){return _!==P?(t.useProgram(P),_=P,!0):!1}const mt={[ur]:t.FUNC_ADD,[h0]:t.FUNC_SUBTRACT,[f0]:t.FUNC_REVERSE_SUBTRACT};mt[d0]=t.MIN,mt[p0]=t.MAX;const Ve={[m0]:t.ZERO,[g0]:t.ONE,[_0]:t.SRC_COLOR,[Oc]:t.SRC_ALPHA,[y0]:t.SRC_ALPHA_SATURATE,[S0]:t.DST_COLOR,[x0]:t.DST_ALPHA,[v0]:t.ONE_MINUS_SRC_COLOR,[Bc]:t.ONE_MINUS_SRC_ALPHA,[E0]:t.ONE_MINUS_DST_COLOR,[M0]:t.ONE_MINUS_DST_ALPHA,[T0]:t.CONSTANT_COLOR,[A0]:t.ONE_MINUS_CONSTANT_COLOR,[b0]:t.CONSTANT_ALPHA,[w0]:t.ONE_MINUS_CONSTANT_ALPHA};function b(P,oe,z,j,ce,ae,Ne,St,Xt,tt){if(P===Hi){M===!0&&(we(t.BLEND),M=!1);return}if(M===!1&&(re(t.BLEND),M=!0),P!==u0){if(P!==m||tt!==E){if((f!==ur||y!==ur)&&(t.blendEquation(t.FUNC_ADD),f=ur,y=ur),tt)switch(P){case Zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case oh:t.blendFunc(t.ONE,t.ONE);break;case ah:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ch:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case oh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case ah:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ch:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,T=null,U=null,w=null,R.set(0,0,0),I=0,m=P,E=tt}return}ce=ce||oe,ae=ae||z,Ne=Ne||j,(oe!==f||ce!==y)&&(t.blendEquationSeparate(mt[oe],mt[ce]),f=oe,y=ce),(z!==A||j!==T||ae!==U||Ne!==w)&&(t.blendFuncSeparate(Ve[z],Ve[j],Ve[ae],Ve[Ne]),A=z,T=j,U=ae,w=Ne),(St.equals(R)===!1||Xt!==I)&&(t.blendColor(St.r,St.g,St.b,Xt),R.copy(St),I=Xt),m=P,E=!1}function An(P,oe){P.side===xi?we(t.CULL_FACE):re(t.CULL_FACE);let z=P.side===cn;oe&&(z=!z),Xe(z),P.blending===Zr&&P.transparent===!1?b(Hi):b(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);const j=P.stencilWrite;a.setTest(j),j&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),lt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(P){x!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),x=P)}function Ge(P){P!==a0?(re(t.CULL_FACE),P!==C&&(P===sh?t.cullFace(t.BACK):P===c0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),C=P}function ye(P){P!==q&&(H&&t.lineWidth(P),q=P)}function lt(P,oe,z){P?(re(t.POLYGON_OFFSET_FILL),(k!==oe||W!==z)&&(t.polygonOffset(oe,z),k=oe,W=z)):we(t.POLYGON_OFFSET_FILL)}function Se(P){P?re(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function S(P){P===void 0&&(P=t.TEXTURE0+Z-1),ie!==P&&(t.activeTexture(P),ie=P)}function g(P,oe,z){z===void 0&&(ie===null?z=t.TEXTURE0+Z-1:z=ie);let j=ue[z];j===void 0&&(j={type:void 0,texture:void 0},ue[z]=j),(j.type!==P||j.texture!==oe)&&(ie!==z&&(t.activeTexture(z),ie=z),t.bindTexture(P,oe||me[P]),j.type=P,j.texture=oe)}function N(){const P=ue[ie];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{t.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{t.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{t.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{t.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{t.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{t.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{t.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{t.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{t.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{t.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(P){st.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),st.copy(P))}function de(P){X.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),X.copy(P))}function He(P,oe){let z=l.get(oe);z===void 0&&(z=new WeakMap,l.set(oe,z));let j=z.get(P);j===void 0&&(j=t.getUniformBlockIndex(oe,P.name),z.set(P,j))}function Oe(P,oe){const j=l.get(oe).get(P);c.get(oe)!==j&&(t.uniformBlockBinding(oe,j,P.__bindingPointIndex),c.set(oe,j))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ie=null,ue={},h={},d=new WeakMap,p=[],_=null,M=!1,m=null,f=null,A=null,T=null,y=null,U=null,w=null,R=new it(0,0,0),I=0,E=!1,x=null,C=null,q=null,k=null,W=null,st.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:we,bindFramebuffer:$e,drawBuffers:Le,useProgram:At,setBlending:b,setMaterial:An,setFlipSided:Xe,setCullFace:Ge,setLineWidth:ye,setPolygonOffset:lt,setScissorTest:Se,activeTexture:S,bindTexture:g,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:fe,texImage3D:Pe,updateUBOMapping:He,uniformBlockBinding:Oe,texStorage2D:Ce,texStorage3D:$,texSubImage2D:G,texSubImage3D:ve,compressedTexSubImage2D:se,compressedTexSubImage3D:Re,scissor:Ue,viewport:de,reset:ct}}function Tv(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return p?new OffscreenCanvas(S,g):io("canvas")}function M(S,g,N){let Y=1;const K=Se(S);if((K.width>N||K.height>N)&&(Y=N/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const G=Math.floor(Y*K.width),ve=Math.floor(Y*K.height);h===void 0&&(h=_(G,ve));const se=g?_(G,ve):h;return se.width=G,se.height=ve,se.getContext("2d").drawImage(S,0,0,G,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+ve+")."),se}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function m(S){return S.generateMipmaps}function f(S){t.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?t.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(S,g,N,Y,K=!1){if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let G=g;if(g===t.RED&&(N===t.FLOAT&&(G=t.R32F),N===t.HALF_FLOAT&&(G=t.R16F),N===t.UNSIGNED_BYTE&&(G=t.R8)),g===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(G=t.R8UI),N===t.UNSIGNED_SHORT&&(G=t.R16UI),N===t.UNSIGNED_INT&&(G=t.R32UI),N===t.BYTE&&(G=t.R8I),N===t.SHORT&&(G=t.R16I),N===t.INT&&(G=t.R32I)),g===t.RG&&(N===t.FLOAT&&(G=t.RG32F),N===t.HALF_FLOAT&&(G=t.RG16F),N===t.UNSIGNED_BYTE&&(G=t.RG8)),g===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(G=t.RG8UI),N===t.UNSIGNED_SHORT&&(G=t.RG16UI),N===t.UNSIGNED_INT&&(G=t.RG32UI),N===t.BYTE&&(G=t.RG8I),N===t.SHORT&&(G=t.RG16I),N===t.INT&&(G=t.RG32I)),g===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(G=t.RGB8UI),N===t.UNSIGNED_SHORT&&(G=t.RGB16UI),N===t.UNSIGNED_INT&&(G=t.RGB32UI),N===t.BYTE&&(G=t.RGB8I),N===t.SHORT&&(G=t.RGB16I),N===t.INT&&(G=t.RGB32I)),g===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(G=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(G=t.RGBA16UI),N===t.UNSIGNED_INT&&(G=t.RGBA32UI),N===t.BYTE&&(G=t.RGBA8I),N===t.SHORT&&(G=t.RGBA16I),N===t.INT&&(G=t.RGBA32I)),g===t.RGB&&N===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),g===t.RGBA){const ve=K?ma:Ke.getTransfer(Y);N===t.FLOAT&&(G=t.RGBA32F),N===t.HALF_FLOAT&&(G=t.RGBA16F),N===t.UNSIGNED_BYTE&&(G=ve===nt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function y(S,g){let N;return S?g===null||g===Sr||g===Qs?N=t.DEPTH24_STENCIL8:g===Si?N=t.DEPTH32F_STENCIL8:g===Js&&(N=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Sr||g===Qs?N=t.DEPTH_COMPONENT24:g===Si?N=t.DEPTH_COMPONENT32F:g===Js&&(N=t.DEPTH_COMPONENT16),N}function U(S,g){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Xn&&S.minFilter!==Qn?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function w(S){const g=S.target;g.removeEventListener("dispose",w),I(g),g.isVideoTexture&&u.delete(g)}function R(S){const g=S.target;g.removeEventListener("dispose",R),x(g)}function I(S){const g=i.get(S);if(g.__webglInit===void 0)return;const N=S.source,Y=d.get(N);if(Y){const K=Y[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(S),Object.keys(Y).length===0&&d.delete(N)}i.remove(S)}function E(S){const g=i.get(S);t.deleteTexture(g.__webglTexture);const N=S.source,Y=d.get(N);delete Y[g.__cacheKey],o.memory.textures--}function x(S){const g=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let K=0;K<g.__webglFramebuffer[Y].length;K++)t.deleteFramebuffer(g.__webglFramebuffer[Y][K]);else t.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)t.deleteFramebuffer(g.__webglFramebuffer[Y]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=S.textures;for(let Y=0,K=N.length;Y<K;Y++){const G=i.get(N[Y]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(N[Y])}i.remove(S)}let C=0;function q(){C=0}function k(){const S=C;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),C+=1,S}function W(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function Z(S,g){const N=i.get(S);if(S.isVideoTexture&&ye(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){const Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,S,g);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+g)}function H(S,g){const N=i.get(S);if(S.version>0&&N.__version!==S.version){X(N,S,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+g)}function Q(S,g){const N=i.get(S);if(S.version>0&&N.__version!==S.version){X(N,S,g);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+g)}function V(S,g){const N=i.get(S);if(S.version>0&&N.__version!==S.version){ee(N,S,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+g)}const ie={[qc]:t.REPEAT,[fr]:t.CLAMP_TO_EDGE,[Yc]:t.MIRRORED_REPEAT},ue={[Xn]:t.NEAREST,[F0]:t.NEAREST_MIPMAP_NEAREST,[wo]:t.NEAREST_MIPMAP_LINEAR,[Qn]:t.LINEAR,[ec]:t.LINEAR_MIPMAP_NEAREST,[dr]:t.LINEAR_MIPMAP_LINEAR},Ee={[V0]:t.NEVER,[Y0]:t.ALWAYS,[G0]:t.LESS,[Ld]:t.LEQUAL,[H0]:t.EQUAL,[q0]:t.GEQUAL,[W0]:t.GREATER,[X0]:t.NOTEQUAL};function ke(S,g){if(g.type===Si&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Qn||g.magFilter===ec||g.magFilter===wo||g.magFilter===dr||g.minFilter===Qn||g.minFilter===ec||g.minFilter===wo||g.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(S,t.TEXTURE_WRAP_S,ie[g.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,ie[g.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,ie[g.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,ue[g.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,ue[g.minFilter]),g.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,Ee[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Xn||g.minFilter!==wo&&g.minFilter!==dr||g.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function st(S,g){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",w));const Y=g.source;let K=d.get(Y);K===void 0&&(K={},d.set(Y,K));const G=W(g);if(G!==S.__cacheKey){K[G]===void 0&&(K[G]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),K[G].usedTimes++;const ve=K[S.__cacheKey];ve!==void 0&&(K[S.__cacheKey].usedTimes--,ve.usedTimes===0&&E(g)),S.__cacheKey=G,S.__webglTexture=K[G].texture}return N}function X(S,g,N){let Y=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=t.TEXTURE_3D);const K=st(S,g),G=g.source;n.bindTexture(Y,S.__webglTexture,t.TEXTURE0+N);const ve=i.get(G);if(G.version!==ve.__version||K===!0){n.activeTexture(t.TEXTURE0+N);const se=Ke.getPrimaries(Ke.workingColorSpace),Re=g.colorSpace===Vi?null:Ke.getPrimaries(g.colorSpace),Ce=g.colorSpace===Vi||se===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let $=M(g.image,!1,r.maxTextureSize);$=lt(g,$);const fe=s.convert(g.format,g.colorSpace),Pe=s.convert(g.type);let Ue=T(g.internalFormat,fe,Pe,g.colorSpace,g.isVideoTexture);ke(Y,g);let de;const He=g.mipmaps,Oe=g.isVideoTexture!==!0,ct=ve.__version===void 0||K===!0,P=G.dataReady,oe=U(g,$);if(g.isDepthTexture)Ue=y(g.format===to,g.type),ct&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Ue,$.width,$.height):n.texImage2D(t.TEXTURE_2D,0,Ue,$.width,$.height,0,fe,Pe,null));else if(g.isDataTexture)if(He.length>0){Oe&&ct&&n.texStorage2D(t.TEXTURE_2D,oe,Ue,He[0].width,He[0].height);for(let z=0,j=He.length;z<j;z++)de=He[z],Oe?P&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,de.width,de.height,fe,Pe,de.data):n.texImage2D(t.TEXTURE_2D,z,Ue,de.width,de.height,0,fe,Pe,de.data);g.generateMipmaps=!1}else Oe?(ct&&n.texStorage2D(t.TEXTURE_2D,oe,Ue,$.width,$.height),P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,$.width,$.height,fe,Pe,$.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,$.width,$.height,0,fe,Pe,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Oe&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Ue,He[0].width,He[0].height,$.depth);for(let z=0,j=He.length;z<j;z++)if(de=He[z],g.format!==Hn)if(fe!==null)if(Oe){if(P)if(g.layerUpdates.size>0){const ce=Uh(de.width,de.height,g.format,g.type);for(const ae of g.layerUpdates){const Ne=de.data.subarray(ae*ce/de.data.BYTES_PER_ELEMENT,(ae+1)*ce/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,ae,de.width,de.height,1,fe,Ne)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,de.width,de.height,$.depth,fe,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,Ue,de.width,de.height,$.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,de.width,de.height,$.depth,fe,Pe,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,Ue,de.width,de.height,$.depth,0,fe,Pe,de.data)}else{Oe&&ct&&n.texStorage2D(t.TEXTURE_2D,oe,Ue,He[0].width,He[0].height);for(let z=0,j=He.length;z<j;z++)de=He[z],g.format!==Hn?fe!==null?Oe?P&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,de.width,de.height,fe,de.data):n.compressedTexImage2D(t.TEXTURE_2D,z,Ue,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?P&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,de.width,de.height,fe,Pe,de.data):n.texImage2D(t.TEXTURE_2D,z,Ue,de.width,de.height,0,fe,Pe,de.data)}else if(g.isDataArrayTexture)if(Oe){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Ue,$.width,$.height,$.depth),P)if(g.layerUpdates.size>0){const z=Uh($.width,$.height,g.format,g.type);for(const j of g.layerUpdates){const ce=$.data.subarray(j*z/$.data.BYTES_PER_ELEMENT,(j+1)*z/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,$.width,$.height,1,fe,Pe,ce)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,fe,Pe,$.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,$.width,$.height,$.depth,0,fe,Pe,$.data);else if(g.isData3DTexture)Oe?(ct&&n.texStorage3D(t.TEXTURE_3D,oe,Ue,$.width,$.height,$.depth),P&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,fe,Pe,$.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,$.width,$.height,$.depth,0,fe,Pe,$.data);else if(g.isFramebufferTexture){if(ct)if(Oe)n.texStorage2D(t.TEXTURE_2D,oe,Ue,$.width,$.height);else{let z=$.width,j=$.height;for(let ce=0;ce<oe;ce++)n.texImage2D(t.TEXTURE_2D,ce,Ue,z,j,0,fe,Pe,null),z>>=1,j>>=1}}else if(He.length>0){if(Oe&&ct){const z=Se(He[0]);n.texStorage2D(t.TEXTURE_2D,oe,Ue,z.width,z.height)}for(let z=0,j=He.length;z<j;z++)de=He[z],Oe?P&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,fe,Pe,de):n.texImage2D(t.TEXTURE_2D,z,Ue,fe,Pe,de);g.generateMipmaps=!1}else if(Oe){if(ct){const z=Se($);n.texStorage2D(t.TEXTURE_2D,oe,Ue,z.width,z.height)}P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Pe,$)}else n.texImage2D(t.TEXTURE_2D,0,Ue,fe,Pe,$);m(g)&&f(Y),ve.__version=G.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ee(S,g,N){if(g.image.length!==6)return;const Y=st(S,g),K=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+N);const G=i.get(K);if(K.version!==G.__version||Y===!0){n.activeTexture(t.TEXTURE0+N);const ve=Ke.getPrimaries(Ke.workingColorSpace),se=g.colorSpace===Vi?null:Ke.getPrimaries(g.colorSpace),Re=g.colorSpace===Vi||ve===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ce=g.isCompressedTexture||g.image[0].isCompressedTexture,$=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let j=0;j<6;j++)!Ce&&!$?fe[j]=M(g.image[j],!0,r.maxCubemapSize):fe[j]=$?g.image[j].image:g.image[j],fe[j]=lt(g,fe[j]);const Pe=fe[0],Ue=s.convert(g.format,g.colorSpace),de=s.convert(g.type),He=T(g.internalFormat,Ue,de,g.colorSpace),Oe=g.isVideoTexture!==!0,ct=G.__version===void 0||Y===!0,P=K.dataReady;let oe=U(g,Pe);ke(t.TEXTURE_CUBE_MAP,g);let z;if(Ce){Oe&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,He,Pe.width,Pe.height);for(let j=0;j<6;j++){z=fe[j].mipmaps;for(let ce=0;ce<z.length;ce++){const ae=z[ce];g.format!==Hn?Ue!==null?Oe?P&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,0,0,ae.width,ae.height,Ue,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,He,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,0,0,ae.width,ae.height,Ue,de,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,He,ae.width,ae.height,0,Ue,de,ae.data)}}}else{if(z=g.mipmaps,Oe&&ct){z.length>0&&oe++;const j=Se(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,He,j.width,j.height)}for(let j=0;j<6;j++)if($){Oe?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,fe[j].width,fe[j].height,Ue,de,fe[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,He,fe[j].width,fe[j].height,0,Ue,de,fe[j].data);for(let ce=0;ce<z.length;ce++){const Ne=z[ce].image[j].image;Oe?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,0,0,Ne.width,Ne.height,Ue,de,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,He,Ne.width,Ne.height,0,Ue,de,Ne.data)}}else{Oe?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ue,de,fe[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,He,Ue,de,fe[j]);for(let ce=0;ce<z.length;ce++){const ae=z[ce];Oe?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,0,0,Ue,de,ae.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,He,Ue,de,ae.image[j])}}}m(g)&&f(t.TEXTURE_CUBE_MAP),G.__version=K.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function me(S,g,N,Y,K,G){const ve=s.convert(N.format,N.colorSpace),se=s.convert(N.type),Re=T(N.internalFormat,ve,se,N.colorSpace),Ce=i.get(g),$=i.get(N);if($.__renderTarget=g,!Ce.__hasExternalTextures){const fe=Math.max(1,g.width>>G),Pe=Math.max(1,g.height>>G);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,G,Re,fe,Pe,g.depth,0,ve,se,null):n.texImage2D(K,G,Re,fe,Pe,0,ve,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),Ge(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,K,$.__webglTexture,0,Xe(g)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,K,$.__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(S,g,N){if(t.bindRenderbuffer(t.RENDERBUFFER,S),g.depthBuffer){const Y=g.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,G=y(g.stencilBuffer,K),ve=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=Xe(g);Ge(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,G,g.width,g.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,G,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,G,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,S)}else{const Y=g.textures;for(let K=0;K<Y.length;K++){const G=Y[K],ve=s.convert(G.format,G.colorSpace),se=s.convert(G.type),Re=T(G.internalFormat,ve,se,G.colorSpace),Ce=Xe(g);N&&Ge(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Re,g.width,g.height):Ge(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Re,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Re,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(g.depthTexture);Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);const K=Y.__webglTexture,G=Xe(g);if(g.depthTexture.format===eo)Ge(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(g.depthTexture.format===to)Ge(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function $e(S){const g=i.get(S),N=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const Y=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=Y}if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const Y=S.texture.mipmaps;Y&&Y.length>0?we(g.__webglFramebuffer[0],S):we(g.__webglFramebuffer,S)}else if(N){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=t.createRenderbuffer(),re(g.__webglDepthbuffer[Y],S,!1);else{const K=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,G)}}else{const Y=S.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),re(g.__webglDepthbuffer,S,!1);else{const K=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,G)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(S,g,N){const Y=i.get(S);g!==void 0&&me(Y.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&$e(S)}function At(S){const g=S.texture,N=i.get(S),Y=i.get(g);S.addEventListener("dispose",R);const K=S.textures,G=S.isWebGLCubeRenderTarget===!0,ve=K.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=g.version,o.memory.textures++),G){N.__webglFramebuffer=[];for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[se]=[];for(let Re=0;Re<g.mipmaps.length;Re++)N.__webglFramebuffer[se][Re]=t.createFramebuffer()}else N.__webglFramebuffer[se]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)N.__webglFramebuffer[se]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ve)for(let se=0,Re=K.length;se<Re;se++){const Ce=i.get(K[se]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(S.samples>0&&Ge(S)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let se=0;se<K.length;se++){const Re=K[se];N.__webglColorRenderbuffer[se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[se]);const Ce=s.convert(Re.format,Re.colorSpace),$=s.convert(Re.type),fe=T(Re.internalFormat,Ce,$,Re.colorSpace,S.isXRRenderTarget===!0),Pe=Xe(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,fe,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,N.__webglColorRenderbuffer[se])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),re(N.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ke(t.TEXTURE_CUBE_MAP,g);for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)me(N.__webglFramebuffer[se][Re],S,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re);else me(N.__webglFramebuffer[se],S,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(g)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let se=0,Re=K.length;se<Re;se++){const Ce=K[se],$=i.get(Ce);n.bindTexture(t.TEXTURE_2D,$.__webglTexture),ke(t.TEXTURE_2D,Ce),me(N.__webglFramebuffer,S,Ce,t.COLOR_ATTACHMENT0+se,t.TEXTURE_2D,0),m(Ce)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(se=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,Y.__webglTexture),ke(se,g),g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)me(N.__webglFramebuffer[Re],S,g,t.COLOR_ATTACHMENT0,se,Re);else me(N.__webglFramebuffer,S,g,t.COLOR_ATTACHMENT0,se,0);m(g)&&f(se),n.unbindTexture()}S.depthBuffer&&$e(S)}function mt(S){const g=S.textures;for(let N=0,Y=g.length;N<Y;N++){const K=g[N];if(m(K)){const G=A(S),ve=i.get(K).__webglTexture;n.bindTexture(G,ve),f(G),n.unbindTexture()}}}const Ve=[],b=[];function An(S){if(S.samples>0){if(Ge(S)===!1){const g=S.textures,N=S.width,Y=S.height;let K=t.COLOR_BUFFER_BIT;const G=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(S),se=g.length>1;if(se)for(let Ce=0;Ce<g.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Re=S.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ce=0;Ce<g.length;Ce++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),se){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Ce]);const $=i.get(g[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$,0)}t.blitFramebuffer(0,0,N,Y,0,0,N,Y,K,t.NEAREST),c===!0&&(Ve.length=0,b.length=0,Ve.push(t.COLOR_ATTACHMENT0+Ce),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ve.push(G),b.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),se)for(let Ce=0;Ce<g.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Ce]);const $=i.get(g[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,$,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const g=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function Xe(S){return Math.min(r.maxSamples,S.samples)}function Ge(S){const g=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ye(S){const g=o.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function lt(S,g){const N=S.colorSpace,Y=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==ss&&N!==Vi&&(Ke.getTransfer(N)===nt?(Y!==Hn||K!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function Se(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=q,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Le,this.setupRenderTarget=At,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ge}function Av(t,e){function n(i,r=Vi){let s;const o=Ke.getTransfer(r);if(i===Ti)return t.UNSIGNED_BYTE;if(i===Xl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ql)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ad)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===yd)return t.BYTE;if(i===Td)return t.SHORT;if(i===Js)return t.UNSIGNED_SHORT;if(i===Wl)return t.INT;if(i===Sr)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===fo)return t.HALF_FLOAT;if(i===bd)return t.ALPHA;if(i===wd)return t.RGB;if(i===Hn)return t.RGBA;if(i===eo)return t.DEPTH_COMPONENT;if(i===to)return t.DEPTH_STENCIL;if(i===Rd)return t.RED;if(i===Yl)return t.RED_INTEGER;if(i===Cd)return t.RG;if(i===jl)return t.RG_INTEGER;if(i===Kl)return t.RGBA_INTEGER;if(i===na||i===ia||i===ra||i===sa)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jc||i===Kc||i===Zc||i===$c)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$c)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jc||i===Qc||i===el)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jc||i===Qc)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===el)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===cl||i===ll||i===ul||i===hl||i===fl||i===dl||i===pl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===il)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ol)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===al)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ll)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ul)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oa||i===ml||i===gl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===oa)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ml)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pd||i===_l||i===vl||i===xl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===oa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yi({vertexShader:bv,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ei(new ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cv extends Ms{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,_=null;const M=new Rv,m=n.getContextAttributes();let f=null,A=null;const T=[],y=[],U=new at;let w=null;const R=new an;R.viewport=new Rt;const I=new an;I.viewport=new Rt;const E=[R,I],x=new Zg;let C=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=T[X];return ee===void 0&&(ee=new Mc,T[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=T[X];return ee===void 0&&(ee=new Mc,T[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=T[X];return ee===void 0&&(ee=new Mc,T[X]=ee),ee.getHandSpace()};function k(X){const ee=y.indexOf(X.inputSource);if(ee===-1)return;const me=T[ee];me!==void 0&&(me.update(X.inputSource,X.frame,l||o),me.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<T.length;X++){const ee=y[X];ee!==null&&(y[X]=null,T[X].disconnect(ee))}C=null,q=null,M.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,A=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,re=null,we=null;m.depth&&(we=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=m.stencil?to:eo,re=m.stencil?Qs:Sr);const $e={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer($e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Er(d.textureWidth,d.textureHeight,{format:Hn,type:Ti,depthTexture:new Gd(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Er(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(X){for(let ee=0;ee<X.removed.length;ee++){const me=X.removed[ee],re=y.indexOf(me);re>=0&&(y[re]=null,T[re].disconnect(me))}for(let ee=0;ee<X.added.length;ee++){const me=X.added[ee];let re=y.indexOf(me);if(re===-1){for(let $e=0;$e<T.length;$e++)if($e>=y.length){y.push(me),re=$e;break}else if(y[$e]===null){y[$e]=me,re=$e;break}if(re===-1)break}const we=T[re];we&&we.connect(me)}}const H=new B,Q=new B;function V(X,ee,me){H.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);const re=H.distanceTo(Q),we=ee.projectionMatrix.elements,$e=me.projectionMatrix.elements,Le=we[14]/(we[10]-1),At=we[14]/(we[10]+1),mt=(we[9]+1)/we[5],Ve=(we[9]-1)/we[5],b=(we[8]-1)/we[0],An=($e[8]+1)/$e[0],Xe=Le*b,Ge=Le*An,ye=re/(-b+An),lt=ye*-b;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(lt),X.translateZ(ye),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),we[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Se=Le+ye,S=At+ye,g=Xe-lt,N=Ge+(re-lt),Y=mt*At/S*Se,K=Ve*At/S*Se;X.projectionMatrix.makePerspective(g,N,Y,K,Se,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ie(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ee=X.near,me=X.far;M.texture!==null&&(M.depthNear>0&&(ee=M.depthNear),M.depthFar>0&&(me=M.depthFar)),x.near=I.near=R.near=ee,x.far=I.far=R.far=me,(C!==x.near||q!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,q=x.far),R.layers.mask=X.layers.mask|2,I.layers.mask=X.layers.mask|4,x.layers.mask=R.layers.mask|I.layers.mask;const re=X.parent,we=x.cameras;ie(x,re);for(let $e=0;$e<we.length;$e++)ie(we[$e],re);we.length===2?V(x,R,I):x.projectionMatrix.copy(R.projectionMatrix),ue(X,x,re)};function ue(X,ee,me){me===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=no*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let Ee=null;function ke(X,ee){if(u=ee.getViewerPose(l||o),_=ee,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let re=!1;me.length!==x.cameras.length&&(x.cameras.length=0,re=!0);for(let Le=0;Le<me.length;Le++){const At=me[Le];let mt=null;if(p!==null)mt=p.getViewport(At);else{const b=h.getViewSubImage(d,At);mt=b.viewport,Le===0&&(e.setRenderTargetTextures(A,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(A))}let Ve=E[Le];Ve===void 0&&(Ve=new an,Ve.layers.enable(Le),Ve.viewport=new Rt,E[Le]=Ve),Ve.matrix.fromArray(At.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(At.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(mt.x,mt.y,mt.width,mt.height),Le===0&&(x.matrix.copy(Ve.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),re===!0&&x.cameras.push(Ve)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const Le=h.getDepthInformation(me[0]);Le&&Le.isValid&&Le.texture&&M.init(e,Le,r.renderState)}}for(let me=0;me<T.length;me++){const re=y[me],we=T[me];re!==null&&we!==void 0&&we.update(re,ee,l||o)}Ee&&Ee(X,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const st=new Hd;st.setAnimationLoop(ke),this.setAnimationLoop=function(X){Ee=X},this.dispose=function(){}}}const or=new Ai,Pv=new xt;function Lv(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Bd(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,A,T,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),M(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,A,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const A=e.get(f),T=A.envMap,y=A.envMapRotation;T&&(m.envMap.value=T,or.copy(y),or.x*=-1,or.y*=-1,or.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),m.envMapRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(or)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,A,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=T*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const A=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Dv(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const y=T.program;i.uniformBlockBinding(A,y)}function l(A,T){let y=r[A.id];y===void 0&&(_(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",m));const U=T.program;i.updateUBOMapping(A,U);const w=e.render.frame;s[A.id]!==w&&(d(A),s[A.id]=w)}function u(A){const T=h();A.__bindingPointIndex=T;const y=t.createBuffer(),U=A.__size,w=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,U,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,y),y}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=r[A.id],y=A.uniforms,U=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let w=0,R=y.length;w<R;w++){const I=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,x=I.length;E<x;E++){const C=I[E];if(p(C,w,E,U)===!0){const q=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let Z=0;Z<k.length;Z++){const H=k[Z],Q=M(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,q+W,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(A,T,y,U){const w=A.value,R=T+"_"+y;if(U[R]===void 0)return typeof w=="number"||typeof w=="boolean"?U[R]=w:U[R]=w.clone(),!0;{const I=U[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return U[R]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function _(A){const T=A.uniforms;let y=0;const U=16;for(let R=0,I=T.length;R<I;R++){const E=Array.isArray(T[R])?T[R]:[T[R]];for(let x=0,C=E.length;x<C;x++){const q=E[x],k=Array.isArray(q.value)?q.value:[q.value];for(let W=0,Z=k.length;W<Z;W++){const H=k[W],Q=M(H),V=y%U,ie=V%Q.boundary,ue=V+ie;y+=ie,ue!==0&&U-ue<Q.storage&&(y+=U-ue),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=Q.storage}}}const w=y%U;return w>0&&(y+=U-w),A.__size=y,A.__cache={},this}function M(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const A in r)t.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class Uv{constructor(e={}){const{canvas:n=ug(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),M=new Int32Array(4);let m=null,f=null;const A=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let U=!1;this._outputColorSpace=gn;let w=0,R=0,I=null,E=-1,x=null;const C=new Rt,q=new Rt;let k=null;const W=new it(0);let Z=0,H=n.width,Q=n.height,V=1,ie=null,ue=null;const Ee=new Rt(0,0,H,Q),ke=new Rt(0,0,H,Q);let st=!1;const X=new Vd;let ee=!1,me=!1;const re=new xt,we=new xt,$e=new B,Le=new Rt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Ve(){return I===null?V:1}let b=i;function An(v,L){return n.getContext(v,L)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hl}`),n.addEventListener("webglcontextlost",j,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",ae,!1),b===null){const L="webgl2";if(b=An(L,v),b===null)throw An(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Xe,Ge,ye,lt,Se,S,g,N,Y,K,G,ve,se,Re,Ce,$,fe,Pe,Ue,de,He,Oe,ct,P;function oe(){Xe=new H2(b),Xe.init(),Oe=new Av(b,Xe),Ge=new F2(b,Xe,e,Oe),ye=new yv(b,Xe),Ge.reverseDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),lt=new q2(b),Se=new uv,S=new Tv(b,Xe,ye,Se,Ge,Oe,lt),g=new B2(y),N=new G2(y),Y=new Jg(b),ct=new I2(b,Y),K=new W2(b,Y,lt,ct),G=new j2(b,K,Y,lt),Ue=new Y2(b,Ge,S),$=new O2(Se),ve=new lv(y,g,N,Xe,Ge,ct,$),se=new Lv(y,Se),Re=new fv,Ce=new vv(Xe),Pe=new U2(y,g,N,ye,G,p,c),fe=new Sv(y,G,Ge),P=new Dv(b,lt,Ge,ye),de=new N2(b,Xe,lt),He=new X2(b,Xe,lt),lt.programs=ve.programs,y.capabilities=Ge,y.extensions=Xe,y.properties=Se,y.renderLists=Re,y.shadowMap=fe,y.state=ye,y.info=lt}oe();const z=new Cv(y,b);this.xr=z,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const v=Xe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Xe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(H,Q,!1))},this.getSize=function(v){return v.set(H,Q)},this.setSize=function(v,L,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=v,Q=L,n.width=Math.floor(v*V),n.height=Math.floor(L*V),F===!0&&(n.style.width=v+"px",n.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(H*V,Q*V).floor()},this.setDrawingBufferSize=function(v,L,F){H=v,Q=L,V=F,n.width=Math.floor(v*F),n.height=Math.floor(L*F),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(Ee)},this.setViewport=function(v,L,F,O){v.isVector4?Ee.set(v.x,v.y,v.z,v.w):Ee.set(v,L,F,O),ye.viewport(C.copy(Ee).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(ke)},this.setScissor=function(v,L,F,O){v.isVector4?ke.set(v.x,v.y,v.z,v.w):ke.set(v,L,F,O),ye.scissor(q.copy(ke).multiplyScalar(V).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(v){ye.setScissorTest(st=v)},this.setOpaqueSort=function(v){ie=v},this.setTransparentSort=function(v){ue=v},this.getClearColor=function(v){return v.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,F=!0){let O=0;if(v){let D=!1;if(I!==null){const J=I.texture.format;D=J===Kl||J===jl||J===Yl}if(D){const J=I.texture.type,ne=J===Ti||J===Sr||J===Js||J===Qs||J===Xl||J===ql,le=Pe.getClearColor(),pe=Pe.getClearAlpha(),Ie=le.r,De=le.g,Te=le.b;ne?(_[0]=Ie,_[1]=De,_[2]=Te,_[3]=pe,b.clearBufferuiv(b.COLOR,0,_)):(M[0]=Ie,M[1]=De,M[2]=Te,M[3]=pe,b.clearBufferiv(b.COLOR,0,M))}else O|=b.COLOR_BUFFER_BIT}L&&(O|=b.DEPTH_BUFFER_BIT),F&&(O|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",j,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),Pe.dispose(),Re.dispose(),Ce.dispose(),Se.dispose(),g.dispose(),N.dispose(),G.dispose(),ct.dispose(),P.dispose(),ve.dispose(),z.dispose(),z.removeEventListener("sessionstart",Ju),z.removeEventListener("sessionend",Qu),Ji.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const v=lt.autoReset,L=fe.enabled,F=fe.autoUpdate,O=fe.needsUpdate,D=fe.type;oe(),lt.autoReset=v,fe.enabled=L,fe.autoUpdate=F,fe.needsUpdate=O,fe.type=D}function ae(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ne(v){const L=v.target;L.removeEventListener("dispose",Ne),St(L)}function St(v){Xt(v),Se.remove(v)}function Xt(v){const L=Se.get(v).programs;L!==void 0&&(L.forEach(function(F){ve.releaseProgram(F)}),v.isShaderMaterial&&ve.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,F,O,D,J){L===null&&(L=At);const ne=D.isMesh&&D.matrixWorld.determinant()<0,le=t0(v,L,F,O,D);ye.setMaterial(O,ne);let pe=F.index,Ie=1;if(O.wireframe===!0){if(pe=K.getWireframeAttribute(F),pe===void 0)return;Ie=2}const De=F.drawRange,Te=F.attributes.position;let qe=De.start*Ie,Qe=(De.start+De.count)*Ie;J!==null&&(qe=Math.max(qe,J.start*Ie),Qe=Math.min(Qe,(J.start+J.count)*Ie)),pe!==null?(qe=Math.max(qe,0),Qe=Math.min(Qe,pe.count)):Te!=null&&(qe=Math.max(qe,0),Qe=Math.min(Qe,Te.count));const Ct=Qe-qe;if(Ct<0||Ct===1/0)return;ct.setup(D,O,le,F,pe);let Et,je=de;if(pe!==null&&(Et=Y.get(pe),je=He,je.setIndex(Et)),D.isMesh)O.wireframe===!0?(ye.setLineWidth(O.wireframeLinewidth*Ve()),je.setMode(b.LINES)):je.setMode(b.TRIANGLES);else if(D.isLine){let Ae=O.linewidth;Ae===void 0&&(Ae=1),ye.setLineWidth(Ae*Ve()),D.isLineSegments?je.setMode(b.LINES):D.isLineLoop?je.setMode(b.LINE_LOOP):je.setMode(b.LINE_STRIP)}else D.isPoints?je.setMode(b.POINTS):D.isSprite&&je.setMode(b.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)ca("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))je.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Ae=D._multiDrawStarts,Ht=D._multiDrawCounts,et=D._multiDrawCount,Fn=pe?Y.get(pe).bytesPerElement:1,Cr=Se.get(O).currentProgram.getUniforms();for(let un=0;un<et;un++)Cr.setValue(b,"_gl_DrawID",un),je.render(Ae[un]/Fn,Ht[un])}else if(D.isInstancedMesh)je.renderInstances(qe,Ct,D.count);else if(F.isInstancedBufferGeometry){const Ae=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ht=Math.min(F.instanceCount,Ae);je.renderInstances(qe,Ct,Ht)}else je.render(qe,Ct)};function tt(v,L,F){v.transparent===!0&&v.side===xi&&v.forceSinglePass===!1?(v.side=cn,v.needsUpdate=!0,bo(v,L,F),v.side=qi,v.needsUpdate=!0,bo(v,L,F),v.side=xi):bo(v,L,F)}this.compile=function(v,L,F=null){F===null&&(F=v),f=Ce.get(F),f.init(L),T.push(f),F.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),v!==F&&v.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const O=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const J=D.material;if(J)if(Array.isArray(J))for(let ne=0;ne<J.length;ne++){const le=J[ne];tt(le,F,D),O.add(le)}else tt(J,F,D),O.add(J)}),f=T.pop(),O},this.compileAsync=function(v,L,F=null){const O=this.compile(v,L,F);return new Promise(D=>{function J(){if(O.forEach(function(ne){Se.get(ne).currentProgram.isReady()&&O.delete(ne)}),O.size===0){D(v);return}setTimeout(J,10)}Xe.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Nn=null;function fi(v){Nn&&Nn(v)}function Ju(){Ji.stop()}function Qu(){Ji.start()}const Ji=new Hd;Ji.setAnimationLoop(fi),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(v){Nn=v,z.setAnimationLoop(v),v===null?Ji.stop():Ji.start()},z.addEventListener("sessionstart",Ju),z.addEventListener("sessionend",Qu),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(L),L=z.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,L,I),f=Ce.get(v,T.length),f.init(L),T.push(f),we.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(we),me=this.localClippingEnabled,ee=$.init(this.clippingPlanes,me),m=Re.get(v,A.length),m.init(),A.push(m),z.enabled===!0&&z.isPresenting===!0){const J=y.xr.getDepthSensingMesh();J!==null&&Ja(J,L,-1/0,y.sortObjects)}Ja(v,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ie,ue),mt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,mt&&Pe.addToRenderList(m,v),this.info.render.frame++,ee===!0&&$.beginShadows();const F=f.state.shadowsArray;fe.render(F,v,L),ee===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=m.opaque,D=m.transmissive;if(f.setupLights(),L.isArrayCamera){const J=L.cameras;if(D.length>0)for(let ne=0,le=J.length;ne<le;ne++){const pe=J[ne];th(O,D,v,pe)}mt&&Pe.render(v);for(let ne=0,le=J.length;ne<le;ne++){const pe=J[ne];eh(m,v,pe,pe.viewport)}}else D.length>0&&th(O,D,v,L),mt&&Pe.render(v),eh(m,v,L);I!==null&&R===0&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(y,v,L),ct.resetDefaultState(),E=-1,x=null,T.pop(),T.length>0?(f=T[T.length-1],ee===!0&&$.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ja(v,L,F,O){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){O&&Le.setFromMatrixPosition(v.matrixWorld).applyMatrix4(we);const ne=G.update(v),le=v.material;le.visible&&m.push(v,ne,le,F,Le.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){const ne=G.update(v),le=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Le.copy(v.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Le.copy(ne.boundingSphere.center)),Le.applyMatrix4(v.matrixWorld).applyMatrix4(we)),Array.isArray(le)){const pe=ne.groups;for(let Ie=0,De=pe.length;Ie<De;Ie++){const Te=pe[Ie],qe=le[Te.materialIndex];qe&&qe.visible&&m.push(v,ne,qe,F,Le.z,Te)}}else le.visible&&m.push(v,ne,le,F,Le.z,null)}}const J=v.children;for(let ne=0,le=J.length;ne<le;ne++)Ja(J[ne],L,F,O)}function eh(v,L,F,O){const D=v.opaque,J=v.transmissive,ne=v.transparent;f.setupLightsView(F),ee===!0&&$.setGlobalState(y.clippingPlanes,F),O&&ye.viewport(C.copy(O)),D.length>0&&Ao(D,L,F),J.length>0&&Ao(J,L,F),ne.length>0&&Ao(ne,L,F),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function th(v,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[O.id]===void 0&&(f.state.transmissionRenderTarget[O.id]=new Er(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?fo:Ti,minFilter:dr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const J=f.state.transmissionRenderTarget[O.id],ne=O.viewport||C;J.setSize(ne.z*y.transmissionResolutionScale,ne.w*y.transmissionResolutionScale);const le=y.getRenderTarget();y.setRenderTarget(J),y.getClearColor(W),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),mt&&Pe.render(F);const pe=y.toneMapping;y.toneMapping=Wi;const Ie=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),f.setupLightsView(O),ee===!0&&$.setGlobalState(y.clippingPlanes,O),Ao(v,F,O),S.updateMultisampleRenderTarget(J),S.updateRenderTargetMipmap(J),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Te=0,qe=L.length;Te<qe;Te++){const Qe=L[Te],Ct=Qe.object,Et=Qe.geometry,je=Qe.material,Ae=Qe.group;if(je.side===xi&&Ct.layers.test(O.layers)){const Ht=je.side;je.side=cn,je.needsUpdate=!0,nh(Ct,F,O,Et,je,Ae),je.side=Ht,je.needsUpdate=!0,De=!0}}De===!0&&(S.updateMultisampleRenderTarget(J),S.updateRenderTargetMipmap(J))}y.setRenderTarget(le),y.setClearColor(W,Z),Ie!==void 0&&(O.viewport=Ie),y.toneMapping=pe}function Ao(v,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let D=0,J=v.length;D<J;D++){const ne=v[D],le=ne.object,pe=ne.geometry,Ie=ne.group;let De=ne.material;De.allowOverride===!0&&O!==null&&(De=O),le.layers.test(F.layers)&&nh(le,L,F,pe,De,Ie)}}function nh(v,L,F,O,D,J){v.onBeforeRender(y,L,F,O,D,J),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(y,L,F,O,v,J),D.transparent===!0&&D.side===xi&&D.forceSinglePass===!1?(D.side=cn,D.needsUpdate=!0,y.renderBufferDirect(F,L,O,D,v,J),D.side=qi,D.needsUpdate=!0,y.renderBufferDirect(F,L,O,D,v,J),D.side=xi):y.renderBufferDirect(F,L,O,D,v,J),v.onAfterRender(y,L,F,O,D,J)}function bo(v,L,F){L.isScene!==!0&&(L=At);const O=Se.get(v),D=f.state.lights,J=f.state.shadowsArray,ne=D.state.version,le=ve.getParameters(v,D.state,J,L,F),pe=ve.getProgramCacheKey(le);let Ie=O.programs;O.environment=v.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(v.isMeshStandardMaterial?N:g).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Ie===void 0&&(v.addEventListener("dispose",Ne),Ie=new Map,O.programs=Ie);let De=Ie.get(pe);if(De!==void 0){if(O.currentProgram===De&&O.lightsStateVersion===ne)return rh(v,le),De}else le.uniforms=ve.getUniforms(v),v.onBeforeCompile(le,y),De=ve.acquireProgram(le,pe),Ie.set(pe,De),O.uniforms=le.uniforms;const Te=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Te.clippingPlanes=$.uniform),rh(v,le),O.needsLights=i0(v),O.lightsStateVersion=ne,O.needsLights&&(Te.ambientLightColor.value=D.state.ambient,Te.lightProbe.value=D.state.probe,Te.directionalLights.value=D.state.directional,Te.directionalLightShadows.value=D.state.directionalShadow,Te.spotLights.value=D.state.spot,Te.spotLightShadows.value=D.state.spotShadow,Te.rectAreaLights.value=D.state.rectArea,Te.ltc_1.value=D.state.rectAreaLTC1,Te.ltc_2.value=D.state.rectAreaLTC2,Te.pointLights.value=D.state.point,Te.pointLightShadows.value=D.state.pointShadow,Te.hemisphereLights.value=D.state.hemi,Te.directionalShadowMap.value=D.state.directionalShadowMap,Te.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Te.spotShadowMap.value=D.state.spotShadowMap,Te.spotLightMatrix.value=D.state.spotLightMatrix,Te.spotLightMap.value=D.state.spotLightMap,Te.pointShadowMap.value=D.state.pointShadowMap,Te.pointShadowMatrix.value=D.state.pointShadowMatrix),O.currentProgram=De,O.uniformsList=null,De}function ih(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=la.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function rh(v,L){const F=Se.get(v);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function t0(v,L,F,O,D){L.isScene!==!0&&(L=At),S.resetTextureUnits();const J=L.fog,ne=O.isMeshStandardMaterial?L.environment:null,le=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ss,pe=(O.isMeshStandardMaterial?N:g).get(O.envMap||ne),Ie=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,De=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Te=!!F.morphAttributes.position,qe=!!F.morphAttributes.normal,Qe=!!F.morphAttributes.color;let Ct=Wi;O.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ct=y.toneMapping);const Et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,je=Et!==void 0?Et.length:0,Ae=Se.get(O),Ht=f.state.lights;if(ee===!0&&(me===!0||v!==x)){const Jt=v===x&&O.id===E;$.setState(O,v,Jt)}let et=!1;O.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ht.state.version||Ae.outputColorSpace!==le||D.isBatchedMesh&&Ae.batching===!1||!D.isBatchedMesh&&Ae.batching===!0||D.isBatchedMesh&&Ae.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ae.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ae.instancing===!1||!D.isInstancedMesh&&Ae.instancing===!0||D.isSkinnedMesh&&Ae.skinning===!1||!D.isSkinnedMesh&&Ae.skinning===!0||D.isInstancedMesh&&Ae.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ae.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ae.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ae.instancingMorph===!1&&D.morphTexture!==null||Ae.envMap!==pe||O.fog===!0&&Ae.fog!==J||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==$.numPlanes||Ae.numIntersection!==$.numIntersection)||Ae.vertexAlphas!==Ie||Ae.vertexTangents!==De||Ae.morphTargets!==Te||Ae.morphNormals!==qe||Ae.morphColors!==Qe||Ae.toneMapping!==Ct||Ae.morphTargetsCount!==je)&&(et=!0):(et=!0,Ae.__version=O.version);let Fn=Ae.currentProgram;et===!0&&(Fn=bo(O,L,D));let Cr=!1,un=!1,Ns=!1;const ut=Fn.getUniforms(),bn=Ae.uniforms;if(ye.useProgram(Fn.program)&&(Cr=!0,un=!0,Ns=!0),O.id!==E&&(E=O.id,un=!0),Cr||x!==v){ye.buffers.depth.getReversed()?(re.copy(v.projectionMatrix),fg(re),dg(re),ut.setValue(b,"projectionMatrix",re)):ut.setValue(b,"projectionMatrix",v.projectionMatrix),ut.setValue(b,"viewMatrix",v.matrixWorldInverse);const rn=ut.map.cameraPosition;rn!==void 0&&rn.setValue(b,$e.setFromMatrixPosition(v.matrixWorld)),Ge.logarithmicDepthBuffer&&ut.setValue(b,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ut.setValue(b,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,un=!0,Ns=!0)}if(D.isSkinnedMesh){ut.setOptional(b,D,"bindMatrix"),ut.setOptional(b,D,"bindMatrixInverse");const Jt=D.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),ut.setValue(b,"boneTexture",Jt.boneTexture,S))}D.isBatchedMesh&&(ut.setOptional(b,D,"batchingTexture"),ut.setValue(b,"batchingTexture",D._matricesTexture,S),ut.setOptional(b,D,"batchingIdTexture"),ut.setValue(b,"batchingIdTexture",D._indirectTexture,S),ut.setOptional(b,D,"batchingColorTexture"),D._colorsTexture!==null&&ut.setValue(b,"batchingColorTexture",D._colorsTexture,S));const wn=F.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Ue.update(D,F,Fn),(un||Ae.receiveShadow!==D.receiveShadow)&&(Ae.receiveShadow=D.receiveShadow,ut.setValue(b,"receiveShadow",D.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(bn.envMap.value=pe,bn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(bn.envMapIntensity.value=L.environmentIntensity),un&&(ut.setValue(b,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&n0(bn,Ns),J&&O.fog===!0&&se.refreshFogUniforms(bn,J),se.refreshMaterialUniforms(bn,O,V,Q,f.state.transmissionRenderTarget[v.id]),la.upload(b,ih(Ae),bn,S)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(la.upload(b,ih(Ae),bn,S),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ut.setValue(b,"center",D.center),ut.setValue(b,"modelViewMatrix",D.modelViewMatrix),ut.setValue(b,"normalMatrix",D.normalMatrix),ut.setValue(b,"modelMatrix",D.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Jt=O.uniformsGroups;for(let rn=0,Qa=Jt.length;rn<Qa;rn++){const Qi=Jt[rn];P.update(Qi,Fn),P.bind(Qi,Fn)}}return Fn}function n0(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function i0(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,L,F){const O=Se.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Se.get(v.texture).__webglTexture=L,Se.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:F,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const F=Se.get(v);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0};const r0=b.createFramebuffer();this.setRenderTarget=function(v,L=0,F=0){I=v,w=L,R=F;let O=!0,D=null,J=!1,ne=!1;if(v){const pe=Se.get(v);if(pe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(b.FRAMEBUFFER,null),O=!1;else if(pe.__webglFramebuffer===void 0)S.setupRenderTarget(v);else if(pe.__hasExternalTextures)S.rebindTextures(v,Se.get(v.texture).__webglTexture,Se.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Te=v.depthTexture;if(pe.__boundDepthTexture!==Te){if(Te!==null&&Se.has(Te)&&(v.width!==Te.image.width||v.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(v)}}const Ie=v.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ne=!0);const De=Se.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(De[L])?D=De[L][F]:D=De[L],J=!0):v.samples>0&&S.useMultisampledRTT(v)===!1?D=Se.get(v).__webglMultisampledFramebuffer:Array.isArray(De)?D=De[F]:D=De,C.copy(v.viewport),q.copy(v.scissor),k=v.scissorTest}else C.copy(Ee).multiplyScalar(V).floor(),q.copy(ke).multiplyScalar(V).floor(),k=st;if(F!==0&&(D=r0),ye.bindFramebuffer(b.FRAMEBUFFER,D)&&O&&ye.drawBuffers(v,D),ye.viewport(C),ye.scissor(q),ye.setScissorTest(k),J){const pe=Se.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe.__webglTexture,F)}else if(ne){const pe=Se.get(v.texture),Ie=L;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,pe.__webglTexture,F,Ie)}else if(v!==null&&F!==0){const pe=Se.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,pe.__webglTexture,F)}E=-1},this.readRenderTargetPixels=function(v,L,F,O,D,J,ne){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=Se.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ne!==void 0&&(le=le[ne]),le){ye.bindFramebuffer(b.FRAMEBUFFER,le);try{const pe=v.texture,Ie=pe.format,De=pe.type;if(!Ge.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-O&&F>=0&&F<=v.height-D&&b.readPixels(L,F,O,D,Oe.convert(Ie),Oe.convert(De),J)}finally{const pe=I!==null?Se.get(I).__webglFramebuffer:null;ye.bindFramebuffer(b.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(v,L,F,O,D,J,ne){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let le=Se.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ne!==void 0&&(le=le[ne]),le)if(L>=0&&L<=v.width-O&&F>=0&&F<=v.height-D){ye.bindFramebuffer(b.FRAMEBUFFER,le);const pe=v.texture,Ie=pe.format,De=pe.type;if(!Ge.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Te),b.bufferData(b.PIXEL_PACK_BUFFER,J.byteLength,b.STREAM_READ),b.readPixels(L,F,O,D,Oe.convert(Ie),Oe.convert(De),0);const qe=I!==null?Se.get(I).__webglFramebuffer:null;ye.bindFramebuffer(b.FRAMEBUFFER,qe);const Qe=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await hg(b,Qe,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Te),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,J),b.deleteBuffer(Te),b.deleteSync(Qe),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,F=0){const O=Math.pow(2,-F),D=Math.floor(v.image.width*O),J=Math.floor(v.image.height*O),ne=L!==null?L.x:0,le=L!==null?L.y:0;S.setTexture2D(v,0),b.copyTexSubImage2D(b.TEXTURE_2D,F,0,0,ne,le,D,J),ye.unbindTexture()};const s0=b.createFramebuffer(),o0=b.createFramebuffer();this.copyTextureToTexture=function(v,L,F=null,O=null,D=0,J=null){J===null&&(D!==0?(ca("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=D,D=0):J=0);let ne,le,pe,Ie,De,Te,qe,Qe,Ct;const Et=v.isCompressedTexture?v.mipmaps[J]:v.image;if(F!==null)ne=F.max.x-F.min.x,le=F.max.y-F.min.y,pe=F.isBox3?F.max.z-F.min.z:1,Ie=F.min.x,De=F.min.y,Te=F.isBox3?F.min.z:0;else{const wn=Math.pow(2,-D);ne=Math.floor(Et.width*wn),le=Math.floor(Et.height*wn),v.isDataArrayTexture?pe=Et.depth:v.isData3DTexture?pe=Math.floor(Et.depth*wn):pe=1,Ie=0,De=0,Te=0}O!==null?(qe=O.x,Qe=O.y,Ct=O.z):(qe=0,Qe=0,Ct=0);const je=Oe.convert(L.format),Ae=Oe.convert(L.type);let Ht;L.isData3DTexture?(S.setTexture3D(L,0),Ht=b.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(S.setTexture2DArray(L,0),Ht=b.TEXTURE_2D_ARRAY):(S.setTexture2D(L,0),Ht=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,L.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,L.unpackAlignment);const et=b.getParameter(b.UNPACK_ROW_LENGTH),Fn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Cr=b.getParameter(b.UNPACK_SKIP_PIXELS),un=b.getParameter(b.UNPACK_SKIP_ROWS),Ns=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Et.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Et.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ie),b.pixelStorei(b.UNPACK_SKIP_ROWS,De),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Te);const ut=v.isDataArrayTexture||v.isData3DTexture,bn=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const wn=Se.get(v),Jt=Se.get(L),rn=Se.get(wn.__renderTarget),Qa=Se.get(Jt.__renderTarget);ye.bindFramebuffer(b.READ_FRAMEBUFFER,rn.__webglFramebuffer),ye.bindFramebuffer(b.DRAW_FRAMEBUFFER,Qa.__webglFramebuffer);for(let Qi=0;Qi<pe;Qi++)ut&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Se.get(v).__webglTexture,D,Te+Qi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Se.get(L).__webglTexture,J,Ct+Qi)),b.blitFramebuffer(Ie,De,ne,le,qe,Qe,ne,le,b.DEPTH_BUFFER_BIT,b.NEAREST);ye.bindFramebuffer(b.READ_FRAMEBUFFER,null),ye.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(D!==0||v.isRenderTargetTexture||Se.has(v)){const wn=Se.get(v),Jt=Se.get(L);ye.bindFramebuffer(b.READ_FRAMEBUFFER,s0),ye.bindFramebuffer(b.DRAW_FRAMEBUFFER,o0);for(let rn=0;rn<pe;rn++)ut?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,wn.__webglTexture,D,Te+rn):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,wn.__webglTexture,D),bn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Jt.__webglTexture,J,Ct+rn):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Jt.__webglTexture,J),D!==0?b.blitFramebuffer(Ie,De,ne,le,qe,Qe,ne,le,b.COLOR_BUFFER_BIT,b.NEAREST):bn?b.copyTexSubImage3D(Ht,J,qe,Qe,Ct+rn,Ie,De,ne,le):b.copyTexSubImage2D(Ht,J,qe,Qe,Ie,De,ne,le);ye.bindFramebuffer(b.READ_FRAMEBUFFER,null),ye.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else bn?v.isDataTexture||v.isData3DTexture?b.texSubImage3D(Ht,J,qe,Qe,Ct,ne,le,pe,je,Ae,Et.data):L.isCompressedArrayTexture?b.compressedTexSubImage3D(Ht,J,qe,Qe,Ct,ne,le,pe,je,Et.data):b.texSubImage3D(Ht,J,qe,Qe,Ct,ne,le,pe,je,Ae,Et):v.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,J,qe,Qe,ne,le,je,Ae,Et.data):v.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,J,qe,Qe,Et.width,Et.height,je,Et.data):b.texSubImage2D(b.TEXTURE_2D,J,qe,Qe,ne,le,je,Ae,Et);b.pixelStorei(b.UNPACK_ROW_LENGTH,et),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Fn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Cr),b.pixelStorei(b.UNPACK_SKIP_ROWS,un),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ns),J===0&&L.generateMipmaps&&b.generateMipmap(Ht),ye.unbindTexture()},this.copyTextureToTexture3D=function(v,L,F=null,O=null,D=0){return ca('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,L,F,O,D)},this.initRenderTarget=function(v){Se.get(v).__webglFramebuffer===void 0&&S.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?S.setTextureCube(v,0):v.isData3DTexture?S.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?S.setTexture2DArray(v,0):S.setTexture2D(v,0),ye.unbindTexture()},this.resetState=function(){w=0,R=0,I=null,ye.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}var as=typeof self<"u"?self:{};function jd(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=as,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function ar(){throw Error("Invalid UTF8")}function sf(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let Ko,Rc;const Iv=typeof TextDecoder<"u";let Nv;const Fv=typeof TextEncoder<"u";function Kd(t){if(Fv)t=(Nv||(Nv=new TextEncoder)).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function Zd(t){as.setTimeout((()=>{throw t}),0)}var Sl,Ov=jd(610401301,!1),of=jd(748402147,!0);function af(){var t=as.navigator;return t&&(t=t.userAgent)?t:""}const cf=as.navigator;function Ra(t){return Ra[" "](t),t}Sl=cf&&cf.userAgentData||null,Ra[" "]=function(){};const $d={};let Gs=null;function Bv(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,o){function a(l){for(;c<s.length;){const u=s.charAt(c++),h=Gs[u];if(h!=null)return h;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return l}Jd();let c=0;for(;;){const l=a(-1),u=a(0),h=a(64),d=a(64);if(d===64&&l===-1)break;o(l<<2|u>>4),h!=64&&(o(u<<4&240|h>>2),d!=64&&o(h<<6&192|d))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function Jd(){if(!Gs){Gs={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));$d[n]=i;for(let r=0;r<i.length;r++){const s=i[r];Gs[s]===void 0&&(Gs[s]=r)}}}}var kv=typeof Uint8Array<"u",Qd=!(!(Ov&&Sl&&Sl.brands.length>0)&&(af().indexOf("Trident")!=-1||af().indexOf("MSIE")!=-1))&&typeof btoa=="function";const lf=/[-_.]/g,zv={"-":"+",_:"/",".":"="};function Vv(t){return zv[t]||""}function ep(t){if(!Qd)return Bv(t);t=lf.test(t)?t.replace(lf,Vv):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function iu(t){return kv&&t!=null&&t instanceof Uint8Array}var cs={};function yr(){return Gv||(Gv=new si(null,cs))}function ru(t){tp(cs);var e=t.g;return(e=e==null||iu(e)?e:typeof e=="string"?ep(e):null)==null?e:t.g=e}var si=class{h(){return new Uint8Array(ru(this)||0)}constructor(t,e){if(tp(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let Gv,Hv;function tp(t){if(t!==cs)throw Error("illegal external caller")}function np(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function El(t){return np(t=Error(t),"warning"),t}function ls(t,e){if(t!=null){var n=Hv??(Hv={}),i=n[t]||0;i>=e||(n[t]=i+1,np(t=Error(),"incident"),Zd(t))}}function ys(){return typeof BigInt=="function"}var Ts=typeof Symbol=="function"&&typeof Symbol()=="symbol";function ai(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var Wv=ai("jas",void 0,!0),uf=ai(void 0,"0di"),zs=ai(void 0,"1oa"),vn=ai(void 0,Symbol()),Xv=ai(void 0,"0ub"),qv=ai(void 0,"0ubs"),yl=ai(void 0,"0ubsb"),Yv=ai(void 0,"0actk"),us=ai("m_m","Pa",!0),hf=ai();const ip={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},rp=Object.defineProperties,ge=Ts?Wv:"Ga";var br;const ff=[];function _o(t,e){Ts||ge in t||rp(t,ip),t[ge]|=e}function kt(t,e){Ts||ge in t||rp(t,ip),t[ge]=e}function vo(t){return _o(t,34),t}function ro(t){return _o(t,8192),t}kt(ff,7),br=Object.freeze(ff);var hs={};function Mn(t,e){return e===void 0?t.h!==Tr&&!!(2&(0|t.v[ge])):!!(2&e)&&t.h!==Tr}const Tr={};function su(t,e){if(t!=null){if(typeof t=="string")t=t?new si(t,cs):yr();else if(t.constructor!==si)if(iu(t))t=t.length?new si(new Uint8Array(t),cs):yr();else{if(!e)throw Error();t=void 0}}return t}class df{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var jv=Object.freeze({});function sp(t,e,n){const i=128&e?0:-1,r=t.length;var s;(s=!!r)&&(s=(s=t[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const o=r+(s?-1:0);for(e=128&e?1:0;e<o;e++)n(e-i,t[e]);if(s){t=t[r-1];for(const a in t)!isNaN(a)&&n(+a,t[a])}}var op={};function As(t){return 128&t?op:void 0}function Ca(t){return t.Na=!0,t}var Kv=Ca((t=>typeof t=="number")),pf=Ca((t=>typeof t=="string")),Zv=Ca((t=>typeof t=="boolean")),Pa=typeof as.BigInt=="function"&&typeof as.BigInt(0)=="bigint";function xn(t){var e=t;if(pf(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(Kv(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Pa?BigInt(t):t=Zv(t)?t?"1":"0":pf(t)?t.trim()||"0":String(t)}var Tl=Ca((t=>Pa?t>=Jv&&t<=ex:t[0]==="-"?mf(t,$v):mf(t,Qv)));const $v=Number.MIN_SAFE_INTEGER.toString(),Jv=Pa?BigInt(Number.MIN_SAFE_INTEGER):void 0,Qv=Number.MAX_SAFE_INTEGER.toString(),ex=Pa?BigInt(Number.MAX_SAFE_INTEGER):void 0;function mf(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const tx=typeof Uint8Array.prototype.slice=="function";let nx,gt=0,Lt=0;function gf(t){const e=t>>>0;gt=e,Lt=(t-e)/4294967296>>>0}function fs(t){if(t<0){gf(-t);const[e,n]=cu(gt,Lt);gt=e>>>0,Lt=n>>>0}else gf(t)}function ou(t){const e=nx||(nx=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),Lt=0,gt=e.getUint32(0,!0)}function ap(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:so(t,e)}function ix(t,e){return xn(ys()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):so(t,e))}function cp(t,e){return ys()?xn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):xn(au(t,e))}function so(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else ys()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+_f(n)+_f(t));return n}function _f(t){return t=String(t),"0000000".slice(t.length)+t}function au(t,e){if(2147483648&e)if(ys())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=cu(t,e);t="-"+so(n,i)}else t=so(t,e);return t}function La(t){if(t.length<16)fs(Number(t));else if(ys())t=BigInt(t),gt=Number(t&BigInt(4294967295))>>>0,Lt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");Lt=gt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));Lt*=1e6,gt=1e6*gt+s,gt>=4294967296&&(Lt+=Math.trunc(gt/4294967296),Lt>>>=0,gt>>>=0)}if(e){const[i,r]=cu(gt,Lt);gt=i,Lt=r}}}function cu(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function qn(t){return Array.prototype.slice.call(t)}const xo=typeof BigInt=="function"?BigInt.asIntN:void 0,rx=typeof BigInt=="function"?BigInt.asUintN:void 0,Ar=Number.isSafeInteger,Da=Number.isFinite,ds=Math.trunc,sx=xn(0);function Hs(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function ti(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function oo(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function lp(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const ox=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Mo(t){switch(typeof t){case"bigint":return!0;case"number":return Da(t);case"string":return ox.test(t);default:return!1}}function bs(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Da(t)?0|t:void 0}function up(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Da(t)?t>>>0:void 0}function hp(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(La(t),au(gt,Lt))}function lu(t){if(t=ds(t),!Ar(t)){fs(t);var e=gt,n=Lt;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=ap(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function fp(t){var e=ds(Number(t));return Ar(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),hp(t))}function dp(t){var e=ds(Number(t));return Ar(e)?xn(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),ys()?xn(xo(64,BigInt(t))):xn(hp(t)))}function pp(t){return Ar(t)?t=xn(lu(t)):(t=ds(t),Ar(t)?t=String(t):(fs(t),t=au(gt,Lt)),t=xn(t)),t}function _a(t){const e=typeof t;return t==null?t:e==="bigint"?xn(xo(64,t)):Mo(t)?e==="string"?dp(t):pp(t):void 0}function mp(t){if(typeof t!="string")throw Error();return t}function So(t){if(t!=null&&typeof t!="string")throw Error();return t}function Wt(t){return t==null||typeof t=="string"?t:void 0}function uu(t,e,n,i){return t!=null&&t[us]===hs?t:Array.isArray(t)?((i=(n=0|t[ge])|32&i|2&i)!==n&&kt(t,i),new e(t)):(n?2&i?((t=e[uf])||(vo((t=new e).v),t=e[uf]=t),e=t):e=new e:e=void 0,e)}function ax(t,e,n){if(e)e:{if(!Mo(e=t))throw El("int64");switch(typeof e){case"string":e=dp(e);break e;case"bigint":e=xn(xo(64,e));break e;default:e=pp(e)}}else e=_a(t);return(t=e)==null?n?sx:void 0:t}const cx={};let lx=(function(){try{return Ra(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Cc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const ux=lx?(Object.setPrototypeOf(Cc.prototype,Map.prototype),Object.defineProperties(Cc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Cc):class extends Map{constructor(){super()}};function vf(t){return t}function Pc(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var bi=class extends ux{constructor(t,e,n=vf,i=vf){super(),this.J=0|t[ge],this.K=e,this.S=n,this.fa=this.K?hx:i;for(let r=0;r<t.length;r++){const s=t[r],o=n(s[0],!1,!0);let a=s[1];e?a===void 0&&(a=null):a=i(s[1],!1,!0,void 0,void 0,this.J),super.set(o,a)}}V(t){return ro(Array.from(super.entries(),t))}clear(){Pc(this),super.clear()}delete(t){return Pc(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new df(t,fx,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new df(t,bi.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return Pc(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function hx(t,e,n,i,r,s){return t=uu(t,i,n,s),r&&(t=fu(t)),t}function fx(t){return[t,this.get(t)]}let dx;function xf(){return dx||(dx=new bi(vo([]),void 0,void 0,void 0,cx))}function Ua(t){return vn?t[vn]:void 0}function va(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}bi.prototype.toJSON=void 0;var Al=class{};const px={Ka:!0};function mx(t,e){e<100||ls(qv,1)}function Ia(t,e,n,i){const r=i!==void 0;i=!!i;var s,o=vn;!r&&Ts&&o&&(s=t[o])&&va(s,mx),o=[];var a=t.length;let c;s=4294967295;let l=!1;const u=!!(64&e),h=u?128&e?0:-1:void 0;1&e||(c=a&&t[a-1],c!=null&&typeof c=="object"&&c.constructor===Object?s=--a:c=void 0,!u||128&e||r||(l=!0,s=s-h+h)),e=void 0;for(var d=0;d<a;d++){let p=t[d];if(p!=null&&(p=n(p,i))!=null)if(u&&d>=s){const _=d-h;(e??(e={}))[_]=p}else o[d]=p}if(c)for(let p in c){if((a=c[p])==null||(a=n(a,i))==null)continue;let _;d=+p,u&&!Number.isNaN(d)&&(_=d+h)<s?o[_]=a:(e??(e={}))[p]=a}return e&&(l?o.push(e):o[s]=e),r&&vn&&(t=Ua(t))&&t instanceof Al&&(o[vn]=(function(p){const _=new Al;return va(p,((M,m,f)=>{_[m]=qn(f)})),_.da=p.da,_})(t)),o}function gx(t){return t[0]=ao(t[0]),t[1]=ao(t[1]),t}function ao(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Tl(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[ge];return t.length===0&&1&e?void 0:Ia(t,e,ao)}if(t!=null&&t[us]===hs)return gp(t);if(t instanceof si){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(Qd){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),Jd(),n=$d[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let l=0,u=0;for(;l<e.length-2;l+=3){var s=e[l],o=e[l+1],a=e[l+2],c=n[s>>2];s=n[(3&s)<<4|o>>4],o=n[(15&o)<<2|a>>6],a=n[63&a],i[u++]=c+s+o+a}switch(c=0,a=r,e.length-l){case 2:a=n[(15&(c=e[l+1]))<<2]||r;case 1:e=e[l],i[u]=n[e>>2]+n[(3&e)<<4|c>>4]+a+r}e=i.join("")}t=t.g=e}return t}return t instanceof bi?t=t.size!==0?t.V(gx):void 0:void 0}return t}let _x,vx;function gp(t){return Ia(t=t.v,0|t[ge],ao)}function gr(t,e){return _p(t,e[0],e[1])}function _p(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[ge],of&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(of)throw Error("carr");ls(Yv,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&kt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var o=s-1;const c=n[o];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((o-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var a in c)(s=+a)<o&&(n[s+e]=c[a],delete c[a]);r=-16760833&r|(1023&o)<<14;break e}}if(e){if((a=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&a)<<14}}}return kt(t,64|r|i),t}function xx(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[ge];return t.length===0&&1&n?void 0:Mf(t,n,e)}if(t!=null&&t[us]===hs)return Sf(t);if(t instanceof bi){if(2&(e=t.J))return t;if(!t.size)return;if(n=vo(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[us]===hs?Sf(r):Array.isArray(r)?Mf(r,0|r[ge],!!(32&e)):void 0,i[1]=r}return n}return t instanceof si?t:void 0}function Mf(t,e,n){return 2&e||(!n||4096&e||16&e?t=ws(t,e,!1,n&&!(16&e)):(_o(t,34),4&e&&Object.freeze(t))),t}function hu(t,e,n){return t=new t.constructor(e),n&&(t.h=Tr),t.m=Tr,t}function Sf(t){const e=t.v,n=0|e[ge];return Mn(t,n)?t:du(t,e,n)?hu(t,e):ws(e,n)}function ws(t,e,n,i){return i??(i=!!(34&e)),t=Ia(t,e,xx,i),i=32,n&&(i|=2),kt(t,e=16769217&e|i),t}function fu(t){const e=t.v,n=0|e[ge];return Mn(t,n)?du(t,e,n)?hu(t,e,!0):new t.constructor(ws(e,n,!1)):t}function Rs(t){if(t.h!==Tr)return!1;var e=t.v;return _o(e=ws(e,0|e[ge]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function Cs(t){if(!Rs(t)&&Mn(t,0|t.v[ge]))throw Error()}function wr(t,e){e===void 0&&(e=0|t[ge]),32&e&&!(4096&e)&&kt(t,4096|e)}function du(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(kt(e,2|n),t.h=Tr,!0)}const vp=xn(0),Fi={};function _t(t,e,n,i,r){if((e=wi(t.v,e,n,r))!==null||i&&t.m!==Tr)return e}function wi(t,e,n,i){if(e===-1)return null;const r=e+(n?0:-1),s=t.length-1;let o,a;if(!(s<1+(n?0:-1))){if(r>=s)if(o=t[s],o!=null&&typeof o=="object"&&o.constructor===Object)n=o[e],a=!0;else{if(r!==s)return;n=o}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return a?o[e]=i:t[r]=i,i}return n}}function rt(t,e,n,i){Cs(t),Nt(t=t.v,0|t[ge],e,n,i)}function Nt(t,e,n,i,r){const s=n+(r?0:-1);var o=t.length-1;if(o>=1+(r?0:-1)&&s>=o){const a=t[o];if(a!=null&&typeof a=="object"&&a.constructor===Object)return a[n]=i,e}return s<=o?(t[s]=i,e):(i!==void 0&&(n>=(o=(e??(e=0|t[ge]))>>14&1023||536870912)?i!=null&&(t[o+(r?0:-1)]={[n]:i}):t[s]=i),e)}function pr(){return jv===void 0?2:4}function mr(t,e,n,i,r){let s=t.v,o=0|s[ge];i=Mn(t,o)?1:i,r=!!r||i===3,i===2&&Rs(t)&&(s=t.v,o=0|s[ge]);let a=(t=pu(s,e))===br?7:0|t[ge],c=mu(a,o);var l=!(4&c);if(l){4&c&&(t=qn(t),a=0,c=vr(c,o),o=Nt(s,o,e,t));let u=0,h=0;for(;u<t.length;u++){const d=n(t[u]);d!=null&&(t[h++]=d)}h<u&&(t.length=h),n=-513&(4|c),c=n&=-1025,c&=-4097}return c!==a&&(kt(t,c),2&c&&Object.freeze(t)),xp(t,c,s,o,e,i,l,r)}function xp(t,e,n,i,r,s,o,a){let c=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?_r(e)||((e|=!t.length||o&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==c&&kt(t,e),Object.freeze(t)):(s===2&&_r(e)&&(t=qn(t),c=0,e=vr(e,i),i=Nt(n,i,r,t)),_r(e)||(a||(e|=16),e!==c&&kt(t,e))),2&e||!(4096&e||16&e)||wr(n,i),t}function pu(t,e,n){return t=wi(t,e,n),Array.isArray(t)?t:br}function mu(t,e){return 2&e&&(t|=2),1|t}function _r(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Mp(t){return su(t,!0)}function Sp(t){t=qn(t);for(let e=0;e<t.length;e++){const n=t[e]=qn(t[e]);Array.isArray(n[1])&&(n[1]=vo(n[1]))}return ro(t)}function Bi(t,e,n,i){Cs(t),Nt(t=t.v,0|t[ge],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Ps(t,e,n){if(2&e)throw Error();const i=As(e);let r=pu(t,n,i),s=r===br?7:0|r[ge],o=mu(s,e);return(2&o||_r(o)||16&o)&&(o===s||_r(o)||kt(r,o),r=qn(r),s=0,o=vr(o,e),Nt(t,e,n,r,i)),o&=-13,o!==s&&kt(r,o),r}function Lc(t,e){var n=fm;return _u(gu(t=t.v),t,void 0,n)===e?e:-1}function gu(t){if(Ts)return t[zs]??(t[zs]=new Map);if(zs in t)return t[zs];const e=new Map;return Object.defineProperty(t,zs,{value:e}),e}function Ep(t,e,n,i,r){const s=gu(t),o=_u(s,t,e,n,r);return o!==i&&(o&&(e=Nt(t,e,o,void 0,r)),s.set(n,i)),e}function _u(t,e,n,i,r){let s=t.get(i);if(s!=null)return s;s=0;for(let o=0;o<i.length;o++){const a=i[o];wi(e,a,r)!=null&&(s!==0&&(n=Nt(e,n,s,void 0,r)),s=a)}return t.set(i,s),s}function vu(t,e,n){let i=0|t[ge];const r=As(i),s=wi(t,n,r);let o;if(s!=null&&s[us]===hs){if(!Mn(s))return Rs(s),s.v;o=s.v}else Array.isArray(s)&&(o=s);if(o){const a=0|o[ge];2&a&&(o=ws(o,a))}return o=gr(o,e),o!==s&&Nt(t,i,n,o,r),o}function yp(t,e,n,i,r){let s=!1;if((i=wi(t,i,r,(o=>{const a=uu(o,n,!1,e);return s=a!==o&&a!=null,a})))!=null)return s&&!Mn(i)&&wr(t,e),i}function Ze(t,e,n,i){let r=t.v,s=0|r[ge];if((e=yp(r,s,e,n,i))==null)return e;if(s=0|r[ge],!Mn(t,s)){const o=fu(e);o!==e&&(Rs(t)&&(r=t.v,s=0|r[ge]),s=Nt(r,s,n,e=o,i),wr(r,s))}return e}function Tp(t,e,n,i,r,s,o,a){var c=Mn(t,n);s=c?1:s,o=!!o||s===3,c=a&&!c,(s===2||c)&&Rs(t)&&(n=0|(e=t.v)[ge]);var l=(t=pu(e,r))===br?7:0|t[ge],u=mu(l,n);if(a=!(4&u)){var h=t,d=n;const p=!!(2&u);p&&(d|=2);let _=!p,M=!0,m=0,f=0;for(;m<h.length;m++){const A=uu(h[m],i,!1,d);if(A instanceof i){if(!p){const T=Mn(A);_&&(_=!T),M&&(M=T)}h[f++]=A}}f<m&&(h.length=f),u|=4,u=M?-4097&u:4096|u,u=_?8|u:-9&u}if(u!==l&&(kt(t,u),2&u&&Object.freeze(t)),c&&!(8&u||!t.length&&(s===1||s===4&&(2&u||!(16&u)&&32&n)))){for(_r(u)&&(t=qn(t),u=vr(u,n),n=Nt(e,n,r,t)),i=t,c=u,l=0;l<i.length;l++)(h=i[l])!==(u=fu(h))&&(i[l]=u);c|=8,kt(t,u=c=i.length?4096|c:-4097&c)}return xp(t,u,e,n,r,s,a,o)}function Ri(t,e,n){const i=t.v;return Tp(t,i,0|i[ge],e,n,pr(),!1,!0)}function Ap(t){return t==null&&(t=void 0),t}function be(t,e,n,i,r){return rt(t,n,i=Ap(i),r),i&&!Mn(i)&&wr(t.v),t}function Xs(t,e,n,i){e:{var r=i=Ap(i);Cs(t);const s=t.v;let o=0|s[ge];if(r==null){const a=gu(s);if(_u(a,s,o,n)!==e)break e;a.set(n,0)}else o=Ep(s,o,n,e);Nt(s,o,e,r)}i&&!Mn(i)&&wr(t.v)}function vr(t,e){return-273&(2&e?2|t:-3&t)}function xu(t,e,n,i){var r=i;Cs(t),t=Tp(t,i=t.v,0|i[ge],n,e,2,!0),r=r??new n,t.push(r),e=n=t===br?7:0|t[ge],(r=Mn(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&kt(t,n),r||wr(i)}function Dn(t,e,n){return bs(_t(t,e,void 0,n))}function bt(t,e){return _t(t,e,void 0,void 0,ti)??0}function Ci(t,e,n){if(n!=null){if(typeof n!="number"||!Da(n))throw El("int32");n|=0}rt(t,e,n)}function Me(t,e,n){rt(t,e,Hs(n))}function Sn(t,e,n){Bi(t,e,So(n),"")}function xa(t,e,n){{Cs(t);const o=t.v;let a=0|o[ge];if(n==null)Nt(o,a,e);else{var i=t=n===br?7:0|n[ge],r=_r(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=qn(n),i=0,t=vr(t,a),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){const c=n[r],l=mp(c);Object.is(c,l)||(s&&(n=qn(n),i=0,t=vr(t,a),s=!1),n[r]=l)}t!==i&&(s&&(n=qn(n),t=vr(t,a)),kt(n,t)),Nt(o,a,e,n)}}}function Na(t,e,n){Cs(t),mr(t,e,Wt,2,!0).push(mp(n))}var Wr=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function Mu(t,e){if(typeof t=="string")return new Wr(ep(t),e);if(Array.isArray(t))return new Wr(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new Wr(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new Wr(t,!1);if(t.constructor===si)return e=ru(t)||new Uint8Array(0),new Wr(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new Wr(t,!1);throw Error()}function Su(t,e){let n,i=0,r=0,s=0;const o=t.h;let a=t.g;do n=o[a++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=o[a++],r|=(127&n)<<s;if(xr(t,a),!(128&n))return e(i>>>0,r>>>0);throw Error()}function Eu(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return xr(t,n),!!(127&e)}throw Error()}function ji(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return xr(t,n),r}function oi(t){return ji(t)>>>0}function Ma(t){var e=t.h;const n=t.g;var i=e[n],r=e[n+1];const s=e[n+2];return e=e[n+3],xr(t,t.g+4),t=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:t*(1/0):i==0?1401298464324817e-60*t*r:t*Math.pow(2,i-150)*(r+8388608)}function Mx(t){return ji(t)}function xr(t,e){if(t.g=e,e>t.l)throw Error()}function bp(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function wp(t,e){if(e==0)return yr();var n=bp(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):tx?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?yr():new si(n,cs)}var Ef=[];function Rp(t,e,n,i){if(Sa.length){const r=Sa.pop();return r.o(i),r.g.init(t,e,n,i),r}return new Sx(t,e,n,i)}function Cp(t){t.g.clear(),t.l=-1,t.h=-1,Sa.length<100&&Sa.push(t)}function Pp(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=oi(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function ua(t){switch(t.h){case 0:t.h!=0?ua(t):Eu(t.g);break;case 1:xr(t=t.g,t.g+8);break;case 2:if(t.h!=2)ua(t);else{var e=oi(t.g);xr(t=t.g,t.g+e)}break;case 5:xr(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!Pp(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}ua(t)}break;default:throw Error()}}function Eo(t,e,n){const i=t.g.l;var r=oi(t.g);let s=(r=t.g.g+r)-i;if(s<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.l=i,e}function yu(t){var e=oi(t.g),n=bp(t=t.g,e);if(t=t.h,Iv){var i,r=t;(i=Rc)||(i=Rc=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(a){if(Ko===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Ko=!0}catch{Ko=!1}}throw!Ko&&(Rc=void 0),a}}else{e=(s=n)+e,n=[];let a,c=null;for(;s<e;){var o=t[s++];o<128?n.push(o):o<224?s>=e?ar():(a=t[s++],o<194||(192&a)!=128?(s--,ar()):n.push((31&o)<<6|63&a)):o<240?s>=e-1?ar():(a=t[s++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=t[s++]))!=128?(s--,ar()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?s>=e-2?ar():(a=t[s++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,ar()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&r,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):ar(),n.length>=8192&&(c=sf(c,n),n.length=0)}s=sf(c,n)}return s}function Lp(t){const e=oi(t.g);return wp(t.g,e)}function Fa(t,e,n){var i=oi(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var Sx=class{constructor(t,e,n,i){if(Ef.length){const r=Ef.pop();r.init(t,e,n,i),t=r}else t=new class{constructor(r,s,o,a){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,o,a)}init(r,s,o,{Y:a=!1,ea:c=!1}={}){this.Y=a,this.ea=c,r&&(r=Mu(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=o!==void 0?this.m+o:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},Sa=[];function yf(t){return t?/^\d+$/.test(t)?(La(t),new bl(gt,Lt)):null:Ex||(Ex=new bl(0,0))}var bl=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let Ex;function Tf(t){return t?/^-?\d+$/.test(t)?(La(t),new wl(gt,Lt)):null:yx||(yx=new wl(0,0))}var wl=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let yx;function Qr(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Ls(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Oa(t,e){if(e>=0)Ls(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Tu(t){var e=gt;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function ps(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Un(t,e,n){Ls(t.g,8*e+n)}function Au(t,e){return Un(t,e,2),e=t.g.end(),ps(t,e),e.push(t.h),e}function bu(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Ba(t,e,n){Un(t,e,2),Ls(t.g,n.length),ps(t,t.g.end()),ps(t,n)}function Ea(t,e,n,i){n!=null&&(e=Au(t,e),i(n,t),bu(t,e))}function ci(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var wu=ci(),Dp=ci(),Ru=ci(),Cu=ci(),Pu=ci(),Up=ci(),Tx=ci(),ka=ci(),Ip=ci(),Np=ci();function li(t,e,n){var i=t.v;vn&&vn in i&&(i=i[vn])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var _e=class{constructor(t,e){this.v=_p(t,e,void 0,2048)}toJSON(){return gp(this)}j(){var r;var t=sM,e=this.v,n=t.g,i=vn;if(Ts&&i&&((r=e[i])==null?void 0:r[n])!=null&&ls(Xv,3),e=t.g,hf&&vn&&hf===void 0&&(i=(n=this.v)[vn])&&(i=i.da))try{i(n,e,px)}catch(s){Zd(s)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[ge];return du(this,t,e)?hu(this,t,!0):new this.constructor(ws(t,e,!1))}};_e.prototype[us]=hs,_e.prototype.toString=function(){return this.v.toString()};var Ds=class{constructor(t,e,n){this.g=t,this.h=e,t=wu,this.l=!!t&&n===t||!1}};function za(t,e){return new Ds(t,e,wu)}function Fp(t,e,n,i,r){Ea(t,n,zp(e,i),r)}const Ax=za((function(t,e,n,i,r){return t.h===2&&(Eo(t,vu(e,i,n),r),!0)}),Fp),bx=za((function(t,e,n,i,r){return t.h===2&&(Eo(t,vu(e,i,n),r),!0)}),Fp);var Va=Symbol(),Ga=Symbol(),Rl=Symbol(),Af=Symbol(),bf=Symbol();let Op,Bp;function Rr(t,e,n,i){var r=i[t];if(r)return r;(r={}).qa=i,r.T=(function(h){switch(typeof h){case"boolean":return _x||(_x=[0,void 0,!0]);case"number":return h>0?void 0:h===0?vx||(vx=[0,void 0]):[-h,void 0];case"string":return[0,h];case"object":return h}})(i[0]);var s=i[1];let o=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++o])=="function"&&(r.ma=!0,Op??(Op=s),Bp??(Bp=i[o+1]),s=i[o+=2]));const a={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var c=0;c<s.length;c++)a[s[c]]=s;s=i[++o]}for(c=1;s!==void 0;){let h;typeof s=="number"&&(c+=s,s=i[++o]);var l=void 0;if(s instanceof Ds?h=s:(h=Ax,o--),h==null?void 0:h.l){s=i[++o],l=i;var u=o;typeof s=="function"&&(s=s(),l[u]=s),l=s}for(u=c+1,typeof(s=i[++o])=="number"&&s<0&&(u-=s,s=i[++o]);c<u;c++){const d=a[c];l?n(r,c,h,l,d):e(r,c,h,d)}}return i[t]=r}function kp(t){return Array.isArray(t)?t[0]instanceof Ds?t:[bx,t]:[t,void 0]}function zp(t,e){return t instanceof _e?t.v:Array.isArray(t)?gr(t,e):void 0}function Lu(t,e,n,i){const r=n.g;t[e]=i?(s,o,a)=>r(s,o,a,i):r}function Du(t,e,n,i,r){const s=n.g;let o,a;t[e]=(c,l,u)=>s(c,l,u,a||(a=Rr(Ga,Lu,Du,i).T),o||(o=Uu(i)),r)}function Uu(t){let e=t[Rl];if(e!=null)return e;const n=Rr(Ga,Lu,Du,t);return e=n.ma?(i,r)=>Op(i,r,n):(i,r)=>{for(;Pp(r)&&r.h!=4;){var s=r.l,o=n[s];if(o==null){var a=n.ba;a&&(a=a[s])&&(a=Rx(a))!=null&&(o=n[s]=a)}if(o==null||!o(r,i,s)){if(o=(a=r).m,ua(a),a.ha)var c=void 0;else c=a.g.g-o,a.g.g=o,c=wp(a.g,c);o=void 0,a=i,c&&((o=a[vn]??(a[vn]=new Al))[s]??(o[s]=[])).push(c)}}return(i=Ua(i))&&(i.da=n.qa[bf]),!0},t[Rl]=e,t[bf]=wx.bind(t),e}function wx(t,e,n,i){var r=this[Ga];const s=this[Rl],o=gr(void 0,r.T),a=Ua(t);if(a){var c=!1,l=r.ba;if(l){if(r=(u,h,d)=>{if(d.length!==0)if(l[h])for(const p of d){u=Rp(p);try{c=!0,s(o,u)}finally{Cp(u)}}else i==null||i(t,h,d)},e==null)va(a,r);else if(a!=null){const u=a[e];u&&r(a,e,u)}if(c){let u=0|t[ge];if(2&u&&2048&u&&!(n!=null&&n.Ka))throw Error();const h=As(u),d=(p,_)=>{if(wi(t,p,h)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}_!=null&&(u=Nt(t,u,p,_,h)),delete a[p]};e==null?sp(o,0|o[ge],((p,_)=>{d(p,_)})):d(e,wi(o,e,h))}}}}function Rx(t){const e=(t=kp(t))[0].g;if(t=t[1]){const n=Uu(t),i=Rr(Ga,Lu,Du,t).T;return(r,s,o)=>e(r,s,o,i,n)}return e}function Ha(t,e,n){t[e]=n.h}function Wa(t,e,n,i){let r,s;const o=n.h;t[e]=(a,c,l)=>o(a,c,l,s||(s=Rr(Va,Ha,Wa,i).T),r||(r=Vp(i)))}function Vp(t){let e=t[Af];if(!e){const n=Rr(Va,Ha,Wa,t);e=(i,r)=>Gp(i,r,n),t[Af]=e}return e}function Gp(t,e,n){sp(t,0|t[ge],((i,r)=>{if(r!=null){var s=(function(o,a){var c=o[a];if(c)return c;if((c=o.ba)&&(c=c[a])){var l=(c=kp(c))[0].h;if(c=c[1]){const u=Vp(c),h=Rr(Va,Ha,Wa,c).T;c=o.ma?Bp(h,u):(d,p,_)=>l(d,p,_,h,u)}else c=l;return o[a]=c}})(n,i);s?s(e,r,i):i<500||ls(yl,3)}})),(t=Ua(t))&&va(t,((i,r,s)=>{for(ps(e,e.g.end()),i=0;i<s.length;i++)ps(e,ru(s[i])||new Uint8Array(0))}))}const Cx=xn(0);function Us(t,e){if(Array.isArray(e)){var n=0|e[ge];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(t=-1537&(5|n))!==n&&kt(e,t),2&t&&Object.freeze(e),e}}function Zt(t,e,n){return new Ds(t,e,n)}function Is(t,e,n){return new Ds(t,e,n)}function $t(t,e,n){Nt(t,0|t[ge],e,n,As(0|t[ge]))}var Px=za((function(t,e,n,i,r){if(t.h!==2)return!1;if(t=qn(t=Eo(t,gr([void 0,void 0],i),r)),r=As(i=0|e[ge]),2&i)throw Error();let s=wi(e,n,r);if(s instanceof bi)(2&s.J)!=0?(s=s.V(),s.push(t),Nt(e,i,n,s,r)):s.Ma(t);else if(Array.isArray(s)){var o=0|s[ge];8192&o||kt(s,o|=8192),2&o&&(s=Sp(s),Nt(e,i,n,s,r)),s.push(t)}else Nt(e,i,n,ro([t]),r);return!0}),(function(t,e,n,i,r){if(e instanceof bi)e.forEach(((s,o)=>{Ea(t,n,gr([o,s],i),r)}));else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const o=e[s];Array.isArray(o)&&Ea(t,n,gr(o,i),r)}ro(e)}}));function Hp(t,e,n){(e=ti(e))!=null&&(Un(t,n,5),t=t.g,ou(e),Tu(t))}function Wp(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(xo(64,i));if(Mo(i)){if(r==="string")return fp(i);if(r==="number")return lu(i)}})(e),e!=null&&(typeof e=="string"&&Tf(e),e!=null))switch(Un(t,n,0),typeof e){case"number":t=t.g,fs(e),Qr(t,gt,Lt);break;case"bigint":n=BigInt.asUintN(64,e),n=new wl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Qr(t.g,n.h,n.g);break;default:n=Tf(e),Qr(t.g,n.h,n.g)}}function Xp(t,e,n){(e=bs(e))!=null&&e!=null&&(Un(t,n,0),Oa(t.g,e))}function qp(t,e,n){(e=lp(e))!=null&&(Un(t,n,0),t.g.g.push(e?1:0))}function Yp(t,e,n){(e=Wt(e))!=null&&Ba(t,n,Kd(e))}function jp(t,e,n,i,r){Ea(t,n,zp(e,i),r)}function Kp(t,e,n){(e=e==null||typeof e=="string"||e instanceof si?e:void 0)!=null&&Ba(t,n,Mu(e,!0).buffer)}function Zp(t,e,n){(e=up(e))!=null&&e!=null&&(Un(t,n,0),Ls(t.g,e))}function $p(t,e,n){return(t.h===5||t.h===2)&&(e=Ps(e,0|e[ge],n),t.h==2?Fa(t,Ma,e):e.push(Ma(t.g)),!0)}var Dt=Zt((function(t,e,n){return t.h===5&&($t(e,n,Ma(t.g)),!0)}),Hp,ka),Lx=Is($p,(function(t,e,n){if((e=Us(ti,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(Un(i,r,5),i=i.g,ou(s),Tu(i))}}),ka),Iu=Is($p,(function(t,e,n){if((e=Us(ti,e))!=null&&e.length){Un(t,n,2),Ls(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,ou(e[i]),Tu(n)}}),ka),Dx=Zt((function(t,e,n){return t.h===5&&($t(e,n,(t=Ma(t.g))===0?void 0:t),!0)}),Hp,ka),Ki=Zt((function(t,e,n){return t.h!==0?t=!1:($t(e,n,Su(t.g,cp)),t=!0),t}),Wp,Up),Dc=Zt((function(t,e,n){return t.h!==0?e=!1:($t(e,n,(t=Su(t.g,cp))===Cx?void 0:t),e=!0),e}),Wp,Up),Ux=Zt((function(t,e,n){return t.h!==0?t=!1:($t(e,n,Su(t.g,ix)),t=!0),t}),(function(t,e,n){if(e=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(rx(64,i));if(Mo(i)){if(r==="string")return r=ds(Number(i)),Ar(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(La(i),i=so(gt,Lt))),i;if(r==="number")return(i=ds(i))>=0&&Ar(i)||(fs(i),i=ap(gt,Lt)),i}})(e),e!=null&&(typeof e=="string"&&yf(e),e!=null))switch(Un(t,n,0),typeof e){case"number":t=t.g,fs(e),Qr(t,gt,Lt);break;case"bigint":n=BigInt.asUintN(64,e),n=new bl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Qr(t.g,n.h,n.g);break;default:n=yf(e),Qr(t.g,n.h,n.g)}}),Tx),It=Zt((function(t,e,n){return t.h===0&&($t(e,n,ji(t.g)),!0)}),Xp,Cu),yo=Is((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ps(e,0|e[ge],n),t.h==2?Fa(t,ji,e):e.push(ji(t.g)),!0)}),(function(t,e,n){if((e=Us(bs,e))!=null&&e.length){n=Au(t,n);for(let i=0;i<e.length;i++)Oa(t.g,e[i]);bu(t,n)}}),Cu),Kr=Zt((function(t,e,n){return t.h===0&&($t(e,n,(t=ji(t.g))===0?void 0:t),!0)}),Xp,Cu),vt=Zt((function(t,e,n){return t.h===0&&($t(e,n,Eu(t.g)),!0)}),qp,Dp),Mr=Zt((function(t,e,n){return t.h===0&&($t(e,n,(t=Eu(t.g))===!1?void 0:t),!0)}),qp,Dp),jt=Is((function(t,e,n){return t.h===2&&(t=yu(t),Ps(e,0|e[ge],n).push(t),!0)}),(function(t,e,n){if((e=Us(Wt,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&Ba(i,r,Kd(s))}}),Ru),Gi=Zt((function(t,e,n){return t.h===2&&($t(e,n,(t=yu(t))===""?void 0:t),!0)}),Yp,Ru),ot=Zt((function(t,e,n){return t.h===2&&($t(e,n,yu(t)),!0)}),Yp,Ru),Gt=(function(t,e,n=wu){return new Ds(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=gr(void 0,i),Ps(e,0|e[ge],n).push(i),Eo(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)jp(t,e[s],n,i,r);1&(t=0|e[ge])||kt(e,1|t)}})),dt=za((function(t,e,n,i,r,s){if(t.h!==2)return!1;let o=0|e[ge];return Ep(e,o,s,n,As(o)),Eo(t,e=vu(e,i,n),r),!0}),jp),Jp=Zt((function(t,e,n){return t.h===2&&($t(e,n,Lp(t)),!0)}),Kp,Ip),Ix=Is((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ps(e,0|e[ge],n),t.h==2?Fa(t,oi,e):e.push(oi(t.g)),!0)}),(function(t,e,n){if((e=Us(up,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(Un(i,r,0),Ls(i.g,s))}}),Pu),Nx=Zt((function(t,e,n){return t.h===0&&($t(e,n,(t=oi(t.g))===0?void 0:t),!0)}),Zp,Pu),Kt=Zt((function(t,e,n){return t.h===0&&($t(e,n,ji(t.g)),!0)}),(function(t,e,n){(e=bs(e))!=null&&(e=parseInt(e,10),Un(t,n,0),Oa(t.g,e))}),Np);class Fx{constructor(e,n){var i=yn;this.g=e,this.h=n,this.m=Ze,this.j=be,this.defaultValue=void 0,this.l=i.Oa!=null?op:void 0}register(){Ra(this)}}function ui(t,e){return new Fx(t,e)}function $i(t,e){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=Rp(n,void 0,void 0,s);try{const o=new t,a=o.v;Uu(e)(a,n);var r=o}finally{Cp(n)}}return r}}function Xa(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};Gp(this.v,e,Rr(Va,Ha,Wa,t)),ps(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let o=0;o<r;o++){const a=i[o];n.set(a,s),s+=a.length}return e.l=[n],n}}var wf=class extends _e{constructor(t){super(t)}},Rf=[0,Gi,Zt((function(t,e,n){return t.h===2&&($t(e,n,(t=Lp(t))===yr()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof _e){const i=e.Ra;return void(i?(e=i(e),e!=null&&Ba(t,n,Mu(e,!0).buffer)):ls(yl,3))}if(Array.isArray(e))return void ls(yl,3)}Kp(t,e,n)}),Ip)];let Uc,Cf=globalThis.trustedTypes;function Pf(t){var e;return Uc===void 0&&(Uc=(function(){let n=null;if(!Cf)return n;try{const i=r=>r;n=Cf.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=Uc)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function Zo(t,...e){if(e.length===0)return Pf(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return Pf(n)}var Qp=[0,It,Kt,vt,-1,yo,Kt,-1,vt],Ox=class extends _e{constructor(t){super(t)}},em=[0,vt,ot,vt,Kt,-1,Is((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ps(e,0|e[ge],n),t.h==2?Fa(t,Mx,e):e.push(ji(t.g)),!0)}),(function(t,e,n){if((e=Us(bs,e))!=null&&e.length){n=Au(t,n);for(let i=0;i<e.length;i++)Oa(t.g,e[i]);bu(t,n)}}),Np),ot,-1,[0,vt,-1],Kt,vt,-1],tm=[0,3,vt,-1,2,[0,[2],It,dt,[0,Zt((function(t,e,n){return t.h===0&&($t(e,n,oi(t.g)),!0)}),Zp,Pu)]],[0,Kt,vt,Kt,vt,Kt,vt,ot,-1],[0,[3,4],ot,-1,dt,[0,It],dt,[0,Kt]],[0]],nm=[0,ot,-2],Lf=class extends _e{constructor(t){super(t)}},im=[0],rm=[0,It,vt,1,vt,-4],yn=class extends _e{constructor(t){super(t,2)}},Ft={};Ft[336783863]=[0,ot,vt,-1,It,[0,[1,2,3,4,5,6,7,8,9],dt,im,dt,em,dt,nm,dt,rm,dt,Qp,dt,[0,ot,-2],dt,[0,ot,Kt],dt,tm,dt,[0,Kt,-1,vt]],[0,ot],vt,[0,[1,3],[2,4],dt,[0,yo],-1,dt,[0,jt],-1,Gt,[0,ot,-1]],ot];var Df=[0,Dc,-1,Mr,-3,Dc,yo,Gi,Kr,Dc,-1,Mr,Kr,Mr,-2,Gi];function pt(t,e){Na(t,3,e)}function We(t,e){Na(t,4,e)}var ln=class extends _e{constructor(t){super(t,500)}o(t){return be(this,0,7,t)}},qs=[-1,{}],Uf=[0,ot,1,qs],If=[0,ot,jt,qs];function In(t,e){xu(t,1,ln,e)}function Mt(t,e){Na(t,10,e)}function Je(t,e){Na(t,15,e)}var Tn=class extends _e{constructor(t){super(t,500)}o(t){return be(this,0,1001,t)}},sm=[-500,Gt,[-500,Gi,-1,jt,-3,[-2,Ft,vt],Gt,Rf,Kr,-1,Uf,If,Gt,[0,Gi,Mr],Gi,Df,Kr,jt,987,jt],4,Gt,[-500,ot,-1,[-1,{}],998,ot],Gt,[-500,ot,jt,-1,[-2,{},vt],997,jt,-1],Kr,Gt,[-500,ot,jt,qs,998,jt],jt,Kr,Uf,If,Gt,[0,Gi,-1,qs],jt,-2,Df,Gi,-1,Mr,[0,Mr,Nx],978,qs,Gt,Rf];Tn.prototype.g=Xa(sm);var Bx=$i(Tn,sm),kx=class extends _e{constructor(t){super(t)}},om=class extends _e{constructor(t){super(t)}g(){return Ri(this,kx,1)}},am=[0,Gt,[0,It,Dt,ot,-1]],qa=$i(om,am),zx=class extends _e{constructor(t){super(t)}},Vx=class extends _e{constructor(t){super(t)}},Ic=class extends _e{constructor(t){super(t)}l(){return Ze(this,zx,2)}g(){return Ri(this,Vx,5)}},cm=$i(class extends _e{constructor(t){super(t)}},[0,jt,yo,Iu,[0,Kt,[0,It,-3],[0,Dt,-3],[0,It,-1,[0,Gt,[0,It,-2]]],Gt,[0,Dt,-1,ot,Dt]],ot,-1,Ki,Gt,[0,It,Dt],jt,Ki]),lm=class extends _e{constructor(t){super(t)}},es=$i(class extends _e{constructor(t){super(t)}},[0,Gt,[0,Dt,-4]]),um=class extends _e{constructor(t){super(t)}},To=$i(class extends _e{constructor(t){super(t)}},[0,Gt,[0,Dt,-4]]),Gx=class extends _e{constructor(t){super(t)}},Hx=[0,It,-1,Iu,Kt],hm=class extends _e{constructor(t){super(t)}};hm.prototype.g=Xa([0,Dt,-4,Ki]);var Wx=class extends _e{constructor(t){super(t)}},Xx=$i(class extends _e{constructor(t){super(t)}},[0,Gt,[0,1,It,ot,am],Ki]),Nf=class extends _e{constructor(t){super(t)}},qx=class extends _e{constructor(t){super(t)}na(){const t=_t(this,1,void 0,void 0,Mp);return t??yr()}},Yx=class extends _e{constructor(t){super(t)}},fm=[1,2],jx=$i(class extends _e{constructor(t){super(t)}},[0,Gt,[0,fm,dt,[0,Iu],dt,[0,Jp],It,ot],Ki]),Nu=class extends _e{constructor(t){super(t)}},dm=[0,ot,It,Dt,jt,-1],Ff=class extends _e{constructor(t){super(t)}},Kx=[0,vt,-1],Of=class extends _e{constructor(t){super(t)}},ha=[1,2,3,4,5,6],ya=class extends _e{constructor(t){super(t)}g(){return _t(this,1,void 0,void 0,Mp)!=null}l(){return Wt(_t(this,2))!=null}},Tt=class extends _e{constructor(t){super(t)}g(){return lp(_t(this,2))??!1}},pm=[0,Jp,ot,[0,It,Ki,-1],[0,Ux,Ki]],Ut=[0,pm,vt,[0,ha,dt,rm,dt,em,dt,Qp,dt,im,dt,nm,dt,tm],Kt],Ya=class extends _e{constructor(t){super(t)}},Fu=[0,Ut,Dt,-1,It],Zx=ui(502141897,Ya);Ft[502141897]=Fu;var $x=$i(class extends _e{constructor(t){super(t)}},[0,[0,Kt,-1,Lx,Ix],Hx]),mm=class extends _e{constructor(t){super(t)}},gm=class extends _e{constructor(t){super(t)}},Cl=[0,Ut,Dt,[0,Ut],vt],Jx=ui(508968150,gm);Ft[508968150]=[0,Ut,Fu,Cl,Dt,[0,[0,pm]]],Ft[508968149]=Cl;var Xr=class extends _e{constructor(t){super(t)}l(){return Ze(this,Nu,2)}g(){rt(this,2)}},_m=[0,Ut,dm];Ft[478825465]=_m;var Qx=class extends _e{constructor(t){super(t)}},vm=class extends _e{constructor(t){super(t)}},Ou=class extends _e{constructor(t){super(t)}},Bu=class extends _e{constructor(t){super(t)}},xm=class extends _e{constructor(t){super(t)}},Bf=[0,Ut,[0,Ut],_m,-1],Mm=[0,Ut,Dt,It],ku=[0,Ut,Dt],Sm=[0,Ut,Mm,ku,Dt],eM=ui(479097054,xm);Ft[479097054]=[0,Ut,Sm,Bf],Ft[463370452]=Bf,Ft[464864288]=Mm;var tM=ui(462713202,Bu);Ft[462713202]=Sm,Ft[474472470]=ku;var nM=class extends _e{constructor(t){super(t)}},Em=class extends _e{constructor(t){super(t)}},ym=class extends _e{constructor(t){super(t)}},Tm=class extends _e{constructor(t){super(t)}},zu=[0,Ut,Dt,-1,It],Pl=[0,Ut,Dt,vt];Tm.prototype.g=Xa([0,Ut,ku,[0,Ut],Fu,Cl,zu,Pl]);var Am=class extends _e{constructor(t){super(t)}},iM=ui(456383383,Am);Ft[456383383]=[0,Ut,dm];var bm=class extends _e{constructor(t){super(t)}},rM=ui(476348187,bm);Ft[476348187]=[0,Ut,Kx];var wm=class extends _e{constructor(t){super(t)}},kf=class extends _e{constructor(t){super(t)}},Rm=[0,Kt,-1],sM=ui(458105876,class extends _e{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[ge];return t=Mn(this,n),e=(function(i,r,s,o){var a=kf;!o&&Rs(i)&&(s=0|(r=i.v)[ge]);var c=wi(r,2);if(i=!1,c==null){if(o)return xf();c=[]}else if(c.constructor===bi){if(!(2&c.J)||o)return c;c=c.V()}else Array.isArray(c)?i=!!(2&(0|c[ge])):c=[];if(o){if(!c.length)return xf();i||(i=!0,vo(c))}else i&&(i=!1,ro(c),c=Sp(c));return!i&&32&s&&_o(c,32),s=Nt(r,s,2,o=new bi(c,a,ax,void 0)),i||wr(r,s),o})(this,e,n,t),!t&&kf&&(e.ra=!0),e}});Ft[458105876]=[0,Rm,Px,[!0,Ki,[0,ot,-1,jt]],[0,yo,vt,Kt]];var Vu=class extends _e{constructor(t){super(t)}},Cm=ui(458105758,Vu);Ft[458105758]=[0,Ut,ot,Rm];var Nc=class extends _e{constructor(t){super(t)}},zf=[0,Dx,-1,Mr],oM=class extends _e{constructor(t){super(t)}},Pm=class extends _e{constructor(t){super(t)}},Ll=[1,2];Pm.prototype.g=Xa([0,Ll,dt,zf,dt,[0,Gt,zf]]);var Lm=class extends _e{constructor(t){super(t)}},aM=ui(443442058,Lm);Ft[443442058]=[0,Ut,ot,It,Dt,jt,-1,vt,Dt],Ft[514774813]=zu;var Dm=class extends _e{constructor(t){super(t)}},cM=ui(516587230,Dm);function Dl(t,e){return e=e?e.clone():new Nu,t.displayNamesLocale!==void 0?rt(e,1,So(t.displayNamesLocale)):t.displayNamesLocale===void 0&&rt(e,1),t.maxResults!==void 0?Ci(e,2,t.maxResults):"maxResults"in t&&rt(e,2),t.scoreThreshold!==void 0?Me(e,3,t.scoreThreshold):"scoreThreshold"in t&&rt(e,3),t.categoryAllowlist!==void 0?xa(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&rt(e,4),t.categoryDenylist!==void 0?xa(e,5,t.categoryDenylist):"categoryDenylist"in t&&rt(e,5),e}function Um(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function Gu(t,e=-1,n=""){return{categories:t.map((i=>({index:Dn(i,1)??0??-1,score:bt(i,2)??0,categoryName:Wt(_t(i,3))??""??"",displayName:Wt(_t(i,4))??""??""}))),headIndex:e,headName:n}}function lM(t){const e={classifications:Ri(t,Wx,1).map((n=>{var i;return Gu(((i=Ze(n,om,4))==null?void 0:i.g())??[],Dn(n,2)??0,Wt(_t(n,3))??"")}))};return(function(n){return n==null?n:typeof n=="bigint"?(Tl(n)?n=Number(n):(n=xo(64,n),n=Tl(n)?Number(n):String(n)),n):Mo(n)?typeof n=="number"?lu(n):fp(n):void 0})(_t(t,2,void 0,void 0,_a))!=null&&(e.timestampMs=Um(_t(t,2,void 0,void 0,_a)??vp)),e}function Im(t){var o,a;var e=mr(t,3,ti,pr()),n=mr(t,2,bs,pr()),i=mr(t,1,Wt,pr()),r=mr(t,9,Wt,pr());const s={categories:[],keypoints:[]};for(let c=0;c<e.length;c++)s.categories.push({score:e[c],index:n[c]??-1,categoryName:i[c]??"",displayName:r[c]??""});if((e=(o=Ze(t,Ic,4))==null?void 0:o.l())&&(s.boundingBox={originX:Dn(e,1,Fi)??0,originY:Dn(e,2,Fi)??0,width:Dn(e,3,Fi)??0,height:Dn(e,4,Fi)??0,angle:0}),(a=Ze(t,Ic,4))==null?void 0:a.g().length)for(const c of Ze(t,Ic,4).g())s.keypoints.push({x:_t(c,1,void 0,Fi,ti)??0,y:_t(c,2,void 0,Fi,ti)??0,score:_t(c,4,void 0,Fi,ti)??0,label:Wt(_t(c,3,void 0,Fi))??""});return s}function ja(t){const e=[];for(const n of Ri(t,um,1))e.push({x:bt(n,1)??0,y:bt(n,2)??0,z:bt(n,3)??0,visibility:bt(n,4)??0});return e}function Ys(t){const e=[];for(const n of Ri(t,lm,1))e.push({x:bt(n,1)??0,y:bt(n,2)??0,z:bt(n,3)??0,visibility:bt(n,4)??0});return e}function Vf(t){return Array.from(t,(e=>e>127?e-256:e))}function Gf(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let $o;Ft[516587230]=[0,Ut,zu,Pl,Dt],Ft[518928384]=Pl;const uM=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Nm(t){if(t)return!0;if($o===void 0)try{await WebAssembly.instantiate(uM),$o=!0}catch{$o=!1}return $o}async function Jo(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await Nm(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Yr=class{};function Fm(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function Hf(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function Om(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function xe(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Wf(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=Om(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function Xf(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function Zn(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function Oi(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,o)=>{s?(n(i,o),i=[]):i.push(r)}}Yr.forVisionTasks=function(t,e=!1){return Jo("vision",t??Zo``,e)},Yr.forTextTasks=function(t,e=!1){return Jo("text",t??Zo``,e)},Yr.forGenAiTasks=function(t,e=!1){return Jo("genai",t??Zo``,e)},Yr.forAudioTasks=function(t,e=!1){return Jo("audio",t??Zo``,e)},Yr.isSimdSupported=function(t=!1){return Nm(t)};async function hM(t,e,n,i){return t=await(async(r,s,o,a,c)=>{if(s&&await Hf(s),!self.ModuleFactory||o&&(await Hf(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,a)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function Fc(t,e){const n=Ze(t.baseOptions,ya,1)||new ya;typeof e=="string"?(rt(n,2,So(e)),rt(n,1)):e instanceof Uint8Array&&(rt(n,1,su(e,!1)),rt(n,2)),be(t.baseOptions,0,1,n)}function qf(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function he(t,e){t.C=Math.max(t.C,e)}function Ka(t,e){t.B=new ln,Sn(t.B,2,"PassThroughCalculator"),pt(t.B,"free_memory"),We(t.B,"free_memory_unused_out"),Mt(e,"free_memory"),In(e,t.B)}function ms(t,e){pt(t.B,e),We(t.B,e+"_unused_out")}function Za(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var Ul=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,i,r,s,o,a;if(e){const c=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=Ze(this.baseOptions,ya,1))!=null&&r.g()||(s=Ze(this.baseOptions,ya,1))!=null&&s.l()||(o=t.baseOptions)!=null&&o.modelAssetBuffer||(a=t.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(l,u){let h=Ze(l.baseOptions,Of,3);if(!h){var d=h=new Of,p=new Lf;Xs(d,4,ha,p)}"delegate"in u&&(u.delegate==="GPU"?(u=h,d=new Ox,Xs(u,2,ha,d)):(u=h,d=new Lf,Xs(u,4,ha,d))),be(l.baseOptions,0,3,h)})(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then((l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)})).then((l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),Fc(this,"/model.dat"),this.m(),this.L()}));if(c.modelAssetBuffer instanceof Uint8Array)Fc(this,c.modelAssetBuffer);else if(c.modelAssetBuffer)return(async function(l){const u=[];for(var h=0;;){const{done:d,value:p}=await l.read();if(d)break;u.push(p),h+=p.length}if(u.length===0)return new Uint8Array(0);if(u.length===1)return u[0];l=new Uint8Array(h),h=0;for(const d of u)l.set(d,h),h+=d.length;return l})(c.modelAssetBuffer).then((l=>{Fc(this,l),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=Bx(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,qf(this)}finishProcessing(){this.g.finishProcessing(),qf(this)}close(){this.B=void 0,this.g.closeGraph()}};function Xi(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Ul.prototype.close=Ul.prototype.close;class fM{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Yf(t,e,n){const i=t.g;if(n=Xi(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function jf(t,e){const n=t.g,i=Xi(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Xi(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Xi(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new fM(n,i,r,s)}function Hu(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function dM(t,e,n,i){return Hu(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=jf(t,!0)),n=t.u):(t.A||(t.A=jf(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function Bm(t,e,n){return Hu(t,e),t=Xi(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function km(t,e,n){Hu(t,e),t.B||(t.B=Xi(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function pM(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var zm=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Xi(t.createProgram(),"Failed to create WebGL program"),this.X=Yf(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=Yf(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Mi(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Il(t){var e=Mi(t,1);if(!e){if(e=Mi(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=gs(t);var n=Wu(t);if(km(n,i,Vm(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function Vm(t){let e=Mi(t,2);if(!e){const n=gs(t);e=Hm(t);const i=Il(t),r=Gm(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Nl(t)}return e}function gs(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Xi(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Gm(t){if(t=gs(t),!Qo)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Qo=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Qo=t.R16F}return Qo}function Wu(t){return t.l||(t.l=new zm),t.l}function Hm(t){const e=gs(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Mi(t,2);return n||(n=Bm(Wu(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Nl(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Qo,Vt=class{constructor(t,e,n,i,r,s,o){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=o,this.j&&--Kf===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Mi(this,0)}ka(){return!!Mi(this,1)}R(){return!!Mi(this,2)}ja(){return(e=Mi(t=this,0))||(e=Il(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return Il(this)}N(){return Vm(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=gs(this),r=Wu(this);i.activeTexture(i.TEXTURE1),n=Bm(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=Gm(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),km(r,i,n),dM(r,i,!1,(()=>{Hm(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Nl(this)})),pM(r),Nl(this)}}t.push(n)}return new Vt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&gs(this).deleteTexture(Mi(this,2)),Kf=-1}};Vt.prototype.close=Vt.prototype.close,Vt.prototype.clone=Vt.prototype.clone,Vt.prototype.getAsWebGLTexture=Vt.prototype.N,Vt.prototype.getAsFloat32Array=Vt.prototype.ia,Vt.prototype.getAsUint8Array=Vt.prototype.ja,Vt.prototype.hasWebGLTexture=Vt.prototype.R,Vt.prototype.hasFloat32Array=Vt.prototype.ka,Vt.prototype.hasUint8Array=Vt.prototype.Fa;var Kf=250;function Yn(...t){return t.map((([e,n])=>({start:e,end:n})))}const mM=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((Zf=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:Fm()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),xe(this,i||"input_audio",(s=>{xe(this,r=r||"audio_header",(o=>{this.i._configureAudio(s,o,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){Zn(this,"__graph_config__",(e=>{t(e)})),xe(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),xe(this,i,(o=>{this.i._addAudioToInputStream(this.g,e,n,o,r)}))}addGpuBufferToStream(t,e,n){xe(this,e,(i=>{const[r,s]=Wf(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){xe(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){xe(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){xe(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){xe(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){xe(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){xe(this,e,(i=>{xe(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){xe(this,e,(i=>{Xf(this,Object.keys(t),(r=>{Xf(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){xe(this,n,(r=>{xe(this,e,(s=>{const o=this.i._malloc(t.length);this.i.HEAPU8.set(t,o),this.i._addProtoToInputStream(o,t.length,s,r,i),this.i._free(o)}))}))}addEmptyPacketToStream(t,e){xe(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){xe(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){xe(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){xe(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){xe(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){xe(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){xe(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)xe(this,s,(o=>{this.i._addStringVectorEntry(r,o)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){xe(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){xe(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){xe(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){xe(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){xe(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){xe(this,e,(n=>{xe(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){xe(this,n,(i=>{xe(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){xe(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){xe(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){xe(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){xe(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){xe(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){xe(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)xe(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){Zn(this,t,e),xe(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){Oi(this,t,e),xe(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){Zn(this,t,e),xe(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){Oi(this,t,e),xe(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){Zn(this,t,e),xe(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){Oi(this,t,e),xe(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){Zn(this,t,e),xe(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){Oi(this,t,e),xe(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){Zn(this,t,e),xe(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){Oi(this,t,e),xe(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){Zn(this,t,e),xe(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){Oi(this,t,e),xe(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){Zn(this,t,e),xe(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){Oi(this,t,e),xe(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Zn(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),xe(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Zf{get ga(){return this.i}pa(t,e,n){xe(this,e,(i=>{const[r,s]=Wf(this,t,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)}))}Z(t,e){Zn(this,t,e),xe(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){Oi(this,t,e),xe(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var Zf,jn=class extends mM{};async function Ye(t,e,n){return(async function(i,r,s,o){return hM(i,r,s,o)})(t,n.canvas??(Fm()?void 0:document.createElement("canvas")),e,n)}function Wm(t,e,n,i){if(t.U){const s=new hm;if(n!=null&&n.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Me(s,1,(r.left+r.right)/2),Me(s,2,(r.top+r.bottom)/2),Me(s,4,r.right-r.left),Me(s,3,r.bottom-r.top)}else Me(s,1,.5),Me(s,2,.5),Me(s,4,1),Me(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Me(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[o,a]=Om(e);n=bt(s,3)*a/o,r=bt(s,4)*o/a,Me(s,4,n),Me(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function Kn(t,e,n){var i;if((i=t.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Wm(t,e,n,t.C+1)}function hi(t,e,n,i){var r;if(!((r=t.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Wm(t,e,n,i)}function _s(t,e,n,i){var r=e.data;const s=e.width,o=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==o)throw Error("Unsupported channel count: "+r.length/o);return t=new Vt([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var En=class extends Ul{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new zm}l(t,e=!0){if("runningMode"in t&&rt(this.baseOptions,2,oo(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};En.prototype.close=En.prototype.close;var Cn=class extends En{constructor(t,e){super(new jn(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},be(t=this.h=new Ya,0,1,e=new Tt),Me(this.h,2,.5),Me(this.h,3,.3)}get baseOptions(){return Ze(this.h,Tt,1)}set baseOptions(t){be(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Me(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Me(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},Kn(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},hi(this,t,n,e),this.j}m(){var t=new Tn;Mt(t,"image_in"),Mt(t,"norm_rect_in"),Je(t,"detections");const e=new yn;li(e,Zx,this.h);const n=new ln;Sn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),pt(n,"IMAGE:image_in"),pt(n,"NORM_RECT:norm_rect_in"),We(n,"DETECTIONS:detections"),n.o(e),In(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=cm(s),this.j.detections.push(Im(i));he(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Cn.prototype.detectForVideo=Cn.prototype.G,Cn.prototype.detect=Cn.prototype.F,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=async function(t,e){return Ye(Cn,t,{baseOptions:{modelAssetPath:e}})},Cn.createFromModelBuffer=function(t,e){return Ye(Cn,t,{baseOptions:{modelAssetBuffer:e}})},Cn.createFromOptions=function(t,e){return Ye(Cn,t,e)};var Xu=Yn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),qu=Yn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Yu=Yn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Xm=Yn([474,475],[475,476],[476,477],[477,474]),ju=Yn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Ku=Yn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),qm=Yn([469,470],[470,471],[471,472],[472,469]),Zu=Yn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Ym=[...Xu,...qu,...Yu,...ju,...Ku,...Zu],jm=Yn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function $f(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var yt=class extends En{constructor(t,e){super(new jn(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,be(t=this.h=new gm,0,1,e=new Tt),this.A=new mm,be(this.h,0,3,this.A),this.u=new Ya,be(this.h,0,2,this.u),Ci(this.u,4,1),Me(this.u,2,.5),Me(this.A,2,.5),Me(this.h,4,.5)}get baseOptions(){return Ze(this.h,Tt,1)}set baseOptions(t){be(this.h,0,1,t)}o(t){return"numFaces"in t&&Ci(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Me(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Me(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Me(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return $f(this),Kn(this,t,e),this.j}G(t,e,n){return $f(this),hi(this,t,n,e),this.j}m(){var t=new Tn;Mt(t,"image_in"),Mt(t,"norm_rect"),Je(t,"face_landmarks");const e=new yn;li(e,Jx,this.h);const n=new ln;Sn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),pt(n,"IMAGE:image_in"),pt(n,"NORM_RECT:norm_rect"),We(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),In(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=To(s),this.j.faceLandmarks.push(ja(i));he(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{he(this,i)})),this.outputFaceBlendshapes&&(Je(t,"blendshapes"),We(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=qa(s),this.j.faceBlendshapes.push(Gu(i.g()??[]));he(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{he(this,i)}))),this.outputFacialTransformationMatrixes&&(Je(t,"face_geometry"),We(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=Ze(i=$x(s),Gx,2))&&this.j.facialTransformationMatrixes.push({rows:Dn(i,1)??0??0,columns:Dn(i,2)??0??0,data:mr(i,3,ti,pr()).slice()??[]});he(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{he(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};yt.prototype.detectForVideo=yt.prototype.G,yt.prototype.detect=yt.prototype.F,yt.prototype.setOptions=yt.prototype.o,yt.createFromModelPath=function(t,e){return Ye(yt,t,{baseOptions:{modelAssetPath:e}})},yt.createFromModelBuffer=function(t,e){return Ye(yt,t,{baseOptions:{modelAssetBuffer:e}})},yt.createFromOptions=function(t,e){return Ye(yt,t,e)},yt.FACE_LANDMARKS_LIPS=Xu,yt.FACE_LANDMARKS_LEFT_EYE=qu,yt.FACE_LANDMARKS_LEFT_EYEBROW=Yu,yt.FACE_LANDMARKS_LEFT_IRIS=Xm,yt.FACE_LANDMARKS_RIGHT_EYE=ju,yt.FACE_LANDMARKS_RIGHT_EYEBROW=Ku,yt.FACE_LANDMARKS_RIGHT_IRIS=qm,yt.FACE_LANDMARKS_FACE_OVAL=Zu,yt.FACE_LANDMARKS_CONTOURS=Ym,yt.FACE_LANDMARKS_TESSELATION=jm;var $u=Yn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Jf(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Qf(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function ed(t,e=!0){const n=[];for(const r of t){var i=qa(r);t=[];for(const s of i.g())i=e&&Dn(s,1)!=null?Dn(s,1)??0:-1,t.push({score:bt(s,2)??0,index:i,categoryName:Wt(_t(s,3))??""??"",displayName:Wt(_t(s,4))??""??""});n.push(t)}return n}var dn=class extends En{constructor(t,e){super(new jn(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],be(t=this.j=new xm,0,1,e=new Tt),this.u=new Bu,be(this.j,0,2,this.u),this.D=new Ou,be(this.u,0,3,this.D),this.A=new vm,be(this.u,0,2,this.A),this.h=new Qx,be(this.j,0,3,this.h),Me(this.A,2,.5),Me(this.u,4,.5),Me(this.D,2,.5)}get baseOptions(){return Ze(this.j,Tt,1)}set baseOptions(t){be(this.j,0,1,t)}o(t){var r,s,o,a;if(Ci(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&Me(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Me(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Me(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Xr,n=e,i=Dl(t.cannedGesturesClassifierOptions,(r=Ze(this.h,Xr,3))==null?void 0:r.l());be(n,0,2,i),be(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((s=Ze(this.h,Xr,3))==null||s.g());return t.customGesturesClassifierOptions?(be(n=e=new Xr,0,2,i=Dl(t.customGesturesClassifierOptions,(o=Ze(this.h,Xr,4))==null?void 0:o.l())),be(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&((a=Ze(this.h,Xr,4))==null||a.g()),this.l(t)}Ha(t,e){return Jf(this),Kn(this,t,e),Qf(this)}Ia(t,e,n){return Jf(this),hi(this,t,n,e),Qf(this)}m(){var t=new Tn;Mt(t,"image_in"),Mt(t,"norm_rect"),Je(t,"hand_gestures"),Je(t,"hand_landmarks"),Je(t,"world_hand_landmarks"),Je(t,"handedness");const e=new yn;li(e,eM,this.j);const n=new ln;Sn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),pt(n,"IMAGE:image_in"),pt(n,"NORM_RECT:norm_rect"),We(n,"HAND_GESTURES:hand_gestures"),We(n,"LANDMARKS:hand_landmarks"),We(n,"WORLD_LANDMARKS:world_hand_landmarks"),We(n,"HANDEDNESS:handedness"),n.o(e),In(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=To(s);const o=[];for(const a of Ri(i,um,1))o.push({x:bt(a,1)??0,y:bt(a,2)??0,z:bt(a,3)??0,visibility:bt(a,4)??0});this.landmarks.push(o)}he(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{he(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=es(s);const o=[];for(const a of Ri(i,lm,1))o.push({x:bt(a,1)??0,y:bt(a,2)??0,z:bt(a,3)??0,visibility:bt(a,4)??0});this.worldLandmarks.push(o)}he(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{he(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...ed(i,!1)),he(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{he(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...ed(i)),he(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function td(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}dn.prototype.recognizeForVideo=dn.prototype.Ia,dn.prototype.recognize=dn.prototype.Ha,dn.prototype.setOptions=dn.prototype.o,dn.createFromModelPath=function(t,e){return Ye(dn,t,{baseOptions:{modelAssetPath:e}})},dn.createFromModelBuffer=function(t,e){return Ye(dn,t,{baseOptions:{modelAssetBuffer:e}})},dn.createFromOptions=function(t,e){return Ye(dn,t,e)},dn.HAND_CONNECTIONS=$u;var on=class extends En{constructor(t,e){super(new jn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],be(t=this.h=new Bu,0,1,e=new Tt),this.u=new Ou,be(this.h,0,3,this.u),this.j=new vm,be(this.h,0,2,this.j),Ci(this.j,3,1),Me(this.j,2,.5),Me(this.u,2,.5),Me(this.h,4,.5)}get baseOptions(){return Ze(this.h,Tt,1)}set baseOptions(t){be(this.h,0,1,t)}o(t){return"numHands"in t&&Ci(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Me(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Me(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Me(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Kn(this,t,e),td(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],hi(this,t,n,e),td(this)}m(){var t=new Tn;Mt(t,"image_in"),Mt(t,"norm_rect"),Je(t,"hand_landmarks"),Je(t,"world_hand_landmarks"),Je(t,"handedness");const e=new yn;li(e,tM,this.h);const n=new ln;Sn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),pt(n,"IMAGE:image_in"),pt(n,"NORM_RECT:norm_rect"),We(n,"LANDMARKS:hand_landmarks"),We(n,"WORLD_LANDMARKS:world_hand_landmarks"),We(n,"HANDEDNESS:handedness"),n.o(e),In(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=To(s),this.landmarks.push(ja(i));he(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{he(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=es(s),this.worldLandmarks.push(Ys(i));he(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{he(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,o=s.push;const a=[];for(const c of i){i=qa(c);const l=[];for(const u of i.g())l.push({score:bt(u,2)??0,index:Dn(u,1)??0??-1,categoryName:Wt(_t(u,3))??""??"",displayName:Wt(_t(u,4))??""??""});a.push(l)}o.call(s,...a),he(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};on.prototype.detectForVideo=on.prototype.G,on.prototype.detect=on.prototype.F,on.prototype.setOptions=on.prototype.o,on.createFromModelPath=function(t,e){return Ye(on,t,{baseOptions:{modelAssetPath:e}})},on.createFromModelBuffer=function(t,e){return Ye(on,t,{baseOptions:{modelAssetBuffer:e}})},on.createFromOptions=function(t,e){return Ye(on,t,e)},on.HAND_CONNECTIONS=$u;var Km=Yn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function nd(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function id(t){try{if(!t.D)return t.h;t.D(t.h)}finally{Za(t)}}function ea(t,e){t=To(t),e.push(ja(t))}var ht=class extends En{constructor(t,e){super(new jn(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,be(t=this.j=new Tm,0,1,e=new Tt),this.I=new Ou,be(this.j,0,2,this.I),this.W=new nM,be(this.j,0,3,this.W),this.u=new Ya,be(this.j,0,4,this.u),this.O=new mm,be(this.j,0,5,this.O),this.A=new Em,be(this.j,0,6,this.A),this.M=new ym,be(this.j,0,7,this.M),Me(this.u,2,.5),Me(this.u,3,.3),Me(this.O,2,.5),Me(this.A,2,.5),Me(this.A,3,.3),Me(this.M,2,.5),Me(this.I,2,.5)}get baseOptions(){return Ze(this.j,Tt,1)}set baseOptions(t){be(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Me(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Me(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Me(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Me(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Me(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Me(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Me(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,nd(this),Kn(this,t,i),id(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,nd(this),hi(this,t,r,e),id(this)}m(){var t=new Tn;Mt(t,"input_frames_image"),Je(t,"pose_landmarks"),Je(t,"pose_world_landmarks"),Je(t,"face_landmarks"),Je(t,"left_hand_landmarks"),Je(t,"left_hand_world_landmarks"),Je(t,"right_hand_landmarks"),Je(t,"right_hand_world_landmarks");const e=new yn,n=new wf;Sn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))rt(r,2,Ia(s,0,ao));else{if(!(typeof s=="string"||s instanceof si||iu(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Bi(r,2,su(s,!1),yr())}})(n,this.j.g());const i=new ln;Sn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),xu(i,8,wf,n),pt(i,"IMAGE:input_frames_image"),We(i,"POSE_LANDMARKS:pose_landmarks"),We(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),We(i,"FACE_LANDMARKS:face_landmarks"),We(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),We(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),We(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),We(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),In(t,i),Ka(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{ea(r,this.h.poseLandmarks),he(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{he(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var o=this.h.poseWorldLandmarks;r=es(r),o.push(Ys(r)),he(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{he(this,r)})),this.outputPoseSegmentationMasks&&(We(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),ms(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[_s(this,r,!0,!this.D)],he(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],he(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{ea(r,this.h.faceLandmarks),he(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{he(this,r)})),this.outputFaceBlendshapes&&(Je(t,"extra_blendshapes"),We(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=qa(r),o.push(Gu(r.g()??[]))),he(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{he(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{ea(r,this.h.leftHandLandmarks),he(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{he(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var o=this.h.leftHandWorldLandmarks;r=es(r),o.push(Ys(r)),he(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{he(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{ea(r,this.h.rightHandLandmarks),he(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{he(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var o=this.h.rightHandWorldLandmarks;r=es(r),o.push(Ys(r)),he(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{he(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ht.prototype.detectForVideo=ht.prototype.G,ht.prototype.detect=ht.prototype.F,ht.prototype.setOptions=ht.prototype.o,ht.createFromModelPath=function(t,e){return Ye(ht,t,{baseOptions:{modelAssetPath:e}})},ht.createFromModelBuffer=function(t,e){return Ye(ht,t,{baseOptions:{modelAssetBuffer:e}})},ht.createFromOptions=function(t,e){return Ye(ht,t,e)},ht.HAND_CONNECTIONS=$u,ht.POSE_CONNECTIONS=Km,ht.FACE_LANDMARKS_LIPS=Xu,ht.FACE_LANDMARKS_LEFT_EYE=qu,ht.FACE_LANDMARKS_LEFT_EYEBROW=Yu,ht.FACE_LANDMARKS_LEFT_IRIS=Xm,ht.FACE_LANDMARKS_RIGHT_EYE=ju,ht.FACE_LANDMARKS_RIGHT_EYEBROW=Ku,ht.FACE_LANDMARKS_RIGHT_IRIS=qm,ht.FACE_LANDMARKS_FACE_OVAL=Zu,ht.FACE_LANDMARKS_CONTOURS=Ym,ht.FACE_LANDMARKS_TESSELATION=jm;var Pn=class extends En{constructor(t,e){super(new jn(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},be(t=this.h=new Am,0,1,e=new Tt)}get baseOptions(){return Ze(this.h,Tt,1)}set baseOptions(t){be(this.h,0,1,t)}o(t){return be(this.h,0,2,Dl(t,Ze(this.h,Nu,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},Kn(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},hi(this,t,n,e),this.j}m(){var t=new Tn;Mt(t,"input_image"),Mt(t,"norm_rect"),Je(t,"classifications");const e=new yn;li(e,iM,this.h);const n=new ln;Sn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),pt(n,"IMAGE:input_image"),pt(n,"NORM_RECT:norm_rect"),We(n,"CLASSIFICATIONS:classifications"),n.o(e),In(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=lM(Xx(i)),he(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Pn.prototype.classifyForVideo=Pn.prototype.ta,Pn.prototype.classify=Pn.prototype.sa,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=function(t,e){return Ye(Pn,t,{baseOptions:{modelAssetPath:e}})},Pn.createFromModelBuffer=function(t,e){return Ye(Pn,t,{baseOptions:{modelAssetBuffer:e}})},Pn.createFromOptions=function(t,e){return Ye(Pn,t,e)};var pn=class extends En{constructor(t,e){super(new jn(t,e),"image_in","norm_rect",!0),this.h=new bm,this.embeddings={embeddings:[]},be(t=this.h,0,1,e=new Tt)}get baseOptions(){return Ze(this.h,Tt,1)}set baseOptions(t){be(this.h,0,1,t)}o(t){var e=this.h,n=Ze(this.h,Ff,2);return n=n?n.clone():new Ff,t.l2Normalize!==void 0?rt(n,1,oo(t.l2Normalize)):"l2Normalize"in t&&rt(n,1),t.quantize!==void 0?rt(n,2,oo(t.quantize)):"quantize"in t&&rt(n,2),be(e,0,2,n),this.l(t)}za(t,e){return Kn(this,t,e),this.embeddings}Aa(t,e,n){return hi(this,t,n,e),this.embeddings}m(){var t=new Tn;Mt(t,"image_in"),Mt(t,"norm_rect"),Je(t,"embeddings_out");const e=new yn;li(e,rM,this.h);const n=new ln;Sn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),pt(n,"IMAGE:image_in"),pt(n,"NORM_RECT:norm_rect"),We(n,"EMBEDDINGS:embeddings_out"),n.o(e),In(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=jx(i),this.embeddings=(function(s){return{embeddings:Ri(s,Yx,1).map((o=>{var l,u;const a={headIndex:Dn(o,3)??0??-1,headName:Wt(_t(o,4))??""??""};var c=o.v;return yp(c,0|c[ge],Nf,Lc(o,1))!==void 0?(o=mr(o=Ze(o,Nf,Lc(o,1),void 0),1,ti,pr()),a.floatEmbedding=o.slice()):(c=new Uint8Array(0),a.quantizedEmbedding=((u=(l=Ze(o,qx,Lc(o,2),void 0))==null?void 0:l.na())==null?void 0:u.h())??c),a})),timestampMs:Um(_t(s,2,void 0,void 0,_a)??vp)}})(i),he(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};pn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Gf(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Gf(Vf(t.quantizedEmbedding),Vf(e.quantizedEmbedding))}return t},pn.prototype.embedForVideo=pn.prototype.Aa,pn.prototype.embed=pn.prototype.za,pn.prototype.setOptions=pn.prototype.o,pn.createFromModelPath=function(t,e){return Ye(pn,t,{baseOptions:{modelAssetPath:e}})},pn.createFromModelBuffer=function(t,e){return Ye(pn,t,{baseOptions:{modelAssetBuffer:e}})},pn.createFromOptions=function(t,e){return Ye(pn,t,e)};var Fl=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};function gM(t){var n,i;const e=(function(r){return Ri(r,ln,1)})(t.ca()).filter((r=>(Wt(_t(r,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=Ze(e[0],yn,7))==null?void 0:n.j())==null?void 0:i.g())??new Map).forEach(((r,s)=>{t.u[Number(s)]=Wt(_t(r,1))??""}))}function rd(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function sd(t){try{const e=new Fl(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Za(t)}}Fl.prototype.close=Fl.prototype.close;var sn=class extends En{constructor(t,e){super(new jn(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Vu,this.A=new wm,be(this.h,0,3,this.A),be(t=this.h,0,1,e=new Tt)}get baseOptions(){return Ze(this.h,Tt,1)}set baseOptions(t){be(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?rt(this.h,2,So(t.displayNamesLocale)):"displayNamesLocale"in t&&rt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){gM(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,rd(this),Kn(this,t,i),sd(this)}La(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,rd(this),hi(this,t,r,e),sd(this)}Da(){return this.u}m(){var t=new Tn;Mt(t,"image_in"),Mt(t,"norm_rect");const e=new yn;li(e,Cm,this.h);const n=new ln;Sn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),pt(n,"IMAGE:image_in"),pt(n,"NORM_RECT:norm_rect"),n.o(e),In(t,n),Ka(this,t),this.outputConfidenceMasks&&(Je(t,"confidence_masks"),We(n,"CONFIDENCE_MASKS:confidence_masks"),ms(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>_s(this,s,!0,!this.j))),he(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],he(this,i)}))),this.outputCategoryMask&&(Je(t,"category_mask"),We(n,"CATEGORY_MASK:category_mask"),ms(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=_s(this,i,!1,!this.j),he(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,he(this,i)}))),Je(t,"quality_scores"),We(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,he(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};sn.prototype.getLabels=sn.prototype.Da,sn.prototype.segmentForVideo=sn.prototype.La,sn.prototype.segment=sn.prototype.segment,sn.prototype.setOptions=sn.prototype.o,sn.createFromModelPath=function(t,e){return Ye(sn,t,{baseOptions:{modelAssetPath:e}})},sn.createFromModelBuffer=function(t,e){return Ye(sn,t,{baseOptions:{modelAssetBuffer:e}})},sn.createFromOptions=function(t,e){return Ye(sn,t,e)};var Ol=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};Ol.prototype.close=Ol.prototype.close;var $n=class extends En{constructor(t,e){super(new jn(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Vu,this.u=new wm,be(this.h,0,3,this.u),be(t=this.h,0,1,e=new Tt)}get baseOptions(){return Ze(this.h,Tt,1)}set baseOptions(t){be(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new Pm,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new Nc;Bi(s,3,oo(!0),!1),Bi(s,1,Hs(e.keypoint.x),0),Bi(s,2,Hs(e.keypoint.y),0),Xs(i,1,Ll,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const a=new oM;for(s of e.scribble)Bi(e=new Nc,3,oo(!0),!1),Bi(e,1,Hs(s.x),0),Bi(e,2,Hs(s.y),0),xu(a,1,Nc,e);Xs(i,2,Ll,a)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Kn(this,t,r);e:{try{const a=new Ol(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var o=a;break e}this.j(a)}finally{Za(this)}o=void 0}return o}m(){var t=new Tn;Mt(t,"image_in"),Mt(t,"roi_in"),Mt(t,"norm_rect_in");const e=new yn;li(e,Cm,this.h);const n=new ln;Sn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),pt(n,"IMAGE:image_in"),pt(n,"ROI:roi_in"),pt(n,"NORM_RECT:norm_rect_in"),n.o(e),In(t,n),Ka(this,t),this.outputConfidenceMasks&&(Je(t,"confidence_masks"),We(n,"CONFIDENCE_MASKS:confidence_masks"),ms(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>_s(this,s,!0,!this.j))),he(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],he(this,i)}))),this.outputCategoryMask&&(Je(t,"category_mask"),We(n,"CATEGORY_MASK:category_mask"),ms(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=_s(this,i,!1,!this.j),he(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,he(this,i)}))),Je(t,"quality_scores"),We(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,he(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};$n.prototype.segment=$n.prototype.segment,$n.prototype.setOptions=$n.prototype.o,$n.createFromModelPath=function(t,e){return Ye($n,t,{baseOptions:{modelAssetPath:e}})},$n.createFromModelBuffer=function(t,e){return Ye($n,t,{baseOptions:{modelAssetBuffer:e}})},$n.createFromOptions=function(t,e){return Ye($n,t,e)};var Ln=class extends En{constructor(t,e){super(new jn(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},be(t=this.h=new Lm,0,1,e=new Tt)}get baseOptions(){return Ze(this.h,Tt,1)}set baseOptions(t){be(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?rt(this.h,2,So(t.displayNamesLocale)):"displayNamesLocale"in t&&rt(this.h,2),t.maxResults!==void 0?Ci(this.h,3,t.maxResults):"maxResults"in t&&rt(this.h,3),t.scoreThreshold!==void 0?Me(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&rt(this.h,4),t.categoryAllowlist!==void 0?xa(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&rt(this.h,5),t.categoryDenylist!==void 0?xa(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&rt(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},Kn(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},hi(this,t,n,e),this.j}m(){var t=new Tn;Mt(t,"input_frame_gpu"),Mt(t,"norm_rect"),Je(t,"detections");const e=new yn;li(e,aM,this.h);const n=new ln;Sn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),pt(n,"IMAGE:input_frame_gpu"),pt(n,"NORM_RECT:norm_rect"),We(n,"DETECTIONS:detections"),n.o(e),In(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=cm(s),this.j.detections.push(Im(i));he(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{he(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ln.prototype.detectForVideo=Ln.prototype.G,Ln.prototype.detect=Ln.prototype.F,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=async function(t,e){return Ye(Ln,t,{baseOptions:{modelAssetPath:e}})},Ln.createFromModelBuffer=function(t,e){return Ye(Ln,t,{baseOptions:{modelAssetBuffer:e}})},Ln.createFromOptions=function(t,e){return Ye(Ln,t,e)};var Bl=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach((e=>{e.close()}))}};function od(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function ad(t){try{const e=new Bl(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{Za(t)}}Bl.prototype.close=Bl.prototype.close;var mn=class extends En{constructor(t,e){super(new jn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,be(t=this.h=new Dm,0,1,e=new Tt),this.A=new ym,be(this.h,0,3,this.A),this.j=new Em,be(this.h,0,2,this.j),Ci(this.j,4,1),Me(this.j,2,.5),Me(this.A,2,.5),Me(this.h,4,.5)}get baseOptions(){return Ze(this.h,Tt,1)}set baseOptions(t){be(this.h,0,1,t)}o(t){return"numPoses"in t&&Ci(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Me(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Me(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Me(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,od(this),Kn(this,t,i),ad(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,od(this),hi(this,t,r,e),ad(this)}m(){var t=new Tn;Mt(t,"image_in"),Mt(t,"norm_rect"),Je(t,"normalized_landmarks"),Je(t,"world_landmarks"),Je(t,"segmentation_masks");const e=new yn;li(e,cM,this.h);const n=new ln;Sn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),pt(n,"IMAGE:image_in"),pt(n,"NORM_RECT:norm_rect"),We(n,"NORM_LANDMARKS:normalized_landmarks"),We(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),In(t,n),Ka(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=To(s),this.landmarks.push(ja(i));he(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],he(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=es(s),this.worldLandmarks.push(Ys(i));he(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],he(this,i)})),this.outputSegmentationMasks&&(We(n,"SEGMENTATION_MASK:segmentation_masks"),ms(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>_s(this,s,!0,!this.u))),he(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],he(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};mn.prototype.detectForVideo=mn.prototype.G,mn.prototype.detect=mn.prototype.F,mn.prototype.setOptions=mn.prototype.o,mn.createFromModelPath=function(t,e){return Ye(mn,t,{baseOptions:{modelAssetPath:e}})},mn.createFromModelBuffer=function(t,e){return Ye(mn,t,{baseOptions:{modelAssetBuffer:e}})},mn.createFromOptions=function(t,e){return Ye(mn,t,e)},mn.POSE_CONNECTIONS=Km;const cd=""+new URL("church_meeting_room_4k_left_eye-Cly0-1ZS.jpg",import.meta.url).href,ld=""+new URL("church_meeting_room_4k_right_eye-DpBL9BsS.jpg",import.meta.url).href,_M="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='_レイヤー_2'%20data-name='レイヤー%202'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20162.85%20187.33'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='_レイヤー_1-2'%20data-name='レイヤー%201'%3e%3cg%3e%3crect%20width='162.85'%20height='187.33'/%3e%3cg%3e%3cpath%20d='M145.1,187.33c1.41,0,3.51-1.71,3.44-2.6l-.25-3.28-22.81-31.3c27.15-17.72,41.2-48.26,36.47-80.25-3.61-24.43-17.57-44.99-36.6-56.96C102.67-1.33,76.84-3.68,52.82,5.3,31.51,13.26,15.38,28.52,6.62,49.26c-15.49,36.65-3.22,78.7,30.75,100.65l-23.01,31.2c-.07,1.35-.09,3.38.12,4.34s2.57,1.8,3.78,1.8l126.84.09Z'/%3e%3cpath%20class='cls-1'%20d='M145.1,187.33l-126.84-.09c-1.21,0-3.57-.84-3.78-1.8s-.19-2.99-.12-4.34l23.01-31.2C3.4,127.96-8.87,85.91,6.62,49.26,15.38,28.52,31.51,13.26,52.82,5.3c24.02-8.97,49.85-6.62,72.53,7.64,19.02,11.97,32.98,32.53,36.6,56.96,4.73,31.99-9.32,62.53-36.47,80.25l22.81,31.3.25,3.28c.07.9-2.02,2.61-3.44,2.6ZM79.61,154.42c26.53.65,49.53-13.08,62.87-33.61,14.55-22.39,14.96-50.25,2.99-73.41-13.91-26.91-41.91-41.36-71.74-38.19-26.83,2.84-48.79,19.25-59.22,44.05-11.68,27.77-5.33,58.76,15.95,79.94,13.26,13.21,29.57,20.74,49.15,21.22ZM135.73,178.36l-17.6-24.33c-23.77,12.27-50.13,11.62-73.61.07l-17.49,24.21,108.7.06Z'/%3e%3cpath%20d='M79.61,154.42c-19.58-.48-35.89-8.01-49.15-21.22C9.19,112.03,2.83,81.03,14.51,53.26,24.94,28.47,46.91,12.06,73.74,9.21c29.83-3.16,57.83,11.28,71.74,38.19,11.97,23.16,11.56,51.01-2.99,73.41-13.34,20.53-36.34,34.26-62.87,33.61ZM81.74,29.56c1.93-.08,4.89-2.7,4.87-4.39s-2.39-4.49-4.11-4.93c-3.11-.8-6.2,1.74-6.42,4.03-.29,2.88,1.53,5.45,5.66,5.29ZM79.82,122.12c17.93.82,32.85-10.31,38.83-24.83,6.96-16.91,1.75-34.73-10.61-45.73-13.42-11.94-32.28-13.57-47.73-4.46s-22.77,27.58-17.92,45.42c4.33,15.94,19.24,28.77,37.43,29.61Z'/%3e%3cpath%20d='M135.73,178.36l-108.7-.06,17.49-24.21c23.48,11.55,49.84,12.2,73.61-.07l17.6,24.33Z'/%3e%3cpath%20class='cls-1'%20d='M79.82,122.12c-18.19-.84-33.1-13.67-37.43-29.61-4.85-17.84,2.17-36.13,17.92-45.42s34.31-7.48,47.73,4.46c12.36,11,17.57,28.82,10.61,45.73-5.98,14.52-20.9,25.66-38.83,24.83ZM78.53,113.71c18.97,1.76,34.22-12.78,35-30.49.78-17.71-13.03-33.25-31.47-33.63-17.95-.37-32.23,13.32-33.02,30.54-.77,16.78,11.29,31.89,29.49,33.57Z'/%3e%3cpath%20class='cls-1'%20d='M81.74,29.56c-4.13.17-5.95-2.41-5.66-5.29.23-2.3,3.32-4.83,6.42-4.03,1.72.44,4.09,3.32,4.11,4.93.02,1.69-2.94,4.31-4.87,4.39Z'/%3e%3cpath%20d='M78.53,113.71c-18.2-1.69-30.26-16.8-29.49-33.57.79-17.22,15.07-30.91,33.02-30.54,18.45.38,32.25,15.92,31.47,33.63-.78,17.71-16.03,32.25-35,30.49ZM77,60.42c-12.65,2.61-19.68,14.68-16.81,26.43s13.84,19,25.79,16.34c11.52-2.57,19.16-13.64,16.86-25.83-2.12-11.23-13.14-19.57-25.85-16.94Z'/%3e%3cpath%20class='cls-1'%20d='M77,60.42c12.71-2.62,23.73,5.71,25.85,16.94,2.3,12.19-5.34,23.26-16.86,25.83-11.95,2.66-22.97-4.8-25.79-16.34s4.16-23.82,16.81-26.43ZM71.56,91.63c5,5.08,12.8,5.15,17.93,1.18,4.7-3.63,6.79-10.13,4.36-16.32-1.99-5.08-7.86-9.49-14.2-8.28-5.3,1.01-9.63,4.87-11.01,8.86-1.75,5.07-.98,10.6,2.91,14.56Z'/%3e%3cpath%20d='M71.56,91.63c-3.9-3.96-4.66-9.49-2.91-14.56,1.37-3.99,5.71-7.85,11.01-8.86,6.34-1.21,12.2,3.2,14.2,8.28,2.43,6.19.34,12.69-4.36,16.32-5.13,3.96-12.93,3.9-17.93-1.18Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",vM="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='_レイヤー_2'%20data-name='レイヤー%202'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20163.01%20230.57'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='_レイヤー_1-2'%20data-name='レイヤー%201'%3e%3cg%3e%3crect%20width='163.01'%20height='230.57'/%3e%3cg%3e%3cpath%20d='M103.39,96.42l10.53,10.33c.82.63,3.44-.57,3.55-1.48.68-5.63-4.8-11.79-10.3-16.21l-24.95-20.04-22.03-42.98c-5.34-10.42.29-19.21,2.27-18.07l3,1.73,25.98,38.04,28.23,40.65c1.36.69,4.04,1.24,4.97.58s.84-3.3.16-4.48c-6.38-10.86-13.79-20.34-19.57-31.55-4.6-8.91-5.22-19.6-6.89-29.59-1.22-7.36,5-13.36,6.7-11.64l2.82,2.85,27.3,78.18,3.36,3.38c.76.77,4.5-1.3,4.17-2.45l-8.86-31.19c-2.98-10.49.21-25.72,8-22.84l10.66,65.03c1.53,9.35,2.36,18.22,1.66,27.67l-3.11,41.94c-1.02,13.74,1.31,38.96,8.67,36.55,2.31-.76,3.2-3.22,2.53-5.68-3-10.96-3.45-21.5-2.58-32.81l3.08-39.99c.76-9.93-.01-19.43-1.77-29.17l-11.61-64.44c-.52-2.89-2.99-6.28-5.74-7.08-4.26-1.23-8.74-.14-12.17,2.66-2.31,1.89-3.68,6.02-5.12,10.49l-11.3-33.54c-1.34-3.97-5.55-6.99-8.99-7.55-3.77-.61-7.91,1.37-10.54,4.19-6.77,7.26-5.79,15.84-3.93,26.12l-20.03-29.41C69.3,1.38,65.2-.26,61.37.03c-10.06.77-14.99,17.37-9.64,27.64l19.63,37.68c-6.97-.26-12.89.34-18.88,2.62l-33.96,12.9c-4.81,1.83-8.23,5.91-8.7,9.98-.64,5.49,1.57,9.55,6.11,12.48,14.02,9.05,29.31-.95,44.76-1.8,7.6,1.93,13.17,10.27,15.64,17.02,2.18,5.96.73,12.53-3.74,16.48-3.92,3.46-10.04,2.8-14.03-.38l-16.15-12.88c-5.94-4.74-13.17-8.07-20.74-8.93-8.93-1.01-18.23,3.37-21.24,11.94-1.69,4.81,2.02,10.2,6.09,12.94,15.65,10.55,27.36,23.7,37.26,39.7,7.03,11.36,16.29,20.55,27.69,27.21,17.65,10.31,11.56,27.89,19.96,25.75,6.58-1.67-1.14-24.08-11.45-30.1-13.21-7.71-23.56-17.35-31.47-30.7-9.87-16.66-23.3-29.97-39.98-40.13.14-10.33,17.43-9.62,25.58-3.31l16.86,13.06c5.56,4.31,10.7,7.27,18.25,6.01,5.07-.85,11.47-4.25,14.07-10.45,6.55-15.61-1.25-28.46-14.11-38.76-3.55-2.84-7.82-3.8-12.29-2.79l-23.11,5.19c-10.23,2.3-17.36-4.44-15.75-6.45l2.04-2.55,39.14-14.86c7.01-1.99,14.7-1.94,20.67,2.89l23.51,18.98Z'/%3e%3cpath%20class='cls-1'%20d='M103.39,96.42l-23.51-18.98c-5.98-4.82-13.66-4.88-20.67-2.89l-39.14,14.86-2.04,2.55c-1.61,2.01,5.52,8.75,15.75,6.45l23.11-5.19c4.47-1,8.74-.05,12.29,2.79,12.87,10.29,20.66,23.14,14.11,38.76-2.6,6.2-9,9.61-14.07,10.45-7.55,1.26-12.7-1.7-18.25-6.01l-16.86-13.06c-8.15-6.31-25.44-7.02-25.58,3.31,16.68,10.15,30.11,23.47,39.98,40.13,7.91,13.34,18.26,22.99,31.47,30.7,10.31,6.02,18.02,28.43,11.45,30.1-8.41,2.14-2.31-15.44-19.96-25.75-11.4-6.66-20.66-15.85-27.69-27.21-9.9-16-21.61-29.16-37.26-39.7-4.07-2.75-7.78-8.14-6.09-12.94,3.01-8.57,12.3-12.95,21.24-11.94,7.57.86,14.8,4.19,20.74,8.93l16.15,12.88c3.99,3.18,10.11,3.84,14.03.38,4.48-3.95,5.93-10.51,3.74-16.48-2.47-6.76-8.04-15.09-15.64-17.02-15.45.85-30.75,10.85-44.76,1.8-4.54-2.93-6.75-6.99-6.11-12.48.47-4.07,3.89-8.15,8.7-9.98l33.96-12.9c5.99-2.27,11.92-2.88,18.88-2.62l-19.63-37.68C46.37,17.4,51.3.81,61.37.03c3.84-.29,7.93,1.34,10.16,4.61l20.03,29.41c-1.87-10.27-2.85-18.86,3.93-26.12,2.63-2.82,6.76-4.81,10.54-4.19,3.44.56,7.65,3.58,8.99,7.55l11.3,33.54c1.44-4.47,2.8-8.6,5.12-10.49,3.43-2.8,7.91-3.9,12.17-2.66,2.75.8,5.22,4.19,5.74,7.08l11.61,64.44c1.76,9.74,2.53,19.23,1.77,29.17l-3.08,39.99c-.87,11.31-.42,21.85,2.58,32.81.67,2.46-.21,4.92-2.53,5.68-7.36,2.41-9.69-22.82-8.67-36.55l3.11-41.94c.7-9.45-.12-18.32-1.66-27.67l-10.66-65.03c-7.78-2.87-10.98,12.35-8,22.84l8.86,31.19c.33,1.15-3.41,3.21-4.17,2.45l-3.36-3.38L107.86,14.57l-2.82-2.85c-1.7-1.72-7.93,4.28-6.7,11.64,1.66,10,2.28,20.68,6.89,29.59,5.79,11.2,13.2,20.69,19.57,31.55.69,1.17.77,3.81-.16,4.48s-3.61.11-4.97-.58l-28.23-40.65-25.98-38.04-3-1.73c-1.99-1.14-7.61,7.64-2.27,18.07l22.03,42.98,24.95,20.04c5.5,4.42,10.99,10.57,10.3,16.21-.11.91-2.73,2.11-3.55,1.48l-10.53-10.33Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",xM="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='_レイヤー_2'%20data-name='レイヤー%202'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20123.86%20246.74'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='_レイヤー_1-2'%20data-name='レイヤー%201'%3e%3cg%3e%3crect%20width='123.86'%20height='246.74'/%3e%3cg%3e%3cpath%20d='M123.65,187.89l.21-66.7c.1-32.7-24.28-59.63-58.43-60.66,2.35-14.33-4.1-26.9-17.63-31.28l-13.6-4.4c-8.35-2.7-12.8-10.84-12.75-19.45C21.47,2.47,19.83,0,17.4,0c-3.02,0-4.51,2.16-4.51,5.04.03,15.44,9.68,26.77,24.64,29.56,5.81,1.09,12.14,3.39,16,7.79,4.32,4.91,4.39,11.55,3.26,18.17C25.1,62.22-.03,87.09,0,119.29l.06,67.86c.02,21.81,13.47,40.97,30.29,50.82,20.3,11.89,43.72,11.48,63.52.12,17.55-10.07,29.72-29.2,29.79-50.2Z'/%3e%3cpath%20class='cls-1'%20d='M123.65,187.89c-.07,21-12.24,40.14-29.79,50.2-19.79,11.36-43.21,11.77-63.52-.12C13.52,228.12.08,208.96.06,187.15L0,119.29c-.03-32.2,25.1-57.08,56.8-58.73,1.13-6.62,1.06-13.26-3.26-18.17-3.86-4.4-10.19-6.7-16-7.79-14.96-2.8-24.61-14.13-24.64-29.56C12.89,2.16,14.38,0,17.4,0c2.43,0,4.06,2.47,4.05,5.4-.05,8.61,4.4,16.75,12.75,19.45l13.6,4.4c13.53,4.37,19.98,16.95,17.63,31.28,34.16,1.03,58.54,27.96,58.43,60.66l-.21,66.7ZM65.83,93.38c6.94,2.26,10,7.43,10.35,13.79l-.23,24.12c-.07,7.38-7.1,11.98-13.85,12.39-5.92.35-13.88-4.35-13.98-11.53l-.36-24.97c-.09-6.53,3.01-11.41,9.61-13.97l.02-24.61c-28.82,2.01-49.32,24.79-49.21,52.88l.25,65.94c.11,30.4,27.45,53.01,57.41,50.85,27.86-2.01,49.72-23.96,49.59-52.17l-.31-69.13c-1.12-26.88-22.88-47.5-49.25-47.91l-.04,24.34ZM68.34,131.21l.06-24.12c0-3.58-2.02-6.22-5.15-7.04-2.26-.6-7.43.89-7.47,4.13l-.3,25.12c-.05,3.82,2.59,6.69,5.91,7.07,2.74.32,6.94-1.42,6.95-5.16Z'/%3e%3cpath%20d='M65.83,93.38l.04-24.34c26.37.42,48.14,21.03,49.25,47.91l.31,69.13c.13,28.22-21.73,50.16-49.59,52.17-29.97,2.16-57.3-20.45-57.41-50.85l-.25-65.94c-.11-28.09,20.39-50.87,49.21-52.88l-.02,24.61c-6.6,2.56-9.7,7.44-9.61,13.97l.36,24.97c.1,7.17,8.06,11.88,13.98,11.53,6.75-.4,13.78-5.01,13.85-12.39l.23-24.12c-.35-6.35-3.41-11.53-10.35-13.79Z'/%3e%3cpath%20d='M68.34,131.21c0,3.74-4.21,5.48-6.95,5.16-3.32-.38-5.95-3.26-5.91-7.07l.3-25.12c.04-3.24,5.21-4.72,7.47-4.13,3.12.82,5.15,3.46,5.15,7.04l-.06,24.12Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",MM=""+new URL("04_Cross-CS7qkOqf.svg",import.meta.url).href,SM="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='_レイヤー_2'%20data-name='レイヤー%202'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20232.92%2051.45'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20.cls-2%20{%20fill:%20none;%20stroke:%20%23fff;%20stroke-linecap:%20round;%20stroke-miterlimit:%2010;%20stroke-width:%206px;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='_レイヤー_1-2'%20data-name='レイヤー%201'%3e%3cg%3e%3crect%20x='.38'%20width='232.54'%20height='51.45'/%3e%3cg%3e%3ccircle%20class='cls-1'%20cx='25'%20cy='26.45'%20r='25'/%3e%3ccircle%20class='cls-1'%20cx='207.92'%20cy='26.45'%20r='25'/%3e%3cg%3e%3cline%20class='cls-2'%20x1='54.3'%20y1='26.45'%20x2='88.93'%20y2='26.45'/%3e%3cpolygon%20class='cls-1'%20points='84.56%2041.41%20110.46%2026.45%2084.56%2011.49%2084.56%2041.41'/%3e%3c/g%3e%3cg%3e%3cline%20class='cls-2'%20x1='144.29'%20y1='26.45'%20x2='178.92'%20y2='26.45'/%3e%3cpolygon%20class='cls-1'%20points='148.67%2041.41%20122.76%2026.45%20148.67%2011.49%20148.67%2041.41'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ud="./";let tn,ki,ft,js,fa,da,Ks,pa,vs,Zm,wt,Gn,Wn,ni,kl=-1,hd=0,fd=!1,xs=!1,zi=!1,zn=null;const zl=[];let co=0,ts=0,lo=0,uo=0,ho=60,dd=0,$a=!1,Vl=0,Gl=0;const pd=.004,md=Math.PI*.85,gd=0,_d=0,EM=60;let $m=window.innerWidth/2,Jm=window.innerHeight/2;document.addEventListener("pointerdown",wM);document.addEventListener("pointermove",RM);document.addEventListener("pointerup",Qm);document.addEventListener("pointercancel",Qm);yM();function yM(){const t=document.querySelector("#app");tn=new an(60,window.innerWidth/window.innerHeight,.1,100),tn.position.z=3,ki=new kg;const e=new eu(.1,32,16);vs=new Ql({color:16777215,refractionRatio:.95}),TM();for(let n=0;n<500;n++){const i=new ei(e,vs);i.position.x=Math.random()*10-5,i.position.y=Math.random()*10-5,i.position.z=Math.random()*10-5,i.scale.x=i.scale.y=i.scale.z=Math.random()*3+1,ki.add(i),zl.push(i)}ft=new Uv({antialias:!0}),ft.setPixelRatio(window.devicePixelRatio),ft.toneMapping=Sd,ft.toneMappingExposure=1,ft.setAnimationLoop(VM),t.appendChild(ft.domElement),js=new Kg,js.aspect=.5,ft.setSize(window.innerWidth,window.innerHeight),CM(),PM(),window.addEventListener("resize",bM)}function TM(){const t=new Yg;fa=t.load(cd),da=t.load(ld),Ks=t.load(cd,AM),pa=t.load(ld);for(const e of[fa,da,Ks,pa])e.colorSpace=gn;fa.mapping=Zs,da.mapping=Zs,Ks.mapping=$s,pa.mapping=$s}function AM(){vs.envMap=Ks,vs.needsUpdate=!0}function bM(){$m=window.innerWidth/2,Jm=window.innerHeight/2,tn.aspect=window.innerWidth/window.innerHeight,tn.updateProjectionMatrix(),ft.setSize(window.innerWidth,window.innerHeight)}function wM(t){t.button!==0||t.target.closest(".hand-control")||t.target.closest(".gesture-guide-ui")||($a=!0,Vl=t.clientX,Gl=t.clientY)}function RM(t){if((t.clientX-$m)*.01,(t.clientY-Jm)*.01,!$a||xs)return;const e=t.clientX-Vl,n=t.clientY-Gl;Vl=t.clientX,Gl=t.clientY,lo-=e*pd,uo-=n*pd}function Qm(){$a=!1}function CM(){const t=document.createElement("div");t.className="gesture-guide-ui";const e=[[_M,"WebCam","ON / OFF","カメラ オン / オフ"],[vM,"Pinch + Drag","look around","つまんで視点移動"],[xM,"Mouse Drag","look around","ドラッグで視点移動"],[MM,"Cross Reset","return to zero","腕をクロスしてリセット"],[SM,"3D Guide","merge dots","2つの点を重ねて見る"]];for(const[n,i,r,s]of e){const o=document.createElement("div");o.className="gesture-guide-item";const a=document.createElement("img");a.className="gesture-guide-icon",a.src=n,a.alt="",a.draggable=!1;const c=document.createElement("div");c.className="gesture-guide-text",c.innerHTML=`
      <strong>${i}</strong>
      <span>${r}</span>
      <em>${s}</em>
    `,o.append(a,c),t.appendChild(o)}document.body.appendChild(t)}function PM(){const t=document.createElement("div");t.className="hand-control",Gn=document.createElement("button"),Gn.type="button",Gn.textContent="WebCam ON",Gn.addEventListener("click",LM),Wn=document.createElement("span"),Wn.textContent="off",ni=document.createElement("span"),ni.className="hand-debug",ni.textContent="camera idle",wt=document.createElement("video"),wt.className="hand-video",wt.playsInline=!0,wt.autoplay=!0,wt.muted=!0,t.append(Gn,Wn,ni,wt),document.body.appendChild(t)}function LM(){if(xs){UM();return}DM()}async function DM(){var t;if(!xs){Gn.disabled=!0,Wn.textContent="camera starting";try{if(!window.isSecureContext)throw new Error("Camera needs a secure context. Use http://localhost:5173 or http://127.0.0.1:5173.");if(!((t=navigator.mediaDevices)!=null&&t.getUserMedia))throw new Error("This browser does not expose getUserMedia.");const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1});if(wt.srcObject=e,wt.setAttribute("data-active","true"),await wt.play(),!fd){Wn.textContent="loading model";const n=await Yr.forVisionTasks(`${ud}mediapipe/wasm/`);Zm=await on.createFromOptions(n,{baseOptions:{modelAssetPath:`${ud}models/hand_landmarker.task`},runningMode:"VIDEO",numHands:2}),fd=!0}xs=!0,Gn.textContent="WebCam OFF",Wn.textContent="show your hand",ni.textContent=`${wt.videoWidth||640}x${wt.videoHeight||480}`,Gn.disabled=!1}catch(e){console.error(e),Wn.textContent="camera error",ni.textContent=NM(e),Gn.disabled=!1}}}function UM(){if(wt!=null&&wt.srcObject)for(const t of wt.srcObject.getTracks())t.stop();wt.srcObject=null,wt.removeAttribute("data-active"),xs=!1,zi=!1,zn=null,kl=-1,Gn.textContent="WebCam ON",Gn.disabled=!1,Wn.textContent="off",ni.textContent="camera idle"}function IM(){if(!xs||wt.readyState<HTMLMediaElement.HAVE_CURRENT_DATA||wt.currentTime===kl)return;kl=wt.currentTime;const e=Zm.detectForVideo(wt,performance.now()).landmarks;dd=e.length;const n=e[0];if(!n){Wn.textContent="show your hand",ni.textContent="camera on, no hand";return}const i=n[8],r=n[0],s=n[9],o=(r.x+s.x+i.x)/3,a=(r.y+s.y+i.y)/3,c=BM(n),l=OM(n),u=Math.max(.045,c*.32),h=u*1.35;if(e.length>=2&&kM(e[0],e[1])){FM(),Wn.textContent="reset",ni.textContent="X gesture";return}if(!zi&&l<u?(zi=!0,zn={centerX:o,centerY:a,handScale:c,yaw:lo,pitch:uo,fov:ho}):zi&&l>h&&(zi=!1,zn=null),zi&&zn){const d=o-zn.centerX,p=a-zn.centerY,_=c-zn.handScale;lo=zn.yaw-d*md,uo=zn.pitch-p*md,ho=aa.clamp(zn.fov-_*85,35,75)}Wn.textContent=zi?"pinch drag":"pinch to drag",ni.textContent=`hands ${dd} / pinch ${l.toFixed(2)}`}function NM(t){return t.name==="NotAllowedError"?"allow camera permission":t.name==="NotFoundError"?"camera not found":t.name==="NotReadableError"?"camera busy":t.name==="OverconstrainedError"?"camera constraints failed":t.message||"unknown error"}function FM(){const t=performance.now();t-hd<900||(hd=t,co=gd,ts=_d,lo=gd,uo=_d,ho=EM,zi=!1,$a=!1,zn=null,tn.fov=ho,tn.updateProjectionMatrix(),e0())}function OM(t){const e=t[4],n=t[8];return Math.hypot(e.x-n.x,e.y-n.y)}function BM(t){const e=t.map(s=>s.x),n=t.map(s=>s.y),i=Math.max(...e)-Math.min(...e),r=Math.max(...n)-Math.min(...n);return Math.max(i,r)}function kM(t,e){const n=t[0],i=t[12],r=e[0],s=e[12],o=vd(t),a=vd(e);return Math.hypot(o.x-a.x,o.y-a.y)<.42&&zM(n,i,r,s)}function vd(t){const e=t.reduce((n,i)=>(n.x+=i.x,n.y+=i.y,n),{x:0,y:0});return e.x/=t.length,e.y/=t.length,e}function zM(t,e,n,i){const r=ta(t,e,n),s=ta(t,e,i),o=ta(n,i,t),a=ta(n,i,e);return r*s<0&&o*a<0}function ta(t,e,n){return(e.x-t.x)*(n.y-t.y)-(e.y-t.y)*(n.x-t.x)}function VM(){const t=1e-4*Date.now();IM(),co=aa.lerp(co,lo,.12),ts=aa.lerp(ts,uo,.12),tn.fov=aa.lerp(tn.fov,ho,.08),tn.updateProjectionMatrix(),e0();for(let e=0,n=zl.length;e<n;e++){const i=zl[e];i.position.x=5*Math.cos(t+e),i.position.y=5*Math.sin(t+e*1.1)}GM()}function GM(){ki.matrixWorldAutoUpdate&&ki.updateMatrixWorld(),tn.parent===null&&tn.matrixWorldAutoUpdate&&tn.updateMatrixWorld(),js.update(tn);const t=ft.domElement.width/ft.getPixelRatio(),e=ft.domElement.height/ft.getPixelRatio(),n=ft.autoClear;ft.autoClear=!1,ft.clear(),ft.setScissorTest(!0),ki.background=fa,vs.envMap=Ks,ft.setScissor(0,0,t/2,e),ft.setViewport(0,0,t/2,e),ft.render(ki,js.cameraL),ki.background=da,vs.envMap=pa,ft.setScissor(t/2,0,t/2,e),ft.setViewport(t/2,0,t/2,e),ft.render(ki,js.cameraR),ft.setScissorTest(!1),ft.autoClear=n}function e0(){tn.position.set(0,0,0),tn.lookAt(Math.cos(ts)*Math.sin(co),Math.sin(ts),Math.cos(ts)*Math.cos(co))}
