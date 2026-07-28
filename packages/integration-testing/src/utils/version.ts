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

import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

export const getFoundryVersion = (): Promise<string | undefined> => {
  return execAsync("which foundry")
    .then(() => execAsync("foundry --version"))
    .then(({ stdout }) => stdout.trim().match(/cli (\d+\.\d+\.\d+)/u)?.[1])
    .catch(() => undefined);
};

export const MIN_FOUNDRY_CLI_VERSION = "0.200.0";

export const versionIsAtMinimum = (version: string, min: string): boolean => {
  const parsedVersion = version.split(".").map(Number);
  const parsedMinVersion = min.split(".").map(Number);
  if (parsedVersion.length !== parsedMinVersion.length) {
    return false;
  }
  for (let i = 0; i < parsedVersion.length; ++i) {
    const ver = parsedVersion[i];
    const minVer = parsedMinVersion[i];
    if (ver > minVer) return true;
    if (ver < minVer) return false;
  }
  return true;
};
