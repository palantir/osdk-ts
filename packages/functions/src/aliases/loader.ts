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

import * as fs from "fs";
import * as path from "path";
import type { IAliasesFile } from "./types.js";

const DEFAULT_ALIASES_PATH = path.resolve("./var/data/aliases.json");

let cachedAliasesFile: IAliasesFile | undefined;

export function loadAliasesFile(): IAliasesFile {
  if (cachedAliasesFile != null) {
    return cachedAliasesFile;
  }
  if (!fs.existsSync(DEFAULT_ALIASES_PATH)) {
    throw new Error(`Aliases file not found at ${DEFAULT_ALIASES_PATH}`);
  }
  const data = fs.readFileSync(DEFAULT_ALIASES_PATH, "utf-8");
  cachedAliasesFile = JSON.parse(data) as IAliasesFile;
  return cachedAliasesFile;
}

export function resetAliasesCache(): void {
  cachedAliasesFile = undefined;
}
