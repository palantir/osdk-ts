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

import type { CliCommonArgs, CommonAuthArgs } from "@osdk/cli.common";
import type * as yargs from "yargs";
import login from "./login/index.js";

const auth: yargs.CommandModule<CliCommonArgs, CommonAuthArgs> = {
  command: "auth",
  describe: "Manage your session",
  builder: (argv) => {
    return argv
      .options({
        foundryUrl: {
          type: "string",
          demandOption: true,
          alias: "baseUrl", // for backwards compatibility
          describe: "URL for the Foundry stack",
        },
      })
      .command(login)
      .demandCommand();
  },
  handler: async (args) => {
  },
};

export default auth;
