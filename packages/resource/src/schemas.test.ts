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

import { describe, expect, it } from "vitest";

import { columnTypeSchema } from "./schemas.js";

describe("column schemas", () => {
  it.each([
    { type: "string" },
    { type: "boolean", nullable: false },
    { type: "decimal", precision: 10, scale: 0 },
    {
      type: "array",
      nullable: true,
      elementType: { type: "integer", nullable: false },
    },
    {
      type: "map",
      keyType: { type: "string" },
      valueType: { type: "decimal", precision: 20, scale: 4, nullable: true },
    },
    {
      type: "struct",
      fields: {
        name: { type: "string" },
        labels: { type: "array", elementType: { type: "string" } },
      },
    },
  ])("accepts valid column descriptors: %j", (input) => {
    expect(columnTypeSchema.parse(input)).toEqual(input);
  });

  it("rejects incomplete decimal descriptors, including nested decimals", () => {
    for (const incomplete of [
      { type: "decimal" },
      { type: "decimal", precision: 10 },
      { type: "decimal", scale: 0 },
    ]) {
      for (const input of [
        incomplete,
        { type: "array", elementType: incomplete },
        { type: "map", keyType: { type: "string" }, valueType: incomplete },
        { type: "struct", fields: { amount: incomplete } },
      ]) {
        expect(
          columnTypeSchema.safeParse(input).success,
          JSON.stringify(input),
        ).toBe(false);
      }
    }
  });

  it("rejects incomplete map types and malformed nested annotations", () => {
    for (const input of [
      { type: "map", valueType: { type: "string" } },
      { type: "map", keyType: { type: "string" } },
      {
        type: "map",
        keyType: { type: "invalid" },
        valueType: { type: "integer" },
      },
      {
        type: "map",
        keyType: { type: "string" },
        valueType: { type: "boolean", nullable: "true" },
      },
      { type: "array", elementType: { type: "string", nullable: "false" } },
      { type: "struct", fields: { id: { type: "integer", nullable: "true" } } },
      { type: "string", nullable: null },
      { type: "decimal", precision: 10, scale: 2, nullable: "false" },
      {
        type: "map",
        keyType: { type: "string" },
        valueType: { type: "integer", extra: true },
      },
    ]) {
      expect(
        columnTypeSchema.safeParse(input).success,
        JSON.stringify(input),
      ).toBe(false);
    }
  });
});
