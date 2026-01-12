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
import AdmZip from "adm-zip";
import chalk from "chalk";
import consola from "consola";
import type { GithubContext } from "./runVersion.js";

export type PublishedPackages = {
  publishedPackages: {
    name: string;
    version: string;
  }[];
};

export async function createGithubReleaseTag(
  packageName: string,
  version: string,
  context: GithubContext,
  sha: string,
): Promise<void> {
  const changelogPath = `packages/${
    getDirNameFromPackageName(packageName)
  }/CHANGELOG.md`;
  const changelogContent = await context.octokit.rest.repos.getContent({
    owner: context.repo.owner,
    repo: context.repo.repo,
    path: changelogPath,
    ref: sha,
    mediaType: {
      format: "application/vnd.github.object+json",
    },
  });

  const changelog = Buffer.from(
    (changelogContent.data as any).content,
    "base64",
  ).toString("utf8");

  const changelogEntry = getChangelogEntry(
    changelog,
    version,
  );

  if (!changelogEntry) {
    throw new Error(
      `Could not find changelog entry for ${packageName}@${packageName}`,
    );
  }

  const tagName = `${packageName}@${version}`;

  void context.octokit.rest.repos.createRelease({
    ...context.repo,
    tag_name: tagName,
    name: tagName,
    body: changelogEntry.content === "\n"
      ? "No changes were made."
      : changelogEntry.content,
    prerelease: version.includes("beta")
      || version.includes("rc"),
    target_commitish: sha,
  }).then((result) => {
    consola.log(
      `Created GitHub release with tag ${
        chalk.green(`${packageName}@${version}`)
      } at ${result.data.html_url}`,
    );
  }).catch((e) => {
    if (e.response.data?.errors[0].code === "already_exists") {
      consola.log(
        chalk.yellow(
          `Release for ${packageName}@${version} already exists, ignoring`,
        ),
      );
    } else {
      consola.error(
        "Failed to create release for ${packageName}@${version}",
        e,
      );
    }
  });
}

async function fetchPublishedPackagesAndSha(
  context: GithubContext,
  sha?: string,
): Promise<
  { workflowSha: string; publishedPackages: PublishedPackages }
> {
  // If SHA is provided, this will only fetch the published packages for that SHA
  const runs = await context.octokit.rest.actions.listWorkflowRuns({
    repo: context.repo.repo,
    owner: context.repo.owner,
    workflow_id: "release.yml",
    head_sha: sha,
  });

  for (const workflowRun of runs.data.workflow_runs) {
    const artifacts = await context.octokit.rest.actions
      .listWorkflowRunArtifacts({
        owner: context.repo.owner,
        repo: context.repo.repo,
        run_id: workflowRun.id,
      });

    for (const artifact of artifacts.data.artifacts) {
      if (artifact.name === "published-packages") {
        const download = await context.octokit.rest.actions.downloadArtifact({
          owner: context.repo.owner,
          repo: context.repo.repo,
          artifact_id: artifact.id,
          archive_format: "zip",
        });

        const response = await fetch(download.url);
        const buffer = await response.arrayBuffer();
        const zip = new AdmZip(Buffer.from(buffer));
        const zipEntries = zip.getEntries();

        for (const zipEntry of zipEntries) {
          if (zipEntry.entryName === "pnpm-publish-summary.json") {
            const publishedPackages = JSON.parse(
              zipEntry.getData().toString("utf8"),
            ) as PublishedPackages;
            if (publishedPackages.publishedPackages.length === 0) {
              continue;
            }
            consola.log(
              chalk.green(
                `Found published packages in workflow run for commit hash ${workflowRun.head_sha}`,
              ),
            );
            return { workflowSha: workflowRun.head_sha, publishedPackages };
          }
        }
      }
    }
  }
  throw new Error(
    "Could not find published packages artifact with any releases",
  );
}

export async function runTagRelease(
  context: GithubContext,
  targetSha?: string,
): Promise<void> {
  const result = await fetchPublishedPackagesAndSha(context, targetSha);
  const publishedPackages = result.publishedPackages;
  const workflowSha = result.workflowSha;

  for (const publishedPackage of publishedPackages.publishedPackages) {
    const packageName = publishedPackage.name;
    const packagePath = `packages/${
      getDirNameFromPackageName(packageName)
    }/package.json`;
    const pkg = await context.octokit.rest.repos.getContent({
      owner: context.repo.owner,
      repo: context.repo.repo,
      path: packagePath,
      ref: workflowSha,
      mediaType: {
        format: "application/vnd.github.object+json",
      },
    });

    const pkgData = JSON.parse(
      Buffer.from((pkg.data as any).content, "base64").toString("utf8"),
    );

    if (pkgData.version !== publishedPackage.version) {
      throw new Error(
        `Version mismatch for ${packageName}: expected ${publishedPackage.version}, got ${pkgData.version}`,
      );
    }

    await createGithubReleaseTag(
      packageName,
      publishedPackage.version,
      context,
      workflowSha,
    );
  }
}

export async function runTagReleaseLocal(
  context: GithubContext,
  publishedPackages: PublishedPackages,
): Promise<void> {
  for (const publishedPackage of publishedPackages.publishedPackages) {
    const packageName = publishedPackage.name;
    await createGithubReleaseTag(
      packageName,
      publishedPackage.version,
      context,
      context.sha,
    );
  }
}

function getDirNameFromPackageName(packageName: string) {
  switch (packageName) {
    case "@osdk/functions":
      return "functions";
    default:
      return packageName.split("/")[1];
  }
}
