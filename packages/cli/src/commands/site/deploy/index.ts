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
import type { CommonSiteArgs } from "../CommonSiteArgs";
import type { SiteDeployArgs } from "./SiteDeployArgs";

export const command: CommandModule<
  CommonSiteArgs,
  SiteDeployArgs
> = {
  command: "deploy",
  describe: "Deploy an uploaded version",
  builder: (argv) => {
    return argv
      .options({
        "siteVersion": {
          type: "string",
          conflicts: "clearVersion",
          // group: "Deploy Version",
          // implies: { "clearVersion": "false" },
        },
        undeploy: {
          alias: "clearVersion",
          description: "Causes the site to no longer be deployed",
          type: "boolean",
          conflicts: "siteVersion",
          // group: "Deploy Version",
          // implies: { "siteVersion": "" },
        },
      }).group(
        ["siteVersion", "clearVersion"],
        "Version To Deploy (requires one of)",
      );

    // .check((args) => {
    //   if (
    //     (args.siteVersion && args.clearVersion)
    //     || (!args.siteVersion && args.clearVersion == undefined)
    //   ) {
    //     // consola.error("Only one of --siteVersion or --clearVersion may be provided");
    //     throw new Error(
    //       "Only one of --siteVersion or --clearVersion may be provided",
    //     );
    //   }
    // });
  },
  handler: async (args) => {
    const command = await import("./handleSiteDeploy.mjs");
    await command.default(args);
  },
};

export default command;
