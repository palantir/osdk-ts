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

import type { IDataType } from "@osdk/generator-converters.ontologyir";
import { getImportedTypes, initializeOntologyState } from "@osdk/maker";
import { describe, expect, it } from "vitest";

import { defineFunctionBackedAction } from "../../api/defineFunctionBackedAction.js";
import { OntologyRidGeneratorImpl } from "../../util/generateRid.js";
import {
  convertAction,
  dataTypeToActionParameterAllowedValues,
  dataTypeToActionStructFieldValidations,
  dataTypeToActionParameterType,
} from "./convertActionHelpers.js";

const dataType = (type: string): IDataType => ({ type });

describe(dataTypeToActionParameterType, () => {
  it("builds function-backed actions while omitting injected contexts", () => {
    initializeOntologyState("test");
    const action = defineFunctionBackedAction({
      functionApiName: "customFunction",
    });
    const converted = convertAction(
      action,
      new OntologyRidGeneratorImpl(getImportedTypes()),
      {
        discoveredFunctions: [
          {
            locator: {
              type: "typescript",
              typescript: { functionName: "customFunction" },
            },
            inputs: [
              {
                name: "context",
                dataType: {
                  type: "anonymousCustomType",
                  anonymousCustomType: {
                    fields: {
                      client: { type: "client", client: {} },
                      durable: {
                        type: "durableContext",
                        durableContext: {},
                      },
                    },
                  },
                },
                required: true,
              },
              {
                name: "input",
                dataType: {
                  type: "anonymousCustomType",
                  anonymousCustomType: {
                    fields: { value: dataType("string") },
                    fieldMetadata: { value: { required: true } },
                  },
                },
                required: true,
              },
            ],
            output: {
              single: { dataType: { type: "ontologyEdit", ontologyEdit: {} } },
            },
            customTypes: {},
          },
        ],
      },
    );

    expect(
      Object.keys(converted?.actionType.metadata.parameters ?? {}),
    ).toEqual(["input"]);
    expect(converted?.actionType.metadata.parameters).toHaveProperty(
      "input.type.type",
      "struct",
    );
    expect(converted?.actionType.actionTypeLogic.logic.rules[0]).toHaveProperty(
      "functionRule.functionInputValues",
      {
        input: { type: "parameterId", parameterId: "input" },
      },
    );
  });

  it("converts an anonymous custom type to a struct parameter", () => {
    expect(
      dataTypeToActionParameterType({
        type: "anonymousCustomType",
        anonymousCustomType: {
          fields: {
            bool: dataType("boolean"),
            date: dataType("date"),
            double: dataType("double"),
            integer: dataType("integer"),
            long: dataType("long"),
            object: {
              type: "object",
              object: { objectTypeId: "Employee" },
            },
            optionalString: {
              type: "optionalType",
              optionalType: { wrappedType: dataType("string") },
            },
            timestamp: dataType("timestamp"),
          },
        },
      }),
    ).toEqual({
      type: "struct",
      struct: {
        structFieldTypes: {
          bool: { type: "boolean", boolean: {} },
          date: { type: "date", date: {} },
          double: { type: "double", double: {} },
          integer: { type: "integer", integer: {} },
          long: { type: "long", long: {} },
          object: {
            type: "objectReference",
            objectReference: {
              objectTypeId: "Employee",
              maybeCreateObjectOption: null,
            },
          },
          optionalString: { type: "string", string: {} },
          timestamp: { type: "timestamp", timestamp: {} },
        },
      },
    });
  });

  it("resolves named custom types in scalar and list inputs", () => {
    const customTypes = {
      "custom-id": {
        fields: { value: dataType("string") },
      },
    };
    const customType: IDataType = {
      type: "functionCustomType",
      functionCustomType: "custom-id",
    };

    expect(dataTypeToActionParameterType(customType, customTypes)).toEqual({
      type: "struct",
      struct: {
        structFieldTypes: { value: { type: "string", string: {} } },
      },
    });
    expect(
      dataTypeToActionParameterType(
        { type: "list", list: { elementsType: customType } },
        customTypes,
      ),
    ).toEqual({
      type: "structList",
      structList: {
        structFieldTypes: { value: { type: "string", string: {} } },
      },
    });
  });

  it("distinguishes geo points from other geo shapes", () => {
    expect(
      dataTypeToActionParameterType({
        type: "geoShape",
        geoShape: { subType: { type: "geoPoint", geoPoint: {} } },
      }),
    ).toBe("geohash");
    expect(
      dataTypeToActionParameterType({
        type: "list",
        list: {
          elementsType: {
            type: "geoShape",
            geoShape: { subType: { type: "polygon", polygon: {} } },
          },
        },
      }),
    ).toBe("geoshapeList");
  });

  it("preserves marking subtypes in inferred allowed values", () => {
    const mandatoryMarking: IDataType = {
      type: "marking",
      marking: {
        subType: { type: "mandatoryMarking", mandatoryMarking: {} },
      },
    };
    const classificationMarkingList: IDataType = {
      type: "list",
      list: {
        elementsType: {
          type: "marking",
          marking: {
            subType: {
              type: "classificationMarking",
              classificationMarking: {},
            },
          },
        },
      },
    };

    expect(
      dataTypeToActionParameterAllowedValues(mandatoryMarking, "marking"),
    ).toEqual({ type: "mandatoryMarking" });
    expect(
      dataTypeToActionParameterAllowedValues(
        classificationMarkingList,
        "markingList",
      ),
    ).toEqual({ type: "cbacMarking" });
  });

  it("preserves custom type field required", () => {
    const customTypes = {
      "custom-id": {
        fields: {
          inferredOptional: {
            type: "optionalType",
            optionalType: { wrappedType: dataType("string") },
          },
          metadataOptional: dataType("string"),
          required: dataType("string"),
        },
        fieldMetadata: {
          metadataOptional: { required: false },
          required: { required: true },
        },
      },
    };

    expect(
      dataTypeToActionStructFieldValidations(
        {
          type: "functionCustomType",
          functionCustomType: "custom-id",
        },
        customTypes,
      ),
    ).toEqual({
      inferredOptional: { required: false },
      metadataOptional: { required: false },
      required: { required: true },
    });
  });

  it("reports missing and unsupported custom type definitions", () => {
    expect(() =>
      dataTypeToActionParameterType({
        type: "functionCustomType",
        functionCustomType: "missing",
      }),
    ).toThrow("Unknown function custom type: 'missing'");

    expect(() =>
      dataTypeToActionParameterType({
        type: "anonymousCustomType",
        anonymousCustomType: {
          fields: { nested: { type: "map" } },
        },
      }),
    ).toThrow(
      "Unsupported function custom type field data type for action parameter: map",
    );
  });
});
