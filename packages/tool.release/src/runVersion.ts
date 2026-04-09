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
import applyReleasePlan from "@changesets/apply-release-plan";
import assembleReleasePlan from "@changesets/assemble-release-plan";
import { read as readChangesetConfig } from "@changesets/config";
import { getCurrentCommitId } from "@changesets/git";
import { readPreState } from "@changesets/pre";
import readChangesets from "@changesets/read";
import {
  getChangelogEntry,
  sortChangelogEntries,
} from "@changesets/release-utils";
import type { Config } from "@changesets/types";
import { getPackages } from "@manypkg/get-packages";
import { consola } from "consola";
import * as fs from "node:fs";
import path from "node:path";
import type { Octokit } from "octokit";
import { createOrUpdatePr } from "./createOrUpdatePr.js";
import { FailedWithUserMessage } from "./FailedWithUserMessage.js";
import * as gitUtils from "./gitUtils.js";
import { mutateReleasePlan } from "./mutateReleasePlan.js";
import { packageVersionsOrEmptySet } from "./publishPackages.js";
import { getChangedPackages } from "./util/getChangedPackages.js";
import { getVersionPrBody } from "./util/getVersionPrBody.js";
import { getVersionsByDirectory } from "./util/getVersionsByDirectory.js";

export interface GithubContext {
  repo: { owner: string; repo: string };
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
  cwd?: string;
  prTitle?: string;
  commitMessage?: string;
  hasPublishScript?: boolean;
  prBodyMaxCharacters?: number;
  branch?: string;
  context: GithubContext;
  snapshot?: string | boolean;
};

export async function runVersion({
  cwd = process.cwd(),
  prTitle = "Version Packages",
  commitMessage = "Version Packages",
  hasPublishScript = false,
  prBodyMaxCharacters = MAX_CHARACTERS_PER_MESSAGE,
  context,
  snapshot,
}: VersionOptions): Promise<void> {
  const { branch } = context;

  if (branch.startsWith("changeset-release/")) {
    throw new FailedWithUserMessage(
      "This branch is already a version branch, aborting",
    );
  }

  const isMainBranch =
    (process.env.PRETEND_BRANCH ?? context.branch) === "main";

  const isReleaseBranch = (process.env.PRETEND_BRANCH ?? context.branch)
    .startsWith("release/");

  const runGitCommands = !process.env.PRETEND_BRANCH;

  if (!isMainBranch && !isReleaseBranch) {
    throw new FailedWithUserMessage(
      "You must use a main or release branch.\n\n(You can fake it by setting the env variable PRETEND_BRANCH",
    );
  }

  const versionBranch = `changeset-release/${branch}`;

  if (!runGitCommands) {
    consola.warn("Skipping checkout due to using a pretend branch");
  } else {
    await gitUtils.switchToMaybeExistingBranch(versionBranch);
    await gitUtils.reset(context.sha);
  }

  const originalVersionsByDirectory = await getVersionsByDirectory(cwd);

  const packages = await getPackages(cwd);
  const config = await readChangesetConfig(cwd, packages);

  const [changesets, preState] = await Promise.all([
    readChangesets(cwd),
    readPreState(cwd),
  ]);

  const releaseConfig: Config = {
    ...config,
    // Disable committing when in snapshot mode
    commit: snapshot || !runGitCommands ? false : config.commit,
    changelog: ["@changesets/changelog-git", null],
    ___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH: {
      onlyUpdatePeerDependentsWhenOutOfRange: true,
      updateInternalDependents: "out-of-range",
    },
  };

  const releasePlan = assembleReleasePlan(
    changesets,
    packages,
    releaseConfig,
    preState,
    snapshot
      ? {
        tag: snapshot === true ? undefined : snapshot,
        commit: config.snapshot.prereleaseTemplate?.includes("{commit}")
          ? await getCurrentCommitId({ cwd })
          : undefined,
      }
      : undefined,
  );

  mutateReleasePlan(cwd, releasePlan, isMainBranch ? "main" : "release branch");

  for (const release of releasePlan.releases) {
    const versions = await packageVersionsOrEmptySet(release.name);
    if (versions.has(release.newVersion) && release.type !== "none") {
      throw new FailedWithUserMessage(
        `The version ${release.newVersion} of ${release.name} is already published on npm`,
      );
    }
  }

  const touchedFiles = await applyReleasePlan(
    releasePlan,
    packages,
    releaseConfig,
    snapshot,
  );

  if (touchedFiles.length === 0) {
    throw new FailedWithUserMessage(
      "No changesets to apply, aborting",
    );
  }

  await exec("pnpm", ["run", "postVersionCmd"], { cwd });

  const changedPackagesInfo = await getSortedChangedPackagesInfo(
    cwd,
    originalVersionsByDirectory,
  );

  const finalPrTitle = `${prTitle}${!!preState ? ` (${preState.tag})` : ""}`;

  if (!runGitCommands) {
    consola.warn("Skipping: commit, push, createPr");
  } else {
    // project with `commit: true` setting could have already committed files
    if (!(await gitUtils.checkIfClean())) {
      let finalCommitMessage = commitMessage;
      if (preState && preState.mode === "pre") {
        finalCommitMessage += ` (${preState.tag})`;
      } else if (preState && preState.mode === "exit") {
        finalCommitMessage += ` (exit ${preState.tag})`;
      }

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
}

async function getSortedChangedPackagesInfo(
  cwd: string,
  oldVersionsByDirectory: Map<string, string>,
) {
  const changedPackages = await getChangedPackages(cwd, oldVersionsByDirectory);
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
    .sort(sortChangelogEntries);
}

export async function getExistingPr(
  repo: string,
  versionBranch: string,
  branch: string,
  octokit: Octokit,
): Promise<
  Awaited<
    ReturnType<Octokit["rest"]["search"]["issuesAndPullRequests"]>
  >["data"]["items"][0]
> {
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  const { data } = await octokit.rest.search.issuesAndPullRequests(
    {
      q: `repo:${repo}+state:open+head:${versionBranch}+base:${branch}+is:pull-request`,
    },
  );

  return data.items[0];
}
