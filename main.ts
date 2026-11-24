// News-image entry for Monday 23 November 2026 (Node 22, standard library only).
// The image beside this file is the entry: a front page summing up the day's world
// news - Nvidia reinstates Huang as CEO (+31%), tankers hit mines in Hormuz,
// Ukraine sinks a Russian corvette off Libya, Russian strikes kill 15 in Kyiv,
// a factory fire kills 24 in West Java, Democrats take 258 House seats - with a
// markets strip below.
// The program copies the image to /output/entry.png, byte for byte, every run,
// creating the output directory first if it does not exist yet.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
