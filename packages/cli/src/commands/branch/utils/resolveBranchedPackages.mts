/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { ExitProcessError } from "@osdk/cli.common";
import { findUp } from "find-up";

import { inferSdkCandidates } from "./inferSdkCandidates.js";
import { resolveBranch } from "./resolveBranch.js";
import { selectDistTag } from "./selectDistTag.js";

export interface ResolveDeps {
  getGitBranch: () => Promise<string | undefined>;
  npmDistTags: (pkg: string) => Promise<Record<string, string>>;
  readFile: (p: string) => Promise<string>;
  cwd: string;
}

export interface ResolveArgs {
  packageName?: string;
  branchName?: string;
}

/** A single branched SDK detected for the current branch. */
export interface BranchedPackage {
  /** The package name (an `@<scope>/sdk` dependency). */
  pkg: string;
  /** The concrete version behind the branch dist tag (what `install` pins to). */
  version: string;
  /** The version currently declared in package.json, or `undefined` if absent. */
  current: string | undefined;
}

/**
 * Resolve the Foundry branch whose published SDKs to target: the explicit
 * `--branchName`, else the current git branch. Returns `undefined` on
 * main/master/detached/not-a-repo — i.e. when no branched SDK applies.
 */
export async function resolveFoundryBranch(
  args: ResolveArgs,
  deps: ResolveDeps
): Promise<string | undefined> {
  const gitBranch =
    args.branchName == null ? await deps.getGitBranch() : undefined;
  return resolveBranch(args.branchName, gitBranch);
}

/**
 * Identify every branched SDK and its published version on `branch`.
 *
 * The branched SDKs are whichever `@<scope>/sdk` candidates (or the explicit
 * `--packageName`) publish the branch's `${branch}-latest` npm dist tag. npm has
 * no tag -> package reverse lookup, so each candidate is probed with `npm view`.
 * Returns every matching candidate — empty when the branch has no published SDK
 * yet.
 */
export async function resolveBranchedPackages(
  branch: string,
  args: ResolveArgs,
  deps: ResolveDeps
): Promise<BranchedPackage[]> {
  // Determine candidate SDK packages: an explicit --packageName, else every
  // `@<scope>/sdk` dependency declared in package.json.
  const packageJson = await readPackageJson(deps);
  const candidates =
    args.packageName != null
      ? [args.packageName]
      : inferSdkCandidates(packageJson);
  if (candidates.length === 0) {
    throw new ExitProcessError(
      1,
      "No Foundry SDK dependency (@<scope>/sdk) found in package.json.",
      "Pass --packageName <name> if your SDK uses a different name."
    );
  }

  // Each candidate that publishes the branch's dist tag is a branched SDK.
  const packages: BranchedPackage[] = [];
  for (const candidate of candidates) {
    const branched = await probeBranchedPackage(
      candidate,
      branch,
      packageJson,
      deps
    );
    if (branched != null) packages.push(branched);
  }
  return packages;
}

interface PackageJsonLike {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

/**
 * Probe a single candidate. Returns its branched SDK info if it publishes the
 * branch's dist tag, or `undefined` if it doesn't (or isn't resolvable from the
 * registry). Throws `ExitProcessError` on an npm auth/network failure.
 */
async function probeBranchedPackage(
  candidate: string,
  branch: string,
  packageJson: PackageJsonLike,
  deps: ResolveDeps
): Promise<BranchedPackage | undefined> {
  let tags: Record<string, string>;
  try {
    tags = await deps.npmDistTags(candidate);
  } catch (e) {
    // A 404 just means this package isn't published on the branch registry.
    if (isNotFound(e)) return undefined;
    throw mapNpmViewError(e, candidate);
  }

  const tagName = selectDistTag({ branch, availableTags: Object.keys(tags) });
  if (tagName == null) return undefined;

  const version = tags[tagName];
  if (version == null) return undefined;

  return {
    pkg: candidate,
    version,
    current: readDeclaredVersion(packageJson, candidate),
  };
}

async function readPackageJson(deps: ResolveDeps): Promise<PackageJsonLike> {
  const packageJsonPath = await findUp("package.json", { cwd: deps.cwd });
  if (packageJsonPath == null) {
    throw new ExitProcessError(
      1,
      "Could not find a package.json in the current directory or any parent.",
      "Run osdk unstable branch from within your project."
    );
  }
  try {
    return JSON.parse(await deps.readFile(packageJsonPath)) as PackageJsonLike;
  } catch (e) {
    throw new ExitProcessError(
      1,
      `Could not read ${packageJsonPath}.`,
      "Ensure it is valid JSON.",
      e instanceof Error ? e : undefined
    );
  }
}

function readDeclaredVersion(
  pkgJson: PackageJsonLike,
  name: string
): string | undefined {
  return (
    pkgJson.dependencies?.[name] ??
    pkgJson.devDependencies?.[name] ??
    pkgJson.optionalDependencies?.[name] ??
    pkgJson.peerDependencies?.[name]
  );
}

function isNotFound(e: unknown): boolean {
  const detail = e instanceof Error ? e.message : String(e);
  return /E404|404 Not Found/iu.test(detail);
}

function mapNpmViewError(e: unknown, pkg: string): ExitProcessError {
  const detail = e instanceof Error ? e.message : String(e);
  if (/E401|Unauthorized/iu.test(detail)) {
    return new ExitProcessError(
      1,
      `Not authorized to read ${pkg}.`,
      "Ensure FOUNDRY_TOKEN is set and your .npmrc registry is correct.",
      e instanceof Error ? e : undefined
    );
  }
  return new ExitProcessError(1, `Failed to read dist tags for ${pkg}.`);
}
