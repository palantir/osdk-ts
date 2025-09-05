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

import fs from "node:fs";
import path from "node:path";
import * as semver from "semver";

export function simulateMinorBump(): void {
  const cwd = process.cwd();

  const packagesDir = path.join(cwd, "./packages");
  const changesetsDir = path.join(cwd, "./.changeset");
  const preJsonPath = path.join(changesetsDir, "pre.json");

  const preJson = JSON.parse(fs.readFileSync(preJsonPath, "utf-8"));
  const changeSetFilesToKeep = ["README.md", "config.json", "pre.json"];
  fs.readdirSync(changesetsDir).forEach((changesetFile) => {
    if (!changeSetFilesToKeep.includes(changesetFile)) {
      fs.rmSync(path.join(changesetsDir, changesetFile));
    }
  });

  // Remove all old changesets that would have been deleted after minor release was cut
  preJson.changesets = [];

  fs.readdirSync(packagesDir).forEach(folder => {
    const packagePath = path.join(packagesDir, folder);
    const packageJsonPath = path.join(packagePath, "package.json");

    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(
        fs.readFileSync(packageJsonPath, "utf8"),
      );

      let version = packageJson.version;

      // Remove beta tag, if any
      if (version && semver.prerelease(version)) {
        version = semver.coerce(version)?.version;
      }

      // Set the initial version in preJson for that package to the non beta tagged version and write back
      preJson.initialVersions[packageJson.name] = version;

      // Increment minor version and add a beta tag, write back
      const newVersion = semver.inc(version, "minor") + "-beta.1";
      packageJson.version = newVersion;
      fs.writeFileSync(
        packageJsonPath,
        JSON.stringify(packageJson, null, 2) + "\n",
      );

      // Add a changeset file that indicates a minor bump happened, write back
      const changesetFileName = `${
        packageJson.name.replace("/", "-")
      }-simulatedRelease`;
      const changesetFile = path.join(
        changesetsDir,
        changesetFileName + ".md",
      );

      preJson.changesets.push(changesetFileName);

      const changeset = `---
"${packageJson.name}": patch
---
      
Simulated release
      `;

      fs.writeFileSync(changesetFile, changeset);
    }
  });
  fs.writeFileSync(preJsonPath, JSON.stringify(preJson, null, 2) + "\n");
}
