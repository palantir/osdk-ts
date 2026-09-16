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
import {
  describeFinalization,
  describeInstruction,
  describeSuggestedTransition,
  mapPropertyNames,
} from "../api/interface/describeInterfaceSchemaMigrationInstruction.js";
import type { PrimaryKeyConstraint } from "../api/interface/InterfacePropertyType.js";
import type { InterfaceSchemaMigrationInstruction } from "../api/interface/InterfaceSchemaMigrations.js";
import type { Nullability } from "../api/properties/Nullability.js";
import { describeType } from "./LockedPropertyType.js";
import type {
  LockedValueType,
  PropertyDeclaration,
} from "./OntologySchemaLockfile.js";
import { authoredKeyOf } from "./OntologySchemaLockfile.js";
import type {
  LockfileFinding,
  LockfileWarning,
  TargetPropertyState,
} from "./validateOntologySchemaLockfile.js";

/** Renders a finding as the report an author reads. */
export function describeFinding(finding: LockfileFinding): string {
  const where = `Interface ${finding.interfaceApiName}`;
  switch (finding.code) {
    case "ambiguousDisappearance": {
      if (finding.targets.length === 0) {
        return (
          `${where}: schema migration "${finding.transitionId}" is no longer declared, but ` +
          `it targets no property, so its disappearance cannot be read as either a ` +
          `finalization or a deletion. Restore it, or remove it from the lockfile by hand once ` +
          `the last published release no longer declares it.`
        );
      }

      const targets = finding.targets
        .map(({ propertyApiName }) => `"${authoredKeyOf(propertyApiName)}"`)
        .join(", ");
      return (
        `${where}: schema migration "${finding.transitionId}" is no longer declared, but ` +
        `the resulting schema is neither a finalization nor a deletion of it. ` +
        `${describeTargetDrift(finding.targets)}\n` +
        `  To finalize it, ${describeFinalizations(finding.instructions)}.\n` +
        `  To delete it, leave ${targets} exactly as the lockfile records it.`
      );
    }

    case "instructionsChanged":
      return (
        `${where}: schema migration "${finding.transitionId}" changed its instructions from ` +
        `${describeInstructions(finding.previousInstructions)} to ` +
        `${describeInstructions(finding.nextInstructions)}. An in-flight migration's instructions ` +
        `may not be changed, since stacks may already be part-way through it. Delete this transition and ` +
        `declare a new one with a different id instead.`
      );

    case "propertyRemoved": {
      const property = authoredKeyOf(finding.property);
      return (
        `${where}: property "${property}" was removed. Removing a property from an ` +
        `interface is a breaking change, and no currently-supported interface schema migration can ` +
        `phase it in. Restore "${property}" to the interface.`
      );
    }

    case "propertyDeclarationChanged": {
      const property = authoredKeyOf(finding.property);
      return (
        `${where}: property "${property}" moved from ` +
        `${describeDeclaration(finding.previousDeclaration)} to ` +
        `${describeDeclaration(finding.nextDeclaration)}. The two are different bindings even ` +
        `when they resolve to the same type, so implementing object types would have to remap ` +
        `the property, and no currently-supported interface schema migration can phase that in. ` +
        `Declare "${property}" ${describeDeclaration(finding.previousDeclaration)} again.`
      );
    }

    case "propertyNamespaceChanged": {
      const property = authoredKeyOf(finding.previousApiName);
      return (
        `${where}: property "${property}" is now backed by shared property type ` +
        `"${finding.nextApiName}" rather than "${finding.previousApiName}". A property is ` +
        `identified by the shared property type behind it, so this removes ` +
        `"${finding.previousApiName}" from the interface rather than renaming it, and ` +
        `implementing object types would have to take up "${finding.nextApiName}" in its place. ` +
        `No currently-supported interface schema migration can phase that in. Back "${property}" ` +
        `with "${finding.previousApiName}" again.`
      );
    }

    case "propertyTypeChanged": {
      const property = authoredKeyOf(finding.property);
      return (
        `${where}: property "${property}" changed type from ` +
        `${describeType(finding.previousType)} to ${describeType(finding.nextType)}. Changing a ` +
        `property's type is a breaking change, and no currently-supported interface schema ` +
        `migration can phase it in. Restore "${property}" to ` +
        `${describeType(finding.previousType)}; to publish the new type, declare it as a new ` +
        `property under a different api name.`
      );
    }

    case "propertyTypeClassesChanged": {
      const property = authoredKeyOf(finding.property);
      return (
        `${where}: property "${property}" changed type classes from ` +
        `${describeTypeClasses(finding.previousTypeClasses)} to ` +
        `${describeTypeClasses(finding.nextTypeClasses)}. Type classes drive render hints like ` +
        `sorting and filtering, so changing them breaks applications relying on those hints, and ` +
        `blocks upgrades for implementing object types that lack the new ones. No ` +
        `currently-supported interface schema migration can phase this in. Restore "${property}" ` +
        `to ${describeTypeClasses(finding.previousTypeClasses)}.`
      );
    }

    case "primaryKeyConstraintChanged": {
      const property = authoredKeyOf(finding.property);
      return (
        `${where}: property "${property}" changed its primary key constraint from ` +
        `${describeConstraint(finding.previousConstraint)} to ` +
        `${describeConstraint(finding.nextConstraint)}. Implementing object types that satisfy ` +
        `the old constraint need not satisfy the new one, so this blocks their upgrade, and no ` +
        `currently-supported interface schema migration can phase it in. Restore ` +
        `"${property}" to ${describeConstraint(finding.previousConstraint)}.`
      );
    }

    case "nullabilityTightened": {
      const property = authoredKeyOf(finding.property);
      return (
        `${where}: property "${property}" tightened its nullability from ` +
        `${describeNullability(finding.previousNullability)} to ` +
        `${describeNullability(finding.nextNullability)}. Implementing object types whose data ` +
        `does not already satisfy that are blocked from upgrading, and no currently-supported ` +
        `interface schema migration can phase it in. Restore "${property}" to ` +
        `${describeNullability(finding.previousNullability)}.`
      );
    }

    case "valueTypeChanged": {
      const property = authoredKeyOf(finding.property);
      const previous = finding.previousValueType;
      return (
        `${where}: property "${property}" changed its value type from ` +
        `${previous === undefined ? "none" : describeValueType(previous)} to ` +
        `${describeValueType(finding.nextValueType)}. A value type carries constraints that ` +
        `implementing object types' data has to satisfy, and no currently-supported interface ` +
        `schema migration can phase that in. ` +
        (previous === undefined
          ? `Drop the reference from "${property}".`
          : `Restore "${property}" to ${describeValueType(previous)}.`)
      );
    }

    case "propertyBecameRequired": {
      const property = authoredKeyOf(finding.property);
      return (
        `${where}: property "${property}" became required without a schema migration. ` +
        `Keep it declared \`required: false\` and phase it in instead through a migration like:\n` +
        `  ${describeSuggestedAddRequiredPropertyTransition(property)}`
      );
    }

    case "requiredPropertyAdded": {
      const property = authoredKeyOf(finding.property);
      return (
        `${where}: property "${property}" was added as required. Existing implementing ` +
        `object types do not provide it yet, so this is a breaking change. Declare it ` +
        `\`required: false\` and phase it in instead through a migration like:\n` +
        `  ${describeSuggestedAddRequiredPropertyTransition(property)}`
      );
    }
  }
}

/** Renders a warning as the note an author reads alongside the finding report. */
export function describeWarning(warning: LockfileWarning): string {
  switch (warning.code) {
    case "optedOut":
      return (
        `Interface ${warning.interfaceApiName} no longer declares \`schemaMigrations\`. Its ` +
        `in-flight migrations are still resolved for this release, but from the next release on ` +
        `maker will stop checking the interface for breaking schema changes, and a break will ` +
        `only surface when the ontology is installed. Restore the \`schemaMigrations\` block to ` +
        `keep the interface checked.`
      );

    case "requirementRelaxed": {
      const property = authoredKeyOf(warning.property);
      return (
        `Interface ${warning.interfaceApiName}: property "${property}" is no longer required. ` +
        `Implementing object types need not provide it from this release on, so clients that ` +
        `expect it to always be present will start seeing it absent. Nothing to do if that was ` +
        `intended; declare it \`required: true\` again if it was not.`
      );
    }

    case "primaryKeyConstraintRelaxed": {
      const property = authoredKeyOf(warning.property);
      return (
        `Interface ${warning.interfaceApiName}: property "${property}" no longer constrains ` +
        `primary key mapping, having been ` +
        `${describeConstraint(warning.previousConstraint)}. Implementing object types are free ` +
        `to map it either way from this release on. Nothing to do if that was intended; declare ` +
        `the constraint again if it was not.`
      );
    }

    case "nullabilityRelaxed": {
      const property = authoredKeyOf(warning.property);
      return (
        `Interface ${warning.interfaceApiName}: property "${property}" relaxed its nullability ` +
        `from ${describeNullability(warning.previousNullability)} to ` +
        `${describeNullability(warning.nextNullability)}. Implementing object types may supply ` +
        `values it previously rejected, so clients that relied on the old guarantee will start ` +
        `seeing them. Nothing to do if that was intended; declare the constraint again if it ` +
        `was not.`
      );
    }

    case "valueTypeRemoved": {
      const property = authoredKeyOf(warning.property);
      return (
        `Interface ${warning.interfaceApiName}: property "${property}" no longer references ` +
        `value type ${describeValueType(warning.previousValueType)}. Implementing object types ` +
        `are no longer held to that value type's constraints, so clients that relied on them ` +
        `will start seeing values it rejected. Nothing to do if that was intended; reference it ` +
        `again if it was not.`
      );
    }
  }
}

function describeValueType(valueType: LockedValueType): string {
  return valueType.packageNamespace === ""
    ? valueType.apiName
    : `${valueType.packageNamespace}/${valueType.apiName}`;
}

/** What a nullability forbids, as a noun phrase. */
function describeNullability(nullability: Nullability): string {
  const forbidden = [
    nullability.noNulls && "no nulls",
    nullability.noEmptyCollections && "no empty collections",
  ].filter((clause): clause is string => clause !== false);
  return forbidden.length === 0 ? "unconstrained" : forbidden.join(", ");
}

/** A primary key constraint, as it reads mid-sentence. */
function describeConstraint(constraint: PrimaryKeyConstraint): string {
  switch (constraint) {
    case "MUST_BE_PK":
      return "`MUST_BE_PK`";
    case "CANNOT_BE_PK":
      return "`CANNOT_BE_PK`";
    case "NO_RESTRICTION":
      return "unconstrained";
  }
}

/** Where a property is declared, as it reads mid-sentence in a finding. */
function describeDeclaration(declaration: PropertyDeclaration): string {
  switch (declaration) {
    case "interface":
      return "defined on the interface";
    case "sharedPropertyType":
      return "backed by a shared property type";
  }
}

function describeTypeClasses(typeClasses: readonly TypeClass[]): string {
  if (typeClasses.length === 0) {
    return "none";
  }

  return typeClasses.map(({ kind, name }) => `${kind}/${name}`).join(", ");
}

/** A transition's instructions, named as the author wrote them. */
function describeInstructions(
  instructions: readonly InterfaceSchemaMigrationInstruction[],
): string {
  return `[${instructions
    .map((instruction) =>
      describeInstruction(mapPropertyNames(instruction, authoredKeyOf)),
    )
    .join(", ")}]`;
}

/** Explains what actually happened to a transition's target properties, for the error message. */
function describeTargetDrift(targets: readonly TargetPropertyState[]): string {
  const descriptions = targets.map(({ propertyApiName, previous, next }) => {
    const authoredPropertyName = authoredKeyOf(propertyApiName);
    if (next === undefined) {
      return `"${authoredPropertyName}" was removed from the interface`;
    }

    if (
      previous !== undefined &&
      !isDeepStrictEqual(previous.type, next.type)
    ) {
      return (
        `"${authoredPropertyName}" changed type from ${describeType(previous.type)} to ` +
        describeType(next.type)
      );
    }

    return `"${authoredPropertyName}" is \`required: ${next.required}\``;
  });
  return `Instead, ${descriptions.join(", ")}.`;
}

/** Everything the author would do to have the transition be finalized instead. */
function describeFinalizations(
  instructions: readonly InterfaceSchemaMigrationInstruction[],
): string {
  return instructions
    .map((instruction) =>
      describeFinalization(mapPropertyNames(instruction, authoredKeyOf)),
    )
    .join(", and ");
}

/** The transition an author should have declared to make `property` required. */
function describeSuggestedAddRequiredPropertyTransition(
  property: string,
): string {
  return describeSuggestedTransition({ type: "addRequiredProperty", property });
}
