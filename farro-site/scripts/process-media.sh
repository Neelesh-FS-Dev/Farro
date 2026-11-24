#!/usr/bin/env bash
# Builds web-ready media from the untouched originals in the parent folder.
# Originals are never modified. Only assets verified as caption-free are used.
# See src/content/media-inventory.md for what was reviewed and why others were excluded.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$(cd "$ROOT/.." && pwd)"
OUT="$ROOT/public/media"
mkdir -p "$OUT"

HERO="farro.pune_2026-11-13_20-06-21_4028958133602249944_65980698397.mp4"

# Muted, no audio track, faststart, metadata stripped.
ffmpeg -v error -y -i "$SRC/$HERO" -t 14 -an -map_metadata -1 \
  -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p -movflags +faststart \
  "$OUT/hero.mp4"

# Poster and static fallback (mobile, reduced motion, slow connections).
ffmpeg -v error -y -ss 3 -i "$SRC/$HERO" -frames:v 1 -map_metadata -1 \
  -vf "scale=1080:-2" -q:v 4 "$OUT/hero-poster.jpg"
ffmpeg -v error -y -ss 3 -i "$SRC/$HERO" -frames:v 1 -map_metadata -1 \
  -vf "scale=800:-2" -q:v 5 "$OUT/hero-fallback-800.jpg"

# Clean editorial stills taken from the hero footage (checked frame by frame).
for pair in "guests:3" "family:7" "staff:11"; do
  name="${pair%%:*}"; t="${pair#*:}"
  ffmpeg -v error -y -ss "$t" -i "$SRC/$HERO" -frames:v 1 -map_metadata -1 \
    -vf "scale=1080:-2" -q:v 4 "$OUT/still-$name.jpg"
done

du -sh "$OUT"
