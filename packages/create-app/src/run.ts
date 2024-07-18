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

import { findUpSync } from "find-up";
import Handlebars from "handlebars";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { consola } from "./consola.js";
import {
  generateEnvDevelopment,
  generateEnvProduction,
} from "./generate/generateEnv.js";
import { generateFoundryConfigJson } from "./generate/generateFoundryConfigJson.js";
import { generateNpmRc } from "./generate/generateNpmRc.js";
import { green } from "./highlight.js";
import type { Template, TemplateContext } from "./templates.js";

interface RunArgs {
  project: string;
  overwrite: boolean;
  template: Template;
  foundryUrl: string;
  applicationUrl: string | undefined;
  application: string;
  clientId: string;
  osdkPackage: string;
  osdkRegistryUrl: string;
  corsProxy: boolean;
}

export async function run(
  {
    project,
    overwrite,
    template,
    foundryUrl,
    applicationUrl,
    application,
    clientId,
    osdkPackage,
    osdkRegistryUrl,
    corsProxy,
  }: RunArgs,
): Promise<void> {
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

  const files: Map<
    string,
    { type: "base64"; body: string } | { type: "raw"; body: string }
  > = (await import(
    `@osdk/create-app.template.${template.id.replace(/^template-/, "")}`
  )).files;

  for (const [filePath, contents] of files) {
    const finalPath = path.join(root, filePath);
    const dirPath = path.dirname(finalPath);
    await fs.promises.mkdir(dirPath, { recursive: true });
    await fs.promises.writeFile(
      finalPath,
      Buffer.from(
        contents.body,
        contents.type === "raw" ? "utf-8" : "base64",
      ),
    );
  }

  const templateContext: TemplateContext = {
    project,
    foundryUrl,
    osdkPackage,
    corsProxy,
  };
  const processFiles = function(dir: string) {
    fs.readdirSync(dir).forEach(function(file) {
      file = dir + "/" + file;
      const stat = fs.statSync(file);
      if (stat.isDirectory()) {
        processFiles(file);
        return;
      }

      if (file.endsWith("/_gitignore")) {
        fs.renameSync(file, file.replace(/\/_gitignore$/, "/.gitignore"));
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
  processFiles(root);

  const npmRc = generateNpmRc({ osdkPackage, osdkRegistryUrl });
  fs.writeFileSync(path.join(root, ".npmrc"), npmRc);
  const envDevelopment = generateEnvDevelopment({
    envPrefix: template.envPrefix,
    foundryUrl,
    clientId,
    corsProxy,
  });
  fs.writeFileSync(path.join(root, ".env.development"), envDevelopment);
  const envProduction = generateEnvProduction({
    envPrefix: template.envPrefix,
    foundryUrl,
    applicationUrl,
    clientId,
  });
  fs.writeFileSync(path.join(root, ".env.production"), envProduction);
  const foundryConfigJson = generateFoundryConfigJson({
    foundryUrl,
    application,
    directory: template.buildDirectory,
  });
  fs.writeFileSync(path.join(root, "foundry.config.json"), foundryConfigJson);

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
