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

import { withoutNamespace } from "../api/defineOntology.js";
import {
  describeFinalization,
  describeInstruction,
  describeSuggestedTransition,
  renameInstructionProperties,
} from "../api/interface/describeInterfaceSchemaMigrationInstruction.js";
import type { InterfaceSchemaMigrationInstruction } from "../api/interface/InterfaceSchemaMigrations.js";
import { describeType } from "./OntologySchemaLockfile.js";
import type {
  LockfileFinding,
  TargetPropertyState,
} from "./validateOntologySchemaLockfile.js";

/**
 * Renders a finding as the report an author reads.
 *
 * Every property is named by the key the author wrote rather than by the api name the lockfile
 * records, so that what they are told to go and edit is named the way their source names it.
 */
export function describeFinding(finding: LockfileFinding): string {
  const where = `Interface ${finding.interfaceApiName}`;
  switch (finding.code) {
    case "ambiguousDisappearance": {
      // A transition that touches no property leaves no trace in the schema either way, so there
      // is no drift to describe and no way for the author to express which they meant.
      if (finding.targets.length === 0) {
        return (
          `${where}: schema migration "${finding.transitionId}" is no longer declared, but ` +
          `it targets no property, so its disappearance cannot be read as either a ` +
          `finalization or a deletion. Restore it, or remove it from the lockfile by hand once ` +
          `the last published release no longer declares it.`
        );
      }

      const targets = finding.targets
        .map(({ propertyApiName }) => `"${authored(propertyApiName)}"`)
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
        `are immutable, since stacks may already be part-way through it. Delete this transition and ` +
        `declare a new one with a different id instead.`
      );

    case "propertyRemoved": {
      const property = authored(finding.property);
      return (
        `${where}: property "${property}" was removed. Removing a property from an ` +
        `interface is a breaking change, and no currently-supported interface schema migration can ` +
        `phase it in. Restore "${property}" to the interface.`
      );
    }

    case "propertyTypeChanged": {
      const property = authored(finding.property);
      return (
        `${where}: property "${property}" changed type from ` +
        `${describeType(finding.previousType)} to ${describeType(finding.nextType)}. Changing a ` +
        `property's type is a breaking change, and no currently-supported interface schema ` +
        `migration can phase it in. Restore "${property}" to ` +
        `${describeType(finding.previousType)}; to publish the new type, declare it as a new ` +
        `property under a different api name.`
      );
    }

    case "propertyBecameRequired": {
      const property = authored(finding.property);
      return (
        `${where}: property "${property}" became required without a schema migration. ` +
        `Keep it declared \`required: false\` and phase it in instead:\n` +
        `  ${describeRequiringProperty(property)}`
      );
    }

    case "requiredPropertyAdded": {
      const property = authored(finding.property);
      return (
        `${where}: property "${property}" was added as required. Existing implementing ` +
        `object types do not provide it yet, so this is a breaking change. Declare it ` +
        `\`required: false\` and phase it in instead:\n` +
        `  ${describeRequiringProperty(property)}`
      );
    }
  }
}

/**
 * The key the author wrote for a property, given the api name the lockfile records it under.
 *
 * A shared property type publishes under a namespaced api name — `com.example.lastName` — while
 * `defineInterface` requires the author to key it by the un-namespaced name, so stripping the
 * namespace recovers the key. Quoting the published name back at them instead would name something
 * they cannot find in their source, and would make a suggested transition not copy-paste ready: dots are
 * illegal in both a transition id and a property reference.
 */
function authored(wireApiName: string): string {
  return withoutNamespace(wireApiName);
}

/** Explains what actually happened to a transition's target properties, for the error message. */
function describeTargetDrift(targets: readonly TargetPropertyState[]): string {
  const descriptions = targets.map(({ propertyApiName, previous, next }) => {
    const property = authored(propertyApiName);
    if (next === undefined) {
      return `"${property}" was removed from the interface`;
    }
    if (
      previous !== undefined &&
      !isDeepStrictEqual(previous.type, next.type)
    ) {
      return (
        `"${property}" changed type from ${describeType(previous.type)} to ` +
        describeType(next.type)
      );
    }
    return `"${property}" is \`required: ${next.required}\``;
  });
  return `Instead, ${descriptions.join(", ")}.`;
}

function describeInstructions(
  instructions: readonly InterfaceSchemaMigrationInstruction[],
): string {
  return `[${instructions
    .map((instruction) =>
      describeInstruction(renameInstructionProperties(instruction, authored)),
    )
    .join(", ")}]`;
}

/** Everything the author would have had to do for the transition to read as finalized. */
function describeFinalizations(
  instructions: readonly InterfaceSchemaMigrationInstruction[],
): string {
  return instructions
    .map((instruction) =>
      describeFinalization(renameInstructionProperties(instruction, authored)),
    )
    .join(", and ");
}

/**
 * The transition an author should have declared to make `property` required, for the two findings
 * that are about exactly that.
 */
function describeRequiringProperty(property: string): string {
  return describeSuggestedTransition({ type: "addRequiredProperty", property });
}
