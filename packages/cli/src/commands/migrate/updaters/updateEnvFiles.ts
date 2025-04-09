/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import consola from "consola";
import * as fs from "fs/promises";
import * as path from "path";
import type { FileInfo } from "../utils.js";

export const envPaths: string[] = [
  ".env.development",
  ".env.production",
  ".env.code-workspaces",
];

export async function updateEnvFiles(ontologyRid: string): Promise<FileInfo[]> {
  const envVarKey = "VITE_FOUNDRY_ONTOLOGY_RID";
  const envVarLine = `${envVarKey}=${ontologyRid}\n`;
  const updatedFiles: { path: string; backupPath: string }[] = [];

  for (const envPath of envPaths) {
    try {
      consola.info(`Updating ${envPath}`);
      const fileContent = await fs.readFile(envPath, "utf-8");

      // Backing up the original file
      const pathInfo = path.parse(envPath);
      const backupPath = path.join(
        pathInfo.dir,
        `${pathInfo.name}-old${pathInfo.ext}`,
      );
      consola.info(
        `Creating backup of original ${pathInfo.name}${pathInfo.ext} at ${backupPath}`,
      );
      await fs.copyFile(envPath, backupPath);

      // Updating existing variable or appending new variable
      const regex = new RegExp(`^${envVarKey}=.*$`, "m");
      if (regex.test(fileContent)) {
        const updatedContent = fileContent.replace(regex, envVarLine.trim());
        await fs.writeFile(envPath, updatedContent, "utf-8");
      } else {
        await fs.writeFile(
          envPath,
          fileContent + (fileContent.endsWith("\n") ? "" : "\n") + envVarLine,
          "utf-8",
        );
      }
      consola.success(`Successfully updated ${envPath}\n`);

      updatedFiles.push({
        path: envPath,
        backupPath: backupPath,
      });
    } catch (error: any) {
      if (error.code === "ENOENT") {
        consola.warn(`Skipping ${envPath} - file not found`);
        continue;
      } else {
        throw new Error(`Failed to update ${envPath}: ${error}`);
      }
    }
  }
  return updatedFiles;
}
