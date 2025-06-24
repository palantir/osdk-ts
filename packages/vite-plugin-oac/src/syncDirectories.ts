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

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { Logger } from "./Logger.js";

/**
 * Synchronize directories by copying only changed files and removing obsolete ones
 */
export async function syncDirectories(
  sourceDir: string,
  targetDir: string,
  logger: Logger,
): Promise<void> {
  logger.debug(`Synchronizing ${sourceDir} to ${targetDir}`);

  // Ensure target directory exists
  await fs.promises.mkdir(targetDir, { recursive: true });

  // Get all files in both directories
  const [sourceFiles, targetFiles] = await Promise.all([
    getAllFiles(sourceDir),
    getAllFiles(targetDir),
  ]);

  let updatedCount = 0;
  let addedCount = 0;
  let removedCount = 0;
  let unchangedCount = 0;
  const errors: string[] = [];

  // Process files from source directory
  for (const relativeFile of sourceFiles) {
    const sourceFile = path.join(sourceDir, relativeFile);
    const targetFile = path.join(targetDir, relativeFile);

    try {
      const targetExists = targetFiles.includes(relativeFile);
      const isDifferent = await areFilesDifferent(sourceFile, targetFile);

      if (!targetExists) {
        // New file - need to create directory structure
        await fs.promises.mkdir(path.dirname(targetFile), { recursive: true });
        await fs.promises.copyFile(sourceFile, targetFile);
        addedCount++;
        logger.debug(`Added: ${relativeFile}`);
      } else if (isDifferent) {
        // Changed file - update it
        await fs.promises.copyFile(sourceFile, targetFile);
        updatedCount++;
        logger.debug(`Updated: ${targetFile}`);
      } else {
        // File is unchanged
        unchangedCount++;
      }
    } catch (error) {
      const errorMsg = `Failed to sync ${relativeFile}: ${
        error instanceof Error ? error.message : String(error)
      }`;
      errors.push(errorMsg);
      logger.error(errorMsg);
    }
  }

  // Remove files that exist in target but not in source
  for (const relativeFile of targetFiles) {
    if (!sourceFiles.includes(relativeFile)) {
      const targetFile = path.join(targetDir, relativeFile);
      try {
        await fs.promises.unlink(targetFile);
        removedCount++;
        logger.debug(`Removed: ${relativeFile}`);
      } catch (error) {
        const errorMsg = `Failed to remove ${relativeFile}: ${
          error instanceof Error ? error.message : String(error)
        }`;
        errors.push(errorMsg);
        logger.error(errorMsg);
      }
    }
  }

  // Clean up empty directories in target
  try {
    await removeEmptyDirectories(targetDir);
  } catch (error) {
    logger.warn(
      `Failed to clean up empty directories: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }

  // Log summary
  logger.debug(
    `Sync complete: ${addedCount} added, ${updatedCount} updated, ${removedCount} removed, ${unchangedCount} unchanged`,
  );

  if (errors.length > 0) {
    logger.warn(`Encountered ${errors.length} errors during sync`);
  }
}

/**
 * Remove empty directories recursively
 */
async function removeEmptyDirectories(dir: string): Promise<void> {
  try {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    // First, recursively clean subdirectories
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subdir = path.join(dir, entry.name);
        await removeEmptyDirectories(subdir);
      }
    }

    // Then check if this directory is now empty
    const remainingEntries = await fs.promises.readdir(dir);
    if (remainingEntries.length === 0) {
      // Don't remove the root target directory itself
      const targetDir = ".osdk/src";
      if (path.resolve(dir) !== path.resolve(targetDir)) {
        await fs.promises.rmdir(dir);
      }
    }
  } catch (error) {
    // Ignore errors when cleaning up directories
  }
}

/**
 * Calculate SHA-256 hash of a file's contents
 */
async function getFileHash(filePath: string): Promise<string> {
  try {
    const content = await fs.promises.readFile(filePath);
    return crypto.createHash("sha256").update(content).digest("hex");
  } catch (error) {
    // Return empty hash for non-existent files
    return "";
  }
}

/**
 * Check if two files are different by comparing their hashes
 */
async function areFilesDifferent(
  sourceFile: string,
  targetFile: string,
): Promise<boolean> {
  try {
    const [sourceHash, targetHash] = await Promise.all([
      getFileHash(sourceFile),
      getFileHash(targetFile),
    ]);
    return sourceHash !== targetHash || sourceHash === ""; // Different if hashes differ or source doesn't exist
  } catch (error) {
    // If we can't compare, assume they're different to be safe
    return true;
  }
}

/**
 * Recursively get all files in a directory
 */
async function getAllFiles(
  dir: string,
  baseDir: string = dir,
): Promise<string[]> {
  const files: string[] = [];

  try {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.relative(baseDir, fullPath);

      if (entry.isDirectory()) {
        const subFiles = await getAllFiles(fullPath, baseDir);
        files.push(...subFiles);
      } else if (entry.isFile()) {
        files.push(relativePath);
      }
    }
  } catch (error) {
    // Directory doesn't exist or can't be read
  }

  return files;
}
