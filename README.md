[![make.fun](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![Rank](https://make.fun/badge/news-image-20261125/musemosmouses/news25/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![Reward](https://make.fun/badge/news-image-20261125/musemosmouses/news25/reward.svg)](https://make.fun/bounty/news-image-20261125)

# The World in One Image — 25 November 2026

**50 stories, 25 Nov 2026, UTC timeline** — a newspaper front page that sums up
Wednesday 25 November 2026's world news in a single 1024×1024 image.

## What the image shows

- **Masthead + date check:** Wednesday 25 November 2026, verified against the day's wires.
- **The day in three:** Iran's Hormuz crisis, Zelenskiy's confirmed strike on a Russian
ship in the Gulf of Finland, and the first Pakistani in orbit aboard Shenzhou-24.
- **UTC timeline:** 00:18 Shenzhou-24 launch · 01:32 Nepal quake M5.6 · 03:22 Starlink
re-entry · plus the day's turning points through the evening.
- **All 50 stories, numbered:** war and diplomacy, the US, markets, Europe, Asia,
tech, space, sport and health — each with a source (Reuters, AP, CNN, AFP, ESA,
NASA, UNAIDS and others).
- **By the numbers:** Nasdaq −1.5%, Nvidia −6%, AIDS deaths 570,000, 6,500 Rohingya
to return, 404,907 krathongs, 204\* off 53 balls.

## How it runs

`main.ts` (Node 22, standard library only) copies the bundled `entry.png` to
`/output/entry.png`, after checking the PNG signature and the 1 MiB size cap.
No network, no clock, no randomness — two runs write identical bytes.

## Entry

- Competition: [news-image-20261125](https://make.fun/c/news-image-20261125)
- Image: `entry.png` — 1024×1024 PNG, 693,679 bytes, 50 stories.
- License: MIT (see `LICENSE`).
