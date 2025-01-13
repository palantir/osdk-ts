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

import type { AccessType, Config } from "@changesets/types";
import type { Package } from "@manypkg/get-packages";
import { getPackages } from "@manypkg/get-packages";
import chalk from "chalk";
import { consola } from "consola";
import { execa } from "execa";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import type { Octokit } from "octokit";
import pFilter from "p-filter";
import pMap from "p-map";
import { PackageNotFoundError } from "package-json";
import packageVersionsOrThrow from "pkg-versions";

// Honestly I don't know that we need this file since `pnpm publish -r` is a thing

export type PublishedResult = {
  name: string;
  newVersion: string;
  published: boolean;
};

export async function publishPackages(
  cwd: string,
  { tag, gitTag = true }: { tag?: string; gitTag?: boolean },
  config: Config,
  octokit: Octokit,
): Promise<PublishedResult[]> {
  const releaseTag = tag && tag.length > 0 ? tag : "latest";
  const { packages, tool } = await getPackages(cwd);

  const publicPackages = packages.filter((pkg) => !pkg.packageJson.private);
  const unpublishedPackagesInfo = await getUnpublishedPackages(publicPackages);

  const r = await pMap(
    unpublishedPackagesInfo,
    async (pkg) => await publishSinglePackage(pkg, config.access, releaseTag),
    { concurrency: 4 },
  );

  // need to produce the output to save for future run of create tag/release
  await fs.writeFile(
    path.join(cwd, "pnpm-publish-summary.json"),
    JSON.stringify(
      {
        publishedPackages: r.filter((x) => x.published).map(x => ({
          name: x.name,
          version: x.newVersion,
        })),
      },
      null,
      2,
    ),
  );

  return r;
}

async function execPnpmPublish(
  { cwd, tag, access }: { cwd: string; tag: string; access: AccessType },
) {
  const result = await execa("pnpm", [
    "publish",
    "--json",
    "--tag",
    "--dry-run",
    tag,
    "--no-git-checks",
  ], { cwd });

  if (result.exitCode !== 0) {
    consola.error(
      `Failed to publish ${chalk.cyan(cwd)} with error: ${result.stderr}`,
    );
    return false;
  }

  consola.success(`Published ${chalk.cyan(cwd)} with tag ${chalk.green(tag)}`);

  return true;
}

async function publishSinglePackage(
  pkg: Package,
  access: AccessType,
  tag: string,
): Promise<PublishedResult> {
  const { name, version, publishConfig } = pkg.packageJson;
  consola.info(
    `Publishing ${chalk.cyan(`"${name}"`)} at ${chalk.green(`"${version}"`)}`,
  );

  return {
    name,
    newVersion: version,
    published: await execPnpmPublish({ cwd: pkg.dir, tag, access }),
  };
}

export async function packageVersionsOrEmptySet(
  name: string,
): Promise<Set<string>> {
  try {
    return await packageVersionsOrThrow(name);
  } catch (e) {
    if (e instanceof PackageNotFoundError) {
      return new Set();
    }
    throw e;
  }
}

async function getUnpublishedPackages(packages: Array<Package>) {
  return pFilter(packages, async (pkg) => {
    const { name, version } = pkg.packageJson;
    const versions = await packageVersionsOrEmptySet(name);
    if (versions.has(version)) {
      consola.info(
        `${name} is being published because our local version (${version}) has not been published on npm`,
      );
      return true;
    } else {
      consola.warn(
        `${name} is not being published because version ${version} is already published on npm`,
      );
      return false;
    }
  });
}
