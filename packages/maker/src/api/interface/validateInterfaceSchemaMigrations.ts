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

import invariant from "tiny-invariant";

import { namespace } from "../defineOntology.js";
import { combineApiNamespaceIfMissing } from "../namespace/combineApiNamespaceIfMissing.js";
import { describeInstruction } from "./describeInterfaceSchemaMigrationInstruction.js";
import {
  type InterfacePropertyType,
  isInterfacePropertyRequired,
} from "./InterfacePropertyType.js";
import type {
  InterfaceSchemaGracePeriod,
  InterfaceSchemaMigrationInstruction,
  InterfaceSchemaMigrations,
  InterfaceSchemaTransition,
  InterfaceTypeReplacement,
} from "./InterfaceSchemaMigrations.js";

// Constants enforced by OMS at installation-time.
const MAX_TRANSITIONS = 20;
const MAX_INSTRUCTIONS = 500;
const MAX_ID_LENGTH = 150;
const ID_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9_-]*$/u;
const MAX_TITLE_LENGTH = 500;
const MAX_DESCRIPTION_LENGTH = 2000;
const MIN_GRACE_PERIOD_DAYS = 7;
const MAX_GRACE_PERIOD_DAYS = 180;

/**
 * Structural validation for authored Interface Type Schema Migrations.
 */
export function validateInterfaceSchemaMigrations(
  interfaceApiName: string,
  schemaMigrations: InterfaceSchemaMigrations,
  // The interface type's locally-defined properties; inherited properties are not included
  // (since migrations for those should occur in the interface that defines them)
  propertiesV3: Record<string, InterfacePropertyType>,
): void {
  const { transitions } = schemaMigrations;

  invariant(
    transitions.length <= MAX_TRANSITIONS,
    `Interface ${interfaceApiName} has ${transitions.length} schema migration transitions, which exceeds the maximum of ${MAX_TRANSITIONS}.`,
  );

  const seenIds = new Set<string>();
  // Which transition owns a claim, to prevent conflicting migrations.
  const claimedBy = new Map<
    string,
    { transitionId: string; description: string }
  >();

  for (const transition of transitions) {
    const { id, title, description, gracePeriod, instructions } = transition;

    invariant(
      id.length > 0 && id.length <= MAX_ID_LENGTH,
      `Schema migration transition id "${id}" on interface ${interfaceApiName} must be between 1 and ${MAX_ID_LENGTH} characters, but was ${id.length}.`,
    );
    invariant(
      ID_PATTERN.test(id),
      `Schema migration transition id "${id}" on interface ${interfaceApiName} must match ${ID_PATTERN.source}: a letter or digit followed by letters, digits, underscores, or dashes.`,
    );
    invariant(
      !seenIds.has(id),
      `Duplicate schema migration transition id "${id}" on interface ${interfaceApiName}.`,
    );
    seenIds.add(id);

    invariant(
      title.length > 0 && title.length <= MAX_TITLE_LENGTH,
      `Schema migration transition "${id}" on interface ${interfaceApiName} must have a title between 1 and ${MAX_TITLE_LENGTH} characters, but was ${title.length}.`,
    );
    if (description !== undefined) {
      invariant(
        description.length <= MAX_DESCRIPTION_LENGTH,
        `Schema migration transition "${id}" on interface ${interfaceApiName} has a description of length ${description.length}, which exceeds the maximum of ${MAX_DESCRIPTION_LENGTH}.`,
      );
    }

    invariant(
      instructions.length > 0,
      `Schema migration transition "${id}" on interface ${interfaceApiName} must have at least one instruction.`,
    );
    invariant(
      instructions.length <= MAX_INSTRUCTIONS,
      `Schema migration transition "${id}" on interface ${interfaceApiName} has ${instructions.length} instructions, which exceeds the maximum of ${MAX_INSTRUCTIONS}.`,
    );

    validateGracePeriod(interfaceApiName, id, gracePeriod);

    for (const instruction of instructions) {
      validateInstruction(interfaceApiName, transition, instruction, {
        transitionCount: transitions.length,
        propertiesV3,
      });

      const instructionDescription = describeInstruction(instruction);
      for (const claim of getClaims(instruction)) {
        const conflict = claimedBy.get(claim);
        invariant(
          conflict === undefined,
          `Schema migration transition "${id}" on interface ${interfaceApiName} declares ${instructionDescription}, which conflicts with ${conflict?.description} already declared by transition "${conflict?.transitionId}". A property or action type constraint may be migrated by at most one in-flight transition.`,
        );
        claimedBy.set(claim, {
          transitionId: id,
          description: instructionDescription,
        });
      }
    }
  }
}

export function isCanonicalIsoUtcDatetime(value: string): boolean {
  const asIsoString = Number.isNaN(Date.parse(value))
    ? undefined
    : new Date(value).toISOString();
  return (
    asIsoString !== undefined &&
    // Ensures the declared deadline is actually an ISO string, rather than a bare date-only string
    // (so we don't have to pick whether a bare date means "done by this day" or "done at the end
    // of this day")
    (value === asIsoString || value === asIsoString.replace(/\.000Z$/u, "Z"))
  );
}

function validateGracePeriod(
  apiName: string,
  transitionId: string,
  gracePeriod: InterfaceSchemaGracePeriod,
): void {
  switch (gracePeriod.type) {
    case "afterInstall": {
      const { days } = gracePeriod;
      invariant(
        Number.isInteger(days) &&
          days >= MIN_GRACE_PERIOD_DAYS &&
          days <= MAX_GRACE_PERIOD_DAYS,
        `Schema migration transition "${transitionId}" on interface ${apiName} has an 'afterInstall' grace period of ${days} days, but days must be an integer in [${MIN_GRACE_PERIOD_DAYS}, ${MAX_GRACE_PERIOD_DAYS}] (inclusive).`,
      );
      return;
    }
    case "deadline": {
      const { deadline } = gracePeriod;
      invariant(
        isCanonicalIsoUtcDatetime(deadline),
        `Schema migration transition "${transitionId}" on interface ${apiName} has a 'deadline' grace period of "${deadline}", which is not a canonical ISO-8601 UTC datetime (e.g. "2026-01-31T00:00:00Z").`,
      );
      return;
    }
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

interface InstructionContext {
  transitionCount: number;
  // The interface type's locally-defined properties
  propertiesV3: Record<string, InterfacePropertyType>;
}

/**
 * Checks that need only the declaring interface type. Checks against other entities (action type
 * constraints, link constraints, the replacement interface type, etc.) are deferred to
 * `validateInterfaceSchemaMigrationReferences`, since those are attached after `defineInterface`.
 */
function validateInstruction(
  interfaceApiName: string,
  transition: InterfaceSchemaTransition,
  instruction: InterfaceSchemaMigrationInstruction,
  { transitionCount, propertiesV3 }: InstructionContext,
): void {
  const transitionId = transition.id;
  switch (instruction.type) {
    case "addRequiredProperty": {
      const { property: propertyApiName } = instruction;
      invariant(
        Object.hasOwn(propertiesV3, propertyApiName),
        `Schema migration transition "${transitionId}" on interface ${interfaceApiName} references property "${propertyApiName}" via ${instruction.type}, but interface ${interfaceApiName} does not declare that property. Properties inherited from an extended interface must be migrated by a transition on the interface that declares them.`,
      );
      invariant(
        !isInterfacePropertyRequired(propertiesV3[propertyApiName]),
        `Schema migration transition "${transitionId}" on interface ${interfaceApiName} targets property "${propertyApiName}" via ${instruction.type}, but that property is required. Only properties declared required: false may be targeted.`,
      );
      return;
    }
    case "addRequiredActionTypeConstraint":
      // Whether the constraint exists is checked once the ontology is fully defined
      return;
    case "replace": {
      const description = describeInstruction(instruction);
      // A replace is never finalized, so this also keeps any further migration off the interface
      invariant(
        transition.instructions.length === 1 && transitionCount === 1,
        `Schema migration transition "${transitionId}" on interface ${interfaceApiName} declares ${description}, but ${
          transitionCount === 1
            ? `the transition has ${transition.instructions.length} instructions`
            : `interface ${interfaceApiName} has ${transitionCount} transitions`
        }. A replacement must be the only instruction of the only transition on its interface, and stays declared as a tombstone; finalize or remove the other migrations first.`,
      );
      validateReplacementMappings(
        interfaceApiName,
        transitionId,
        description,
        instruction.replacement,
      );
      return;
    }
    default: {
      const unhandled: never = instruction;
      throw new Error(
        `Unknown schema migration instruction type: ${
          (unhandled as InterfaceSchemaMigrationInstruction).type
        }`,
      );
    }
  }
}

/** Rejects mappings that send two of this interface type's entities to the same target. */
function validateReplacementMappings(
  interfaceApiName: string,
  transitionId: string,
  description: string,
  replacement: InterfaceTypeReplacement,
): void {
  const actionTypeConstraintMappings = Object.entries(
    replacement.actionTypeConstraintMappings ?? {},
  );
  const mappings: Array<[field: string, mapping: Record<string, string>]> = [
    ["propertyMappings", replacement.propertyMappings],
    [
      "linkTypeConstraintMappings",
      replacement.linkTypeConstraintMappings ?? {},
    ],
    [
      "actionTypeConstraintMappings",
      Object.fromEntries(
        actionTypeConstraintMappings.map(
          ([source, { actionTypeConstraint }]) => [
            source,
            actionTypeConstraint,
          ],
        ),
      ),
    ],
    ...actionTypeConstraintMappings.map(
      ([source, { parameterMappings }]): [string, Record<string, string>] => [
        `actionTypeConstraintMappings["${source}"].parameterMappings`,
        parameterMappings ?? {},
      ],
    ),
  ];
  for (const [field, mapping] of mappings) {
    const sourceByTarget = new Map<string, string>();
    for (const [source, target] of Object.entries(mapping)) {
      const previous = sourceByTarget.get(target);
      invariant(
        previous === undefined,
        `Schema migration transition "${transitionId}" on interface ${interfaceApiName} declares ${description}, whose ${field} maps both "${previous}" and "${source}" to "${target}". Each target may be mapped from at most one source.`,
      );
      sourceByTarget.set(target, source);
    }
  }
}

/**
 * What an instruction claims exclusive use of for the duration of its transition.
 *
 * Stacked migrations (i.e. those which operate against the same property, etc.) are not allowed today,
 * so we reject any conflicting migrations that try to claim the same thing,
 */
function getClaims(
  instruction: InterfaceSchemaMigrationInstruction,
): readonly string[] {
  switch (instruction.type) {
    case "addRequiredProperty":
      return [`property:${instruction.property}`];
    case "addRequiredActionTypeConstraint":
      return [
        `actionTypeConstraint:${combineApiNamespaceIfMissing(
          namespace,
          instruction.actionTypeConstraint,
        )}`,
      ];
    case "replace":
      return ["replace"];
    default: {
      const unhandled: never = instruction;
      throw new Error(
        `Unknown schema migration instruction type: ${
          (unhandled as InterfaceSchemaMigrationInstruction).type
        }`,
      );
    }
  }
}
