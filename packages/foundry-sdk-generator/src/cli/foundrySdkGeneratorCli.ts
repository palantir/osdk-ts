/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

// eslint-disable-next-line import/no-named-as-default
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { GeneratePackageCommand } from "../generate/index.js";

export async function cli(args: string[] = process.argv) {
  const base = yargs(hideBin(args))
    .command(new GeneratePackageCommand())
    .demandCommand()
    .recommendCommands()
    .strict()
    .showHelpOnFail(true)
    .help()
    .version(process.env.npm_package_version!);

  try {
    return base.parseAsync();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}
