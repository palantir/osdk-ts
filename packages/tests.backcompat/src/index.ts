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

import consola from "consola";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { runClientBackcompatTests } from "./client-backcompat.js";
import { runE2eBackcompatTests } from "./e2e-backcompat.js";

const argv = await yargs(hideBin(process.argv))
  .option("e", {
    alias: "e2e backcompat tests",
    type: "boolean",
    description: "Print hi",
  })
  .option("c", {
    alias: "client backcompat tests",
    type: "boolean",
    description: "Print bye",
  })
  .help()
  .argv;

if (argv.e) {
  consola.info("Running e2e backcompat tests");
  await runE2eBackcompatTests();
}

if (argv.c) {
  consola.info("Running client backcompat tests");
  await runClientBackcompatTests();
}
