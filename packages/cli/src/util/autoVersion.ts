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

import { exec } from "node:child_process";
import { promisify } from "node:util";
import { ExitProcessError } from "../ExitProcessError.js";
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

  const gitVersion = await gitDescribe(matchPrefix);
  const version = gitVersion.trim().replace(prefixRegex, "");
  if (!isValidSemver(version)) {
    throw new ExitProcessError(
      2,
      `The version string ${version} is not SemVer compliant.`,
    );
  }

  return version;
}

async function gitDescribe(matchPrefix: string | undefined): Promise<string> {
  let gitVersion;
  try {
    const execAsync = promisify(exec);
    const { stdout } = await execAsync(
      `git describe --tags --first-parent --dirty${
        matchPrefix != null ? ` --match="${matchPrefix}*"` : ""
      }`,
      { encoding: "utf8" },
    );
    gitVersion = stdout;
  } catch (error: any) {
    if (error instanceof Error) {
      const errorMessage: string = error.message.toLowerCase();

      if (
        errorMessage.includes("not recognized")
        || errorMessage.includes("command not found")
        || errorMessage.includes("no such file or directory")
      ) {
        throw new ExitProcessError(
          2,
          `Unable to determine the version using git-describe as git is not installed or found in the PATH.\nPlease correctly configure git or supply a --version option.`,
        );
      }

      if (
        errorMessage.includes("fatal: not a git repository")
      ) {
        throw new ExitProcessError(
          2,
          `Unable to determine the version using git-describe as the current directory is not a git repository.\nPlease run the command in a git respository or supply a --version option.`,
        );
      }

      if (
        errorMessage.includes(
          "fatal: no names found, cannot describe anything.",
        )
      ) {
        throw new ExitProcessError(
          2,
          `Unable to determine the version using git-describe as no matching tags were found.\nPlease tag a matching version or supply a --version option.`,
        );
      }
    }

    throw new ExitProcessError(
      2,
      `Unable to determine the version automatically: ${error}.\nPlease supply a --version argument.`,
    );
  }

  return gitVersion;
}
