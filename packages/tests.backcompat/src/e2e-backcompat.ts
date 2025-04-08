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
import { modifyPackageJsonToUseDirectPaths } from "./client-backcompat.js";

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

export async function runE2eBackcompatTests(): Promise<void> {
  const version = "latest";
  const installPath = await installPackagesAtVersion(version);

  const testDirPath = path.join(installPath, "e2e.sandbox.catchall");

  await modifyPackageJsonToUseDirectPaths(
    path.join(
      testDirPath,
      "package.json",
    ),
    {
      "@osdk/e2e.generated.catchall": path.join(
        installPath,
        "e2e.generated.catchall",
      ),
      "@osdk/client": "root",
      "@osdk/api": "root",
      "@osdk/cli": "root",
      "@osdk/monorepo.api-extractor": "root",
      "@osdk/monorepo.tsconfig": "root",
    },
  );

  await fs.writeFile(
    path.join(testDirPath, "pnpm-workspace.yaml"),
    "",
  );

  consola.info(
    `Installing client dependencies for SDK generated with version ${
      chalk.blue(testDirPath)
    }`,
  );

  const installResult = await execa("pnpm", ["install"], {
    cwd: testDirPath,
  });

  if (installResult.failed) {
    throw new Error(
      `pnpm install on client package failed for version ${version}`,
    );
  }

  consola.info(
    `Typechecking client package for version ${chalk.blue(version)}`,
  );

  await execa("pnpm", [
    "typecheck",
  ], {
    cwd: testDirPath,
  });
}
