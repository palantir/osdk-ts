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

import type { InterfaceSchemaMigrationInstruction } from "../api/interface/InterfaceSchemaMigrations.js";
import type { LockedPropertyType } from "./normalizePropertyType.js";
import type {
  LockedInterfaceSchema,
  LockedTransition,
} from "./OntologySchemaLockfile.js";

/**
 * Whether a transition's instructions are being enforced.
 *
 * - `lenient`: the transition is in flight. Implementing object types are not held to it yet.
 * - `strict`: the transition has been finalized. Implementing object types must comply.
 */
export type ApplyMode = "lenient" | "strict";

/**
 * The change an instruction makes to one property, as a patch over that property's recorded shape.
 */
interface PropertyEdit {
  type?: LockedPropertyType;
  required?: boolean;
}

/**
 * The per-property changes an instruction makes in the given mode, keyed by the property each one
 * applies to.
 */
function editsByProperty(
  instruction: InterfaceSchemaMigrationInstruction,
  mode: ApplyMode,
): ReadonlyMap<string, PropertyEdit> {
  switch (instruction.type) {
    case "addRequiredProperty":
      return new Map([[instruction.property, { required: mode === "strict" }]]);
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
  }
}

/**
 * The properties an instruction touches (which maybe none if the instruction targets
 * interface-level attributes rather than property-level attributes).
 */
function targetPropertiesOfInstruction(
  instruction: InterfaceSchemaMigrationInstruction,
): readonly string[] {
  return [
    ...new Set([
      // Include both modes since an instruction could target different properties depending
      // on whether it's been finalized or not
      ...editsByProperty(instruction, "lenient").keys(),
      ...editsByProperty(instruction, "strict").keys(),
    ]),
  ];
}

/** A transition applied in one mode. */
export interface AppliedTransition {
  schema: LockedInterfaceSchema;
  /** The properties this application changed. */
  touched: readonly string[];
}

/**
 * The schema that results from patching `schema` with `edits`, or `undefined` if any target
 * property is absent.
 */
function applyEdits(
  schema: LockedInterfaceSchema,
  edits: ReadonlyMap<string, PropertyEdit>,
): LockedInterfaceSchema | undefined {
  const properties = { ...schema.properties };
  for (const [apiName, edit] of edits) {
    const existing = properties[apiName];
    if (existing === undefined) {
      return undefined;
    }
    properties[apiName] = { ...existing, ...edit };
  }
  return { ...schema, properties };
}

/**
 * The result of applying `transition` to `schema` in the given mode, or `undefined` if the
 * transition cannot be applied to that schema at all (e.g. it targets a property the schema does
 * not have).
 */
export function applyTransition(
  transition: LockedTransition,
  schema: LockedInterfaceSchema,
  mode: ApplyMode,
): AppliedTransition | undefined {
  let applied: LockedInterfaceSchema = schema;
  const touched = new Set<string>();
  for (const instruction of transition.instructions) {
    const edits = editsByProperty(instruction, mode);
    const next = applyEdits(applied, edits);
    if (next === undefined) {
      return undefined;
    }
    applied = next;
    for (const apiName of edits.keys()) {
      touched.add(apiName);
    }
  }
  return { schema: applied, touched: [...touched] };
}

/**
 * Every property a transition could touch, in either mode.
 *
 * These are exempt from the general breaking-change checks, because a transition disappearing
 * has already been reported on in its own right.
 */
export function targetPropertiesOf(transition: LockedTransition): string[] {
  return transition.instructions.flatMap(targetPropertiesOfInstruction);
}

/**
 * Whether two schemas agree on the named properties, comparing the whole state of each name.
 *
 * At least one property must be named: an instruction that changes interface-level attributes
 * rather than property-level ones cannot be decided by this comparison.
 */
export function schemasAgreeOn(
  a: LockedInterfaceSchema,
  b: LockedInterfaceSchema,
  propertyApiNames: readonly string[],
): boolean {
  if (propertyApiNames.length === 0) {
    throw new Error(
      "schemasAgreeOn requires at least one property to compare.",
    );
  }
  return propertyApiNames.every((apiName) =>
    isDeepStrictEqual(a.properties[apiName], b.properties[apiName]),
  );
}
