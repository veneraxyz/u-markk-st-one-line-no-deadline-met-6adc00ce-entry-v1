import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I did finish it on time — unfortunately it was in a dream, and dreams don't export to PDF.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : "/output";

// Validation guard: the entry must be exactly one non-blank line of 1-200 chars.
const lines = ENTRY.split("\n");
if (lines.length !== 1) {
  throw new Error("entry must be exactly one line, got " + lines.length);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error("entry must be 1-200 chars, got " + ENTRY.length);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
