/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { promptFoundryUrl } from "./prompts/promptFoundryUrl.js";
import { promptOsdkPackage } from "./prompts/promptOsdkPackage.js";
import { promptOsdkRegistryUrl } from "./prompts/promptOsdkRegistryUrl.js";
import { promptOverwrite } from "./prompts/promptOverwrite.js";
import { promptProject } from "./prompts/promptProject.js";
import { promptSdkVersion } from "./prompts/promptSdkVersion.js";
import { promptTemplate } from "./prompts/promptTemplate.js";
import { promptWidgetSetRid } from "./prompts/promptWidgetSetRid.js";
import { run } from "./run.js";
import type { SdkVersion, Template } from "./templates.js";

interface CliArgs {
  project?: string;
  overwrite?: boolean;
  beta?: boolean;
  template?: string;
  sdkVersion?: string;
  foundryUrl?: string;
  widgetSet?: string;
  osdkPackage?: string;
  osdkRegistryUrl?: string;
}

export async function cli(args: string[] = process.argv): Promise<void> {
  const base: Argv<CliArgs> = yargs(hideBin(args))
    .version(process.env.PACKAGE_VERSION ?? "")
    .wrap(Math.min(150, yargs().terminalWidth()))
    .strict()
    .help()
    .command(
      "$0 [project] [--<option>]",
      "Create a new OSDK widget set based on framework templates. Information may be provided through options to skip interactive prompts.",
      (yargs) =>
        yargs
          .positional("project", {
            type: "string",
            describe: "Project name to create",
          })
          .option("overwrite", {
            type: "boolean",
            describe: "Overwrite project directory if already exists",
          })
          .option("beta", {
            type: "boolean",
            describe:
              "Use templates compatible with the Beta version of the SDK",
          })
          .option("template", {
            type: "string",
            describe: "Template name to use",
          })
          .option("sdkVersion", {
            type: "string",
            describe: "The OSDK version to use",
          })
          .option("foundryUrl", {
            type: "string",
            describe: "URL for the Foundry stack",
          })
          .option("widgetSet", {
            type: "string",
            describe: "Widget set resource identifier (rid)",
          })
          .option("osdkPackage", {
            type: "string",
            describe: "OSDK package name for application",
          })
          .option("osdkRegistryUrl", {
            type: "string",
            describe: "URL for NPM registry to install OSDK package",
          }),
    );

  const parsed: CliArgs = base.parseSync();
  const project: string = await promptProject(parsed);
  const overwrite: boolean = await promptOverwrite({ ...parsed, project });
  const template: Template = await promptTemplate(parsed);
  const sdkVersion: SdkVersion = await promptSdkVersion({
    ...parsed,
    template,
  });
  const foundryUrl: string = await promptFoundryUrl(parsed);
  const osdkPackage: string = await promptOsdkPackage(parsed);
  const osdkRegistryUrl: string = await promptOsdkRegistryUrl(parsed);
  const widgetSet: string = await promptWidgetSetRid(parsed);

  await run({
    project,
    overwrite,
    template,
    sdkVersion,
    foundryUrl,
    widgetSet,
    osdkPackage,
    osdkRegistryUrl,
  });
}
