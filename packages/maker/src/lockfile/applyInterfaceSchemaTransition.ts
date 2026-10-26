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

import type { LockedPropertyType } from "./LockedPropertyType.js";
import type {
  LockedActionTypeConstraint,
  LockedInstruction,
  LockedInterfaceSchema,
  LockedProperty,
  LockedTransition,
} from "./OntologySchemaLockfile.js";
import {
  actionTypeConstraintsOf,
  isDeprecated,
  own,
} from "./OntologySchemaLockfile.js";

/**
 * Whether a transition's instructions are being enforced.
 *
 * - `lenient`: the transition is in flight. Implementing object types are not held to it yet.
 * - `strict`: the transition has been finalized. Implementing object types must comply.
 */
export type ApplyMode = "lenient" | "strict";

/** A part of an interface's schema that an instruction can assert something about. */
export type SchemaElement =
  | { kind: "property"; apiName: string }
  | { kind: "actionTypeConstraint"; apiName: string }
  | { kind: "deprecated" };

/** What an instruction does to a property when applied. */
export type PropertyEdit =
  /** Adjusts attributes of a property the schema already records. */
  | { op: "patch"; type?: LockedPropertyType; required?: boolean }
  /** Introduces a property the schema does not record yet. */
  | { op: "add"; property: LockedProperty }
  /** Retires a property the schema records. */
  | { op: "remove" };

/** What an instruction does to an action type constraint the schema already records. */
export interface ActionTypeConstraintEdit {
  op: "patch";
  requireImplementation: boolean;
}

/** What an instruction does to one schema element, in both modes. */
type ElementTransition =
  | {
      kind: "property";
      apiName: string;
      lenient: PropertyEdit;
      strict: PropertyEdit;
    }
  | {
      kind: "actionTypeConstraint";
      apiName: string;
      lenient: ActionTypeConstraintEdit;
      strict: ActionTypeConstraintEdit;
    }
  /** Whether the interface is deprecated in each mode. */
  | { kind: "deprecated"; lenient: boolean; strict: boolean };

/** The per-element changes an instruction makes. */
function editsOf(instruction: LockedInstruction): readonly ElementTransition[] {
  switch (instruction.type) {
    case "addRequiredProperty":
      return [
        {
          kind: "property",
          apiName: instruction.property,
          lenient: { op: "patch", required: false },
          strict: { op: "patch", required: true },
        },
      ];
    case "addRequiredActionTypeConstraint":
      return [
        {
          kind: "actionTypeConstraint",
          apiName: instruction.actionTypeConstraint,
          lenient: { op: "patch", requireImplementation: false },
          strict: { op: "patch", requireImplementation: true },
        },
      ];
    case "replace":
      // The replacement only steers what proposals do to implementing object types; the
      // interface's own schema records nothing of it. The interface is already deprecated while
      // this is in flight; finalizing keeps it deprecated, while deleting reverts that.
      return [{ kind: "deprecated", lenient: false, strict: true }];
    default: {
      const unhandled: never = instruction;
      throw new Error(
        `Unknown schema migration instruction type: ${
          (unhandled as LockedInstruction).type
        }`,
      );
    }
  }
}

function elementOf(transition: ElementTransition): SchemaElement {
  return transition.kind === "deprecated"
    ? { kind: transition.kind }
    : { kind: transition.kind, apiName: transition.apiName };
}

/** A transition applied in one mode. */
export interface AppliedTransition {
  schema: LockedInterfaceSchema;
  /** The schema elements this application asserted something about. */
  touched: readonly SchemaElement[];
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
 * Applies one edit to `actionTypeConstraints` in place, reporting whether it could apply at all.
 *
 * @internal
 */
export function applyActionTypeConstraintEdit(
  actionTypeConstraints: Record<string, LockedActionTypeConstraint>,
  apiName: string,
  edit: ActionTypeConstraintEdit,
): boolean {
  const existing = own(actionTypeConstraints, apiName);
  if (existing === undefined) {
    return false;
  }

  const { op: _op, ...attributes } = edit;
  actionTypeConstraints[apiName] = { ...existing, ...attributes };
  return true;
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
  const {
    actionTypeConstraints: _actionTypeConstraints,
    deprecated: _deprecated,
    ...rest
  } = schema;
  const properties = { ...schema.properties };
  const actionTypeConstraints = { ...actionTypeConstraintsOf(schema) };
  let deprecated = isDeprecated(schema);
  const touched = new Map<string, SchemaElement>();

  for (const instruction of transition.instructions) {
    for (const elementTransition of editsOf(instruction)) {
      switch (elementTransition.kind) {
        case "property":
          if (
            !applyEdit(
              properties,
              elementTransition.apiName,
              elementTransition[mode],
            )
          ) {
            return undefined;
          }
          break;
        case "actionTypeConstraint":
          if (
            !applyActionTypeConstraintEdit(
              actionTypeConstraints,
              elementTransition.apiName,
              elementTransition[mode],
            )
          ) {
            return undefined;
          }
          break;
        case "deprecated":
          deprecated = elementTransition[mode];
          break;
        default: {
          const unhandled: never = elementTransition;
          throw new Error(
            `Unknown schema element: ${JSON.stringify(unhandled)}`,
          );
        }
      }

      const element = elementOf(elementTransition);
      touched.set(JSON.stringify(element), element);
    }
  }

  return {
    schema: {
      ...rest,
      properties,
      // NB: spread rather than assigned `undefined`, to keep the same shape as a generated schema
      ...(Object.keys(actionTypeConstraints).length > 0 && {
        actionTypeConstraints,
      }),
      ...(deprecated && { deprecated: true as const }),
    },
    touched: [...touched.values()],
  };
}

/** Every schema element a transition could touch, in either mode. */
export function targetsOf(transition: LockedTransition): SchemaElement[] {
  return transition.instructions.flatMap((instruction) =>
    editsOf(instruction).map(elementOf),
  );
}

/** Every property a transition could touch, in either mode. */
export function targetPropertiesOf(transition: LockedTransition): string[] {
  return targetsOf(transition).flatMap((element) =>
    element.kind === "property" ? [element.apiName] : [],
  );
}

/** Every action type constraint a transition could touch, in either mode. */
export function targetActionTypeConstraintsOf(
  transition: LockedTransition,
): string[] {
  return targetsOf(transition).flatMap((element) =>
    element.kind === "actionTypeConstraint" ? [element.apiName] : [],
  );
}

/** What `schema` records for `element`. */
function valueAt(
  schema: LockedInterfaceSchema,
  element: SchemaElement,
): LockedProperty | LockedActionTypeConstraint | boolean | undefined {
  switch (element.kind) {
    case "property":
      return own(schema.properties, element.apiName);
    case "actionTypeConstraint":
      return own(actionTypeConstraintsOf(schema), element.apiName);
    case "deprecated":
      return isDeprecated(schema);
    default: {
      const unhandled: never = element;
      throw new Error(`Unknown schema element: ${JSON.stringify(unhandled)}`);
    }
  }
}

/**
 * Whether applying a transition in one mode results in `schema`, comparing only the elements the
 * application asserted something about.
 */
export function reproduces(
  applied: AppliedTransition | undefined,
  schema: LockedInterfaceSchema,
): boolean {
  if (applied === undefined || applied.touched.length === 0) {
    return false;
  }

  return applied.touched.every((element) =>
    isDeepStrictEqual(
      valueAt(applied.schema, element),
      valueAt(schema, element),
    ),
  );
}
