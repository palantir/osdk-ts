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

import { execSync } from "child_process";
import consola from "consola";
import { promises as fs } from "fs";
import path from "path";
import readline from "readline";
import { envPaths } from "./updaters/updateEnvFiles.js";

export function checkGitStatus(): { shouldConfirm: boolean; message: string } {
  try {
    const output = execSync("git status --porcelain").toString();
    if (output.trim().length > 0) {
      return {
        shouldConfirm: true,
        message:
          "You have unstaged changes in your repository. It's recommended to stash or commit your changes first.",
      };
    }
    return { shouldConfirm: false, message: "" };
  } catch (error) {
    return {
      shouldConfirm: true,
      message:
        "Unable to check git status. This might not be a git repository or git is not installed.",
    };
  }
}

export async function confirmProceedMigration(
  warningMessage: string,
): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    consola.warn(`⚠️  ${warningMessage}`);
    rl.question(
      "Do you want to proceed with migration anyway? (y/N): ",
      (answer) => {
        rl.close();
        resolve(answer.toLowerCase() === "y");
      },
    );
  });
}

export async function validateRequiredFiles(
  clientPath: string,
  indexPath: string,
): Promise<{ success: boolean; message: string }> {
  try {
    const requiredFiles = [clientPath, indexPath];
    for (const file of requiredFiles) {
      try {
        await fs.access(file);
      } catch (error) {
        return {
          success: false,
          message:
            `${file} file not found. Please ensure the file exists before running the migration command.`,
        };
      }
    }

    // Check if backup files already exist to prevent overwriting them
    const filesToCheck = [
      clientPath,
      indexPath,
      ...envPaths,
    ];

    for (const file of filesToCheck) {
      const pathInfo = path.parse(file);
      const backupPath = path.join(
        pathInfo.dir,
        `${pathInfo.name}-old${pathInfo.ext}`,
      );

      try {
        await fs.access(backupPath);
        return {
          success: false,
          message:
            `Backup file already exists at ${backupPath}. Running the migration command will overwrite this file. Please remove or rename it before proceeding.`,
        };
      } catch (error) {
      }
    }
    return { success: true, message: "" };
  } catch (error) {
    return {
      success: false,
      message: `Error validating files: ${error}`,
    };
  }
}

export type FileInfo = {
  path: string;
  backupPath: string;
};

export function backupInstructions(
  clientFileInfo: FileInfo,
  indexFileInfo: FileInfo,
  envFilesInfo: Array<FileInfo>,
): void {
  const cleanupCommand = [
    "rm",
    clientFileInfo.backupPath,
    indexFileInfo.backupPath,
    ...envFilesInfo.map(info => info.backupPath),
  ].join(" ");

  const restoreCommand = [
    `mv ${clientFileInfo.backupPath} ${clientFileInfo.path} &&`,
    `mv ${indexFileInfo.backupPath} ${indexFileInfo.path}`,
  ];

  if (envFilesInfo.length > 0) {
    const envRestoreCommands = envFilesInfo.map(info =>
      `mv ${info.backupPath} ${info.path}`
    );
    restoreCommand.push("&& " + envRestoreCommands.join(" && "));
  }

  consola.box({
    title: "Backup Files Information",
    message: `
  Backup files have been created with the "-old" suffix for all modified files.
  Please review the changes to ensure everything is working correctly.
  
  BACKUP FILES CREATED:
  ${
      [
        `- ${clientFileInfo.backupPath}`,
        `- ${indexFileInfo.backupPath}`,
        ...envFilesInfo.map(info => `- ${info.backupPath}`),
      ].join("\n")
    }
  
  OPTIONS:
  
  1. TO KEEP THE CHANGES (after verifying everything works):
   Run this command to remove backup files:
  
   ${cleanupCommand}
  
  2. TO RESTORE ORIGINAL FILES:
   If you need to revert to the original files, run:
  
   ${restoreCommand.join(" \\\n   ")}
  
  These commands assume you're running them from the project root directory.
      `,
    style: {
      border: "rounded",
      padding: 1,
      borderColor: "cyan",
      width: 120,
    },
  });
}
