/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { beforeEach, describe, expect, it } from "vitest";
import { defineObject } from "../defineObject.js";
import {
  defineOntology,
  dumpOntologyFullMetadata,
  dumpValueTypeWireType,
} from "../defineOntology.js";
import { defineValueType } from "../defineValueType.js";

describe("Value Types", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  it("Fails to define value type with incorrect semver", () => {
    expect(() =>
      defineValueType({
        apiName: "apiName",
        displayName: "displayName",
        type: {
          "type": "boolean",
          constraints: [{ constraint: { "allowedValues": ["TRUE_VALUE"] } }],
        },
        version: "not a version",
      })
    ).toThrowErrorMatchingInlineSnapshot(
      "[Error: Invariant failed: Version is not a valid semver]",
    );
  });

  it("Tests convertProperty function with valueType constraints for string", () => {
    const testStringValueType = defineValueType({
      apiName: "stringWithConstraints",
      displayName: "String With Constraints",
      description: "A string type with additional constraints",
      type: {
        "type": "string",
        constraints: [
          {
            constraint: {
              type: "length",
              length: {
                minSize: 5,
                maxSize: 20,
              },
            },
            failureMessage: {
              message: "String must be between 5 and 20 characters",
            },
          },
        ],
      },
      version: "1.0.0",
    });

    const object = defineObject({
      titlePropertyApiName: "constrainedString",
      displayName: "Test Object",
      pluralDisplayName: "Test Objects",
      apiName: "testObject",
      primaryKeyPropertyApiName: "constrainedString",
      properties: {
        "constrainedString": {
          type: "string",
          displayName: "Constrained String",
          valueType: testStringValueType,
        },
      },
    });

    const ontology = dumpOntologyFullMetadata();
    const objectPropertyType =
      ontology.ontology.objectTypes["com.palantir.testObject"]
        .objectType.propertyTypes["constrainedString"];

    expect(objectPropertyType.valueType).toEqual({
      apiName: "stringWithConstraints",
      version: "1.0.0",
      packageNamespace: "com.palantir",
      displayMetadata: {
        displayName: "String With Constraints",
        description: "A string type with additional constraints",
      },
    });

    expect(objectPropertyType.dataConstraints).toBeDefined();
    expect(objectPropertyType.dataConstraints?.propertyTypeConstraints)
      .toHaveLength(1);

    const constraintWrapper = objectPropertyType.dataConstraints
      ?.propertyTypeConstraints[0];
    expect(constraintWrapper?.constraints?.type).toBe("string");
    expect(
      (constraintWrapper?.constraints as {
        type: "string";
        string: { length: { minSize: number; maxSize: number } };
      }).string.length.minSize,
    ).toBe(5);
    expect(
      (constraintWrapper?.constraints as {
        type: "string";
        string: { length: { minSize: number; maxSize: number } };
      }).string.length.maxSize,
    ).toBe(20);
    expect(constraintWrapper?.failureMessage?.message).toBe(
      "String must be between 5 and 20 characters",
    );
  });

  it("Correctly serializes a value type", () => {
    defineValueType({
      apiName: "apiName",
      displayName: "displayName",
      type: {
        "type": "boolean",
        constraints: [{ constraint: { "allowedValues": ["TRUE_VALUE"] } }],
      },
      version: "0.1.0",
    });
    expect(dumpValueTypeWireType()).toMatchInlineSnapshot(`
        {
          "valueTypes": [
            {
              "metadata": {
                "apiName": "apiName",
                "displayMetadata": {
                  "description": "",
                  "displayName": "displayName",
                },
                "packageNamespace": "com.palantir",
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
              "versions": [
                {
                  "baseType": {
                    "boolean": {},
                    "type": "boolean",
                  },
                  "constraints": [
                    {
                      "constraint": {
                        "constraint": {
                          "boolean": {
                            "allowedValues": [
                              "TRUE_VALUE",
                            ],
                          },
                          "type": "boolean",
                        },
                        "failureMessage": undefined,
                      },
                    },
                  ],
                  "exampleValues": [],
                  "version": "0.1.0",
                },
              ],
            },
          ],
        }
      `);
  });
});
