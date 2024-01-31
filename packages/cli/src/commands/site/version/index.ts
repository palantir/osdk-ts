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
import type { CommonSiteArgs } from "../CommonSiteArgs.js";
import deleteCmd from "./delete/index.js";
import get from "./get/index.js";
import list from "./list/index.js";
import set from "./set/index.js";
import unset from "./unset/index.js";

export const command: CommandModule<
  CommonSiteArgs,
  CommonSiteArgs
> = {
  command: "version",
  describe: "Manage application version",
  builder: (argv) => {
    return argv
      .command(list)
      .command(set)
      .command(unset)
      .command(deleteCmd)
      .command(get)
      .demandCommand();
  },
  handler: async (args) => {
  },
};

export default command;
