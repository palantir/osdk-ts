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
 * Generates an appropriate semver peer dependency range.
 *
 * For prerelease peer versions where the min is on the same
 * major.minor.patch tuple, uses `>=major.minor.patch-beta.0`.
 *
 * For prerelease peer versions where the min is on a different tuple,
 * produces `^minClean || >=major.minor.patch-beta.0` so that both
 * stable releases from the min series AND betas on the current tuple
 * are accepted. This is necessary because npm semver does not match
 * prereleases against ranges without a prerelease on the same
 * major.minor.patch.
 *
 * For stable peer versions, uses `^minVersion` (with any prerelease tag
 * stripped from the min so the range is clean).
 *
 * @param {string} minVersion - Minimum compatible version from changelog analysis
 * @param {string} currentPeerVersion - Current version of the peer dependency package
 * @returns {string} Semver range string for peer dependency
 */
export function generatePeerRange(minVersion, currentPeerVersion) {
  const peerParsed = semver.parse(currentPeerVersion);

  if (!peerParsed) {
    throw new Error(`Invalid currentPeerVersion: ${currentPeerVersion}`);
  }

  if (peerParsed.prerelease && peerParsed.prerelease.length > 0) {
    const betaRange =
      `>=${peerParsed.major}.${peerParsed.minor}.${peerParsed.patch}-beta.0`;
    const minParsed = semver.parse(minVersion);
    if (!minParsed) {
      throw new Error(`Invalid minVersion: ${minVersion}`);
    }
    const minClean = `${minParsed.major}.${minParsed.minor}.${minParsed.patch}`;
    const peerClean =
      `${peerParsed.major}.${peerParsed.minor}.${peerParsed.patch}`;

    if (minClean === peerClean) {
      return betaRange;
    }
    return `^${minClean} || ${betaRange}`;
  }

  const minParsed = semver.parse(minVersion);
  if (minParsed) {
    return `^${minParsed.major}.${minParsed.minor}.${minParsed.patch}`;
  }

  return `^${minVersion}`;
}
