#!/usr/bin/env bash
# Builds the web media in public/media from the untouched originals in media-source/.
#
#   scripts/build-media.sh            # writes into public/media
#   OUT=/some/dir scripts/build-media.sh   # write elsewhere (used to test the script)
#
# Photos: macOS sips (JPEG) and cwebp (WebP), two widths each: 640 and 1024.
# Clips: copied as-is at original resolution (no transcoder is installed), plus a poster frame
#        from the first usable frame via Quick Look.
# Requires: macOS, sips, qlmanage, and cwebp (brew install webp).
# shortcut: clips are served at original size (up to ~11 MB), not mobile transcodes; upgrade with
#           ffmpeg H.264 variants once ffmpeg is installed.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/media-source"
OUT="${OUT:-$ROOT/public/media}"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

for tool in sips qlmanage cwebp; do
  command -v "$tool" >/dev/null || { echo "missing tool: $tool" >&2; exit 1; }
done
mkdir -p "$OUT"

# slug|source file (photos)
PHOTOS=(
  "dish-sphere|farro.pune_2026-04-23_18-56-14_3881666213705454488_10605913707_8.webp"
  "dish-eggplant|farro.pune_2026-04-23_18-56-14_3881666205711089260_10605913707_6.webp"
  "chef-portrait|farro.pune_2026-04-23_18-56-14_3881666236648302995_10605913707_13.webp"
  "kitchen-line|farro.pune_2026-04-23_18-56-14_3881666198631145686_10605913707_5.webp"
  "kitchen-chef-cooking|farro.pune_2026-04-23_18-56-14_3881666191475637646_10605913707_3.webp"
  "chef-kitchen|farro.pune_2026-04-23_18-56-14_3881666218109461942_10605913707_9.webp"
  "kitchen-team|farro.pune_2026-04-23_18-56-14_3881666228972697813_10605913707_11.webp"
  "kitchen-plating|farro.pune_2026-03-27_18-33-29_3862086198567415815_65980698397_4.jpg"
  "dumplings|farro.pune_2026-03-27_18-33-28_3862086214287640162_65980698397_7.jpg"
  "bar-bottles|farro.pune_2026-03-27_18-33-28_3862086216351283224_65980698397_9.jpg"
  "dish-shredded|farro.pune_2026-04-23_18-56-14_3881666186903823256_10605913707_2.webp"
  "dish-croquette|farro.pune_2026-04-23_18-56-14_3881666194126418948_10605913707_4.webp"
  "dish-cake|farro.pune_2026-04-23_18-56-14_3881666222949697537_10605913707_10.webp"
  "dish-carrot|farro.pune_2026-04-23_18-56-14_3881666240238636750_10605913707_14.webp"
  "dish-tofu|farro.pune_2026-04-23_18-56-14_3881666233720669693_10605913707_12.webp"
)

# slug|source file (clips)
CLIPS=(
  "dining-room|farro.pune_2026-03-27_18-33-28_3862086234378355772_65980698397_8.mp4"
  "prep-mixing|farro.pune_2026-04-03_18-51-15_3867166155089965823_65980698397.mp4"
  "chef-portrait|farro.pune_2026-07-13_19-54-27_3940370509476687966_65980698397.mp4"
  "pour-drink|farro.pune_2026-10-03_13-49-05_3998348450834012151_65980698397.mp4"
  "flame-pan|farro.pune_2026-11-05_12-04-10_4023514157200569591_65980698397.mp4"
  "table-setting|farro.pune_2026-11-13_20-06-21_4028958133602249944_65980698397.mp4"
)

for entry in "${PHOTOS[@]}"; do
  slug="${entry%%|*}"; file="${entry#*|}"
  for w in 640 1024; do
    sips -s format jpeg -s formatOptions 82 -Z "$w" "$SRC/$file" --out "$OUT/$slug-$w.jpg" >/dev/null
    cwebp -quiet -q 80 -resize "$w" 0 "$SRC/$file" -o "$OUT/$slug-$w.webp"
  done
done

for entry in "${CLIPS[@]}"; do
  slug="${entry%%|*}"; file="${entry#*|}"
  cp "$SRC/$file" "$OUT/$slug.mp4"
  qlmanage -t -s 720 -o "$WORK" "$SRC/$file" >/dev/null 2>&1
  sips -s format jpeg -s formatOptions 80 -Z 720 "$WORK/$file.png" --out "$OUT/$slug-poster.jpg" >/dev/null
done

echo "wrote $(ls "$OUT" | wc -l | tr -d ' ') files to $OUT"
