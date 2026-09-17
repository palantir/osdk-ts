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

import type { TypeClass } from "../api/common/TypeClass.js";
import type { PrimaryKeyConstraint } from "../api/interface/InterfacePropertyType.js";
import type { InterfaceSchemaMigrationInstruction } from "../api/interface/InterfaceSchemaMigrations.js";
import type { Nullability } from "../api/properties/Nullability.js";
import {
  applyTransition,
  reproduces,
  targetPropertiesOf,
} from "./applyInterfaceSchemaTransition.js";
import type { SourceCensus } from "./generateOntologySchemaLockfile.js";
import type { LockedPropertyType } from "./LockedPropertyType.js";
import type {
  LockedInterfaceSchema,
  LockedInterfaceType,
  LockedProperty,
  LockedTransition,
  LockedValueType,
  OntologySchemaLockfile,
  PropertyDeclaration,
} from "./OntologySchemaLockfile.js";
import {
  declarationOf,
  extensionsOf,
  nullabilityOf,
  own,
  primaryKeyConstraintOf,
  tightensNullability,
} from "./OntologySchemaLockfile.js";

/**
 * NOTE ON CONVENTION: the rest of maker validates with `invariant`, failing on the first problem.
 * This module instead accumulates findings and lets its caller throw one aggregate. An author
 * fixing a batch of breaking changes wants to see all of them, not to discover them one build at
 * a time.
 */

/** A transition that the source no longer declares, along with what its disappearance meant. */
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

/** A change that would be rejected at installation-time, in machine-readable form. */
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
  | {
      code: "interfaceExtensionAdded";
      interfaceApiName: string;
      extendedInterfaceApiName: string;
    }
  | { code: "propertyRemoved"; interfaceApiName: string; property: string }
  | {
      code: "propertyDeclarationChanged";
      interfaceApiName: string;
      property: string;
      previousDeclaration: PropertyDeclaration;
      nextDeclaration: PropertyDeclaration;
    }
  | {
      code: "propertyTypeChanged";
      interfaceApiName: string;
      property: string;
      previousType: LockedPropertyType;
      nextType: LockedPropertyType;
    }
  | {
      code: "propertyTypeClassesChanged";
      interfaceApiName: string;
      property: string;
      previousTypeClasses: readonly TypeClass[];
      nextTypeClasses: readonly TypeClass[];
    }
  | {
      code: "primaryKeyConstraintChanged";
      interfaceApiName: string;
      property: string;
      previousConstraint: PrimaryKeyConstraint;
      nextConstraint: PrimaryKeyConstraint;
    }
  | {
      code: "nullabilityTightened";
      interfaceApiName: string;
      property: string;
      previousNullability: Nullability;
      nextNullability: Nullability;
    }
  | {
      code: "valueTypeChanged";
      interfaceApiName: string;
      property: string;
      previousValueType: LockedValueType | undefined;
      nextValueType: LockedValueType;
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

/** Worth telling the author about, but not by itself a reason to reject the ontology. */
export type LockfileWarning =
  /** The source still declares the interface, but has dropped its `schemaMigrations` block. */
  | { code: "optedOut"; interfaceApiName: string }
  /** A property that implementing object types had to provide no longer has to be provided. */
  | {
      code: "requirementRelaxed";
      interfaceApiName: string;
      property: string;
    }
  | {
      code: "primaryKeyConstraintRelaxed";
      interfaceApiName: string;
      property: string;
      previousConstraint: PrimaryKeyConstraint;
    }
  | {
      code: "nullabilityRelaxed";
      interfaceApiName: string;
      property: string;
      previousNullability: Nullability;
      nextNullability: Nullability;
    }
  | {
      code: "valueTypeRemoved";
      interfaceApiName: string;
      property: string;
      previousValueType: LockedValueType;
    }
  | {
      code: "interfaceExtensionRemoved";
      interfaceApiName: string;
      extendedInterfaceApiName: string;
    };

export interface LockfileValidationResult {
  /**
   * Changes the author must resolve before the ontology can be published. Every entry is a change
   * that would be rejected at installation-time.
   */
  findings: LockfileFinding[];
  /** Finalizations and deletions inferred from the diff, in lockfile order. */
  checkpoints: DetectedCheckpoint[];
  /** Changes the author probably wants to know they made, in lockfile order. */
  warnings: LockfileWarning[];
}

/**
 * Diffs a newly-generated lockfile against the persisted one, reporting any change that would
 * be rejected when the ontology is installed.
 *
 * @param previous the persisted lockfile, i.e. the last published state
 * @param next the lockfile generated from the current source
 * @param census every entity the source declares, enrolled or not in locking, with the schema it declares now.
 */
export function validateOntologySchemaLockfile(
  previous: OntologySchemaLockfile,
  next: OntologySchemaLockfile,
  census: SourceCensus,
): LockfileValidationResult {
  const result: LockfileValidationResult = {
    findings: [],
    checkpoints: [],
    warnings: [],
  };

  for (const [interfaceApiName, previousInterface] of Object.entries(
    previous.interfaces,
  )) {
    const enrolled = own(next.interfaces, interfaceApiName);
    const nextInterface =
      enrolled ?? asOptedOut(interfaceApiName, census.interfaces);

    // Not a break to remove the IT, existing installations will just continue
    // with what they have
    if (nextInterface === undefined) {
      continue;
    }

    if (enrolled === undefined) {
      result.warnings.push({ code: "optedOut", interfaceApiName });
    }

    validateInterface(
      interfaceApiName,
      previousInterface,
      nextInterface,
      result,
    );
  }

  return result;
}

/**
 * What an interface that dropped its `schemaMigrations` block still amounts to: the schema the
 * source declares, with no transitions left. `undefined` if the source no longer declares it.
 *
 * Opting out ends maker's checking of the interface from the next release on, but not this one. The
 * interface is still published, so whether each in-flight transition landed or was abandoned is
 * still a real difference in the artifact.
 */
function asOptedOut(
  interfaceApiName: string,
  census: SourceCensus["interfaces"],
): LockedInterfaceType | undefined {
  const schema = census.get(interfaceApiName);
  return schema === undefined ? undefined : { schema, transitions: [] };
}

function validateInterface(
  interfaceApiName: string,
  previousInterface: LockedInterfaceType,
  nextInterface: LockedInterfaceType,
  result: LockfileValidationResult,
): void {
  const { findings, checkpoints } = result;
  const nextTransitions = new Map(
    nextInterface.transitions.map((transition) => [transition.id, transition]),
  );

  // Properties whose change is already explained by a finalization or deletion, and so must be
  // exempt from the general breaking-change checks below.
  const propertiesAccountedFor = new Set<string>();

  for (const previousTransition of previousInterface.transitions) {
    const nextTransition = nextTransitions.get(previousTransition.id);
    if (nextTransition === undefined) {
      const disappearance = classifyDisappearance(
        previousTransition,
        previousInterface.schema,
        nextInterface.schema,
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

  validateExtensionsDiff(
    interfaceApiName,
    previousInterface.schema,
    nextInterface.schema,
    result,
  );

  validateSchemaDiff(
    interfaceApiName,
    previousInterface.schema,
    nextInterface.schema,
    propertiesAccountedFor,
    result,
  );
}

function validateExtensionsDiff(
  interfaceApiName: string,
  previousSchema: LockedInterfaceSchema,
  nextSchema: LockedInterfaceSchema,
  { findings, warnings }: LockfileValidationResult,
): void {
  const previousExtensions = new Set(extensionsOf(previousSchema));
  const nextExtensions = new Set(extensionsOf(nextSchema));

  for (const extendedInterfaceApiName of nextExtensions) {
    if (!previousExtensions.has(extendedInterfaceApiName)) {
      findings.push({
        code: "interfaceExtensionAdded",
        interfaceApiName,
        extendedInterfaceApiName,
      });
    }
  }

  for (const extendedInterfaceApiName of previousExtensions) {
    if (!nextExtensions.has(extendedInterfaceApiName)) {
      warnings.push({
        code: "interfaceExtensionRemoved",
        interfaceApiName,
        extendedInterfaceApiName,
      });
    }
  }
}

/** What a transition vanishing from the source turned out to mean. */
type Disappearance =
  | { kind: "finalized" }
  | { kind: "deleted" }
  | { kind: "ambiguous"; targets: readonly TargetPropertyState[] };

function classifyDisappearance(
  transition: LockedTransition,
  previousSchema: LockedInterfaceSchema,
  nextSchema: LockedInterfaceSchema,
): Disappearance {
  const strict = applyTransition(transition, previousSchema, "strict");
  if (reproduces(strict, nextSchema)) {
    return { kind: "finalized" };
  }

  const lenient = applyTransition(transition, previousSchema, "lenient");
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
 * Reports every difference between the two schemas that would be rejected at installation-time, skipping
 * the properties already explained by a finalization or deletion.
 */
function validateSchemaDiff(
  interfaceApiName: string,
  previousSchema: LockedInterfaceSchema,
  nextSchema: LockedInterfaceSchema,
  accountedFor: ReadonlySet<string>,
  { findings, warnings }: LockfileValidationResult,
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

    if (previousProperty.required && !nextProperty.required) {
      warnings.push({
        code: "requirementRelaxed",
        interfaceApiName,
        property: propertyApiName,
      });
      // NB: explicitly doesn't short-circuit since this is just a warning
    }

    const previousConstraint = primaryKeyConstraintOf(previousProperty);
    const nextConstraint = primaryKeyConstraintOf(nextProperty);
    if (
      previousConstraint !== nextConstraint &&
      nextConstraint === "NO_RESTRICTION"
    ) {
      warnings.push({
        code: "primaryKeyConstraintRelaxed",
        interfaceApiName,
        property: propertyApiName,
        previousConstraint,
      });
    }

    const previousNullability = nullabilityOf(previousProperty);
    const nextNullability = nullabilityOf(nextProperty);
    const nullabilityMoved = !isDeepStrictEqual(
      previousNullability,
      nextNullability,
    );
    if (
      nullabilityMoved &&
      !tightensNullability(previousNullability, nextNullability)
    ) {
      warnings.push({
        code: "nullabilityRelaxed",
        interfaceApiName,
        property: propertyApiName,
        previousNullability,
        nextNullability,
      });
    }

    if (
      previousProperty.valueType !== undefined &&
      nextProperty.valueType === undefined
    ) {
      warnings.push({
        code: "valueTypeRemoved",
        interfaceApiName,
        property: propertyApiName,
        previousValueType: previousProperty.valueType,
      });
    }

    // Ahead of the type check: when the binding itself was swapped, the types are incidental, and
    // reporting them would point the author at the wrong thing to restore.
    const previousDeclaration = declarationOf(previousProperty);
    const nextDeclaration = declarationOf(nextProperty);
    if (previousDeclaration !== nextDeclaration) {
      findings.push({
        code: "propertyDeclarationChanged",
        interfaceApiName,
        property: propertyApiName,
        previousDeclaration,
        nextDeclaration,
      });
      continue;
    }

    // This is probably too strict; we might need to strip more things from the locked property
    // type to avoid false positives
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

    if (
      !isDeepStrictEqual(previousProperty.typeClasses, nextProperty.typeClasses)
    ) {
      findings.push({
        code: "propertyTypeClassesChanged",
        interfaceApiName,
        property: propertyApiName,
        previousTypeClasses: previousProperty.typeClasses ?? [],
        nextTypeClasses: nextProperty.typeClasses ?? [],
      });
      continue;
    }

    if (
      previousConstraint !== nextConstraint &&
      nextConstraint !== "NO_RESTRICTION"
    ) {
      findings.push({
        code: "primaryKeyConstraintChanged",
        interfaceApiName,
        property: propertyApiName,
        previousConstraint,
        nextConstraint,
      });
      continue;
    }

    if (tightensNullability(previousNullability, nextNullability)) {
      findings.push({
        code: "nullabilityTightened",
        interfaceApiName,
        property: propertyApiName,
        previousNullability,
        nextNullability,
      });
      continue;
    }

    const nextValueType = nextProperty.valueType;
    if (
      nextValueType !== undefined &&
      !isDeepStrictEqual(previousProperty.valueType, nextValueType)
    ) {
      findings.push({
        code: "valueTypeChanged",
        interfaceApiName,
        property: propertyApiName,
        previousValueType: previousProperty.valueType,
        nextValueType,
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
