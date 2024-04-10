#!/usr/bin/env node
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

// @ts-check

import { consola } from "consola";
import { findUpSync } from "find-up";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import * as semver from "semver";

const workspaceDirPath = getWorkspaceDirPath();
const clientPackageVersion = getClientPackageVersion();

updateConstVariable(
  path.join(
    workspaceDirPath,
    "packages",
    "client",
    "src",
    "createClient.ts",
  ),
  "MaxOsdkVersion",
  clientPackageVersion,
);

updateConstVariable(
  path.join(
    workspaceDirPath,
    "packages",
    "generator",
    "src",
    "v2.0",
    "generateMetadata.ts",
  ),
  "ExpectedOsdkVersion",
  clientPackageVersion,
);

/**
 * @param {string} filePath
 * @param {string} variableName
 * @param {string} value
 */
function updateConstVariable(filePath, variableName, value) {
  const fileContents = fs.readFileSync(filePath, "utf8");

  const regexp = new RegExp(`const ${variableName} = ".*?";`);
  if (!regexp.test(fileContents)) {
    consola.error(
      `Variable ${variableName} not found in ${
        path.relative(
          workspaceDirPath,
          filePath,
        )
      }`,
    );
    process.exit(30);
  }

  const newContents = fileContents.replace(
    regexp,
    `const ${variableName} = "${clientPackageVersion}";`,
  );
  if (newContents === fileContents) {
    consola.info(
      `No changes needed in ${path.relative(workspaceDirPath, filePath)}`,
    );
  } else {
    fs.writeFileSync(filePath, newContents);
    consola.info(
      `Updated ${variableName} in ${
        path.relative(workspaceDirPath, filePath)
      } to ${clientPackageVersion}`,
    );
  }
}

function getWorkspaceDirPath() {
  const pnpmWorkspaceYamlPath = findUpSync("pnpm-workspace.yaml", {
    cwd: path.dirname(fileURLToPath(import.meta.url)),
  });
  if (!pnpmWorkspaceYamlPath) {
    consola.error("pnpm-workspace.yaml not found");
    process.exit(10);
  }
  return path.dirname(pnpmWorkspaceYamlPath);
}

function getClientPackageVersion() {
  const clientPackageJsonPath = path.join(
    workspaceDirPath,
    "packages",
    "client",
    "package.json",
  );

  const packageJsonContents = JSON.parse(
    fs.readFileSync(clientPackageJsonPath, "utf8"),
  );

  const currentVersion = packageJsonContents.version;
  const currentSemver = semver.parse(currentVersion);
  if (!currentSemver) {
    consola.error(
      `Invalid version ${currentVersion} in ${
        path.relative(workspaceDirPath, clientPackageJsonPath)
      } )}`,
    );
    process.exit(20);
  }

  const { major, minor, patch } = currentSemver;
  if (major == null || minor == null || patch == null) {
    consola.error(
      `Invalid version ${currentVersion} in ${
        path.relative(workspaceDirPath, clientPackageJsonPath)
      } )}`,
    );
    process.exit(21);
  }

  return `${major}.${minor}.${patch}`;
}
