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

import type { WidgetConfig } from "@osdk/foundry-config-json";
import type { CommandModule } from "yargs";
import configLoader from "../../../util/configLoader.js";
import type { CommonWidgetArgs } from "../CommonWidgetArgs.js";
import { logWidgetDeployCommandConfigFileOverride } from "./logWidgetDeployCommandConfigFileOverride.js";
import type { WidgetDeployArgs } from "./WidgetDeployArgs.js";

const command: CommandModule<
  CommonWidgetArgs,
  WidgetDeployArgs
> = {
  command: "deploy",
  describe: "Deploy a new widget version",
  builder: async (argv) => {
    const config = await configLoader("widget");
    const widgetConfig: WidgetConfig | undefined = config?.foundryConfig.widget;
    const directory = widgetConfig?.directory;

    return argv
      .options({
        directory: {
          type: "string",
          description: "Directory containing widget files",
          ...directory
            ? { default: directory }
            : { demandOption: true },
        },
      })
      .group(
        ["directory"],
        "Deploy Options",
      ).middleware((args) =>
        logWidgetDeployCommandConfigFileOverride(args, widgetConfig)
      );
  },
  handler: async (args) => {
    const command = await import("./widgetDeployCommand.mjs");
    await command.default(args);
  },
};

export default command;
