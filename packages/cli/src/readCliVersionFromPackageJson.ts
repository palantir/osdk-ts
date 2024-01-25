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

import * as fs from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export async function readCliVersionFromPackageJson() {
  const { findUp } = await import("find-up");
  // it is safe to use find-up for package.json because the entry point to the cli is osdk.mjs
  // so this file will be in build/esm and will not see the package.json in build/cjs/package.json
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const result = await findUp("package.json", { cwd: __dirname });
  if (!result) {
    return "(unknown version. No package.json found)";
  }

  const packageJson = JSON.parse(await fs.promises.readFile(result, "utf-8"));
  if (packageJson.version) {
    return `v${packageJson.version}`;
  } else {
    return "(unknown version. No version in package.json found)";
  }
}
