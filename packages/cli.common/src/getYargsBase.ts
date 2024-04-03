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

import { consola } from "consola";
import { colorize } from "consola/utils";
import type { Argv } from "yargs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import type { CliCommonArgs } from "./CliCommonArgs.js";
import { ExitProcessError } from "./ExitProcessError.js";
import { logLevelMiddleware } from "./yargs/logLevelMiddleware.js";
import { YargsCheckError } from "./YargsCheckError.js";

export function getYargsBase(args: string[]): Argv<CliCommonArgs> {
  return yargs(hideBin(args))
    .wrap(Math.min(150, yargs().terminalWidth()))
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
    .middleware(logLevelMiddleware, true)
    .strict()
    .fail(async (msg, err, argv) => {
      if (err instanceof ExitProcessError) {
        consola.error(err.message);
        if (err.tip != null) {
          consola.log(colorize("bold", `💡 Tip: ${err.tip}`));
          consola.log("");
        }
        consola.debug(err.stack);
      } else {
        if (err && err instanceof YargsCheckError === false) {
          throw err;
        } else {
          argv.showHelp();
          consola.log("");
          consola.error(msg);
        }
      }
      process.exit(1);
    });
}
