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
import { describeType } from "./LockedPropertyType.js";
import type {
  LockedInterfaceType,
  LockedProperty,
  LockedTransition,
  LockfileSection,
  OntologySchemaLockfile,
} from "./OntologySchemaLockfile.js";
import { LOCKFILE_SECTIONS } from "./OntologySchemaLockfile.js";

/**
 * A human-readable rendering of what `--write-locks` would change, so an author who has not run it
 * yet can see why their build was rejected without diffing JSON by hand.
 */
export function describeLockfileChanges(
  previous: OntologySchemaLockfile,
  next: OntologySchemaLockfile,
  census: SourceCensus,
): string {
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
  previousInterfaces: Record<string, LockedInterfaceType>,
  nextInterfaces: Record<string, LockedInterfaceType>,
  census: SourceCensus["interfaces"],
): string[] {
  const lines: string[] = [];
  for (const interfaceApiName of unionOfKeys(
    previousInterfaces,
    nextInterfaces,
  )) {
    const previous = previousInterfaces[interfaceApiName];
    if (previous === undefined) {
      lines.push(`+ ${interfaceApiName} (now opted into schema migrations)`);
      continue;
    }

    const next = nextInterfaces[interfaceApiName];
    if (next === undefined) {
      // Both cases reach here: validation accepts a deleted interface outright, and an opt-out
      // once its in-flight transitions have been read as finalized or deleted. They are very
      // different edits to make by accident, so the line says which one it saw.
      lines.push(
        census.has(interfaceApiName)
          ? `- ${interfaceApiName} (no longer opted into schema migrations)`
          : `- ${interfaceApiName} (interface no longer defined)`,
      );
      continue;
    }

    const changes = describeInterfaceChanges(previous, next);
    if (changes.length > 0) {
      lines.push(
        `${interfaceApiName}:`,
        ...changes.map((change) => `  ${change}`),
      );
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
  previousInterface: LockedInterfaceType,
  nextInterface: LockedInterfaceType,
): string[] {
  const lines: string[] = [];
  for (const propertyApiName of unionOfKeys(
    previousInterface.schema.properties,
    nextInterface.schema.properties,
  )) {
    const previousProperty =
      previousInterface.schema.properties[propertyApiName];
    const nextProperty = nextInterface.schema.properties[propertyApiName];
    if (previousProperty === undefined) {
      lines.push(
        `+ property "${propertyApiName}" ${describeProperty(nextProperty)}`,
      );
    } else if (nextProperty === undefined) {
      lines.push(`- property "${propertyApiName}"`);
    } else if (!isDeepStrictEqual(previousProperty.type, nextProperty.type)) {
      lines.push(
        `~ property "${propertyApiName}" type ${describeType(previousProperty.type)} -> ${describeType(nextProperty.type)}`,
      );
    } else if (previousProperty.required !== nextProperty.required) {
      lines.push(
        `~ property "${propertyApiName}" required ${previousProperty.required} -> ${nextProperty.required}`,
      );
    }
  }
  return lines;
}

function describeMigrationChanges(
  previousInterface: LockedInterfaceType,
  nextInterface: LockedInterfaceType,
): string[] {
  const previousTransitionsById = byId(previousInterface.transitions);
  const nextTransitionsById = byId(nextInterface.transitions);
  const lines: string[] = [];
  for (const transitionId of unionOfKeys(
    previousTransitionsById,
    nextTransitionsById,
  )) {
    const previousTransition = previousTransitionsById[transitionId];
    const nextTransition = nextTransitionsById[transitionId];
    if (previousTransition === undefined) {
      lines.push(`+ migration "${transitionId}"`);
    } else if (nextTransition === undefined) {
      lines.push(`- migration "${transitionId}"`);
    } else if (
      !isDeepStrictEqual(
        previousTransition.gracePeriod,
        nextTransition.gracePeriod,
      )
    ) {
      lines.push(
        `~ migration "${transitionId}" grace period ${describeGracePeriod(
          previousTransition.gracePeriod,
        )} -> ${describeGracePeriod(nextTransition.gracePeriod)}`,
      );
    } else if (!isDeepStrictEqual(previousTransition, nextTransition)) {
      lines.push(`~ migration "${transitionId}"`);
    }
  }
  return lines;
}

function describeProperty(property: LockedProperty): string {
  return `(${describeType(property.type)}, required: ${property.required})`;
}

function describeGracePeriod(gracePeriod: InterfaceSchemaGracePeriod): string {
  switch (gracePeriod.type) {
    case "afterInstall":
      return `${gracePeriod.days} days after install`;
    case "deadline":
      return gracePeriod.deadline;
    default: {
      const unhandled: never = gracePeriod;
      throw new Error(
        `Unknown schema migration grace period type: ${
          (unhandled as InterfaceSchemaGracePeriod).type
        }`,
      );
    }
  }
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
