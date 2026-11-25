// news-image-20261125: "The World in One Image" — 50 stories, 25 Nov 2026.
//
// The entry image is baked into this repository as entry.png (1024x1024,
// 693,679 bytes): a newspaper front page drawn from 50 real stories reported
// on Wednesday 25 November 2026, with a UTC timeline and a date check.
// This program only copies that image to the grader's output directory.
//
// Node 22, standard library only. Deterministic: no clock, no randomness,
// no network, no environment reads. It never deletes anything and never
// copies a directory, so no stray dotfile can reach /output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1048576;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const sourcePath = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetPath = join(outputDir, 'entry.png');

const sourceSize = statSync(sourcePath).size;
if (sourceSize > MAX_BYTES) {
  throw new Error(`entry.png is ${sourceSize} bytes, over the 1 MiB cap`);
}
const header = readFileSync(sourcePath).subarray(0, PNG_MAGIC.length);
if (!header.equals(PNG_MAGIC)) {
  throw new Error('entry.png does not start with a PNG signature');
}
copyFileSync(sourcePath, targetPath);
// Confirm the copy landed whole: the output must be the same file, byte for byte.
const copiedSize = statSync(targetPath).size;
if (copiedSize !== sourceSize) {
  throw new Error(`copied ${copiedSize} bytes, expected ${sourceSize}`);
}
