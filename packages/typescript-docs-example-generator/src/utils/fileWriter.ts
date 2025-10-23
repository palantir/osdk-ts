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

import fs from "fs/promises";
import path from "path";

export interface FileContent {
  path: string;
  content: string;
}

export interface FileWriterOptions {
  outputDir: string;
  dryRun?: boolean;
  onProgress?: (current: number, total: number) => void;
}

/**
 * Centralized file writer utility that batches file operations
 * and provides error handling, rollback, and progress tracking
 */
export class FileWriter {
  private files: Map<string, string> = new Map();
  private writtenFiles: string[] = [];

  constructor(private options: FileWriterOptions) {}

  /**
   * Add a file to the batch write queue
   * @param filePath Relative path from output directory
   * @param content File content
   */
  addFile(filePath: string, content: string): void {
    const fullPath = path.join(this.options.outputDir, filePath);
    this.files.set(fullPath, content);
  }

  /**
   * Add multiple files to the batch write queue
   * @param files Array of file content objects
   */
  addFiles(files: FileContent[]): void {
    for (const file of files) {
      this.addFile(file.path, file.content);
    }
  }

  /**
   * Write all queued files to disk
   * Creates directories as needed and tracks written files for rollback
   */
  async writeAll(): Promise<void> {
    const files = Array.from(this.files.entries());
    let written = 0;

    try {
      for (const [fullPath, content] of files) {
        if (this.options.dryRun) {
          // eslint-disable-next-line no-console
          console.log(`[DRY RUN] Would write: ${fullPath}`);
        } else {
          // Ensure directory exists
          const dir = path.dirname(fullPath);
          await fs.mkdir(dir, { recursive: true });

          // Write file
          await fs.writeFile(fullPath, content, "utf8");
          this.writtenFiles.push(fullPath);
        }

        written++;
        this.options.onProgress?.(written, files.length);
      }

      // eslint-disable-next-line no-console
      console.log(`✓ Successfully wrote ${files.length} files`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error writing files: ${error}`);

      // Attempt rollback if any files were written
      if (this.writtenFiles.length > 0) {
        await this.rollback();
      }

      throw error;
    }
  }

  /**
   * Remove all files that were written in the last writeAll operation
   * Used for error recovery
   */
  async rollback(): Promise<void> {
    // eslint-disable-next-line no-console
    console.log(`Rolling back ${this.writtenFiles.length} files...`);

    for (const filePath of this.writtenFiles) {
      try {
        await fs.unlink(filePath);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(
          `Failed to remove file during rollback: ${filePath}`,
          error,
        );
      }
    }

    this.writtenFiles = [];
    // eslint-disable-next-line no-console
    console.log("✓ Rollback completed");
  }

  /**
   * Clear the write queue without writing files
   */
  clear(): void {
    this.files.clear();
  }

  /**
   * Get the number of files queued for writing
   */
  getQueueSize(): number {
    return this.files.size;
  }

  /**
   * Get all queued file paths (relative to output directory)
   */
  getQueuedPaths(): string[] {
    return Array.from(this.files.keys()).map(fullPath =>
      path.relative(this.options.outputDir, fullPath)
    );
  }
}
