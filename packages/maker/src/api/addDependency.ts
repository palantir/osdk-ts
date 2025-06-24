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
import { dependencies } from "./defineOntology.js";

const MAX_SEARCH_DEPTH = 5;

export function addDependency(namespace: string, fileInPackage: string): void {
  let dir = path.dirname(fileInPackage);
  let packageJsonPath = null;

  for (let i = 0; i < MAX_SEARCH_DEPTH; i++) {
    const candidate = path.join(dir, "package.json");
    if (fs.existsSync(candidate)) {
      packageJsonPath = candidate;
      break;
    }
    const parentDir = path.dirname(dir);
    if (parentDir === dir) break;
    dir = parentDir;
  }

  if (!packageJsonPath) {
    throw new Error(
      `Could not find a package.json within ${MAX_SEARCH_DEPTH} parent directories of ${fileInPackage}`,
    );
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  dependencies[namespace] = packageJson.version ?? "";
}
