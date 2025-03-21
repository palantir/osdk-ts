/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { readFile } from "fs/promises";
import invariant from "tiny-invariant";
export async function getDependencyVersionFromFindUpPackageJson(name, opts) {
  const {
    findUp
  } = await import("find-up");
  const packageJsonPath = await findUp("package.json", opts);
  !(packageJsonPath !== undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not find package.json") : invariant(false) : void 0;
  const packageJson = await readFile(packageJsonPath, {
    encoding: "utf-8"
  });
  if (!packageJson) {
    throw new Error(`Could not find package.json in current working directory: ${process.cwd()}`);
  }
  const parsedPackageJson = JSON.parse(packageJson);
  const version = parsedPackageJson.dependencies?.[name] ?? parsedPackageJson.devDependencies?.[name] ?? parsedPackageJson.peerDependencies?.[name];
  !(version !== undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, `Could not find a dependency for ${name} in ${packageJsonPath}`) : invariant(false) : void 0;
  return version;
}
//# sourceMappingURL=getDependencyVersionFromFindUpPackageJson.js.map