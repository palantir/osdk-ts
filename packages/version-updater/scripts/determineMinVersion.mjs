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

import * as semver from "semver";

/**
 * @typedef {import('./parseChangelog.mjs').VersionMapping} VersionMapping
 */

/**
 * Determines the minimum compatible version of a peer dependency for a given
 * package version by analyzing the version history.
 *
 * The algorithm finds the oldest peer dep version that was paired with
 * any package version in the same version series. For 0.x versions,
 * the minor version is treated as the series boundary. For >=1.x,
 * the major version is the series boundary.
 *
 * @param {VersionMapping[]} mappings - Version mappings from CHANGELOG
 * @param {string} currentPackageVersion - Current version of the package
 * @param {string} peerPackageName - Name of the peer dependency to find min for
 * @returns {string | undefined} Minimum compatible peer dep version
 */
export function determineMinVersion(
  mappings,
  currentPackageVersion,
  peerPackageName,
) {
  const currentParsed = semver.parse(currentPackageVersion);
  if (!currentParsed) {
    return undefined;
  }

  const currentMajor = currentParsed.major;
  const currentMinor = currentParsed.minor;

  const sameSeriesMappings = mappings.filter((m) => {
    const parsed = semver.parse(m.packageVersion);
    if (!parsed) {
      return false;
    }

    if (currentMajor === 0) {
      return parsed.major === 0 && parsed.minor === currentMinor;
    }
    return parsed.major === currentMajor;
  });

  const peerVersions = sameSeriesMappings
    .map((m) => m.peerVersions[peerPackageName])
    .filter((v) => v != null);

  if (peerVersions.length === 0) {
    return undefined;
  }

  return peerVersions.sort(semver.compare)[0];
}
