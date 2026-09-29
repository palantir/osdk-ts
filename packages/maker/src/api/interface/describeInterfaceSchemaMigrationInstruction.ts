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
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
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
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
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
