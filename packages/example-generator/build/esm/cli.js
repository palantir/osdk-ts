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

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { run } from "./run.js";
export async function cli(args = process.argv) {
  const base = yargs(hideBin(args)).version(false).strict().help().command("$0 <outputDirectory> [--check]", "Generate examples from @osdk/create-app templates.").positional("outputDirectory", {
    type: "string",
    demandOption: true,
    describe: "Directory to generate examples in"
  }).option("check", {
    type: "boolean",
    default: false,
    describe: "Whether to check if the output directory already contains the same content as" + " the generated examples. An exit code of 0 will be returned if examples are" + " up to date otherwise an exit code of 1 will be returned."
  });
  await run(base.parseSync());
}
//# sourceMappingURL=cli.js.map