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
import type { SiteConfig } from "../../../util/config.js";
import type { CommonSiteArgs } from "../CommonSiteArgs.js";
import type { SiteDeployArgs } from "./siteDeployArgs.js";

function deployHandler(
  siteConfig?: SiteConfig,
): yargs.CommandModule<CommonSiteArgs, SiteDeployArgs> {
  const directory = siteConfig?.directory;
  const autoVersion = siteConfig?.autoVersion;

  const command: yargs.CommandModule<
    CommonSiteArgs,
    SiteDeployArgs
  > = {
    command: "deploy",
    describe: "Deploy an uploaded version",
    builder: (argv) => {
      return argv
        .options({
          directory: {
            type: "string",
            description: "Directory to deploy",
            ...directory
              ? {
                default: directory,
              }
              : {
                demandOption: true,
              },
          },
          uploadOnly: {
            type: "boolean",
            description: "Upload the directory but do not deploy it",
            default: false,
          },
          version: {
            type: "string",
            description: "Version to deploy",
            ...autoVersion == null
              ? { conflicts: "autoVersion" }
              : {}, // Only conflict if autoVersion is not provided in the config file
          },
          autoVersion: {
            type: "boolean",
            description: "Infers the version to deploy automatically",
            ...(autoVersion != null)
              ? { default: autoVersion }
              : { conflicts: "version" },
          },
        }).group(
          ["version", "autoVersion"],
          "Version Arguments. Only one of these options may be specified.",
        )
        .group(
          ["directory", "uploadOnly"],
          "Common Arguments",
        )
        .check((argv) => {
          // This is required because we can't use demandOption with conflicts. conflicts protects us against the case where both are provided.
          // So this case is for when nothing is provided.
          if (
            autoVersion == null && argv.autoVersion == null
            && argv.version == null
          ) {
            throw new Error(
              "One of --version or --autoVersion must be specified",
            );
          }

          // If autoVersion is passed with a value of false, then version must be specified.
          // This also handles the case where autoVersion is specified as false in the config file.
          if (
            argv.version == null && argv.autoVersion != null
            && argv.autoVersion === false
          ) {
            throw new Error(
              "--autoVersion must not be specified with a value of false if --version is not specified.",
            );
          }

          if (directory != null && argv.directory !== directory) {
            consola.debug(
              `Overriding "directory" from config file with ${argv.directory}`,
            );
          }

          if (autoVersion != null && argv.autoVersion !== autoVersion) {
            consola.debug(
              `Overriding "autoVersion" from config file with ${argv.autoVersion}`,
            );
          }
          return true;
        });
    },
    handler: async (args) => {
      const command = await import("./handleSiteDeploy.mjs");
      await command.default(args);
    },
  };
  return command;
}
export default deployHandler;
