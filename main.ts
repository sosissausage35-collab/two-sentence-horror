import { mkdirSync, writeFileSync } from "node:fs";

// Two-Sentence Horror: a locksmith changes the locks on a stranger's new
// house, and the old keys she hands him fit a lock they should never fit.
const STORY =
  "A woman hired me to change the locks on her new house, and over coffee she told me the previous owner had died alone in the kitchen. " +
  "When I finished, she handed me the old keys to throw away — and every one of them was cut for the lock on my own front door.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
