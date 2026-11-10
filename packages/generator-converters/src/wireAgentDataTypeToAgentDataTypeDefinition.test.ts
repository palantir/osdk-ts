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

import type { DataType } from "@osdk/foundry.agents";
import { describe, expect, it } from "vitest";
import { wireAgentDataTypeToAgentDataTypeDefinition } from "./wireAgentDataTypeToAgentDataTypeDefinition.js";

const object: DataType = {
  type: "object",
  ontologyApiName: "ontology",
  objectTypeApiName: "Employee",
};

describe(wireAgentDataTypeToAgentDataTypeDefinition, () => {
  it.each(
    [
      "boolean",
      "string",
      "date",
      "timestamp",
      "integer",
      "long",
      "short",
      "double",
      "float",
    ] as const,
  )("preserves %s", type => {
    const input: DataType = { type };

    const result = wireAgentDataTypeToAgentDataTypeDefinition(input);

    expect(result).toEqual({ type, nullable: false });
  });

  it("distinguishes nullable arrays from nullable elements", () => {
    const input: DataType = {
      type: "struct",
      fields: [
        {
          name: "array",
          dataType: {
            type: "nullable",
            wrappedType: { type: "list", elementType: object },
          },
        },
        {
          name: "elements",
          dataType: {
            type: "list",
            elementType: { type: "nullable", wrappedType: object },
          },
        },
      ],
    };

    const result = wireAgentDataTypeToAgentDataTypeDefinition(input);

    expect(result).toEqual({
      type: "struct",
      nullable: false,
      struct: {
        array: {
          type: "array",
          nullable: true,
          array: {
            type: "object",
            object: "Employee",
            ontologyApiName: "ontology",
            nullable: false,
          },
        },
        elements: {
          type: "array",
          nullable: false,
          array: {
            type: "object",
            object: "Employee",
            ontologyApiName: "ontology",
            nullable: true,
          },
        },
      },
    });
  });

  it("normalizes nested records and discriminated unions", () => {
    const input: DataType = {
      type: "record",
      valueType: {
        type: "discriminatedUnion",
        discriminatorKey: "kind",
        members: [
          {
            discriminatorValue: "employees",
            fields: [{
              name: "value",
              dataType: {
                type: "objectSet",
                ontologyApiName: "ontology",
                objectTypeApiName: "Employee",
              },
            }],
          },
          { discriminatorValue: "empty", fields: [] },
        ],
      },
    };

    const result = wireAgentDataTypeToAgentDataTypeDefinition(input);

    expect(result).toEqual({
      type: "record",
      nullable: false,
      valueType: {
        type: "discriminatedUnion",
        nullable: false,
        discriminatorKey: "kind",
        members: {
          employees: {
            value: {
              type: "objectSet",
              ontologyApiName: "ontology",
              objectSet: "Employee",
              nullable: false,
            },
          },
          empty: {},
        },
      },
    });
  });

  it.each(["constructor", "toString", "__proto__"])(
    "preserves the field and union member %s",
    name => {
      const input: DataType = {
        type: "discriminatedUnion",
        discriminatorKey: "kind",
        members: [{
          discriminatorValue: name,
          fields: [{ name, dataType: object }],
        }],
      };

      const result = wireAgentDataTypeToAgentDataTypeDefinition(input);

      expect(result).toEqual({
        type: "discriminatedUnion",
        nullable: false,
        discriminatorKey: "kind",
        members: {
          [name]: {
            [name]: {
              type: "object",
              object: "Employee",
              ontologyApiName: "ontology",
              nullable: false,
            },
          },
        },
      });
    },
  );

  it("collapses repeated nullable wrappers", () => {
    const input: DataType = {
      type: "nullable",
      wrappedType: { type: "nullable", wrappedType: { type: "string" } },
    };

    const result = wireAgentDataTypeToAgentDataTypeDefinition(input);

    expect(result).toEqual({ type: "string", nullable: true });
  });

  it("preserves the fallback for future wire types", () => {
    const input = { type: "futureType" } as unknown as DataType;

    const result = wireAgentDataTypeToAgentDataTypeDefinition(input);

    expect(result).toEqual({ type: "unknown", nullable: false });
  });
});
