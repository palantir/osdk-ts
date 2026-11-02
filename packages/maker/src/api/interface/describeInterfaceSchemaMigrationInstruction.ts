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
   * clause to be embedded in a sentence, e.g. set "lastName" to `required: true`. Absent for an
   * instruction that is never finalized.
   */
  finalization: string | undefined;
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
      };
    }
    case "addRequiredActionTypeConstraint": {
      const { actionTypeConstraint } = instruction;
      return {
        describe: `addRequiredActionTypeConstraint("${actionTypeConstraint}")`,
        finalization: `set "${actionTypeConstraint}" to \`requireImplementation: true\``,
      };
    }
    case "replace": {
      const { interfaceType } = instruction.replacement;
      const replacementApiName =
        typeof interfaceType === "string"
          ? interfaceType
          : interfaceType.apiName;
      return {
        describe: `replace("${replacementApiName}")`,
        // replace sits as a tombstone, never finalizing (short of deleting the interface type)
        finalization: undefined,
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
): string | undefined {
  return proseFor(instruction).finalization;
}

/**
 * The transition an author should declare to phase a newly-required entity in, as a DSL literal
 * they can paste.
 */
export function describeSuggestedTransition(
  instruction: Extract<
    InterfaceSchemaMigrationInstruction,
    { type: "addRequiredProperty" | "addRequiredActionTypeConstraint" }
  >,
): string {
  switch (instruction.type) {
    case "addRequiredProperty": {
      const { property: propertyApiName } = instruction;
      return (
        `{ id: "require-${propertyApiName}", title: "Require ${propertyApiName}", ` +
        `gracePeriod: { type: "afterInstall", days: 30 }, ` +
        `instructions: [{ type: "addRequiredProperty", property: "${propertyApiName}" }] }`
      );
    }
    case "addRequiredActionTypeConstraint": {
      const { actionTypeConstraint } = instruction;
      return (
        `{ id: "require-${actionTypeConstraint}", title: "Require ${actionTypeConstraint}", ` +
        `gracePeriod: { type: "afterInstall", days: 30 }, ` +
        `instructions: [{ type: "addRequiredActionTypeConstraint", actionTypeConstraint: "${actionTypeConstraint}" }] }`
      );
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
