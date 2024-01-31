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

import type * as yargs from "yargs";
import type { CliCommonArgs } from "../../CliCommonArgs.js";
import type { ThirdPartyAppRid } from "../../net/ThirdPartyAppRid.js";
import type { CommonSiteArgs } from "./CommonSiteArgs.js";
import deploy from "./deploy/index.js";
import version from "./version/index.js";

function siteHandler(
  configFile: any,
): yargs.CommandModule<CliCommonArgs, CommonSiteArgs> {
  const site: yargs.CommandModule<CliCommonArgs, CommonSiteArgs> = {
    command: "site",
    describe: "Manage your site",
    builder: (argv) => {
      return argv
        .options({
          application: {
            type: "string",
            coerce: (a) => a as ThirdPartyAppRid,
            ...configFile.application
              ? {
                default: configFile.application,
              }
              : {
                demandOption: true,
              },
            description: "Application RID",
          },
          foundryUrl: {
            type: "string",
            ...configFile.foundryUrl
              ? {
                default: configFile.foundryUrl,
              }
              : {
                demandOption: true,
              },
            description:
              "Foundry Stack URL with Protocol (e.g. https://example.palantirfoundry.com)",
          },
          token: {
            type: "string",
            conflicts: "tokenFile",
            description: "Foundry API Token",
          },
          tokenFile: {
            type: "string",
            conflicts: "token",
            description: "Path to a file containing your Foundry API Token",
          },
        })
        .group(
          ["application", "foundryUrl", "token", "tokenFile"],
          "Common Arguments",
        )
        .command(version)
        .command(deploy(configFile))
        .demandCommand();
    },
    handler: async (args) => {
    },
  };

  return site;
}

export default siteHandler;
