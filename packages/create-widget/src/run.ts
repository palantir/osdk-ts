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

import fs from "node:fs";
import path from "node:path";

import Handlebars from "handlebars";

import { consola } from "./consola.js";
import { generateFoundryConfigJson } from "./generate/generateFoundryConfigJson.js";
import { generateNpmRc } from "./generate/generateNpmRc.js";
import { green } from "./highlight.js";
import type { SdkVersion, Template, TemplateContext } from "./templates.js";

type RunArgs = {
  project: string;
  overwrite: boolean;
  template: Template;
  sdkVersion: SdkVersion;
  osdkPackage?: string;
  osdkRegistryUrl?: string;
  osdkPath?: string;
  viteConfig?: string;
  buildCommand?: string;
} & (
  | { skipFoundryConfig: true; foundryUrl?: string }
  | {
      skipFoundryConfig?: false;
      foundryUrl: string;
      widgetSet: string;
      repository: string | undefined;
    }
);

export async function run(args: RunArgs): Promise<void> {
  const {
    project,
    overwrite,
    template,
    sdkVersion,
    foundryUrl,
    osdkPackage,
    osdkRegistryUrl,
  } = args;
  if (args.osdkPath != null && osdkPackage == null) {
    throw new Error("A local SDK requires an OSDK package name");
  }
  const viteConfig =
    args.viteConfig == null
      ? undefined
      : fs.readFileSync(path.resolve(args.viteConfig), "utf-8");
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

  if (template.files[sdkVersion] == null) {
    throw new Error(
      `The ${template.label} template does not support a "${sdkVersion}" SDK version.`,
    );
  }

  const files: Map<
    string,
    { type: "base64"; body: string } | { type: "raw"; body: string }
  > = await template.files[sdkVersion]();

  for (const [filePath, contents] of files) {
    const finalPath = path.join(root, filePath);
    const dirPath = path.dirname(finalPath);
    await fs.promises.mkdir(dirPath, { recursive: true });
    await fs.promises.writeFile(
      finalPath,
      Buffer.from(contents.body, contents.type === "raw" ? "utf-8" : "base64"),
    );
  }

  const templateContext: TemplateContext = {
    project,
    foundryUrl,
    widgetSet: args.skipFoundryConfig ? undefined : args.widgetSet,
    osdkPackage,
  };
  const processFiles = function (dir: string) {
    fs.readdirSync(dir).forEach((file) => {
      let fullPath = dir + "/" + file;
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        processFiles(fullPath);
        return;
      }

      if (fullPath.endsWith("/_gitignore")) {
        fs.renameSync(
          fullPath,
          fullPath.replace(/\/_gitignore$/u, "/.gitignore"),
        );
        return;
      }

      // Files with the `.osdk` extension are only kept if the application uses an OSDK
      if (file.includes(".osdk")) {
        if (osdkPackage == null) {
          fs.rmSync(fullPath);
          return;
        } else {
          const renamed = dir + "/" + file.replace(".osdk", "");
          fs.renameSync(fullPath, renamed);
          fullPath = renamed;
        }
        // Files with the `.no-osdk` extension are only kept if the application does not use an OSDK
      } else if (file.includes(".no-osdk")) {
        if (osdkPackage == null) {
          const renamed = dir + "/" + file.replace(".no-osdk", "");
          fs.renameSync(fullPath, renamed);
          fullPath = renamed;
        } else {
          fs.rmSync(fullPath);
          return;
        }
      }

      if (!fullPath.endsWith(".hbs")) {
        return;
      }
      const templated = Handlebars.compile(fs.readFileSync(fullPath, "utf-8"))(
        templateContext,
      );
      fs.writeFileSync(fullPath.replace(/.hbs$/u, ""), templated);
      fs.rmSync(fullPath);
    });
  };
  processFiles(root);

  if (viteConfig != null) {
    fs.writeFileSync(path.join(root, "vite.config.ts"), viteConfig);
  }
  if (args.buildCommand != null || args.osdkPath != null) {
    const packagePath = path.join(root, "package.json");
    const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf-8"));
    if (args.buildCommand != null)
      packageJson.scripts.build = args.buildCommand;
    if (args.osdkPath != null && osdkPackage != null) {
      packageJson.dependencies[osdkPackage] =
        `file:${args.osdkPath.replaceAll("\\", "/")}`;
    }
    fs.writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`);
  }

  const useRemoteOsdk =
    args.osdkPath == null && (osdkPackage != null || osdkRegistryUrl != null);
  if (useRemoteOsdk) {
    if (osdkPackage == null || osdkRegistryUrl == null || foundryUrl == null) {
      throw new Error(
        `Template ${template.id} requires OSDK package, registry URL, and Foundry URL`,
      );
    }
    const npmRc = generateNpmRc({ osdkPackage, osdkRegistryUrl, foundryUrl });
    fs.writeFileSync(path.join(root, ".npmrc"), npmRc);
  }

  if (!args.skipFoundryConfig) {
    const foundryConfigJson = generateFoundryConfigJson({
      foundryUrl: args.foundryUrl,
      widgetSet: args.widgetSet,
      repository: args.repository,
      directory: template.buildDirectory,
    });
    fs.writeFileSync(path.join(root, "foundry.config.json"), foundryConfigJson);
  }

  consola.success("Success");

  const cdRelative = path.relative(cwd, root);
  consola.box({
    message:
      `Done! Run the following commands to get started:\n` +
      `\n` +
      `  \`cd ${cdRelative}\`\n` +
      (args.skipFoundryConfig && osdkRegistryUrl == null
        ? ""
        : `  \`export FOUNDRY_TOKEN=<token>\`\n`) +
      `  \`npm install\`\n` +
      `  \`npm run dev\``,
    style: {
      padding: 2,
      borderColor: "green",
      borderStyle: "rounded",
    },
  });
}
