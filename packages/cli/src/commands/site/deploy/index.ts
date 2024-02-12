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
import type { LoadedFoundryConfig, SiteConfig } from "../../../util/config.js";
import configLoader from "../../../util/configLoader.js";
import { YargsCheckError } from "../../../YargsCheckError.js";
import type { CommonSiteArgs } from "../CommonSiteArgs.js";
import { logDeployCommandConfigFileOverride } from "./logDeployCommandConfigFileOverride.js";
import type { SiteDeployArgs } from "./SiteDeployArgs.js";

const command: CommandModule<
  CommonSiteArgs,
  SiteDeployArgs
> = {
  command: "deploy",
  describe: "Deploy an uploaded version",
  builder: async (argv) => {
    const config: LoadedFoundryConfig | undefined = await configLoader();
    const siteConfig: SiteConfig | undefined = config?.foundryConfig.site;
    const directory = siteConfig?.directory;
    const autoVersion = siteConfig?.autoVersion;
    const gitTagPrefix = autoVersion?.tagPrefix;

    return argv
      .options({
        directory: {
          type: "string",
          description: "Directory to deploy",
          ...directory
            ? { default: directory }
            : { demandOption: true },
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
            : {},
        },
        autoVersion: {
          type: "string",
          description:
            "Enables autoversioning. Can be set to 'git-describe' to use git describe to determine the version.",
          ...(autoVersion != null)
            ? { default: autoVersion.type }
            : { conflicts: "version" },
        },
        gitTagPrefix: {
          type: "string",
          description:
            "Prefix to match git tags against when --autoVersion=git-describe is used. If not provided, a default prefix 'v' is used.",
          ...gitTagPrefix
            ? { default: gitTagPrefix }
            : {},
        },
      }).group(
        ["autoVersion", "gitTagPrefix"],
        "Autoversion Arguments",
      )
      .group(
        ["version", "directory", "uploadOnly"],
        "Common Arguments",
      )
      .check((args) => {
        // This is required because we can't use demandOption with conflicts. conflicts protects us against the case where both are provided.
        // So this case is for when nothing is provided.
        if (
          autoVersion == null && args.autoVersion == null
          && args.version == null
        ) {
          throw new YargsCheckError(
            "One of --version or --autoVersion must be specified",
          );
        }

        const autoVersionType = args.autoVersion ?? autoVersion;
        if (autoVersionType !== "git-describe") {
          throw new YargsCheckError(
            `Only 'git-describe' is supported for autoVersion`,
          );
        }

        const gitTagPrefixValue = args.gitTagPrefix ?? gitTagPrefix;
        // Future proofing for when we support other autoVersion types
        if (gitTagPrefixValue != null && autoVersionType !== "git-describe") {
          throw new YargsCheckError(
            `--gitTagPrefix is only supported when --autoVersion=git-describe`,
          );
        }

        return true;
      }).middleware((args) =>
        logDeployCommandConfigFileOverride(
          args,
          siteConfig,
        )
      );
  },
  handler: async (args) => {
    const command = await import("./siteDeployCommand.mjs");
    const selectedVersion = args.version != null
      ? args.version
      : {
        type: args.autoVersion as "git-describe",
        tagPrefix: args.gitTagPrefix,
      };
    await command.default({ ...args, selectedVersion });
  },
};

export default command;
