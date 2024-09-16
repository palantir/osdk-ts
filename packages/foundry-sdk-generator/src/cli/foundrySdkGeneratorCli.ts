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

import consola from "consola";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { GeneratePackageCommand } from "../generate/index.js";

export async function cli(args: string[] = process.argv) {
  function createBase() {
    return yargs(hideBin(args))
      .command(new GeneratePackageCommand())
      .demandCommand()
      .recommendCommands()
      .strict()
      .showHelpOnFail(true)
      .help()
      .version(process.env.npm_package_version!);
  }

  try {
    // When given a callback, yargs will not process.exit on error, allowing us
    // to inspect the arguments for `--beta` and conditionally run the beta
    return createBase()
      .parseAsync(
        hideBin(args),
        {},
        async (err, argv, output) => {
          // yargs does its best to process the arguments even if it doesn't know about them
          // like in the case of `--beta` now. So we can just try again if --beta is set
          // and we don't have to know what the arguments might be.
          if (argv.beta) {
            consola.warn("Beta flag is set, this feature may not be stable");

            // lazy import to avoid loading the beta code path unless necessary
            const { cli } = await import("@osdk/main-foundry-sdk-generator");

            await cli(args);
          } else {
            if (err) {
              // eslint-disable-next-line no-console
              console.error(output);
              // eslint-disable-next-line no-console
              console.error(err);
              process.exit(1);
            } else {
              // eslint-disable-next-line no-console
              console.log(output);
              process.exit(0);
            }
          }
        },
      );
  } catch (e) {
    consola.error(e);
  }
}
