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

import consola from "consola";
import { execa } from "execa";
import { readFile } from "fs/promises";
import path from "path";
import semver from "semver";

interface PackageInfo {
  name: string;
  version: string;
}

interface ReleaseTagOptions {
  preRelease: boolean;
  releaseBranch?: string;
}

export async function getPackagesToPublish(): Promise<PackageInfo[]> {
  const result = await execa("pnpm", [
    "publish",
    "--dry-run",
    "--json",
    "--no-git-checks",
    "-r",
  ]);
  const packagesJson = JSON.parse(result.stdout);

  return packagesJson
    .filter((pkg: any) => pkg.operation === "publish")
    .map((pkg: any) => ({
      name: pkg.name,
      version: pkg.version,
    }));
}

export async function getPreReleaseInfo(): Promise<
  { mode: string; tag: string } | null
> {
  const rootDir = process.cwd();
  const preJsonPath = path.join(rootDir, ".changeset/pre.json");

  try {
    const preJson = JSON.parse(await readFile(preJsonPath, "utf-8"));
    if (preJson.mode === "pre") {
      return {
        mode: preJson.mode,
        tag: preJson.tag,
      };
    }
    return null;
  } catch (error) {
    return null;
  }
}

export async function getHighestPublishedVersion(
  packageName: string,
): Promise<string | null> {
  try {
    const { stdout } = await execa("npm", [
      "view",
      packageName,
      "versions",
      "--json",
    ]);
    const versions = JSON.parse(stdout);

    const stableVersions = versions.filter((version: string) =>
      !semver.prerelease(version)
    );

    if (stableVersions.length === 0) {
      return null;
    }

    return semver.sort(stableVersions).pop() as string;
  } catch (error) {
    consola.warn(
      `Failed to get published versions for ${packageName}: ${error}`,
    );
    return null;
  }
}

export async function determinePublishTag(
  packageInfo: PackageInfo,
  preReleaseInfo: { mode: string; tag: string } | null,
  releaseBranch?: string,
): Promise<string> {
  let tag = "latest";

  if (preReleaseInfo) {
    tag = preReleaseInfo.tag;
  } else {
    const highestVersion = await getHighestPublishedVersion(packageInfo.name);

    if (highestVersion) {
      if (semver.prerelease(packageInfo.version)) {
        tag = "next";
      } else if (!semver.satisfies(packageInfo.version, `~${highestVersion}`)) {
        consola.info(
          `Version ${packageInfo.version} is not in patch range of highest published version ${highestVersion}`,
        );
        consola.info(`Using "next" tag instead of "latest"`);
        tag = "next";
      } else {
        consola.success(
          `Version ${packageInfo.version} is in patch range of highest published version ${highestVersion}`,
        );
        consola.success(`Using "latest" tag`);
      }
    }
  }

  if (releaseBranch && releaseBranch.startsWith("release/")) {
    const branchVersion = releaseBranch.substring("release/".length);
    tag = `${tag}-${branchVersion}`;
  }

  return tag;
}

async function runPublishCommand(tag: string): Promise<void> {
  consola.info(`Publishing with tag: ${tag}`);

  try {
    consola.start("Running prePublish...");
    await execa("pnpm", ["run", "prePublish"], { stdio: "inherit" });

    consola.start("Running publish...");
    await execa(
      "pnpm",
      ["publish", "--no-git-checks", "-r", "--report-summary", "--tag", tag],
      { stdio: "inherit" },
    );

    consola.success("Publish completed successfully");
  } catch (error) {
    consola.error("Failed to publish:", error);
    process.exit(1);
  }
}

export async function calculateAndPublish(): Promise<void> {
  const packages = await getPackagesToPublish();

  if (packages.length === 0) {
    consola.info("No packages to publish");
    return;
  }

  consola.info(`Found ${packages.length} packages to publish`);

  const preReleaseInfo = await getPreReleaseInfo();

  const { stdout: currentBranch } = await execa("git", [
    "rev-parse",
    "--abbrev-ref",
    "HEAD",
  ]);
  const releaseBranch = currentBranch.startsWith("release/")
    ? currentBranch
    : undefined;

  // Find the @osdk/client package or use the first package as fallback
  const clientPackage = packages.find(pkg => pkg.name === "@osdk/client");
  const tagPackage = clientPackage || packages[0];

  if (!clientPackage) {
    consola.warn(
      "@osdk/client package not found, using first package for tag determination",
    );
  } else {
    consola.info(
      `Using @osdk/client@${clientPackage.version} for tag determination`,
    );
  }

  if (!tagPackage) {
    consola.error("No packages available for tag determination");
    process.exit(1);
  }

  // Only calculate tag for the @osdk/client package (or fallback)
  const tag = await determinePublishTag(
    tagPackage,
    preReleaseInfo,
    releaseBranch,
  );
  consola.info(
    `Determined publish tag: ${tag} based on ${tagPackage.name}@${tagPackage.version}`,
  );

  // Log all packages that will be published with the determined tag
  packages.forEach(({ name, version }) => {
    consola.info(`${name}@${version} will be published with tag: ${tag}`);
  });

  await runPublishCommand(tag);
}

if (require.main === module) {
  (async () => {
    await calculateAndPublish();
  })().catch((err: unknown) => {
    consola.error(err);
    process.exit(1);
  });
}
