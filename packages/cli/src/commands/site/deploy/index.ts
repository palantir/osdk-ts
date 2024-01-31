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
import type { CommonSiteArgs } from "../CommonSiteArgs.js";
import type { SiteDeployArgs } from "./siteDeployArgs.js";

function deployHandler(
  configFile: any,
): yargs.CommandModule<CommonSiteArgs, SiteDeployArgs> {
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
            ...configFile.directory
              ? {
                default: configFile.directory,
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
            ...configFile.autoVersion == null
              ? { conflicts: "autoVersion" }
              : {}, // Only conflict if autoVersion is not provided in the config file
          },
          autoVersion: {
            type: "boolean",
            description: "Infers the version to deploy automatically",
            ...(configFile.autoVersion != null)
              ? { default: configFile.autoVersion }
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
          if (
            configFile.autoVersion == null && argv.autoVersion == null
            && argv.version == null
          ) {
            throw new Error(
              "One of --version or --autoVersion must be specified",
            );
          }
          if (
            argv.version == null && argv.autoVersion != null
            && argv.autoVersion === false
          ) {
            // This also handles if autoVersion is set to false in the project config file
            throw new Error(
              "--autoVersion must not be specified with a value of false if --version is not specified.",
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
