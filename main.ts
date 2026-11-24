// SPDX-License-Identifier: MIT
// The Robot Vacuum's Best Excuse — writes one one-line excuse to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My cliff sensors identified that dust bunny as a staircase, so I have elected not to die today.";
// ENTRY is 95 characters: one line, well under the 140-character cap.

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ENTRY + "\n", "utf8");
