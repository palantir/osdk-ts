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

import consola from "consola";
import { execa } from "execa";
import { existsSync } from "fs";
import { readFile } from "fs/promises";
import { join } from "path";
import semver from "semver";

async function ciPublish(): Promise<void> {
  let tag = "latest";
  const repoRoot = process.cwd();
  const preJsonPath = join(repoRoot, ".changeset", "pre.json");

  if (existsSync(preJsonPath)) {
    try {
      const preJson = JSON.parse(await readFile(preJsonPath, "utf-8"));
      if (preJson.mode === "pre") {
        tag = preJson.tag;
      } else {
        consola.error(`Invalid mode for releasing: ${preJson.mode}`);
        process.exit(100);
      }
    } catch (error) {
      consola.error(`Error reading pre.json: ${error}`);
      process.exit(1);
    }
  } else {
    const remoteBranches = await getRemoteBranches();
    const currentBranch = await getCurrentBranch();
    const greatestVersion = findGreatestVersion(remoteBranches);
    tag = determineTag(currentBranch, greatestVersion, tag);
  }

  consola.info(`Publishing with tag: ${tag}`);

  try {
    const repoRoot = process.cwd();
    await execa("pnpm", ["run", "prePublish"], {
      stdio: "inherit",
      cwd: repoRoot,
    });
    await execa(
      "pnpm",
      ["publish", "--no-git-checks", "-r", "--report-summary", "--tag", tag],
      {
        stdio: "inherit",
        cwd: repoRoot,
      },
    );
  } catch (error) {
    consola.error(`Error during publish: ${error}`);
    process.exit(1);
  }
}

async function getRemoteBranches(): Promise<string[]> {
  const repoRoot = process.cwd();
  const { stdout } = await execa("git", [
    "ls-remote",
    "--heads",
    "origin",
    "release/*",
  ], { cwd: repoRoot });
  return stdout.split("\n").filter(line => !!line).map(line => {
    const match = line.match(/release\/(.*)/);
    if (!match) {
      consola.log(match);
      throw new Error(`Invalid branch name: ${line}`);
    }
    return match[0];
  });
}

async function getCurrentBranch(): Promise<string> {
  const repoRoot = process.cwd();
  const { stdout } = await execa("git", [
    "rev-parse",
    "--abbrev-ref",
    "HEAD",
  ], { cwd: repoRoot });
  return stdout;
}

export function findGreatestVersion(releaseBranches: string[]): string | null {
  if (releaseBranches.length === 0) return null;
  return releaseBranches.reduce((maxBranch, branch) => {
    let version = branch.replace(/^.*?release\//, "");
    let maxVersion = maxBranch.replace(/^.*?release\//, "");
    version = version.replace(/\.x$/, ".0");
    maxVersion = maxVersion.replace(/\.x$/, ".0");

    if (!semver.valid(version)) {
      return maxBranch;
    }

    return semver.gt(version, maxVersion) ? branch : maxBranch;
  }, releaseBranches[0]);
}

export function determineTag(
  currentBranch: string,
  greatestVersion: string | null,
  defaultTag: string,
): string {
  if (currentBranch === "main") {
    return "latest";
  } else if (currentBranch.startsWith("release/")) {
    if (greatestVersion && currentBranch === greatestVersion) {
      return "latest";
    } else {
      return `${defaultTag}-${currentBranch.substring(8)}`;
    }
  }
  return defaultTag;
}

(async () => {
  await ciPublish();
})().catch((err: unknown) => {
  consola.error(err);
  process.exit(1);
});
