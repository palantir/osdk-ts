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

import { getExecOutput } from "@actions/exec";
import type { Package } from "@manypkg/get-packages";
import { getPackages } from "@manypkg/get-packages";
import * as gitUtils from "./gitUtils.js";
import type { PublishOptions, PublishResult } from "./run.js";
import { createRelease, setupOctokit } from "./run.js";

export async function runPublish({
  script,
  githubToken,
  createGithubReleases,
  cwd = process.cwd(),
}: PublishOptions): Promise<PublishResult> {
  const octokit = setupOctokit(githubToken);

  let [publishCommand, ...publishArgs] = script.split(/\s+/);

  let changesetPublishOutput = await getExecOutput(
    publishCommand,
    publishArgs,
    { cwd },
  );

  await gitUtils.pushTags();

  let { packages, tool } = await getPackages(cwd);
  let releasedPackages: Package[] = [];

  if (tool !== "root") {
    let newTagRegex = /New tag:\s+(@[^/]+\/[^@]+|[^/]+)@([^\s]+)/;
    let packagesByName = new Map(packages.map((x) => [x.packageJson.name, x]));

    for (let line of changesetPublishOutput.stdout.split("\n")) {
      let match = line.match(newTagRegex);
      if (match == null) {
        continue;
      }
      let pkgName = match[1];
      let pkg = packagesByName.get(pkgName);
      if (pkg === undefined) {
        throw new Error(
          `Package "${pkgName}" not found.`
            + "This is probably a bug in the action, please open an issue",
        );
      }
      releasedPackages.push(pkg);
    }

    if (createGithubReleases) {
      await Promise.all(
        releasedPackages.map((pkg) =>
          createRelease(octokit, {
            pkg,
            tagName: `${pkg.packageJson.name}@${pkg.packageJson.version}`,
          })
        ),
      );
    }
  } else {
    if (packages.length === 0) {
      throw new Error(
        `No package found.`
          + "This is probably a bug in the action, please open an issue",
      );
    }
    let pkg = packages[0];
    let newTagRegex = /New tag:/;

    for (let line of changesetPublishOutput.stdout.split("\n")) {
      let match = line.match(newTagRegex);

      if (match) {
        releasedPackages.push(pkg);
        if (createGithubReleases) {
          await createRelease(octokit, {
            pkg,
            tagName: `v${pkg.packageJson.version}`,
          });
        }
        break;
      }
    }
  }

  if (releasedPackages.length) {
    return {
      published: true,
      publishedPackages: releasedPackages.map((pkg) => ({
        name: pkg.packageJson.name,
        version: pkg.packageJson.version,
      })),
    };
  }

  return { published: false };
}
