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
import type { Package } from "@manypkg/get-packages";
import { getPackages } from "@manypkg/get-packages";
import { createRelease } from "./createRelease.js";
import * as gitUtils from "./gitUtils.js";
import type { GithubContext } from "./runVersion.js";

export type PublishOptions = {
  script: string;
  createGithubReleases: boolean;
  cwd?: string;
  context: GithubContext;
};

type PublishedPackage = { name: string; version: string };

export type PublishResult =
  | {
    published: true;
    publishedPackages: PublishedPackage[];
  }
  | {
    published: false;
  };

export async function runPublish({
  script,
  createGithubReleases,
  cwd = process.cwd(),
  context,
}: PublishOptions): Promise<PublishResult> {
  const [publishCommand, ...publishArgs] = script.split(/\s+/);

  const changesetPublishOutput = await getExecOutput(
    publishCommand,
    publishArgs,
    { cwd },
  );

  await gitUtils.pushTags();

  const { packages, tool } = await getPackages(cwd);
  const releasedPackages: Package[] = [];

  if (tool !== "root") {
    const newTagRegex = /New tag:\s+(@[^/]+\/[^@]+|[^/]+)@([^\s]+)/;
    const packagesByName = new Map(
      packages.map((x) => [x.packageJson.name, x]),
    );

    for (const line of changesetPublishOutput.stdout.split("\n")) {
      const match = line.match(newTagRegex);
      if (match == null) {
        continue;
      }
      const pkgName = match[1];
      const pkg = packagesByName.get(pkgName);
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
          createRelease(context, {
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
    const pkg = packages[0];
    const newTagRegex = /New tag:/;

    for (const line of changesetPublishOutput.stdout.split("\n")) {
      const match = line.match(newTagRegex);

      if (match) {
        releasedPackages.push(pkg);
        if (createGithubReleases) {
          await createRelease(context, {
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
