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

import * as core from "@actions/core";
import { exec } from "@actions/exec";
import * as github from "@actions/github";
import * as fs from "node:fs";
import path from "path";
import resolveFrom from "resolve-from";
import * as gitUtils from "./gitUtils.js";
import readChangesetState from "./readChangesetState.js";
import type { RunVersionResult, VersionOptions } from "./run.js";
import { getVersionPrBody, MAX_CHARACTERS_PER_MESSAGE } from "./run.js";
import { setupOctokit } from "./setupOctokit.js";
import {
  getChangedPackages,
  getChangelogEntry,
  getVersionsByDirectory,
  sortTheThings,
} from "./utils.js";

export async function runVersion({
  script,
  githubToken,
  cwd = process.cwd(),
  prTitle = "Version Packages",
  commitMessage = "Version Packages",
  hasPublishScript = false,
  prBodyMaxCharacters = MAX_CHARACTERS_PER_MESSAGE,
  branch,
}: VersionOptions): Promise<RunVersionResult> {
  const octokit = setupOctokit(githubToken);

  let repo = `${github.context.repo.owner}/${github.context.repo.repo}`;
  branch = branch ?? github.context.ref.replace("refs/heads/", "");
  let versionBranch = `changeset-release/${branch}`;

  let { preState } = await readChangesetState(cwd);

  await gitUtils.switchToMaybeExistingBranch(versionBranch);
  await gitUtils.reset(github.context.sha);

  let versionsByDirectory = await getVersionsByDirectory(cwd);

  if (script) {
    let [versionCommand, ...versionArgs] = script.split(/\s+/);
    await exec(versionCommand, versionArgs, { cwd });
  } else {
    let cmd = "version";
    await exec("node", [resolveFrom(cwd, "@changesets/cli/bin.js"), cmd], {
      cwd,
    });
  }

  let searchQuery =
    `repo:${repo}+state:open+head:${versionBranch}+base:${branch}+is:pull-request`;
  let searchResultPromise = octokit.request("GET /search/issues", {
    q: searchQuery,
  });
  let changedPackages = await getChangedPackages(cwd, versionsByDirectory);
  let changedPackagesInfoPromises = Promise.all(
    changedPackages.map(async (pkg) => {
      let changelogContents = await fs.promises.readFile(
        path.join(pkg.dir, "CHANGELOG.md"),
        "utf8",
      );

      let entry = getChangelogEntry(changelogContents, pkg.packageJson.version);
      return {
        highestLevel: entry.highestLevel,
        private: !!pkg.packageJson.private,
        content: entry.content,
        header: `## ${pkg.packageJson.name}@${pkg.packageJson.version}`,
      };
    }),
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

  let searchResult = await searchResultPromise;
  core.info(JSON.stringify(searchResult.data, null, 2));

  const changedPackagesInfo = (await changedPackagesInfoPromises)
    .filter((x) => x)
    .sort(sortTheThings);

  let prBody = await getVersionPrBody({
    hasPublishScript,
    preState,
    branch,
    changedPackagesInfo,
    prBodyMaxCharacters,
  });

  if (searchResult.data.items.length === 0) {
    core.info("creating pull request");
    const { data: newPullRequest } = await octokit.rest.pulls.create(
      {
        base: branch,
        head: versionBranch,
        title: finalPrTitle,
        body: prBody,
        ...github.context.repo,
      },
    );

    return {
      pullRequestNumber: newPullRequest.number,
    };
  } else {
    const [pullRequest] = searchResult.data.items;

    core.info(`updating found pull request #${pullRequest.number}`);
    octokit.rest.pulls.update({
      pull_number: pullRequest.number,
      title: finalPrTitle,
      body: prBody,
      ...github.context.repo,
    });

    return {
      pullRequestNumber: pullRequest.number,
    };
  }
}
