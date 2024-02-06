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
import { isValidSemver } from "./isValidSemver.js";

/**
 * Gets the version string using git describe. If the @param tagPrefix is empty, git describe will return the
 * latest tag (without any filtering) and if the tag starts with "v", it will be removed.
 * @param tagPrefix The prefix to use for matching against tags. Defaults to an empty string.
 * @returns A promise that resolves to the version string.
 * @throws An error if the version string is not SemVer compliant or if the version cannot be determined.
 */
export async function autoVersion(tagPrefix: string = ""): Promise<string> {
  const [matchPrefix, prefixRegex] = tagPrefix !== ""
    ? [tagPrefix, new RegExp(`^${tagPrefix}`)]
    : [undefined, new RegExp(`^v?`)];
  try {
    const gitVersion = execSync(
      `git describe --tags --first-parent --dirty${
        matchPrefix != null ? ` --match="${matchPrefix}*"` : ""
      }`,
      { encoding: "utf8" },
    );
    const version = gitVersion.trim().replace(prefixRegex, "");
    if (!isValidSemver(version)) {
      throw new Error(`The version string ${version} is not SemVer compliant.`);
    }

    return version;
    // TODO(zka): Find out possible error messages from git describe and show specific messages.
  } catch (error) {
    throw new Error(
      `Unable to determine the version automatically. Please supply a --version argument. ${error}`,
    );
  }
}
