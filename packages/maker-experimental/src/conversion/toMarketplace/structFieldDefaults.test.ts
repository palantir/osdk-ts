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

import assert from "node:assert/strict";

import type { ActionParameter, StructFieldDefaultValue } from "@osdk/maker";
import {
  CREATE_OR_MODIFY_OBJECT_PARAMETER,
  defineAction,
  defineCreateObjectAction,
  defineCreateOrModifyObjectAction,
  defineModifyObjectAction,
  defineObject,
  getImportedTypes,
  getOntologyDefinition,
  initializeOntologyState,
  MODIFY_OBJECT_PARAMETER,
} from "@osdk/maker";
import { beforeEach, describe, it } from "vitest";

import { OntologyRidGeneratorImpl } from "../../util/generateRid.js";
import { convertActionValidation } from "./convertActionValidation.js";
import { convertOntologyDefinition } from "./convertOntologyDefinition.js";

describe("struct field defaults", () => {
  beforeEach(() => initializeOntologyState("com.palantir."));

  for (const [name, defineEditAction, objectParameterId] of [
    ["modify", defineModifyObjectAction, MODIFY_OBJECT_PARAMETER],
    [
      "create or modify",
      defineCreateOrModifyObjectAction,
      CREATE_OR_MODIFY_OBJECT_PARAMETER,
    ],
  ] as const) {
    it(`prefills every struct and struct-list field in ${name} actions`, () => {
      const objectType = defineFixture();
      defineEditAction({ objectType });
      const ridGenerator = new OntologyRidGeneratorImpl(getImportedTypes());
      const metadata = convertOntologyDefinition(
        getOntologyDefinition(),
        ridGenerator,
      ).ontology;
      const validations = Object.values(metadata.actionTypes)[0].actionType
        .actionTypeLogic.validation.parameterValidations;
      const objectMetadata = Object.values(metadata.objectTypes)[0].objectType;
      for (const propertyId of ["details", "visualizationJson"] as const) {
        const property = Object.values(objectMetadata.propertyTypes).find(
          (p) => p.apiName === propertyId,
        );
        assert.ok(property != null);
        const propertyType =
          property.type.type === "array"
            ? property.type.array.subtype
            : property.type;
        assert.equal(propertyType.type, "struct");
        assert.equal(
          validations[propertyId].defaultValidation.display.prefill,
          undefined,
        );
        for (const field of propertyType.struct.structFields) {
          const value = {
            parameterId: objectParameterId,
            propertyTypeId: propertyId,
            structFieldRid: field.structFieldRid,
          };
          assert.deepEqual(
            validations[propertyId].structFieldValidations[field.apiName]
              .defaultValidation.display.prefill,
            propertyId === "details"
              ? {
                  type: "objectParameterStructFieldValue",
                  objectParameterStructFieldValue: value,
                }
              : {
                  type: "objectParameterStructListFieldValue",
                  objectParameterStructListFieldValue: value,
                },
          );
        }
      }
      assert.deepEqual(validations.name.defaultValidation.display.prefill, {
        type: "objectParameterPropertyValue",
        objectParameterPropertyValue: {
          parameterId: objectParameterId,
          propertyTypeId: "name",
        },
      });
    });
  }

  it("preserves explicit defaults, field constraints, opt-outs, and conditional defaults", () => {
    const objectType = defineFixture();
    const explicitDefault = listDefault("toolName");
    const conditionalDefault = listDefault("input");
    const configuration = {
      title: { defaultValue: explicitDefault, required: true },
      input: { defaultValue: null },
      result: {
        conditionalOverrides: [
          {
            type: "defaultValue" as const,
            condition: { type: "true" as const, true: {} },
            defaultValue: conditionalDefault,
          },
        ],
      },
    };
    const action = defineModifyObjectAction({
      objectType,
      parameterConfiguration: {
        visualizationJson: { structFieldValidations: configuration },
      },
    });
    const ridGenerator = new OntologyRidGeneratorImpl(getImportedTypes());
    const fields = convertActionValidation(action, ridGenerator)
      .parameterValidations.visualizationJson.structFieldValidations;
    assert.deepEqual(fields.title.defaultValidation.display.prefill, {
      type: "objectParameterStructListFieldValue",
      objectParameterStructListFieldValue: {
        parameterId: MODIFY_OBJECT_PARAMETER,
        propertyTypeId: "previousVisualizations",
        structFieldRid: ridGenerator.generateStructFieldRid(
          "previousVisualizations",
          "toolName",
        ),
      },
    });
    assert.equal(
      fields.title.defaultValidation.validation.required.type,
      "required",
    );
    assert.equal(fields.input.defaultValidation.display.prefill, undefined);
    assert.equal(
      fields.result.defaultValidation.display.prefill?.type,
      "objectParameterStructListFieldValue",
    );
    assert.deepEqual(
      fields.result.conditionalOverrides[0].structFieldBlockOverrides,
      [
        {
          type: "prefill",
          prefill: {
            prefill: {
              type: "objectParameterStructListFieldValue",
              objectParameterStructListFieldValue: {
                parameterId: MODIFY_OBJECT_PARAMETER,
                propertyTypeId: "previousVisualizations",
                structFieldRid: ridGenerator.generateStructFieldRid(
                  "previousVisualizations",
                  "input",
                ),
              },
            },
          },
        },
      ],
    );
    assert.equal(Object.hasOwn(configuration.result, "defaultValue"), false);
  });

  it("does not infer existing-object defaults for create actions", () => {
    const action = defineCreateObjectAction({
      objectType: defineFixture(),
    });
    const validations = convertActionValidation(
      action,
      new OntologyRidGeneratorImpl(getImportedTypes()),
    ).parameterValidations;
    for (const field of Object.values(
      validations.visualizationJson.structFieldValidations,
    )) {
      assert.equal(field.defaultValidation.display.prefill, undefined);
    }
  });

  it("does not infer struct defaults from a bulk object parameter", () => {
    const action = defineModifyObjectAction({
      objectType: defineFixture(),
      parameterConfiguration: {
        [MODIFY_OBJECT_PARAMETER]: { required: { listLength: { min: 1 } } },
      },
    });
    assert.equal(
      action.parameters?.find((p) => p.id === "details")?.validation
        .structFieldValidations,
      undefined,
    );
  });

  it("supports field defaults on explicitly defined actions", () => {
    const action = defineExplicitAction(scalarDefault());
    const validation = convertActionValidation(
      action,
      new OntologyRidGeneratorImpl(getImportedTypes()),
    );
    assert.equal(
      validation.parameterValidations.details.structFieldValidations.title
        .defaultValidation.display.prefill?.type,
      "objectParameterStructFieldValue",
    );
  });

  for (const [label, reference, expected] of [
    [
      "missing parameter",
      { parameterId: "missing" },
      /unknown parameter missing/,
    ],
    [
      "unknown property",
      { propertyTypeId: "missing" },
      /unknown or non-struct property missing/,
    ],
    [
      "non-struct property",
      { propertyTypeId: "name" },
      /unknown or non-struct property name/,
    ],
    [
      "unknown field",
      { structFieldApiName: "missing" },
      /unknown source field missing/,
    ],
    [
      "incompatible field",
      { propertyTypeId: "counts", structFieldApiName: "count" },
      /incompatible source field type/,
    ],
    [
      "list source for scalar prefill",
      { propertyTypeId: "visualizationJson" },
      /struct cardinality/,
    ],
  ] as const) {
    it(`rejects ${label}`, () => {
      const defaultValue = scalarDefault();
      Object.assign(defaultValue.objectParameterStructFieldValue, reference);
      assert.throws(() => defineExplicitAction(defaultValue), expected);
    });
  }

  it("rejects later source parameters", () => {
    assert.throws(
      () => defineExplicitAction(scalarDefault(), ["details", "source"]),
      /earlier parameter/,
    );
  });

  it("rejects a scalar default on a struct-list parameter", () => {
    assert.throws(
      () => defineExplicitAction(scalarDefault(), undefined, "structList"),
      /struct cardinality/,
    );
  });

  it("rejects an unknown target field", () => {
    assert.throws(
      () =>
        defineExplicitAction(scalarDefault(), undefined, "struct", "missing"),
      /unknown target field/,
    );
  });

  it("validates conditional default references", () => {
    const defaultValue = scalarDefault();
    defaultValue.objectParameterStructFieldValue.parameterId = "missing";
    assert.throws(
      () =>
        defineExplicitAction(defaultValue, undefined, "struct", "title", true),
      /unknown parameter missing/,
    );
  });

  it("continues rejecting top-level struct defaults", () => {
    const action = defineModifyObjectAction({
      objectType: defineFixture(),
      parameterConfiguration: {
        visualizationJson: {
          defaultValue: {
            type: "objectParameterPropertyValue",
            objectParameterPropertyValue: {
              parameterId: MODIFY_OBJECT_PARAMETER,
              propertyTypeId: "visualizationJson",
            },
          },
        },
      },
    });
    assert.throws(
      () =>
        convertActionValidation(
          action,
          new OntologyRidGeneratorImpl(getImportedTypes()),
        ),
      /cannot define a top-level default value/,
    );
  });
});

function defineFixture() {
  const definition = {
    apiName: "RequestForInformation",
    displayName: "Request For Information",
    pluralDisplayName: "Requests For Information",
    primaryKeyPropertyApiName: "id",
    titlePropertyApiName: "name",
    properties: {
      id: { type: "string" as const },
      name: { type: "string" as const },
      details: { type: structType },
      visualizationJson: { type: structType, array: true },
      previousVisualizations: { type: structType, array: true },
      counts: {
        type: {
          type: "struct" as const,
          structDefinition: { count: "integer" as const },
        },
      },
    },
  };
  return defineObject(definition);
}

const structType = {
  type: "struct",
  structDefinition: {
    input: "string",
    result: "string",
    title: "string",
    toolName: "string",
  },
} as const;

function listDefault(structFieldApiName: string): StructFieldDefaultValue {
  return {
    type: "objectParameterStructListFieldValue",
    objectParameterStructListFieldValue: {
      parameterId: MODIFY_OBJECT_PARAMETER,
      propertyTypeId: "previousVisualizations",
      structFieldApiName,
    },
  };
}

function scalarDefault() {
  return {
    type: "objectParameterStructFieldValue" as const,
    objectParameterStructFieldValue: {
      parameterId: "source",
      propertyTypeId: "details",
      structFieldApiName: "title",
    },
  };
}

function defineExplicitAction(
  defaultValue: StructFieldDefaultValue,
  parameterOrdering?: string[],
  type: "struct" | "structList" = "struct",
  field = "title",
  conditional = false,
) {
  const objectType = defineFixture();
  const structFieldTypes = {
    title: { type: "string" as const, string: {} },
  };
  const target: ActionParameter = {
    id: "details",
    displayName: "Details",
    type:
      type === "struct"
        ? { type, struct: { structFieldTypes } }
        : { type, structList: { structFieldTypes } },
    validation: {
      allowedValues: { type: "struct" },
      required: false,
      structFieldValidations: {
        [field]: conditional
          ? {
              conditionalOverrides: [
                {
                  type: "defaultValue",
                  condition: { type: "true", true: {} },
                  defaultValue,
                },
              ],
            }
          : { defaultValue },
      },
    },
  };
  return defineAction({
    apiName: "explicit-struct-default",
    displayName: "Explicit struct default",
    status: "active",
    rules: [
      {
        type: "modifyObjectRule",
        modifyObjectRule: {
          objectToModify: "source",
          propertyValues: {},
          structFieldValues: {},
        },
      },
    ],
    parameterOrdering,
    parameters: [
      {
        id: "source",
        displayName: "Source",
        type: {
          type: "objectReference",
          objectReference: { objectTypeId: objectType.apiName },
        },
        validation: {
          allowedValues: { type: "objectQuery" },
          required: true,
        },
      },
      target,
    ],
  });
}
