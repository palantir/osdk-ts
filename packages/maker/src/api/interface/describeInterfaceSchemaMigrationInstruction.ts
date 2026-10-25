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

import type { InterfaceSchemaMigrationInstruction } from "./InterfaceSchemaMigrations.js";

interface InstructionProse {
  /** The instruction as it appears in error messages. */
  describe: string;
  /**
   * The action an author must take for the migration to be finalized, phrased as an imperative
   * clause to be embedded in a sentence, e.g. set "lastName" to `required: true`.
   */
  finalization: string;
  /** The transition an author should declare to phase the change in, as a DSL literal they can paste. */
  suggestedTransition: string;
}

/**
 * The instruction with every property it references renamed by `rename`.
 */
export function mapPropertyNames(
  instruction: InterfaceSchemaMigrationInstruction,
  rename: (propertyApiName: string) => string,
): InterfaceSchemaMigrationInstruction {
  switch (instruction.type) {
    case "addRequiredProperty":
      return {
        type: "addRequiredProperty",
        property: rename(instruction.property),
      };
    case "addRequiredActionTypeConstraint":
      return instruction;
    case "deprecate": {
      const { replacement } = instruction;
      if (replacement === undefined) {
        return instruction;
      }
      // Only the keys are this interface type's properties; the values belong to the replacement
      return {
        type: "deprecate",
        replacement: {
          ...replacement,
          propertyMappings: Object.fromEntries(
            Object.entries(replacement.propertyMappings).map(([from, to]) => [
              rename(from),
              to,
            ]),
          ),
        },
      };
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

/** How each instruction variant is worded in messages to users. */
function proseFor(
  instruction: InterfaceSchemaMigrationInstruction,
): InstructionProse {
  switch (instruction.type) {
    case "addRequiredProperty": {
      const { property: propertyApiName } = instruction;
      return {
        describe: `addRequiredProperty("${propertyApiName}")`,
        finalization: `set "${propertyApiName}" to \`required: true\``,
        suggestedTransition:
          `{ id: "require-${propertyApiName}", title: "Require ${propertyApiName}", ` +
          `gracePeriod: { type: "afterInstall", days: 30 }, ` +
          `instructions: [{ type: "addRequiredProperty", property: "${propertyApiName}" }] }`,
      };
    }
    case "addRequiredActionTypeConstraint": {
      const { actionTypeConstraint } = instruction;
      return {
        describe: `addRequiredActionTypeConstraint("${actionTypeConstraint}")`,
        finalization: `set "${actionTypeConstraint}" to \`requireImplementation: true\``,
        suggestedTransition:
          `{ id: "require-${actionTypeConstraint}", title: "Require ${actionTypeConstraint}", ` +
          `gracePeriod: { type: "afterInstall", days: 30 }, ` +
          `instructions: [{ type: "addRequiredActionTypeConstraint", actionTypeConstraint: "${actionTypeConstraint}" }] }`,
      };
    }
    case "deprecate": {
      const { replacement } = instruction;
      const replacementApiName =
        replacement === undefined
          ? undefined
          : typeof replacement.interfaceType === "string"
            ? replacement.interfaceType
            : replacement.interfaceType.apiName;
      return {
        describe:
          replacementApiName === undefined
            ? `deprecate()`
            : `deprecate(replacement: "${replacementApiName}")`,
        finalization: `set \`allowNewImplementations: false\` on the deprecated status`,
        suggestedTransition:
          `{ id: "deprecate", title: "Deprecate", ` +
          `gracePeriod: { type: "afterInstall", days: 30 }, ` +
          `instructions: [{ type: "deprecate"${
            replacementApiName === undefined
              ? ""
              : `, replacement: { interfaceType: "${replacementApiName}", propertyMappings: {} }`
          } }] }`,
      };
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

export function describeInstruction(
  instruction: InterfaceSchemaMigrationInstruction,
): string {
  return proseFor(instruction).describe;
}

export function describeFinalization(
  instruction: InterfaceSchemaMigrationInstruction,
): string {
  return proseFor(instruction).finalization;
}

export function describeSuggestedTransition(
  instruction: InterfaceSchemaMigrationInstruction,
): string {
  return proseFor(instruction).suggestedTransition;
}
