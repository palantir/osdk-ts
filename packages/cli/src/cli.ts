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

import typescript from "@osdk/cli.cmd.typescript";
import type { CliCommonArgs } from "@osdk/cli.common";
import { ExitProcessError, getYargsBase } from "@osdk/cli.common";
import { consola } from "consola";
import type { Argv } from "yargs";
import auth from "./commands/auth/index.js";
import site from "./commands/site/index.js";
import { logConfigFileMiddleware } from "./yargs/logConfigFileMiddleware.js";

export async function cli(args: string[] = process.argv): Promise<
  Record<string, unknown> | undefined
> {
  consola.info(
    `Palantir OSDK CLI ${process.env.PACKAGE_VERSION}\n`,
  );

  const base: Argv<CliCommonArgs> = getYargsBase(args);

  // Special handling where failures happen before yargs does its error handling within .fail
  try {
    return await base
      .middleware(logConfigFileMiddleware)
      .command(site)
      .command({
        command: "unstable",
        aliases: ["experimental"],
        describe: "Unstable commands",
        builder: async (argv) => {
          return argv
            .command(typescript)
            .command(auth)
            .demandCommand();
        },
        handler: (_args) => {},
      }).parseAsync();
  } catch (err) {
    if (err instanceof ExitProcessError) {
      consola.error(err);
    }
  }
}
