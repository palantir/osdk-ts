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

import * as core from "@actions/core";
import { getExecOutput } from "@actions/exec";
import * as github from "@actions/github";
import * as fs from "node:fs";
import yargs from "yargs";
import * as gitUtils from "./gitUtils.js";
import readChangesetState from "./readChangesetState.js";
import { runPublish } from "./runPublish.js";
import { runVersion } from "./runVersion.js";

// const getOptionalInput = (name: string) => core.getInput(name) || undefined;

(async () => {
  let githubToken = process.env.GITHUB_TOKEN;

  if (!githubToken) {
    core.setFailed("Please add the GITHUB_TOKEN to the changesets action");
    return;
  }

  const args = await yargs(process.argv.slice(2))
    .options({
      cwd: { type: "string" },
      versionCmd: { type: "string" },
      publishCmd: { type: "string" },
      setupGitUser: { type: "boolean" },
      title: { type: "string" },
      commit: { type: "string" },
      branch: { type: "string" },
      repo: { type: "string", demandOption: true },
    }).parseAsync();

  process.env.GITHUB_REPOSITORY = args.repo;
  if (!process.env.GITHUB_REF) {
    const out = await getExecOutput("git", ["symbolic-ref", "HEAD"]);
    if (out.exitCode) {
      core.setFailed("Failed to get current branch");
      return;
    }
    // context is intialized before this gets to run so we overwrite it manually
    github.context.ref = process.env.GITHUB_REF = out.stdout.trim();
  }
  if (!process.env.GITHUB_SHA) {
    const out = await getExecOutput("git", ["rev-parse", "HEAD"]);
    if (out.exitCode) {
      core.setFailed("Failed to get current commit SHA");
      return;
    }
    // context is intialized before this gets to run so we overwrite it manually
    github.context.sha = process.env.GITHUB_SHA = out.stdout.trim();
  }

  const inputCwd = args.cwd;
  if (inputCwd) {
    core.info("changing directory to the one given as the input");
    process.chdir(inputCwd);
  }

  let setupGitUser = args.setupGitUser;

  if (setupGitUser) {
    core.info("setting git user");
    await gitUtils.setupUser();
  }

  core.info("setting GitHub credentials");
  await fs.promises.writeFile(
    `${process.env.HOME}/.netrc`,
    `machine github.com\nlogin github-actions[bot]\npassword ${githubToken}`,
  );

  let { changesets } = await readChangesetState();

  let publishScript = args.publishCmd; // core.getInput("publish");
  let hasChangesets = changesets.length !== 0;
  const hasNonEmptyChangesets = changesets.some(
    (changeset) => changeset.releases.length > 0,
  );
  let hasPublishScript = !!publishScript as boolean;

  core.setOutput("published", "false");
  core.setOutput("publishedPackages", "[]");
  core.setOutput("hasChangesets", String(hasChangesets));

  switch (true) {
    case !hasChangesets && !hasPublishScript:
      core.info("No changesets found");
      return;
    case !hasChangesets && hasPublishScript: {
      core.info(
        "No changesets found, attempting to publish any unpublished packages to npm",
      );

      let userNpmrcPath = `${process.env.HOME}/.npmrc`;

      if (fs.existsSync(userNpmrcPath)) {
        core.info("Found existing user .npmrc file");
        const userNpmrcContent = await fs.promises.readFile(
          userNpmrcPath,
          "utf8",
        );
        const authLine = userNpmrcContent.split("\n").find((line) => {
          // check based on https://github.com/npm/cli/blob/8f8f71e4dd5ee66b3b17888faad5a7bf6c657eed/test/lib/adduser.js#L103-L105
          return /^\s*\/\/registry\.npmjs\.org\/:[_-]authToken=/i.test(line);
        });
        if (authLine) {
          core.info(
            "Found existing auth token for the npm registry in the user .npmrc file",
          );
        } else {
          core.info(
            "Didn't find existing auth token for the npm registry in the user .npmrc file, creating one",
          );
          fs.appendFileSync(
            userNpmrcPath,
            `\n//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}\n`,
          );
        }
      } else {
        core.info("No user .npmrc file found, creating one");
        fs.writeFileSync(
          userNpmrcPath,
          `//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}\n`,
        );
      }

      throw "skip publish";

      const result = await runPublish({
        script: publishScript,
        githubToken,
        createGithubReleases: core.getBooleanInput("createGithubReleases"),
      });

      if (result.published) {
        core.setOutput("published", "true");
        core.setOutput(
          "publishedPackages",
          JSON.stringify(result.publishedPackages),
        );
      }
      return;
    }
    case hasChangesets && !hasNonEmptyChangesets:
      core.info("All changesets are empty; not creating PR");
      return;
    case hasChangesets:
      const { pullRequestNumber } = await runVersion({
        script: args.versionCmd,
        githubToken,
        prTitle: args.title,
        commitMessage: args.commit,
        hasPublishScript,
        branch: args.branch,
      });

      core.setOutput("pullRequestNumber", String(pullRequestNumber));

      return;
  }
})().catch((err) => {
  core.error(err);
  core.setFailed(err.message);
  // eslint-disable-next-line no-console
  console.error(err.stack);
});
