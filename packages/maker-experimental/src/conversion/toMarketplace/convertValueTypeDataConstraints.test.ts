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

import { defineObject, defineValueType } from "@osdk/maker";
import { describe, expect, it } from "vitest";

import { defineOntologyV2 } from "../../api/defineOntologyV2.js";
import { dataConstraintToPropertyTypeDataConstraint } from "./dataConstraintToPropertyTypeDataConstraint.js";

describe("value type property constraints", () => {
  it.each([false, true])(
    "inline the struct field value type constraints on object properties with array=%s",
    async (array) => {
      const result = await defineOntologyV2("com.palantir.", () => {
        const classification = defineValueType({
          apiName: "classification",
          displayName: "Classification",
          version: "1.0.0",
          type: {
            type: "string",
            constraints: [
              {
                constraint: {
                  type: "length",
                  length: { minSize: 1, maxSize: 10 },
                },
                failureMessage: { message: "Use 1–10 characters" },
              },
              {
                constraint: {
                  type: "oneOf",
                  oneOf: {
                    values: ["PUBLIC", "PRIVATE"],
                    useIgnoreCase: undefined,
                  },
                },
              },
            ],
          },
        });
        const freeText = defineValueType({
          apiName: "freeText",
          displayName: "Free Text",
          version: "1.0.0",
          type: { type: "string" },
        });
        const structType = {
          type: "struct" as const,
          fields: [
            { identifier: "classification", baseType: "string" as const },
            { identifier: "freeText", baseType: "string" as const },
          ],
        };
        const elementConstraints = { classification, freeText };
        const valueType = defineValueType({
          apiName: "classifiedRecords",
          displayName: "Classified Records",
          version: "1.0.0",
          type: array
            ? {
                type: { type: "array", elementType: structType },
                constraints: [
                  {
                    constraint: {
                      size: { minSize: 1, maxSize: 5 },
                      elementsUnique: true,
                      elementsConstraint: {
                        type: "structV2",
                        structV2: { elementConstraints },
                      },
                    },
                    failureMessage: { message: "Invalid records" },
                  },
                ],
              }
            : {
                type: structType,
                constraints: [
                  {
                    constraint: { elementConstraints },
                    failureMessage: { message: "Invalid records" },
                  },
                ],
              },
        });
        defineObject({
          apiName: "classifiedObject",
          displayName: "Classified Object",
          pluralDisplayName: "Classified Objects",
          titlePropertyApiName: "id",
          primaryKeyPropertyApiName: "id",
          properties: {
            id: { type: "string" },
            records: {
              type: {
                type: "struct",
                structDefinition: {
                  classification: "string",
                  freeText: "string",
                },
              },
              array,
              valueType,
              nullability: { noNulls: true, noEmptyCollections: true },
            },
          },
        });
      });
      const objectType = Object.values(
        result.ontologyIr.ontology.objectTypes,
      )[0].objectType;
      const property = Object.values(objectType.propertyTypes).find(
        ({ apiName }) => apiName === "records",
      );
      const structConstraint = {
        type: "struct",
        struct: {
          elementConstraints: {
            classification: {
              propertyTypeConstraints: [
                {
                  constraints: {
                    type: "string",
                    string: {
                      type: "length",
                      length: { minSize: 1, maxSize: 10 },
                    },
                  },
                  failureMessage: { message: "Use 1–10 characters" },
                },
                {
                  constraints: {
                    type: "string",
                    string: {
                      type: "oneOf",
                      oneOf: {
                        values: ["PUBLIC", "PRIVATE"],
                        useIgnoreCase: undefined,
                      },
                    },
                  },
                  failureMessage: undefined,
                },
              ],
            },
            freeText: { propertyTypeConstraints: [] },
          },
        },
      };
      expect(property?.dataConstraints).toEqual({
        nullability: undefined,
        nullabilityV2: { noNulls: true, noEmptyCollections: true },
        propertyTypeConstraints: [
          {
            constraints: array
              ? {
                  type: "array",
                  array: {
                    size: { minSize: 1, maxSize: 5 },
                    elementsUnique: true,
                    elementsConstraint: structConstraint,
                  },
                }
              : structConstraint,
            failureMessage: { message: "Invalid records" },
          },
        ],
      });
    },
  );

  it("preserves array constraints without an element constraint", () => {
    const constraint = {
      type: "array" as const,
      array: {
        size: { minSize: 1, maxSize: 5 },
        elementsUnique: true,
        elementsConstraint: undefined,
      },
    };
    expect(dataConstraintToPropertyTypeDataConstraint(constraint)).toEqual(
      constraint,
    );
  });
});
