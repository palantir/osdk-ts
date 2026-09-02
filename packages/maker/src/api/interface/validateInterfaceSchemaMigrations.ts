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

import {
  type InterfacePropertyType,
  isInterfacePropertyRequired,
} from "./InterfacePropertyType.js";
import type {
  InterfaceSchemaGracePeriod,
  InterfaceSchemaMigrationInstruction,
  InterfaceSchemaMigrations,
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
  apiName: string,
  schemaMigrations: InterfaceSchemaMigrations,
  // The interface type's locally-defined properties; inherited properties are not included
  // (since migrations for those should occur in the interface that defines them)
  propertiesV3: Record<string, InterfacePropertyType>,
): void {
  const { transitions } = schemaMigrations;

  invariant(
    transitions.length <= MAX_TRANSITIONS,
    `Interface ${apiName} has ${transitions.length} schema migration transitions, which exceeds the maximum of ${MAX_TRANSITIONS}.`,
  );

  const seenIds = new Set<string>();
  // Maps (instruction type + target property) to the transition that first declared it,
  // across ALL transitions.
  const seenInstructions = new Map<string, string>();

  for (const transition of transitions) {
    const { id, title, description, gracePeriod, instructions } = transition;

    invariant(
      id.length > 0 && id.length <= MAX_ID_LENGTH,
      `Schema migration transition id "${id}" on interface ${apiName} must be between 1 and ${MAX_ID_LENGTH} characters, but was ${id.length}.`,
    );
    invariant(
      ID_PATTERN.test(id),
      `Schema migration transition id "${id}" on interface ${apiName} must match ${ID_PATTERN.source}: a letter or digit followed by letters, digits, underscores, or dashes.`,
    );
    invariant(
      !seenIds.has(id),
      `Duplicate schema migration transition id "${id}" on interface ${apiName}.`,
    );
    seenIds.add(id);

    invariant(
      title.length > 0 && title.length <= MAX_TITLE_LENGTH,
      `Schema migration transition "${id}" on interface ${apiName} must have a title between 1 and ${MAX_TITLE_LENGTH} characters, but was ${title.length}.`,
    );
    if (description !== undefined) {
      invariant(
        description.length <= MAX_DESCRIPTION_LENGTH,
        `Schema migration transition "${id}" on interface ${apiName} has a description of length ${description.length}, which exceeds the maximum of ${MAX_DESCRIPTION_LENGTH}.`,
      );
    }

    invariant(
      instructions.length > 0,
      `Schema migration transition "${id}" on interface ${apiName} must have at least one instruction.`,
    );
    invariant(
      instructions.length <= MAX_INSTRUCTIONS,
      `Schema migration transition "${id}" on interface ${apiName} has ${instructions.length} instructions, which exceeds the maximum of ${MAX_INSTRUCTIONS}.`,
    );

    validateGracePeriod(apiName, id, gracePeriod);

    for (const instruction of instructions) {
      const instructionKey = `${instruction.type}:${instruction.property}`;
      const alreadyDeclaredBy = seenInstructions.get(instructionKey);
      invariant(
        alreadyDeclaredBy === undefined,
        `Schema migration transition "${id}" on interface ${apiName} repeats the instruction ${instruction.type} for property "${instruction.property}", which transition "${alreadyDeclaredBy}" already declares.`,
      );
      seenInstructions.set(instructionKey, id);

      validateInstruction(apiName, id, instruction, propertiesV3);
    }
  }
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
      const asIsoString = Number.isNaN(Date.parse(deadline))
        ? undefined
        : new Date(deadline).toISOString();
      invariant(
        asIsoString !== undefined &&
          // Ensures the declared deadline is actually an ISO string, rather than a bare date-only string
          // (so we don't have to pick whether a bare date means "done by this day" or "done at the end
          // of this day")
          (deadline === asIsoString ||
            deadline === asIsoString.replace(/\.000Z$/u, "Z")),
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

function validateInstruction(
  apiName: string,
  transitionId: string,
  instruction: InterfaceSchemaMigrationInstruction,
  propertiesV3: Record<string, InterfacePropertyType>,
): void {
  const { property: propertyApiName } = instruction;
  invariant(
    Object.hasOwn(propertiesV3, propertyApiName),
    `Schema migration transition "${transitionId}" on interface ${apiName} references property "${propertyApiName}" via ${instruction.type}, but interface ${apiName} does not declare that property. Properties inherited from an extended interface must be migrated by a transition on the interface that declares them.`,
  );

  switch (instruction.type) {
    case "addRequiredProperty":
      invariant(
        !isInterfacePropertyRequired(propertiesV3[propertyApiName]),
        `Schema migration transition "${transitionId}" on interface ${apiName} targets property "${propertyApiName}" via ${instruction.type}, but that property is required. Only properties declared required: false may be targeted.`,
      );
      return;
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
  }
}
