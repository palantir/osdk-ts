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

import type { Argv } from "yargs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { promptOverwrite } from "./prompts/promptOverwrite.js";
import { promptProject } from "./prompts/promptProject.js";
import { promptSourceProject } from "./prompts/promptSourceProject.js";
import { run } from "./run.js";

interface CliArgs {
  sourceProject?: string;
  project?: string;
  overwrite?: boolean;
}

export async function cli(args: string[] = process.argv): Promise<void> {
  const base: Argv<CliArgs> = yargs(hideBin(args))
    .version(process.env.PACKAGE_VERSION ?? "")
    .wrap(Math.min(150, yargs().terminalWidth()))
    .strict()
    .help()
    .command(
      "$0 [sourceProject] [project] [--<option>]",
      "Create a new OSDK template project based on source project. Information may be provided through options to skip interactive prompts.",
      (yargs) =>
        yargs
          .positional("sourceProject", {
            type: "string",
            describe:
              "Path to the source project to use as a template. If not provided, the default is '../examples/example-advance-to-do-application'.",
            default: "../examples/example-advance-to-do-application",
          })
          .positional("project", {
            type: "string",
            describe: "Project name to create",
          })
          .option("overwrite", {
            type: "boolean",
            describe: "Overwrite project directory if already exists",
          }),
    );

  const parsed: CliArgs = base.parseSync();
  const sourceProject: string = await promptSourceProject(parsed);
  const project: string = await promptProject(parsed);
  const overwrite: boolean = await promptOverwrite({ ...parsed, project });

  await run({
    sourceProject,
    project,
    overwrite,
  });
}
