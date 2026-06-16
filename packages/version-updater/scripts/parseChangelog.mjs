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

/**
 * @typedef {Object} VersionMapping
 * @property {string} packageVersion
 * @property {Record<string, string>} peerVersions
 */

/**
 * Parses a CHANGELOG.md file to extract version mappings between a package
 * and its peer dependencies.
 *
 * @param {string} content - The raw CHANGELOG.md content
 * @param {string[]} peerPackageNames - Package names to extract versions for (e.g. ["@osdk/client", "@osdk/api"])
 * @returns {VersionMapping[]} Array of version mappings
 */
export function parseChangelog(content, peerPackageNames) {
  const versionBlocks = content.split(/^## /m).slice(1);

  return versionBlocks
    .map((block) => {
      const versionMatch = block.match(/^(\d+\.\d+\.\d+(-[a-zA-Z0-9.]+)?)/);
      if (!versionMatch) {
        return undefined;
      }

      /** @type {Record<string, string>} */
      const peerVersions = {};
      for (const peerName of peerPackageNames) {
        const escaped = peerName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const match = block.match(
          new RegExp(`${escaped}@(\\d+\\.\\d+\\.\\d+(-[a-zA-Z0-9.]+)?)`),
        );
        if (match) {
          peerVersions[peerName] = match[1];
        }
      }

      if (Object.keys(peerVersions).length === 0) {
        return undefined;
      }

      return {
        packageVersion: versionMatch[1],
        peerVersions,
      };
    })
    .filter(
      /** @returns {m is VersionMapping} */
      (m) => m != null,
    );
}
