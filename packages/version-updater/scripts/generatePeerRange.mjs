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
 * For prerelease peer versions, uses `>=major.minor.patch-beta.0` so that
 * npm accepts all betas on the same tuple (npm semver only matches
 * prereleases against ranges that include a prerelease on the same
 * major.minor.patch).
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
    return `>=${peerParsed.major}.${peerParsed.minor}.${peerParsed.patch}-beta.0`;
  }

  const minParsed = semver.parse(minVersion);
  if (minParsed) {
    return `^${minParsed.major}.${minParsed.minor}.${minParsed.patch}`;
  }

  return `^${minVersion}`;
}
