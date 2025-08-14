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

import { readFile } from "fs/promises";
import path from "path";
import resolvePackagePath from "resolve-package-path";
import type { PackageJson } from "./PackageJson.js";

export async function visitNpmPackages(
  rootPackageJsonPath: string,
  onVisit: (packageJsonPath: string, packageJson: PackageJson) => void,
): Promise<void> {
  const visited = new Set<string>();

  const visitNpmPackagesInternal = async function(
    packageJsonPath: string,
  ): Promise<void> {
    if (visited.has(packageJsonPath)) {
      return;
    }

    const packageJson = await parsePackageJson(packageJsonPath);
    onVisit(
      packageJsonPath,
      packageJson,
    );
    visited.add(packageJsonPath);

    const context = path.dirname(packageJsonPath);
    const npmDependencies = Object.keys(packageJson.dependencies ?? {});
    for (const childName of npmDependencies) {
      const childPackageJsonPath = findPackageJsonPath(
        childName,
        context,
      );
      await visitNpmPackagesInternal(childPackageJsonPath);
    }
  };

  return visitNpmPackagesInternal(rootPackageJsonPath);
}

export function findPackageJsonPath(
  dependency: string,
  baseDir: string,
): string {
  const packagePath = resolvePackagePath(dependency, baseDir);
  if (packagePath == null) {
    throw new Error(`Could not resolve ${dependency} from ${baseDir}`);
  }
  return packagePath;
}

export async function parsePackageJson(
  packageJsonPath: string,
): Promise<PackageJson> {
  let packageJsonContent;
  try {
    packageJsonContent = await readFile(packageJsonPath, "utf-8");
  } catch (err) {
    throw new Error(
      `Failed to read file at path. Does it exist?: "${packageJsonPath}"`,
      { cause: err },
    );
  }
  try {
    return JSON.parse(packageJsonContent);
  } catch (err) {
    throw new Error(
      `Failed to parse package.json content from file "${packageJsonPath}"`,
      { cause: err },
    );
  }
}
