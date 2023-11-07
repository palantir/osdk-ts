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

import type { Argv } from "yargs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import type { CliCommonArgs } from "./CliCommonArgs";
import site from "./commands/site";
import { ExitProcessError } from "./ExitProcessError.js";
import { logVersionMiddleware } from "./yargs/logVersionMiddleware";

export async function cli(args: string[] = process.argv) {
  const base: Argv<CliCommonArgs> = yargs(hideBin(args))
    .env("OSDK")
    .version(false)
    .option(
      "verbose",
      {
        alias: "v",
        type: "boolean",
        description: "Enable verbose logging",
        count: true,
      },
    )
    .demandCommand()
    .middleware(logVersionMiddleware, true)
    .strict()
    .command(site);

  try {
    return base.parseAsync();
  } catch (e) {
    if (e instanceof ExitProcessError) {
      const Consola = await import("consola");
      Consola.consola.error(e.message);
    }
  }
}
