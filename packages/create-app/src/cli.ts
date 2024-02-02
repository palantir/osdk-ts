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
import { green, italic } from "./highlight.js";
import type { Template } from "./templates.js";
import { TEMPLATES } from "./templates.js";

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
  const overwrite: boolean = await promptOverwrite(parsed, project);
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
      const hbsContext = { project, osdkPackage };
      const templated = Handlebars.compile(fs.readFileSync(file, "utf-8"))(
        hbsContext,
      );
      fs.writeFileSync(file.replace(/.hbs$/, ""), templated);
      fs.rmSync(file);
    });
  };
  templateHbs(root);

  const npmRc = `//${
    osdkRegistryUrl.replace(
      /^https:\/\//,
      "",
    )
  }:_authToken=\${FOUNDRY_SDK_AUTH_TOKEN}\n`
    + `${osdkPackage.split("/")[0]}:registry=${osdkRegistryUrl}\n`;
  fs.writeFileSync(path.join(root, ".npmrc"), npmRc);

  const envDevelopment = `${template.envPrefix}FOUNDRY_API_URL=${foundryUrl}\n`
    + `${template.envPrefix}FOUNDRY_REDIRECT_URL=http://localhost:8080/auth/callback\n`
    + `${template.envPrefix}FOUNDRY_CLIENT_ID=${clientId}\n`;
  fs.writeFileSync(path.join(root, ".env.development"), envDevelopment);

  const envProduction = `${template.envPrefix}FOUNDRY_API_URL=${foundryUrl}\n`
    + `${template.envPrefix}FOUNDRY_REDIRECT_URL=${
      applicationUrl != null
        ? applicationUrl
        : "<Fill in the domain at which you deploy your application>"
    }/auth/callback\n`
    + `${template.envPrefix}FOUNDRY_CLIENT_ID=${clientId}\n`;
  fs.writeFileSync(path.join(root, ".env.production"), envProduction);

  consola.success("Success");

  const cdRelative = path.relative(cwd, root);
  consola.box({
    message: `Done! Run the following commands to get started:\n`
      + `\n`
      + `  \`cd ${cdRelative}\`\n`
      + `  \`export FOUNDRY_SDK_AUTH_TOKEN=<token>\`\n`
      + `  \`npm install\`\n`
      + `  \`npm run dev\``,
    style: {
      padding: 2,
      borderColor: "green",
      borderStyle: "rounded",
    },
  });
}

async function promptProject(parsed: CliArgs): Promise<string> {
  let project = parsed.project;
  while (project == null || !/^[a-zA-Z0-9-_]+$/.test(project)) {
    if (project != null) {
      consola.fail(
        "Project name can only contain alphanumeric characters, hyphens and underscores",
      );
    }
    project = await consola.prompt("Project name:", {
      type: "text",
      placeholder: "my-osdk-app",
      default: "my-osdk-app",
    });
  }

  return project;
}

async function promptOverwrite(
  parsed: CliArgs,
  project: string,
): Promise<boolean> {
  if (!fs.existsSync(path.join(process.cwd(), project))) {
    return true;
  }

  if (parsed.overwrite != null) {
    return parsed.overwrite;
  }

  const result = (await consola.prompt(
    `The directory ${
      green(
        project,
      )
    } already exists do you want to overwrite or ignore it?`,
    {
      type: "select",
      options: [
        { label: "Remove existing files and continue", value: "overwrite" },
        { label: "Ignore files and continue", value: "ignore" },
        { label: "Cancel", value: "cancel" },
      ],
    },
    // Types for "select" are wrong the value is returned rather than the option object
    // https://github.com/unjs/consola/pull/238
  )) as unknown as "overwrite" | "ignore" | "cancel";

  switch (result) {
    case "overwrite":
      return true;
    case "ignore":
      return false;
    case "cancel":
      consola.fail("Operation cancelled");
      process.exit(0);
  }
}

async function promptTemplate(parsed: CliArgs): Promise<Template> {
  let template = TEMPLATES.find((t) => t.id === parsed.template);
  if (template == null) {
    const templateId = (await consola.prompt(
      parsed.template != null
        ? `The provided template ${
          green(
            parsed.template,
          )
        } is invalid please select a framework:`
        : "Select a framework:",
      {
        type: "select",
        options: TEMPLATES.map((template) => ({
          value: template.id,
          label: template.label,
        })),
        // Types for "select" are wrong the value is returned rather than the option object
        // https://github.com/unjs/consola/pull/238
      },
    )) as unknown as string;

    template = TEMPLATES.find((t) => t.id === templateId);
    if (template == null) {
      throw new Error(`Template ${templateId} should be found`);
    }
  }

  return template;
}

async function promptFoundryUrl(parsed: CliArgs): Promise<string> {
  let foundryUrl = parsed.foundryUrl;
  while (foundryUrl == null || !foundryUrl.startsWith("https://")) {
    if (foundryUrl != null) {
      consola.fail("Please enter a valid Foundry URL");
    }
    foundryUrl = await consola.prompt(
      `Enter the URL for your Foundry stack:\n${
        italic(
          "(Example https://example.palantirfoundry.com/)",
        )
      }`,
      { type: "text" },
    );
  }
  return foundryUrl.replace(/\/$/, "");
}

async function promptApplicationUrl(
  parsed: CliArgs,
): Promise<string | undefined> {
  if (parsed.skipApplicationUrl) {
    return undefined;
  }

  let applicationUrl = parsed.applicationUrl;
  if (applicationUrl == null) {
    const skip = (await consola.prompt(
      `Do you know the URL your production application will be hosted on? This is required to create a production build of your application with the correct OAuth redirect URL.`,
      {
        type: "select",
        options: [
          { label: "Yes, prefill it for me", value: "yes" },
          { label: "No, I will fill it in myself later", value: "no" },
        ],
      },
      // Types for "select" are wrong the value is returned rather than the option object
      // https://github.com/unjs/consola/pull/238
    )) as unknown as "yes" | "no";

    if (skip === "no") {
      return undefined;
    }
  }

  while (applicationUrl == null || !/^https?:\/\//.test(applicationUrl)) {
    if (applicationUrl != null) {
      consola.fail("Please enter a valid application URL");
    }
    applicationUrl = await consola.prompt(
      `Enter the URL your production application will be hosted on:\n${
        italic(
          "(Example https://myapp.example.palantirfoundry.com/)",
        )
      }`,
      { type: "text" },
    );
  }
  return applicationUrl.replace(/\/$/, "");
}

async function promptClientId(parsed: CliArgs): Promise<string> {
  let clientId = parsed.clientId;
  while (clientId == null || !/^[0-9a-f]+$/.test(clientId)) {
    if (clientId != null) {
      consola.fail("Please enter a valid OAuth client ID");
    }
    clientId = await consola.prompt(
      `Enter the OAuth client ID for your application from Developer Console:\n${
        italic(
          "(Example 2650385ab6c5e0df3b44aff776b00a42)",
        )
      }`,
      { type: "text" },
    );
  }
  return clientId;
}

async function promptOsdkPackage(parsed: CliArgs): Promise<string> {
  let osdkPackage = parsed.osdkPackage;
  while (osdkPackage == null || !/^@[a-z0-9-]+\/sdk$/.test(osdkPackage)) {
    if (osdkPackage != null) {
      consola.fail("Please enter a valid OSDK package name");
    }
    osdkPackage = await consola.prompt(
      `Enter the OSDK package name for your application from Developer Console:\n${
        italic(
          "(Example @my-app/sdk)",
        )
      }`,
      { type: "text" },
    );
  }
  return osdkPackage;
}

async function promptOsdkRegistryUrl(parsed: CliArgs): Promise<string> {
  let osdkRegistryUrl = parsed.osdkRegistryUrl;
  while (
    osdkRegistryUrl == null
    || !/^https:\/\/[^/]+\/artifacts\/api\/repositories\/ri\.artifacts\.[^/]+\/contents\/release\/npm\/?$/
      .test(
        osdkRegistryUrl,
      )
  ) {
    if (osdkRegistryUrl != null) {
      consola.fail(
        "Please enter a valid NPM registry URL to install your OSDK package",
      );
    }
    osdkRegistryUrl = await consola.prompt(
      `Enter the NPM registry URL to install your OSDK package from Developer Console:\n${
        italic(
          "(Example https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.a4a7fe1c-486f-4226-b706-7b90005f527d/contents/release/npm)",
        )
      }`,
      { type: "text" },
    );
  }
  return osdkRegistryUrl.replace(/\/$/, "");
}
