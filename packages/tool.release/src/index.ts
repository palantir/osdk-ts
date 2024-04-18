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

import { getExecOutput } from "@actions/exec";
import { readChangesetState } from "@changesets/release-utils";
import { consola } from "consola";
import * as fs from "node:fs";
import yargs from "yargs";
import { runPublish } from "./runPublish.js";
import type { GithubContext } from "./runVersion.js";
import { runVersion } from "./runVersion.js";
import { setupOctokit } from "./util/setupOctokit.js";

async function getStdoutOrThrow(...args: Parameters<typeof getExecOutput>) {
  const { exitCode, stdout, stderr } = await getExecOutput(...args);
  if (exitCode !== 0) {
    throw new Error(stderr);
  }
  return stdout;
}

async function getContext(
  args: { repo: string; branch?: string },
): Promise<GithubContext> {
  const parts = args.repo.split("/");

  return {
    repo: {
      owner: parts[0],
      repo: parts[1],
    },
    // ref: ,
    sha: (await getStdoutOrThrow("git", ["rev-parse", "HEAD"])).trim(),
    branch: args.branch
      ?? process.env.GITHUB_HEAD_REF
      ?? (await getStdoutOrThrow("git", ["symbolic-ref", "HEAD"])).replace(
        "refs/heads/",
        "",
      ).trim(),
    octokit: setupOctokit(await getGithubTokenOrFail()),
  };
}

class FailedWithUserMessage extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FailedWithUserMessage";
  }
}

(async () => {
  const args = await yargs(process.argv.slice(2))
    .options({
      cwd: { type: "string", description: "Change working directory" },
      mode: {
        // type: "string",
        choices: ["version", "publish"],
        default: "version",
      },
      versionCmd: {
        type: "string",
        conflicts: "publishCmd",
        description: "Custom version command to run in version mode",
      },
      publishCmd: {
        type: "string",
        conflicts: "versionCmd",
        description: "Publish command to run in publish mode",
      },
      title: { type: "string", description: "Custom pr title" },
      commitMessage: { type: "string", description: "custom commit message" },
      branch: {
        type: "string",
        description: "Custom branch to use",
        defaultDescription: "${changeset-release}/${current-branch}",
      },
      repo: {
        type: "string",
        demandOption: true,
        description: "Repo to push to (format: org/name)",
      },
    })
    .check((argv) => {
      if (argv.mode === "publish" && !argv.publishCmd) {
        throw new Error(
          "You must provide a publish command when running in publish mode",
        );
      }

      if (argv.mode === "version" && argv.publishCmd) {
        throw new Error(
          "You cannot provide a publish command when running in version mode",
        );
      }

      return true;
    })
    .parseAsync();

  const context = await getContext(args);

  if (args.cwd) {
    consola.info(`Changing directory to ${args.cwd}`);
    process.chdir(args.cwd);
  }

  const { changesets } = await readChangesetState();

  const hasChangesets = changesets.length !== 0;
  const hasNonEmptyChangesets = changesets.some(
    (changeset) => changeset.releases.length > 0,
  );

  if (args.mode === "version") {
    if (!hasChangesets) {
      consola.info("No changesets found; not creating PR");
      return;
    }
    if (!hasNonEmptyChangesets) {
      consola.info("All changesets are empty; not creating PR");
      return;
    }

    await runVersion({
      versionCmd: args.versionCmd,
      prTitle: args.title,
      commitMessage: args.commitMessage,
      branch: args.branch,
      context,
    });
  } else {
    if (!hasChangesets) {
      consola.error("No changesets found.");
      return;
    }

    throw "skip publish";

    const userNpmrcPath = `${process.env.HOME}/.npmrc`;

    if (fs.existsSync(userNpmrcPath)) {
      consola.info("Found existing user .npmrc file");
      const userNpmrcContent = await fs.promises.readFile(
        userNpmrcPath,
        "utf8",
      );
      const authLine = userNpmrcContent.split("\n").find((line) => {
        // check based on https://github.com/npm/cli/blob/8f8f71e4dd5ee66b3b17888faad5a7bf6c657eed/test/lib/adduser.js#L103-L105
        return /^\s*\/\/registry\.npmjs\.org\/:[_-]authToken=/i.test(line);
      });
      if (authLine) {
        consola.info(
          "Found existing auth token for the npm registry in the user .npmrc file",
        );
      } else {
        consola.info(
          "Didn't find existing auth token for the npm registry in the user .npmrc file, creating one",
        );
        fs.appendFileSync(
          userNpmrcPath,
          `\n//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}\n`,
        );
      }
    } else {
      consola.info("No user .npmrc file found, creating one");
      fs.writeFileSync(
        userNpmrcPath,
        `//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}\n`,
      );
    }

    const result = await runPublish({
      script: args.publishCmd!,
      context,
      createGithubReleases: false,
    });
  }
})().catch((err) => {
  if (err instanceof FailedWithUserMessage) {
    consola.error(err);
  } else if (err instanceof Error) {
    consola.error(err.message);
    consola.error(err.stack);
  } else {
    consola.error("Unexpected error: ", err);
  }

  process.exit(1);
});

async function getGithubTokenOrFail() {
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    consola.info(
      "Unable to find GITHUB_TOKEN in environment, trying github cli...",
    );

    try {
      return (await getStdoutOrThrow("gh", ["auth", "token"], {
        silent: true,
      })).trim();
    } catch (e) {
      consola.error(
        "Unable to find GITHUB_TOKEN in environment or github cli, please add it to the environment",
      );
      consola.error("Output from gh auth token: ", e);
    }

    throw new FailedWithUserMessage(
      "Please add the GITHUB_TOKEN to the changesets action",
    );
  }
  return githubToken;
}
