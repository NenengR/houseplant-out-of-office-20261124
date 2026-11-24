// The Houseplant Out-of-Office
// Writes the houseplant's out-of-office auto-reply to /output/entry.txt.
// The line: a fern, watered once since March, on a photosynthesizing break.
// Revision: clarified the comment; the reply text itself is untouched.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line = "Out of office: I am a fern. Watered once since March, I am now on a photosynthesizing break until further notice.";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
