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
import type { Nullability } from "../api/properties/Nullability.js";
import {
  applyTransition,
  reproduces,
  targetActionTypeConstraintsOf,
  targetPropertiesOf,
  targetsOf,
} from "./applyInterfaceSchemaTransition.js";
import type { SourceCensus } from "./generateOntologySchemaLockfile.js";
import type { LockedPropertyType } from "./LockedPropertyType.js";
import type {
  LockedActionTypeConstraint,
  LockedInstruction,
  LockedInterfaceSchema,
  LockedInterfaceType,
  LockedProperty,
  LockedTransition,
  LockedValueType,
  OntologySchemaLockfile,
  PropertyDeclaration,
} from "./OntologySchemaLockfile.js";
import {
  actionTypeConstraintsOf,
  authoredKeyOf,
  declarationOf,
  extensionsOf,
  nullabilityOf,
  own,
  primaryKeyConstraintOf,
  tightensNullability,
} from "./OntologySchemaLockfile.js";

/**
 * NOTE ON CONVENTION: the rest of maker validates with `invariant`, failing on the first problem.
 * This module instead accumulates breaking changes and lets its caller throw one aggregate. An
 * author fixing a batch of them wants to see all of them, not to discover them one build at a
 * time.
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

/** An action type constraint a transition targets, as the lockfile records it and as the source now declares it. */
export interface TargetActionTypeConstraintState {
  actionTypeConstraintApiName: string;
  previous: LockedActionTypeConstraint | undefined;
  next: LockedActionTypeConstraint | undefined;
}

export type TargetState = TargetPropertyState | TargetActionTypeConstraintState;

/** A change that would be rejected at installation-time, in machine-readable form. */
export type LockfileBreakingChange =
  /**
   * A transition vanished from the source, but neither finalizing nor deleting it reproduces the
   * new schema, so there is no way to read what the author meant.
   */
  | {
      code: "ambiguousDisappearance";
      interfaceApiName: string;
      transitionId: string;
      targets: readonly TargetState[];
      /** What the vanished transition instructed, as the lockfile recorded it. */
      instructions: readonly LockedInstruction[];
    }
  | {
      code: "instructionsChanged";
      interfaceApiName: string;
      transitionId: string;
      previousInstructions: readonly LockedInstruction[];
      nextInstructions: readonly LockedInstruction[];
    }
  | {
      code: "actionTypeConstraintBecameRequired";
      interfaceApiName: string;
      actionTypeConstraint: string;
    }
  | {
      code: "requiredActionTypeConstraintAdded";
      interfaceApiName: string;
      actionTypeConstraint: string;
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
      /** The api name the lockfile recorded, i.e. the one the property published under before. */
      property: string;
      previousDeclaration: PropertyDeclaration;
      nextDeclaration: PropertyDeclaration;
    }
  /**
   * The property kept its authored key and its binding, but publishes under a different api name,
   * which only a shared property type changing namespace can do.
   */
  | {
      code: "propertyNamespaceChanged";
      interfaceApiName: string;
      previousApiName: string;
      nextApiName: string;
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
    }
  /** An action type constraint implementing object types had to implement no longer has to be. */
  | {
      code: "actionTypeConstraintRequirementRelaxed";
      interfaceApiName: string;
      actionTypeConstraint: string;
    }
  | {
      code: "actionTypeConstraintRemoved";
      interfaceApiName: string;
      actionTypeConstraint: string;
    };

export interface LockfileValidationResult {
  /**
   * Changes the author must resolve before the ontology can be published. Every entry is a change
   * that would be rejected at installation-time.
   */
  breakingChanges: LockfileBreakingChange[];
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
    breakingChanges: [],
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
  const { breakingChanges, checkpoints } = result;
  const nextTransitions = new Map(
    nextInterface.transitions.map((transition) => [transition.id, transition]),
  );

  // Schema elements whose change is already explained by a finalization or deletion, and so must
  // be exempt from the general breaking-change checks below.
  const accountedFor: AccountedFor = {
    properties: new Set(),
    actionTypeConstraints: new Set(),
  };

  for (const previousTransition of previousInterface.transitions) {
    const nextTransition = nextTransitions.get(previousTransition.id);
    if (nextTransition === undefined) {
      const disappearance = classifyDisappearance(
        previousTransition,
        previousInterface.schema,
        nextInterface.schema,
      );
      if (disappearance.kind === "ambiguous") {
        breakingChanges.push({
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

      // Whether the disappearance was legal or not, its targets have been reported on;
      // re-reporting them as raw schema breaks would only add noise.
      for (const element of targetsOf(previousTransition)) {
        switch (element.kind) {
          case "property":
            accountedFor.properties.add(authoredKeyOf(element.apiName));
            break;
          case "actionTypeConstraint":
            accountedFor.actionTypeConstraints.add(element.apiName);
            break;
          default: {
            const unhandled: never = element;
            throw new Error(
              `Unknown schema element: ${JSON.stringify(unhandled)}`,
            );
          }
        }
      }
      continue;
    }

    validateSurvivingTransition(
      interfaceApiName,
      previousTransition,
      nextTransition,
      breakingChanges,
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
    accountedFor.properties,
    result,
  );

  validateActionTypeConstraintsDiff(
    interfaceApiName,
    previousInterface.schema,
    nextInterface.schema,
    accountedFor.actionTypeConstraints,
    result,
  );
}

interface AccountedFor {
  /** Authored keys. */
  properties: Set<string>;
  /** Fully-qualified api names. */
  actionTypeConstraints: Set<string>;
}

/**
 * Reports changes to the action type constraints the interface declares directly.
 *
 * OMS rejects an implementing object type that lacks an implementation of a constraint with
 * `requireImplementation: true` (`InterfaceActionTypeConstraintImplementationValidator`), and
 * re-runs that for every existing implementor when the interface changes
 * (`ObjectTypeInterfaceImplementationModificationValidator.validateDeploy`), so requiring one
 * breaks untouched object types. Nothing in OMS rejects removing a constraint
 * (`InterfaceTypeModificationValidator` only guards property removal), so that is only a warning.
 */
function validateActionTypeConstraintsDiff(
  interfaceApiName: string,
  previousSchema: LockedInterfaceSchema,
  nextSchema: LockedInterfaceSchema,
  accountedFor: ReadonlySet<string>,
  { breakingChanges, warnings }: LockfileValidationResult,
): void {
  const previousConstraints = actionTypeConstraintsOf(previousSchema);
  const nextConstraints = actionTypeConstraintsOf(nextSchema);

  for (const [actionTypeConstraint, previous] of Object.entries(
    previousConstraints,
  )) {
    if (accountedFor.has(actionTypeConstraint)) {
      continue;
    }

    const next = own(nextConstraints, actionTypeConstraint);
    if (next === undefined) {
      warnings.push({
        code: "actionTypeConstraintRemoved",
        interfaceApiName,
        actionTypeConstraint,
      });
      continue;
    }

    if (!previous.requireImplementation && next.requireImplementation) {
      breakingChanges.push({
        code: "actionTypeConstraintBecameRequired",
        interfaceApiName,
        actionTypeConstraint,
      });
    } else if (previous.requireImplementation && !next.requireImplementation) {
      warnings.push({
        code: "actionTypeConstraintRequirementRelaxed",
        interfaceApiName,
        actionTypeConstraint,
      });
    }
  }

  for (const [actionTypeConstraint, next] of Object.entries(nextConstraints)) {
    if (
      accountedFor.has(actionTypeConstraint) ||
      own(previousConstraints, actionTypeConstraint) !== undefined
    ) {
      continue;
    }

    if (next.requireImplementation) {
      breakingChanges.push({
        code: "requiredActionTypeConstraintAdded",
        interfaceApiName,
        actionTypeConstraint,
      });
    }
  }
}

function validateExtensionsDiff(
  interfaceApiName: string,
  previousSchema: LockedInterfaceSchema,
  nextSchema: LockedInterfaceSchema,
  { breakingChanges, warnings }: LockfileValidationResult,
): void {
  const previousExtensions = new Set(extensionsOf(previousSchema));
  const nextExtensions = new Set(extensionsOf(nextSchema));

  for (const extendedInterfaceApiName of nextExtensions) {
    if (!previousExtensions.has(extendedInterfaceApiName)) {
      breakingChanges.push({
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
  | { kind: "ambiguous"; targets: readonly TargetState[] };

function classifyDisappearance(
  transition: LockedTransition,
  previousSchema: LockedInterfaceSchema,
  nextSchema: LockedInterfaceSchema,
): Disappearance {
  // A replace is never finalized; it stays declared as a tombstone, so it can only vanish by being
  // deleted
  if (transition.instructions.some(({ type }) => type === "replace")) {
    return { kind: "deleted" };
  }

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
    targets: [
      ...targetPropertiesOf(transition).map(
        (propertyApiName): TargetPropertyState => ({
          propertyApiName,
          previous: own(previousSchema.properties, propertyApiName),
          next: own(nextSchema.properties, propertyApiName),
        }),
      ),
      ...targetActionTypeConstraintsOf(transition).map(
        (actionTypeConstraintApiName): TargetActionTypeConstraintState => ({
          actionTypeConstraintApiName,
          previous: own(
            actionTypeConstraintsOf(previousSchema),
            actionTypeConstraintApiName,
          ),
          next: own(
            actionTypeConstraintsOf(nextSchema),
            actionTypeConstraintApiName,
          ),
        }),
      ),
    ],
  };
}

function validateSurvivingTransition(
  interfaceApiName: string,
  previous: LockedTransition,
  next: LockedTransition,
  breakingChanges: LockfileBreakingChange[],
): void {
  if (!isDeepStrictEqual(previous.instructions, next.instructions)) {
    breakingChanges.push({
      code: "instructionsChanged",
      interfaceApiName,
      transitionId: previous.id,
      previousInstructions: previous.instructions,
      nextInstructions: next.instructions,
    });
  }
}

/** A property as the lockfile records it: the api name it publishes under, and its shape. */
interface PublishedProperty {
  apiName: string;
  property: LockedProperty;
}

/**
 * A schema's properties keyed by the name the author wrote rather than the one they publish under.
 */
function byAuthoredKey(
  schema: LockedInterfaceSchema,
): Map<string, PublishedProperty> {
  // `Object.entries` yields only own enumerable keys, so unlike an index read this needs no guard
  // against a lockfile parsed from disk inheriting `constructor` and friends from `Object.prototype`.
  return new Map(
    Object.entries(schema.properties).map(([apiName, property]) => [
      authoredKeyOf(apiName),
      { apiName, property },
    ]),
  );
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
  { breakingChanges, warnings }: LockfileValidationResult,
): void {
  const previousProperties = byAuthoredKey(previousSchema);
  const nextProperties = byAuthoredKey(nextSchema);

  for (const [authoredKey, previous] of previousProperties) {
    if (accountedFor.has(authoredKey)) {
      continue;
    }

    const next = nextProperties.get(authoredKey);
    if (next === undefined) {
      breakingChanges.push({
        code: "propertyRemoved",
        interfaceApiName,
        property: previous.apiName,
      });
      continue;
    }

    if (previous.property.required && !next.property.required) {
      warnings.push({
        code: "requirementRelaxed",
        interfaceApiName,
        property: previous.apiName,
      });
    }

    const previousConstraint = primaryKeyConstraintOf(previous.property);
    const nextConstraint = primaryKeyConstraintOf(next.property);
    if (
      previousConstraint !== nextConstraint &&
      nextConstraint === "NO_RESTRICTION"
    ) {
      warnings.push({
        code: "primaryKeyConstraintRelaxed",
        interfaceApiName,
        property: previous.apiName,
        previousConstraint,
      });
    }

    const previousNullability = nullabilityOf(previous.property);
    const nextNullability = nullabilityOf(next.property);
    if (
      !isDeepStrictEqual(previousNullability, nextNullability) &&
      !tightensNullability(previousNullability, nextNullability)
    ) {
      warnings.push({
        code: "nullabilityRelaxed",
        interfaceApiName,
        property: previous.apiName,
        previousNullability,
        nextNullability,
      });
    }

    if (
      previous.property.valueType !== undefined &&
      next.property.valueType === undefined
    ) {
      warnings.push({
        code: "valueTypeRemoved",
        interfaceApiName,
        property: previous.apiName,
        previousValueType: previous.property.valueType,
      });
    }

    validatePropertyDiff(interfaceApiName, previous, next, breakingChanges);
  }

  for (const [authoredKey, next] of nextProperties) {
    if (accountedFor.has(authoredKey) || previousProperties.has(authoredKey)) {
      continue;
    }

    if (next.property.required) {
      breakingChanges.push({
        code: "requiredPropertyAdded",
        interfaceApiName,
        property: next.apiName,
      });
    }
  }
}

/** Reports what changed about a property the author kept. */
function validatePropertyDiff(
  interfaceApiName: string,
  previous: PublishedProperty,
  next: PublishedProperty,
  breakingChanges: LockfileBreakingChange[],
): void {
  const property = previous.apiName;

  // Ahead of the type check: when the binding itself was swapped, the types are incidental, and
  // reporting them would point the author at the wrong thing to restore.
  const previousDeclaration = declarationOf(previous.property);
  const nextDeclaration = declarationOf(next.property);
  if (previousDeclaration !== nextDeclaration) {
    breakingChanges.push({
      code: "propertyDeclarationChanged",
      interfaceApiName,
      property,
      previousDeclaration,
      nextDeclaration,
    });
    return;
  }

  // Same authored key and same binding, but a different published name: the shared property type
  // behind it moved namespace.
  if (previous.apiName !== next.apiName) {
    breakingChanges.push({
      code: "propertyNamespaceChanged",
      interfaceApiName,
      previousApiName: previous.apiName,
      nextApiName: next.apiName,
    });
    return;
  }

  // This is probably too strict; we might need to strip more things from the locked property
  // type to avoid false positives
  if (!isDeepStrictEqual(previous.property.type, next.property.type)) {
    breakingChanges.push({
      code: "propertyTypeChanged",
      interfaceApiName,
      property,
      previousType: previous.property.type,
      nextType: next.property.type,
    });
    return;
  }

  if (
    !isDeepStrictEqual(previous.property.typeClasses, next.property.typeClasses)
  ) {
    breakingChanges.push({
      code: "propertyTypeClassesChanged",
      interfaceApiName,
      property,
      previousTypeClasses: previous.property.typeClasses ?? [],
      nextTypeClasses: next.property.typeClasses ?? [],
    });
    return;
  }

  const previousConstraint = primaryKeyConstraintOf(previous.property);
  const nextConstraint = primaryKeyConstraintOf(next.property);
  if (
    previousConstraint !== nextConstraint &&
    nextConstraint !== "NO_RESTRICTION"
  ) {
    breakingChanges.push({
      code: "primaryKeyConstraintChanged",
      interfaceApiName,
      property,
      previousConstraint,
      nextConstraint,
    });
    return;
  }

  const previousNullability = nullabilityOf(previous.property);
  const nextNullability = nullabilityOf(next.property);
  if (tightensNullability(previousNullability, nextNullability)) {
    breakingChanges.push({
      code: "nullabilityTightened",
      interfaceApiName,
      property,
      previousNullability,
      nextNullability,
    });
    return;
  }

  const nextValueType = next.property.valueType;
  if (
    nextValueType !== undefined &&
    !isDeepStrictEqual(previous.property.valueType, nextValueType)
  ) {
    breakingChanges.push({
      code: "valueTypeChanged",
      interfaceApiName,
      property,
      previousValueType: previous.property.valueType,
      nextValueType,
    });
    return;
  }

  if (!previous.property.required && next.property.required) {
    breakingChanges.push({
      code: "propertyBecameRequired",
      interfaceApiName,
      property,
    });
  }
}
