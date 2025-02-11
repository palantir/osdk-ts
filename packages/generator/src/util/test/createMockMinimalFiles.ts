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

import { vi } from "vitest";
import type { ReaddirFn, WriteFileFn } from "../../MinimalFs.js";

export function createMockMinimalFiles(): {
  minimalFiles: {
    writeFile: WriteFileFn;
    mkdir: () => Promise<void>;
    readdir: ReaddirFn;
  };
  getFiles: () => {
    [k: string]: string;
  };
  dumpFilesToConsole: () => void;
} {
  const writeFile = vi.fn<WriteFileFn>(
    () => Promise.resolve(),
  );
  const getFiles = () => Object.fromEntries(writeFile.mock.calls);

  const readdir = vi.fn<ReaddirFn>(
    () => Promise.resolve([]),
  );

  return {
    minimalFiles: {
      writeFile: writeFile as WriteFileFn,
      mkdir: () => Promise.resolve(),
      readdir: readdir as ReaddirFn,
    },
    getFiles,
    dumpFilesToConsole: () => {
      for (const [path, contents] of Object.entries(getFiles())) {
        console.group(path);
        console.log(contents);
        console.groupEnd();
      }
    },
  };
}
