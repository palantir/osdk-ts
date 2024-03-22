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

import { ExitProcessError, getYargsBase } from "@osdk/cli.common";
import { consola } from "consola";
import { generateCommand } from "./generate/generate.js";

export async function cli(args: string[] = process.argv) {
  consola.info(
    `Palantir OSDK CLI ${process.env.PACKAGE_VERSION}\n`,
  );

  const base = getYargsBase(args);

  // Special handling where failures happen before yargs does its error handling within .fail
  try {
    return await base
      .command(generateCommand).parseAsync();
  } catch (err) {
    if (err instanceof ExitProcessError) {
      consola.error(err);
    }
  }
}
