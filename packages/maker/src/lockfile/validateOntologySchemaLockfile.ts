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

import type { InterfaceSchemaMigrationInstruction } from "../api/interface/InterfaceSchemaMigrations.js";
import type { AppliedTransition } from "./applyInterfaceSchemaTransition.js";
import {
  applyTransition,
  schemasAgreeOn,
  targetPropertiesOf,
} from "./applyInterfaceSchemaTransition.js";
import type { SourceCensus } from "./generateOntologySchemaLockfile.js";
import type { LockedPropertyType } from "./normalizePropertyType.js";
import type {
  LockedInterfaceSchema,
  LockedInterfaceType,
  LockedProperty,
  LockedTransition,
  OntologySchemaLockfile,
} from "./OntologySchemaLockfile.js";

/**
 * NOTE ON CONVENTION: the rest of maker validates with `invariant`, failing on the first problem.
 * This module instead accumulates findings and lets its caller throw one aggregate. An author
 * fixing a batch of breaking changes wants to see all of them, not to discover them one build at
 * a time.
 */

/**
 * A transition that the source no longer declares, along with what its disappearance meant.
 *
 * Checkpoints are events rather than declared entities: a finalization is simply a release in which a
 * transition disappeared and its effects landed in the schema, so there is nothing to record
 * beyond the new schema itself.
 */
export interface DetectedCheckpoint {
  interfaceApiName: string;
  transitionId: string;
  kind: "finalized" | "deleted";
}

/** A property a transition targets, as the lockfile records it and as the source now declares it. */
export interface TargetPropertyState {
  propertyApiName: string;
  previous: LockedProperty | undefined;
  next: LockedProperty | undefined;
}

/**
 * A change OMS would reject at installation-time, in machine-readable form.
 */
export type LockfileFinding =
  /**
   * A transition vanished from the source, but neither finalizing nor deleting it reproduces the
   * new schema, so there is no way to read what the author meant.
   */
  | {
      code: "ambiguousDisappearance";
      interfaceApiName: string;
      transitionId: string;
      targets: readonly TargetPropertyState[];
      /** What the vanished transition instructed, as the lockfile recorded it. */
      instructions: readonly InterfaceSchemaMigrationInstruction[];
    }
  | {
      code: "instructionsChanged";
      interfaceApiName: string;
      transitionId: string;
      previousInstructions: readonly InterfaceSchemaMigrationInstruction[];
      nextInstructions: readonly InterfaceSchemaMigrationInstruction[];
    }
  | { code: "propertyRemoved"; interfaceApiName: string; property: string }
  | {
      code: "propertyTypeChanged";
      interfaceApiName: string;
      property: string;
      previousType: LockedPropertyType;
      nextType: LockedPropertyType;
    }
  | {
      code: "propertyBecameRequired";
      interfaceApiName: string;
      property: string;
    }
  | {
      code: "requiredPropertyAdded";
      interfaceApiName: string;
      property: string;
    };

export interface LockfileValidationResult {
  /**
   * Changes the author must resolve before the ontology can be published. Every entry is a change
   * that OMS would reject at installation-time.
   */
  findings: LockfileFinding[];
  /** Finalizations and deletions inferred from the diff, in lockfile order. */
  checkpoints: DetectedCheckpoint[];
}

/**
 * `record`'s own value for `key`, or `undefined`.
 *
 * A persisted lockfile arrives from `JSON.parse`, so its records still inherit from
 * `Object.prototype`. A bare index read for an api name like `toString` or `constructor` would
 * find the inherited function instead of `undefined`, and the diff would then report nonsense
 * about an entry that is not there.
 */
function own<T>(record: Record<string, T>, key: string): T | undefined {
  return Object.hasOwn(record, key) ? record[key] : undefined;
}

/**
 * Diffs a newly-generated lockfile against the persisted one, reporting any change that OMS would
 * reject when the resulting artifact is installed.
 *
 * @param previous the persisted lockfile, i.e. the last published state
 * @param next the lockfile generated from the current source
 * @param census every entity the source declares, enrolled or not, with the schema it declares now.
 * An entity's absence from this distinguishes removing it, which needs no accounting at all, from
 * opting it out of schema migrations, which must still say what became of its in-flight
 * transitions. The recorded schemas are what an opted-out entity is read against, since opting out
 * drops it from the generated lockfile.
 */
export function validateOntologySchemaLockfile(
  previous: OntologySchemaLockfile,
  next: OntologySchemaLockfile,
  census: SourceCensus,
): LockfileValidationResult {
  const findings: LockfileFinding[] = [];
  const checkpoints: DetectedCheckpoint[] = [];

  for (const [interfaceApiName, previousInterface] of Object.entries(
    previous.interfaces,
  )) {
    const nextInterface =
      own(next.interfaces, interfaceApiName) ??
      asOptedOut(interfaceApiName, census);

    // The source declares no such interface any more. Removing one takes with it every promise its
    // transitions made, since nothing is left to reference it or to be broken by it, so there is no
    // checkpoint to record and no schema to diff.
    if (nextInterface === undefined) {
      continue;
    }

    validateInterface(
      interfaceApiName,
      previousInterface,
      nextInterface,
      findings,
      checkpoints,
    );
  }

  return { findings, checkpoints };
}

/**
 * What an interface that dropped its `schemaMigrations` block still amounts to: the schema the
 * source declares, with no transitions left. `undefined` if the source no longer declares it.
 *
 * Opting out ends maker's checking of the interface from the next release on, but not this one. The
 * interface is still published, so whether each in-flight transition landed or was abandoned is
 * still a real difference in the artifact, and reading that is exactly the work of every transition
 * disappearing at once.
 */
function asOptedOut(
  interfaceApiName: string,
  census: SourceCensus,
): LockedInterfaceType | undefined {
  const schema = census.interfaces.get(interfaceApiName);
  return schema === undefined ? undefined : { schema, transitions: [] };
}

function validateInterface(
  interfaceApiName: string,
  previous: LockedInterfaceType,
  next: LockedInterfaceType,
  findings: LockfileFinding[],
  checkpoints: DetectedCheckpoint[],
): void {
  const nextTransitions = new Map(
    next.transitions.map((transition) => [transition.id, transition]),
  );

  // Properties whose change is already explained by a finalization or deletion, and so must be
  // exempt from the general breaking-change checks below.
  const propertiesAccountedFor = new Set<string>();

  for (const previousTransition of previous.transitions) {
    const nextTransition = nextTransitions.get(previousTransition.id);
    if (nextTransition === undefined) {
      const disappearance = classifyDisappearance(
        previousTransition,
        previous.schema,
        next.schema,
      );
      if (disappearance.kind === "ambiguous") {
        findings.push({
          code: "ambiguousDisappearance",
          interfaceApiName,
          transitionId: previousTransition.id,
          targets: disappearance.targets,
          instructions: previousTransition.instructions,
        });
      } else {
        checkpoints.push({
          interfaceApiName,
          transitionId: previousTransition.id,
          kind: disappearance.kind,
        });
      }

      // Whether the disappearance was legal or not, its target properties have been reported on;
      // re-reporting them as raw schema breaks would only add noise.
      for (const property of targetPropertiesOf(previousTransition)) {
        propertiesAccountedFor.add(property);
      }
      continue;
    }

    validateSurvivingTransition(
      interfaceApiName,
      previousTransition,
      nextTransition,
      findings,
    );
  }

  validateSchemaDiff(
    interfaceApiName,
    previous.schema,
    next.schema,
    propertiesAccountedFor,
    findings,
  );
}

/** What a transition vanishing from the source turned out to mean. */
type Disappearance =
  | { kind: "finalized" }
  | { kind: "deleted" }
  | { kind: "ambiguous"; targets: readonly TargetPropertyState[] };

/**
 * Decides whether a transition vanishing from the source was a finalization, a deletion, or an
 * illegal change, by checking which way of applying it reproduces the new schema.
 */
function classifyDisappearance(
  transition: LockedTransition,
  previousSchema: LockedInterfaceSchema,
  nextSchema: LockedInterfaceSchema,
): Disappearance {
  const strict = applyTransition(transition, previousSchema, "strict");
  const lenient = applyTransition(transition, previousSchema, "lenient");

  if (reproduces(strict, nextSchema)) {
    return { kind: "finalized" };
  }

  if (reproduces(lenient, nextSchema)) {
    return { kind: "deleted" };
  }

  return {
    kind: "ambiguous",
    targets: targetPropertiesOf(transition).map((propertyApiName) => ({
      propertyApiName,
      previous: own(previousSchema.properties, propertyApiName),
      next: own(nextSchema.properties, propertyApiName),
    })),
  };
}

/**
 * Whether applying the transition in one mode reproduces the new schema, comparing only the
 * properties that application actually changed.
 */
function reproduces(
  applied: AppliedTransition | undefined,
  nextSchema: LockedInterfaceSchema,
): boolean {
  return (
    applied !== undefined &&
    applied.touched.length > 0 &&
    schemasAgreeOn(applied.schema, nextSchema, applied.touched)
  );
}

function validateSurvivingTransition(
  interfaceApiName: string,
  previous: LockedTransition,
  next: LockedTransition,
  findings: LockfileFinding[],
): void {
  if (!isDeepStrictEqual(previous.instructions, next.instructions)) {
    findings.push({
      code: "instructionsChanged",
      interfaceApiName,
      transitionId: previous.id,
      previousInstructions: previous.instructions,
      nextInstructions: next.instructions,
    });
  }
}

/**
 * Reports every difference between the two schemas that OMS would reject, skipping the properties
 * already explained by a finalization or deletion.
 */
function validateSchemaDiff(
  interfaceApiName: string,
  previousSchema: LockedInterfaceSchema,
  nextSchema: LockedInterfaceSchema,
  accountedFor: ReadonlySet<string>,
  findings: LockfileFinding[],
): void {
  for (const [propertyApiName, previousProperty] of Object.entries(
    previousSchema.properties,
  )) {
    if (accountedFor.has(propertyApiName)) {
      continue;
    }

    const nextProperty = own(nextSchema.properties, propertyApiName);
    if (nextProperty === undefined) {
      findings.push({
        code: "propertyRemoved",
        interfaceApiName,
        property: propertyApiName,
      });
      continue;
    }

    if (!isDeepStrictEqual(previousProperty.type, nextProperty.type)) {
      findings.push({
        code: "propertyTypeChanged",
        interfaceApiName,
        property: propertyApiName,
        previousType: previousProperty.type,
        nextType: nextProperty.type,
      });
      continue;
    }

    if (!previousProperty.required && nextProperty.required) {
      findings.push({
        code: "propertyBecameRequired",
        interfaceApiName,
        property: propertyApiName,
      });
    }
  }

  for (const [propertyApiName, nextProperty] of Object.entries(
    nextSchema.properties,
  )) {
    if (
      accountedFor.has(propertyApiName) ||
      own(previousSchema.properties, propertyApiName) !== undefined
    ) {
      continue;
    }

    if (nextProperty.required) {
      findings.push({
        code: "requiredPropertyAdded",
        interfaceApiName,
        property: propertyApiName,
      });
    }
  }
}
