/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { execSync } from "node:child_process";
import { promises as fsPromises } from "node:fs";

/**
 * Gets the version string using git describe or falls back to package.json version.
 * @param prefix The prefix to use for matching against tags. Defaults to an empty string.
 * @returns A promise that resolves to the version string. Throws an error if the version string is not SemVer compliant or if the version cannot be determined.
 * @throws An error if the version string is not SemVer compliant or if the version cannot be determined.
 */
export async function getAutoVersion(prefix: string = ""): Promise<string> {
  const { findUp } = await import("find-up");

  try {
    const gitVersion = execSync(
      `git describe --tags --always --first-parent --match="${prefix}*"`,
      { encoding: "utf8" },
    );
    const version = gitVersion.trim().replace(prefix, "");

    if (!isSemVerCompliant(version)) {
      throw new Error(`The version string ${version} is not SemVer compliant.`); // Will fall back to package.json version
    }

    return version;
  } catch {
    // If git describe fails, find the nearest package.json and use its version
    const packageJsonPath = await findUp("package.json");
    if (packageJsonPath) {
      const packageJsonContent = await fsPromises.readFile(
        packageJsonPath,
        "utf-8",
      );
      const packageJson = JSON.parse(packageJsonContent);
      if (packageJson.version && isSemVerCompliant(packageJson.version)) {
        return packageJson.version;
      }
    }

    throw new Error(
      "Unable to determine the version automatically. Please supply a --version argument.",
    );
  }
}

/**
 * Checks if a given version string is SemVer compliant.
 * @param version The version string to check.
 * @returns true if the version string is SemVer compliant, false otherwise.
 */
function isSemVerCompliant(version: string): boolean {
  //  https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
  const semVerRegex =
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
  return semVerRegex.test(version);
}
