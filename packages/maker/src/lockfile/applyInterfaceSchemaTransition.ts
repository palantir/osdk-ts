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
import type { PropertyTypeType } from "../api/properties/PropertyTypeType.js";
import type {
  LockedInterfaceSchema,
  LockedTransition,
} from "./OntologySchemaLockfile.js";

/**
 * Whether a transition's instructions are being enforced.
 *
 * - `lenient`: the transition is in flight. Implementing object types are not held to it yet.
 * - `strict`: the transition has been finalized. Implementing object types must comply.
 *
 * Not vocabulary an author ever writes: it names the two readings of an in-flight transition that
 * reconciling a lockfile against source has to tell apart.
 */
export type ApplyMode = "lenient" | "strict";

/**
 * The change an instruction makes to one property, as a patch over that property's recorded shape.
 *
 * Spelled out structurally rather than as a `Partial` of the lockfile's property type so that
 * describing an instruction stays independent of how it happens to be persisted. The fields line
 * up, so applying an edit is a spread.
 */
interface PropertyEdit {
  type?: PropertyTypeType;
  required?: boolean;
}

/**
 * The per-property changes an instruction makes in the given mode, keyed by the property each one
 * applies to.
 *
 * This is the only place an instruction is read for what it touches and what it does to it, so
 * "which properties this affects" cannot drift out of step with "how it affects them". Both
 * readings of a transition and the comparison between them derive from this map.
 */
function instructionEdits(
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
 * The properties an instruction touches, which may be none: an instruction that changes an
 * interface-level attribute rather than a property targets nothing.
 *
 * The union across both modes, so an instruction whose target depends on whether it has been
 * finalized reports every name it could occupy. Callers that need the properties one *particular*
 * application touched should read them off that application instead.
 */
function instructionTargetProperties(
  instruction: InterfaceSchemaMigrationInstruction,
): readonly string[] {
  return [
    ...new Set([
      ...instructionEdits(instruction, "lenient").keys(),
      ...instructionEdits(instruction, "strict").keys(),
    ]),
  ];
}

/** A transition applied in one mode. */
export interface AppliedTransition {
  schema: LockedInterfaceSchema;
  /**
   * The properties this application changed, which are the ones {@link schemasAgreeOn} should be
   * asked about. Reading them off the application rather than off the transition is what keeps the
   * comparison honest for an instruction whose target depends on the mode.
   */
  touched: readonly string[];
}

/**
 * The schema that results from patching `schema` with `edits`, or `undefined` if any target
 * property is absent.
 *
 * Every instruction so far patches properties that already exist, so that precondition lives in
 * this shared fold. An instruction that *creates* a property would need {@link PropertyEdit} to
 * distinguish creation from patching, and the check belongs with that distinction rather than with
 * the identity of the instruction that asked for it.
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
 *
 * Comparing both modes against the new source schema is how a transition disappearing from the
 * source is disambiguated: matching `strict` means the author finalized it, matching `lenient`
 * means the author deleted it, and matching neither means the author made an illegal change.
 * This mirrors the reconciliation OMS performs at installation-time.
 */
export function applyTransition(
  transition: LockedTransition,
  schema: LockedInterfaceSchema,
  mode: ApplyMode,
): AppliedTransition | undefined {
  let applied: LockedInterfaceSchema = schema;
  const touched = new Set<string>();
  for (const instruction of transition.instructions) {
    const edits = instructionEdits(instruction, mode);
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
 * Every property a transition could touch, in either mode. These are exempt from the general
 * breaking-change checks, because a transition disappearing has already been reported on in its
 * own right.
 *
 * Not the right list for the deletion-vs-finalization comparison itself: that has a mode in hand
 * and should use {@link AppliedTransition.touched}.
 */
export function transitionTargetProperties(
  transition: LockedTransition,
): string[] {
  return transition.instructions.flatMap(instructionTargetProperties);
}

/**
 * Whether two schemas agree on the named properties. A property missing from either side counts
 * as a disagreement, so a removed property never masquerades as a successful application.
 *
 * An empty list is `false`, not vacuously `true`: naming no properties means the schemas were
 * never compared, and the sole caller reads `true` as "this transition was applied". An
 * instruction that changes an interface-level attribute rather than a property would touch
 * nothing, and must not read as its own successful application.
 */
export function schemasAgreeOn(
  a: LockedInterfaceSchema,
  b: LockedInterfaceSchema,
  propertyApiNames: readonly string[],
): boolean {
  if (propertyApiNames.length === 0) {
    return false;
  }
  return propertyApiNames.every(
    (apiName) =>
      a.properties[apiName] !== undefined &&
      isDeepStrictEqual(a.properties[apiName], b.properties[apiName]),
  );
}
