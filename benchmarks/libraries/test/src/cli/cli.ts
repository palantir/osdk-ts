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
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { runBenchmark } from "./mem-test/runBenchmark.js";
import { runTest } from "./mem-test/runTest.js";

export function cli(args: ReadonlyArray<string> = hideBin(process.argv)) {
  return yargs(args).command({
    command: "mem-test",

    builder: (yargs) => {
      return yargs
        .option("iterations", {
          alias: "i",
          type: "number",
          default: 10,
          description: "Number of iterations",
        })
        .option("warmup", {
          alias: "w",
          type: "number",
          default: 1,
          description: "Number of warmup iterations",
        })
        .option("progressBar", {
          alias: "p",
          type: "boolean",
          default: process.env.TURBO_HASH == null,
          defaultDescription: "true if TURBO_HASH is not set",
          description: "Show progress bar",
        })
        .option("output", {
          alias: "o",
          type: "string",
          description: "Output file",
          default: "./build/benchmark/serial/results.json",
        });
    },

    handler: async (args) => {
      // eslint-disable-next-line no-console
      console.log("Running benchmark");

      await runBenchmark(args);

      // eslint-disable-next-line no-console
      console.log("✅");
    },
  }).parseAsync();
}
