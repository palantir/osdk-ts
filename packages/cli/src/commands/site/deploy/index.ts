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
import type {
  AutoVersionConfigType,
  LoadedFoundryConfig,
  SiteConfig,
} from "../../../util/config.js";
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
  describe: "Deploy a new site version",
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
          description: "Directory containing site files",
          ...directory
            ? { default: directory }
            : { demandOption: true },
        },
        "upload-only": {
          type: "boolean",
          description: "Upload new site version only without setting as live",
          default: false,
        },
        version: {
          type: "string",
          description: "New version of site to deploy",
          ...autoVersion == null
            ? { conflicts: "auto-version" }
            : {},
        },
        "auto-version": {
          coerce: (autoVersion) => autoVersion as AutoVersionConfigType,
          type: "string",
          choices: ["git-describe"],
          description: "Enable auto versioning",
          ...(autoVersion != null)
            ? { default: autoVersion.type }
            : { conflicts: "version" },
        },
        "git-tag-prefix": {
          type: "string",
          description:
            "Prefix to match git tags on when 'git-describe' auto versioning is used. If not provided, all tags are matched and the prefix 'v' is stripped if present.",
          ...gitTagPrefix
            ? { default: gitTagPrefix }
            : {},
        },
      })
      .group(
        ["directory", "version", "upload-only"],
        "Deploy Options",
      )
      .group(
        ["auto-version", "git-tag-prefix"],
        "Auto Version Options",
      )
      .check((args) => {
        // This is required because we can't use demandOption with conflicts. Conflicts protect us against the case where both are provided.
        // So this case is for when nothing is provided.
        if (
          autoVersion == null && args.autoVersion == null
          && args.version == null
        ) {
          throw new YargsCheckError(
            "One of --version or --auto-version must be specified",
          );
        }

        const autoVersionType = args.autoVersion ?? autoVersion;
        if (autoVersionType !== "git-describe") {
          throw new YargsCheckError(
            `Only 'git-describe' is supported for --auto-version`,
          );
        }

        const gitTagPrefixValue = args.gitTagPrefix ?? gitTagPrefix;
        // Future proofing for when we support other autoVersion types
        if (gitTagPrefixValue != null && autoVersionType !== "git-describe") {
          throw new YargsCheckError(
            `--git-tag-prefix is only supported when --auto-version=git-describe`,
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
    const { version, autoVersion, gitTagPrefix, ...restArgs } = args;
    const selectedVersion = args.version != null
      ? args.version
      : {
        type: args.autoVersion!,
        tagPrefix: args.gitTagPrefix,
      };
    await command.default({ ...restArgs, selectedVersion });
  },
};

export default command;
