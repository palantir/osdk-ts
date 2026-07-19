/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Merges the per-package coverage that `pnpm run coverage:collect` produces
// (one `packages/<pkg>/coverage/coverage-final.json` per package, emitted by
// the vitest v8 provider in istanbul JSON format) into a single repo-wide
// report under `coverage/` at the workspace root.
//
// Outputs:
//   coverage/coverage-final.json    merged raw per-file coverage
//   coverage/coverage-summary.json  totals + per-file summary (badge/PR source)
//   coverage/index.html             HTML report (open in a browser)
//   coverage/lcov.info              lcov (handy for editors / external tools)
// ...and prints the aggregate totals to stdout.

import { globSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import libCoverage from "istanbul-lib-coverage";
import libReport from "istanbul-lib-report";
import reports from "istanbul-reports";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const outDir = join(repoRoot, "coverage");

// Each package writes its coverage to `<pkg>/coverage/coverage-final.json`
// (see the `coverage:collect` script). Discover them all.
const files = globSync("packages/*/coverage/coverage-final.json", {
  cwd: repoRoot,
})
  .map((f) => join(repoRoot, f))
  .sort();

if (files.length === 0) {
  console.error(
    "No per-package coverage found (packages/*/coverage/coverage-final.json).\n"
      + "Run `pnpm run coverage:collect` first.",
  );
  process.exit(1);
}

const coverageMap = libCoverage.createCoverageMap({});
let mergedPackages = 0;
for (const file of files) {
  let json;
  try {
    json = JSON.parse(readFileSync(file, "utf8"));
  } catch (err) {
    console.warn(`Skipping unreadable coverage file ${file}: ${err.message}`);
    continue;
  }
  // A package whose suite touched nothing writes `{}`; merging it is a no-op.
  coverageMap.merge(json);
  mergedPackages++;
}

// Regenerate the output dir cleanly so stale files never linger.
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const context = libReport.createContext({
  dir: outDir,
  coverageMap,
});

for (const reporter of ["json", "json-summary", "lcovonly", "html"]) {
  reports.create(reporter, {}).execute(context);
}

// istanbul's json-summary reporter emits `coverage-summary.json`; read it back
// so we report the exact same totals the downstream badge/PR comment will use.
const summary = JSON.parse(
  readFileSync(join(outDir, "coverage-summary.json"), "utf8"),
);
const t = summary.total;

const pct = (m) => `${m.pct}% (${m.covered}/${m.total})`;
console.log("");
console.log(
  `Merged coverage from ${mergedPackages} package(s), ${coverageMap.files().length} files:`,
);
console.log(`  Statements : ${pct(t.statements)}`);
console.log(`  Branches   : ${pct(t.branches)}`);
console.log(`  Functions  : ${pct(t.functions)}`);
console.log(`  Lines      : ${pct(t.lines)}`);
console.log("");
console.log(`Report written to ${join("coverage", "index.html")}`);
