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

import { isDeepStrictEqual } from "node:util";

import type { InterfaceSchemaGracePeriod } from "../api/interface/InterfaceSchemaMigrations.js";
import type { SourceCensus } from "./generateOntologySchemaLockfile.js";
import type {
  LockedInterfaceType,
  LockedProperty,
  LockedTransition,
  LockfileSection,
  OntologySchemaLockfile,
} from "./OntologySchemaLockfile.js";
import { describeType, LOCKFILE_SECTIONS } from "./OntologySchemaLockfile.js";

/**
 * A human-readable rendering of what `--write-locks` would change, so an author who has not run it
 * yet can see why their build was rejected without diffing JSON by hand.
 *
 * @param census every entity the source defines, used to tell a deleted entity from one that
 *   opted back out
 */
export function describeLockfileChanges(
  previous: OntologySchemaLockfile,
  next: OntologySchemaLockfile,
  census: SourceCensus,
): string {
  // A table rather than a direct call so that adding a section to the lockfile is a compile error
  // here, rather than a section the rendered diff silently omits.
  const bySection: Record<LockfileSection, () => string[]> = {
    interfaces: () =>
      describeInterfaceSection(
        previous.interfaces,
        next.interfaces,
        census.interfaces,
      ),
  };
  return LOCKFILE_SECTIONS.flatMap((section) => bySection[section]()).join(
    "\n",
  );
}

function describeInterfaceSection(
  previous: Record<string, LockedInterfaceType>,
  next: Record<string, LockedInterfaceType>,
  source: SourceCensus["interfaces"],
): string[] {
  const lines: string[] = [];
  for (const apiName of unionOfKeys(previous, next)) {
    const before = previous[apiName];
    const after = next[apiName];
    if (before === undefined) {
      lines.push(`+ ${apiName} (now opted into schema migrations)`);
      continue;
    }
    if (after === undefined) {
      // Both cases reach here: validation accepts a deleted interface outright, and an opt-out
      // once its in-flight transitions have been read as finalized or deleted. They are very
      // different edits to make by accident, so the line says which one it saw.
      lines.push(
        source.has(apiName)
          ? `- ${apiName} (no longer opted into schema migrations)`
          : `- ${apiName} (interface no longer defined)`,
      );
      continue;
    }
    const changes = describeInterfaceChanges(before, after);
    if (changes.length > 0) {
      lines.push(`${apiName}:`, ...changes.map((change) => `  ${change}`));
    }
  }
  return lines;
}

function describeInterfaceChanges(
  previous: LockedInterfaceType,
  next: LockedInterfaceType,
): string[] {
  return [
    ...describePropertyChanges(previous, next),
    ...describeMigrationChanges(previous, next),
  ];
}

function describePropertyChanges(
  previous: LockedInterfaceType,
  next: LockedInterfaceType,
): string[] {
  const lines: string[] = [];
  for (const apiName of unionOfKeys(
    previous.schema.properties,
    next.schema.properties,
  )) {
    const before = previous.schema.properties[apiName];
    const after = next.schema.properties[apiName];
    if (before === undefined) {
      lines.push(`+ property "${apiName}" ${describeProperty(after)}`);
    } else if (after === undefined) {
      lines.push(`- property "${apiName}"`);
    } else if (!isDeepStrictEqual(before.type, after.type)) {
      lines.push(
        `~ property "${apiName}" type ${describeType(before.type)} -> ${describeType(after.type)}`,
      );
    } else if (before.required !== after.required) {
      lines.push(
        `~ property "${apiName}" required ${before.required} -> ${after.required}`,
      );
    }
  }
  return lines;
}

function describeMigrationChanges(
  previous: LockedInterfaceType,
  next: LockedInterfaceType,
): string[] {
  const before = byId(previous.transitions);
  const after = byId(next.transitions);
  const lines: string[] = [];
  for (const id of unionOfKeys(before, after)) {
    const previousTransition = before[id];
    const nextTransition = after[id];
    if (previousTransition === undefined) {
      lines.push(`+ migration "${id}"`);
    } else if (nextTransition === undefined) {
      lines.push(`- migration "${id}"`);
    } else if (
      !isDeepStrictEqual(
        previousTransition.gracePeriod,
        nextTransition.gracePeriod,
      )
    ) {
      lines.push(
        `~ migration "${id}" grace period ${describeGracePeriod(
          previousTransition.gracePeriod,
        )} -> ${describeGracePeriod(nextTransition.gracePeriod)}`,
      );
    } else if (!isDeepStrictEqual(previousTransition, nextTransition)) {
      lines.push(`~ migration "${id}"`);
    }
  }
  return lines;
}

function describeProperty(property: LockedProperty): string {
  return `(${describeType(property.type)}, required: ${property.required})`;
}

function describeGracePeriod(gracePeriod: InterfaceSchemaGracePeriod): string {
  return gracePeriod.type === "afterInstall"
    ? `${gracePeriod.days} days after install`
    : gracePeriod.deadline;
}

function byId(
  transitions: LockedTransition[],
): Record<string, LockedTransition> {
  return Object.fromEntries(
    transitions.map((transition) => [transition.id, transition]),
  );
}

function unionOfKeys(
  a: Record<string, unknown>,
  b: Record<string, unknown>,
): string[] {
  return [...new Set([...Object.keys(a), ...Object.keys(b)])].sort();
}
