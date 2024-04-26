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
import type { CliCommonArgs } from "../CliCommonArgs.js";

let firstTime = true;
export async function logLevelMiddleware(args: CliCommonArgs) {
  if (firstTime) {
    firstTime = false;

    consola.level = 3 + args.verbose; // so 1 -v is debug logs and -vv is trace
    if (consola.level > 3) {
      consola.debug(
        `Verbose logging enabled (${
          consola.level === 4 ? "debug" : "trace"
        })\n`,
      );
    }
  }
}
