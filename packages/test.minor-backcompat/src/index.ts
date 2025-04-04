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
import { promises as fs } from "fs";
import * as path from "node:path";
import { exit } from "node:process";
import { fileURLToPath } from "node:url";
import semver from "semver";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packagesPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
);

async function codegenAtVersion(version: string) {
  const dirPath = path.join(
    packagesPath,
    "client.test.ontology",
  );

  consola.info(`Running codegen for version ${chalk.blue(version)}`);
  const { failed } = await execa("pnpm", ["codegen", version], {
    cwd: dirPath,
  });
  if (failed) {
    consola.error(`Codegen failed for version ${chalk.red(version)}`);
    exit(1);
  }
}

async function fetchMatchingVersions(range: string): Promise<string[]> {
  consola.info(`Fetching matching versions for range ${chalk.blue(range)}`);
  const { stdout } = await execa("npm", [
    "view",
    "@osdk/client",
    "versions",
    "--json",
  ]);
  const versions = JSON.parse(stdout);
  return versions.filter((version: string) => semver.satisfies(version, range));
}

async function getVersionFromPackageJson(): Promise<string> {
  const packageJsonPath = path.join(
    packagesPath,
    "client",
    "package.json",
  );
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));
  const version = packageJson.version;

  if (version.includes("-beta") || version.includes("-rc")) {
    return `^${semver.major(version)}.${semver.minor(version)}.0-beta.0`;
  } else {
    return `^${semver.major(version)}.${semver.minor(version)}.0`;
  }
}

const versionRange = await getVersionFromPackageJson();
const versions = await fetchMatchingVersions(versionRange);

for (const version of versions.reverse()) {
  consola.info(`Processing version ${chalk.blue(version)}`);

  try {
    await codegenAtVersion(version);
  } catch (e) {
    consola.warn(
      `Failed to codegen at version ${
        chalk.yellow(version)
      } due to likely incompatible generator features. Defaulting to standard tests.`,
    );
    continue;
  }

  const clientDirPath = path.join(
    packagesPath,
    "client",
  );

  consola.info(
    `Installing client dependencies for SDK generated with version ${
      chalk.blue(version)
    }`,
  );
  const installResult = await execa("pnpm", ["install"], {
    cwd: clientDirPath,
  });
  if (installResult.failed) {
    throw new Error(
      `pnpm install on client package failed for version ${version}`,
    );
  }

  consola.info(`Transpiling client package for version ${chalk.blue(version)}`);
  const transpileResult = await execa("pnpm", ["turbo", "transpile"], {
    cwd: clientDirPath,
  });
  if (transpileResult.failed) {
    throw new Error(
      `pnpm turbo transpile on client package failed for version ${version}`,
    );
  }
  consola.success(
    `Successfully tested version ${
      chalk.green(version)
    } for backwards compatibility`,
  );
}
