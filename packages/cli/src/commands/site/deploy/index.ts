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

import { isValidSemver, YargsCheckError } from "@osdk/cli.common";
import type {
  AutoVersionConfigType,
  LoadedFoundryConfig,
  SiteConfig,
} from "@osdk/foundry-config-json";
import type { CommandModule } from "yargs";
import configLoader from "../../../util/configLoader.js";
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
    const config: LoadedFoundryConfig<"site"> | undefined =
      await configLoader();
    const siteConfig: SiteConfig | undefined = config?.foundryConfig.site;
    const directory = siteConfig?.directory;
    const autoVersion = siteConfig?.autoVersion;
    const gitTagPrefix = autoVersion?.type === "git-describe"
      ? autoVersion.tagPrefix
      : undefined;
    const uploadOnly = siteConfig?.uploadOnly;

    return argv
      .options({
        directory: {
          type: "string",
          description: "Directory containing site files",
          ...directory
            ? { default: directory }
            : { demandOption: true },
        },
        uploadOnly: {
          type: "boolean",
          description: "Upload new site version only without setting as live",
          default: uploadOnly ?? false,
        },
        version: {
          type: "string",
          description: "New version of site to deploy",
          ...autoVersion == null
            ? { conflicts: "autoVersion" }
            : {},
        },
        autoVersion: {
          coerce: (autoVersion) => autoVersion as AutoVersionConfigType,
          type: "string",
          choices: ["git-describe", "package-json"],
          description: "Enable auto versioning",
          ...(autoVersion != null)
            ? { default: autoVersion.type }
            : { conflicts: "version" },
        },
        gitTagPrefix: {
          type: "string",
          description:
            "Prefix to match git tags on when 'git-describe' auto versioning is used. If not provided, all tags are matched and the prefix 'v' is stripped if present.",
          ...gitTagPrefix
            ? { default: gitTagPrefix }
            : {},
        },
        snapshot: {
          type: "boolean",
          description:
            "Upload a snapshot version only with automatic retention",
          default: false,
        },
        snapshotId: {
          type: "string",
          description:
            "Optional id to associate with snapshot version as an alias",
        },
      })
      .group(
        ["directory", "version", "uploadOnly"],
        "Deploy Options",
      )
      .group(
        ["autoVersion", "gitTagPrefix"],
        "Auto Version Options",
      )
      .group(
        ["snapshot", "snapshotId"],
        "Snapshot Options",
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

        if (args.version != null && !isValidSemver(args.version)) {
          throw new YargsCheckError(
            `--version "${args.version}" must be a valid SemVer string`,
          );
        }

        const autoVersionType = args.autoVersion ?? autoVersion;
        if (
          autoVersionType !== "git-describe"
          && autoVersionType !== "package-json"
        ) {
          throw new YargsCheckError(
            `Only 'git-describe' and 'package-json' are supported for autoVersion`,
          );
        }

        const gitTagPrefixValue = args.gitTagPrefix ?? gitTagPrefix;
        // Future proofing for when we support other autoVersion types
        if (gitTagPrefixValue != null && autoVersionType !== "git-describe") {
          throw new YargsCheckError(
            `--gitTagPrefix is only supported when --autoVersion=git-describe`,
          );
        }

        if (args.uploadOnly && args.snapshot) {
          throw new YargsCheckError(
            `--uploadOnly and --snapshot cannot be enabled together`,
          );
        }

        if (args.snapshotId != null && !args.snapshot) {
          throw new YargsCheckError(
            "--snapshotId is only supported when --snapshot is enabled",
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
