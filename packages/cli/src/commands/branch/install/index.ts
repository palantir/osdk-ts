/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { BranchCommonArgs } from "../BranchCommonArgs.js";
import type { InstallArgs } from "./InstallArgs.js";

const command: CommandModule<BranchCommonArgs, InstallArgs> = {
  command: "install",
  describe:
    "Discovers and installs the latest versions of branched Foundry SDKs published on a global branch",
  builder: (argv) => {
    return argv
      .options({
        packageName: {
          type: "string",
          description:
            "Name of the branched SDK to operate on. Source of truth when set and skips @<scope>/sdk discovery.",
        },
        dryRun: {
          type: "boolean",
          default: false,
          description: "Print the intended change without modifying files.",
        },
      })
      .group(["packageName", "dryRun"], "Install Options");
  },
  handler: async (args) => {
    const cmd = await import("./installCommand.mjs");
    await cmd.default(args);
  },
};

export default command;
