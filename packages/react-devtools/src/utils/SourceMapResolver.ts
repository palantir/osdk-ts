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

import { SourceMapConsumer } from "@jridgewell/source-map";

export interface OriginalLocation {
  filePath: string;
  line: number;
  column: number;
}

export class SourceMapResolver {
  private sourceMapCache = new Map<string, SourceMapConsumer | null>();
  private loadingPromises = new Map<
    string,
    Promise<SourceMapConsumer | null>
  >();

  async resolveOriginalLocation(
    compiledFilePath: string,
    line: number,
    column: number = 0,
  ): Promise<OriginalLocation> {
    try {
      const map = await this.getSourceMap(compiledFilePath);

      if (!map) {
        return { filePath: compiledFilePath, line, column };
      }

      const originalPosition = map.originalPositionFor({
        line,
        column,
      });

      if (
        originalPosition.source
        && originalPosition.line != null
        && originalPosition.column != null
      ) {
        const resolvedPath = this.resolveSourcePath(
          compiledFilePath,
          originalPosition.source,
        );

        return {
          filePath: resolvedPath,
          line: originalPosition.line,
          column: originalPosition.column,
        };
      }

      return { filePath: compiledFilePath, line, column };
    } catch (_error) {
      return { filePath: compiledFilePath, line, column };
    }
  }

  private async getSourceMap(
    compiledFilePath: string,
  ): Promise<SourceMapConsumer | null> {
    if (this.sourceMapCache.has(compiledFilePath)) {
      return this.sourceMapCache.get(compiledFilePath)!;
    }

    if (this.loadingPromises.has(compiledFilePath)) {
      return this.loadingPromises.get(compiledFilePath)!;
    }

    const loadingPromise = this.loadSourceMap(compiledFilePath);
    this.loadingPromises.set(compiledFilePath, loadingPromise);

    try {
      const map = await loadingPromise;
      this.sourceMapCache.set(compiledFilePath, map);
      this.loadingPromises.delete(compiledFilePath);
      return map;
    } catch (error) {
      this.loadingPromises.delete(compiledFilePath);
      this.sourceMapCache.set(compiledFilePath, null);
      throw error;
    }
  }

  private async loadSourceMap(
    compiledFilePath: string,
  ): Promise<SourceMapConsumer | null> {
    try {
      // Handle absolute file system paths - these are not fetchable
      // Vite serves these via @fs/ prefix in dev mode
      if (
        compiledFilePath.startsWith("/") && (
          compiledFilePath.includes("/Users/")
          || compiledFilePath.includes("/home/")
          || compiledFilePath.includes("/C:/")
          || compiledFilePath.match(/^\/[a-zA-Z]:\//)
        )
      ) {
        // Vite serves file system paths under /@fs/ prefix
        const sourceMapUrl =
          `${window.location.origin}/@fs${compiledFilePath}.map`;

        const response = await fetch(sourceMapUrl);
        if (!response.ok) {
          return null;
        }

        const sourceMapData: ConstructorParameters<
          typeof SourceMapConsumer
        >[0] = await response.json();
        return new SourceMapConsumer(sourceMapData);
      }

      // Convert relative/absolute URL paths to absolute URLs for fetching
      let sourceMapUrl: string;
      if (
        compiledFilePath.startsWith("http://")
        || compiledFilePath.startsWith("https://")
      ) {
        sourceMapUrl = `${compiledFilePath}.map`;
      } else if (compiledFilePath.startsWith("/")) {
        sourceMapUrl = `${window.location.origin}${compiledFilePath}.map`;
      } else {
        sourceMapUrl = `${window.location.origin}/${compiledFilePath}.map`;
      }

      const response = await fetch(sourceMapUrl);
      if (!response.ok) {
        return null;
      }

      const sourceMapData: ConstructorParameters<typeof SourceMapConsumer>[0] =
        await response.json();
      return new SourceMapConsumer(sourceMapData);
    } catch (_error) {
      return null;
    }
  }

  private resolveSourcePath(
    compiledFilePath: string,
    sourcePath: string,
  ): string {
    if (sourcePath.startsWith("/")) {
      return sourcePath;
    }

    if (sourcePath.startsWith("http://") || sourcePath.startsWith("https://")) {
      return sourcePath;
    }

    const compiledDir = compiledFilePath.substring(
      0,
      compiledFilePath.lastIndexOf("/"),
    );

    const parts = compiledDir.split("/");
    const sourceParts = sourcePath.split("/");

    for (const part of sourceParts) {
      if (part === "..") {
        parts.pop();
      } else if (part !== ".") {
        parts.push(part);
      }
    }

    return parts.join("/");
  }

  clearCache(): void {
    this.sourceMapCache.clear();
    this.loadingPromises.clear();
  }
}

export const sourceMapResolver: SourceMapResolver = new SourceMapResolver();
