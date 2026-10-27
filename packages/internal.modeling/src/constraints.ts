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

import type { $ZodChecks, $ZodType, $ZodTypes } from "zod/v4/core";

import { getDictionaryDefinition } from "./dictionary.js";
import { isInt64Schema } from "./int64.js";
import { pydanticPattern } from "./patterns.js";

// cspell:ignore optout safeint

export interface ModelingConstraintIssue {
  readonly code: string;
  readonly path: readonly string[];
  readonly message: string;
}

/**
 * Only allow portable JSON Schema constraints.
 *
 * Note: Lots of Zod internals used here, but this is only used in tests, not runtime.
 **/
export function findModelingConstraintIssues(
  root: $ZodType,
): readonly ModelingConstraintIssue[] {
  const issues: ModelingConstraintIssue[] = [];
  const visited = new Map<object, Set<string>>();
  function visit(
    schema: $ZodType,
    path: readonly string[],
    field = false,
    discriminator = false,
  ): void {
    const def = (schema as $ZodTypes)._zod.def;
    const report = (
      code: string,
      message: string,
      issuePath: readonly string[] = path,
    ): void => {
      issues.push({ code, path: issuePath, message });
    };

    if ("coerce" in def && def.coerce) {
      report(
        "coercion",
        "Coercions change input values and cannot be represented in JSON Schema.",
      );
    }

    if (def.type === "optional" && !field) {
      report(
        "optionalOutsideObjectField",
        "Only object fields may be optional; JSON has no undefined array elements or root values.",
      );
    }

    const context = `${field}:${discriminator}`;
    let contexts = visited.get(def);
    if (contexts?.has(context)) {
      return;
    }

    if (contexts === undefined) {
      contexts = new Set();
      visited.set(def, contexts);
    }
    contexts.add(context);

    if (def.type === "record") {
      report(
        "unsafeRecord",
        "z.record() can drop or reject valid JSON keys. Use dictionary(valueSchema) instead.",
      );
      return;
    }

    const dictionary = getDictionaryDefinition(schema);
    if (dictionary !== undefined) {
      visit(dictionary.keySchema, [...path, "keys"]);
      visit(dictionary.valueSchema, [...path, "values"]);
      return;
    }

    if (isInt64Schema(schema)) return;

    for (const check of def.checks ?? []) {
      const checkDef = (check as $ZodChecks)._zod.def;
      switch (checkDef.check) {
        case "min_length":
          if (def.type === "string" && checkDef.minimum > 1) {
            // This is a pretty strict check
            // We could consider loosening it in the future
            report(
              "nonPortableStringLength",
              `String minimum length ${checkDef.minimum} is not portable: Zod counts UTF-16 code units, while JSON Schema and Python count Unicode code points. Only min(1) is supported.`,
            );
          }

          break;
        case "max_length":
          if (def.type === "string") {
            // This is a pretty strict check
            // We could consider loosening it in the future
            report(
              "nonPortableStringLength",
              `String maximum length ${checkDef.maximum} is not portable: Zod counts UTF-16 code units, while JSON Schema and Python count Unicode code points.`,
            );
          }

          break;
        case "greater_than":
        case "less_than":
          if (
            checkDef.value === Number.MAX_SAFE_INTEGER ||
            checkDef.value === Number.MIN_SAFE_INTEGER
          ) {
            report(
              "safeIntegerBound",
              "JavaScript safe-integer bounds are not a portable integer format. Use z.int32() or int64Schema for signed 64-bit decimal strings.",
            );
          }

          break;
        case "min_size":
        case "max_size":
          break;
        case "number_format":
          if (
            schema._zod.bag.format !== "int32" &&
            schema._zod.bag.format !== "float64" &&
            schema._zod.bag.format !== "float32"
          ) {
            report(
              "unsupportedNumberFormat",
              `Number format "${schema._zod.bag.format}" is unsupported. Use z.int32() for integers, or a floating-point number schema.`,
            );
          }

          break;
        case "string_format":
          if (checkDef.format !== "regex") {
            report(
              "unsupportedStringFormat",
              `String format "${checkDef.format}" is unsupported. Use a regex in the shared JavaScript/Pydantic subset.`,
            );
          } else if (checkDef.pattern !== undefined) {
            if (checkDef.pattern.flags !== "u") {
              report(
                "nonPortablePattern",
                `Regex ${checkDef.pattern} must use Unicode mode (u) with no other flags.`,
              );
            }

            try {
              pydanticPattern(checkDef.pattern.source);
            } catch {
              report(
                "nonPortablePattern",
                `Regex ${checkDef.pattern} is outside the shared JavaScript/Pydantic subset. Use literals, explicit character classes, groups, and quantifiers without assertions or backreferences.`,
              );
            }
          }
          break;
        default:
          report(
            "unsupportedCheck",
            `Validation check "${checkDef.check}" is currently unsupported.`,
          );
      }
    }

    switch (def.type) {
      case "object":
        if (def.catchall?._zod.def.type !== "never") {
          report(
            "nonStrictObject",
            "Objects must use z.strictObject(); use dictionary(valueSchema) for open string-keyed dictionaries.",
          );
        }

        for (const [name, property] of Object.entries(def.shape)) {
          if (name.startsWith("$")) {
            report(
              "dollarPrefixedFieldName",
              "Field names cannot start with the reserved $ prefix.",
              [...path, name],
            );
          }

          visit(property, [...path, name], true, name === "type");
        }
        return;
      case "union":
        if (!("discriminator" in def) || def.discriminator !== "type") {
          report(
            "nonTypeDiscriminatedUnion",
            'Unions must use z.discriminatedUnion("type", ...) with a required string literal discriminator in each variant.',
          );
        }

        def.options.forEach((option, index) =>
          visit(option, [...path, "options", String(index)]),
        );
        return;
      case "array":
        visit(def.element, [...path, "items"]);
        return;
      case "tuple":
        if (
          def.rest != null ||
          def.items.some((item) => item._zod.optout === "optional")
        ) {
          report(
            "unsupportedTuple",
            "Tuples must have a fixed length with every element required; optional and rest elements are unsupported.",
          );
        }

        def.items.forEach((item, index) =>
          visit(item, [...path, "items", String(index)]),
        );
        return;
      case "lazy":
        visit(def.getter(), path, field, discriminator);
        return;
      case "optional":
      case "readonly":
        visit(def.innerType, path, field, discriminator);
        return;
      case "enum":
        if (
          Object.values(def.entries).some(
            (value) => typeof value !== "string" || value.startsWith("$"),
          )
        ) {
          report(
            "invalidEnumValue",
            "Enum values must be strings without the reserved $ prefix.",
          );
        }
        if (
          !discriminator &&
          Object.values(def.entries).some(
            (value) =>
              typeof value === "string" &&
              !/^[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)*$/u.test(value),
          )
        ) {
          report(
            "invalidEnumCasing",
            "Outside discriminators, enum values must use UPPER_SNAKE_CASE starting with a letter.",
          );
        }
        return;
      case "literal":
        if (def.values.some((value) => typeof value !== "string")) {
          report(
            "unsupportedLiteral",
            "Only string literals are supported, matching the public API.",
          );
        }

        if (
          discriminator &&
          def.values.some(
            (value) => typeof value !== "string" || value.startsWith("$"),
          )
        ) {
          report(
            "invalidDiscriminatorValue",
            "Discriminator values must be strings without the reserved $ prefix.",
          );
        }
        return;
      case "string":
      case "boolean":
        return;
      case "number":
        // Zod counts string lengths in UTF-16 code units, while JSON Schema and Python count Unicode code points.
        // String-length bounds other than `min(1)` are rejected instead of changing validation for astral characters.
        if (
          schema._zod.bag.format === "safeint" ||
          schema._zod.bag.format === "uint32"
        ) {
          report(
            "unsupportedIntegerFormat",
            "Numeric integers must use z.int32(); use int64Schema for signed 64-bit decimal strings.",
          );
        }
        return;
      default:
        report(
          `unsupportedSchema:${def.type}`,
          `Schema kind "${def.type}" is unsupported. Nullable schemas, defaults, transforms, dates, maps, sets, and opaque unknown values are not portable models.`,
        );
    }
  }
  visit(root, []);
  return issues;
}
