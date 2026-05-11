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

import { getPackages } from "@manypkg/get-packages";
import { consola } from "consola";
import { execa } from "execa";
import { readFile } from "node:fs/promises";
import { basename, dirname, join, resolve } from "node:path";
import yargs from "yargs";
import { findUnreleasablePackagesFromList } from "./findUnreleasablePackages.js";

type OffenseKind = "new-package-in-pr" | "no-npm-versions";

interface Offense {
  name: string;
  kind: OffenseKind;
  file?: string;
}

function emitGithubError(message: string, file?: string): void {
  const fileArg = file ? `file=${file}::` : "";
  process.stdout.write(`::error ${fileArg}${message}\n`);
}

function messageForOffense(offense: Offense): string {
  if (offense.kind === "new-package-in-pr") {
    return `New public package ${offense.name} cannot be merged: it has no `
      + `versions on npm. Talk to the OSDK release team to manually publish a `
      + `placeholder version and configure trusted publishing before merging `
      + `this PR.`;
  }
  return `Package ${offense.name} exists in the repo but has never been `
    + `published to npm, so the release pipeline cannot ship changes that `
    + `bump it. A maintainer must manually publish a placeholder version and `
    + `configure trusted publishing.`;
}

async function findNewlyAddedNonPrivatePackages(
  cwd: string,
  base: string,
  workspacePackageDirs: Set<string>,
): Promise<Offense[]> {
  const { stdout } = await execa(
    "git",
    ["diff", "--name-only", "--diff-filter=A", `${base}...HEAD`],
    { cwd },
  );
  const addedFiles = stdout.split("\n").filter((line) =>
    basename(line) === "package.json"
  );

  const offenses: Offense[] = [];
  for (const relPath of addedFiles) {
    const absPath = join(cwd, relPath);
    const absDir = resolve(dirname(absPath));
    if (!workspacePackageDirs.has(absDir)) {
      continue;
    }
    let parsed: { name?: string; private?: boolean };
    try {
      parsed = JSON.parse(await readFile(absPath, "utf-8"));
    } catch (e) {
      if (e instanceof SyntaxError) {
        consola.warn(`Skipping unparseable package.json at ${relPath}`);
        continue;
      }
      throw e;
    }
    if (parsed.private) {
      continue;
    }
    if (!parsed.name) {
      continue;
    }
    offenses.push({
      kind: "new-package-in-pr",
      name: parsed.name,
      file: relPath,
    });
  }
  return offenses;
}

function dedupeOffenses(offenses: Offense[]): Offense[] {
  const byName = new Map<string, Offense>();
  for (const offense of offenses) {
    const existing = byName.get(offense.name);
    if (!existing || offense.kind === "new-package-in-pr") {
      byName.set(offense.name, offense);
    }
  }
  return [...byName.values()];
}

async function main(): Promise<void> {
  const args = await yargs(process.argv.slice(2))
    .options({
      base: {
        type: "string",
        default: "origin/main",
        description: "Base git ref to diff against",
      },
      cwd: {
        type: "string",
        description: "Working directory (defaults to process.cwd())",
      },
    })
    .parseAsync();

  const cwd = args.cwd ?? process.cwd();
  const { packages } = await getPackages(cwd);
  const workspacePackageDirs = new Set(packages.map((p) => resolve(p.dir)));

  const [newPkgOffenses, unreleasable] = await Promise.all([
    findNewlyAddedNonPrivatePackages(cwd, args.base, workspacePackageDirs),
    findUnreleasablePackagesFromList(packages),
  ]);

  const offenses = dedupeOffenses([
    ...newPkgOffenses,
    ...unreleasable.map((pkg): Offense => ({
      kind: "no-npm-versions",
      name: pkg.name,
    })),
  ]);

  if (offenses.length === 0) {
    consola.success("No unreleasable packages detected");
    return;
  }

  for (const offense of offenses) {
    const message = messageForOffense(offense);
    emitGithubError(message, offense.file);
    consola.error(message);
  }

  process.exit(1);
}

main().catch((err: unknown) => {
  consola.error(err);
  process.exit(1);
});
