#!/bin/zsh

cd "$(dirname "$0")" || exit 1

START_PORT=5173
HOST=127.0.0.1

# Finder double-click launches Terminal with a minimal PATH.
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "Gesture 360 Viewer Ver01 local server"
echo "Project: $(pwd)"
echo ""

PORT=${START_PORT}

if command -v lsof >/dev/null 2>&1; then
  while lsof -ti tcp:${PORT} >/dev/null 2>&1; do
    echo "Port ${PORT} is already in use. Trying next port..."
    PORT=$(( PORT + 1 ))
  done
fi

URL="http://${HOST}:${PORT}/"

if [ ! -d "node_modules" ]; then
  if command -v npm >/dev/null 2>&1; then
    echo "Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
      echo ""
      echo "npm install failed."
      echo "Press any key to close."
      read -k 1
      exit 1
    fi
  else
    echo "Node.js / npm was not found."
    echo ""
    echo "Install Node.js LTS, then run this file again:"
    echo "https://nodejs.org/"
    echo ""
    echo "Press any key to close."
    read -k 1
    exit 1
  fi
fi

if command -v npm >/dev/null 2>&1; then
  echo "Starting with npm..."
  echo "Open: ${URL}"
  echo ""
  npm run dev -- --host "${HOST}" --port "${PORT}" --strictPort --open "/"
  STATUS=$?
else
  echo "Node.js / npm was not found."
  STATUS=1
fi

echo ""
echo "Server stopped or failed to start. Exit code: ${STATUS}"
echo ""
echo "Press any key to close."
read -k 1
exit ${STATUS}
