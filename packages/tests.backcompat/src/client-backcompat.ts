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
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import semver from "semver";

const THIS_FILE_DIR = path.dirname(fileURLToPath(import.meta.url));
const pnpmLockFile = findUpSync("pnpm-lock.yaml");

if (!pnpmLockFile) {
  throw new Error("pnpm-lock.yaml not found. :(");
}

const rootPath = path.dirname(pnpmLockFile);

const monorepoTranspilePath = path.join(
  rootPath,
  "packages",
  "monorepo.tool.transpile",
  "bin",
  "transpile2.mjs",
);

const builtSdksPath = path.join(
  THIS_FILE_DIR,
  "codegen",
  "sdks",
);

async function codegenAtVersion(version: string, outPath: string) {
  consola.info(
    `Running codegen for version ${chalk.blue(version)}`,
  );
  const outSrcPath = path.join(outPath, "src");
  await fs.mkdir(outSrcPath, { recursive: true });
  const { failed } = await execa("pnpm", [
    "client.test.generate",
    "--o",
    outSrcPath,
    "--v",
    version,
  ]);

  const testOntologyPackagePath = path.join(
    rootPath,
    "packages",
    "client.test.ontology",
  );

  await fs.copyFile(
    path.join(testOntologyPackagePath, "package.json"),
    path.join(outPath, "package.json"),
  );
  await fs.copyFile(
    path.join(testOntologyPackagePath, "tsconfig.json"),
    path.join(outPath, "tsconfig.json"),
  );
  await fs.writeFile(
    path.join(outPath, "pnpm-workspace.yaml"),
    "",
  );

  await modifyPackageJsonToUseDirectPaths(path.join(outPath, "package.json"));

  const pkgPath = path.join(outPath, "package.json");
  const pkgData = JSON.parse(await fs.readFile(pkgPath, "utf8"));

  /**
   * Babel core is expecting these modules to be present in the workspace.
   */
  pkgData.dependencies = {
    ...pkgData.dependencies,
    "@babel/preset-typescript": "latest",
    "@babel/preset-react": "latest",
  };

  await fs.writeFile(pkgPath, JSON.stringify(pkgData, null, 2));

  await execa("pnpm", ["install"], { cwd: outPath });

  /**
   * monorepo.tool.transpile uses find-up on the pnpm-workspace.yaml file to find the root.
   * Failing to remove it will cause the transpile command to fail.
   */
  await fs.unlink(path.join(outPath, "pnpm-workspace.yaml"));

  await execa("pnpm", ["transpileEsm"], { cwd: outPath });

  await execa("pnpm", ["transpileTypes"], { cwd: outPath });
}

async function copyClientPackage() {
  const srcPath = path.join(rootPath, "packages", "client");
  const destPath = path.join(THIS_FILE_DIR, "clientCopy");

  consola.info(`Copying client into ${destPath} for testing`);

  await fs.mkdir(destPath, { recursive: true });
  await fs.cp(path.join(srcPath, "src"), path.join(destPath, "src"), {
    recursive: true,
  });
  await fs.copyFile(
    path.join(srcPath, "package.json"),
    path.join(destPath, "package.json"),
  );
  await fs.copyFile(
    path.join(srcPath, "tsconfig.json"),
    path.join(destPath, "tsconfig.json"),
  );
  await fs.writeFile(
    path.join(destPath, "pnpm-workspace.yaml"),
    "",
  );

  await modifyPackageJsonToUseDirectPaths(
    path.join(destPath, "package.json"),
  );

  return destPath;
}

async function modifyPackageJsonToDependOnGeneratedSdkVersion(
  packageJsonPath: string,
  generatorVersion: string,
) {
  const packageData = JSON.parse(await fs.readFile(packageJsonPath, "utf8"));
  packageData.devDependencies["@osdk/client.test.ontology"] = path.join(
    builtSdksPath,
    generatorVersion,
  );
  await fs.writeFile(packageJsonPath, JSON.stringify(packageData, null, 2));
}

export async function modifyPackageJsonToUseDirectPaths(
  packageJsonPath: string,
  overrides: Record<string, string> = {},
): Promise<void> {
  const packageData = JSON.parse(await fs.readFile(packageJsonPath, "utf8"));

  for (
    const depType of ["dependencies", "devDependencies", "peerDependencies"]
  ) {
    const deps = packageData[depType];
    if (!deps) continue;
    for (const dep in deps) {
      if (overrides[dep] != null && overrides[dep] !== "root") {
        deps[dep] = overrides[dep];
      } else if (
        overrides[dep] === "root"
        || (typeof deps[dep] === "string" && deps[dep].startsWith("workspace:"))
      ) {
        const depName = dep.replace("@osdk/", "");
        deps[dep] = path.join(rootPath, "packages", depName);
      }
    }
  }

  for (const script in packageData.scripts) {
    if (typeof packageData.scripts[script] === "string") {
      packageData.scripts[script] = packageData.scripts[script].replace(
        "monorepo.tool.transpile",
        monorepoTranspilePath,
      );
    }
  }

  await fs.writeFile(packageJsonPath, JSON.stringify(packageData, null, 2));
}

export async function fetchMatchingVersions(
  packageName: string,
): Promise<string[]> {
  const range = await getVersionFromPackageJson(
    packageName,
  );
  consola.info(`Fetching matching versions for range ${chalk.blue(range)}`);
  const { stdout } = await execa("npm", [
    "view",
    packageName,
    "versions",
    "--json",
  ]);
  const versions = JSON.parse(stdout);
  return versions.filter((version: string) => semver.satisfies(version, range));
}

async function getVersionFromPackageJson(
  packageName: string,
): Promise<string> {
  const packageJsonPath = path.join(
    rootPath,
    "packages",
    packageName.replace("@osdk/", ""),
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

export async function runClientBackcompatTests(): Promise<void> {
  const versions = await fetchMatchingVersions("@osdk/client");

  const clientCopyPath = await copyClientPackage();

  const FailedVersions: Array<{ version: string; error: string }> = [];

  for (const version of versions.reverse()) {
    consola.info(`Processing version ${chalk.blue(version)}`);

    const outPath = path.join(
      builtSdksPath,
      version,
    );

    try {
      await codegenAtVersion(version, outPath);
    } catch (e) {
      consola.warn(
        `Failed to codegen at version ${
          chalk.yellow(version)
        } due to likely incompatible generator features. Defaulting to standard tests.`,
      );
      FailedVersions.push({
        version,
        error: (e as Error).message,
      });
      continue;
    }

    await modifyPackageJsonToDependOnGeneratedSdkVersion(
      path.join(clientCopyPath, "package.json"),
      version,
    );

    consola.info(
      `Installing client dependencies for SDK generated with version ${
        chalk.blue(version)
      }`,
    );

    const installResult = await execa("pnpm", ["install"], {
      cwd: clientCopyPath,
    });

    if (installResult.failed) {
      throw new Error(
        `pnpm install on client package failed for version ${version}`,
      );
    }

    consola.info(
      `Typechecking client package for version ${chalk.blue(version)}`,
    );

    const transpileResult = await execa("pnpm", [
      "typecheck",
    ], {
      cwd: clientCopyPath,
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

  consola.success(
    "Successfully generated and tested all versions for backwards compatibility across minor version ",
  );

  if (FailedVersions.length > 0) {
    consola.info("The following versions encountered issues:");
    FailedVersions.forEach(({ version, error }) => {
      consola.warn(`Version ${chalk.yellow(version)}: ${error}`);
    });
  } else {
    consola.success("All versions passed without issues!");
  }
}
