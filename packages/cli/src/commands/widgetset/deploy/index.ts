/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { WidgetSetConfig } from "@osdk/foundry-config-json";
import { MANIFEST_FILE_LOCATION } from "@osdk/widget-api.unstable";
import type { CommandModule } from "yargs";
import type { StemmaRepositoryRid } from "../../../net/StemmaRepositoryRid.js";
import configLoader from "../../../util/configLoader.js";
import type { CommonWidgetSetArgs } from "../CommonWidgetSetArgs.js";
import { logWidgetSetDeployCommandConfigFileOverride } from "./logWidgetSetDeployCommandConfigFileOverride.js";
import type { WidgetSetDeployArgs } from "./WidgetSetDeployArgs.js";

const command: CommandModule<
  CommonWidgetSetArgs,
  WidgetSetDeployArgs
> = {
  command: "deploy",
  describe:
    `Deploy a new widget set version\n\nThe widget set files must contain a `
    + `valid manifest at ${MANIFEST_FILE_LOCATION} which determines the version`
    + ` to publish. The widget set files may be uploaded to the widget set`
    + ` itself, or to a separate code repository if it has been authorized to`
    + ` publish the widget set.`,
  builder: async (argv) => {
    const config = await configLoader("widgetSet");
    const widgetSetConfig: WidgetSetConfig | undefined = config?.foundryConfig
      .widgetSet;
    const directory = widgetSetConfig?.directory;
    const repository = widgetSetConfig?.repository;

    return argv
      .options({
        directory: {
          type: "string",
          description: "Directory containing widget set files",
          ...directory
            ? { default: directory }
            : { demandOption: true },
        },
        repository: {
          type: "string",
          coerce: (application) => application as StemmaRepositoryRid,
          ...repository
            ? { default: repository }
            : {},
          description:
            "Code repository resource identifier (rid) publishing the widget set",
        },
      })
      .group(
        ["directory", "repository"],
        "Deploy Options",
      ).middleware((args) =>
        logWidgetSetDeployCommandConfigFileOverride(args, widgetSetConfig)
      );
  },
  handler: async (args) => {
    const command = await import("./widgetSetDeployCommand.mjs");
    await command.default(args);
  },
};

export default command;
