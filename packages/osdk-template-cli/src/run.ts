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

import fs from "node:fs/promises";
import path from "node:path";
import { consola } from "./consola.js";
import { green } from "./highlight.js";

interface RunArgs {
  sourceProject: string;
  project: string;
  overwrite: boolean;
}

export async function run(
  {
    sourceProject,
    project,
    overwrite,
  }: RunArgs,
): Promise<void> {
  consola.log("");
  consola.start(
    `Creating project ${green(project)} based off ${green(sourceProject)}`,
  );

  const cwd = process.cwd();
  const root = path.join(cwd, project);
  const sourceProjectPath = path.join(cwd, sourceProject);

  try {
    // Check if source project exists and is a directory
    const sourceStats = await fs.stat(sourceProjectPath);
    if (!sourceStats.isDirectory()) {
      throw new Error(
        `Source project ${green(sourceProject)} is not a directory`,
      );
    }

    // Check if source project is empty
    const sourceProjectFiles = await fs.readdir(sourceProjectPath);
    if (sourceProjectFiles.length === 0) {
      throw new Error(`Source project ${green(sourceProject)} is empty`);
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

    // Copy all files from source project to project directory
    for (const file of sourceProjectFiles) {
      const sourceFilePath = path.join(sourceProjectPath, file);
      const destFilePath = path.join(root, file);
      const fileStats = await fs.stat(sourceFilePath);

      if (fileStats.isDirectory()) {
        await fs.mkdir(destFilePath, { recursive: true });
        const subFiles = await fs.readdir(sourceFilePath);
        for (const subFile of subFiles) {
          const sourceSubFilePath = path.join(sourceFilePath, subFile);
          const destSubFilePath = path.join(destFilePath, subFile);
          await fs.copyFile(sourceSubFilePath, destSubFilePath);
        }
      } else {
        await fs.copyFile(sourceFilePath, destFilePath);
      }
    }

    consola.success("Success");

    const cdRelative = path.relative(cwd, root);
    consola.box({
      message: `Done! ${cdRelative} created:\n`,
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
