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

import {
  isKnownGracePeriodType,
  isKnownInstructionType,
} from "./knownSchemaMigrationTypes.js";
import type {
  LockedInterfaceType,
  LockedProperty,
  LockedTransition,
  OntologySchemaLockfile,
} from "./OntologySchemaLockfile.js";
import { ONTOLOGY_SCHEMA_LOCKFILE_VERSION } from "./OntologySchemaLockfile.js";

/** Rewrites a lockfile written by the version it is keyed under into the next version's shape. */
type LockfileUpgrader = (lockfile: OldLockfile) => OldLockfile;

/** A lockfile mid-upgrade: known to have a version, not yet known to have anything else. */
type OldLockfile = { version: number } & Record<string, unknown>;

/**
 * Upgraders keyed by the version they read, applied in ascending order until the lockfile reaches
 * {@link ONTOLOGY_SCHEMA_LOCKFILE_VERSION}.
 *
 * Empty while there is only one version, which is exactly when it is cheap to put in place. Without
 * it, bumping the version would leave authors one recovery: delete the lockfile, which regenerates
 * a fresh baseline from source and silently absorbs every breaking change accumulated since.
 */
const UPGRADERS: Readonly<Record<number, LockfileUpgrader>> = {};

/**
 * Lockfiles are checked in and therefore hand-editable, so a malformed one has to produce a better
 * message than a downstream `TypeError`.
 */
export function parseLockfile(
  contents: string,
  lockfilePath: string,
): OntologySchemaLockfile {
  let parsed: unknown;
  try {
    parsed = JSON.parse(contents);
  } catch (e) {
    throw new Error(
      `${lockfilePath} is not valid JSON: ${(e as Error).message}`,
      { cause: e },
    );
  }

  const versioned = requireVersion(parsed, lockfilePath);
  const upgraded = upgradeLockfile(
    versioned,
    ONTOLOGY_SCHEMA_LOCKFILE_VERSION,
    UPGRADERS,
    lockfilePath,
  );
  return validateStructure(upgraded, lockfilePath);
}

function requireVersion(parsed: unknown, lockfilePath: string): OldLockfile {
  const version = (parsed as Partial<OntologySchemaLockfile> | undefined)
    ?.version;
  if (typeof version !== "number" || !Number.isInteger(version)) {
    throw new Error(
      `${lockfilePath} is not an interface schema lockfile: expected an integer "version" key.`,
    );
  }
  if (version > ONTOLOGY_SCHEMA_LOCKFILE_VERSION) {
    throw new Error(
      `${lockfilePath} has version ${version}, but this version of maker only understands ` +
        `version ${ONTOLOGY_SCHEMA_LOCKFILE_VERSION}. Upgrade @osdk/maker.`,
    );
  }
  return parsed as OldLockfile;
}

/**
 * Brings an older lockfile up to `targetVersion` by applying each intervening upgrader in turn.
 *
 * `upgraders` is a parameter rather than a module reference so the chain stays testable while it
 * is still empty.
 *
 * @internal
 */
export function upgradeLockfile(
  lockfile: OldLockfile,
  targetVersion: number,
  upgraders: Readonly<Record<number, LockfileUpgrader>>,
  lockfilePath: string,
): OldLockfile {
  let upgraded = lockfile;
  while (upgraded.version < targetVersion) {
    const upgrade = upgraders[upgraded.version];
    if (upgrade === undefined) {
      throw new Error(
        `${lockfilePath} has version ${upgraded.version}, which this version of maker cannot ` +
          `upgrade to version ${targetVersion}. Delete the lockfile and re-derive it from the ` +
          `last published ontology, rather than from your working copy.`,
      );
    }
    const next = upgrade(upgraded);
    /* c8 ignore next 6 -- guards against a mis-written upgrader looping forever */
    if (next.version <= upgraded.version) {
      throw new Error(
        `The lockfile upgrader for version ${upgraded.version} did not advance the version.`,
      );
    }
    upgraded = next;
  }
  return upgraded;
}

/**
 * Rejects the shapes the rest of the module would otherwise misread, or crash on. Everything
 * downstream treats a parsed lockfile as well-formed, so anything it dereferences without a guard
 * — a property's `type` and `required`, a transition's `gracePeriod` — has to be checked here.
 *
 * The checks are deliberately structural rather than semantic: a transition's grace period must
 * name a kind maker understands, but need not be one the DSL would accept today, since the
 * lockfile records what a *previous* release published.
 */
function validateStructure(
  lockfile: OldLockfile,
  lockfilePath: string,
): OntologySchemaLockfile {
  const { interfaces } = lockfile;
  if (typeof interfaces !== "object" || interfaces == null) {
    throw new Error(
      `${lockfilePath} is not an interface schema lockfile: expected an object with an "interfaces" key.`,
    );
  }
  for (const [apiName, interfaceType] of Object.entries(
    interfaces as Record<string, LockedInterfaceType>,
  )) {
    validateInterface(apiName, interfaceType, lockfilePath);
  }
  return lockfile as unknown as OntologySchemaLockfile;
}

function validateInterface(
  apiName: string,
  interfaceType: LockedInterfaceType,
  lockfilePath: string,
): void {
  const where = `${lockfilePath}: interface ${apiName}`;
  if (!isObject(interfaceType?.schema?.properties)) {
    throw new Error(`${where} is missing \`schema.properties\`.`);
  }
  for (const [property, locked] of Object.entries(
    interfaceType.schema.properties,
  )) {
    validateProperty(where, property, locked);
  }
  if (!Array.isArray(interfaceType.transitions)) {
    throw new Error(`${where} is missing \`transitions\`.`);
  }
  for (const transition of interfaceType.transitions) {
    validateTransition(where, transition, lockfilePath);
  }
}

/**
 * `required` must be a boolean rather than merely present: the schema diff tests it for
 * truthiness, so the string `"false"` would otherwise read as required.
 */
function validateProperty(
  where: string,
  property: string,
  locked: LockedProperty,
): void {
  if (locked?.type == null) {
    throw new Error(`${where}: property "${property}" is missing \`type\`.`);
  }
  if (typeof locked.required !== "boolean") {
    throw new Error(
      `${where}: property "${property}" must declare \`required\` as a boolean, but declares ` +
        `${JSON.stringify(locked.required)}.`,
    );
  }
}

function validateTransition(
  where: string,
  transition: LockedTransition,
  lockfilePath: string,
): void {
  if (typeof transition?.id !== "string" || transition.id.length === 0) {
    throw new Error(`${where} records a schema migration with no id.`);
  }
  if (!isKnownGracePeriodType(transition.gracePeriod?.type)) {
    throw new Error(
      `${where}: schema migration "${transition.id}" has a grace period of unknown type ` +
        `"${transition.gracePeriod?.type}". Restore the grace period the last published release ` +
        `declared.`,
    );
  }
  // The bar is whatever `Date.parse` accepts, not the canonical ISO-8601 UTC datetime the DSL
  // insists on: this deadline is whatever a previous release published, and maker only ever reads
  // it back as an instant. A value `Date.parse` rejects would otherwise survive parsing and
  // surface as a silent NaN comparison, far from the file that caused it.
  const { gracePeriod } = transition;
  if (gracePeriod.type === "deadline") {
    const { deadline } = gracePeriod;
    if (typeof deadline !== "string" || Number.isNaN(Date.parse(deadline))) {
      throw new Error(
        `${where}: schema migration "${transition.id}" has a 'deadline' grace period of ` +
          `${JSON.stringify(deadline)}, which is not a valid datetime. Restore the deadline the ` +
          `last published release declared, as an ISO-8601 UTC datetime (e.g. ` +
          `"2026-01-31T00:00:00Z").`,
      );
    }
  }
  if (
    !Array.isArray(transition.instructions) ||
    transition.instructions.length === 0
  ) {
    throw new Error(
      `${where}: schema migration "${transition.id}" has no instructions. A migration that ` +
        `instructs nothing cannot be finalized or deleted; remove it from ${lockfilePath}, or ` +
        `restore the instructions the last published release declared.`,
    );
  }
  for (const instruction of transition.instructions) {
    if (!isKnownInstructionType(instruction?.type)) {
      throw new Error(
        `${where}: schema migration "${transition.id}" has an instruction of unknown type ` +
          `"${instruction?.type}".`,
      );
    }
  }
}

/** `typeof null === "object"`, so a bare `typeof` check would admit `null` here. */
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
