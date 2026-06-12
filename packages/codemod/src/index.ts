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

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { runPicker } from "./picker.js";
import { checkPreflight } from "./preflight.js";
import { runTransform } from "./run.js";
import { TRANSFORMS } from "./transforms/index.js";

export async function main(): Promise<void> {
  await yargs(hideBin(process.argv))
    .scriptName("osdk-codemod")
    .usage("$0 [transform] [path] [options]")
    .command(
      "$0 [transform] [path]",
      "Run an OSDK codemod transform",
      (y) =>
        y
          .positional("transform", {
            type: "string",
            describe: "Transform name (e.g. react/experimental-to-ga)",
          })
          .positional("path", {
            type: "string",
            default: ".",
            describe: "Path to transform",
          })
          .option("dry", {
            type: "boolean",
            default: false,
            describe: "Dry run — print file names without writing",
          })
          .option("print", {
            type: "boolean",
            default: false,
            describe: "Print transformed output to stdout",
          })
          .option("force", {
            type: "boolean",
            default: false,
            describe: "Skip preflight version check",
          }),
      async (argv) => {
        const targetPath = (argv.path as string | undefined) ?? ".";

        if (!argv.force) {
          await checkPreflight(targetPath);
        }

        let transformName = argv.transform as string | undefined;

        if (!transformName) {
          const picked = await runPicker();
          if (picked == null) {
            process.exit(0);
          }
          transformName = picked;
        }

        const known = TRANSFORMS.find((t) => t.name === transformName);
        if (!known) {
          const list = TRANSFORMS.map((t) => `  ${t.name}`).join("\n");
          console.error(
            `Unknown transform: ${transformName}\nAvailable:\n${list}`,
          );
          process.exit(1);
        }

        await runTransform(transformName, targetPath, {
          dry: argv.dry,
          print: argv.print,
        });
      },
    )
    .help()
    .parseAsync();
}
