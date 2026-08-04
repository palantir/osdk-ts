/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { MinimalFs } from "@osdk/generator";
import { mkdir, readdir, writeFile } from "fs/promises";
import { dirname } from "path";
import { customNormalize } from "./customNormalize.js";

/**
 * The filesystem handed to the generator for in-memory compilation
 */
export function createHostFs(
  inMemoryFileSystem: { [fileName: string]: string },
): MinimalFs {
  return {
    writeFile: (path, contents) => {
      inMemoryFileSystem[customNormalize(path)] = contents;
      return Promise.resolve();
    },
    writeAsset: async (path, contents) => {
      const normalized = customNormalize(path);
      await mkdir(dirname(normalized), { recursive: true });
      await writeFile(normalized, contents, { flag: "w" });
    },
    mkdir: async (path, _options?: { recursive: boolean }) => {
      await mkdir(customNormalize(path), { recursive: true });
    },
    readdir: path => readdir(path),
  };
}
