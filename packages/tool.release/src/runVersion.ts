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

/*
 * This code is heavily adapted from https://github.com/changesets/action/ which
 * is licensed under the MIT License according to its package.json. However, it
 * does not have a license file in the repository nor any headers on its source.
 *
 * Below is a modified version of the MIT license.
 */

/*
MIT License

Copyright (c) 2024 authors of https://github.com/changesets/action/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { exec } from "@actions/exec";
import * as fs from "node:fs";
import path from "node:path";
import type { Octokit } from "octokit";
import resolveFrom from "resolve-from";
import { createOrUpdatePr } from "./createOrUpdatePr.js";
import * as gitUtils from "./gitUtils.js";
import { getChangedPackages } from "./util/getChangedPackages.js";
import { getChangelogEntry } from "./util/getChangelogEntry.js";
import { getVersionPrBody } from "./util/getVersionPrBody.js";
import { getVersionsByDirectory } from "./util/getVersionsByDirectory.js";
import readChangesetState from "./util/readChangesetState.js";
import { sortByPrivateThenHighestLevel } from "./util/sortByPrivateThenHighestLevel.js";

export interface GithubContext {
  repo: { owner: string; repo: string };
  //   ref: string;
  sha: string;
  branch: string;
  octokit: Octokit;
}

// GitHub Issues/PRs messages have a max size limit on the
// message body payload.
// `body is too long (maximum is 65536 characters)`.
// To avoid that, we ensure to cap the message to 60k chars.
export const MAX_CHARACTERS_PER_MESSAGE = 60000;

export type VersionOptions = {
  versionCmd?: string;
  cwd?: string;
  prTitle?: string;
  commitMessage?: string;
  hasPublishScript?: boolean;
  prBodyMaxCharacters?: number;
  branch?: string;
  context: GithubContext;
};

export async function runVersion({
  versionCmd,
  cwd = process.cwd(),
  prTitle = "Version Packages",
  commitMessage = "Version Packages",
  hasPublishScript = false,
  prBodyMaxCharacters = MAX_CHARACTERS_PER_MESSAGE,
  context,
}: VersionOptions): Promise<void> {
  const { branch } = context;
  const versionBranch = `changeset-release/${branch}`;
  const { preState } = await readChangesetState(cwd);

  await gitUtils.switchToMaybeExistingBranch(versionBranch);
  await gitUtils.reset(context.sha);

  const originalVersionsByDirectory = await getVersionsByDirectory(cwd);

  if (versionCmd) {
    const [versionCommand, ...versionArgs] = versionCmd.split(/\s+/);
    await exec(versionCommand, versionArgs, { cwd });
  } else {
    await exec(
      "node",
      [resolveFrom(cwd, "@changesets/cli/bin.js"), "version"],
      { cwd },
    );
  }

  const changedPackagesInfo = await getSortedChangedPackagesInfo(
    cwd,
    originalVersionsByDirectory,
  );

  const finalPrTitle = `${prTitle}${!!preState ? ` (${preState.tag})` : ""}`;

  // project with `commit: true` setting could have already committed files
  if (!(await gitUtils.checkIfClean())) {
    const finalCommitMessage = `${commitMessage}${
      !!preState ? ` (${preState.tag})` : ""
    }`;
    await gitUtils.commitAll(finalCommitMessage);
  }

  await gitUtils.push(versionBranch, { force: true });

  const prBody = await getVersionPrBody({
    hasPublishScript,
    preState,
    branch,
    changedPackagesInfo,
    prBodyMaxCharacters,
  });

  await createOrUpdatePr(
    context,
    finalPrTitle,
    prBody,
    branch,
    versionBranch,
  );
}

async function getSortedChangedPackagesInfo(
  cwd: string,
  oldVersionsByDirectory: Map<string, string>,
) {
  const changedPackages = await getChangedPackages(cwd, oldVersionsByDirectory);
  // eslint-disable-next-line no-console
  console.log("-=-=-==-");
  // eslint-disable-next-line no-console
  console.log(cwd);
  // eslint-disable-next-line no-console
  console.log(oldVersionsByDirectory);
  // eslint-disable-next-line no-console
  console.log(changedPackages);
  const changedPackagesInfo = await Promise.all(
    changedPackages.map(async (pkg) => {
      const changelogContents = await fs.promises.readFile(
        path.join(pkg.dir, "CHANGELOG.md"),
        "utf8",
      );

      const entry = getChangelogEntry(
        changelogContents,
        pkg.packageJson.version,
      );
      if (!entry) {
        throw new Error(
          "Some how we bumped versions without the version matching",
        );
      }
      return {
        highestLevel: entry.highestLevel,
        private: !!pkg.packageJson.private,
        content: entry.content,
        header: `## ${pkg.packageJson.name}@${pkg.packageJson.version}`,
      };
    }),
  );

  return changedPackagesInfo
    .filter((x) => x)
    .sort(sortByPrivateThenHighestLevel);
}

export async function getExistingPr(
  repo: string,
  versionBranch: string,
  branch: string,
  octokit: Octokit,
) {
  const { data } = await octokit.rest.search.issuesAndPullRequests(
    {
      q: `repo:${repo}+state:open+head:${versionBranch}+base:${branch}+is:pull-request`,
    },
  );

  return data.items[0];
}

type PullRequestInfo = Awaited<
  ReturnType<
    Octokit["rest"]["search"]["issuesAndPullRequests"]
  >
>["data"]["items"][0];
