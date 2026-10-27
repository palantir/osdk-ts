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

import type { z } from "zod/v4";

import { pydanticPattern } from "./patterns.js";

export type JsonSchema = z.core.JSONSchema.BaseSchema;
export type ModelDocuments = Readonly<Record<string, JsonSchema>>;
// .invalid is reserved not to resolve; model URIs identify schemas supplied in
// ModelDocuments, not documents fetched over the network.
export const modelUri: string = "https://osdk.invalid/models/";

export function referenceName(
  reference: string,
  documents: ModelDocuments,
): string {
  const name = reference.slice(modelUri.length, -".json".length);
  if (
    !reference.startsWith(modelUri) ||
    !reference.endsWith(".json") ||
    !Object.hasOwn(documents, name)
  ) {
    throw new Error(`Unknown model reference: ${reference}`);
  }
  return name;
}

/** Both backends accept only the supported vocabulary; unknown validation is never discarded. */
export function validateDocuments(documents: ModelDocuments): void {
  function visit(schema: JsonSchema): void {
    // JSON Schema ignores type-specific constraints when the value has another type.
    // Require a matching explicit type so generated models can apply each constraint.
    for (const keyword of Object.keys(schema)) {
      switch (keyword) {
        case "$schema":
        case "$id":
        case "$ref":
        case "title":
        case "description":
        case "readOnly":
        case "type":
        case "const":
        case "enum":
        case "anyOf":
        case "oneOf":
          break;
        case "properties":
        case "required":
        case "additionalProperties":
        case "propertyNames":
          if (schema[keyword] !== undefined && schema.type !== "object") {
            throw new Error(`${keyword} requires an object schema`);
          }
          break;
        case "items":
        case "prefixItems":
        case "minItems":
        case "maxItems":
          if (schema[keyword] !== undefined && schema.type !== "array") {
            throw new Error(`${keyword} requires an array schema`);
          }
          break;
        case "minLength":
        case "maxLength":
        case "pattern":
          if (schema[keyword] !== undefined && schema.type !== "string") {
            throw new Error(`${keyword} requires a string schema`);
          }
          break;
        case "format":
          if (schema.type !== "string" || schema.format !== "int64") {
            throw new Error(
              `Unsupported JSON Schema format: ${String(schema.format)}; only string format int64 is supported`,
            );
          }
          // String constraints cannot be applied directly to native integers in generated models.
          if (
            Object.keys(schema).some(
              (key) =>
                ![
                  "type",
                  "format",
                  "$schema",
                  "$id",
                  "title",
                  "description",
                  "readOnly",
                ].includes(key),
            )
          ) {
            throw new Error(
              "Validation siblings of int64 formats are unsupported",
            );
          }
          break;
        case "minimum":
        case "maximum":
        case "exclusiveMinimum":
        case "exclusiveMaximum":
          if (
            schema[keyword] !== undefined &&
            schema.type !== "number" &&
            schema.type !== "integer"
          ) {
            throw new Error(`${keyword} requires a numeric schema`);
          }
          break;
        default:
          throw new Error(`Unsupported JSON Schema keyword: ${keyword}`);
      }
    }

    // const requires one exact value; enum allows any value in its list.
    // JSON Schema permits both: the const value must also belong to the enum.
    // Generators handle either literal form, not their intersection, so reject
    // combinations rather than silently ignore one of them.
    if (schema.const !== undefined && schema.enum !== undefined) {
      throw new Error("Combined const and enum constraints are unsupported");
    }

    if (schema.$ref) {
      referenceName(schema.$ref, documents);
      // JSON Schema allows validation keywords alongside $ref, applying both.
      // Our generators emit only the named type reference, so reject additional
      // validation rather than silently discard it. Metadata siblings are allowed.
      if (
        Object.keys(schema).some(
          (keyword) =>
            ![
              "$ref",
              "$schema",
              "$id",
              "title",
              "description",
              "readOnly",
            ].includes(keyword),
        )
      ) {
        throw new Error("Validation siblings of references are unsupported");
      }
    }

    if (schema.type === "integer") {
      const minimum = schema.minimum ?? schema.exclusiveMinimum;
      const maximum = schema.maximum ?? schema.exclusiveMaximum;
      if (
        minimum === undefined ||
        maximum === undefined ||
        minimum < -2147483648 ||
        maximum > 2147483647
      ) {
        throw new Error(
          "Numeric integers require signed 32-bit bounds; use strings for int64",
        );
      }
    }

    const options = schema.anyOf ?? schema.oneOf;
    if (schema.enum?.length === 0) {
      throw new Error("Empty enums are unsupported");
    }

    if (options !== undefined) {
      if (options.length === 0) {
        throw new Error("Empty unions are unsupported");
      }
      // Combining anyOf and oneOf intersects two separate union constraints.
      // Generators emit one union, not an intersection of unions.
      if (schema.anyOf !== undefined && schema.oneOf !== undefined) {
        throw new Error("Combined union constraints are unsupported");
      }

      if (
        Object.keys(schema).some(
          (keyword) =>
            ![
              "anyOf",
              "oneOf",
              "$schema",
              "$id",
              "title",
              "description",
              "readOnly",
            ].includes(keyword),
        )
      ) {
        throw new Error("Validation siblings of unions are unsupported");
      }

      // anyOf requires at least one matching branch; oneOf requires exactly one.
      // Required, unique type tags make branches disjoint, allowing both forms
      // to be emitted as the same tagged union without changing validation.
      const tags = new Set<string>();
      for (const option of options) {
        const branch =
          typeof option === "object" && option.$ref
            ? documents[referenceName(option.$ref, documents)]
            : option;

        if (
          typeof branch !== "object" ||
          branch.type !== "object" ||
          !branch.required?.includes("type")
        ) {
          throw new Error("Unions require a type discriminator");
        }
        const tag = branch.properties?.type;
        if (typeof tag !== "object") {
          throw new TypeError("Union discriminators require string literals");
        }
        const values = tag.enum ?? ("const" in tag ? [tag.const] : []);
        if (values.length === 0) {
          throw new Error("Union discriminators require string literals");
        }
        for (const value of values) {
          if (typeof value !== "string" || tags.has(value)) {
            throw new Error(
              "Union discriminator values must be unique strings",
            );
          }
          tags.add(value);
        }
      }
    }

    if (schema.pattern !== undefined) {
      pydanticPattern(schema.pattern);
    }

    if (
      schema.type !== undefined &&
      !["object", "array", "string", "number", "integer", "boolean"].includes(
        String(schema.type),
      )
    ) {
      throw new Error(`Unsupported JSON Schema type: ${String(schema.type)}`);
    }

    for (const value of schema.enum ??
      ("const" in schema ? [schema.const] : [])) {
      if (typeof value !== "string") {
        throw new TypeError("Only string literals are supported");
      }
      if (schema.type !== undefined && schema.type !== "string") {
        throw new Error("Literal does not match its declared representation");
      }
    }

    if (
      schema.$ref === undefined &&
      schema.anyOf === undefined &&
      schema.oneOf === undefined &&
      schema.enum === undefined &&
      !("const" in schema) &&
      schema.type === undefined
    ) {
      throw new Error("A model must have a supported representation");
    }

    if (
      schema.type === "object" &&
      schema.additionalProperties !== false &&
      typeof schema.additionalProperties !== "object"
    ) {
      throw new Error(
        "Objects must be closed or have an explicit dictionary value schema",
      );
    }

    // Fixed fields become object models; additionalProperties schemas become
    // dictionaries. Mixing the two would lose the declared fields when emitted
    // as a dictionary, whose single value schema applies to every entry.
    if (
      schema.type === "object" &&
      schema.additionalProperties !== false &&
      schema.properties !== undefined
    ) {
      throw new Error("Mixed objects and dictionaries are unsupported");
    }

    if (schema.type === "object" && schema.additionalProperties === false) {
      if (schema.propertyNames !== undefined) {
        throw new Error("Property-name constraints require a dictionary");
      }
      if (
        schema.required?.some(
          (name) => !Object.hasOwn(schema.properties ?? {}, name),
        )
      ) {
        throw new Error("Required properties must be declared");
      }
    } else if (schema.type === "object" && schema.required !== undefined) {
      throw new Error("Required dictionary entries are unsupported");
    }

    if (schema.type === "array") {
      if (schema.prefixItems !== undefined) {
        // prefixItems alone permits shorter arrays and extra elements. Require
        // exact length and no trailing items to emit a tuple of required elements.
        if (
          schema.items !== false ||
          schema.minItems !== schema.prefixItems.length ||
          schema.maxItems !== schema.prefixItems.length
        ) {
          throw new Error("Tuples require fixed arity");
        }
      } else if (
        typeof schema.items !== "object" ||
        Array.isArray(schema.items)
      ) {
        throw new TypeError("Arrays require one item schema");
      }
    }

    for (const child of Object.values(schema.properties ?? {})) {
      visitNode(child);
    }

    for (const child of schema.anyOf ?? schema.oneOf ?? []) {
      visitNode(child);
    }

    for (const child of schema.prefixItems ?? []) {
      visitNode(child);
    }

    if (typeof schema.items === "object") {
      visitNode(schema.items);
    }

    if (typeof schema.additionalProperties === "object") {
      visit(schema.additionalProperties);
    }

    if (schema.propertyNames !== undefined) {
      visitNode(schema.propertyNames);
      if (
        typeof schema.propertyNames !== "object" ||
        schema.propertyNames.type !== "string"
      ) {
        throw new Error("Dictionary keys must be strings");
      }
    }
  }

  function visitNode(schema: unknown): void {
    // JSON Schema also accepts true (any value) and false (no values) as schemas.
    // Neither has a supported model representation.
    if (typeof schema !== "object" || schema == null || Array.isArray(schema)) {
      throw new Error("Boolean and tuple schemas are unsupported");
    }

    visit(schema as JsonSchema);
  }

  for (const [name, schema] of Object.entries(documents)) {
    if (
      !/^[A-Z][A-Za-z0-9]*$/u.test(name) ||
      ["None", "True", "False"].includes(name)
    ) {
      throw new Error(`Invalid model name: ${name}`);
    }

    // Pure alias cycles (A -> B -> A) never reach a concrete type to emit.
    // Recursive references through object fields or array items remain supported.
    const aliases = new Set<string>();
    let target = schema;
    while (target.$ref !== undefined) {
      const reference = referenceName(target.$ref, documents);
      if (aliases.has(reference)) {
        throw new Error("Recursive aliases require a concrete model boundary");
      }

      aliases.add(reference);
      target = documents[reference];
    }

    visit(schema);
  }
}
