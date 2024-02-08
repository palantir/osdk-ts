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

import { findUpSync } from "find-up";
import Handlebars from "handlebars";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Argv } from "yargs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { consola } from "./consola.js";
import {
  generateEnvDevelopment,
  generateEnvProduction,
} from "./generate/generateEnv.js";
import { generateNpmRc } from "./generate/generateNpmRc.js";
import { green } from "./highlight.js";
import { promptApplicationUrl } from "./prompts/promptApplicationUrl.js";
import { promptClientId } from "./prompts/promptClientId.js";
import { promptFoundryUrl } from "./prompts/promptFoundryUrl.js";
import { promptOsdkPackage } from "./prompts/promptOsdkPackage.js";
import { promptOsdkRegistryUrl } from "./prompts/promptOsdkRegistryUrl.js";
import { promptOverwrite } from "./prompts/promptOverwrite.js";
import { promptProject } from "./prompts/promptProject.js";
import { promptTemplate } from "./prompts/promptTemplate.js";
import type { Template, TemplateContext } from "./templates.js";

interface CliArgs {
  project?: string;
  overwrite?: boolean;
  template?: string;
  foundryUrl?: string;
  applicationUrl?: string;
  skipApplicationUrl?: boolean;
  clientId?: string;
  osdkPackage?: string;
  osdkRegistryUrl?: string;
}

export async function cli(args: string[] = process.argv) {
  const base: Argv<CliArgs> = yargs(hideBin(args))
    .version(process.env.PACKAGE_VERSION ?? "")
    .strict()
    .help()
    .command(
      "$0 [project] [--<option>]",
      "Create a new OSDK application based on framework templates. Information may be provided through arguments to skip interactive prompts.",
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
          .option("template", {
            type: "string",
            describe: "Template name to use",
          })
          .option("foundry-url", {
            type: "string",
            describe: "URL for the Foundry stack",
          })
          .option("application-url", {
            type: "string",
            describe: "URL the production application will be hosted on",
          })
          .option("skip-application-url", {
            type: "boolean",
            describe:
              "Skip filling in URL the production application will be hosted on",
          })
          .option("client-id", {
            type: "string",
            describe: "OAuth client ID for application",
          })
          .option("osdk-package", {
            type: "string",
            describe: "OSDK package name for application",
          })
          .option("osdk-registry-url", {
            type: "string",
            describe: "URL for NPM registry to install OSDK package",
          }),
    );

  const parsed: CliArgs = base.parseSync();
  const project: string = await promptProject(parsed);
  const overwrite: boolean = await promptOverwrite({ ...parsed, project });
  const template: Template = await promptTemplate(parsed);
  const foundryUrl: string = await promptFoundryUrl(parsed);
  const applicationUrl: string | undefined = await promptApplicationUrl(parsed);
  const clientId: string = await promptClientId(parsed);
  const osdkPackage: string = await promptOsdkPackage(parsed);
  const osdkRegistryUrl: string = await promptOsdkRegistryUrl(parsed);

  consola.log("");
  consola.start(
    `Creating project ${green(project)} using template ${green(template.id)}`,
  );

  const cwd = process.cwd();
  const root = path.join(cwd, project);

  if (fs.existsSync(root)) {
    if (overwrite) {
      consola.info(`Overwriting existing project directory`);
      fs.rmSync(root, { recursive: true, force: true });
      fs.mkdirSync(root, { recursive: true });
    } else {
      consola.info(`Reusing existing project directory`);
    }
  } else {
    consola.info(`Creating project directory`);
    fs.mkdirSync(root, { recursive: true });
  }

  consola.info(`Copying files into project directory`);

  const templatesDir = findUpSync("templates", {
    cwd: path.dirname(fileURLToPath(import.meta.url)),
    type: "directory",
  });
  if (templatesDir == null) {
    throw new Error(`Could not find templates directory`);
  }
  const templateDir = path.resolve(templatesDir, template.id);

  fs.cpSync(templateDir, root, { recursive: true });

  const templateContext: TemplateContext = {
    project,
    osdkPackage,
  };
  const templateHbs = function(dir: string) {
    fs.readdirSync(dir).forEach(function(file) {
      file = dir + "/" + file;
      const stat = fs.statSync(file);
      if (stat.isDirectory()) {
        templateHbs(file);
        return;
      }
      if (!file.endsWith(".hbs")) {
        return;
      }
      const templated = Handlebars.compile(fs.readFileSync(file, "utf-8"))(
        templateContext,
      );
      fs.writeFileSync(file.replace(/.hbs$/, ""), templated);
      fs.rmSync(file);
    });
  };
  templateHbs(root);

  const npmRc = generateNpmRc({ osdkPackage, osdkRegistryUrl });
  fs.writeFileSync(path.join(root, ".npmrc"), npmRc);
  const envDevelopment = generateEnvDevelopment({
    envPrefix: template.envPrefix,
    foundryUrl,
    clientId,
  });
  fs.writeFileSync(path.join(root, ".env.development"), envDevelopment);
  const envProduction = generateEnvProduction({
    envPrefix: template.envPrefix,
    foundryUrl,
    applicationUrl,
    clientId,
  });
  fs.writeFileSync(path.join(root, ".env.production"), envProduction);

  consola.success("Success");

  const cdRelative = path.relative(cwd, root);
  consola.box({
    message: `Done! Run the following commands to get started:\n`
      + `\n`
      + `  \`cd ${cdRelative}\`\n`
      + `  \`export FOUNDRY_TOKEN=<token>\`\n`
      + `  \`npm install\`\n`
      + `  \`npm run dev\``,
    style: {
      padding: 2,
      borderColor: "green",
      borderStyle: "rounded",
    },
  });
}
