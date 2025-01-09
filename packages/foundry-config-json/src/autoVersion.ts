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

import { findUp } from "find-up";
import { exec } from "node:child_process";
import { promises as fsPromises } from "node:fs";
import { promisify } from "node:util";
import { valid } from "semver";
import type { AutoVersionConfig } from "./config.js";

export class AutoVersionError extends Error {
  constructor(
    public readonly msg: string,
    public readonly tip?: string,
  ) {
    super(msg);
  }
}

/**
 * Gets the version string using git describe. If the @param tagPrefix is empty, git describe will return the
 * latest tag (without any filtering) and if the tag starts with "v", it will be removed.
 * @param tagPrefix The prefix to use for matching against tags. Defaults to an empty string.
 * @returns A promise that resolves to the version string.
 * @throws An error if the version string is not SemVer compliant or if the version cannot be determined.
 */
export async function autoVersion(config: AutoVersionConfig): Promise<string> {
  switch (config.type) {
    case "git-describe":
      return gitDescribeAutoVersion(config.tagPrefix);
    case "package-json":
      return packageJsonAutoVersion();
    default:
      const value: never = config;
      throw new Error(
        `Unexpected auto version config: (${JSON.stringify(value)})`,
      );
  }
}

async function gitDescribeAutoVersion(tagPrefix: string = ""): Promise<string> {
  const [matchPrefix, prefixRegex] = tagPrefix !== ""
    ? [tagPrefix, new RegExp(`^${tagPrefix}`)]
    : [undefined, new RegExp(`^v?`)];

  const gitVersion = await gitDescribe(matchPrefix);
  const version = gitVersion.trim().replace(prefixRegex, "");
  validateVersion(version);
  return version;
}

async function packageJsonAutoVersion(): Promise<string> {
  const packageJsonPath = await findUp("package.json");
  if (!packageJsonPath) {
    throw new AutoVersionError(
      `Couldn't find package.json file in the current working directory or its parents: ${process.cwd()}`,
    );
  }

  let packageJson;
  try {
    const fileContent = await fsPromises.readFile(packageJsonPath, "utf-8");
    packageJson = JSON.parse(fileContent);
  } catch (error) {
    throw new AutoVersionError(
      `Couldn't read or parse package.json file ${packageJsonPath}. Error: ${error}`,
    );
  }

  const version = packageJson.version;
  validateVersion(version);
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
        throw new AutoVersionError(
          "Unable to determine auto version using git-describe as git is not installed or found in the PATH.",
          `You can set up git and try again or supply a --version option to set the version manually`,
        );
      }

      if (
        errorMessage.includes("fatal: not a git repository")
      ) {
        throw new AutoVersionError(
          `Unable to determine auto version using git-describe as the current directory is not a git repository.`,
          `You can run the command in a git repository and try again or supply a --version option to set the version manually`,
        );
      }

      if (
        errorMessage.includes(
          "fatal: no names found, cannot describe anything.",
        )
      ) {
        throw new AutoVersionError(
          `Unable to determine auto version using git-describe as no matching tags were found.`,
          `You can create a tag matching the configured tag prefix and try again or supply a --version option to set the version manually`,
        );
      }
    }

    throw new AutoVersionError(
      `Unable to determine auto version using git-describe: ${error}.`,
      `You can supply a --version option to set the version manually`,
    );
  }

  return gitVersion;
}

function validateVersion(version: string): void {
  if (valid(version) == null) {
    throw new AutoVersionError(
      `The version string ${version} is not SemVer compliant.`,
    );
  }
}
