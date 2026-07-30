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

import type * as Ontology from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";

/**
 * Expected runtime JS type for each cataloged wire type.
 *
 * Used to fail fast on `as any` callers that pass a value of the wrong shape
 * (e.g., `age: "30"` when `age` is an integer). Wire types not listed here
 * are not strictly typed by this validator — currently `attachment`,
 * `mediaReference`, `geopoint`, `geoshape`, `vector`, `array`, `struct`,
 * which have non-primitive runtime shapes that need bespoke validation.
 */
const EXPECTED_JS_TYPE: Record<string, "string" | "number" | "boolean"> = {
  // string-encoded primitives
  string: "string",
  marking: "string",
  timestamp: "string",
  date: "string",
  datetime: "string",
  long: "string",
  decimal: "string",
  ipAddress: "string",
  cipherText: "string",
  // numeric primitives
  integer: "number",
  byte: "number",
  short: "number",
  double: "number",
  float: "number",
  // boolean
  boolean: "boolean",
};

/**
 * Regex patterns for string-encoded wire types that TypeScript cannot validate.
 *
 * These patterns are aligned with the Rust backend's actual parsing behavior:
 * - timestamp: RFC 3339 parse on the Rust side — requires timezone, rejects trailing garbage
 * - date: stored as raw string, but only YYYY-MM-DD works in SQLite queries
 * - datetime: stored as raw string, same YYYY-MM-DD requirement for query correctness
 * - long: strict decimal integer parse on the Rust side — no scientific notation
 * - decimal: Rust stores any string (no validation), but we enforce numeric format
 *   to prevent obviously invalid values from silently passing through
 */
const WIRE_TYPE_FORMAT: Record<string, { pattern: RegExp; example: string }> = {
  timestamp: {
    pattern:
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/u,
    example: "2025-01-01T00:00:00Z",
  },
  date: {
    pattern: /^\d{4}-\d{2}-\d{2}$/u,
    example: "2025-01-01",
  },
  datetime: {
    pattern:
      /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?)?$/u,
    example: "2025-01-01T12:00:00Z",
  },
  long: {
    // Strict decimal integer — matches Rust's str::parse::<i64>().
    // No scientific notation, no decimal point, no whitespace.
    pattern: /^-?\d+$/u,
    example: "9007199254740993",
  },
  decimal: {
    // Numeric string with optional decimal point. Anchored.
    // Rust stores any string (no validation), but we reject obviously invalid values.
    pattern: /^-?\d+(\.\d+)?$/u,
    example: "123.45",
  },
};

/**
 * Validates a single seed object's properties against its schema.
 *
 * Structural violations (unknown property name, null/undefined value, wrong JS
 * type) throw immediately. String-format violations (e.g. a timestamp that
 * doesn't match the wire format regex) are collected across the object's
 * properties and reported together in one error so a user can fix every
 * content mistake on the object in a single pass.
 *
 * The object type's existence in the ontology is assumed — callers resolve the
 * {@link Ontology.ObjectTypeV2} before invoking this validator.
 *
 * @throws on any structural violation, or listing all format failures for the
 *         object.
 */
export function validateSeedObject(
  props: Record<string, unknown>,
  objectType: Ontology.ObjectTypeV2,
): void {
  const apiName = objectType.apiName;
  const identity = pkIdentity(props, objectType);
  const formatErrors: string[] = [];

  for (const [key, value] of Object.entries(props)) {
    const wireType = objectType.properties[key]?.dataType.type;
    invariant(
      wireType !== undefined,
      () =>
        `Property '${key}' on '${apiName}' object` +
        ` (primary key ${identity}) is not defined in the ontology`,
    );

    invariant(
      value != null,
      () =>
        `Property '${key}' on '${apiName}' object` +
        ` (primary key ${identity}) is null or undefined`,
    );

    const expectedJsType = EXPECTED_JS_TYPE[wireType];
    invariant(
      expectedJsType === undefined || typeof value === expectedJsType,
      () =>
        `Property '${key}' on '${apiName}' object` +
        ` (primary key ${identity}) expects ${wireType} (a ${expectedJsType})` +
        ` but got ${typeof value}`,
    );

    const format = WIRE_TYPE_FORMAT[wireType];
    if (!format) continue;

    if (format.pattern.test(value as string)) continue;
    formatErrors.push(
      `property '${key}' has invalid ${wireType}` +
        ` format: '${String(value)}'.` +
        ` Expected format like '${format.example}'`,
    );
  }

  invariant(formatErrors.length === 0, () =>
    formatValidationErrors(apiName, identity, formatErrors),
  );
}

/**
 * Derives the human-readable identity for an object from its primary key,
 * falling back to `<unknown>` when the key is absent (e.g. a `create` call that
 * omits it) or null.
 */
function pkIdentity(
  props: Record<string, unknown>,
  objectType: Ontology.ObjectTypeV2,
): string {
  const pk = props[objectType.primaryKey];
  return pk == null ? "<unknown>" : String(pk);
}

function formatValidationErrors(
  apiName: string,
  identity: string,
  messages: string[],
): string {
  const errorWord = messages.length === 1 ? "error" : "errors";
  const body = messages.map((msg) => `  ${msg}`).join("\n");
  return (
    `Seed data validation failed for '${apiName}' object` +
    ` (primary key ${identity}) (${messages.length} ${errorWord}):\n\n${body}`
  );
}
