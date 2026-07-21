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

import type { SchemaMap } from "./schema.js";
import { SeedError } from "./SeedError.js";
import type { SeedOutput } from "./types.js";

/**
 * One string-format validation failure (e.g., a timestamp value that doesn't
 * match the wire format regex). Format failures are collected across the
 * whole output and reported together at the end so users can fix many
 * content mistakes in one pass. Structural failures (unknown object type,
 * unknown property name, null value, wrong JS type) throw immediately
 * instead — they're not aggregated, so they don't need this struct.
 */
interface FormatError {
  objectType: string;
  objectIndex: number;
  field: string;
  message: string;
}

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
 * Validates seed objects against the ontology schema. This is the same
 * content validation the standalone seed compiler used to perform, folded
 * into the builder so `createSeed()` output needs no separate compile step.
 *
 * Hard errors (thrown immediately as {@link SeedError}) for any of:
 *
 *   - Object types in the seed output not defined in the ontology.
 *   - Property names on a seed object not defined on that type.
 *   - `null`/`undefined` property values. Typed callers can't reach this
 *     (the builder's `SeedProps<Q>` rejects `null`); any null at runtime is
 *     a sign of `as any` or a hand-rolled output.
 *   - JS type mismatches against the cataloged wire-type-to-JS-type map
 *     (e.g., `age: "30"` when `age` is an integer, or `score: 30` when
 *     `score` is a long).
 *
 * For wire types whose runtime shape this validator doesn't catalog
 * (`attachment`, `mediaReference`, `geopoint`, `geoshape`, `vector`,
 * `array`, `struct`), JS-type checking is skipped — they have non-primitive
 * shapes that would need bespoke validation. They still go through the
 * earlier object-type / property-name / null checks.
 *
 * After JS-type validation, string values are checked against the format
 * regex for their wire type (timestamp, date, datetime, long, decimal).
 * The one thing TypeScript cannot distinguish on its own is whether a
 * `string` value matches its wire format (e.g., `"not-a-date"` vs
 * `"2025-01-01T00:00:00Z"` are both valid `string` to the type system);
 * format validation fills that gap. Format failures are collected across the
 * whole output and reported together.
 *
 * @throws {SeedError} on any structural violation listed above, or listing all
 *         format failures grouped by object type.
 */
export function validateSeedObjects(
  objects: SeedOutput["objects"],
  schemaMap: SchemaMap
): void {
  const errors = collectFormatErrors(objects, schemaMap);
  if (errors.length > 0) {
    throw new SeedError(formatValidationErrors(errors));
  }
}

function collectFormatErrors(
  objects: SeedOutput["objects"],
  schemaMap: SchemaMap
): FormatError[] {
  const errors: FormatError[] = [];

  for (const [apiName, bucket] of Object.entries(objects)) {
    const schema = schemaMap.objects.get(apiName);
    if (!schema) {
      throw new SeedError(
        `Object type '${apiName}' in seed data is not defined in the ontology`
      );
    }

    for (const [i, obj] of bucket.entries()) {
      for (const [key, value] of Object.entries(obj)) {
        const wireType = schema.properties.get(key);
        if (wireType === undefined) {
          throw new SeedError(
            `Property '${key}' on '${apiName}' object` +
              ` (index ${i}) is not defined in the ontology`
          );
        }

        if (value == null) {
          throw new SeedError(
            `Property '${key}' on '${apiName}' object` +
              ` (index ${i}) is null or undefined`
          );
        }

        const expectedJsType = EXPECTED_JS_TYPE[wireType];
        if (expectedJsType !== undefined && typeof value !== expectedJsType) {
          throw new SeedError(
            `Property '${key}' on '${apiName}' object` +
              ` (index ${i}) expects ${wireType} (a ${expectedJsType})` +
              ` but got ${typeof value}`
          );
        }

        const format = WIRE_TYPE_FORMAT[wireType];
        if (!format) continue;

        // Format regex only applies to string-encoded wire types, all of
        // which have EXPECTED_JS_TYPE === "string"; the cast is safe here
        // because the JS-type check above would have thrown otherwise.
        if (format.pattern.test(value as string)) continue;

        errors.push({
          objectType: apiName,
          objectIndex: i,
          field: key,
          message:
            `property '${key}' has invalid ${wireType}` +
            ` format: '${String(value)}'.` +
            ` Expected format like '${format.example}'`,
        });
      }
    }
  }

  return errors;
}

function formatValidationErrors(errors: FormatError[]): string {
  const grouped = new Map<string, string[]>();
  for (const err of errors) {
    let messages = grouped.get(err.objectType);
    if (messages === undefined) {
      messages = [];
      grouped.set(err.objectType, messages);
    }
    messages.push(`  object[${err.objectIndex}]: ${err.message}`);
  }

  const body = [...grouped.entries()]
    .map(([type, msgs]) => `${type}:\n${msgs.join("\n")}`)
    .join("\n\n");

  const errorWord = errors.length === 1 ? "error" : "errors";
  const typeWord = grouped.size === 1 ? "object type" : "object types";

  return (
    `Seed data validation failed ` +
    `(${errors.length} ${errorWord} across ${grouped.size} ${typeWord}` +
    `):\n\n${body}`
  );
}
