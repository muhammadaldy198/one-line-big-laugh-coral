import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One Line, Big Laugh (coral-404) — entry writes its single line verbatim.
const line = "My grammar checker flagged my breakup text for tone and suggested: 'More grateful, less honest'.";
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, line, "utf8");
chmodSync(target, 0o644);
