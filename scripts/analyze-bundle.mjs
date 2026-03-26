/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

/**
 * Bundle breakdown analysis script.
 *
 * Runs esbuild with metafile: true for each entry in .size-limit.cjs,
 * groups module bytes by npm package, and writes structured JSON output.
 *
 * Usage: node scripts/analyze-bundle.mjs <output-path.json>
 */

import esbuild from "esbuild";
import { writeFileSync } from "node:fs";
import { mkdtempSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const require = createRequire(import.meta.url);
const rootDir = resolve(import.meta.dirname, "..");

const outputPath = process.argv[2];
if (!outputPath) {
  console.error("Usage: node scripts/analyze-bundle.mjs <output.json>");
  process.exit(1);
}

/** Extract npm package name from an esbuild input path. */
function getPackageName(inputPath) {
  const idx = inputPath.lastIndexOf("node_modules/");
  if (idx === -1) return "(first-party)";
  const rest = inputPath.slice(idx + "node_modules/".length);
  if (rest.startsWith("@")) {
    const parts = rest.split("/");
    return parts[0] + "/" + parts[1];
  }
  return rest.split("/")[0];
}

// Load the same config that size-limit uses
const entries = require(join(rootDir, ".size-limit.cjs"));

const results = [];

for (const entry of entries) {
  const entryPath = resolve(rootDir, entry.path);

  // Replicate size-limit's processImport: when import is set,
  // create a temp entry file that re-exports from the actual path
  let entryFile = entryPath;
  let tempDir;
  if (entry.import) {
    const imports = entry.import === "*" ? "* as all" : entry.import;
    const list = entry.import === "*"
      ? "all"
      : entry.import.replace(/[{}]/g, "").trim();
    const loader = `import ${imports} from ${
      JSON.stringify(entryPath)
    }\nconsole.log(${list})\n`;

    tempDir = mkdtempSync(join(tmpdir(), "analyze-bundle-"));
    entryFile = join(tempDir, "index.js");
    writeFileSync(entryFile, loader);
  }

  let config = {
    bundle: true,
    entryPoints: [entryFile],
    external: entry.ignore || [],
    metafile: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    outdir: tempDir || mkdtempSync(join(tmpdir(), "analyze-bundle-")),
    treeShaking: true,
    write: false,
  };

  if (entry.modifyEsbuildConfig) {
    config = entry.modifyEsbuildConfig(config);
  }

  try {
    const result = await esbuild.build(config);

    // Aggregate bytesInOutput by package
    const packageBytes = new Map();
    for (const output of Object.values(result.metafile.outputs)) {
      for (const [inputPath, info] of Object.entries(output.inputs)) {
        const pkg = getPackageName(inputPath);
        packageBytes.set(
          pkg,
          (packageBytes.get(pkg) || 0) + info.bytesInOutput,
        );
      }
    }

    const breakdown = [...packageBytes.entries()]
      .map(([pkg, bytes]) => ({ package: pkg, bytes }))
      .sort((a, b) => b.bytes - a.bytes);

    results.push({ name: entry.name, breakdown });
  } catch (err) {
    console.error(`Failed to analyze ${entry.name}: ${err.message}`);
    results.push({ name: entry.name, breakdown: [] });
  }
}

writeFileSync(outputPath, JSON.stringify(results, null, 2));
console.log(
  `Bundle breakdown written to ${outputPath} (${results.length} entries)`,
);
