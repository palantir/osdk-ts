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

import { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import {
  CREATE_INTERFACE_OBJECT_PARAMETER,
  CREATE_OR_MODIFY_OBJECT_PARAMETER,
  defineAction,
  DELETE_OBJECT_PARAMETER,
  MODIFY_INTERFACE_OBJECT_PARAMETER,
  MODIFY_OBJECT_PARAMETER,
} from "../defineAction.js";
import { defineCreateInterfaceObjectAction } from "../defineCreateInterfaceObjectAction.js";
import { defineCreateObjectAction } from "../defineCreateObjectAction.js";
import { defineCreateOrModifyObjectAction } from "../defineCreateOrModifyObjectAction.js";
import { defineDeleteInterfaceObjectAction } from "../defineDeleteInterfaceObjectAction.js";
import { defineDeleteObjectAction } from "../defineDeleteObjectAction.js";
import { defineInterface } from "../defineInterface.js";
import { defineInterfaceLinkConstraint } from "../defineInterfaceLinkConstraint.js";
import { defineLink } from "../defineLink.js";
import { defineModifyInterfaceObjectAction } from "../defineModifyInterfaceObjectAction.js";
import { defineModifyObjectAction } from "../defineModifyObjectAction.js";
import { defineObject } from "../defineObject.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import { defineSharedPropertyType } from "../defineSpt.js";
import { importOntologyEntity } from "../importOntologyEntity.js";
import { type InterfaceType } from "../interface/InterfaceType.js";
import { type SharedPropertyType } from "../properties/SharedPropertyType.js";

describe("Action Types", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, undefined);
  });
  it("pairs a listLength interface target with listLengthValidation, not scalar required", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });

    defineModifyInterfaceObjectAction({
      interfaceType: person,
      parameterConfiguration: {
        [MODIFY_INTERFACE_OBJECT_PARAMETER]: {
          required: { listLength: { min: 1, max: 5 } },
        },
      },
    });

    const actionType =
      dumpOntologyFullMetadata().ontology.actionTypes[
        "com.palantir.modify-person"
      ].actionType;
    const param =
      actionType.metadata.parameters[MODIFY_INTERFACE_OBJECT_PARAMETER];
    const validation =
      actionType.actionTypeLogic.validation.parameterValidations[
        MODIFY_INTERFACE_OBJECT_PARAMETER
      ].defaultValidation.validation;

    // Opting the target into a list must produce a listLengthValidation, not a
    // scalar required configuration (OMS rejects scalar required on list types).
    expect(param.type.type).toBe("interfaceReferenceList");
    expect(validation.required).toEqual({
      type: "listLengthValidation",
      listLengthValidation: { minLength: 1, maxLength: 5 },
    });
  });
  it("Concrete actions are properly defined", () => {
    const exampleAction = defineAction({
      apiName: "foo",
      displayName: "exampleAction",
      status: "active",
      rules: [
        {
          type: "addOrModifyObjectRuleV2",
          addOrModifyObjectRuleV2: {
            objectToModify: "objectToModifyParameter",
            propertyValues: {
              bar: {
                type: "parameterId",
                parameterId: "param1",
              },
            },
            structFieldValues: {},
          },
        },
      ],
      parameters: [
        {
          id: "param1",
          displayName: "param1",
          type: "boolean",
          validation: { required: true, allowedValues: { type: "boolean" } },
        },
      ],
    });

    expect(dumpOntologyFullMetadata()).toMatchSnapshot();
  });

  describe("Interface Actions", () => {
    it("Interface actions are properly defined", () => {
      const foo = defineInterface({
        apiName: "foo",
        displayName: "foo",
        properties: {},
      });
      const exampleAction = defineAction({
        apiName: "foo",
        displayName: "exampleAction",
        status: "active",
        rules: [
          {
            type: "addInterfaceRule",
            addInterfaceRule: {
              interfaceApiName: "foo",
              objectTypeParameter: "param1",
              sharedPropertyValues: {},
              interfacePropertyValues: {},
            },
          },
        ],
        parameters: [
          {
            id: "param1",
            displayName: "param1",
            type: "boolean",
            validation: { required: true, allowedValues: { type: "boolean" } },
          },
        ],
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Simple interface actions (with object types) are properly defined", () => {
      const exampleStructPropertyType = defineSharedPropertyType({
        apiName: "property2",
        type: {
          type: "struct",
          structDefinition: {
            simpleProperty: "string",
          },
        },
      });
      const mySpt = defineSharedPropertyType({
        apiName: "mySpt",
        type: "string",
      });
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        icon: { color: "#c7cdd6ff", locator: "globe" },
        properties: {
          mySpt,
          property1: { type: "string" },
          property2: exampleStructPropertyType,
        },
      });

      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: {
          bar: { type: "string" },
          property1: { type: "string" },
          property2: {
            type: {
              type: "struct",
              structDefinition: { simpleProperty: "string" },
            },
          },
        },
        implementsInterfaces: [
          {
            implements: exampleInterface,
            propertyMapping: [
              {
                interfaceProperty: "com.palantir.mySpt",
                mapsTo: "bar",
              },
              {
                interfaceProperty: "property1",
                mapsTo: "property1",
              },
              {
                interfaceProperty: "com.palantir.property2",
                mapsTo: "property2",
              },
            ],
          },
        ],
      });

      const createActionWithObjectType = defineCreateInterfaceObjectAction({
        interfaceType: exampleInterface,
        objectType: exampleObjectType,
      });

      const modifyAction = defineModifyInterfaceObjectAction({
        interfaceType: exampleInterface,
        objectType: exampleObjectType,
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Interface actions with non-namespaced parameter overrides are properly defined", () => {
      const spt1 = defineSharedPropertyType({
        apiName: "spt1",
        displayName: "spt",
        type: "string",
      });

      const spt2 = defineSharedPropertyType({
        apiName: "spt2",
        displayName: "spt",
        type: "string",
      });
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        properties: {
          spt1,
          spt2,
        },
      });
      const createAction = defineCreateInterfaceObjectAction({
        interfaceType: exampleInterface,
        useNonNamespacedParameters: true,
      });
      const createActionWithOverrides = defineCreateInterfaceObjectAction({
        interfaceType: exampleInterface,
        apiName: "create-with-overrides",
        useNonNamespacedParameters: true,
        conflictingParameterOverrides: { [spt2.apiName]: "overridden" },
        parameterConfiguration: {
          [spt1.nonNameSpacedApiName]: {
            required: false,
            conditionalOverrides: [
              {
                type: "required",
                condition: {
                  type: "and",
                  conditions: [
                    {
                      type: "group",
                      name: "parameterLevelGroup",
                    },
                    {
                      type: "parameter",
                      parameterId: "overridden",
                      matches: {
                        type: "staticValue",
                        staticValue: {
                          type: "string",
                          string: "bar",
                        },
                      },
                    },
                  ],
                },
              },
            ],
            defaultValue: {
              type: "staticValue",
              staticValue: {
                type: "string",
                string: "default_fizz",
              },
            },
            displayName: "fizz_display",
            description: "fizz_description",
          },
        },
        parameterOrdering: ["overridden", spt1.nonNameSpacedApiName],
      });

      const modifyAction = defineModifyInterfaceObjectAction({
        interfaceType: exampleInterface,
        useNonNamespacedParameters: true,
      });
      const modifyActionWithOverrides = defineModifyInterfaceObjectAction({
        interfaceType: exampleInterface,
        apiName: "modify-with-overrides",
        useNonNamespacedParameters: true,
        conflictingParameterOverrides: { [spt2.apiName]: "overridden" },
        parameterConfiguration: {
          [spt1.nonNameSpacedApiName]: {
            required: false,
            conditionalOverrides: [
              {
                type: "required",
                condition: {
                  type: "and",
                  conditions: [
                    {
                      type: "group",
                      name: "parameterLevelGroup",
                    },
                    {
                      type: "parameter",
                      parameterId: "overridden",
                      matches: {
                        type: "staticValue",
                        staticValue: {
                          type: "string",
                          string: "bar",
                        },
                      },
                    },
                  ],
                },
              },
            ],
            defaultValue: {
              type: "staticValue",
              staticValue: {
                type: "string",
                string: "default_fizz",
              },
            },
            displayName: "fizz_display",
            description: "fizz_description",
          },
        },
        parameterOrdering: ["overridden", spt1.nonNameSpacedApiName],
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Simple interface actions (without object types) are properly defined", () => {
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        properties: {
          property1: { type: "string" },
        },
      });
      const createAction = defineCreateInterfaceObjectAction({
        interfaceType: exampleInterface,
      });
      const modifyAction = defineModifyInterfaceObjectAction({
        interfaceType: exampleInterface,
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Simple interface delete action is properly defined", () => {
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        properties: {
          property1: { type: "string" },
        },
      });
      const deleteAction = defineDeleteInterfaceObjectAction({
        interfaceType: exampleInterface,
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Interface delete action with customizations is properly defined", () => {
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        properties: {
          property1: { type: "string" },
        },
      });
      const deleteAction = defineDeleteInterfaceObjectAction({
        interfaceType: exampleInterface,
        apiName: "custom-delete-api-name",
        displayName: "Custom Delete Action",
        status: "experimental",
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Interface delete action with action level validation is properly defined", () => {
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        properties: {
          property1: { type: "string" },
        },
      });
      const deleteAction = defineDeleteInterfaceObjectAction({
        interfaceType: exampleInterface,
        actionLevelValidation: [
          {
            condition: {
              type: "group",
              name: "deleteValidationGroup",
            },
            displayMetadata: {
              failureMessage: "You must belong to the delete group.",
              typeClasses: [],
            },
          },
        ],
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Interface delete action validation can reference the target parameter", () => {
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        properties: {
          property1: { type: "string" },
        },
      });
      const matches = {
        type: "staticValue",
        staticValue: { type: "null", null: {} },
      } as const;
      const deleteAction = defineDeleteInterfaceObjectAction({
        interfaceType: exampleInterface,
        actionLevelValidation: [
          {
            condition: {
              type: "parameter",
              parameterId: DELETE_OBJECT_PARAMETER,
              matches,
            },
          },
        ],
      });

      expect(deleteAction.validation).toEqual([
        {
          condition: {
            type: "comparison",
            comparison: {
              operator: "EQUALS",
              left: {
                type: "parameterId",
                parameterId: DELETE_OBJECT_PARAMETER,
              },
              right: matches,
            },
          },
          displayMetadata: {
            failureMessage: "Did not satisfy validation",
            typeClasses: [],
          },
        },
      ]);
    });

    it("Interface actions with customizations are properly defined", () => {
      const property1 = defineSharedPropertyType({
        apiName: "property1",
        type: "string",
      });
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        properties: {
          property1,
          property2: { type: "string" },
          property3: { type: "string" },
        },
      });
      const createAction = defineCreateInterfaceObjectAction({
        interfaceType: exampleInterface,
        apiName: "custom-api-name-1",
        displayName: "Custom Create Action",
        status: "experimental",
        actionLevelValidation: [
          {
            condition: {
              type: "group",
              name: "actionLevelGroup",
            },
          },
        ],
        parameterConfiguration: {
          property3: {
            required: false,
            conditionalOverrides: [
              {
                type: "required",
                condition: {
                  type: "and",
                  conditions: [
                    {
                      type: "group",
                      name: "parameterLevelGroup",
                    },
                    {
                      type: "parameter",
                      parameterId: property1.apiName,
                      matches: {
                        type: "staticValue",
                        staticValue: {
                          type: "string",
                          string: "bar",
                        },
                      },
                    },
                  ],
                },
              },
            ],
            defaultValue: {
              type: "staticValue",
              staticValue: {
                type: "string",
                string: "default_fizz",
              },
            },
            displayName: "fizz_display",
            description: "fizz_description",
            renderHint: {
              type: "textArea",
              textArea: {},
            },
          },
        },
        excludedProperties: ["property2"],
        parameterOrdering: [property1.apiName, "property3"],
        enableLayoutSwitch: true,
        defaultFormat: "TABLE",
        tableConfiguration: {
          columnWidthByParameterRid: {},
          enableFileImport: false,
          fitHorizontally: true,
          frozenColumnCount: 1,
          rowHeightInLines: 10,
        },
        submissionMetadata: {
          successMessage: "Custom success message",
          undoButtonConfiguration: true,
          submitButtonDisplayMetadata: {
            intent: "DANGER",
            text: "Custom button",
          },
        },
      });
      const modifyAction = defineModifyInterfaceObjectAction({
        interfaceType: exampleInterface,
        apiName: "custom-api-name-2",
        displayName: "Custom Modify Action",
        status: "experimental",
        actionLevelValidation: [
          {
            condition: {
              type: "group",
              name: "actionLevelGroup",
            },
          },
        ],
        parameterConfiguration: {
          property3: {
            required: false,
            conditionalOverrides: [
              {
                type: "required",
                condition: {
                  type: "and",
                  conditions: [
                    {
                      type: "group",
                      name: "parameterLevelGroup",
                    },
                    {
                      type: "parameter",
                      parameterId: property1.apiName,
                      matches: {
                        type: "staticValue",
                        staticValue: {
                          type: "string",
                          string: "bar",
                        },
                      },
                    },
                  ],
                },
              },
            ],
            defaultValue: {
              type: "staticValue",
              staticValue: {
                type: "string",
                string: "default_fizz",
              },
            },
            displayName: "fizz_display",
            description: "fizz_description",
          },
        },
        excludedProperties: ["property2"],
        parameterOrdering: [property1.apiName, "property3"],
        enableLayoutSwitch: true,
        defaultFormat: "TABLE",
        tableConfiguration: {
          columnWidthByParameterRid: {},
          enableFileImport: false,
          fitHorizontally: true,
          frozenColumnCount: 1,
          rowHeightInLines: 10,
        },
        submissionMetadata: {
          successMessage: "Custom success message",
          undoButtonConfiguration: true,
          submitButtonDisplayMetadata: {
            intent: "DANGER",
            text: "Custom button",
          },
        },
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Interface actions validate SPT existence", () => {
      const spt = defineSharedPropertyType({
        apiName: "spt",
        type: "string",
      });
      const importedInterface: InterfaceType = {
        apiName: "com.palantir.other.ontology.event.Event",
        displayMetadata: {
          displayName: "Event",
          description: "Event",
          icon: {
            type: "blueprint",
            blueprint: {
              color: "#4C90F0",
              locator: "timeline-events",
            },
          },
        },
        extendsInterfaces: [],
        links: [],
        status: {
          type: "active",
          active: {},
        },
        propertiesV2: {
          "com.palantir.other.ontology.types.id": {
            required: true,
            sharedPropertyType: {
              displayName: "Id",
              apiName: "com.palantir.other.ontology.types.id",
              type: "string",
              nonNameSpacedApiName: "id",
              typeClasses: [
                {
                  kind: "render_hint",
                  name: "SELECTABLE",
                },
                {
                  kind: "render_hint",
                  name: "SORTABLE",
                },
              ],
              __type: "SHARED_PROPERTY_TYPE",
            },
          },
        },
        propertiesV3: {
          id: {
            required: true,
            sharedPropertyType: {
              displayName: "Id",
              apiName: "com.palantir.core.ontology.types.id",
              type: "string",
              nonNameSpacedApiName: "id",
              typeClasses: [
                {
                  kind: "render_hint",
                  name: "SELECTABLE",
                },
                {
                  kind: "render_hint",
                  name: "SORTABLE",
                },
              ],
              __type: "SHARED_PROPERTY_TYPE",
            },
          },
        },
        searchable: false,
        __type: "INTERFACE_TYPE",
      } as unknown as InterfaceType;
      importOntologyEntity(importedInterface);
      const interfaceType = defineInterface({
        apiName: "interfaceType",
        properties: {
          spt,
        },
        extends: importedInterface,
      });
      expect(() =>
        defineAction({
          apiName: "action",
          displayName: "action",
          status: "active",
          parameters: [
            {
              id: "interfaceObjectToModifyParameter",
              displayName: "Interface object to modify",
              type: {
                type: "interfaceReference",
                interfaceReference: {
                  interfaceTypeRid: interfaceType.apiName,
                },
              },
              validation: {
                required: true,
                allowedValues: { type: "interfaceObjectQuery" },
              },
            },
            {
              id: "sptParameter",
              displayName: "SPT",
              type: "string",
              validation: {
                required: true,
                allowedValues: { type: "text" },
              },
            },
            {
              id: "otherParameter",
              displayName: "Other parameter",
              type: "string",
              validation: {
                required: true,
                allowedValues: { type: "text" },
              },
            },
          ],
          rules: [
            {
              type: "modifyInterfaceRule",
              modifyInterfaceRule: {
                interfaceApiName: "com.palantir.other.ontology.event.Event",
                interfaceObjectToModifyParameter:
                  "interfaceObjectToModifyParameter",
                sharedPropertyValues: {
                  spt: {
                    type: "parameterId",
                    parameterId: "sptParameter",
                  },
                  "com.palantir.other.invalid.spt": {
                    type: "staticValue",
                    staticValue: {
                      type: "double",
                      double: 4,
                    },
                  },
                  other: {
                    type: "parameterId",
                    parameterId: "otherParameter",
                  },
                },
                interfacePropertyValues: {},
              },
            },
          ],
        }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Shared property type com.palantir.other.invalid.spt does not exist in interface type com.palantir.interfaceType]`,
      );
      expect(() =>
        defineCreateInterfaceObjectAction({ interfaceType }),
      ).not.toThrow();
    });

    it("Interface actions validate SPT existence on the interface", () => {
      expect(() => {
        const spt = defineSharedPropertyType({
          apiName: "spt",
          type: "string",
        });
        const pulseRepetitionIntervalSecs: SharedPropertyType = {
          apiName: "com.palantir.other.ontology.pulseRepetitionIntervalSecs",
          displayName: "Pulse Repetition Interval (s)",
          description: "Pulse Repetition Interval in seconds.",
          type: "double",
          nonNameSpacedApiName: "pulseRepetitionIntervalSecs",
          typeClasses: [],
          __type: OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE,
        } as unknown as SharedPropertyType;
        importOntologyEntity(pulseRepetitionIntervalSecs);
        const interfaceType = defineInterface({
          apiName: "interfaceType",
          properties: {
            spt,
          },
        });
        const action = defineAction({
          apiName: "action",
          displayName: "action",
          status: "active",
          parameters: [
            {
              id: "interfaceObjectToModifyParameter",
              displayName: "Interface object to modify",
              type: {
                type: "interfaceReference",
                interfaceReference: {
                  interfaceTypeRid: interfaceType.apiName,
                },
              },
              validation: {
                required: true,
                allowedValues: { type: "interfaceObjectQuery" },
              },
            },
            {
              id: "sptParameter",
              displayName: "SPT",
              type: "string",
              validation: {
                required: true,
                allowedValues: { type: "text" },
              },
            },
          ],
          rules: [
            {
              type: "modifyInterfaceRule",
              modifyInterfaceRule: {
                interfaceApiName: "com.palantir.other.ontology.event.Event",
                interfaceObjectToModifyParameter:
                  "interfaceObjectToModifyParameter",
                sharedPropertyValues: {
                  spt: {
                    type: "parameterId",
                    parameterId: "sptParameter",
                  },
                  [pulseRepetitionIntervalSecs.apiName]: {
                    type: "staticValue",
                    staticValue: {
                      type: "double",
                      double: 4,
                    },
                  },
                },
                interfacePropertyValues: {},
              },
            },
          ],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Shared property type com.palantir.other.ontology.pulseRepetitionIntervalSecs does not exist in interface type com.palantir.interfaceType]`,
      );
    });

    it("Parameter configuration, property mapping, and excluded property validations work", () => {
      const property1 = defineSharedPropertyType({
        apiName: "property1",
        type: "string",
      });
      const sampleInterface = defineInterface({
        apiName: "sampleInterface",
        properties: {
          property1,
        },
      });
      expect(() => {
        const createAction = defineCreateInterfaceObjectAction({
          interfaceType: sampleInterface,
          parameterConfiguration: {
            custom_parameter: {
              displayName: "My Custom Param",
            },
          },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Parameter custom_parameter does not exist as a property on com.palantir.sampleInterface and its type is not explicitly defined]`,
      );
      expect(() => {
        const createAction = defineModifyInterfaceObjectAction({
          interfaceType: sampleInterface,
          parameterConfiguration: {
            custom_parameter: {
              displayName: "My Custom Param",
            },
          },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Parameter custom_parameter does not exist as a property on com.palantir.sampleInterface and its type is not explicitly defined]`,
      );
      expect(() => {
        const createAction = defineCreateInterfaceObjectAction({
          interfaceType: sampleInterface,
          apiName: "test-create-interface0",
          parameterConfiguration: {
            custom_parameter: {
              displayName: "My Custom Param",
              customParameterType: "string",
            },
          },
        });
      }).not.toThrow();
      expect(() => {
        const createAction = defineModifyInterfaceObjectAction({
          interfaceType: sampleInterface,
          apiName: "test-modify-interface0",
          parameterConfiguration: {
            custom_parameter: {
              displayName: "My Custom Param",
              customParameterType: "string",
            },
          },
        });
      }).not.toThrow();
      expect(() => {
        const createAction = defineCreateInterfaceObjectAction({
          interfaceType: sampleInterface,
          parameterConfiguration: {
            [property1.apiName]: {
              displayName: "My Custom Param",
            },
          },
        });
      }).not.toThrow();
      expect(() => {
        const createAction = defineModifyInterfaceObjectAction({
          interfaceType: sampleInterface,
          parameterConfiguration: {
            [property1.apiName]: {
              displayName: "My Custom Param",
            },
          },
        });
      }).not.toThrow();

      expect(() => {
        const createAction = defineCreateInterfaceObjectAction({
          interfaceType: sampleInterface,
          nonParameterMappings: {
            custom_parameter: {
              type: "staticValue",
              staticValue: {
                type: "string",
                string: "custom_value",
              },
            },
          },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Property custom_parameter does not exist as a property on com.palantir.sampleInterface]`,
      );
      expect(() => {
        const createAction = defineModifyInterfaceObjectAction({
          interfaceType: sampleInterface,
          nonParameterMappings: {
            custom_parameter: {
              type: "staticValue",
              staticValue: {
                type: "string",
                string: "custom_value",
              },
            },
          },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Property custom_parameter does not exist as a property on com.palantir.sampleInterface]`,
      );
      expect(() => {
        const createAction = defineCreateInterfaceObjectAction({
          interfaceType: sampleInterface,
          apiName: "test-create-interface1",
          nonParameterMappings: {
            property1: {
              type: "staticValue",
              staticValue: {
                type: "string",
                string: "custom_value",
              },
            },
          },
        });
      }).not.toThrow();
      expect(() => {
        const createAction = defineModifyInterfaceObjectAction({
          interfaceType: sampleInterface,
          apiName: "test-modify-interface1",
          nonParameterMappings: {
            property1: {
              type: "staticValue",
              staticValue: {
                type: "string",
                string: "custom_value",
              },
            },
          },
        });
      }).not.toThrow();

      expect(() => {
        const createAction = defineCreateInterfaceObjectAction({
          interfaceType: sampleInterface,
          excludedProperties: ["custom_parameter"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Property custom_parameter does not exist as a property on com.palantir.sampleInterface]`,
      );
      expect(() => {
        const createAction = defineModifyInterfaceObjectAction({
          interfaceType: sampleInterface,
          excludedProperties: ["custom_parameter"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Property custom_parameter does not exist as a property on com.palantir.sampleInterface]`,
      );
      expect(() => {
        const createAction = defineCreateInterfaceObjectAction({
          interfaceType: sampleInterface,
          apiName: "test-create-interface2",
          excludedProperties: ["property1"],
        });
      }).not.toThrow();
      expect(() => {
        const createAction = defineModifyInterfaceObjectAction({
          interfaceType: sampleInterface,
          apiName: "test-modify-interface2",
          excludedProperties: ["property1"],
        });
      }).not.toThrow();
    });

    it("Action sections are properly defined", () => {
      const property1 = defineSharedPropertyType({
        apiName: "property1",
        type: "string",
      });
      const sampleInterface = defineInterface({
        apiName: "sampleInterface",
        properties: {
          property1,
        },
      });
      const createAction = defineCreateInterfaceObjectAction({
        interfaceType: sampleInterface,
        sections: [
          {
            id: "section1",
            displayName: "Section 1",
            parameters: [property1.apiName],
            description: "Description for Section 1",
            conditionalOverrides: [
              {
                type: "visibility",
                condition: {
                  type: "group",
                  name: "testGroup",
                },
              },
            ],
          },
        ],
      });
      const modifyAction = defineModifyInterfaceObjectAction({
        interfaceType: sampleInterface,
        sections: [
          {
            id: "section1",
            displayName: "Section 1",
            parameters: [property1.apiName],
            description: "Description for Section 1",
            conditionalOverrides: [
              {
                type: "visibility",
                condition: {
                  type: "group",
                  name: "testGroup",
                },
              },
            ],
          },
        ],
      });
      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });
  });

  describe("Object Actions", () => {
    it("Vector properties are excluded from auto-generated action parameters", () => {
      const objectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: {
          bar: { type: "string" },
          name: { type: "string" },
          embedding: {
            type: {
              type: "vector",
              dimension: 768,
              supportsSearchWith: "COSINE_SIMILARITY",
            },
          },
        },
      });

      const create = defineCreateObjectAction({ objectType });
      const modify = defineModifyObjectAction({ objectType });
      const createOrModify = defineCreateOrModifyObjectAction({ objectType });

      for (const action of [create, modify, createOrModify]) {
        const paramIds = (action.parameters ?? []).map((p) => p.id);
        expect(paramIds).toContain("name");
        expect(paramIds).not.toContain("embedding");
      }
    });

    it("Derived properties are excluded from auto-generated action parameters", () => {
      const personToParent = defineLink({
        apiName: "person-to-parent",
        manyForeignKeyProperty: "parentFk",
        one: {
          object: "com.palantir.person",
          metadata: { apiName: "parent" },
        },
        toMany: {
          object: "com.palantir.person",
          metadata: { apiName: "child" },
        },
      });
      const objectType = defineObject({
        titlePropertyApiName: "pk",
        displayName: "Person",
        pluralDisplayName: "Persons",
        apiName: "person",
        primaryKeyPropertyApiName: "pk",
        properties: {
          pk: { type: "string" },
          parentFk: { type: "string" },
          siblingIds: { type: "string", array: true },
        },
        datasources: [
          { type: "dataset" },
          {
            type: "derived",
            linkDefinition: [
              { linkType: personToParent, side: "TARGET" },
              { linkType: personToParent, side: "SOURCE" },
            ],
            propertyMapping: {
              siblingIds: { type: "collectList", property: "pk", limit: 100 },
            },
          },
        ],
      });

      const create = defineCreateObjectAction({ objectType });
      const modify = defineModifyObjectAction({ objectType });
      const createOrModify = defineCreateOrModifyObjectAction({ objectType });

      for (const action of [create, modify, createOrModify]) {
        const paramIds = (action.parameters ?? []).map((p) => p.id);
        expect(paramIds).toContain("parentFk");
        expect(paramIds).not.toContain("siblingIds");
      }
      expect(modify.rules).toEqual([
        {
          type: "modifyObjectRule",
          modifyObjectRule: {
            objectToModify: MODIFY_OBJECT_PARAMETER,
            propertyValues: {
              parentFk: { type: "parameterId", parameterId: "parentFk" },
            },
            structFieldValues: {},
          },
        },
      ]);
    });

    it("Vector properties cannot be forced into action parameters", () => {
      const objectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: {
          bar: { type: "string" },
          embedding: {
            type: {
              type: "vector",
              dimension: 768,
              supportsSearchWith: "COSINE_SIMILARITY",
            },
          },
        },
      });

      expect(() => {
        defineModifyObjectAction({
          objectType,
          parameterConfiguration: {
            embedding: { displayName: "Embedding" },
          },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Vectors are not supported as action parameters yet]`,
      );
    });

    it("Struct properties render as text inputs in auto-generated action parameters", () => {
      const structDefinition = { simpleProperty: "string" } as const;
      const objectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: {
          bar: { type: "string" },
          metadata: { type: { type: "struct", structDefinition } },
          metadataList: {
            type: { type: "struct", structDefinition },
            array: true,
          },
        },
      });

      const createAction = defineCreateObjectAction({ objectType });

      const { metadata, actionTypeLogic } =
        dumpOntologyFullMetadata().ontology.actionTypes[createAction.apiName]
          .actionType;
      const parameterValidations =
        actionTypeLogic.validation.parameterValidations;

      expect(metadata.parameters["metadata"].type.type).toBe("struct");
      expect(metadata.parameters["metadataList"].type.type).toBe("structList");
      for (const id of ["metadata", "metadataList"]) {
        expect(
          parameterValidations[id].defaultValidation.display.renderHint,
        ).toEqual({ type: "textInput", textInput: {} });
      }
    });

    it("Simple concrete actions are properly defined", () => {
      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: {
          bar: { type: "string" },
          optionalProp: { type: "string" },
        },
      });

      const createObjectActionType = defineCreateObjectAction({
        objectType: exampleObjectType,
      });
      const modifyObjectActionType = defineModifyObjectAction({
        objectType: exampleObjectType,
      });
      const deleteObjectActionType = defineDeleteObjectAction({
        objectType: exampleObjectType,
      });
      const createOrModifyObjectActionType = defineCreateOrModifyObjectAction({
        objectType: exampleObjectType,
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Customizations on CRUD object type actions are properly defined", () => {
      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "primary",
        properties: {
          bar: { type: "string" },
          fizz: { type: "string" },
          buzz: { type: "string" },
          primary: { type: "string" },
        },
      });

      const createObjectActionType = defineCreateObjectAction({
        objectType: exampleObjectType,
        actionLevelValidation: [
          {
            condition: {
              type: "group",
              name: "actionLevelGroup",
            },
          },
          {
            condition: {
              type: "group",
              name: "actionLevelGroup2",
            },
            displayMetadata: {
              failureMessage: "Different custom failure message",
              typeClasses: [],
            },
          },
        ],
        parameterOrdering: ["bar", "fizz", "primary"],
        parameterConfiguration: {
          fizz: {
            required: false,
            conditionalOverrides: [
              {
                type: "required",
                condition: {
                  type: "and",
                  conditions: [
                    {
                      type: "group",
                      name: "parameterLevelGroup",
                    },
                    {
                      type: "parameter",
                      parameterId: "bar",
                      matches: {
                        type: "staticValue",
                        staticValue: {
                          type: "string",
                          string: "bar",
                        },
                      },
                    },
                  ],
                },
              },
            ],
            defaultValue: {
              type: "staticValue",
              staticValue: {
                type: "string",
                string: "default_fizz",
              },
            },
            displayName: "fizz_display",
            description: "fizz_description",
            renderHint: {
              type: "textArea",
              textArea: {},
            },
          },
        },
        excludedProperties: ["buzz"],
        defaultFormat: "TABLE",
        enableLayoutSwitch: true,
        submissionMetadata: {
          successMessage: "Custom success message",
          undoButtonConfiguration: true,
          submitButtonDisplayMetadata: {
            intent: "DANGER",
            text: "Custom button",
          },
        },
        tableConfiguration: {
          columnWidthByParameterRid: {},
          enableFileImport: false,
          fitHorizontally: true,
          frozenColumnCount: 1,
          rowHeightInLines: 10,
        },
      });

      const modifyObjectActionType = defineModifyObjectAction({
        objectType: exampleObjectType,
        actionLevelValidation: [
          {
            condition: {
              type: "group",
              name: "actionLevelGroup",
            },
          },
          {
            condition: {
              type: "group",
              name: "actionLevelGroup2",
            },
            displayMetadata: {
              failureMessage: "Different custom failure message",
              typeClasses: [],
            },
          },
        ],
        parameterOrdering: ["bar", "fizz"],
        parameterConfiguration: {
          fizz: {
            required: false,
            conditionalOverrides: [
              {
                type: "required",
                condition: {
                  type: "and",
                  conditions: [
                    {
                      type: "group",
                      name: "parameterLevelGroup",
                    },
                    {
                      type: "parameter",
                      parameterId: "bar",
                      matches: {
                        type: "staticValue",
                        staticValue: {
                          type: "string",
                          string: "bar",
                        },
                      },
                    },
                  ],
                },
              },
            ],
            defaultValue: {
              type: "staticValue",
              staticValue: {
                type: "string",
                string: "default_fizz",
              },
            },
            displayName: "fizz_display",
            description: "fizz_description",
          },
        },
        excludedProperties: ["buzz"],
        defaultFormat: "TABLE",
        enableLayoutSwitch: true,
        submissionMetadata: {
          successMessage: "Custom success message",
          undoButtonConfiguration: true,
          submitButtonDisplayMetadata: {
            intent: "DANGER",
            text: "Custom button",
          },
        },
        tableConfiguration: {
          columnWidthByParameterRid: {},
          enableFileImport: false,
          fitHorizontally: true,
          frozenColumnCount: 1,
          rowHeightInLines: 10,
        },
      });

      const createOrModifyObjectActionType = defineCreateOrModifyObjectAction({
        objectType: exampleObjectType,
        actionLevelValidation: [
          {
            condition: {
              type: "group",
              name: "actionLevelGroup",
            },
          },
          {
            condition: {
              type: "group",
              name: "actionLevelGroup2",
            },
            displayMetadata: {
              failureMessage: "Different custom failure message",
              typeClasses: [],
            },
          },
        ],
        parameterOrdering: ["bar", "fizz"],
        parameterConfiguration: {
          fizz: {
            required: false,
            conditionalOverrides: [
              {
                type: "required",
                condition: {
                  type: "and",
                  conditions: [
                    {
                      type: "group",
                      name: "parameterLevelGroup",
                    },
                    {
                      type: "parameter",
                      parameterId: "bar",
                      matches: {
                        type: "staticValue",
                        staticValue: {
                          type: "string",
                          string: "bar",
                        },
                      },
                    },
                  ],
                },
              },
            ],
            defaultValue: {
              type: "staticValue",
              staticValue: {
                type: "string",
                string: "default_fizz",
              },
            },
            displayName: "fizz_display",
            description: "fizz_description",
          },
        },
        excludedProperties: ["buzz"],
        defaultFormat: "TABLE",
        enableLayoutSwitch: true,
        submissionMetadata: {
          successMessage: "Custom success message",
          undoButtonConfiguration: true,
          submitButtonDisplayMetadata: {
            intent: "DANGER",
            text: "Custom button",
          },
        },
        tableConfiguration: {
          columnWidthByParameterRid: {},
          enableFileImport: false,
          fitHorizontally: true,
          frozenColumnCount: 1,
          rowHeightInLines: 10,
        },
        primaryKeyOption: "userInput",
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Non-parameter mapped properties are properly defined", () => {
      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: {
          bar: { type: "string" },
          fizz: { type: "string" },
          buzz: { type: "timestamp" },
        },
      });

      const createObjectActionType = defineCreateObjectAction({
        objectType: exampleObjectType,
        nonParameterMappings: {
          fizz: {
            type: "currentUser",
          },
          buzz: {
            type: "currentTime",
          },
        },
      });
      const modifyObjectActionType = defineModifyObjectAction({
        objectType: exampleObjectType,
        nonParameterMappings: {
          fizz: {
            type: "currentUser",
          },
          buzz: {
            type: "currentTime",
          },
        },
      });
      const createOrModifyObjectActionType = defineCreateOrModifyObjectAction({
        objectType: exampleObjectType,
        nonParameterMappings: {
          fizz: {
            type: "currentUser",
          },
          buzz: {
            type: "currentTime",
          },
        },
      });

      const property1 = defineSharedPropertyType({
        apiName: "property1",
        type: "string",
      });
      const property2 = defineSharedPropertyType({
        apiName: "property2",
        type: "string",
      });
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        properties: {
          property1,
          property2,
        },
      });
      const createInterfaceObjectAction = defineCreateInterfaceObjectAction({
        interfaceType: exampleInterface,
        nonParameterMappings: {
          [property1.apiName]: {
            type: "currentUser",
          },
          [property2.apiName]: {
            type: "currentTime",
          },
        },
      });
      const modifyInterfaceObjectAction = defineModifyInterfaceObjectAction({
        interfaceType: exampleInterface,
        nonParameterMappings: {
          [property1.apiName]: {
            type: "currentUser",
          },
          [property2.apiName]: {
            type: "currentTime",
          },
        },
      });
      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Parameter configuration, property mapping, and excluded property validations work", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: {
          name: { type: "string" },
          id: { type: "string" },
        },
      });
      expect(() => {
        const createAction = defineCreateObjectAction({
          objectType: sampleObject,
          parameterConfiguration: {
            name: {
              displayName: "Name",
            },
            custom_parameter: {
              displayName: "My Custom Param",
            },
          },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Parameter custom_parameter does not exist as a property on com.palantir.sampleObject and its type is not explicitly defined]`,
      );
      expect(() => {
        const createAction = defineCreateObjectAction({
          objectType: sampleObject,
          nonParameterMappings: {
            custom_parameter: {
              type: "staticValue",
              staticValue: {
                type: "string",
                string: "custom_value",
              },
            },
          },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Property custom_parameter does not exist as a property on com.palantir.sampleObject]`,
      );
      expect(() => {
        const createAction = defineCreateObjectAction({
          objectType: sampleObject,
          excludedProperties: ["custom_parameter"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Property custom_parameter does not exist as a property on com.palantir.sampleObject]`,
      );
      expect(() => {
        const createAction = defineCreateObjectAction({
          objectType: sampleObject,
          actionLevelValidation: [
            {
              condition: {
                type: "or",
                conditions: [
                  {
                    type: "parameter",
                    parameterId: "non_existent_parameter",
                    matches: {
                      type: "staticValue",
                      staticValue: {
                        type: "string",
                        string: "value",
                      },
                    },
                  },
                ],
              },
            },
          ],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter condition references unknown parameter non_existent_parameter]`,
      );
    });

    it("Static default action parameters must match type", () => {
      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "primary",
        properties: {
          bar: { type: "string" },
          fizz: { type: "string" },
          buzz: { type: "string" },
          primary: { type: "string" },
        },
      });
      expect(() =>
        defineCreateObjectAction({
          objectType: exampleObjectType,
          parameterConfiguration: {
            buzz: {
              defaultValue: {
                type: "staticValue",
                staticValue: {
                  type: "boolean",
                  boolean: true,
                },
              },
            },
          },
        }),
      ).toThrowError(
        "Invariant failed: Default static value for parameter buzz does not match type",
      );
    });

    it("ModifyObjectRule requires objectToModify parameter", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: {
          name: {
            type: "string",
            description: "The name of the test object",
          },
          id: { type: "string", description: "The ID of the test object" },
        },
      });
      expect(() =>
        defineAction({
          apiName: "foo",
          displayName: "exampleAction",
          status: "active",
          rules: [
            {
              type: "modifyObjectRule",
              modifyObjectRule: {
                objectToModify: "sampleObject",
                propertyValues: {
                  name: {
                    type: "parameterId",
                    parameterId: "name",
                  },
                },
                structFieldValues: {},
              },
            },
          ],
          parameters: [
            {
              id: "name",
              displayName: "Name",
              type: "string",
              validation: { required: true, allowedValues: { type: "text" } },
            },
          ],
        }),
      ).toThrowError(
        "Invariant failed: Object to modify parameter must be defined in parameters",
      );
    });

    it("Target object parameters are configurable", () => {
      const employeeObject = defineObject({
        apiName: "employee",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: {
          id: { type: "string", displayName: "ID", description: "dummy" },
          managedBy: { type: "string" },
        },
      });
      defineModifyObjectAction({
        objectType: employeeObject,
        parameterConfiguration: {
          [MODIFY_OBJECT_PARAMETER]: {
            displayName: "Chose a manager to modify",
            description: "Description",
            conditionalOverrides: [
              {
                type: "visibility",
                condition: {
                  type: "group",
                  name: "supervisors",
                },
              },
            ],
          },
        },
      });
      defineCreateOrModifyObjectAction({
        objectType: employeeObject,
        parameterConfiguration: {
          [CREATE_OR_MODIFY_OBJECT_PARAMETER]: {
            displayName: "Chose a manager to modify or create a new one",
            description: "Description",
            conditionalOverrides: [
              {
                type: "visibility",
                condition: {
                  type: "group",
                  name: "supervisors",
                },
              },
            ],
          },
        },
      });
      defineDeleteObjectAction({
        objectType: employeeObject,
        parameterConfiguration: {
          [DELETE_OBJECT_PARAMETER]: {
            displayName: "Chose managers to delete",
            description: "Description",
            required: {
              listLength: {
                min: 1,
                max: 5,
              },
            },
          },
        },
      });

      const property1 = defineSharedPropertyType({
        apiName: "property1",
        type: "string",
      });
      const exampleInterface = defineInterface({
        apiName: "exampleInterface",
        properties: {
          property1,
        },
      });
      defineCreateInterfaceObjectAction({
        interfaceType: exampleInterface,
        parameterConfiguration: {
          [CREATE_INTERFACE_OBJECT_PARAMETER]: {
            displayName: "Choose an object to create",
            description: "Description",
            conditionalOverrides: [
              {
                type: "visibility",
                condition: {
                  type: "group",
                  name: "supervisors",
                },
              },
            ],
          },
        },
      });
      defineModifyInterfaceObjectAction({
        interfaceType: exampleInterface,
        parameterConfiguration: {
          [MODIFY_INTERFACE_OBJECT_PARAMETER]: {
            displayName: "Choose an object to modify",
            description: "Description",
            conditionalOverrides: [
              {
                type: "visibility",
                condition: {
                  type: "group",
                  name: "supervisors",
                },
              },
            ],
          },
        },
      });
      defineDeleteInterfaceObjectAction({
        interfaceType: exampleInterface,
        parameterConfiguration: {
          [DELETE_OBJECT_PARAMETER]: {
            displayName: "Chose managers to delete",
            description: "Description",
            conditionalOverrides: [
              {
                type: "visibility",
                condition: {
                  type: "group",
                  name: "supervisors",
                },
              },
            ],
          },
        },
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Conditional overrides on actions are properly defined", () => {
      const exampleAction = defineAction({
        apiName: "foo",
        displayName: "exampleAction",
        status: "active",
        rules: [
          {
            type: "modifyObjectRule",
            modifyObjectRule: {
              objectToModify: "objectToModifyParameter",
              propertyValues: {
                bar: {
                  type: "parameterId",
                  parameterId: "param1",
                },
              },
              structFieldValues: {},
            },
          },
        ],
        parameters: [
          {
            id: "param1",
            displayName: "param1",
            type: "boolean",
            validation: {
              required: true,
              allowedValues: { type: "boolean" },
              defaultVisibility: "editable",
              conditionalOverrides: [
                {
                  type: "visibility",
                  condition: {
                    type: "group",
                    name: "myGroup",
                  },
                },
              ],
            },
          },
          {
            id: "objectToModifyParameter",
            displayName: "objectToModifyParameter",
            type: "objectTypeReference",
            validation: {
              required: true,
              allowedValues: {
                type: "objectTypeReference",
                interfaceTypes: [],
              },
              defaultVisibility: "editable",
            },
          },
        ],
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("OAC defined object references as parameters are properly defined", () => {
      // This test defines an action that creates an OAC-defined employee object type and also adds an additional parameter
      // for an objectReference to a manager object type that is also defined in OAC. The action shows how you can use this
      // objectReference parameter elsewhere in the action - in this case we are prefilling the managedBy property to be the
      // id of the selected manager object type.
      const employeeObject = defineObject({
        apiName: "employee",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: {
          id: { type: "string", displayName: "ID", description: "dummy" },
          managedBy: { type: "string" },
        },
      });

      const managerObject = defineObject({
        apiName: "manager",
        displayName: "Manager",
        pluralDisplayName: "Managers",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: {
          id: { type: "string", displayName: "ID", description: "dummy" },
        },
        editsEnabled: true,
      });

      defineCreateObjectAction({
        objectType: employeeObject,
        parameterOrdering: ["myManager", "id", "managedBy"],
        parameterConfiguration: {
          myManager: {
            customParameterType: {
              type: "objectReference",
              objectReference: {
                objectTypeId: managerObject.apiName,
              },
            },
          },
          managedBy: {
            defaultValue: {
              type: "objectParameterPropertyValue",
              objectParameterPropertyValue: {
                parameterId: "myManager",
                propertyTypeId: "id",
              },
            },
          },
        },
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Actions with group permissions are properly defined", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: {
          name: {
            type: "string",
            description: "The name of the test object",
          },
          id: {
            type: "string",
            displayName: "ID",
            description: "The ID of the test object",
          },
        },
      });
      const createAction = defineCreateObjectAction({
        objectType: sampleObject,
        actionLevelValidation: [
          {
            condition: {
              type: "group",
              name: "testGroup",
            },
          },
        ],
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Actions with custom permissions are properly defined", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: {
          name: {
            type: "string",
            description: "The name of the test object",
          },
          id: {
            type: "string",
            displayName: "ID",
            description: "The ID of the test object",
          },
        },
      });
      const createAction = defineCreateObjectAction({
        objectType: sampleObject,
        actionLevelValidation: [
          {
            displayMetadata: {
              failureMessage:
                "Insufficient permissions. Missing organization membership required to submit action",
              typeClasses: [],
            },
            condition: {
              type: "comparison",
              comparison: {
                operator: "INTERSECTS",
                left: {
                  type: "userProperty",
                  userProperty: {
                    userId: {
                      type: "currentUser",
                      currentUser: {},
                    },
                    propertyValue: {
                      type: "organizationMarkingIds",
                      organizationMarkingIds: {},
                    },
                  },
                },
                right: {
                  type: "staticValue",
                  staticValue: {
                    type: "stringList",
                    stringList: {
                      strings: ["87ef507e-f954-457e-ad68-e0df71ef7567"],
                    },
                  },
                },
              },
            },
          },
        ],
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Array property validation is correctly structured for actions", () => {
      const objectWithArrays = defineObject({
        apiName: "objectWithArrays",
        displayName: "Object With Arrays",
        primaryKeyPropertyApiName: "id",
        titlePropertyApiName: "id",
        pluralDisplayName: "Objects With Arrays",
        properties: {
          id: { type: "string", displayName: "ID" },
          tags: { type: "string", array: true, displayName: "Tags" },
          numbers: { type: "integer", array: true, displayName: "Numbers" },
          singleValue: { type: "string", displayName: "Single Value" },
        },
      });

      const createAction = defineCreateObjectAction({
        objectType: objectWithArrays,
      });
      const modifyAction = defineModifyObjectAction({
        objectType: objectWithArrays,
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Action sections are properly defined", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: {
          name: { type: "string" },
          id: { type: "string" },
        },
      });
      const createAction = defineCreateObjectAction({
        objectType: sampleObject,
        sections: [
          {
            id: "section1",
            displayName: "Section 1",
            parameters: ["id"],
            description: "Description for Section 1",
            conditionalOverrides: [
              {
                type: "visibility",
                condition: {
                  type: "group",
                  name: "testGroup",
                },
              },
            ],
          },
        ],
      });
      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Action section parameters must exist", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: {
          name: { type: "string" },
          id: { type: "string" },
        },
      });
      expect(() => {
        const createAction = defineCreateObjectAction({
          objectType: sampleObject,
          sections: [
            {
              id: "section1",
              displayName: "Section 1",
              parameters: ["foo"],
            },
          ],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Parameters ["foo"] were referenced but not defined]`,
      );
    });

    it("Custom parameter ordering is properly defined", () => {
      const sampleObject = defineObject({
        apiName: "sampleObject",
        displayName: "Test Object",
        description: "Sample object description",
        primaryKeyPropertyApiName: "id",
        pluralDisplayName: "tests",
        titlePropertyApiName: "name",
        properties: {
          name: { type: "string" },
          id: { type: "string" },
          foo: { type: "string" },
        },
      });
      expect(() => {
        const createBadAction = defineCreateObjectAction({
          objectType: sampleObject,
          parameterOrdering: ["foo", "id"],
          excludedProperties: ["id"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter ordering for create-object-sample-object does not match expected parameters. Extraneous parameters in ordering: {id}, Missing parameters in ordering: {name}]`,
      );
      expect(() => {
        const createBadAction = defineModifyObjectAction({
          objectType: sampleObject,
          // primary keys should not be in modify action orderings
          parameterOrdering: ["foo", "id"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter ordering for modify-object-sample-object does not match expected parameters. Extraneous parameters in ordering: {id}, Missing parameters in ordering: {name}]`,
      );
      expect(() => {
        const createBadAction = defineCreateOrModifyObjectAction({
          objectType: sampleObject,
          // primary keys should not be in create-or-modify action orderings
          parameterOrdering: ["foo", "id"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter ordering for create-or-modify-sample-object does not match expected parameters. Extraneous parameters in ordering: {id}, Missing parameters in ordering: {name}]`,
      );
      expect(() => {
        const createBadAction = defineCreateObjectAction({
          objectType: sampleObject,
          nonParameterMappings: {
            foo: {
              type: "currentUser",
            },
          },
          // non-parameter mapped properties should not be in action orderings
          parameterOrdering: ["foo", "id"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter ordering for create-object-sample-object does not match expected parameters. Extraneous parameters in ordering: {foo}, Missing parameters in ordering: {name}]`,
      );
      expect(() => {
        const createBadAction = defineModifyObjectAction({
          objectType: sampleObject,
          nonParameterMappings: {
            foo: {
              type: "currentUser",
            },
          },
          // non-parameter mapped properties should not be in action orderings
          parameterOrdering: ["foo", "id"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter ordering for modify-object-sample-object does not match expected parameters. Extraneous parameters in ordering: {foo,id}, Missing parameters in ordering: {name}]`,
      );
      expect(() => {
        const createBadAction = defineCreateOrModifyObjectAction({
          objectType: sampleObject,
          nonParameterMappings: {
            foo: {
              type: "currentUser",
            },
          },
          // non-parameter mapped properties should not be in action orderings
          parameterOrdering: ["foo", "id"],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action parameter ordering for create-or-modify-sample-object does not match expected parameters. Extraneous parameters in ordering: {foo,id}, Missing parameters in ordering: {name}]`,
      );
      const createAction = defineCreateObjectAction({
        objectType: sampleObject,
        parameterOrdering: ["foo", "name", "id"],
        parameterConfiguration: {
          name: {
            conditionalOverrides: [
              {
                type: "visibility",
                condition: {
                  type: "parameter",
                  parameterId: "foo",
                  matches: {
                    type: "staticValue",
                    staticValue: {
                      type: "string",
                      string: "foo",
                    },
                  },
                },
              },
            ],
          },
        },
      });
      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });

    it("Group and user parameters are properly defined", () => {
      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: {
          bar: { type: "string" },
          fizz: { type: "string" },
          buzz: { type: "string" },
          fizzbuzz: { type: "string" },
        },
      });

      const createObjectActionType = defineCreateObjectAction({
        objectType: exampleObjectType,
        parameterConfiguration: {
          bar: {
            allowedValues: {
              type: "multipassGroup",
            },
          },
          fizz: {
            allowedValues: {
              type: "user",
              fromGroups: [
                {
                  type: "parameter",
                  parameter: "bar",
                },
              ],
            },
          },
          buzz: {
            allowedValues: {
              type: "user",
            },
          },
          fizzbuzz: {
            allowedValues: {
              type: "user",
              fromGroups: [
                {
                  type: "static",
                  name: "inputGroup",
                },
              ],
            },
          },
        },
      });
      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });
  });

  it("Interface link actions are properly defined", () => {
    const personInterface = defineInterface({
      apiName: "person",
      displayName: "Person",
      properties: {},
    });
    const companyInterface = defineInterface({
      apiName: "company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employer",
      from: personInterface,
      toOne: companyInterface,
    });

    defineAction({
      apiName: "link-person-to-company",
      displayName: "Link person to company",
      status: "active",
      rules: [
        {
          type: "addInterfaceLinkRuleV2",
          addInterfaceLinkRuleV2: {
            interfaceTypeRid: "person",
            interfaceLinkTypeRid: "employer",
            sourceObjects: [
              {
                type: "existingObject",
                existingObject: "sourceParam",
              },
            ],
            targetObjects: [
              {
                type: "existingObject",
                existingObject: "targetParam",
              },
            ],
          },
        },
      ],
      parameters: [
        {
          id: "sourceParam",
          displayName: "Source",
          type: {
            type: "interfaceReference",
            interfaceReference: { interfaceTypeRid: "com.palantir.person" },
          },
          validation: {
            required: true,
            allowedValues: { type: "interfaceObjectQuery" },
          },
        },
        {
          id: "targetParam",
          displayName: "Target",
          type: {
            type: "interfaceReference",
            interfaceReference: { interfaceTypeRid: "com.palantir.company" },
          },
          validation: {
            required: true,
            allowedValues: { type: "interfaceObjectQuery" },
          },
        },
      ],
    });

    const dumped = dumpOntologyFullMetadata();
    const rule =
      dumped.ontology.actionTypes["com.palantir.link-person-to-company"]
        .actionType.actionTypeLogic.logic.rules[0];
    expect(rule).toMatchSnapshot();
  });

  it("Interface link action referencing an undefined parameter throws", () => {
    const personInterface = defineInterface({
      apiName: "person",
      displayName: "Person",
      properties: {},
    });
    const companyInterface = defineInterface({
      apiName: "company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employer",
      from: personInterface,
      toOne: companyInterface,
    });

    expect(() =>
      defineAction({
        apiName: "link-person-to-company",
        displayName: "Link person to company",
        status: "active",
        rules: [
          {
            type: "addInterfaceLinkRuleV2",
            addInterfaceLinkRuleV2: {
              interfaceTypeRid: "person",
              interfaceLinkTypeRid: "employer",
              sourceObjects: [
                {
                  type: "existingObject",
                  existingObject: "sourceParam",
                },
              ],
              targetObjects: [
                {
                  type: "existingObject",
                  existingObject: "missingTargetParam",
                },
              ],
            },
          },
        ],
        parameters: [
          {
            id: "sourceParam",
            displayName: "Source",
            type: {
              type: "interfaceReference",
              interfaceReference: { interfaceTypeRid: "com.palantir.person" },
            },
            validation: {
              required: true,
              allowedValues: { type: "interfaceObjectQuery" },
            },
          },
        ],
      }),
    ).toThrow(/referenced but not defined/u);
  });

  it("Interface link action with unknown ILC throws", () => {
    const personInterface = defineInterface({
      apiName: "person",
      displayName: "Person",
      properties: {},
    });
    defineInterface({
      apiName: "company",
      displayName: "Company",
      properties: {},
    });
    // NOTE: no defineInterfaceLinkConstraint — the ILC "employer" does not exist
    void personInterface;

    expect(() =>
      defineAction({
        apiName: "link-person-to-company",
        displayName: "Link person to company",
        status: "active",
        rules: [
          {
            type: "addInterfaceLinkRuleV2",
            addInterfaceLinkRuleV2: {
              interfaceTypeRid: "person",
              interfaceLinkTypeRid: "employer",
              sourceObjects: [
                {
                  type: "existingObject",
                  existingObject: "sourceParam",
                },
              ],
              targetObjects: [
                {
                  type: "existingObject",
                  existingObject: "targetParam",
                },
              ],
            },
          },
        ],
        parameters: [
          {
            id: "sourceParam",
            displayName: "Source",
            type: {
              type: "interfaceReference",
              interfaceReference: { interfaceTypeRid: "com.palantir.person" },
            },
            validation: {
              required: true,
              allowedValues: { type: "interfaceObjectQuery" },
            },
          },
          {
            id: "targetParam",
            displayName: "Target",
            type: {
              type: "interfaceReference",
              interfaceReference: { interfaceTypeRid: "com.palantir.company" },
            },
            validation: {
              required: true,
              allowedValues: { type: "interfaceObjectQuery" },
            },
          },
        ],
      }),
    ).toThrow(/Interface link type .* does not exist on interface/u);
  });

  it("serializes publicProject permission on action type", async () => {
    await defineOntology(
      "com.palantir.",
      () => {
        const obj = defineObject({
          apiName: "bar",
          displayName: "Bar",
          pluralDisplayName: "Bars",
          primaryKeyPropertyApiName: "id",
          titlePropertyApiName: "id",
          properties: { id: { type: "string" } },
        });

        defineCreateObjectAction({
          objectType: obj,
          permission: "publicProject",
        });

        const bpi =
          dumpOntologyFullMetadata().ontology.blockPermissionInformation!;
        const atPerms = Object.values(bpi.actionTypes);
        expect(atPerms).toHaveLength(1);
        expect(atPerms[0].restrictionStatus).toEqual({
          hasRolesApplied: true,
          publicProject: true,
          ontologyPackageRid: null,
        });
      },
      undefined,
    );
  });
});
