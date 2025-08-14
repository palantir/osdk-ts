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

import { getChangelogEntry } from "@changesets/release-utils";
import consola from "consola";
import type { Result } from "execa";
import { execa } from "execa";
import { existsSync } from "fs";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import semver from "semver";
import yargs from "yargs";

interface PackageInfo {
  name: string;
  targetVersion: string;
}

interface CopyChangelogOptions {
  releaseBranch: string;
}

async function getPackageInfo(): Promise<PackageInfo[]> {
  const preJson = JSON.parse(await readFile(".changeset/pre.json", "utf-8"));
  return Object.entries(preJson.initialVersions).map(([name, version]) => ({
    name,
    targetVersion: version as string,
  }));
}

async function getChangelogContent(
  packageName: string,
  branch: string,
): Promise<string | null> {
  const changelogPath = join(
    "packages",
    packageName.split("/")[1],
    "CHANGELOG.md",
  );
  let content: Result<{}> = {} as Result<{}>;
  try {
    content = await execa("git", ["show", `${branch}:${changelogPath}`]);
    return content.stdout;
  } catch (error) {
    consola.warn(
      `Failed to update changelog for ${packageName}, likely does not exist on release branch`,
    );
    return null;
  }
}

function doesVersionExistInChangelog(
  changelogContent: string,
  version: string,
): boolean {
  const changelogEntry = getChangelogEntry(changelogContent, version);

  const lines = changelogEntry.content.split("\n");
  const firstLine = lines[0].trim();
  return !firstLine.startsWith("# "); // If the first line of the changelog entry starts with #, it means the entry does not exist
}

async function updateChangelog(
  packageName: string,
  targetVersion: string,
  fullTargetBranchChangelogContent: string,
): Promise<void> {
  const changelogPath = join(
    "packages",
    packageName.split("/")[1],
    "CHANGELOG.md",
  );

  if (!existsSync(changelogPath)) {
    consola.warn(
      `Changelog file does not exist for ${packageName}, skipping update`,
    );
    return;
  }

  const currentContent = await readFile(changelogPath, "utf-8");

  if (doesVersionExistInChangelog(currentContent, targetVersion)) {
    consola.warn(
      `Changelog entry for ${targetVersion} already exists on current branch, skipping`,
    );
    return;
  }

  if (
    !doesVersionExistInChangelog(
      fullTargetBranchChangelogContent,
      targetVersion,
    )
  ) {
    consola.warn(
      `Changelog entry for ${targetVersion} does not exist on release branch, skipping`,
    );
    return;
  }

  const entry = getChangelogEntry(
    fullTargetBranchChangelogContent,
    targetVersion,
  );

  if (!entry) {
    consola.warn(`No changelog entry found for version ${targetVersion}`);
    return;
  }

  const lines = currentContent.split("\n");
  let insertAt = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const versionMatch = line.match(/^## ([\d.]+(?:-beta\.\d+)?)$/);

    if (versionMatch) {
      const entryVersion = versionMatch[1];
      if (semver.lt(entryVersion, targetVersion)) {
        insertAt = i - 1;
        break;
      }
    }
  }

  entry.content = entry.content.replace(/\n$/, "");
  lines.splice(insertAt, 0, `\n## ${targetVersion}\n\n${entry.content}`);

  const updatedContent = lines.join("\n");

  await writeFile(changelogPath, updatedContent);
  consola.success(
    `Updated ${changelogPath} with changelog for ${targetVersion}`,
  );
}

export async function copyChangelogs(
  options: CopyChangelogOptions,
): Promise<void> {
  const { releaseBranch } = options;

  consola.info(`Copying changelogs from branch: ${releaseBranch}`);

  /**
   * Fetches the target version of each package from the pre.json file
   */
  const packageInfo = await getPackageInfo();

  const ignoredPackages: string[] = [];

  for (const pkg of packageInfo) {
    if (ignoredPackages.includes(pkg.name)) {
      consola.info(`Skipping ${pkg.name} as it is in the ignore list`);
      continue;
    }

    const changelogContent = await getChangelogContent(
      pkg.name,
      releaseBranch,
    );
    if (changelogContent) {
      await updateChangelog(pkg.name, pkg.targetVersion, changelogContent);
    }
  }
}

(async () => {
  const args = await yargs(process.argv.slice(2))
    .option("release-branch", {
      type: "string",
      description: "Release branch to copy from",
      default: "release/2.1.x",
      demandOption: true,
    })
    .parse();

  await copyChangelogs({
    releaseBranch: args.releaseBranch,
  });
})().catch((err: unknown) => {
  consola.error(err);
  process.exit(1);
});
