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
import { determineMinVersion } from "./determineMinVersion.mjs";
import { generatePeerRange } from "./generatePeerRange.mjs";
import { parseChangelog } from "./parseChangelog.mjs";

const PEER_DEP_PACKAGES = [
  {
    dir: "react",
    peers: {
      "@osdk/client": { strategy: "changelog" },
      "@osdk/api": { strategy: "changelog" },
    },
  },
  {
    dir: "widget.client-react",
    peers: {
      "@osdk/client": { strategy: "changelog" },
    },
  },
  {
    dir: "react-components",
    peers: {
      "@osdk/client": { strategy: "changelog" },
      "@osdk/api": { strategy: "changelog" },
    },
  },
  {
    dir: "functions",
    peers: {
      "@osdk/client": { strategy: "changelog" },
    },
  },
];

const workspaceDirPath = getWorkspaceDirPath();
const clientPackageVersion = getClientPackageVersion();

updateConstVariable(
  path.join(
    workspaceDirPath,
    "packages",
    "client",
    "src",
    "Client.ts",
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

for (const pkg of PEER_DEP_PACKAGES) {
  updatePeerDependencies(pkg.dir, pkg.peers);
}

/**
 * @param {string} packageDir
 * @param {string} peerName
 * @param {string} range
 */
function applyLoosePeerDep(packageDir, peerName, range) {
  const packageJsonPath = path.join(
    workspaceDirPath,
    "packages",
    packageDir,
    "package.json",
  );

  if (!fs.existsSync(packageJsonPath)) {
    consola.warn(
      `packages/${packageDir}/package.json not found, skipping loose peer dep`,
    );
    return;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  if (!packageJson.peerDependencies) {
    packageJson.peerDependencies = {};
  }

  if (packageJson.peerDependencies[peerName] === range) {
    consola.info(
      `No changes needed for ${packageDir} ${peerName} peer dep (already ${range})`,
    );
    return;
  }

  packageJson.peerDependencies[peerName] = range;
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + "\n",
  );
  consola.info(
    `Updated ${packageDir} ${peerName} peer dep to "${range}" (loose)`,
  );
}

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
    `const ${variableName} = "${value}";`,
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
      } to ${value}`,
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

/**
 * @param {string} packageName - Scoped package name (e.g. "@osdk/client")
 * @returns {string | undefined}
 */
function getPeerPackageVersion(packageName) {
  const dirName = packageName.replace("@osdk/", "");
  const pkgJsonPath = path.join(
    workspaceDirPath,
    "packages",
    dirName,
    "package.json",
  );
  if (!fs.existsSync(pkgJsonPath)) {
    return undefined;
  }
  return JSON.parse(fs.readFileSync(pkgJsonPath, "utf8")).version;
}

/**
 * @param {string} packageDir - Directory name under packages/ (e.g. "react", "widget.client-react")
 * @param {Record<string, { strategy: string, range?: string }>} peersConfig - Per-peer strategy config
 */
function updatePeerDependencies(packageDir, peersConfig) {
  const loosePeers = Object.entries(peersConfig)
    .filter(([, cfg]) => cfg.strategy === "loose");
  const changelogPeers = Object.entries(peersConfig)
    .filter(([, cfg]) => cfg.strategy === "changelog")
    .map(([name]) => name);

  // loose peers must be applied before changelog peers because
  // applyLoosePeerDep writes package.json independently, while the
  // changelog path reads it fresh and writes once at the end
  for (const [peerName, cfg] of loosePeers) {
    applyLoosePeerDep(packageDir, peerName, cfg.range ?? "*");
  }

  if (changelogPeers.length === 0) {
    return;
  }

  const packageJsonPath = path.join(
    workspaceDirPath,
    "packages",
    packageDir,
    "package.json",
  );
  const changelogPath = path.join(
    workspaceDirPath,
    "packages",
    packageDir,
    "CHANGELOG.md",
  );

  if (!fs.existsSync(packageJsonPath)) {
    consola.warn(
      `packages/${packageDir}/package.json not found, skipping peer dependency update`,
    );
    return;
  }

  if (!fs.existsSync(changelogPath)) {
    consola.warn(
      `packages/${packageDir}/CHANGELOG.md not found, skipping peer dependency update`,
    );
    return;
  }

  const changelog = fs.readFileSync(changelogPath, "utf8");
  const versionMappings = parseChangelog(changelog, changelogPeers);

  if (versionMappings.length === 0) {
    consola.warn(
      `No version mappings found in packages/${packageDir}/CHANGELOG.md`,
    );
    return;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  const currentPackageVersion = packageJson.version;

  if (!packageJson.peerDependencies) {
    packageJson.peerDependencies = {};
  }

  let changed = false;
  for (const peerName of changelogPeers) {
    const minVersion = determineMinVersion(
      versionMappings,
      currentPackageVersion,
      peerName,
    );

    if (!minVersion) {
      consola.warn(
        `Could not determine minimum ${peerName} version for ${packageDir}@${currentPackageVersion}`,
      );
      continue;
    }

    const currentPeerVersion = getPeerPackageVersion(peerName);
    if (!currentPeerVersion) {
      consola.warn(
        `Could not read version for ${peerName}, skipping`,
      );
      continue;
    }

    const peerRange = generatePeerRange(minVersion, currentPeerVersion);
    const currentPeerDep = packageJson.peerDependencies?.[peerName];

    if (currentPeerDep === peerRange) {
      consola.info(
        `No changes needed for ${packageDir} ${peerName} peer dep (already ${peerRange})`,
      );
    } else {
      packageJson.peerDependencies[peerName] = peerRange;
      changed = true;
      consola.info(
        `Updated ${packageDir} ${peerName} peer dep to "${peerRange}" (min: ${minVersion})`,
      );
    }
  }

  if (changed) {
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + "\n",
    );
  }
}
