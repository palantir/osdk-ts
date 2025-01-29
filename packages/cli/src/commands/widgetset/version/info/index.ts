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

import type { CommandModule } from "yargs";
import type { CommonWidgetSetArgs } from "../../CommonWidgetSetArgs.js";
import type { VersionInfoArgs } from "./VersionInfoArgs.js";

const command: CommandModule<
  CommonWidgetSetArgs,
  VersionInfoArgs
> = {
  command: "info <version>",
  describe: "Load info about widget set version",
  builder: (argv) => {
    return argv
      .positional("version", {
        type: "string",
        demandOption: true,
        description: "Version to load",
      });
  },
  handler: async (args) => {
    const command = await import("./versionInfoCommand.mjs");
    await command.default(args);
  },
};

export default command;
