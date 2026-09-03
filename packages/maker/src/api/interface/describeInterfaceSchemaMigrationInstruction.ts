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

/**
 * The instruction with every property it references renamed.
 *
 * The lockfile records instructions in published api names, so rendering one for the author means
 * putting it back into the keys they wrote.
 */
export function renameInstructionProperties(
  instruction: InterfaceSchemaMigrationInstruction,
  rename: (property: string) => string,
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

/**
 * Renders an instruction for use in error messages.
 */
export function describeInstruction(
  instruction: InterfaceSchemaMigrationInstruction,
): string {
  switch (instruction.type) {
    case "addRequiredProperty":
      return `addRequiredProperty("${instruction.property}")`;
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
  }
}

/**
 * Renders the action an author must take for a schema migration to be finalized, phrased as an
 * imperative clause to be embedded in a sentence, e.g. set "lastName" to `required: true`.
 */
export function describeFinalization(
  instruction: InterfaceSchemaMigrationInstruction,
): string {
  switch (instruction.type) {
    case "addRequiredProperty":
      return `set "${instruction.property}" to \`required: true\``;
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
  }
}

/**
 * Renders the transition an author should declare to phase in the change this instruction
 * describes, as a DSL literal they can paste.
 */
export function describeSuggestedTransition(
  instruction: InterfaceSchemaMigrationInstruction,
): string {
  switch (instruction.type) {
    case "addRequiredProperty":
      return (
        `{ id: "require-${instruction.property}", title: "Require ${instruction.property}", ` +
        `gracePeriod: { type: "afterInstall", days: 30 }, ` +
        `instructions: [{ type: "addRequiredProperty", property: "${instruction.property}" }] }`
      );
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
  }
}
