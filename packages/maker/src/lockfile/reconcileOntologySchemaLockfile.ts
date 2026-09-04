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

import * as fs from "node:fs/promises";
import { isDeepStrictEqual } from "node:util";

import { consola } from "consola";

import type { OntologyDefinition } from "../api/common/OntologyDefinition.js";
import { describeLockfileChanges } from "./describeLockfileChanges.js";
import { describeFinding } from "./describeLockfileFinding.js";
import type { SourceCensus } from "./generateOntologySchemaLockfile.js";
import {
  censusOfSource,
  generateOntologySchemaLockfile,
} from "./generateOntologySchemaLockfile.js";
import type { OntologySchemaLockfile } from "./OntologySchemaLockfile.js";
import {
  isEmptyLockfile,
  lockedEntityCount,
  serializeLockfile,
} from "./OntologySchemaLockfile.js";
import { parseLockfile } from "./parseOntologySchemaLockfile.js";
import type {
  DetectedCheckpoint,
  LockfileFinding,
} from "./validateOntologySchemaLockfile.js";
import { validateOntologySchemaLockfile } from "./validateOntologySchemaLockfile.js";

export interface ReconcileOntologySchemaLockfileOptions {
  ontology: OntologyDefinition;
  /** Absolute path to the lockfile, whether or not it exists yet. */
  lockfilePath: string;
  /** Whether the author asked us to bring the lockfile up to date, rather than just check it. */
  writeLocks: boolean;
  /** Skip the confirmation prompt for detected finalizations and deletions. */
  assumeYes: boolean;
}

/**
 * Checks the ontology's interface schema migrations against the persisted lockfile and, when
 * `writeLocks` is set, brings the lockfile up to date.
 *
 * Throws if the source contains a change that OMS would reject at installation-time, or if the
 * lockfile is out of date and `writeLocks` was not passed. Callers must run this before writing
 * `ontology.json` so a rejected ontology never produces an artifact.
 */
export async function reconcileOntologySchemaLockfile(
  options: ReconcileOntologySchemaLockfileOptions,
): Promise<void> {
  const { ontology, lockfilePath, writeLocks, assumeYes } = options;

  const expected = generateOntologySchemaLockfile(ontology);
  const census = censusOfSource(ontology);
  const persistedContents = await readIfExists(lockfilePath);

  if (persistedContents === undefined) {
    await reconcileMissingLockfile(expected, lockfilePath, writeLocks);
    return;
  }

  const persisted = parseLockfile(persistedContents, lockfilePath);
  const { findings, checkpoints } = validateOntologySchemaLockfile(
    persisted,
    expected,
    census,
  );
  if (findings.length > 0) {
    throw new Error(formatFindings(findings, lockfilePath));
  }

  if (!writeLocks) {
    if (!isDeepStrictEqual(persisted, expected)) {
      throw new Error(
        `Ontology schema lockfile ${lockfilePath} is out of date. The changes below are backwards-` +
          `compatible, but the lockfile must record them before the ontology can be published. ` +
          `Run maker again with --write-locks.\n\n` +
          describeChanges(persisted, expected, census),
      );
    }
    consola.success(`Ontology schema lockfile ${lockfilePath} is up to date`);
    return;
  }

  if (
    checkpoints.length > 0 &&
    !(await confirmCheckpoints(checkpoints, assumeYes))
  ) {
    throw new Error(
      `Aborted: ${lockfilePath} was not updated, and no ontology was written.`,
    );
  }

  await writeLockfile(lockfilePath, expected, persistedContents);
}

async function reconcileMissingLockfile(
  expected: OntologySchemaLockfile,
  lockfilePath: string,
  writeLocks: boolean,
): Promise<void> {
  if (isEmptyLockfile(expected)) {
    // Nothing has opted into schema migrations, so there is no baseline worth recording. Creating
    // an empty lockfile here would force it on every consumer of maker.
    return;
  }

  if (!writeLocks) {
    const count = lockedEntityCount(expected);
    throw new Error(
      `${count} ontology ${count === 1 ? "entity is" : "entities are"} opted into schema ` +
        `migrations, but there is no lockfile at ${lockfilePath} to check them against. Run maker ` +
        `again with --write-locks to create it, and commit the result.`,
    );
  }

  await writeLockfile(lockfilePath, expected, undefined);
}

async function confirmCheckpoints(
  checkpoints: DetectedCheckpoint[],
  assumeYes: boolean,
): Promise<boolean> {
  consola.warn(
    `Detected interface schema migration finalizations/deletions:\n${formatCheckpoints(
      checkpoints,
    )}`,
  );
  if (assumeYes) {
    return true;
  }

  if (!process.stdin.isTTY) {
    throw new Error(
      "Detected interface schema migration finalizations/deletions, but maker is not attached to a " +
        "terminal and cannot prompt. Re-run with --yes to accept them.",
    );
  }

  return await consola.prompt("Accept?", { type: "confirm" });
}

function formatCheckpoints(checkpoints: DetectedCheckpoint[]): string {
  const lines: string[] = [];
  let currentInterfaceApiName: string | undefined;
  for (const checkpoint of checkpoints) {
    if (checkpoint.interfaceApiName !== currentInterfaceApiName) {
      currentInterfaceApiName = checkpoint.interfaceApiName;
      lines.push(`${currentInterfaceApiName}:`);
    }

    const verb = checkpoint.kind === "finalized" ? "FINALIZE" : "DELETE";
    lines.push(`  ${verb} ${checkpoint.transitionId}`);
  }
  return lines.join("\n");
}

function formatFindings(
  findings: LockfileFinding[],
  lockfilePath: string,
): string {
  return (
    `Interface schema migrations are not backwards compatible with ${lockfilePath}:\n\n` +
    findings.map((finding) => `- ${describeFinding(finding)}`).join("\n\n")
  );
}

/**
 * `describeLockfileChanges` only renders the fields it knows about, so a lockfile that differs in
 * some other way — a hand-added key inside a property, say — is unequal but describes as nothing.
 * An "out of date" error with an empty body would leave the author with nowhere to start.
 */
function describeChanges(
  persisted: OntologySchemaLockfile,
  expected: OntologySchemaLockfile,
  census: SourceCensus,
): string {
  const described = describeLockfileChanges(persisted, expected, census);
  return described.length > 0
    ? described
    : "The lockfile differs structurally from the one generated for this ontology, in a way this " +
        "diff cannot summarize. A hand-edit is the likely cause. Revert any manual changes, or delete " +
        "the lockfile and regenerate it.";
}

async function writeLockfile(
  lockfilePath: string,
  lockfile: OntologySchemaLockfile,
  existingContents: string | undefined,
): Promise<void> {
  const serialized = serializeLockfile(lockfile);
  if (serialized === existingContents) {
    consola.success(`Ontology schema lockfile ${lockfilePath} is up to date`);
    return;
  }

  await fs.writeFile(lockfilePath, serialized);
  consola.success(`Wrote ontology schema lockfile ${lockfilePath}`);
}

async function readIfExists(path: string): Promise<string | undefined> {
  try {
    return await fs.readFile(path, "utf-8");
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") {
      return undefined;
    }
    throw e;
  }
}
