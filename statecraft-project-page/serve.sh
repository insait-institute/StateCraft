#!/usr/bin/env bash
# Local preview, bound to 127.0.0.1 only.
set -euo pipefail
cd "$(dirname "$0")"
exec python3 -m http.server "${PORT:-8000}" --bind 127.0.0.1
