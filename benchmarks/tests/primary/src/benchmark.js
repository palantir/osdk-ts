/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

// @ts-check

import cliProgress from "cli-progress";
import { execaNode } from "execa";
import { mean, std } from "mathjs";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import invariant from "tiny-invariant";
import { fixDirname } from "./helpers.js";

fixDirname(import.meta);

const WARMUP_ITERATIONS = 5;
const ITERATIONS = 15;

async function main() {
  const multiBar = new cliProgress.MultiBar(
    {
      format: "[{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | {name}",
      clearOnComplete: true,
    },
    cliProgress.Presets.shades_classic,
  );

  const tests = [
    "import.createClient.esbuild.js",
    "import.createClient.js",
    "noop.js",
  ];

  const overallBar = multiBar.create(
    tests.length * (WARMUP_ITERATIONS + ITERATIONS),
    0,
    { name: "Overall" },
  );

  const final = {
    tests: {},
    sizes: {},
  };

  for (const test of tests) {
    const progressBar = multiBar.create(WARMUP_ITERATIONS + ITERATIONS, 0, {
      name: test,
    });
    for (let i = 0; i < WARMUP_ITERATIONS; i++) {
      await runTest(test);
      progressBar.increment();
      overallBar.increment();
    }

    const results = [];
    for (let i = 0; i < ITERATIONS; i++) {
      const result = await runTest(test);
      results.push(result);
      progressBar.increment();
      overallBar.increment();
    }

    const combinedResults = Object.fromEntries(
      ["time", "heapUsed", "rss"].map((key) => [
        key,
        {
          std: std(results.map((x) => x[key]), "uncorrected"),
          mean: mean(results.map((x) => x[key])),
          min: Math.min(...results.map((x) => x[key])),
          max: Math.max(...results.map((x) => x[key])),
        },
      ]),
    );

    final.tests[test] = {
      runs: results,
      stats: combinedResults,
    };
  }
  multiBar.stop();

  const esBuildStats = await fs.stat(
    path.join(import.meta.dirname, "..", "build", "esbuild", "bundle.js"),
  );
  final.sizes["esbuild/bundle.js"] = esBuildStats.size;

  const outDir = path.join(import.meta.dirname, "..", "build", "benchmark");
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(
    path.join(outDir, "results.json"),
    JSON.stringify(final, null, 2),
  );
}

/**
 * @param {string} test
 * @returns {Promise<import("./types.js").Result>}
 */
async function runTest(test) {
  const subprocess = execaNode({
    nodeOptions: [
      "--allow-natives-syntax",
      "--expose-gc",
      "--max-old-space-size=10",
    ],
    ipc: true,
  })`${path.join(import.meta.dirname, "tests", test)}`;
  await subprocess.sendMessage({ "type": "start" });

  /** @type {import("./types.js").Result} */
  const response = /** @type any */ (await subprocess.getOneMessage());
  invariant(
    response.type === "result" && "time" in response && "heapUsed" in response
      && "rss" in response,
  );
  return response;
}

main();
