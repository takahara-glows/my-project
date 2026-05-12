# Gesture 360 Viewer Ver01

添付元の `webgl_effects_stereo.html` を、Vite と npm 版 three.js で単独実行しやすい構成にしたプロジェクトです。

## 起動手順

1. `Gesture_360_Viewer_Ver01.command` をダブルクリックします。

   依存関係がまだ入っていない場合は、自動でインストールしてから起動します。
   標準では `http://127.0.0.1:5173/` を使い、5173 が使われている場合は 5174、5175... のように空いているポートで起動します。

2. 画面右下の `WebCam ON` を押して、ブラウザのWebカメラ許可を有効にします。

## 手動で起動する場合

1. 依存関係をインストールします。

   ```bash
   npm install
   ```

2. 開発サーバーを起動します。

   ```bash
   npm run dev
   ```

3. ターミナルに表示されたローカルURLをブラウザで開きます。Webカメラを使う場合は `http://localhost:5173/` または `http://127.0.0.1:5173/` で開くのがおすすめです。

## ハンド操作

Webカメラに手を映すと、MediaPipe Hand Landmarker で手の位置を検出します。

- 親指と人差し指でつまむ: ドラッグ操作が有効になります。
- つまんだまま左右に動かす: 視線が左右に360度動きます。
- つまんだまま上下に動かす: 視線が上下に360度動きます。
- つまんだまま前後に動かす: ズーム感が変わります。
- 両手でXのようにクロスする: カメラが初期位置に戻ります。
- `WebCam OFF` を押す: Webカメラを停止します。

## マウス操作

- 左クリックを押したままドラッグ: 視線が上下左右に360度動きます。
- 左クリックを離す: 視線操作を停止します。

## ステレオ全天球テクスチャ

キューブマップ画像の代わりに、以下の左右ペア全天球画像を背景と球体の環境マップとして使います。

```text
HDR/church_meeting_room_4k_left_eye.jpg
HDR/church_meeting_room_4k_right_eye.jpg
```

## 構成

```text
index.html
src/main.js
src/styles.css
HDR/church_meeting_room_4k_left_eye.jpg
HDR/church_meeting_room_4k_right_eye.jpg
public/models/hand_landmarker.task
public/mediapipe/wasm/
```

`src/main.js` では npm の `three` を直接 import しているため、外部CDNやHTML内の importmap は使っていません。
左目・右目で背景画像を切り替えるため、ステレオ描画処理はアプリ側で実装しています。
ハンドトラッキングには npm の `@mediapipe/tasks-vision` を使い、モデルとWASMは `public/` からローカル配信します。

## GitHub Pages で公開する場合

このリポジトリには GitHub Pages 用の Actions ワークフローが含まれています。

1. GitHub にリポジトリを作成します。
2. ローカルで `main` ブランチとして push します。
3. GitHub のリポジトリ設定で `Settings > Pages > Build and deployment` を開き、`Source` を `GitHub Actions` にします。
4. `main` に push されると自動で `npm ci` と `npm run build` が実行され、`dist/` が Pages に公開されます。

Webカメラ機能は HTTPS または localhost でのみ動作します。GitHub Pages は HTTPS 配信のため、公開後もブラウザのカメラ許可を有効にすれば利用できます。
