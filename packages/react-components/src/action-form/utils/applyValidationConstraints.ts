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

import type { ActionValidationResponse } from "@osdk/api";
import deepEqual from "fast-deep-equal";

import type { RendererFieldDefinition } from "../FormFieldApi.js";

/**
 * A single evaluated constraint returned by the action validation response for
 * one parameter (e.g. `oneOf`, `stringLength`, `range`, `arraySize`,
 * `stringRegexMatch`). Markers like `groupMember` and `unevaluable` are also
 * part of the union but are not enforced client-side.
 */
type EvaluatedConstraint =
  ActionValidationResponse["parameters"][string]["evaluatedConstraints"][number];

/**
 * Folds the evaluated constraints from an action validation response back into
 * the renderer field definitions so the rendering layer can:
 *
 * - swap a `oneOf` parameter to a dropdown whose choices are the allowed values,
 * - surface `stringLength` / `range` bounds as input render hints, and
 * - block submission (via a `validate` fn) when a value violates a `oneOf`,
 *   `arraySize`, or `stringRegexMatch` constraint.
 *
 * Enforcement is a client-side evaluation of the constraints against the
 * current value, not a read of the per-parameter `result` verdict.
 */
export function applyValidationConstraints(
  fieldDefinitions: ReadonlyArray<RendererFieldDefinition>,
  validationResult: ActionValidationResponse | undefined
): ReadonlyArray<RendererFieldDefinition> {
  if (validationResult == null) {
    return fieldDefinitions;
  }
  return fieldDefinitions.map((def) => {
    const paramResult = validationResult.parameters[def.fieldKey];
    if (paramResult == null) {
      return def;
    }
    // The validation response can mark a parameter required even when the
    // metadata declares it nullable. Surface that as `isRequired` so an empty
    // submission is blocked. Only escalate to required; never clear a
    // caller/metadata-declared requirement.
    // `def` is already a RendererFieldDefinition (a discriminated union keyed by
    // fieldComponent); the spread only overrides the shared `isRequired` flag and
    // leaves the fieldComponent ↔ fieldComponentProps pairing untouched, so the
    // discriminant stays valid.
    let result = paramResult.required
      ? ({ ...def, isRequired: true } as RendererFieldDefinition)
      : def;
    if (paramResult.evaluatedConstraints.length > 0) {
      result = applyConstraintsToField(
        result,
        paramResult.evaluatedConstraints
      );
    }
    return result;
  });
}

function applyConstraintsToField(
  def: RendererFieldDefinition,
  constraints: ReadonlyArray<EvaluatedConstraint>
): RendererFieldDefinition {
  let result = def;

  const oneOfs = filterConstraints(constraints, "oneOf");
  // Only an open `oneOf` (otherValuesAllowed) keeps the field typeable. If ANY
  // `oneOf` set forbids other values, the field closes into a fixed-choice
  // dropdown — even when an open set appears first — because the closed set is
  // the binding one.
  const closedOneOfs = oneOfs.filter((o) => o.otherValuesAllowed !== true);
  if (closedOneOfs.length > 0) {
    result = toDropdownField(def, closedOneOfs);
  } else {
    const stringLengths = filterConstraints(constraints, "stringLength");
    if (stringLengths.length > 0) {
      result = withLengthHints(result, stringLengths);
    }
    const ranges = filterConstraints(constraints, "range");
    if (ranges.length > 0) {
      result = withRangeHints(result, ranges);
    }
  }

  const constraintValidate = buildConstraintValidate(constraints);
  if (constraintValidate == null) {
    return result;
  }

  const existing = result.validate;
  const validate =
    existing == null
      ? constraintValidate
      : async (value: unknown): Promise<string | undefined> =>
          (await constraintValidate(value)) ?? existing(value);

  // `result` is already a RendererFieldDefinition; the spread only overrides the
  // shared top-level `validate` fn and leaves the fieldComponent ↔
  // fieldComponentProps pairing untouched, so the discriminant stays valid.
  return { ...result, validate } as RendererFieldDefinition;
}

function filterConstraints<T extends EvaluatedConstraint["type"]>(
  constraints: ReadonlyArray<EvaluatedConstraint>,
  type: T
): ReadonlyArray<Extract<EvaluatedConstraint, { type: T }>> {
  return constraints.filter(
    (c): c is Extract<EvaluatedConstraint, { type: T }> => c.type === type
  );
}

function toDropdownField(
  def: RendererFieldDefinition,
  closedOneOfs: ReadonlyArray<Extract<EvaluatedConstraint, { type: "oneOf" }>>
): RendererFieldDefinition {
  // When several closed sets apply, only the options common to ALL of them are
  // selectable. Match by structural (deep) equality so object-valued options
  // intersect and label correctly across sets that carry distinct identities.
  const [first, ...rest] = closedOneOfs;
  const options = first.options.filter((option) =>
    rest.every((set) =>
      set.options.some((other) =>
        deepEqual(oneOfOptionValue(other), oneOfOptionValue(option))
      )
    )
  );
  const items = options.map(oneOfOptionValue);

  // Resolve labels by structural equality so a controlled value that is
  // deep-equal (but not reference-equal) to an option still renders its
  // display name rather than `[object Object]`.
  const labelFor = (item: unknown): string => {
    const match = options.find((o) => deepEqual(oneOfOptionValue(o), item));
    if (match == null) {
      return String(item);
    }
    return match.displayName ?? String(match.value);
  };
  const isItemEqual = (a: unknown, b: unknown): boolean => deepEqual(a, b);

  // Spread the incoming definition so shared top-level props (notably
  // `validate`) survive the swap to a dropdown. Merge the caller-supplied
  // `fieldComponentProps` (e.g. a `placeholder`) with the injected dropdown
  // props so caller configuration stays visible after the swap; only the
  // dropdown-specific `items`/`itemToStringLabel`/`isItemEqual` are overridden.
  // The caller (`applyConstraintsToField`) then composes the constraint check
  // on top of any pre-existing `validate`, so both checks run.
  // TypeScript can't verify the fieldComponent ↔ fieldComponentProps pairing
  // across the spread, but this explicitly constructs the "DROPDOWN" variant:
  // `fieldComponent` is set to "DROPDOWN" and `fieldComponentProps` carries that
  // variant's required props (items/itemToStringLabel/isItemEqual).
  return {
    ...def,
    fieldComponent: "DROPDOWN",
    fieldComponentProps: {
      ...def.fieldComponentProps,
      items,
      itemToStringLabel: labelFor,
      isItemEqual,
    },
  } as RendererFieldDefinition;
}

function withLengthHints(
  def: RendererFieldDefinition,
  constraints: ReadonlyArray<
    Extract<EvaluatedConstraint, { type: "stringLength" }>
  >
): RendererFieldDefinition {
  if (
    def.fieldComponent !== "TEXT_INPUT" &&
    def.fieldComponent !== "TEXT_AREA"
  ) {
    return def;
  }
  const props = def.fieldComponentProps;
  // Start from the caller-supplied bounds and intersect the server constraints
  // into them: keep the tightest lower (max) and upper (min) bound rather than
  // overwriting the caller's tighter value. stringLength bounds are integer
  // character counts, so an exclusive `gt`/`lt` shifts the hint by one
  // (`gt: 2` → minLength 3).
  let minLength =
    typeof props.minLength === "number" ? props.minLength : undefined;
  let maxLength =
    typeof props.maxLength === "number" ? props.maxLength : undefined;
  for (const constraint of constraints) {
    minLength = intersectLower(minLength, lowerBound(constraint, 1));
    maxLength = intersectUpper(maxLength, upperBound(constraint, 1));
  }
  return {
    ...def,
    fieldComponentProps: {
      ...props,
      ...(minLength != null ? { minLength } : {}),
      ...(maxLength != null ? { maxLength } : {}),
    },
  };
}

function withRangeHints(
  def: RendererFieldDefinition,
  constraints: ReadonlyArray<Extract<EvaluatedConstraint, { type: "range" }>>
): RendererFieldDefinition {
  if (def.fieldComponent !== "NUMBER_INPUT") {
    return def;
  }
  const props = def.fieldComponentProps;
  // Intersect the server range(s) into the caller-supplied min/max: the
  // rendered bound is the tighter of the two, never an unconditional overwrite.
  // HTML min/max can't express exclusivity, so an exclusive `gt`/`lt` is
  // surfaced as-is (no shift).
  let min = typeof props.min === "number" ? props.min : undefined;
  let max = typeof props.max === "number" ? props.max : undefined;
  for (const constraint of constraints) {
    min = intersectLower(min, lowerBound(constraint, 0));
    max = intersectUpper(max, upperBound(constraint, 0));
  }
  return {
    ...def,
    fieldComponentProps: {
      ...props,
      ...(min != null ? { min } : {}),
      ...(max != null ? { max } : {}),
    },
  };
}

/** Tightest lower bound: the larger of the two, ignoring absent values. */
function intersectLower(
  a: number | undefined,
  b: number | undefined
): number | undefined {
  if (a == null) {
    return b;
  }
  if (b == null) {
    return a;
  }
  return Math.max(a, b);
}

/** Tightest upper bound: the smaller of the two, ignoring absent values. */
function intersectUpper(
  a: number | undefined,
  b: number | undefined
): number | undefined {
  if (a == null) {
    return b;
  }
  if (b == null) {
    return a;
  }
  return Math.min(a, b);
}

/**
 * Whether a constraint type is enforced client-side by the composed `validate`
 * fn. Exhaustive on purpose: adding a variant to `EvaluatedConstraint` fails to
 * compile here (via `const _exhaustive: never`) until it is explicitly
 * classified as enforced or ignored. An unrecognized type — e.g. a newer server
 * sending a variant this SDK version predates — fails open (not enforced, never
 * thrown) so an unknown constraint can never crash the form. Keep the enforced
 * cases in lockstep with `evaluateConstraint`, which is exhaustive for the same
 * reason.
 */
function isEnforceable(type: EvaluatedConstraint["type"]): boolean {
  switch (type) {
    case "oneOf":
    case "range":
    case "stringLength":
    case "arraySize":
    case "stringRegexMatch":
      return true;
    case "groupMember":
    case "objectPropertyValue":
    case "objectQueryResult":
    case "unevaluable":
      return false;
    default: {
      const _exhaustive: never = type;
      return false;
    }
  }
}

function buildConstraintValidate(
  constraints: ReadonlyArray<EvaluatedConstraint>
): ((value: unknown) => Promise<string | undefined>) | undefined {
  // Every constraint is enforced by the composed validate fn — including
  // `range` and `stringLength`, which are ALSO surfaced as native input hints
  // but must still be enforced when the field renders without a native input
  // (e.g. a CUSTOM renderer). Every entry is checked, so repeated constraints
  // of the same type are all applied.
  const enforceable = constraints.filter((c) => isEnforceable(c.type));
  if (enforceable.length === 0) {
    return undefined;
  }
  return (value: unknown): Promise<string | undefined> => {
    for (const constraint of enforceable) {
      const error = evaluateConstraint(constraint, value);
      if (error != null) {
        return Promise.resolve(error);
      }
    }
    return Promise.resolve(undefined);
  };
}

/** The submit value of a `oneOf` option (falls back to its display name). */
function oneOfOptionValue(
  option: Extract<EvaluatedConstraint, { type: "oneOf" }>["options"][number]
): unknown {
  return option.value ?? option.displayName;
}

function evaluateConstraint(
  constraint: EvaluatedConstraint,
  value: unknown
): string | undefined {
  switch (constraint.type) {
    case "oneOf": {
      if (constraint.otherValuesAllowed) {
        return undefined;
      }
      if (value == null || value === "") {
        return undefined;
      }
      const allowed = constraint.options.map(oneOfOptionValue);
      // Match by structural (deep) equality, not reference identity, so an
      // object value deep-equal to an allowed option passes even when it
      // carries a fresh identity from a later validation response.
      return allowed.some((candidate) => deepEqual(candidate, value))
        ? undefined
        : "Value must be one of the allowed options";
    }
    case "range": {
      if (typeof value !== "number") {
        return undefined;
      }
      return withinNumericBounds(value, constraint)
        ? undefined
        : "Value is outside the allowed range";
    }
    case "stringLength": {
      if (typeof value !== "string" || value === "") {
        return undefined;
      }
      return withinNumericBounds(value.length, constraint)
        ? undefined
        : "Text length is outside the allowed range";
    }
    case "arraySize": {
      // Known limitation: the action form has no array-input field component,
      // so `array<*>` parameters render as a single text input and never yield
      // a real array. This check is therefore inert end-to-end until an array
      // editor lands (browser QA confirmed arraySize is not exercisable via the
      // UI today). The logic is retained and unit-tested for that future case.
      if (!Array.isArray(value)) {
        return undefined;
      }
      return withinNumericBounds(value.length, constraint)
        ? undefined
        : "Number of items is outside the allowed range";
    }
    case "stringRegexMatch": {
      if (typeof value !== "string" || value === "") {
        return undefined;
      }
      const pattern = compileRegex(constraint.regex);
      // A regex we cannot compile cannot be enforced, so treat it as passing.
      if (pattern == null || pattern.test(value)) {
        return undefined;
      }
      return (
        constraint.configuredFailureMessage ?? "Value has an invalid format"
      );
    }
    case "groupMember":
    case "objectPropertyValue":
    case "objectQueryResult":
    case "unevaluable":
      // Markers with no client-side value check; see `isEnforceable`. They are
      // filtered out before reaching here, but are listed so the switch is
      // exhaustive.
      return undefined;
    default: {
      const _exhaustive: never = constraint;
      return undefined;
    }
  }
}

function compileRegex(source: string): RegExp | undefined {
  try {
    return new RegExp(source, "u");
  } catch {
    return undefined;
  }
}

interface NumericBounds {
  lt?: unknown;
  lte?: unknown;
  gt?: unknown;
  gte?: unknown;
}

function withinNumericBounds(n: number, bounds: NumericBounds): boolean {
  if (typeof bounds.gt === "number" && !(n > bounds.gt)) {
    return false;
  }
  if (typeof bounds.gte === "number" && !(n >= bounds.gte)) {
    return false;
  }
  if (typeof bounds.lt === "number" && !(n < bounds.lt)) {
    return false;
  }
  if (typeof bounds.lte === "number" && !(n <= bounds.lte)) {
    return false;
  }
  return true;
}

/**
 * Lowest allowed value the bounds surface as a hint. Prefers the inclusive
 * `gte`; for an exclusive `gt`, shifts by `exclusiveDelta` (1 for integer
 * lengths, 0 where exclusivity can't be represented).
 */
function lowerBound(
  bounds: NumericBounds,
  exclusiveDelta: number
): number | undefined {
  if (typeof bounds.gte === "number") {
    return bounds.gte;
  }
  if (typeof bounds.gt === "number") {
    return bounds.gt + exclusiveDelta;
  }
  return undefined;
}

/**
 * Highest allowed value the bounds surface as a hint. Prefers the inclusive
 * `lte`; for an exclusive `lt`, shifts by `exclusiveDelta` (1 for integer
 * lengths, 0 where exclusivity can't be represented).
 */
function upperBound(
  bounds: NumericBounds,
  exclusiveDelta: number
): number | undefined {
  if (typeof bounds.lte === "number") {
    return bounds.lte;
  }
  if (typeof bounds.lt === "number") {
    return bounds.lt - exclusiveDelta;
  }
  return undefined;
}
