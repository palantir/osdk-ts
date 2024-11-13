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

export async function getDependencyVersionFromFindUpPackageJson(
  name: string,
  opts?: { cwd: string },
): Promise<string> {
  const { findUp } = await import("find-up");
  const packageJsonPath = await findUp("package.json", opts);
  invariant(packageJsonPath !== undefined, "Could not find package.json");
  const packageJson = await readFile(packageJsonPath, {
    encoding: "utf-8",
  });
  if (!packageJson) {
    throw new Error(
      `Could not find package.json in current working directory: ${process.cwd()}`,
    );
  }
  const parsedPackageJson = JSON.parse(packageJson);
  const version = parsedPackageJson.dependencies?.[name]
    ?? parsedPackageJson.devDependencies?.[name]
    ?? parsedPackageJson.peerDependencies?.[name];

  invariant(
    version !== undefined,
    `Could not find a dependency for ${name} in ${packageJsonPath}`,
  );

  return version;
}
