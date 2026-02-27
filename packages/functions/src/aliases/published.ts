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
import { getAliasesFilePath } from "./environment.js";
import type { AliasesFile } from "./types.js";

// Aliases file will remain unchanged for a given function and version
let cachedAliasesFile: AliasesFile | undefined;

export function loadAliasesFilePublished(): AliasesFile {
  if (cachedAliasesFile != null) {
    return cachedAliasesFile;
  }
  const aliasesPath = getAliasesFilePath();
  if (!fs.existsSync(aliasesPath)) {
    throw new Error(`Aliases file not found at ${aliasesPath}`);
  }

  const data = fs.readFileSync(aliasesPath, "utf-8");
  cachedAliasesFile = JSON.parse(data) as AliasesFile;
  return cachedAliasesFile;
}

export function getCustomPublished(alias: string): string {
  const aliasesFile = loadAliasesFilePublished();

  if (!(alias in aliasesFile.defaults.custom)) {
    const available = Object.keys(aliasesFile.defaults.custom);
    throw new Error(
      `Custom alias '${alias}' not found. Available aliases: [${
        available.join(", ")
      }]`,
    );
  }

  return aliasesFile.defaults.custom[alias];
}

export function getModelRidPublished(alias: string): string {
  const aliasesFile = loadAliasesFilePublished();

  if (!(alias in aliasesFile.defaults.models)) {
    const available = Object.keys(aliasesFile.defaults.models);
    throw new Error(
      `Model alias '${alias}' not found. Available aliases: [${
        available.join(", ")
      }]`,
    );
  }

  return aliasesFile.defaults.models[alias].id.rid;
}

// Used for testing purposes
export function resetPublishedCache(): void {
  cachedAliasesFile = undefined;
}
