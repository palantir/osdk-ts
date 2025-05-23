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
import { promptDestinationProject } from "./prompts/promptDestinationProject.js";
import { promptOsdkPackage } from "./prompts/promptOsdkPackage.js";
import { promptOverwrite } from "./prompts/promptOverwrite.js";
import { promptSourceProject } from "./prompts/promptSourceProject.js";
import { run } from "./run.mjs";

interface CreateOsdkTemplateArgs {
  sourceProject?: string;
  destinationProject?: string;
  overwrite?: boolean;
  osdkPackage?: string;
}

const command: CommandModule<{}, CreateOsdkTemplateArgs> = {
  command: "createOsdkTemplate <sourceProject> <destinationProject>",
  describe: "Create a new OSDK template project based on a source project.",
  builder: (yargs) => {
    return yargs
      .positional("sourceProject", {
        type: "string",
        describe:
          "Path to the source React project to use as a template. Should be a React project built using the OSDK create-app template, based on Vite, and using .env variables from the template.",
      })
      .positional("destinationProject", {
        type: "string",
        describe: "Path to the destination project directory.",
      })
      .option("overwrite", {
        type: "boolean",
        describe: "Overwrite project directory if it already exists",
      })
      .option("osdkPackage", {
        type: "string",
        describe:
          "OSDK package name for your application from Developer Console. Example: @my-app/sdk",
      })
      .check((args) => {
        if (!args.sourceProject) {
          throw new Error("The source project must be specified.");
        }
        if (!args.destinationProject) {
          throw new Error("The destination project must be specified.");
        }
        return true;
      });
  },
  handler: async (args) => {
    const sourceProject = await promptSourceProject({
      sourceProject: args.sourceProject,
    });
    const destinationProject = await promptDestinationProject({
      destinationProject: args.destinationProject,
    });
    const overwrite = await promptOverwrite({
      ...args,
      destinationProject,
    });
    const osdkPackage = await promptOsdkPackage({
      osdkPackage: args.osdkPackage,
    });

    await run({
      sourceProject,
      destinationProject,
      overwrite,
      osdkPackage,
    });
  },
};

export default command;
