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

import { promptApplicationRid } from "./prompts/promptApplicationRid.js";
import { promptApplicationUrl } from "./prompts/promptApplicationUrl.js";
import { promptClientId } from "./prompts/promptClientId.js";
import { promptCorsProxy } from "./prompts/promptCorsProxy.js";
import { promptFoundryUrl } from "./prompts/promptFoundryUrl.js";
import { promptOsdkPackage } from "./prompts/promptOsdkPackage.js";
import { promptOsdkRegistryUrl } from "./prompts/promptOsdkRegistryUrl.js";
import { promptOverwrite } from "./prompts/promptOverwrite.js";
import { promptProject } from "./prompts/promptProject.js";
import { promptScopes } from "./prompts/promptScopes.js";
import { promptSdkVersion } from "./prompts/promptSdkVersion.js";
import { promptTemplate } from "./prompts/promptTemplate.js";
import { run } from "./run.js";
import type { SdkVersion, Template } from "./templates.js";

interface CliArgs {
  project?: string;
  overwrite?: boolean;
  beta?: boolean;
  template?: string;
  sdkVersion?: string;
  foundryUrl?: string;
  applicationUrl?: string;
  skipApplicationUrl?: boolean;
  application?: string;
  clientId?: string;
  osdkPackage?: string;
  osdkRegistryUrl?: string;
  corsProxy?: boolean;
  scopes?: string[];
}

export async function cli(args: string[] = process.argv): Promise<void> {
  const base: Argv<CliArgs> = yargs(hideBin(args))
    .version(process.env.PACKAGE_VERSION ?? "")
    .wrap(Math.min(150, yargs().terminalWidth()))
    .strict()
    .help()
    .command(
      "$0 [project] [--<option>]",
      "Create a new OSDK application based on framework templates. Information may be provided through options to skip interactive prompts.",
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
          .option("applicationUrl", {
            type: "string",
            describe: "URL the production application will be hosted on",
            conflicts: "skipApplicationUrl",
          })
          .option("skipApplicationUrl", {
            type: "boolean",
            describe:
              "Skip filling in URL the production application will be hosted on",
          })
          .option("application", {
            type: "string",
            describe: "Application resource identifier (rid)",
          })
          .option("clientId", {
            type: "string",
            describe: "OAuth client ID for application",
          })
          .option("osdkPackage", {
            type: "string",
            describe: "OSDK package name for application",
          })
          .option("osdkRegistryUrl", {
            type: "string",
            describe: "URL for NPM registry to install OSDK package",
          })
          .option("corsProxy", {
            type: "boolean",
            describe:
              "Include a CORS proxy for Foundry API requests during local development",
          })
          .option("scopes", {
            type: "string",
            array: true,
            describe:
              "List of client-side scopes to be used when creating a client",
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
  const applicationUrl: string | undefined = await promptApplicationUrl(parsed);
  const application: string = await promptApplicationRid(parsed);
  const clientId: string = await promptClientId(parsed);
  const osdkPackage: string = await promptOsdkPackage(parsed);
  const osdkRegistryUrl: string = await promptOsdkRegistryUrl(parsed);
  const corsProxy: boolean = await promptCorsProxy(parsed);
  const scopes: string[] | undefined = await promptScopes(parsed);

  await run({
    project,
    overwrite,
    template,
    sdkVersion,
    foundryUrl,
    applicationUrl,
    application,
    clientId,
    osdkPackage,
    osdkRegistryUrl,
    corsProxy,
    scopes,
  });
}
