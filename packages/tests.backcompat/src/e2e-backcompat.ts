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

import chalk from "chalk";
import consola from "consola";
import { execa } from "execa";
import { findUpSync } from "find-up";
import { promises as fs } from "fs";
import path, { join } from "path";
import { fileURLToPath } from "url";
import {
  fetchMatchingVersions,
  modifyPackageJsonToUseDirectPaths,
} from "./client-backcompat.js";

const THIS_FILE_DIR = path.dirname(fileURLToPath(import.meta.url));

const pnpmLockFile = findUpSync("pnpm-lock.yaml");

if (!pnpmLockFile) {
  throw new Error("pnpm-lock.yaml not found. :(");
}

const rootPath = path.dirname(pnpmLockFile);

const e2eTestingDir = path.join(
  THIS_FILE_DIR,
  "..",
  "e2eTesting",
);

async function installPackagesAtVersion(version: string) {
  const versionedDir = join(e2eTestingDir, version);

  await fs.mkdir(versionedDir, { recursive: true });

  await execa("pnpm", [
    "install",
    `@osdk/e2e.generated.catchall@${version}`,
    `--prefix=${versionedDir}`,
    "--lockfile=false",
  ], {
    cwd: rootPath,
  });

  await execa("pnpm", [
    "install",
    `@osdk/e2e.sandbox.catchall@${version}`,
    `--prefix=${versionedDir}`,
    "--lockfile=false",
  ], {
    cwd: rootPath,
  });

  return path.join(versionedDir, "node_modules", "@osdk");
}

async function installPackageDependenciesWithOverrides(
  packagePath: string,
  dependencyOverrides: Record<string, string>,
) {
  await modifyPackageJsonToUseDirectPaths(
    path.join(
      packagePath,
      "package.json",
    ),
    dependencyOverrides,
  );

  await fs.writeFile(
    path.join(packagePath, "pnpm-workspace.yaml"),
    "",
  );

  consola.info(
    `Installing dependencies at ${chalk.blue(packagePath)}`,
  );

  await execa("pnpm", ["install"], {
    cwd: packagePath,
  });
}

export async function runE2eBackcompatTests(): Promise<void> {
  const versions = await fetchMatchingVersions("@osdk/e2e.generated.catchall");
  if (versions.length === 0) {
    consola.warn("No versions found for @osdk/e2e.generated.catchall");
    throw new Error(
      "No versions found for @osdk/e2e.generated.catchall",
    );
  }

  consola.info(
    `Found ${
      chalk.blue(versions.length)
    } versions of @osdk/e2e.generated.catchall`,
  );
  for (const version of versions) {
    consola.info(
      `Running E2E test package at version ${chalk.blue(version)}`,
    );
    const installPath = await installPackagesAtVersion(version);

    const generatedSDKPath = path.join(installPath, "e2e.generated.catchall");
    const sandboxPath = path.join(installPath, "e2e.sandbox.catchall");

    const dependencyOverrides = {
      "@osdk/e2e.generated.catchall": generatedSDKPath,
      "@osdk/client": "root",
      "@osdk/api": "root",
      "@osdk/cli": "root",
      "@osdk/cli.cmd.typescript": "root",
      "@osdk/monorepo.api-extractor": "root",
      "@osdk/monorepo.tsconfig": "root",
    };

    await installPackageDependenciesWithOverrides(
      generatedSDKPath,
      dependencyOverrides,
    );
    await installPackageDependenciesWithOverrides(
      sandboxPath,
      dependencyOverrides,
    );

    consola.info(
      `Typechecking E2E test package at version ${chalk.blue(version)}`,
    );

    try {
      await execa("pnpm", [
        "typecheck",
      ], {
        cwd: sandboxPath,
      });
    } catch (e) {
      consola.error(
        `E2E test package at version ${chalk.blue(version)} failed typecheck`,
      );
      consola.error((e as Error).message);
      continue;
    }

    consola.success(
      `E2E test package at version ${chalk.blue(version)} passed typecheck`,
    );
  }
  consola.info("All E2E test packages passed typecheck");
}
