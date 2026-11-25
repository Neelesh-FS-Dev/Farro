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

# Post photos: the designed layouts have a title band at the top and a caption band at the
# bottom. Cropping the middle 68% removes both. Only candidates checked by eye are listed.
# name | source file
POSTS=(
  "chef-brush-sauce|farro.pune_2026-07-09_17-56-54_3937444568960695608_65980698397_2.jpg"
  "food-pour-cream|farro.pune_2026-07-09_17-56-54_3937444572576345184_65980698397_3.jpg"
  "food-plated-bread|farro.pune_2026-07-09_17-56-54_3937444577399568397_65980698397_4.jpg"
  "people-baking|farro.pune_2026-07-26_18-58-18_3949796109352723218_65980698397_2.jpg"
  "people-mixer|farro.pune_2026-07-26_18-58-18_3949796110778919869_65980698397_4.jpg"
  "people-brewer|farro.pune_2026-08-04_18-18-02_3956299524832537986_65980698397_2.jpg"
  "drink-pour|farro.pune_2026-08-04_18-18-02_3956299529379245038_65980698397_3.jpg"
  "drink-glass|farro.pune_2026-08-04_18-18-02_3956299534043391661_65980698397_4.jpg"
  "drink-pink|farro.pune_2026-08-18_19-53-56_3966494239309944846_65980698397_2.jpg"
  "market-greens|farro.pune_2026-10-25_20-53-26_4015809351732368844_65980698397_2.jpg"
  "market-men|farro.pune_2026-10-25_20-53-26_4015809351891699237_65980698397_4.jpg"
  "market-vendors|farro.pune_2026-10-25_20-53-26_4015809352369948655_65980698397_3.jpg"
  "chefs-cooking|farro.pune_2026-10-25_20-53-26_4015809352571137613_65980698397_5.jpg"
  "dining-chef|farro.pune_2026-10-25_20-53-26_4015809355029101543_65980698397_7.jpg"
  "food-sindhi-dal|farro.pune_2026-10-25_20-53-26_4015809355230467216_65980698397_6.jpg"
  "guests-dining|farro.pune_2026-10-25_20-53-26_4015809358359304408_65980698397_8.jpg"
  "spaces-plant|farro.pune_2026-10-25_20-53-26_4015809358577405193_65980698397_9.jpg"
)
for entry in "${POSTS[@]}"; do
  IFS='|' read -r name file <<< "$entry"
  for w in 800 1600; do
    ffmpeg -v error -y -i "$SRC/$file" -map_metadata -1 \
      -vf "crop=iw:ih*0.68:0:ih*0.12,scale=w='min($w,iw)':h=-2" -q:v 4 "$OUT/$name-$w.jpg"
  done
done

# Reel loops. Each window was checked frame by frame: no captions or title cards inside it.
# name | source file (by date stamp) | start seconds | length seconds
REELS=(
  "loop-menu|2026-11-21_20-36-28|22|8"
  "loop-plating|2026-08-27_19-20-51|18|8"
  "loop-interior|2026-10-07_18-23-24|22|8"
  "loop-diners|2026-07-13_19-54-27|23|8"
  "loop-tables|2026-03-27_18-33-28_3862086221996773616|4|8"
)
for entry in "${REELS[@]}"; do
  IFS='|' read -r name key start len <<< "$entry"
  src="$(ls "$SRC" | grep -F "farro.pune_${key}" | grep '\.mp4$' | head -1)"
  ffmpeg -v error -y -ss "$start" -i "$SRC/$src" -t "$len" -an -map_metadata -1 \
    -vf "scale=540:-2" -c:v libx264 -preset slow -crf 31 -pix_fmt yuv420p -movflags +faststart \
    "$OUT/$name.mp4"
  ffmpeg -v error -y -ss "$start" -i "$SRC/$src" -frames:v 1 -map_metadata -1 \
    -vf "scale=540:-2" -q:v 5 "$OUT/$name-poster.jpg"
done

# Chef portrait (caption band removed by a centred 4:5 crop: title at top, name at bottom).
ffmpeg -v error -y -i "$SRC/farro.pune_2026-09-25_19-06-08_3994011888533026538_44961843076_1.jpg" -map_metadata -1 \
  -vf "crop=iw*0.66:ih*0.7:iw*0.02:ih*0.12,scale=w='min(800,iw)':h=-2" -q:v 4 "$OUT/chef-portrait-800.jpg"
ffmpeg -v error -y -i "$SRC/farro.pune_2026-09-25_19-06-08_3994011888533026538_44961843076_1.jpg" -map_metadata -1 \
  -vf "crop=iw*0.66:ih*0.7:iw*0.02:ih*0.12,scale=w='min(1600,iw)':h=-2" -q:v 4 "$OUT/chef-portrait-1600.jpg"

du -sh "$OUT"
