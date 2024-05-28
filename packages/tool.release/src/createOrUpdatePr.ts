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

import { exec } from "@actions/exec";
import { consola } from "consola";
import type { GithubContext } from "./runVersion.js";
import { getExistingPr } from "./runVersion.js";

export async function createOrUpdatePr(
  context: GithubContext,
  title: string,
  body: string,
  base: string,
  head: string,
): Promise<void> {
  const pullRequest = await getExistingPr(
    `${context.repo.owner}/${context.repo.repo}`,
    head,
    context.branch,
    context.octokit,
  );

  if (!pullRequest) {
    consola.info("creating pull request");

    await exec("gh", [
      "pr",
      "create",
      "--title",
      title,
      "--body",
      body,
      "--base",
      base,
      "--head",
      head,
    ]);
  } else {
    consola.info(`updating found pull request #${pullRequest.number}`);

    await exec("gh", [
      "pr",
      "edit",
      `${pullRequest.number}`,
      "--title",
      title,
      "--body",
      body,
    ]);
  }
}
