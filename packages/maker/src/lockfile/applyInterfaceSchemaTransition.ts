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
import type { LockedPropertyType } from "./LockedPropertyType.js";
import type {
  LockedInterfaceSchema,
  LockedProperty,
  LockedTransition,
} from "./OntologySchemaLockfile.js";
import { own } from "./OntologySchemaLockfile.js";

/**
 * Whether a transition's instructions are being enforced.
 *
 * - `lenient`: the transition is in flight. Implementing object types are not held to it yet.
 * - `strict`: the transition has been finalized. Implementing object types must comply.
 */
export type ApplyMode = "lenient" | "strict";

/** What an instruction does to a property when applied. */
export type PropertyEdit =
  /** Adjusts attributes of a property the schema already records. */
  | { op: "patch"; type?: LockedPropertyType; required?: boolean }
  /** Introduces a property the schema does not record yet. */
  | { op: "add"; property: LockedProperty }
  /** Retires a property the schema records. */
  | { op: "remove" };

/** * What an instruction does to one property, in both modes. */
interface PropertyTransition {
  lenient: PropertyEdit;
  strict: PropertyEdit;
}

/** The per-property changes an instruction makes, keyed by the property each one applies to. */
function editsOf(
  instruction: InterfaceSchemaMigrationInstruction,
): ReadonlyMap<string, PropertyTransition> {
  switch (instruction.type) {
    case "addRequiredProperty":
      return new Map([
        [
          instruction.property,
          {
            lenient: { op: "patch", required: false },
            strict: { op: "patch", required: true },
          } satisfies PropertyTransition,
        ],
      ]);
    default:
      // TODO: add a never exhaustiveness check once there's more than one instruction type
      throw new Error(
        `Unknown schema migration instruction type: ${instruction.type}`,
      );
  }
}

/** A transition applied in one mode. */
export interface AppliedTransition {
  schema: LockedInterfaceSchema;
  /** The properties this application asserted something about. */
  touched: readonly string[];
}

/**
 * Applies one edit to `properties` in place, reporting whether it could apply at all.
 *
 * @internal
 */
export function applyEdit(
  properties: Record<string, LockedProperty>,
  propertyApiName: string,
  edit: PropertyEdit,
): boolean {
  const existing = own(properties, propertyApiName);
  switch (edit.op) {
    case "patch": {
      if (existing === undefined) {
        return false;
      }

      const { op: _op, ...attributes } = edit;
      properties[propertyApiName] = { ...existing, ...attributes };
      return true;
    }
    case "add": {
      if (existing !== undefined) {
        return false;
      }

      properties[propertyApiName] = edit.property;
      return true;
    }
    case "remove": {
      if (existing === undefined) {
        return false;
      }

      delete properties[propertyApiName];
      return true;
    }
    default: {
      const unhandled: never = edit;
      throw new Error(`Unknown property edit: ${JSON.stringify(unhandled)}`);
    }
  }
}

/**
 * The result of applying `transition` to `schema` in the given mode, or `undefined` if the
 * transition cannot be applied to that schema at all (e.g. it patches a property the schema does
 * not record).
 */
export function applyTransition(
  transition: LockedTransition,
  schema: LockedInterfaceSchema,
  mode: ApplyMode,
): AppliedTransition | undefined {
  const properties = { ...schema.properties };
  const touched = new Set<string>();

  for (const instruction of transition.instructions) {
    for (const [propertyApiName, byMode] of editsOf(instruction)) {
      if (!applyEdit(properties, propertyApiName, byMode[mode])) {
        return undefined;
      }
      touched.add(propertyApiName);
    }
  }

  return { schema: { ...schema, properties }, touched: [...touched] };
}

/**
 * Whether applying a transition in one mode results in `schema`, comparing only the properties the
 * application asserted something about.
 */
export function reproduces(
  applied: AppliedTransition | undefined,
  schema: LockedInterfaceSchema,
): boolean {
  if (applied === undefined || applied.touched.length === 0) {
    return false;
  }

  return applied.touched.every((propertyApiName) =>
    isDeepStrictEqual(
      own(applied.schema.properties, propertyApiName),
      own(schema.properties, propertyApiName),
    ),
  );
}
