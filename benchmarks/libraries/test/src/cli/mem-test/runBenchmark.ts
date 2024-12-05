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

// import cliProgress from "cli-progress";
import mean from "@stdlib/stats-base-mean";
import stdev from "@stdlib/stats-base-stdev";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import ProgressBar from "ora-progress-bar";
import type { Result } from "./runTest.js";
import { runTest } from "./runTest.js";

export async function runBenchmark(
  { progressBar: showProgressBar, warmup, iterations, output }: {
    progressBar: boolean;
    warmup: number;
    iterations: number;
    output: string;
  },
) {
  if (!showProgressBar) {
    // eslint-disable-next-line no-console
    console.log("Running benchmark");
  }

  const progressBar = showProgressBar
    ? new ProgressBar("Running Benchmark", warmup + iterations)
    : undefined;

  const final: {
    runs: Result[];
    stats: Record<
      "time" | "heapUsed" | "rss",
      { std: number; mean: number; min: number; max: number }
    >;
  } = {
    runs: [],
    stats: {
      time: { std: 0, mean: 0, min: 0, max: 0 },
      heapUsed: { std: 0, mean: 0, min: 0, max: 0 },
      rss: { std: 0, mean: 0, min: 0, max: 0 },
    },
  };

  for (let i = 0; i < warmup; i++) {
    if (!showProgressBar) {
      // eslint-disable-next-line no-console
      console.log(`Starting warmup ${i + 1}/${warmup}`);
      await runTest(process.cwd());
    }
    progressBar?.progress();
  }

  for (let i = 0; i < iterations; i++) {
    if (!showProgressBar) {
      // eslint-disable-next-line no-console
      console.log(`Starting iteration ${i + 1}/${iterations}`);
      await runTest(process.cwd());
    }
    const result = await runTest(process.cwd());
    final.runs.push(result);
    progressBar?.progress();
  }

  for (const key of ["time", "heapUsed", "rss"] as const) {
    const values = final.runs.map((x) => x[key]);
    Object.assign(final.stats[key], {
      std: stdev(final.runs.length, 1, values, 1),
      mean: mean(final.runs.length, values, 1),
      min: Math.min(...values),
      max: Math.max(...values),
    });
  }

  path.dirname(output) !== "."
    && (await fs.mkdir(path.dirname(output), { recursive: true }));

  await fs.writeFile(
    output,
    JSON.stringify(final, null, 2),
  );
  if (!showProgressBar) {
    // eslint-disable-next-line no-console
    console.log("✅");
  }
  progressBar?.succeed("Benchmark complete");
}
