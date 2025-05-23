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

import { consola } from "consola";
import { colorize } from "consola/utils";
import fs from "node:fs/promises";
import path from "node:path";
import {
  generateEnvDevelopment,
  generateEnvProduction,
} from "./generate/generateEnv.js";
import { generateFoundryConfigJson } from "./generate/generateFoundryConfigJson.js";
import { generateJemmaFolderWithContent } from "./generate/generateJemmaFolderWithContent.js";
import { generateNpmRc } from "./generate/generateNpmRc.js";
import { getTemplatePackageFile } from "./getTemplatePackageFile.js";
import { updateViteConfigTs } from "./updateViteConfig.js";

interface RunArgs {
  sourceProject: string;
  destinationProject: string;
  overwrite: boolean;
  osdkPackage: string;
}

export async function run(
  {
    sourceProject,
    destinationProject,
    overwrite,
    osdkPackage,
  }: RunArgs,
): Promise<void> {
  consola.log("");
  consola.start(
    `Creating project ${colorize("green", destinationProject)} based off ${
      colorize("green", sourceProject)
    }`,
  );

  const cwd = process.cwd();
  const root = path.join(cwd, destinationProject);
  const sourceProjectPath = path.join(cwd, sourceProject);

  // List of directories and files to exclude from copying
  const excludeDirs = new Set(["dist", "node_modules", ".turbo"]);
  const excludeFiles = new Set([
    "package-lock.json",
    ".env.development",
    ".env.production",
    ".npmrc",
    "foundry.config.json",
  ]);

  try {
    // Check if source project is empty
    const sourceProjectFiles = await fs.readdir(sourceProjectPath);
    if (sourceProjectFiles.length === 0) {
      throw new Error(
        `Source project ${colorize("green", sourceProject)} is empty`,
      );
    }

    // Handle project directory creation or overwriting
    try {
      const rootStats = await fs.stat(root);
      if (overwrite) {
        consola.info(`Overwriting existing project directory`);
        await fs.rm(root, { recursive: true, force: true });
        await fs.mkdir(root, { recursive: true });
      } else {
        consola.info(`Reusing existing project directory`);
      }
    } catch {
      consola.info(`Creating project directory`);
      await fs.mkdir(root, { recursive: true });
    }

    consola.info(`Copying files into project directory`);

    // Recursive function to copy files and directories
    async function copyDirectory(src: string, dest: string) {
      const entries = await fs.readdir(src, { withFileTypes: true });

      for (const entry of entries) {
        // Skip excluded directories and files
        if (entry.isDirectory() && excludeDirs.has(entry.name)) {
          continue;
        }
        if (!entry.isDirectory() && excludeFiles.has(entry.name)) {
          continue;
        }

        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
          await fs.mkdir(destPath, { recursive: true });
          await copyDirectory(srcPath, destPath);
        } else {
          await fs.copyFile(srcPath, destPath);
        }
      }
    }

    // Start copying from the source project path to the destination root
    await copyDirectory(sourceProjectPath, root);

    const npmRc = generateNpmRc();
    await fs.writeFile(path.join(root, ".npmrc"), npmRc);
    const envDevelopment = generateEnvDevelopment({
      envPrefix: "VITE_",
      foundryUrl: "http://localhost:8080",
      clientId: "{{APPLICATION_CLIENT_ID}}",
      corsProxy: false,
      ontology: "{{ONTOLOGY_RID}}",
    });
    await fs.writeFile(path.join(root, ".env.development"), envDevelopment);
    const envProduction = generateEnvProduction({
      envPrefix: "VITE_",
      foundryUrl: "https://{{FOUNDRY_HOSTNAME}}",
      applicationUrl: "https://{{FOUNDRY_HOSTNAME}}",
      clientId: "{{APPLICATION_CLIENT_ID}}",
      ontology: "{{ONTOLOGY_RID}}",
    });
    await fs.writeFile(path.join(root, ".env.production"), envProduction);
    const foundryConfigJson = generateFoundryConfigJson({
      foundryUrl: "https://{{FOUNDRY_HOSTNAME}}",
      application: "{{APPLICATION_RID}}",
      directory: "./dist",
    });
    await fs.writeFile(
      path.join(root, "foundry.config.json"),
      foundryConfigJson,
    );

    // find package.json and update it.
    const packageJsonPath = path.join(root, "package.json");
    const packageJson = await fs.readFile(packageJsonPath, "utf-8");
    const updatedPackageJson = getTemplatePackageFile(packageJson, osdkPackage);
    // replace the package.json file with the updated one
    const formattedPackageJson = JSON.stringify(
      JSON.parse(updatedPackageJson),
      null,
      2,
    );
    await fs.writeFile(packageJsonPath, formattedPackageJson);
    consola.info(`Updating package.json`);
    // find vite.config.ts and update it by adding the resolve alias
    const viteConfigPath = path.join(root, "vite.config.ts");
    const viteConfig = await fs.readFile(viteConfigPath, "utf-8");
    const updatedViteConfig = updateViteConfigTs(viteConfig, osdkPackage);
    await fs.writeFile(viteConfigPath, updatedViteConfig);
    consola.info(`Updating vite.config.ts`);
    // add .jemma folder with content
    const results = await generateJemmaFolderWithContent(root);
    if (!results) {
      throw new Error("Failed to create .jemma folder");
    }
    consola.info(`Creating .jemma folder with content`);
    consola.success("Success");

    const cdRelative = path.relative(cwd, root);
    consola.box({
      message: `Done! ${cdRelative} created\n`,
      style: {
        padding: 2,
        borderColor: "green",
        borderStyle: "rounded",
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      consola.fail(error.message);
    } else {
      consola.fail(String(error));
    }
    process.exit(1);
  }
}
