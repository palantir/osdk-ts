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

import { consola } from "consola";
import type * as yargs from "yargs";
import type { CliCommonArgs } from "../../CliCommonArgs.js";
import type { ThirdPartyAppRid } from "../../net/ThirdPartyAppRid.js";
import type { FoundryConfig } from "../../util/config.js";
import configLoader from "../../util/configLoader.js";
import type { CommonSiteArgs } from "./CommonSiteArgs.js";
import deployHandler from "./deploy/index.js";
import version from "./version/index.js";

async function siteHandler(): Promise<
  yargs.CommandModule<CliCommonArgs, CommonSiteArgs>
> {
  const config: FoundryConfig | undefined = await configLoader();
  const application = config?.site.application;
  const foundryUrl = config?.foundryUrl;

  const deploy = await deployHandler();
  const site: yargs.CommandModule<CliCommonArgs, CommonSiteArgs> = {
    command: "site",
    describe: "Manage your site",
    builder: (argv) => {
      return argv
        .options({
          application: {
            type: "string",
            coerce: (a) => a as ThirdPartyAppRid,
            ...application
              ? { default: application }
              : { demandOption: true },
            description: "Application RID",
          },
          foundryUrl: {
            type: "string",
            ...foundryUrl
              ? { default: foundryUrl }
              : { demandOption: true },
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
        .command(deploy)
        .check((argv) => {
          if (application != null && argv.application !== application) {
            consola.debug(
              `Overriding "application" from config file with ${argv.application}`,
            );
          }

          if (foundryUrl != null && argv.foundryUrl !== foundryUrl) {
            consola.debug(
              `Overriding "foundryUrl" from config file with ${argv.foundryUrl}`,
            );
          }

          if (!argv.foundryUrl.startsWith("https://")) {
            throw new Error(
              "foundryUrl must start with https://",
            );
          }

          argv.foundryUrl = argv.foundryUrl.replace(/\/$/, "");
          return true;
        })
        .demandCommand();
    },
    handler: async (args) => {},
  };
  return site;
}

export default siteHandler;
