// @ts-check

/*
 * Pre-commit guard: scans the *staged* contents of changed files for things
 * that look like leaked credentials (JWTs, e.g. Foundry auth tokens) and
 * aborts the commit if any are found.
 *
 * Detection logic lives in the pure, tested `scanText` (./scanSecrets.mjs);
 * this entry only does the git I/O, prints findings, and sets the exit code.
 *
 * The full token is printed verbatim so you can grep for it, remove it, and
 * rotate it. That is safe here because this runs LOCALLY on pre-commit only —
 * do not pipe this output anywhere persistent (CI logs, shared transcripts).
 *
 * Guardrail, not a guarantee: it can be bypassed with `git commit --no-verify`
 * and it never scans history. It scans the FULL staged content of each changed
 * file (not just the added hunks), so editing a file that already contains a
 * token will flag it. A staged file it cannot read is failed closed, not skipped.
 */

import { execFileSync } from "node:child_process";
import { scanText } from "./scanSecrets.mjs";

/** @returns {string[]} staged file paths (added/copied/modified/renamed/type-changed) */
// cspell:ignore ACMRT
function getStagedFiles() {
  const out = execFileSync(
    "git",
    ["diff", "--cached", "--name-only", "--diff-filter=ACMRT", "-z"],
    { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
  );
  return out.split("\0").filter((f) => f.length > 0);
}

/**
 * @returns {Buffer | null} the staged blob, or null if it could not be read
 *   (git errored, or the blob exceeds maxBuffer). Callers fail closed on null.
 */
function getStagedContent(path) {
  try {
    return execFileSync("git", ["show", `:${path}`], {
      maxBuffer: 64 * 1024 * 1024,
    });
  } catch {
    return null;
  }
}

const findings = [];
let unreadable = false;

for (const file of getStagedFiles()) {
  const buf = getStagedContent(file);
  if (buf == null) {
    // Fail closed: a staged file we cannot read might hide a secret, so refuse
    // it rather than skipping it silently.
    console.error(
      `✖ Could not read staged content of ${file} — refusing to pass it through without scanning.`,
    );
    unreadable = true;
    continue;
  }
  // Skip binary files (a NUL byte is a good-enough heuristic).
  if (buf.includes(0)) {
    continue;
  }
  for (const finding of scanText(buf.toString("utf8"))) {
    findings.push({ ...finding, file });
  }
}

if (findings.length > 0) {
  console.error("\n✖ Possible secret(s) found in staged changes:\n");
  for (const f of findings) {
    console.error(`  ${f.file}:${f.line}  [${f.kind}] ${f.token}`);
  }
  console.error(
    "\nIf this is a real credential: unstage it, remove it from the file, and rotate it.",
  );
  console.error(
    "To bypass intentionally (discouraged): commit with --no-verify.\n",
  );
}

if (findings.length > 0 || unreadable) {
  process.exit(1);
}
