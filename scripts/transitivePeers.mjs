/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import semver from "semver";

function publishedRange(range, name, packages) {
  if (!range.startsWith("workspace:")) return range;
  const specifier = range.slice("workspace:".length);
  const version = packages.get(name)?.version;
  if (["*", "^", "~"].includes(specifier)) {
    if (!version) throw new Error(`Cannot resolve workspace peer ${name}`);
    return specifier === "*" ? version : `${specifier}${version}`;
  }
  return specifier;
}

export function findTransitivePeerConflicts(root, packages) {
  if (root.private) return [];
  const conflicts = [];
  for (const [peer, specifier] of Object.entries(root.peerDependencies ?? {})) {
    const advertised = publishedRange(specifier, peer, packages);
    if (!semver.validRange(advertised)) {
      throw new Error(
        `Unsupported peer range ${root.name}: ${peer}@${advertised}`,
      );
    }
    const visited = new Set([root.name]);
    const visit = (pkg, chain) => {
      for (
        const [name, range] of Object.entries({
          ...pkg.dependencies,
          ...pkg.optionalDependencies,
        })
      ) {
        // Registry versions may have different manifests from the current workspace.
        if (!range.startsWith("workspace:") || visited.has(name)) continue;
        const dependency = packages.get(name);
        if (!dependency) {
          throw new Error(`Cannot resolve workspace dependency ${name}`);
        }
        visited.add(name);
        const nextChain = [...chain, name];
        const required = dependency.peerDependencies?.[peer];
        if (required) {
          const published = publishedRange(required, peer, packages);
          if (!semver.validRange(published)) {
            throw new Error(
              `Unsupported peer range ${name}: ${peer}@${published}`,
            );
          }
          if (!semver.subset(advertised, published)) {
            conflicts.push(
              `${
                nextChain.join(
                  " -> ",
                )
              }: ${peer} advertises ${advertised}, but ${name} requires ${published}`,
            );
          }
        }
        visit(dependency, nextChain);
      }
    };
    visit(root, [root.name]);
  }
  return conflicts;
}
