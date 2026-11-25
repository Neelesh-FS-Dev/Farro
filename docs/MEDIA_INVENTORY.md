# Media inventory

Every file in `media-source/` (76 photos, 39 videos) was reviewed on contact sheets at thumbnail scale, not frame by frame at full size. The # column is the sorted-filename position used during review.

**Review limits.** Photo dimensions are read with `sips`. Video dimensions, durations and audio were not measured for every file: there is no ffprobe or ffmpeg here, and the AVFoundation route did not load in JXA. The durations of the clips used on the site were read in Chrome during QA.

**Permissions.** No asset has confirmed publication permission. The brief (§44) requires this before public publication; keep the site private until it is confirmed.

Originals in `media-source/` are never modified. Web variants come from `scripts/build-media.sh`.

## Used on the site

| Slug | Source | Type | Where |
|---|---|---|---|
| dish-sphere | photo 14 | photo | Home hero (main), dish journal |
| dish-eggplant | photo 12 | photo | Home hero (side) |
| chef-portrait | photo 19 | photo | Home kitchen, Story |
| kitchen-line, kitchen-chef-cooking, chef-kitchen, kitchen-team | photos 11, 9, 15, 17 | photo | Kitchen and team imagery |
| kitchen-plating | photo 6 | photo | Home philosophy |
| dumplings | photo 4 | photo | Home shared table, Menu hero, Journal |
| bar-bottles | photo 5 | photo | Home bar, Journal |
| dish-shredded, dish-croquette, dish-cake, dish-carrot, dish-tofu | photos 7, 10, 16, 20, 18 | photo | Dish journal, menu preview, Journal |
| dining-room | video 1 | video | Home space section |
| prep-mixing | video 4 | video | Home kitchen film |
| chef-portrait | video 18 | video | Story |
| pour-drink | video 29 | video | Home bar |
| flame-pan | video 35 | video | Not placed yet |
| table-setting | video 36 | video | Visit |

Each clip has a poster frame cut from the same footage.

## Every file

| # | File | Type | Pixels | Size | Decision | Reason |
|---|---|---|---|---|---|---|
| 0 | `farro.pune_2026-03-27_18-33-28_3862086195463637714_65980698397_3.jpg` | photo | 1080x1432 | 203 KB | EXCLUDED | candid guests, identifiable faces |
| 1 | `farro.pune_2026-03-27_18-33-28_3862086203969685369_65980698397_1.jpg` | photo | 1080x1432 | 237 KB | EXCLUDED | guests with a magazine cover, identifiable |
| 2 | `farro.pune_2026-03-27_18-33-28_3862086206117148442_65980698397_5.jpg` | photo | 1080x1432 | 178 KB | EXCLUDED | candid guests, identifiable |
| 3 | `farro.pune_2026-03-27_18-33-28_3862086210772828166_65980698397_6.jpg` | photo | 1080x1432 | 205 KB | EXCLUDED | candid group, identifiable |
| 4 | `farro.pune_2026-03-27_18-33-28_3862086214287640162_65980698397_7.jpg` | photo | 1080x1432 | 165 KB | USED as dumplings | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 5 | `farro.pune_2026-03-27_18-33-28_3862086216351283224_65980698397_9.jpg` | photo | 1080x1432 | 197 KB | USED as bar-bottles | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 6 | `farro.pune_2026-03-27_18-33-29_3862086198567415815_65980698397_4.jpg` | photo | 1080x1432 | 177 KB | USED as kitchen-plating | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 7 | `farro.pune_2026-04-23_18-56-14_3881666186903823256_10605913707_2.webp` | photo | 1080x1350 | 139 KB | USED as dish-shredded | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 8 | `farro.pune_2026-04-23_18-56-14_3881666187281362776_10605913707_1.webp` | photo | 1080x1350 | 67 KB | EXCLUDED | caption text |
| 9 | `farro.pune_2026-04-23_18-56-14_3881666191475637646_10605913707_3.webp` | photo | 1080x1349 | 51 KB | USED as kitchen-chef-cooking | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 10 | `farro.pune_2026-04-23_18-56-14_3881666194126418948_10605913707_4.webp` | photo | 1080x1349 | 97 KB | USED as dish-croquette | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 11 | `farro.pune_2026-04-23_18-56-14_3881666198631145686_10605913707_5.webp` | photo | 1080x1350 | 56 KB | USED as kitchen-line | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 12 | `farro.pune_2026-04-23_18-56-14_3881666205711089260_10605913707_6.webp` | photo | 1080x1349 | 212 KB | USED as dish-eggplant | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 13 | `farro.pune_2026-04-23_18-56-14_3881666211490864451_10605913707_7.webp` | photo | 1080x1350 | 114 KB | EXCLUDED | Humane Kitchen text card |
| 14 | `farro.pune_2026-04-23_18-56-14_3881666213705454488_10605913707_8.webp` | photo | 1080x1349 | 101 KB | USED as dish-sphere | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 15 | `farro.pune_2026-04-23_18-56-14_3881666218109461942_10605913707_9.webp` | photo | 1080x1350 | 62 KB | USED as chef-kitchen | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 16 | `farro.pune_2026-04-23_18-56-14_3881666222949697537_10605913707_10.webp` | photo | 1080x1350 | 91 KB | USED as dish-cake | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 17 | `farro.pune_2026-04-23_18-56-14_3881666228972697813_10605913707_11.webp` | photo | 1080x1350 | 105 KB | USED as kitchen-team | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 18 | `farro.pune_2026-04-23_18-56-14_3881666233720669693_10605913707_12.webp` | photo | 1080x1350 | 106 KB | USED as dish-tofu | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 19 | `farro.pune_2026-04-23_18-56-14_3881666236648302995_10605913707_13.webp` | photo | 1080x1350 | 60 KB | USED as chef-portrait | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 20 | `farro.pune_2026-04-23_18-56-14_3881666240238636750_10605913707_14.webp` | photo | 1080x1350 | 59 KB | USED as dish-carrot | Clean food, kitchen or bar frame with no text, logo or identifiable guests |
| 21 | `farro.pune_2026-04-23_18-56-14_3881666246949493236_10605913707_15.webp` | photo | 1080x1350 | 135 KB | EXCLUDED | text card |
| 22 | `farro.pune_2026-04-23_18-56-14_3881666250372073098_10605913707_16.webp` | photo | 1080x1350 | 20 KB | EXCLUDED | text overlay |
| 23 | `farro.pune_2026-06-24_17-12-41_3926550450097208107_65980698397_1.jpg` | photo | 1080x1350 | 281 KB | EXCLUDED | event poster with text |
| 24 | `farro.pune_2026-06-24_17-12-41_3926550456875316380_65980698397_3.jpg` | photo | 1080x1350 | 280 KB | EXCLUDED | postcard graphic with text |
| 25 | `farro.pune_2026-06-24_17-12-41_3926550457328290461_65980698397_4.jpg` | photo | 1080x1350 | 236 KB | EXCLUDED | promo with co-brand logo |
| 26 | `farro.pune_2026-06-24_17-12-41_3926550458016148925_65980698397_6.jpg` | photo | 1080x1350 | 228 KB | EXCLUDED | event text |
| 27 | `farro.pune_2026-07-09_17-56-54_3937444564506488355_65980698397_1.jpg` | photo | 1080x1350 | 183 KB | EXCLUDED | hiring post with text |
| 28 | `farro.pune_2026-07-09_17-56-54_3937444568960695608_65980698397_2.jpg` | photo | 1080x1350 | 209 KB | EXCLUDED | caption |
| 29 | `farro.pune_2026-07-09_17-56-54_3937444572576345184_65980698397_3.jpg` | photo | 1080x1350 | 189 KB | EXCLUDED | caption |
| 30 | `farro.pune_2026-07-09_17-56-54_3937444577399568397_65980698397_4.jpg` | photo | 1080x1350 | 270 KB | EXCLUDED | caption |
| 31 | `farro.pune_2026-07-09_17-56-54_3937444584270013954_65980698397_5.jpg` | photo | 1080x1350 | 239 KB | EXCLUDED | caption |
| 32 | `farro.pune_2026-07-09_17-56-54_3937444590225970502_65980698397_6.jpg` | photo | 1080x1350 | 209 KB | EXCLUDED | hiring post with contact details |
| 33 | `farro.pune_2026-07-26_18-58-18_3949796107926672552_65980698397_1.jpg` | photo | 1080x1350 | 269 KB | EXCLUDED | text overlay |
| 34 | `farro.pune_2026-07-26_18-58-18_3949796109352723218_65980698397_2.jpg` | photo | 1080x1350 | 253 KB | EXCLUDED | caption |
| 35 | `farro.pune_2026-07-26_18-58-18_3949796110778919869_65980698397_4.jpg` | photo | 1080x1350 | 256 KB | EXCLUDED | caption |
| 36 | `farro.pune_2026-08-04_18-18-02_3956299521477174505_65980698397_1.jpg` | photo | 1080x1350 | 182 KB | EXCLUDED | series title text |
| 37 | `farro.pune_2026-08-04_18-18-02_3956299524832537986_65980698397_2.jpg` | photo | 1080x1350 | 261 KB | EXCLUDED | caption |
| 38 | `farro.pune_2026-08-04_18-18-02_3956299529379245038_65980698397_3.jpg` | photo | 1080x1350 | 220 KB | EXCLUDED | caption |
| 39 | `farro.pune_2026-08-04_18-18-02_3956299534043391661_65980698397_4.jpg` | photo | 1080x1350 | 286 KB | EXCLUDED | caption |
| 40 | `farro.pune_2026-08-04_18-18-02_3956299534706087120_65980698397_5.jpg` | photo | 1080x1350 | 242 KB | EXCLUDED | text or caption overlay |
| 41 | `farro.pune_2026-08-04_18-18-02_3956299540796113375_65980698397_6.jpg` | photo | 1080x1350 | 212 KB | EXCLUDED | text or caption overlay |
| 42 | `farro.pune_2026-08-11_18-59-07_3961392691953164960_65980698397.jpg` | photo | 1350x1688 | 344 KB | EXCLUDED | text or caption overlay |
| 43 | `farro.pune_2026-08-18_19-53-56_3966494230275246600_65980698397_1.jpg` | photo | 1080x1350 | 275 KB | EXCLUDED | text or caption overlay |
| 44 | `farro.pune_2026-08-18_19-53-56_3966494239309944846_65980698397_2.jpg` | photo | 1080x1350 | 258 KB | EXCLUDED | text or caption overlay |
| 45 | `farro.pune_2026-08-18_19-53-56_3966494246096190229_65980698397_3.jpg` | photo | 1080x1350 | 245 KB | EXCLUDED | text or caption overlay |
| 46 | `farro.pune_2026-08-18_19-53-56_3966494250290459835_65980698397_5.jpg` | photo | 1080x1350 | 261 KB | EXCLUDED | text or caption overlay |
| 47 | `farro.pune_2026-08-18_19-53-56_3966494256086916200_65980698397_6.jpg` | photo | 1080x1350 | 241 KB | EXCLUDED | text or caption overlay |
| 48 | `farro.pune_2026-08-18_19-53-56_3966494266505633372_65980698397_8.jpg` | photo | 1080x1350 | 315 KB | EXCLUDED | text or caption overlay |
| 49 | `farro.pune_2026-09-12_19-30-09_3984601978892423469_65980698397_1.jpg` | photo | 1080x1350 | 218 KB | EXCLUDED | text or caption overlay |
| 50 | `farro.pune_2026-09-12_19-30-09_3984601979546737306_65980698397_2.jpg` | photo | 1080x1350 | 237 KB | EXCLUDED | text or caption overlay |
| 51 | `farro.pune_2026-09-25_19-06-08_3994011888533026538_44961843076_1.jpg` | photo | 2048x2560 | 623 KB | EXCLUDED | text or caption overlay |
| 52 | `farro.pune_2026-09-25_19-06-08_3994011890344869012_44961843076_2.jpg` | photo | 2048x2560 | 451 KB | EXCLUDED | text or caption overlay |
| 53 | `farro.pune_2026-09-25_19-06-08_3994011891284531079_44961843076_3.jpg` | photo | 2048x2560 | 829 KB | EXCLUDED | text or caption overlay |
| 54 | `farro.pune_2026-09-25_19-06-08_3994011892509225290_44961843076_4.jpg` | photo | 2048x2560 | 545 KB | EXCLUDED | text or caption overlay |
| 55 | `farro.pune_2026-09-25_19-06-08_3994011894019170367_44961843076_6.jpg` | photo | 2048x2560 | 539 KB | EXCLUDED | text or caption overlay |
| 56 | `farro.pune_2026-09-25_19-06-08_3994011895512312856_44961843076_7.jpg` | photo | 2047x2558 | 824 KB | EXCLUDED | text or caption overlay |
| 57 | `farro.pune_2026-09-25_19-06-08_3994011896200053644_44961843076_8.jpg` | photo | 2047x2558 | 327 KB | EXCLUDED | text or caption overlay |
| 58 | `farro.pune_2026-09-25_19-06-09_3994011892836212177_44961843076_5.jpg` | photo | 2048x2560 | 657 KB | EXCLUDED | text or caption overlay |
| 59 | `farro.pune_2026-10-15_21-51-14_4008590005780060965_65980698397.jpg` | photo | 960x1280 | 283 KB | EXCLUDED | text or caption overlay |
| 60 | `farro.pune_2026-10-25_20-53-26_4015809350608240479_65980698397_1.jpg` | photo | 1024x1280 | 157 KB | EXCLUDED | text or caption overlay |
| 61 | `farro.pune_2026-10-25_20-53-26_4015809351732368844_65980698397_2.jpg` | photo | 1024x1280 | 146 KB | EXCLUDED | text or caption overlay |
| 62 | `farro.pune_2026-10-25_20-53-26_4015809351891699237_65980698397_4.jpg` | photo | 1024x1280 | 120 KB | EXCLUDED | text or caption overlay |
| 63 | `farro.pune_2026-10-25_20-53-26_4015809352369948655_65980698397_3.jpg` | photo | 1024x1280 | 171 KB | EXCLUDED | text or caption overlay |
| 64 | `farro.pune_2026-10-25_20-53-26_4015809352571137613_65980698397_5.jpg` | photo | 1024x1280 | 171 KB | EXCLUDED | text or caption overlay |
| 65 | `farro.pune_2026-10-25_20-53-26_4015809355029101543_65980698397_7.jpg` | photo | 1024x1280 | 172 KB | EXCLUDED | text or caption overlay |
| 66 | `farro.pune_2026-10-25_20-53-26_4015809355230467216_65980698397_6.jpg` | photo | 1024x1280 | 136 KB | EXCLUDED | text or caption overlay |
| 67 | `farro.pune_2026-10-25_20-53-26_4015809358359304408_65980698397_8.jpg` | photo | 1024x1280 | 150 KB | EXCLUDED | text or caption overlay |
| 68 | `farro.pune_2026-10-25_20-53-26_4015809358577405193_65980698397_9.jpg` | photo | 1024x1280 | 146 KB | EXCLUDED | text or caption overlay |
| 69 | `farro.pune_2026-10-25_20-53-26_4015809359047273858_65980698397_10.jpg` | photo | 1024x1280 | 135 KB | EXCLUDED | text or caption overlay |
| 70 | `farro.pune_2026-10-25_20-53-26_4015809369859997789_65980698397_11.jpg` | photo | 1024x1280 | 157 KB | EXCLUDED | text or caption overlay |
| 71 | `farro.pune_2026-11-03_16-51-19_4022210239145360330_65980698397_1.jpg` | photo | 3276x4096 | 2375 KB | EXCLUDED | text or caption overlay |
| 72 | `farro.pune_2026-11-03_16-51-19_4022210241921979275_65980698397_3.jpg` | photo | 1080x1350 | 172 KB | EXCLUDED | text or caption overlay |
| 73 | `farro.pune_2026-11-03_16-51-19_4022210242014265893_65980698397_5.jpg` | photo | 1080x1350 | 164 KB | EXCLUDED | text or caption overlay |
| 74 | `farro.pune_2026-11-03_16-51-19_4022210248599283340_65980698397_6.jpg` | photo | 1080x1350 | 195 KB | EXCLUDED | text or caption overlay |
| 75 | `farro.pune_2026-11-11_17-41-40_4028034033076157614_65980698397.jpg` | photo | 1088x1344 | 181 KB | EXCLUDED | text or caption overlay |
| 0 | `farro.pune_2026-03-27_18-33-28_3862086221996773616_65980698397_2.mp4` | video | not measured | 1844 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 1 | `farro.pune_2026-03-27_18-33-28_3862086234378355772_65980698397_8.mp4` | video | not measured | 648 KB | USED as dining-room | Muted footage with no on-screen text; original resolution |
| 2 | `farro.pune_2026-03-31_19-00-49_3864998694156558998_65980698397.mp4` | video | not measured | 10396 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 3 | `farro.pune_2026-04-02_18-59-10_3866447182480332417_65980698397.mp4` | video | not measured | 7575 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 4 | `farro.pune_2026-04-03_18-51-15_3867166155089965823_65980698397.mp4` | video | not measured | 3180 KB | USED as prep-mixing | Muted footage with no on-screen text; original resolution |
| 5 | `farro.pune_2026-04-04_19-32-17_3867912339605691561_65980698397.mp4` | video | not measured | 4819 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 6 | `farro.pune_2026-04-08_19-24-29_3870808285687629258_65980698397.mp4` | video | not measured | 4439 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 7 | `farro.pune_2026-04-11_19-09-11_3872975413928793058_65980698397.mp4` | video | not measured | 8765 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 8 | `farro.pune_2026-04-22_14-44-45_3880814674967300845_65980698397.mp4` | video | not measured | 10040 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 9 | `farro.pune_2026-05-02_16-21-01_3888110950908309478_65980698397.mp4` | video | not measured | 4227 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 10 | `farro.pune_2026-05-09_10-57-59_3893021453891781690_65980698397.mp4` | video | not measured | 2252 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 11 | `farro.pune_2026-05-12_18-13-18_3895415170741299189_65980698397.mp4` | video | not measured | 12335 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 12 | `farro.pune_2026-05-29_19-49-24_3907783241288093559_65980698397.mp4` | video | not measured | 16260 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 13 | `farro.pune_2026-06-07_19-02-46_3914284326898911841_65980698397.mp4` | video | not measured | 8134 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 14 | `farro.pune_2026-06-16_20-17-56_3920218864246370772_65980698397.mp4` | video | not measured | 7075 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 15 | `farro.pune_2026-06-19_11-22-59_3922323268978106867_65980698397.mp4` | video | not measured | 13638 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 16 | `farro.pune_2026-06-24_17-12-41_3926550477148036645_65980698397_2.mp4` | video | not measured | 3792 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 17 | `farro.pune_2026-06-24_17-12-41_3926550505358949162_65980698397_5.mp4` | video | not measured | 1903 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 18 | `farro.pune_2026-07-13_19-54-27_3940370509476687966_65980698397.mp4` | video | not measured | 10639 KB | USED as chef-portrait | Muted footage with no on-screen text; original resolution |
| 19 | `farro.pune_2026-07-26_18-58-18_3949796126932881250_65980698397_3.mp4` | video | not measured | 1251 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 20 | `farro.pune_2026-07-26_18-58-18_3949796187448318778_65980698397_5.mp4` | video | not measured | 490 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 21 | `farro.pune_2026-07-26_18-58-18_3949796221975795779_65980698397_6.mp4` | video | not measured | 919 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 22 | `farro.pune_2026-07-28_18-53-54_3951242871627217472_65980698397.mp4` | video | not measured | 9608 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 23 | `farro.pune_2026-08-13_18-51-21_3962837856366492164_65980698397.mp4` | video | not measured | 7737 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 24 | `farro.pune_2026-08-18_19-53-56_3966494272266228231_65980698397_4.mp4` | video | not measured | 752 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 25 | `farro.pune_2026-08-18_19-53-56_3966494337344998103_65980698397_7.mp4` | video | not measured | 407 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 26 | `farro.pune_2026-08-27_19-20-51_3973000096226982096_65980698397.mp4` | video | not measured | 6961 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 27 | `farro.pune_2026-09-02_18-23-05_3976565987019564024_65980698397.mp4` | video | not measured | 7098 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 28 | `farro.pune_2026-09-05_18-15-36_3978766117093150682_65980698397.mp4` | video | not measured | 13029 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 29 | `farro.pune_2026-10-03_13-49-05_3998348450834012151_65980698397.mp4` | video | not measured | 5347 KB | USED as pour-drink | Muted footage with no on-screen text; original resolution |
| 30 | `farro.pune_2026-10-07_18-23-24_4002681968042089666_6849801931.mp4` | video | not measured | 6650 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 31 | `farro.pune_2026-10-10_19-02-51_4004879520291271687_65980698397.mp4` | video | not measured | 11836 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 32 | `farro.pune_2026-10-13_22-25-12_4007157146422718266_65980698397.mp4` | video | not measured | 11336 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 33 | `farro.pune_2026-11-03_16-51-19_4022210250266142278_65980698397_2.mp4` | video | not measured | 361 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 34 | `farro.pune_2026-11-03_16-51-19_4022210264392577527_65980698397_4.mp4` | video | not measured | 378 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 35 | `farro.pune_2026-11-05_12-04-10_4023514157200569591_65980698397.mp4` | video | not measured | 4002 KB | USED as flame-pan | Muted footage with no on-screen text; original resolution |
| 36 | `farro.pune_2026-11-13_20-06-21_4028958133602249944_65980698397.mp4` | video | not measured | 4217 KB | USED as table-setting | Muted footage with no on-screen text; original resolution |
| 37 | `farro.pune_2026-11-17_19-32-57_4031729763674663641_65980698397.mp4` | video | not measured | 8759 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |
| 38 | `farro.pune_2026-11-21_20-36-28_4035369134487395467_65980698397.mp4` | video | not measured | 7419 KB | EXCLUDED | on-screen text overlay or identifiable third-party branding |

## Notes

- Photos 0–3 show identifiable guests. They stay out until consent is confirmed.
- Many Instagram stills carry the Farro logo, event text or captions. Per the brief (§29) they are excluded from the primary site.
- No exact duplicates were found in this review.
- flame-pan is built and kept for a later chapter; it is not placed on any route yet.
