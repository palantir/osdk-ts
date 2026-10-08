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

import type {
  ObjectOrInterfaceDefinition,
  QueryDataTypeDefinition,
} from "@osdk/api";
import { describe, expect, it } from "vitest";

import type { MinimalClient } from "../MinimalClientContext.js";
import { remapQueryResponse } from "./applyQuery.js";

const client = {} as MinimalClient;

const definitions = new Map<string, ObjectOrInterfaceDefinition>([
  ["Employee", { type: "object", apiName: "Employee" }],
  ["FooInterface", { type: "interface", apiName: "FooInterface" }],
]);

function structOf(field: QueryDataTypeDefinition): QueryDataTypeDefinition {
  return { type: "struct", nullable: false, struct: { field } };
}

describe("remapQueryResponse", () => {
  it("remaps an array of objects inside a struct", async () => {
    const result = await remapQueryResponse(
      client,
      structOf({
        type: "array",
        nullable: false,
        array: { type: "object", object: "Employee", nullable: false },
      }),
      { field: [50030] },
      definitions,
    );

    expect(result).toEqual({
      field: [
        {
          $apiName: "Employee",
          $objectType: "Employee",
          $primaryKey: 50030,
          $objectSpecifier: "Employee:50030",
          $title: undefined,
        },
      ],
    });
  });

  it("remaps an interface inside a struct", async () => {
    const result = await remapQueryResponse(
      client,
      structOf({
        type: "interface",
        interface: "FooInterface",
        nullable: false,
      }),
      { field: { objectTypeApiName: "Employee", primaryKeyValue: 50030 } },
      definitions,
    );

    expect(result).toEqual({
      field: {
        $apiName: "FooInterface",
        $objectType: "Employee",
        $primaryKey: 50030,
        $objectSpecifier: "Employee:50030",
        $title: undefined,
      },
    });
  });

  it("remaps a map inside a struct", async () => {
    const result = await remapQueryResponse(
      client,
      structOf({
        type: "map",
        nullable: false,
        keyType: { type: "string", nullable: false },
        valueType: { type: "integer", nullable: false },
      }),
      {
        field: [
          { key: "a", value: 1 },
          { key: "b", value: 2 },
        ],
      },
      definitions,
    );

    expect(result).toEqual({ field: { a: 1, b: 2 } });
  });
});
