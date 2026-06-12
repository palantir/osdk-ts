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

import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const _require = createRequire(import.meta.url);

export interface RunOptions {
  dry?: boolean;
  print?: boolean;
  force?: boolean;
  extensions?: string;
}

interface RunStats {
  error: number;
  ok: number;
  nochange: number;
  skip: number;
}

export async function runTransform(
  transformName: string,
  targetPath: string,
  options: RunOptions,
): Promise<void> {
  // Resolve the compiled transform path relative to this module.
  // At runtime this file is at build/esm/run.js and the transform
  // is at build/esm/transforms/<name>.js.
  const transformPath = resolve(
    __dirname,
    "transforms",
    transformName + ".js",
  );

  const { run } = loadRunner();

  const stats: RunStats = await run(transformPath, [targetPath], {
    dry: options.dry ?? false,
    print: options.print ?? false,
    extensions: options.extensions ?? "tsx,ts,jsx,js",
    parser: "tsx",
    verbose: 0,
    silent: false,
    babel: false,
    runInBand: false,
  });

  printSummary(stats, options.dry ?? false);
}

function loadRunner(): {
  run: (
    transformFile: string,
    paths: string[],
    options: Record<string, unknown>,
  ) => Promise<RunStats>;
} {
  // jscodeshift is CJS; use createRequire for reliable import from ESM.
  const runner = _require("jscodeshift/src/Runner.js") as {
    run: (
      transformFile: string,
      paths: string[],
      options: Record<string, unknown>,
    ) => Promise<RunStats>;
  };
  return runner;
}

function printSummary(stats: RunStats, dry: boolean): void {
  const mode = dry ? " (dry run)" : "";
  console.log(`\nResults${mode}:`);
  console.log(`  ok:       ${stats.ok}`);
  console.log(`  nochange: ${stats.nochange}`);
  console.log(`  skip:     ${stats.skip}`);
  if (stats.error > 0) {
    console.error(`  error:    ${stats.error}`);
  }
}
