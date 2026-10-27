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

import { expect, it } from "vitest";

import { validateDocuments } from "./jsonSchema.js";

it("rejects unhandled JSON Schema vocabulary and inconsistent representations", () => {
  expect(() =>
    validateDocuments({ Model: { type: "string", format: "email" } }),
  ).toThrow("Unsupported JSON Schema format");

  expect(() =>
    validateDocuments({ Model: { type: "string", properties: {} } }),
  ).toThrow("properties requires an object schema");

  expect(() =>
    validateDocuments({ Model: { type: "string", minItems: 1 } }),
  ).toThrow("minItems requires an array schema");

  expect(() =>
    validateDocuments({ Model: { type: "number", minLength: 1 } }),
  ).toThrow("minLength requires a string schema");

  expect(() =>
    validateDocuments({ Model: { type: "string", minimum: 0 } }),
  ).toThrow("minimum requires a numeric schema");

  expect(() =>
    validateDocuments({
      Model: { anyOf: [{ type: "string" }, { type: "number" }] },
    }),
  ).toThrow("type discriminator");

  expect(() => validateDocuments({ Model: { type: "integer" } })).toThrow(
    "32-bit bounds",
  );

  expect(() => validateDocuments({ Model: { type: "null" } })).toThrow(
    "Unsupported JSON Schema type",
  );

  expect(() =>
    validateDocuments({
      Model: {
        type: "object",
        properties: {},
        required: ["missing"],
        additionalProperties: false,
      },
    }),
  ).toThrow("Required properties must be declared");

  expect(() =>
    validateDocuments({
      Model: { $ref: "https://osdk.invalid/models/Model.json" },
    }),
  ).toThrow("Recursive aliases require a concrete model boundary");
});

it("rejects int64 formats on non-strings and with additional validation", () => {
  expect(() =>
    validateDocuments({ Model: { type: "number", format: "int64" } }),
  ).toThrow("Unsupported JSON Schema format");

  for (const constraint of [
    { minLength: 1 },
    { maxLength: 20 },
    { pattern: "^1$" },
    { const: "1" },
    { enum: ["1"] },
  ]) {
    expect(() =>
      validateDocuments({
        Model: { type: "string", format: "int64", ...constraint },
      }),
    ).toThrow("Validation siblings of int64 formats");
  }
});

it("rejects numeric const and enum values", () => {
  for (const literal of [{ const: 0 }, { enum: [0, 1] }]) {
    expect(() =>
      validateDocuments({
        Model: {
          type: "integer",
          minimum: -2147483648,
          maximum: 2147483647,
          ...literal,
        },
      }),
    ).toThrow("Only string literals are supported");
  }
});
