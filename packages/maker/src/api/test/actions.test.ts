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
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });
  it("Concrete actions are properly defined", () => {
    const exampleAction = defineAction({
      apiName: "foo",
      displayName: "exampleAction",
      status: "active",
      rules: [{
        type: "addOrModifyObjectRuleV2",
        addOrModifyObjectRuleV2: {
          objectToModify: "objectToModifyParameter",
          propertyValues: {
            "bar": {
              type: "parameterId",
              parameterId: "param1",
            },
          },
          structFieldValues: {},
        },
      }],
      parameters: [{
        id: "param1",
        displayName: "param1",
        type: "boolean",
        validation: { required: true, allowedValues: { type: "boolean" } },
      }],
    });

    expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
          {
            "importedOntology": {
              "actionTypes": {},
              "blockPermissionInformation": {
                "actionTypes": {},
                "linkTypes": {},
                "objectTypes": {},
              },
              "interfaceTypes": {},
              "linkTypes": {},
              "objectTypes": {},
              "sharedPropertyTypes": {},
            },
            "importedValueTypes": {
              "valueTypes": [],
            },
            "ontology": {
              "actionTypes": {
                "com.palantir.foo": {
                  "actionType": {
                    "actionTypeLogic": {
                      "logic": {
                        "rules": [
                          {
                            "addOrModifyObjectRuleV2": {
                              "objectToModify": "objectToModifyParameter",
                              "propertyValues": {
                                "bar": {
                                  "parameterId": "param1",
                                  "type": "parameterId",
                                },
                              },
                              "structFieldValues": {},
                            },
                            "type": "addOrModifyObjectRuleV2",
                          },
                        ],
                      },
                      "validation": {
                        "actionTypeLevelValidation": {
                          "rules": {
                            "0": {
                              "condition": {
                                "true": {},
                                "type": "true",
                              },
                              "displayMetadata": {
                                "failureMessage": "",
                                "typeClasses": [],
                              },
                            },
                          },
                        },
                        "parameterValidations": {
                          "param1": {
                            "conditionalOverrides": [],
                            "defaultValidation": {
                              "display": {
                                "renderHint": {
                                  "checkbox": {},
                                  "type": "checkbox",
                                },
                                "visibility": {
                                  "editable": {},
                                  "type": "editable",
                                },
                              },
                              "validation": {
                                "allowedValues": {
                                  "boolean": {
                                    "boolean": {},
                                    "type": "boolean",
                                  },
                                  "type": "boolean",
                                },
                                "required": {
                                  "required": {},
                                  "type": "required",
                                },
                              },
                            },
                          },
                        },
                        "sectionValidations": {},
                      },
                    },
                    "metadata": {
                      "apiName": "com.palantir.foo",
                      "displayMetadata": {
                        "configuration": {
                          "defaultLayout": "FORM",
                          "displayAndFormat": {
                            "table": {
                              "columnWidthByParameterRid": {},
                              "enableFileImport": true,
                              "fitHorizontally": false,
                              "frozenColumnCount": 0,
                              "rowHeightInLines": 1,
                            },
                          },
                          "enableLayoutUserSwitch": false,
                        },
                        "description": "",
                        "displayName": "exampleAction",
                        "icon": {
                          "blueprint": {
                            "color": "#000000",
                            "locator": "edit",
                          },
                          "type": "blueprint",
                        },
                        "successMessage": [],
                        "typeClasses": [],
                      },
                      "entities": {
                        "affectedInterfaceTypes": [],
                        "affectedLinkTypes": [],
                        "affectedObjectTypes": [],
                        "typeGroups": [],
                      },
                      "formContentOrdering": [],
                      "parameterOrdering": [
                        "param1",
                      ],
                      "parameters": {
                        "param1": {
                          "displayMetadata": {
                            "description": "",
                            "displayName": "param1",
                            "typeClasses": [],
                          },
                          "id": "param1",
                          "type": {
                            "boolean": {},
                            "type": "boolean",
                          },
                        },
                      },
                      "sections": {},
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                    },
                  },
                },
              },
              "blockPermissionInformation": {
                "actionTypes": {},
                "linkTypes": {},
                "objectTypes": {},
              },
              "interfaceTypes": {},
              "linkTypes": {},
              "objectTypes": {},
              "sharedPropertyTypes": {},
            },
            "randomnessKey": undefined,
            "valueTypes": {
              "valueTypes": [],
            },
          }
        `);
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
        rules: [{
          type: "addInterfaceRule",
          addInterfaceRule: {
            interfaceApiName: "foo",
            objectTypeParameter: "param1",
            sharedPropertyValues: {},
            interfacePropertyValues: {},
          },
        }],
        parameters: [{
          id: "param1",
          displayName: "param1",
          type: "boolean",
          validation: { required: true, allowedValues: { type: "boolean" } },
        }],
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addInterfaceRule": {
                            "interfaceApiName": "com.palantir.foo",
                            "interfacePropertyValues": {},
                            "objectTypeParameter": "param1",
                            "sharedPropertyValues": {},
                          },
                          "type": "addInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "param1": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "checkbox": {},
                                "type": "checkbox",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "boolean": {
                                  "boolean": {},
                                  "type": "boolean",
                                },
                                "type": "boolean",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "exampleAction",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "param1",
                    ],
                    "parameters": {
                      "param1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "param1",
                          "typeClasses": [],
                        },
                        "id": "param1",
                        "type": {
                          "boolean": {},
                          "type": "boolean",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.foo": {
                "interfaceType": {
                  "apiName": "com.palantir.foo",
                  "displayMetadata": {
                    "description": "foo",
                    "displayName": "foo",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {},
                  "propertiesV3": {},
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
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
          "bar": { type: "string" },
          "property1": { type: "string" },
          "property2": {
            type: {
              type: "struct",
              structDefinition: { simpleProperty: "string" },
            },
          },
        },
        implementsInterfaces: [{
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
        }],
      });

      const createActionWithObjectType = defineCreateInterfaceObjectAction({
        interfaceType: exampleInterface,
        objectType: exampleObjectType,
      });

      const modifyAction = defineModifyInterfaceObjectAction({
        interfaceType: exampleInterface,
        objectType: exampleObjectType,
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-example-interface-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfacePropertyValues": {
                              "com.palantir.mySpt": {
                                "logicRuleValue": {
                                  "parameterId": "com.palantir.mySpt",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                              "com.palantir.property1": {
                                "logicRuleValue": {
                                  "parameterId": "property1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "objectTypeParameter": "objectTypeParameter",
                            "sharedPropertyValues": {
                              "com.palantir.mySpt": {
                                "parameterId": "com.palantir.mySpt",
                                "type": "parameterId",
                              },
                            },
                          },
                          "type": "addInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "com.palantir.mySpt": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "objectTypeParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "oneOf": {
                                  "oneOf": {
                                    "labelledValues": [
                                      {
                                        "label": "exampleObjectType",
                                        "value": {
                                          "objectType": {
                                            "objectTypeId": "com.palantir.foo",
                                          },
                                          "type": "objectType",
                                        },
                                      },
                                    ],
                                    "otherValueAllowed": {
                                      "allowed": false,
                                    },
                                  },
                                  "type": "oneOf",
                                },
                                "type": "oneOf",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "property1": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-example-interface-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectTypeParameter",
                      "com.palantir.mySpt",
                      "property1",
                    ],
                    "parameters": {
                      "com.palantir.mySpt": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "mySpt",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.mySpt",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectTypeParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to create",
                          "typeClasses": [],
                        },
                        "id": "objectTypeParameter",
                        "type": {
                          "objectTypeReference": {
                            "interfaceTypeRids": [
                              "com.palantir.exampleInterface",
                            ],
                          },
                          "type": "objectTypeReference",
                        },
                      },
                      "property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Property1",
                          "typeClasses": [],
                        },
                        "id": "property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.modify-example-interface-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfaceObjectToModifyParameter": "interfaceObjectToModifyParameter",
                            "interfacePropertyValues": {
                              "com.palantir.mySpt": {
                                "logicRuleValue": {
                                  "parameterId": "com.palantir.mySpt",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                              "com.palantir.property1": {
                                "logicRuleValue": {
                                  "parameterId": "property1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "sharedPropertyValues": {
                              "com.palantir.mySpt": {
                                "parameterId": "com.palantir.mySpt",
                                "type": "parameterId",
                              },
                            },
                          },
                          "type": "modifyInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "com.palantir.mySpt": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "interfaceObjectToModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "oneOf": {
                                  "oneOf": {
                                    "labelledValues": [
                                      {
                                        "label": "exampleObjectType",
                                        "value": {
                                          "objectType": {
                                            "objectTypeId": "com.palantir.foo",
                                          },
                                          "type": "objectType",
                                        },
                                      },
                                    ],
                                    "otherValueAllowed": {
                                      "allowed": false,
                                    },
                                  },
                                  "type": "oneOf",
                                },
                                "type": "oneOf",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "property1": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-example-interface-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Modify exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "interfaceObjectToModifyParameter",
                      "com.palantir.mySpt",
                      "property1",
                    ],
                    "parameters": {
                      "com.palantir.mySpt": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "mySpt",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.mySpt",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "interfaceObjectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to modify",
                          "typeClasses": [],
                        },
                        "id": "interfaceObjectToModifyParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.exampleInterface",
                          },
                          "type": "interfaceReference",
                        },
                      },
                      "property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Property1",
                          "typeClasses": [],
                        },
                        "id": "property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.exampleInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#c7cdd6ff",
                        "locator": "globe",
                      },
                      "type": "blueprint",
                    },
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.mySpt": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.mySpt",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "mySpt",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                        "typeClasses": [
                          {
                            "kind": "render_hint",
                            "name": "SELECTABLE",
                          },
                          {
                            "kind": "render_hint",
                            "name": "SORTABLE",
                          },
                        ],
                        "valueType": undefined,
                      },
                    },
                    "com.palantir.property2": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.property2",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property2",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
                        "type": {
                          "struct": {
                            "mainValue": undefined,
                            "structFields": [
                              {
                                "aliases": [],
                                "apiName": "simpleProperty",
                                "displayMetadata": {
                                  "description": undefined,
                                  "displayName": "simpleProperty",
                                },
                                "fieldType": {
                                  "string": {
                                    "analyzerOverride": undefined,
                                    "enableAsciiFolding": undefined,
                                    "isLongText": false,
                                    "supportsEfficientLeadingWildcard": false,
                                    "supportsExactMatching": true,
                                  },
                                  "type": "string",
                                },
                                "typeClasses": [],
                              },
                            ],
                          },
                          "type": "struct",
                        },
                        "typeClasses": [],
                        "valueType": undefined,
                      },
                    },
                  },
                  "propertiesV3": {
                    "com.palantir.mySpt": {
                      "sharedPropertyBasedPropertyType": {
                        "requireImplementation": true,
                        "sharedPropertyType": {
                          "aliases": [],
                          "apiName": "com.palantir.mySpt",
                          "baseFormatter": undefined,
                          "dataConstraints": undefined,
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "mySpt",
                            "visibility": "NORMAL",
                          },
                          "gothamMapping": undefined,
                          "indexedForSearch": true,
                          "type": {
                            "string": {
                              "analyzerOverride": undefined,
                              "enableAsciiFolding": undefined,
                              "isLongText": false,
                              "supportsEfficientLeadingWildcard": false,
                              "supportsExactMatching": true,
                            },
                            "type": "string",
                          },
                          "typeClasses": [
                            {
                              "kind": "render_hint",
                              "name": "SELECTABLE",
                            },
                            {
                              "kind": "render_hint",
                              "name": "SORTABLE",
                            },
                          ],
                          "valueType": undefined,
                        },
                      },
                      "type": "sharedPropertyBasedPropertyType",
                    },
                    "com.palantir.property2": {
                      "sharedPropertyBasedPropertyType": {
                        "requireImplementation": true,
                        "sharedPropertyType": {
                          "aliases": [],
                          "apiName": "com.palantir.property2",
                          "baseFormatter": undefined,
                          "dataConstraints": undefined,
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "property2",
                            "visibility": "NORMAL",
                          },
                          "gothamMapping": undefined,
                          "indexedForSearch": true,
                          "type": {
                            "struct": {
                              "mainValue": undefined,
                              "structFields": [
                                {
                                  "aliases": [],
                                  "apiName": "simpleProperty",
                                  "displayMetadata": {
                                    "description": undefined,
                                    "displayName": "simpleProperty",
                                  },
                                  "fieldType": {
                                    "string": {
                                      "analyzerOverride": undefined,
                                      "enableAsciiFolding": undefined,
                                      "isLongText": false,
                                      "supportsEfficientLeadingWildcard": false,
                                      "supportsExactMatching": true,
                                    },
                                    "type": "string",
                                  },
                                  "typeClasses": [],
                                },
                              ],
                            },
                            "type": "struct",
                          },
                          "typeClasses": [],
                          "valueType": undefined,
                        },
                      },
                      "type": "sharedPropertyBasedPropertyType",
                    },
                    "property1": {
                      "interfaceDefinedPropertyType": {
                        "apiName": "property1",
                        "constraints": {
                          "dataConstraints": undefined,
                          "indexedForSearch": true,
                          "primaryKeyConstraint": "NO_RESTRICTION",
                          "requireImplementation": true,
                          "typeClasses": [],
                          "valueType": undefined,
                        },
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property1",
                          "visibility": "NORMAL",
                        },
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                      },
                      "type": "interfaceDefinedPropertyType",
                    },
                  },
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.foo": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.foo",
                        "propertyMapping": {
                          "bar": {
                            "column": "bar",
                            "type": "column",
                          },
                          "property1": {
                            "column": "property1",
                            "type": "column",
                          },
                          "property2": {
                            "struct": {
                              "column": "property2",
                              "mapping": {
                                "simpleProperty": {
                                  "apiName": "simpleProperty",
                                  "mappings": {},
                                },
                              },
                            },
                            "type": "struct",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.foo",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.foo",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "exampleObjectType",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "exampleObjectTypes",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [
                    {
                      "interfaceTypeApiName": "com.palantir.exampleInterface",
                      "linksV2": {},
                      "properties": {},
                      "propertiesV2": {
                        "com.palantir.mySpt": {
                          "propertyTypeRid": "bar",
                          "type": "propertyTypeRid",
                        },
                        "com.palantir.property2": {
                          "propertyTypeRid": "property2",
                          "type": "propertyTypeRid",
                        },
                        "property1": {
                          "propertyTypeRid": "property1",
                          "type": "propertyTypeRid",
                        },
                      },
                    },
                  ],
                  "primaryKeys": [
                    "bar",
                  ],
                  "propertyTypes": {
                    "bar": {
                      "apiName": "bar",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Bar",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "property1": {
                      "apiName": "property1",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Property1",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "property2": {
                      "apiName": "property2",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Property2",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "struct": {
                          "mainValue": undefined,
                          "structFields": [
                            {
                              "aliases": [],
                              "apiName": "simpleProperty",
                              "displayMetadata": {
                                "description": undefined,
                                "displayName": "simpleProperty",
                              },
                              "fieldType": {
                                "string": {
                                  "analyzerOverride": undefined,
                                  "enableAsciiFolding": undefined,
                                  "isLongText": false,
                                  "supportsEfficientLeadingWildcard": false,
                                  "supportsExactMatching": true,
                                },
                                "type": "string",
                              },
                              "typeClasses": [],
                            },
                          ],
                        },
                        "type": "struct",
                      },
                      "typeClasses": [],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "bar",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
            },
            "sharedPropertyTypes": {
              "com.palantir.mySpt": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.mySpt",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "mySpt",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
                  "type": {
                    "string": {
                      "analyzerOverride": undefined,
                      "enableAsciiFolding": undefined,
                      "isLongText": false,
                      "supportsEfficientLeadingWildcard": false,
                      "supportsExactMatching": true,
                    },
                    "type": "string",
                  },
                  "typeClasses": [
                    {
                      "kind": "render_hint",
                      "name": "SELECTABLE",
                    },
                    {
                      "kind": "render_hint",
                      "name": "SORTABLE",
                    },
                  ],
                  "valueType": undefined,
                },
              },
              "com.palantir.property2": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.property2",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "property2",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
                  "type": {
                    "struct": {
                      "mainValue": undefined,
                      "structFields": [
                        {
                          "aliases": [],
                          "apiName": "simpleProperty",
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "simpleProperty",
                          },
                          "fieldType": {
                            "string": {
                              "analyzerOverride": undefined,
                              "enableAsciiFolding": undefined,
                              "isLongText": false,
                              "supportsEfficientLeadingWildcard": false,
                              "supportsExactMatching": true,
                            },
                            "type": "string",
                          },
                          "typeClasses": [],
                        },
                      ],
                    },
                    "type": "struct",
                  },
                  "typeClasses": [],
                  "valueType": undefined,
                },
              },
            },
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
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

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-example-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfacePropertyValues": {
                              "com.palantir.spt1": {
                                "logicRuleValue": {
                                  "parameterId": "spt1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                              "com.palantir.spt2": {
                                "logicRuleValue": {
                                  "parameterId": "spt2",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "objectTypeParameter": "objectTypeParameter",
                            "sharedPropertyValues": {
                              "com.palantir.spt1": {
                                "parameterId": "spt1",
                                "type": "parameterId",
                              },
                              "com.palantir.spt2": {
                                "parameterId": "spt2",
                                "type": "parameterId",
                              },
                            },
                          },
                          "type": "addInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectTypeParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectTypeReference": {
                                  "objectTypeReference": {
                                    "interfaceTypeRids": [
                                      "com.palantir.exampleInterface",
                                    ],
                                  },
                                  "type": "objectTypeReference",
                                },
                                "type": "objectTypeReference",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "spt1": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "spt2": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-example-interface",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectTypeParameter",
                      "spt1",
                      "spt2",
                    ],
                    "parameters": {
                      "objectTypeParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to create",
                          "typeClasses": [],
                        },
                        "id": "objectTypeParameter",
                        "type": {
                          "objectTypeReference": {
                            "interfaceTypeRids": [
                              "com.palantir.exampleInterface",
                            ],
                          },
                          "type": "objectTypeReference",
                        },
                      },
                      "spt1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "spt",
                          "typeClasses": [],
                        },
                        "id": "spt1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "spt2": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "spt",
                          "typeClasses": [],
                        },
                        "id": "spt2",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.create-with-overrides": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfacePropertyValues": {
                              "com.palantir.spt1": {
                                "logicRuleValue": {
                                  "parameterId": "spt1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                              "com.palantir.spt2": {
                                "logicRuleValue": {
                                  "parameterId": "overridden",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "objectTypeParameter": "objectTypeParameter",
                            "sharedPropertyValues": {
                              "com.palantir.spt1": {
                                "parameterId": "spt1",
                                "type": "parameterId",
                              },
                              "com.palantir.spt2": {
                                "parameterId": "overridden",
                                "type": "parameterId",
                              },
                            },
                          },
                          "type": "addInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectTypeParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectTypeReference": {
                                  "objectTypeReference": {
                                    "interfaceTypeRids": [
                                      "com.palantir.exampleInterface",
                                    ],
                                  },
                                  "type": "objectTypeReference",
                                },
                                "type": "objectTypeReference",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "overridden": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "spt1": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "and": {
                                  "conditions": [
                                    {
                                      "comparison": {
                                        "left": {
                                          "type": "userProperty",
                                          "userProperty": {
                                            "propertyValue": {
                                              "groupIds": {},
                                              "type": "groupIds",
                                            },
                                            "userId": {
                                              "currentUser": {},
                                              "type": "currentUser",
                                            },
                                          },
                                        },
                                        "operator": "INTERSECTS",
                                        "right": {
                                          "staticValue": {
                                            "stringList": {
                                              "strings": [
                                                "parameterLevelGroup",
                                              ],
                                            },
                                            "type": "stringList",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                    {
                                      "comparison": {
                                        "left": {
                                          "parameterId": "overridden",
                                          "type": "parameterId",
                                        },
                                        "operator": "EQUALS",
                                        "right": {
                                          "staticValue": {
                                            "string": "bar",
                                            "type": "string",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                  ],
                                },
                                "type": "and",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "parameterRequired": {
                                    "required": {
                                      "required": {},
                                      "type": "required",
                                    },
                                  },
                                  "type": "parameterRequired",
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "staticValue": {
                                  "string": "default_fizz",
                                  "type": "string",
                                },
                                "type": "staticValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-with-overrides",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectTypeParameter",
                      "overridden",
                      "spt1",
                    ],
                    "parameters": {
                      "objectTypeParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to create",
                          "typeClasses": [],
                        },
                        "id": "objectTypeParameter",
                        "type": {
                          "objectTypeReference": {
                            "interfaceTypeRids": [
                              "com.palantir.exampleInterface",
                            ],
                          },
                          "type": "objectTypeReference",
                        },
                      },
                      "overridden": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "spt",
                          "typeClasses": [],
                        },
                        "id": "overridden",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "spt1": {
                        "displayMetadata": {
                          "description": "fizz_description",
                          "displayName": "fizz_display",
                          "typeClasses": [],
                        },
                        "id": "spt1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.modify-example-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfaceObjectToModifyParameter": "interfaceObjectToModifyParameter",
                            "interfacePropertyValues": {
                              "com.palantir.spt1": {
                                "logicRuleValue": {
                                  "parameterId": "spt1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                              "com.palantir.spt2": {
                                "logicRuleValue": {
                                  "parameterId": "spt2",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "sharedPropertyValues": {
                              "com.palantir.spt1": {
                                "parameterId": "spt1",
                                "type": "parameterId",
                              },
                              "com.palantir.spt2": {
                                "parameterId": "spt2",
                                "type": "parameterId",
                              },
                            },
                          },
                          "type": "modifyInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "interfaceObjectToModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "interfaceObjectQuery": {
                                  "interfaceObjectQuery": {},
                                  "type": "interfaceObjectQuery",
                                },
                                "type": "interfaceObjectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "spt1": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "spt2": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-example-interface",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Modify exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "interfaceObjectToModifyParameter",
                      "spt1",
                      "spt2",
                    ],
                    "parameters": {
                      "interfaceObjectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to modify",
                          "typeClasses": [],
                        },
                        "id": "interfaceObjectToModifyParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.exampleInterface",
                          },
                          "type": "interfaceReference",
                        },
                      },
                      "spt1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "spt",
                          "typeClasses": [],
                        },
                        "id": "spt1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "spt2": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "spt",
                          "typeClasses": [],
                        },
                        "id": "spt2",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.modify-with-overrides": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfaceObjectToModifyParameter": "interfaceObjectToModifyParameter",
                            "interfacePropertyValues": {
                              "com.palantir.spt1": {
                                "logicRuleValue": {
                                  "parameterId": "spt1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                              "com.palantir.spt2": {
                                "logicRuleValue": {
                                  "parameterId": "overridden",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "sharedPropertyValues": {
                              "com.palantir.spt1": {
                                "parameterId": "spt1",
                                "type": "parameterId",
                              },
                              "com.palantir.spt2": {
                                "parameterId": "overridden",
                                "type": "parameterId",
                              },
                            },
                          },
                          "type": "modifyInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "interfaceObjectToModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "interfaceObjectQuery": {
                                  "interfaceObjectQuery": {},
                                  "type": "interfaceObjectQuery",
                                },
                                "type": "interfaceObjectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "overridden": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "spt1": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "and": {
                                  "conditions": [
                                    {
                                      "comparison": {
                                        "left": {
                                          "type": "userProperty",
                                          "userProperty": {
                                            "propertyValue": {
                                              "groupIds": {},
                                              "type": "groupIds",
                                            },
                                            "userId": {
                                              "currentUser": {},
                                              "type": "currentUser",
                                            },
                                          },
                                        },
                                        "operator": "INTERSECTS",
                                        "right": {
                                          "staticValue": {
                                            "stringList": {
                                              "strings": [
                                                "parameterLevelGroup",
                                              ],
                                            },
                                            "type": "stringList",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                    {
                                      "comparison": {
                                        "left": {
                                          "parameterId": "overridden",
                                          "type": "parameterId",
                                        },
                                        "operator": "EQUALS",
                                        "right": {
                                          "staticValue": {
                                            "string": "bar",
                                            "type": "string",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                  ],
                                },
                                "type": "and",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "parameterRequired": {
                                    "required": {
                                      "required": {},
                                      "type": "required",
                                    },
                                  },
                                  "type": "parameterRequired",
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "staticValue": {
                                  "string": "default_fizz",
                                  "type": "string",
                                },
                                "type": "staticValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-with-overrides",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Modify exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "interfaceObjectToModifyParameter",
                      "overridden",
                      "spt1",
                    ],
                    "parameters": {
                      "interfaceObjectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to modify",
                          "typeClasses": [],
                        },
                        "id": "interfaceObjectToModifyParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.exampleInterface",
                          },
                          "type": "interfaceReference",
                        },
                      },
                      "overridden": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "spt",
                          "typeClasses": [],
                        },
                        "id": "overridden",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "spt1": {
                        "displayMetadata": {
                          "description": "fizz_description",
                          "displayName": "fizz_display",
                          "typeClasses": [],
                        },
                        "id": "spt1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.exampleInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.spt1": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.spt1",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "spt",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                        "typeClasses": [
                          {
                            "kind": "render_hint",
                            "name": "SELECTABLE",
                          },
                          {
                            "kind": "render_hint",
                            "name": "SORTABLE",
                          },
                        ],
                        "valueType": undefined,
                      },
                    },
                    "com.palantir.spt2": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.spt2",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "spt",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                        "typeClasses": [
                          {
                            "kind": "render_hint",
                            "name": "SELECTABLE",
                          },
                          {
                            "kind": "render_hint",
                            "name": "SORTABLE",
                          },
                        ],
                        "valueType": undefined,
                      },
                    },
                  },
                  "propertiesV3": {
                    "com.palantir.spt1": {
                      "sharedPropertyBasedPropertyType": {
                        "requireImplementation": true,
                        "sharedPropertyType": {
                          "aliases": [],
                          "apiName": "com.palantir.spt1",
                          "baseFormatter": undefined,
                          "dataConstraints": undefined,
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "spt",
                            "visibility": "NORMAL",
                          },
                          "gothamMapping": undefined,
                          "indexedForSearch": true,
                          "type": {
                            "string": {
                              "analyzerOverride": undefined,
                              "enableAsciiFolding": undefined,
                              "isLongText": false,
                              "supportsEfficientLeadingWildcard": false,
                              "supportsExactMatching": true,
                            },
                            "type": "string",
                          },
                          "typeClasses": [
                            {
                              "kind": "render_hint",
                              "name": "SELECTABLE",
                            },
                            {
                              "kind": "render_hint",
                              "name": "SORTABLE",
                            },
                          ],
                          "valueType": undefined,
                        },
                      },
                      "type": "sharedPropertyBasedPropertyType",
                    },
                    "com.palantir.spt2": {
                      "sharedPropertyBasedPropertyType": {
                        "requireImplementation": true,
                        "sharedPropertyType": {
                          "aliases": [],
                          "apiName": "com.palantir.spt2",
                          "baseFormatter": undefined,
                          "dataConstraints": undefined,
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "spt",
                            "visibility": "NORMAL",
                          },
                          "gothamMapping": undefined,
                          "indexedForSearch": true,
                          "type": {
                            "string": {
                              "analyzerOverride": undefined,
                              "enableAsciiFolding": undefined,
                              "isLongText": false,
                              "supportsEfficientLeadingWildcard": false,
                              "supportsExactMatching": true,
                            },
                            "type": "string",
                          },
                          "typeClasses": [
                            {
                              "kind": "render_hint",
                              "name": "SELECTABLE",
                            },
                            {
                              "kind": "render_hint",
                              "name": "SORTABLE",
                            },
                          ],
                          "valueType": undefined,
                        },
                      },
                      "type": "sharedPropertyBasedPropertyType",
                    },
                  },
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {
              "com.palantir.spt1": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.spt1",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "spt",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
                  "type": {
                    "string": {
                      "analyzerOverride": undefined,
                      "enableAsciiFolding": undefined,
                      "isLongText": false,
                      "supportsEfficientLeadingWildcard": false,
                      "supportsExactMatching": true,
                    },
                    "type": "string",
                  },
                  "typeClasses": [
                    {
                      "kind": "render_hint",
                      "name": "SELECTABLE",
                    },
                    {
                      "kind": "render_hint",
                      "name": "SORTABLE",
                    },
                  ],
                  "valueType": undefined,
                },
              },
              "com.palantir.spt2": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.spt2",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "spt",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
                  "type": {
                    "string": {
                      "analyzerOverride": undefined,
                      "enableAsciiFolding": undefined,
                      "isLongText": false,
                      "supportsEfficientLeadingWildcard": false,
                      "supportsExactMatching": true,
                    },
                    "type": "string",
                  },
                  "typeClasses": [
                    {
                      "kind": "render_hint",
                      "name": "SELECTABLE",
                    },
                    {
                      "kind": "render_hint",
                      "name": "SORTABLE",
                    },
                  ],
                  "valueType": undefined,
                },
              },
            },
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
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

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-example-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfacePropertyValues": {
                              "com.palantir.property1": {
                                "logicRuleValue": {
                                  "parameterId": "property1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "objectTypeParameter": "objectTypeParameter",
                            "sharedPropertyValues": {},
                          },
                          "type": "addInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectTypeParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectTypeReference": {
                                  "objectTypeReference": {
                                    "interfaceTypeRids": [
                                      "com.palantir.exampleInterface",
                                    ],
                                  },
                                  "type": "objectTypeReference",
                                },
                                "type": "objectTypeReference",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "property1": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-example-interface",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectTypeParameter",
                      "property1",
                    ],
                    "parameters": {
                      "objectTypeParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to create",
                          "typeClasses": [],
                        },
                        "id": "objectTypeParameter",
                        "type": {
                          "objectTypeReference": {
                            "interfaceTypeRids": [
                              "com.palantir.exampleInterface",
                            ],
                          },
                          "type": "objectTypeReference",
                        },
                      },
                      "property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Property1",
                          "typeClasses": [],
                        },
                        "id": "property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.modify-example-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfaceObjectToModifyParameter": "interfaceObjectToModifyParameter",
                            "interfacePropertyValues": {
                              "com.palantir.property1": {
                                "logicRuleValue": {
                                  "parameterId": "property1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "sharedPropertyValues": {},
                          },
                          "type": "modifyInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "interfaceObjectToModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "interfaceObjectQuery": {
                                  "interfaceObjectQuery": {},
                                  "type": "interfaceObjectQuery",
                                },
                                "type": "interfaceObjectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "property1": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-example-interface",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Modify exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "interfaceObjectToModifyParameter",
                      "property1",
                    ],
                    "parameters": {
                      "interfaceObjectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to modify",
                          "typeClasses": [],
                        },
                        "id": "interfaceObjectToModifyParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.exampleInterface",
                          },
                          "type": "interfaceReference",
                        },
                      },
                      "property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Property1",
                          "typeClasses": [],
                        },
                        "id": "property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.exampleInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {},
                  "propertiesV3": {
                    "property1": {
                      "interfaceDefinedPropertyType": {
                        "apiName": "property1",
                        "constraints": {
                          "dataConstraints": undefined,
                          "indexedForSearch": true,
                          "primaryKeyConstraint": "NO_RESTRICTION",
                          "requireImplementation": true,
                          "typeClasses": [],
                          "valueType": undefined,
                        },
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property1",
                          "visibility": "NORMAL",
                        },
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                      },
                      "type": "interfaceDefinedPropertyType",
                    },
                  },
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
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

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.delete-interface-object-example-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "deleteObjectRule": {
                            "objectToDelete": "objectToDeleteParameter",
                          },
                          "type": "deleteObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectToDeleteParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "interfaceObjectQuery": {
                                  "interfaceObjectQuery": {},
                                  "type": "interfaceObjectQuery",
                                },
                                "type": "interfaceObjectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.delete-interface-object-example-interface",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Delete exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToDeleteParameter",
                    ],
                    "parameters": {
                      "objectToDeleteParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Delete object",
                          "typeClasses": [],
                        },
                        "id": "objectToDeleteParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.exampleInterface",
                          },
                          "type": "interfaceReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.exampleInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {},
                  "propertiesV3": {
                    "property1": {
                      "interfaceDefinedPropertyType": {
                        "apiName": "property1",
                        "constraints": {
                          "dataConstraints": undefined,
                          "indexedForSearch": true,
                          "primaryKeyConstraint": "NO_RESTRICTION",
                          "requireImplementation": true,
                          "typeClasses": [],
                          "valueType": undefined,
                        },
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property1",
                          "visibility": "NORMAL",
                        },
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                      },
                      "type": "interfaceDefinedPropertyType",
                    },
                  },
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
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

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.custom-delete-api-name": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "deleteObjectRule": {
                            "objectToDelete": "objectToDeleteParameter",
                          },
                          "type": "deleteObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectToDeleteParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "interfaceObjectQuery": {
                                  "interfaceObjectQuery": {},
                                  "type": "interfaceObjectQuery",
                                },
                                "type": "interfaceObjectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.custom-delete-api-name",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Custom Delete Action",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToDeleteParameter",
                    ],
                    "parameters": {
                      "objectToDeleteParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Delete object",
                          "typeClasses": [],
                        },
                        "id": "objectToDeleteParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.exampleInterface",
                          },
                          "type": "interfaceReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "experimental": {},
                      "type": "experimental",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.exampleInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {},
                  "propertiesV3": {
                    "property1": {
                      "interfaceDefinedPropertyType": {
                        "apiName": "property1",
                        "constraints": {
                          "dataConstraints": undefined,
                          "indexedForSearch": true,
                          "primaryKeyConstraint": "NO_RESTRICTION",
                          "requireImplementation": true,
                          "typeClasses": [],
                          "valueType": undefined,
                        },
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property1",
                          "visibility": "NORMAL",
                        },
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                      },
                      "type": "interfaceDefinedPropertyType",
                    },
                  },
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
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
        actionLevelValidation: [{
          condition: {
            type: "group",
            name: "deleteValidationGroup",
          },
        }],
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.delete-interface-object-example-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "deleteObjectRule": {
                            "objectToDelete": "objectToDeleteParameter",
                          },
                          "type": "deleteObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectToDeleteParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "interfaceObjectQuery": {
                                  "interfaceObjectQuery": {},
                                  "type": "interfaceObjectQuery",
                                },
                                "type": "interfaceObjectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.delete-interface-object-example-interface",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Delete exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToDeleteParameter",
                    ],
                    "parameters": {
                      "objectToDeleteParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Delete object",
                          "typeClasses": [],
                        },
                        "id": "objectToDeleteParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.exampleInterface",
                          },
                          "type": "interfaceReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.exampleInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {},
                  "propertiesV3": {
                    "property1": {
                      "interfaceDefinedPropertyType": {
                        "apiName": "property1",
                        "constraints": {
                          "dataConstraints": undefined,
                          "indexedForSearch": true,
                          "primaryKeyConstraint": "NO_RESTRICTION",
                          "requireImplementation": true,
                          "typeClasses": [],
                          "valueType": undefined,
                        },
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property1",
                          "visibility": "NORMAL",
                        },
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                      },
                      "type": "interfaceDefinedPropertyType",
                    },
                  },
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
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
          "property2": { type: "string" },
          "property3": { type: "string" },
        },
      });
      const createAction = defineCreateInterfaceObjectAction({
        interfaceType: exampleInterface,
        apiName: "custom-api-name-1",
        displayName: "Custom Create Action",
        status: "experimental",
        actionLevelValidation: [{
          condition: {
            type: "group",
            name: "actionLevelGroup",
          },
        }],
        parameterConfiguration: {
          "property3": {
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
        actionLevelValidation: [{
          condition: {
            type: "group",
            name: "actionLevelGroup",
          },
        }],
        parameterConfiguration: {
          "property3": {
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

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.custom-api-name-1": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfacePropertyValues": {
                              "com.palantir.property1": {
                                "logicRuleValue": {
                                  "parameterId": "com.palantir.property1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                              "com.palantir.property3": {
                                "logicRuleValue": {
                                  "parameterId": "property3",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "objectTypeParameter": "objectTypeParameter",
                            "sharedPropertyValues": {
                              "com.palantir.property1": {
                                "parameterId": "com.palantir.property1",
                                "type": "parameterId",
                              },
                            },
                          },
                          "type": "addInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "comparison": {
                                "left": {
                                  "type": "userProperty",
                                  "userProperty": {
                                    "propertyValue": {
                                      "groupIds": {},
                                      "type": "groupIds",
                                    },
                                    "userId": {
                                      "currentUser": {},
                                      "type": "currentUser",
                                    },
                                  },
                                },
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup",
                                      ],
                                    },
                                    "type": "stringList",
                                  },
                                  "type": "staticValue",
                                },
                              },
                              "type": "comparison",
                            },
                            "displayMetadata": {
                              "failureMessage": "Did not satisfy validation",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "com.palantir.property1": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "objectTypeParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectTypeReference": {
                                  "objectTypeReference": {
                                    "interfaceTypeRids": [
                                      "com.palantir.exampleInterface",
                                    ],
                                  },
                                  "type": "objectTypeReference",
                                },
                                "type": "objectTypeReference",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "property3": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "and": {
                                  "conditions": [
                                    {
                                      "comparison": {
                                        "left": {
                                          "type": "userProperty",
                                          "userProperty": {
                                            "propertyValue": {
                                              "groupIds": {},
                                              "type": "groupIds",
                                            },
                                            "userId": {
                                              "currentUser": {},
                                              "type": "currentUser",
                                            },
                                          },
                                        },
                                        "operator": "INTERSECTS",
                                        "right": {
                                          "staticValue": {
                                            "stringList": {
                                              "strings": [
                                                "parameterLevelGroup",
                                              ],
                                            },
                                            "type": "stringList",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                    {
                                      "comparison": {
                                        "left": {
                                          "parameterId": "com.palantir.property1",
                                          "type": "parameterId",
                                        },
                                        "operator": "EQUALS",
                                        "right": {
                                          "staticValue": {
                                            "string": "bar",
                                            "type": "string",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                  ],
                                },
                                "type": "and",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "parameterRequired": {
                                    "required": {
                                      "required": {},
                                      "type": "required",
                                    },
                                  },
                                  "type": "parameterRequired",
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "staticValue": {
                                  "string": "default_fizz",
                                  "type": "string",
                                },
                                "type": "staticValue",
                              },
                              "renderHint": {
                                "textArea": {},
                                "type": "textArea",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.custom-api-name-1",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "TABLE",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": false,
                            "fitHorizontally": true,
                            "frozenColumnCount": 1,
                            "rowHeightInLines": 10,
                          },
                        },
                        "enableLayoutUserSwitch": true,
                      },
                      "description": "",
                      "displayName": "Custom Create Action",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "submitButtonDisplayMetadata": {
                        "intent": "DANGER",
                        "text": "Custom button",
                      },
                      "successMessage": [
                        {
                          "message": "Custom success message",
                          "type": "message",
                        },
                      ],
                      "typeClasses": [],
                      "undoButtonConfiguration": true,
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectTypeParameter",
                      "com.palantir.property1",
                      "property3",
                    ],
                    "parameters": {
                      "com.palantir.property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "property1",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectTypeParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to create",
                          "typeClasses": [],
                        },
                        "id": "objectTypeParameter",
                        "type": {
                          "objectTypeReference": {
                            "interfaceTypeRids": [
                              "com.palantir.exampleInterface",
                            ],
                          },
                          "type": "objectTypeReference",
                        },
                      },
                      "property3": {
                        "displayMetadata": {
                          "description": "fizz_description",
                          "displayName": "fizz_display",
                          "typeClasses": [],
                        },
                        "id": "property3",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "experimental": {},
                      "type": "experimental",
                    },
                  },
                },
              },
              "com.palantir.custom-api-name-2": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfaceObjectToModifyParameter": "interfaceObjectToModifyParameter",
                            "interfacePropertyValues": {
                              "com.palantir.property1": {
                                "logicRuleValue": {
                                  "parameterId": "com.palantir.property1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                              "com.palantir.property3": {
                                "logicRuleValue": {
                                  "parameterId": "property3",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "sharedPropertyValues": {
                              "com.palantir.property1": {
                                "parameterId": "com.palantir.property1",
                                "type": "parameterId",
                              },
                            },
                          },
                          "type": "modifyInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "comparison": {
                                "left": {
                                  "type": "userProperty",
                                  "userProperty": {
                                    "propertyValue": {
                                      "groupIds": {},
                                      "type": "groupIds",
                                    },
                                    "userId": {
                                      "currentUser": {},
                                      "type": "currentUser",
                                    },
                                  },
                                },
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup",
                                      ],
                                    },
                                    "type": "stringList",
                                  },
                                  "type": "staticValue",
                                },
                              },
                              "type": "comparison",
                            },
                            "displayMetadata": {
                              "failureMessage": "Did not satisfy validation",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "com.palantir.property1": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "interfaceObjectToModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "interfaceObjectQuery": {
                                  "interfaceObjectQuery": {},
                                  "type": "interfaceObjectQuery",
                                },
                                "type": "interfaceObjectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "property3": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "and": {
                                  "conditions": [
                                    {
                                      "comparison": {
                                        "left": {
                                          "type": "userProperty",
                                          "userProperty": {
                                            "propertyValue": {
                                              "groupIds": {},
                                              "type": "groupIds",
                                            },
                                            "userId": {
                                              "currentUser": {},
                                              "type": "currentUser",
                                            },
                                          },
                                        },
                                        "operator": "INTERSECTS",
                                        "right": {
                                          "staticValue": {
                                            "stringList": {
                                              "strings": [
                                                "parameterLevelGroup",
                                              ],
                                            },
                                            "type": "stringList",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                    {
                                      "comparison": {
                                        "left": {
                                          "parameterId": "com.palantir.property1",
                                          "type": "parameterId",
                                        },
                                        "operator": "EQUALS",
                                        "right": {
                                          "staticValue": {
                                            "string": "bar",
                                            "type": "string",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                  ],
                                },
                                "type": "and",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "parameterRequired": {
                                    "required": {
                                      "required": {},
                                      "type": "required",
                                    },
                                  },
                                  "type": "parameterRequired",
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "staticValue": {
                                  "string": "default_fizz",
                                  "type": "string",
                                },
                                "type": "staticValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.custom-api-name-2",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "TABLE",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": false,
                            "fitHorizontally": true,
                            "frozenColumnCount": 1,
                            "rowHeightInLines": 10,
                          },
                        },
                        "enableLayoutUserSwitch": true,
                      },
                      "description": "",
                      "displayName": "Custom Modify Action",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "submitButtonDisplayMetadata": {
                        "intent": "DANGER",
                        "text": "Custom button",
                      },
                      "successMessage": [
                        {
                          "message": "Custom success message",
                          "type": "message",
                        },
                      ],
                      "typeClasses": [],
                      "undoButtonConfiguration": true,
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "interfaceObjectToModifyParameter",
                      "com.palantir.property1",
                      "property3",
                    ],
                    "parameters": {
                      "com.palantir.property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "property1",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "interfaceObjectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to modify",
                          "typeClasses": [],
                        },
                        "id": "interfaceObjectToModifyParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.exampleInterface",
                          },
                          "type": "interfaceReference",
                        },
                      },
                      "property3": {
                        "displayMetadata": {
                          "description": "fizz_description",
                          "displayName": "fizz_display",
                          "typeClasses": [],
                        },
                        "id": "property3",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "experimental": {},
                      "type": "experimental",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {
                "com.palantir.custom-api-name-1": {
                  "restrictionStatus": {
                    "hasRolesApplied": true,
                    "ontologyPackageRid": null,
                    "publicProject": false,
                  },
                },
                "com.palantir.custom-api-name-2": {
                  "restrictionStatus": {
                    "hasRolesApplied": true,
                    "ontologyPackageRid": null,
                    "publicProject": false,
                  },
                },
              },
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.exampleInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.property1": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.property1",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property1",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                        "typeClasses": [
                          {
                            "kind": "render_hint",
                            "name": "SELECTABLE",
                          },
                          {
                            "kind": "render_hint",
                            "name": "SORTABLE",
                          },
                        ],
                        "valueType": undefined,
                      },
                    },
                  },
                  "propertiesV3": {
                    "com.palantir.property1": {
                      "sharedPropertyBasedPropertyType": {
                        "requireImplementation": true,
                        "sharedPropertyType": {
                          "aliases": [],
                          "apiName": "com.palantir.property1",
                          "baseFormatter": undefined,
                          "dataConstraints": undefined,
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "property1",
                            "visibility": "NORMAL",
                          },
                          "gothamMapping": undefined,
                          "indexedForSearch": true,
                          "type": {
                            "string": {
                              "analyzerOverride": undefined,
                              "enableAsciiFolding": undefined,
                              "isLongText": false,
                              "supportsEfficientLeadingWildcard": false,
                              "supportsExactMatching": true,
                            },
                            "type": "string",
                          },
                          "typeClasses": [
                            {
                              "kind": "render_hint",
                              "name": "SELECTABLE",
                            },
                            {
                              "kind": "render_hint",
                              "name": "SORTABLE",
                            },
                          ],
                          "valueType": undefined,
                        },
                      },
                      "type": "sharedPropertyBasedPropertyType",
                    },
                    "property2": {
                      "interfaceDefinedPropertyType": {
                        "apiName": "property2",
                        "constraints": {
                          "dataConstraints": undefined,
                          "indexedForSearch": true,
                          "primaryKeyConstraint": "NO_RESTRICTION",
                          "requireImplementation": true,
                          "typeClasses": [],
                          "valueType": undefined,
                        },
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property2",
                          "visibility": "NORMAL",
                        },
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                      },
                      "type": "interfaceDefinedPropertyType",
                    },
                    "property3": {
                      "interfaceDefinedPropertyType": {
                        "apiName": "property3",
                        "constraints": {
                          "dataConstraints": undefined,
                          "indexedForSearch": true,
                          "primaryKeyConstraint": "NO_RESTRICTION",
                          "requireImplementation": true,
                          "typeClasses": [],
                          "valueType": undefined,
                        },
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property3",
                          "visibility": "NORMAL",
                        },
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                      },
                      "type": "interfaceDefinedPropertyType",
                    },
                  },
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {
              "com.palantir.property1": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.property1",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "property1",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
                  "type": {
                    "string": {
                      "analyzerOverride": undefined,
                      "enableAsciiFolding": undefined,
                      "isLongText": false,
                      "supportsEfficientLeadingWildcard": false,
                      "supportsExactMatching": true,
                    },
                    "type": "string",
                  },
                  "typeClasses": [
                    {
                      "kind": "render_hint",
                      "name": "SELECTABLE",
                    },
                    {
                      "kind": "render_hint",
                      "name": "SORTABLE",
                    },
                  ],
                  "valueType": undefined,
                },
              },
            },
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Interface actions validate SPT existence", () => {
      const spt = defineSharedPropertyType({
        apiName: "spt",
        type: "string",
      });
      const importedInterface: InterfaceType = {
        "apiName": "com.palantir.other.ontology.event.Event",
        "displayMetadata": {
          "displayName": "Event",
          "description": "Event",
          "icon": {
            "type": "blueprint",
            "blueprint": {
              "color": "#4C90F0",
              "locator": "timeline-events",
            },
          },
        },
        "extendsInterfaces": [],
        "links": [],
        "status": {
          "type": "active",
          "active": {},
        },
        "propertiesV2": {
          "com.palantir.other.ontology.types.id": {
            "required": true,
            "sharedPropertyType": {
              "displayName": "Id",
              "apiName": "com.palantir.other.ontology.types.id",
              "type": "string",
              "nonNameSpacedApiName": "id",
              "typeClasses": [
                {
                  "kind": "render_hint",
                  "name": "SELECTABLE",
                },
                {
                  "kind": "render_hint",
                  "name": "SORTABLE",
                },
              ],
              "__type": "SHARED_PROPERTY_TYPE",
            },
          },
        },
        "propertiesV3": {
          "id": {
            "required": true,
            "sharedPropertyType": {
              "displayName": "Id",
              "apiName": "com.palantir.core.ontology.types.id",
              "type": "string",
              "nonNameSpacedApiName": "id",
              "typeClasses": [
                {
                  "kind": "render_hint",
                  "name": "SELECTABLE",
                },
                {
                  "kind": "render_hint",
                  "name": "SORTABLE",
                },
              ],
              "__type": "SHARED_PROPERTY_TYPE",
            },
          },
        },
        "searchable": false,
        "__type": "INTERFACE_TYPE",
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
          parameters: [{
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
          }, {
            id: "sptParameter",
            displayName: "SPT",
            type: "string",
            validation: {
              required: true,
              allowedValues: { type: "text" },
            },
          }, {
            id: "otherParameter",
            displayName: "Other parameter",
            type: "string",
            validation: {
              required: true,
              allowedValues: { type: "text" },
            },
          }],
          rules: [{
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
          }],
        })
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Shared property type com.palantir.other.invalid.spt does not exist in interface type com.palantir.interfaceType]`,
      );
      expect(() =>
        defineCreateInterfaceObjectAction({ interfaceType: interfaceType })
      ).not
        .toThrow();
    });

    it("Interface actions validate SPT existence on the interface", () => {
      expect(() => {
        const spt = defineSharedPropertyType({
          apiName: "spt",
          type: "string",
        });
        const pulseRepetitionIntervalSecs: SharedPropertyType = {
          "apiName": "com.palantir.other.ontology.pulseRepetitionIntervalSecs",
          "displayName": "Pulse Repetition Interval (s)",
          "description": "Pulse Repetition Interval in seconds.",
          "type": "double",
          "nonNameSpacedApiName": "pulseRepetitionIntervalSecs",
          "typeClasses": [],
          "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE,
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
          parameters: [{
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
          }, {
            id: "sptParameter",
            displayName: "SPT",
            type: "string",
            validation: {
              required: true,
              allowedValues: { type: "text" },
            },
          }],
          rules: [{
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
          }],
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
            "custom_parameter": {
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
            "custom_parameter": {
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
            "custom_parameter": {
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
            "custom_parameter": {
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
            "custom_parameter": {
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
            "custom_parameter": {
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
            "property1": {
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
            "property1": {
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
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-sample-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addInterfaceRule": {
                            "interfaceApiName": "com.palantir.sampleInterface",
                            "interfacePropertyValues": {
                              "com.palantir.property1": {
                                "logicRuleValue": {
                                  "parameterId": "com.palantir.property1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "objectTypeParameter": "objectTypeParameter",
                            "sharedPropertyValues": {
                              "com.palantir.property1": {
                                "parameterId": "com.palantir.property1",
                                "type": "parameterId",
                              },
                            },
                          },
                          "type": "addInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "com.palantir.property1": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "objectTypeParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectTypeReference": {
                                  "objectTypeReference": {
                                    "interfaceTypeRids": [
                                      "com.palantir.sampleInterface",
                                    ],
                                  },
                                  "type": "objectTypeReference",
                                },
                                "type": "objectTypeReference",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {
                        "section1": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "comparison": {
                                  "left": {
                                    "type": "userProperty",
                                    "userProperty": {
                                      "propertyValue": {
                                        "groupIds": {},
                                        "type": "groupIds",
                                      },
                                      "userId": {
                                        "currentUser": {},
                                        "type": "currentUser",
                                      },
                                    },
                                  },
                                  "operator": "INTERSECTS",
                                  "right": {
                                    "staticValue": {
                                      "stringList": {
                                        "strings": [
                                          "testGroup",
                                        ],
                                      },
                                      "type": "stringList",
                                    },
                                    "type": "staticValue",
                                  },
                                },
                                "type": "comparison",
                              },
                              "sectionBlockOverrides": [
                                {
                                  "type": "visibility",
                                  "visibility": {
                                    "visibility": {
                                      "hidden": {},
                                      "type": "hidden",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
                          "defaultDisplayMetadata": {
                            "visibility": {
                              "type": "visible",
                              "visible": {},
                            },
                          },
                        },
                      },
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-sample-interface",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create sampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.sampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [
                      {
                        "parameterId": "objectTypeParameter",
                        "type": "parameterId",
                      },
                      {
                        "sectionId": "section1",
                        "type": "sectionId",
                      },
                    ],
                    "parameterOrdering": [
                      "objectTypeParameter",
                      "com.palantir.property1",
                    ],
                    "parameters": {
                      "com.palantir.property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "property1",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectTypeParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to create",
                          "typeClasses": [],
                        },
                        "id": "objectTypeParameter",
                        "type": {
                          "objectTypeReference": {
                            "interfaceTypeRids": [
                              "com.palantir.sampleInterface",
                            ],
                          },
                          "type": "objectTypeReference",
                        },
                      },
                    },
                    "sections": {
                      "section1": {
                        "content": [
                          {
                            "parameterId": "com.palantir.property1",
                            "type": "parameterId",
                          },
                        ],
                        "displayMetadata": {
                          "collapsedByDefault": false,
                          "columnCount": 1,
                          "description": "Description for Section 1",
                          "displayName": "Section 1",
                          "showTitleBar": true,
                        },
                        "id": "section1",
                      },
                    },
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.modify-sample-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyInterfaceRule": {
                            "interfaceApiName": "com.palantir.sampleInterface",
                            "interfaceObjectToModifyParameter": "interfaceObjectToModifyParameter",
                            "interfacePropertyValues": {
                              "com.palantir.property1": {
                                "logicRuleValue": {
                                  "parameterId": "com.palantir.property1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "sharedPropertyValues": {
                              "com.palantir.property1": {
                                "parameterId": "com.palantir.property1",
                                "type": "parameterId",
                              },
                            },
                          },
                          "type": "modifyInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "com.palantir.property1": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "interfaceObjectToModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "interfaceObjectQuery": {
                                  "interfaceObjectQuery": {},
                                  "type": "interfaceObjectQuery",
                                },
                                "type": "interfaceObjectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {
                        "section1": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "comparison": {
                                  "left": {
                                    "type": "userProperty",
                                    "userProperty": {
                                      "propertyValue": {
                                        "groupIds": {},
                                        "type": "groupIds",
                                      },
                                      "userId": {
                                        "currentUser": {},
                                        "type": "currentUser",
                                      },
                                    },
                                  },
                                  "operator": "INTERSECTS",
                                  "right": {
                                    "staticValue": {
                                      "stringList": {
                                        "strings": [
                                          "testGroup",
                                        ],
                                      },
                                      "type": "stringList",
                                    },
                                    "type": "staticValue",
                                  },
                                },
                                "type": "comparison",
                              },
                              "sectionBlockOverrides": [
                                {
                                  "type": "visibility",
                                  "visibility": {
                                    "visibility": {
                                      "hidden": {},
                                      "type": "hidden",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
                          "defaultDisplayMetadata": {
                            "visibility": {
                              "type": "visible",
                              "visible": {},
                            },
                          },
                        },
                      },
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-sample-interface",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Modify sampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.sampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [
                      {
                        "parameterId": "interfaceObjectToModifyParameter",
                        "type": "parameterId",
                      },
                      {
                        "sectionId": "section1",
                        "type": "sectionId",
                      },
                    ],
                    "parameterOrdering": [
                      "interfaceObjectToModifyParameter",
                      "com.palantir.property1",
                    ],
                    "parameters": {
                      "com.palantir.property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "property1",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "interfaceObjectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to modify",
                          "typeClasses": [],
                        },
                        "id": "interfaceObjectToModifyParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.sampleInterface",
                          },
                          "type": "interfaceReference",
                        },
                      },
                    },
                    "sections": {
                      "section1": {
                        "content": [
                          {
                            "parameterId": "com.palantir.property1",
                            "type": "parameterId",
                          },
                        ],
                        "displayMetadata": {
                          "collapsedByDefault": false,
                          "columnCount": 1,
                          "description": "Description for Section 1",
                          "displayName": "Section 1",
                          "showTitleBar": true,
                        },
                        "id": "section1",
                      },
                    },
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.sampleInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.sampleInterface",
                  "displayMetadata": {
                    "description": "sampleInterface",
                    "displayName": "sampleInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.property1": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.property1",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property1",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                        "typeClasses": [
                          {
                            "kind": "render_hint",
                            "name": "SELECTABLE",
                          },
                          {
                            "kind": "render_hint",
                            "name": "SORTABLE",
                          },
                        ],
                        "valueType": undefined,
                      },
                    },
                  },
                  "propertiesV3": {
                    "com.palantir.property1": {
                      "sharedPropertyBasedPropertyType": {
                        "requireImplementation": true,
                        "sharedPropertyType": {
                          "aliases": [],
                          "apiName": "com.palantir.property1",
                          "baseFormatter": undefined,
                          "dataConstraints": undefined,
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "property1",
                            "visibility": "NORMAL",
                          },
                          "gothamMapping": undefined,
                          "indexedForSearch": true,
                          "type": {
                            "string": {
                              "analyzerOverride": undefined,
                              "enableAsciiFolding": undefined,
                              "isLongText": false,
                              "supportsEfficientLeadingWildcard": false,
                              "supportsExactMatching": true,
                            },
                            "type": "string",
                          },
                          "typeClasses": [
                            {
                              "kind": "render_hint",
                              "name": "SELECTABLE",
                            },
                            {
                              "kind": "render_hint",
                              "name": "SORTABLE",
                            },
                          ],
                          "valueType": undefined,
                        },
                      },
                      "type": "sharedPropertyBasedPropertyType",
                    },
                  },
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {
              "com.palantir.property1": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.property1",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "property1",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
                  "type": {
                    "string": {
                      "analyzerOverride": undefined,
                      "enableAsciiFolding": undefined,
                      "isLongText": false,
                      "supportsEfficientLeadingWildcard": false,
                      "supportsExactMatching": true,
                    },
                    "type": "string",
                  },
                  "typeClasses": [
                    {
                      "kind": "render_hint",
                      "name": "SELECTABLE",
                    },
                    {
                      "kind": "render_hint",
                      "name": "SORTABLE",
                    },
                  ],
                  "valueType": undefined,
                },
              },
            },
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });
  });

  describe("Object Actions", () => {
    it("Simple concrete actions are properly defined", () => {
      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: {
          "bar": { type: "string" },
          "structProp": {
            type: {
              type: "struct",
              structDefinition: { simpleProperty: "string" },
            },
          },
          "optionalProp": { type: "string" },
        },
      });

      const createObjectActionType = defineCreateObjectAction(
        {
          objectType: exampleObjectType,
        },
      );
      const modifyObjectActionType = defineModifyObjectAction(
        {
          objectType: exampleObjectType,
        },
      );
      const deleteObjectActionType = defineDeleteObjectAction(
        {
          objectType: exampleObjectType,
        },
      );
      const createOrModifyObjectActionType = defineCreateOrModifyObjectAction(
        {
          objectType: exampleObjectType,
        },
      );

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-object-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.foo",
                            "propertyValues": {
                              "bar": {
                                "parameterId": "bar",
                                "type": "parameterId",
                              },
                              "optionalProp": {
                                "parameterId": "optionalProp",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "bar": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "optionalProp": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create exampleObjectType",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.foo",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "bar",
                      "optionalProp",
                    ],
                    "parameters": {
                      "bar": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Bar",
                          "typeClasses": [],
                        },
                        "id": "bar",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "optionalProp": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "OptionalProp",
                          "typeClasses": [],
                        },
                        "id": "optionalProp",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.create-or-modify-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addOrModifyObjectRuleV2": {
                            "objectToModify": "objectToCreateOrModifyParameter",
                            "propertyValues": {
                              "optionalProp": {
                                "parameterId": "optionalProp",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addOrModifyObjectRuleV2",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectToCreateOrModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectQuery": {
                                  "objectQuery": {},
                                  "type": "objectQuery",
                                },
                                "type": "objectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "optionalProp": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToCreateOrModifyParameter",
                                  "propertyTypeId": "optionalProp",
                                },
                                "type": "objectParameterPropertyValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-or-modify-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create or Modify exampleObjectType",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.foo",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToCreateOrModifyParameter",
                      "optionalProp",
                    ],
                    "parameters": {
                      "objectToCreateOrModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Create or modify object",
                          "typeClasses": [],
                        },
                        "id": "objectToCreateOrModifyParameter",
                        "type": {
                          "objectReference": {
                            "maybeCreateObjectOption": {
                              "autoGenerated": {},
                              "type": "autoGenerated",
                            },
                            "objectTypeId": "com.palantir.foo",
                          },
                          "type": "objectReference",
                        },
                      },
                      "optionalProp": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "OptionalProp",
                          "typeClasses": [],
                        },
                        "id": "optionalProp",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.delete-object-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "deleteObjectRule": {
                            "objectToDelete": "objectToDeleteParameter",
                          },
                          "type": "deleteObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectToDeleteParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectQuery": {
                                  "objectQuery": {},
                                  "type": "objectQuery",
                                },
                                "type": "objectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.delete-object-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Delete exampleObjectType",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.foo",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToDeleteParameter",
                    ],
                    "parameters": {
                      "objectToDeleteParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Delete object",
                          "typeClasses": [],
                        },
                        "id": "objectToDeleteParameter",
                        "type": {
                          "objectReference": {
                            "objectTypeId": "com.palantir.foo",
                          },
                          "type": "objectReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.modify-object-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyObjectRule": {
                            "objectToModify": "objectToModifyParameter",
                            "propertyValues": {
                              "optionalProp": {
                                "parameterId": "optionalProp",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "modifyObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectToModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectQuery": {
                                  "objectQuery": {},
                                  "type": "objectQuery",
                                },
                                "type": "objectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "optionalProp": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToModifyParameter",
                                  "propertyTypeId": "optionalProp",
                                },
                                "type": "objectParameterPropertyValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-object-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Modify exampleObjectType",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.foo",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToModifyParameter",
                      "optionalProp",
                    ],
                    "parameters": {
                      "objectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Modify object",
                          "typeClasses": [],
                        },
                        "id": "objectToModifyParameter",
                        "type": {
                          "objectReference": {
                            "objectTypeId": "com.palantir.foo",
                          },
                          "type": "objectReference",
                        },
                      },
                      "optionalProp": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "OptionalProp",
                          "typeClasses": [],
                        },
                        "id": "optionalProp",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.foo": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.foo",
                        "propertyMapping": {
                          "bar": {
                            "column": "bar",
                            "type": "column",
                          },
                          "optionalProp": {
                            "column": "optionalProp",
                            "type": "column",
                          },
                          "structProp": {
                            "struct": {
                              "column": "structProp",
                              "mapping": {
                                "simpleProperty": {
                                  "apiName": "simpleProperty",
                                  "mappings": {},
                                },
                              },
                            },
                            "type": "struct",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.foo",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.foo",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "exampleObjectType",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "exampleObjectTypes",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "bar",
                  ],
                  "propertyTypes": {
                    "bar": {
                      "apiName": "bar",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Bar",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "optionalProp": {
                      "apiName": "optionalProp",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "OptionalProp",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "structProp": {
                      "apiName": "structProp",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "StructProp",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "struct": {
                          "mainValue": undefined,
                          "structFields": [
                            {
                              "aliases": [],
                              "apiName": "simpleProperty",
                              "displayMetadata": {
                                "description": undefined,
                                "displayName": "simpleProperty",
                              },
                              "fieldType": {
                                "string": {
                                  "analyzerOverride": undefined,
                                  "enableAsciiFolding": undefined,
                                  "isLongText": false,
                                  "supportsEfficientLeadingWildcard": false,
                                  "supportsExactMatching": true,
                                },
                                "type": "string",
                              },
                              "typeClasses": [],
                            },
                          ],
                        },
                        "type": "struct",
                      },
                      "typeClasses": [],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "bar",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Customizations on CRUD object type actions are properly defined", () => {
      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "primary",
        properties: {
          "bar": { type: "string" },
          "fizz": { type: "string" },
          "buzz": { type: "string" },
          "primary": { type: "string" },
        },
      });

      const createObjectActionType = defineCreateObjectAction(
        {
          objectType: exampleObjectType,
          actionLevelValidation: [{
            condition: {
              type: "group",
              name: "actionLevelGroup",
            },
          }, {
            condition: {
              type: "group",
              name: "actionLevelGroup2",
            },
            displayMetadata: {
              failureMessage: "Different custom failure message",
              typeClasses: [],
            },
          }],
          parameterOrdering: ["bar", "fizz", "primary"],
          parameterConfiguration: {
            "fizz": {
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
        },
      );

      const modifyObjectActionType = defineModifyObjectAction(
        {
          objectType: exampleObjectType,
          actionLevelValidation: [{
            condition: {
              type: "group",
              name: "actionLevelGroup",
            },
          }, {
            condition: {
              type: "group",
              name: "actionLevelGroup2",
            },
            displayMetadata: {
              failureMessage: "Different custom failure message",
              typeClasses: [],
            },
          }],
          parameterOrdering: ["bar", "fizz"],
          parameterConfiguration: {
            "fizz": {
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
        },
      );

      const createOrModifyObjectActionType = defineCreateOrModifyObjectAction(
        {
          objectType: exampleObjectType,
          actionLevelValidation: [{
            condition: {
              type: "group",
              name: "actionLevelGroup",
            },
          }, {
            condition: {
              type: "group",
              name: "actionLevelGroup2",
            },
            displayMetadata: {
              failureMessage: "Different custom failure message",
              typeClasses: [],
            },
          }],
          parameterOrdering: ["bar", "fizz"],
          parameterConfiguration: {
            "fizz": {
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
        },
      );

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-object-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.foo",
                            "propertyValues": {
                              "bar": {
                                "parameterId": "bar",
                                "type": "parameterId",
                              },
                              "fizz": {
                                "parameterId": "fizz",
                                "type": "parameterId",
                              },
                              "primary": {
                                "parameterId": "primary",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "comparison": {
                                "left": {
                                  "type": "userProperty",
                                  "userProperty": {
                                    "propertyValue": {
                                      "groupIds": {},
                                      "type": "groupIds",
                                    },
                                    "userId": {
                                      "currentUser": {},
                                      "type": "currentUser",
                                    },
                                  },
                                },
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup",
                                      ],
                                    },
                                    "type": "stringList",
                                  },
                                  "type": "staticValue",
                                },
                              },
                              "type": "comparison",
                            },
                            "displayMetadata": {
                              "failureMessage": "Did not satisfy validation",
                              "typeClasses": [],
                            },
                          },
                          "1": {
                            "condition": {
                              "comparison": {
                                "left": {
                                  "type": "userProperty",
                                  "userProperty": {
                                    "propertyValue": {
                                      "groupIds": {},
                                      "type": "groupIds",
                                    },
                                    "userId": {
                                      "currentUser": {},
                                      "type": "currentUser",
                                    },
                                  },
                                },
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup2",
                                      ],
                                    },
                                    "type": "stringList",
                                  },
                                  "type": "staticValue",
                                },
                              },
                              "type": "comparison",
                            },
                            "displayMetadata": {
                              "failureMessage": "Different custom failure message",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "bar": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "fizz": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "and": {
                                  "conditions": [
                                    {
                                      "comparison": {
                                        "left": {
                                          "type": "userProperty",
                                          "userProperty": {
                                            "propertyValue": {
                                              "groupIds": {},
                                              "type": "groupIds",
                                            },
                                            "userId": {
                                              "currentUser": {},
                                              "type": "currentUser",
                                            },
                                          },
                                        },
                                        "operator": "INTERSECTS",
                                        "right": {
                                          "staticValue": {
                                            "stringList": {
                                              "strings": [
                                                "parameterLevelGroup",
                                              ],
                                            },
                                            "type": "stringList",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                    {
                                      "comparison": {
                                        "left": {
                                          "parameterId": "bar",
                                          "type": "parameterId",
                                        },
                                        "operator": "EQUALS",
                                        "right": {
                                          "staticValue": {
                                            "string": "bar",
                                            "type": "string",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                  ],
                                },
                                "type": "and",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "parameterRequired": {
                                    "required": {
                                      "required": {},
                                      "type": "required",
                                    },
                                  },
                                  "type": "parameterRequired",
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "staticValue": {
                                  "string": "default_fizz",
                                  "type": "string",
                                },
                                "type": "staticValue",
                              },
                              "renderHint": {
                                "textArea": {},
                                "type": "textArea",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "primary": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "TABLE",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": false,
                            "fitHorizontally": true,
                            "frozenColumnCount": 1,
                            "rowHeightInLines": 10,
                          },
                        },
                        "enableLayoutUserSwitch": true,
                      },
                      "description": "",
                      "displayName": "Create exampleObjectType",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "submitButtonDisplayMetadata": {
                        "intent": "DANGER",
                        "text": "Custom button",
                      },
                      "successMessage": [
                        {
                          "message": "Custom success message",
                          "type": "message",
                        },
                      ],
                      "typeClasses": [],
                      "undoButtonConfiguration": true,
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.foo",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "bar",
                      "fizz",
                      "primary",
                    ],
                    "parameters": {
                      "bar": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Bar",
                          "typeClasses": [],
                        },
                        "id": "bar",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "fizz": {
                        "displayMetadata": {
                          "description": "fizz_description",
                          "displayName": "fizz_display",
                          "typeClasses": [],
                        },
                        "id": "fizz",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "primary": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Primary",
                          "typeClasses": [],
                        },
                        "id": "primary",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.create-or-modify-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addOrModifyObjectRuleV2": {
                            "objectToModify": "objectToCreateOrModifyParameter",
                            "propertyValues": {
                              "bar": {
                                "parameterId": "bar",
                                "type": "parameterId",
                              },
                              "fizz": {
                                "parameterId": "fizz",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addOrModifyObjectRuleV2",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "comparison": {
                                "left": {
                                  "type": "userProperty",
                                  "userProperty": {
                                    "propertyValue": {
                                      "groupIds": {},
                                      "type": "groupIds",
                                    },
                                    "userId": {
                                      "currentUser": {},
                                      "type": "currentUser",
                                    },
                                  },
                                },
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup",
                                      ],
                                    },
                                    "type": "stringList",
                                  },
                                  "type": "staticValue",
                                },
                              },
                              "type": "comparison",
                            },
                            "displayMetadata": {
                              "failureMessage": "Did not satisfy validation",
                              "typeClasses": [],
                            },
                          },
                          "1": {
                            "condition": {
                              "comparison": {
                                "left": {
                                  "type": "userProperty",
                                  "userProperty": {
                                    "propertyValue": {
                                      "groupIds": {},
                                      "type": "groupIds",
                                    },
                                    "userId": {
                                      "currentUser": {},
                                      "type": "currentUser",
                                    },
                                  },
                                },
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup2",
                                      ],
                                    },
                                    "type": "stringList",
                                  },
                                  "type": "staticValue",
                                },
                              },
                              "type": "comparison",
                            },
                            "displayMetadata": {
                              "failureMessage": "Different custom failure message",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "bar": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToCreateOrModifyParameter",
                                  "propertyTypeId": "bar",
                                },
                                "type": "objectParameterPropertyValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "fizz": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "and": {
                                  "conditions": [
                                    {
                                      "comparison": {
                                        "left": {
                                          "type": "userProperty",
                                          "userProperty": {
                                            "propertyValue": {
                                              "groupIds": {},
                                              "type": "groupIds",
                                            },
                                            "userId": {
                                              "currentUser": {},
                                              "type": "currentUser",
                                            },
                                          },
                                        },
                                        "operator": "INTERSECTS",
                                        "right": {
                                          "staticValue": {
                                            "stringList": {
                                              "strings": [
                                                "parameterLevelGroup",
                                              ],
                                            },
                                            "type": "stringList",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                    {
                                      "comparison": {
                                        "left": {
                                          "parameterId": "bar",
                                          "type": "parameterId",
                                        },
                                        "operator": "EQUALS",
                                        "right": {
                                          "staticValue": {
                                            "string": "bar",
                                            "type": "string",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                  ],
                                },
                                "type": "and",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "parameterRequired": {
                                    "required": {
                                      "required": {},
                                      "type": "required",
                                    },
                                  },
                                  "type": "parameterRequired",
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "staticValue": {
                                  "string": "default_fizz",
                                  "type": "string",
                                },
                                "type": "staticValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "objectToCreateOrModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectQuery": {
                                  "objectQuery": {},
                                  "type": "objectQuery",
                                },
                                "type": "objectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-or-modify-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "TABLE",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": false,
                            "fitHorizontally": true,
                            "frozenColumnCount": 1,
                            "rowHeightInLines": 10,
                          },
                        },
                        "enableLayoutUserSwitch": true,
                      },
                      "description": "",
                      "displayName": "Create or Modify exampleObjectType",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "submitButtonDisplayMetadata": {
                        "intent": "DANGER",
                        "text": "Custom button",
                      },
                      "successMessage": [
                        {
                          "message": "Custom success message",
                          "type": "message",
                        },
                      ],
                      "typeClasses": [],
                      "undoButtonConfiguration": true,
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.foo",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToCreateOrModifyParameter",
                      "bar",
                      "fizz",
                    ],
                    "parameters": {
                      "bar": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Bar",
                          "typeClasses": [],
                        },
                        "id": "bar",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "fizz": {
                        "displayMetadata": {
                          "description": "fizz_description",
                          "displayName": "fizz_display",
                          "typeClasses": [],
                        },
                        "id": "fizz",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectToCreateOrModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Create or modify object",
                          "typeClasses": [],
                        },
                        "id": "objectToCreateOrModifyParameter",
                        "type": {
                          "objectReference": {
                            "maybeCreateObjectOption": {
                              "type": "userInput",
                              "userInput": {},
                            },
                            "objectTypeId": "com.palantir.foo",
                          },
                          "type": "objectReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.modify-object-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyObjectRule": {
                            "objectToModify": "objectToModifyParameter",
                            "propertyValues": {
                              "bar": {
                                "parameterId": "bar",
                                "type": "parameterId",
                              },
                              "fizz": {
                                "parameterId": "fizz",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "modifyObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "comparison": {
                                "left": {
                                  "type": "userProperty",
                                  "userProperty": {
                                    "propertyValue": {
                                      "groupIds": {},
                                      "type": "groupIds",
                                    },
                                    "userId": {
                                      "currentUser": {},
                                      "type": "currentUser",
                                    },
                                  },
                                },
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup",
                                      ],
                                    },
                                    "type": "stringList",
                                  },
                                  "type": "staticValue",
                                },
                              },
                              "type": "comparison",
                            },
                            "displayMetadata": {
                              "failureMessage": "Did not satisfy validation",
                              "typeClasses": [],
                            },
                          },
                          "1": {
                            "condition": {
                              "comparison": {
                                "left": {
                                  "type": "userProperty",
                                  "userProperty": {
                                    "propertyValue": {
                                      "groupIds": {},
                                      "type": "groupIds",
                                    },
                                    "userId": {
                                      "currentUser": {},
                                      "type": "currentUser",
                                    },
                                  },
                                },
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "actionLevelGroup2",
                                      ],
                                    },
                                    "type": "stringList",
                                  },
                                  "type": "staticValue",
                                },
                              },
                              "type": "comparison",
                            },
                            "displayMetadata": {
                              "failureMessage": "Different custom failure message",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "bar": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToModifyParameter",
                                  "propertyTypeId": "bar",
                                },
                                "type": "objectParameterPropertyValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "fizz": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "and": {
                                  "conditions": [
                                    {
                                      "comparison": {
                                        "left": {
                                          "type": "userProperty",
                                          "userProperty": {
                                            "propertyValue": {
                                              "groupIds": {},
                                              "type": "groupIds",
                                            },
                                            "userId": {
                                              "currentUser": {},
                                              "type": "currentUser",
                                            },
                                          },
                                        },
                                        "operator": "INTERSECTS",
                                        "right": {
                                          "staticValue": {
                                            "stringList": {
                                              "strings": [
                                                "parameterLevelGroup",
                                              ],
                                            },
                                            "type": "stringList",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                    {
                                      "comparison": {
                                        "left": {
                                          "parameterId": "bar",
                                          "type": "parameterId",
                                        },
                                        "operator": "EQUALS",
                                        "right": {
                                          "staticValue": {
                                            "string": "bar",
                                            "type": "string",
                                          },
                                          "type": "staticValue",
                                        },
                                      },
                                      "type": "comparison",
                                    },
                                  ],
                                },
                                "type": "and",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "parameterRequired": {
                                    "required": {
                                      "required": {},
                                      "type": "required",
                                    },
                                  },
                                  "type": "parameterRequired",
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "staticValue": {
                                  "string": "default_fizz",
                                  "type": "string",
                                },
                                "type": "staticValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "objectToModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectQuery": {
                                  "objectQuery": {},
                                  "type": "objectQuery",
                                },
                                "type": "objectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-object-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "TABLE",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": false,
                            "fitHorizontally": true,
                            "frozenColumnCount": 1,
                            "rowHeightInLines": 10,
                          },
                        },
                        "enableLayoutUserSwitch": true,
                      },
                      "description": "",
                      "displayName": "Modify exampleObjectType",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "submitButtonDisplayMetadata": {
                        "intent": "DANGER",
                        "text": "Custom button",
                      },
                      "successMessage": [
                        {
                          "message": "Custom success message",
                          "type": "message",
                        },
                      ],
                      "typeClasses": [],
                      "undoButtonConfiguration": true,
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.foo",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToModifyParameter",
                      "bar",
                      "fizz",
                    ],
                    "parameters": {
                      "bar": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Bar",
                          "typeClasses": [],
                        },
                        "id": "bar",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "fizz": {
                        "displayMetadata": {
                          "description": "fizz_description",
                          "displayName": "fizz_display",
                          "typeClasses": [],
                        },
                        "id": "fizz",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Modify object",
                          "typeClasses": [],
                        },
                        "id": "objectToModifyParameter",
                        "type": {
                          "objectReference": {
                            "objectTypeId": "com.palantir.foo",
                          },
                          "type": "objectReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {
                "com.palantir.create-object-foo": {
                  "restrictionStatus": {
                    "hasRolesApplied": true,
                    "ontologyPackageRid": null,
                    "publicProject": false,
                  },
                },
                "com.palantir.create-or-modify-foo": {
                  "restrictionStatus": {
                    "hasRolesApplied": true,
                    "ontologyPackageRid": null,
                    "publicProject": false,
                  },
                },
                "com.palantir.modify-object-foo": {
                  "restrictionStatus": {
                    "hasRolesApplied": true,
                    "ontologyPackageRid": null,
                    "publicProject": false,
                  },
                },
              },
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.foo": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.foo",
                        "propertyMapping": {
                          "bar": {
                            "column": "bar",
                            "type": "column",
                          },
                          "buzz": {
                            "column": "buzz",
                            "type": "column",
                          },
                          "fizz": {
                            "column": "fizz",
                            "type": "column",
                          },
                          "primary": {
                            "column": "primary",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.foo",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.foo",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "exampleObjectType",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "exampleObjectTypes",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "primary",
                  ],
                  "propertyTypes": {
                    "bar": {
                      "apiName": "bar",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Bar",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "buzz": {
                      "apiName": "buzz",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Buzz",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "fizz": {
                      "apiName": "fizz",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Fizz",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "primary": {
                      "apiName": "primary",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Primary",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "bar",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Non-parameter mapped properties are properly defined", () => {
      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: {
          "bar": { type: "string" },
          "fizz": { type: "string" },
          "buzz": { type: "timestamp" },
        },
      });

      const createObjectActionType = defineCreateObjectAction(
        {
          objectType: exampleObjectType,
          nonParameterMappings: {
            "fizz": {
              type: "currentUser",
            },
            "buzz": {
              type: "currentTime",
            },
          },
        },
      );
      const modifyObjectActionType = defineModifyObjectAction(
        {
          objectType: exampleObjectType,
          nonParameterMappings: {
            "fizz": {
              type: "currentUser",
            },
            "buzz": {
              type: "currentTime",
            },
          },
        },
      );
      const createOrModifyObjectActionType = defineCreateOrModifyObjectAction(
        {
          objectType: exampleObjectType,
          nonParameterMappings: {
            "fizz": {
              type: "currentUser",
            },
            "buzz": {
              type: "currentTime",
            },
          },
        },
      );

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
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-example-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfacePropertyValues": {
                              "com.palantir.property1": {
                                "logicRuleValue": {
                                  "currentUser": {},
                                  "type": "currentUser",
                                },
                                "type": "logicRuleValue",
                              },
                              "com.palantir.property2": {
                                "logicRuleValue": {
                                  "currentTime": {},
                                  "type": "currentTime",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "objectTypeParameter": "objectTypeParameter",
                            "sharedPropertyValues": {},
                          },
                          "type": "addInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectTypeParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectTypeReference": {
                                  "objectTypeReference": {
                                    "interfaceTypeRids": [
                                      "com.palantir.exampleInterface",
                                    ],
                                  },
                                  "type": "objectTypeReference",
                                },
                                "type": "objectTypeReference",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-example-interface",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectTypeParameter",
                    ],
                    "parameters": {
                      "objectTypeParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to create",
                          "typeClasses": [],
                        },
                        "id": "objectTypeParameter",
                        "type": {
                          "objectTypeReference": {
                            "interfaceTypeRids": [
                              "com.palantir.exampleInterface",
                            ],
                          },
                          "type": "objectTypeReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.create-object-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.foo",
                            "propertyValues": {
                              "bar": {
                                "parameterId": "bar",
                                "type": "parameterId",
                              },
                              "buzz": {
                                "currentTime": {},
                                "type": "currentTime",
                              },
                              "fizz": {
                                "currentUser": {},
                                "type": "currentUser",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "bar": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create exampleObjectType",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.foo",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "bar",
                    ],
                    "parameters": {
                      "bar": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Bar",
                          "typeClasses": [],
                        },
                        "id": "bar",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.create-or-modify-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addOrModifyObjectRuleV2": {
                            "objectToModify": "objectToCreateOrModifyParameter",
                            "propertyValues": {
                              "buzz": {
                                "currentTime": {},
                                "type": "currentTime",
                              },
                              "fizz": {
                                "currentUser": {},
                                "type": "currentUser",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addOrModifyObjectRuleV2",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectToCreateOrModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectQuery": {
                                  "objectQuery": {},
                                  "type": "objectQuery",
                                },
                                "type": "objectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-or-modify-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create or Modify exampleObjectType",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.foo",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToCreateOrModifyParameter",
                    ],
                    "parameters": {
                      "objectToCreateOrModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Create or modify object",
                          "typeClasses": [],
                        },
                        "id": "objectToCreateOrModifyParameter",
                        "type": {
                          "objectReference": {
                            "maybeCreateObjectOption": {
                              "autoGenerated": {},
                              "type": "autoGenerated",
                            },
                            "objectTypeId": "com.palantir.foo",
                          },
                          "type": "objectReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.modify-example-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfaceObjectToModifyParameter": "interfaceObjectToModifyParameter",
                            "interfacePropertyValues": {
                              "com.palantir.property1": {
                                "logicRuleValue": {
                                  "currentUser": {},
                                  "type": "currentUser",
                                },
                                "type": "logicRuleValue",
                              },
                              "com.palantir.property2": {
                                "logicRuleValue": {
                                  "currentTime": {},
                                  "type": "currentTime",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "sharedPropertyValues": {},
                          },
                          "type": "modifyInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "interfaceObjectToModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "interfaceObjectQuery": {
                                  "interfaceObjectQuery": {},
                                  "type": "interfaceObjectQuery",
                                },
                                "type": "interfaceObjectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-example-interface",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Modify exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "interfaceObjectToModifyParameter",
                    ],
                    "parameters": {
                      "interfaceObjectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Object type to modify",
                          "typeClasses": [],
                        },
                        "id": "interfaceObjectToModifyParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.exampleInterface",
                          },
                          "type": "interfaceReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.modify-object-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyObjectRule": {
                            "objectToModify": "objectToModifyParameter",
                            "propertyValues": {
                              "buzz": {
                                "currentTime": {},
                                "type": "currentTime",
                              },
                              "fizz": {
                                "currentUser": {},
                                "type": "currentUser",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "modifyObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectToModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectQuery": {
                                  "objectQuery": {},
                                  "type": "objectQuery",
                                },
                                "type": "objectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-object-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Modify exampleObjectType",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.foo",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToModifyParameter",
                    ],
                    "parameters": {
                      "objectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Modify object",
                          "typeClasses": [],
                        },
                        "id": "objectToModifyParameter",
                        "type": {
                          "objectReference": {
                            "objectTypeId": "com.palantir.foo",
                          },
                          "type": "objectReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.exampleInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.property1": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.property1",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property1",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                        "typeClasses": [
                          {
                            "kind": "render_hint",
                            "name": "SELECTABLE",
                          },
                          {
                            "kind": "render_hint",
                            "name": "SORTABLE",
                          },
                        ],
                        "valueType": undefined,
                      },
                    },
                    "com.palantir.property2": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.property2",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property2",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                        "typeClasses": [
                          {
                            "kind": "render_hint",
                            "name": "SELECTABLE",
                          },
                          {
                            "kind": "render_hint",
                            "name": "SORTABLE",
                          },
                        ],
                        "valueType": undefined,
                      },
                    },
                  },
                  "propertiesV3": {
                    "com.palantir.property1": {
                      "sharedPropertyBasedPropertyType": {
                        "requireImplementation": true,
                        "sharedPropertyType": {
                          "aliases": [],
                          "apiName": "com.palantir.property1",
                          "baseFormatter": undefined,
                          "dataConstraints": undefined,
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "property1",
                            "visibility": "NORMAL",
                          },
                          "gothamMapping": undefined,
                          "indexedForSearch": true,
                          "type": {
                            "string": {
                              "analyzerOverride": undefined,
                              "enableAsciiFolding": undefined,
                              "isLongText": false,
                              "supportsEfficientLeadingWildcard": false,
                              "supportsExactMatching": true,
                            },
                            "type": "string",
                          },
                          "typeClasses": [
                            {
                              "kind": "render_hint",
                              "name": "SELECTABLE",
                            },
                            {
                              "kind": "render_hint",
                              "name": "SORTABLE",
                            },
                          ],
                          "valueType": undefined,
                        },
                      },
                      "type": "sharedPropertyBasedPropertyType",
                    },
                    "com.palantir.property2": {
                      "sharedPropertyBasedPropertyType": {
                        "requireImplementation": true,
                        "sharedPropertyType": {
                          "aliases": [],
                          "apiName": "com.palantir.property2",
                          "baseFormatter": undefined,
                          "dataConstraints": undefined,
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "property2",
                            "visibility": "NORMAL",
                          },
                          "gothamMapping": undefined,
                          "indexedForSearch": true,
                          "type": {
                            "string": {
                              "analyzerOverride": undefined,
                              "enableAsciiFolding": undefined,
                              "isLongText": false,
                              "supportsEfficientLeadingWildcard": false,
                              "supportsExactMatching": true,
                            },
                            "type": "string",
                          },
                          "typeClasses": [
                            {
                              "kind": "render_hint",
                              "name": "SELECTABLE",
                            },
                            {
                              "kind": "render_hint",
                              "name": "SORTABLE",
                            },
                          ],
                          "valueType": undefined,
                        },
                      },
                      "type": "sharedPropertyBasedPropertyType",
                    },
                  },
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.foo": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.foo",
                        "propertyMapping": {
                          "bar": {
                            "column": "bar",
                            "type": "column",
                          },
                          "buzz": {
                            "column": "buzz",
                            "type": "column",
                          },
                          "fizz": {
                            "column": "fizz",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.foo",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.foo",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "exampleObjectType",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "exampleObjectTypes",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "bar",
                  ],
                  "propertyTypes": {
                    "bar": {
                      "apiName": "bar",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Bar",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "buzz": {
                      "apiName": "buzz",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Buzz",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "timestamp": {},
                        "type": "timestamp",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "fizz": {
                      "apiName": "fizz",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Fizz",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "bar",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
            },
            "sharedPropertyTypes": {
              "com.palantir.property1": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.property1",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "property1",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
                  "type": {
                    "string": {
                      "analyzerOverride": undefined,
                      "enableAsciiFolding": undefined,
                      "isLongText": false,
                      "supportsEfficientLeadingWildcard": false,
                      "supportsExactMatching": true,
                    },
                    "type": "string",
                  },
                  "typeClasses": [
                    {
                      "kind": "render_hint",
                      "name": "SELECTABLE",
                    },
                    {
                      "kind": "render_hint",
                      "name": "SORTABLE",
                    },
                  ],
                  "valueType": undefined,
                },
              },
              "com.palantir.property2": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.property2",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "property2",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
                  "type": {
                    "string": {
                      "analyzerOverride": undefined,
                      "enableAsciiFolding": undefined,
                      "isLongText": false,
                      "supportsEfficientLeadingWildcard": false,
                      "supportsExactMatching": true,
                    },
                    "type": "string",
                  },
                  "typeClasses": [
                    {
                      "kind": "render_hint",
                      "name": "SELECTABLE",
                    },
                    {
                      "kind": "render_hint",
                      "name": "SORTABLE",
                    },
                  ],
                  "valueType": undefined,
                },
              },
            },
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
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
          "name": { type: "string" },
          "id": { type: "string" },
        },
      });
      expect(() => {
        const createAction = defineCreateObjectAction({
          objectType: sampleObject,
          parameterConfiguration: {
            "name": {
              displayName: "Name",
            },
            "custom_parameter": {
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
            "custom_parameter": {
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
          "bar": { type: "string" },
          "fizz": { type: "string" },
          "buzz": { type: "string" },
          "primary": { type: "string" },
        },
      });
      expect(() =>
        defineCreateObjectAction({
          objectType: exampleObjectType,
          parameterConfiguration: {
            "buzz": {
              defaultValue: {
                type: "staticValue",
                staticValue: {
                  type: "boolean",
                  boolean: true,
                },
              },
            },
          },
        })
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
          "name": {
            type: "string",
            description: "The name of the test object",
          },
          "id": { type: "string", description: "The ID of the test object" },
        },
      });
      expect(() =>
        defineAction({
          apiName: "foo",
          displayName: "exampleAction",
          status: "active",
          rules: [{
            type: "modifyObjectRule",
            modifyObjectRule: {
              objectToModify: "sampleObject",
              propertyValues: {
                "name": {
                  type: "parameterId",
                  parameterId: "name",
                },
              },
              structFieldValues: {},
            },
          }],
          parameters: [{
            id: "name",
            displayName: "Name",
            type: "string",
            validation: { required: true, allowedValues: { type: "text" } },
          }],
        })
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
          "id": { type: "string", displayName: "ID", description: "dummy" },
          "managedBy": { type: "string" },
        },
      });
      defineModifyObjectAction({
        objectType: employeeObject,
        parameterConfiguration: {
          [MODIFY_OBJECT_PARAMETER]: {
            displayName: "Chose a manager to modify",
            description: "Description",
            conditionalOverrides: [{
              type: "visibility",
              condition: {
                type: "group",
                name: "supervisors",
              },
            }],
          },
        },
      });
      defineCreateOrModifyObjectAction({
        objectType: employeeObject,
        parameterConfiguration: {
          [CREATE_OR_MODIFY_OBJECT_PARAMETER]: {
            displayName: "Chose a manager to modify or create a new one",
            description: "Description",
            conditionalOverrides: [{
              type: "visibility",
              condition: {
                type: "group",
                name: "supervisors",
              },
            }],
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
            conditionalOverrides: [{
              type: "visibility",
              condition: {
                type: "group",
                name: "supervisors",
              },
            }],
          },
        },
      });
      defineModifyInterfaceObjectAction({
        interfaceType: exampleInterface,
        parameterConfiguration: {
          [MODIFY_INTERFACE_OBJECT_PARAMETER]: {
            displayName: "Choose an object to modify",
            description: "Description",
            conditionalOverrides: [{
              type: "visibility",
              condition: {
                type: "group",
                name: "supervisors",
              },
            }],
          },
        },
      });
      defineDeleteInterfaceObjectAction({
        interfaceType: exampleInterface,
        parameterConfiguration: {
          [DELETE_OBJECT_PARAMETER]: {
            displayName: "Chose managers to delete",
            description: "Description",
            conditionalOverrides: [{
              type: "visibility",
              condition: {
                type: "group",
                name: "supervisors",
              },
            }],
          },
        },
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-example-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfacePropertyValues": {
                              "com.palantir.property1": {
                                "logicRuleValue": {
                                  "parameterId": "com.palantir.property1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "objectTypeParameter": "objectTypeParameter",
                            "sharedPropertyValues": {
                              "com.palantir.property1": {
                                "parameterId": "com.palantir.property1",
                                "type": "parameterId",
                              },
                            },
                          },
                          "type": "addInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "com.palantir.property1": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "objectTypeParameter": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "comparison": {
                                  "left": {
                                    "type": "userProperty",
                                    "userProperty": {
                                      "propertyValue": {
                                        "groupIds": {},
                                        "type": "groupIds",
                                      },
                                      "userId": {
                                        "currentUser": {},
                                        "type": "currentUser",
                                      },
                                    },
                                  },
                                  "operator": "INTERSECTS",
                                  "right": {
                                    "staticValue": {
                                      "stringList": {
                                        "strings": [
                                          "supervisors",
                                        ],
                                      },
                                      "type": "stringList",
                                    },
                                    "type": "staticValue",
                                  },
                                },
                                "type": "comparison",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "type": "visibility",
                                  "visibility": {
                                    "visibility": {
                                      "editable": {},
                                      "type": "editable",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectTypeReference": {
                                  "objectTypeReference": {
                                    "interfaceTypeRids": [
                                      "com.palantir.exampleInterface",
                                    ],
                                  },
                                  "type": "objectTypeReference",
                                },
                                "type": "objectTypeReference",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-example-interface",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectTypeParameter",
                      "com.palantir.property1",
                    ],
                    "parameters": {
                      "com.palantir.property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "property1",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectTypeParameter": {
                        "displayMetadata": {
                          "description": "Description",
                          "displayName": "Choose an object to create",
                          "typeClasses": [],
                        },
                        "id": "objectTypeParameter",
                        "type": {
                          "objectTypeReference": {
                            "interfaceTypeRids": [
                              "com.palantir.exampleInterface",
                            ],
                          },
                          "type": "objectTypeReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.create-or-modify-employee": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addOrModifyObjectRuleV2": {
                            "objectToModify": "objectToCreateOrModifyParameter",
                            "propertyValues": {
                              "managedBy": {
                                "parameterId": "managedBy",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addOrModifyObjectRuleV2",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "managedBy": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToCreateOrModifyParameter",
                                  "propertyTypeId": "managedBy",
                                },
                                "type": "objectParameterPropertyValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "objectToCreateOrModifyParameter": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "comparison": {
                                  "left": {
                                    "type": "userProperty",
                                    "userProperty": {
                                      "propertyValue": {
                                        "groupIds": {},
                                        "type": "groupIds",
                                      },
                                      "userId": {
                                        "currentUser": {},
                                        "type": "currentUser",
                                      },
                                    },
                                  },
                                  "operator": "INTERSECTS",
                                  "right": {
                                    "staticValue": {
                                      "stringList": {
                                        "strings": [
                                          "supervisors",
                                        ],
                                      },
                                      "type": "stringList",
                                    },
                                    "type": "staticValue",
                                  },
                                },
                                "type": "comparison",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "type": "visibility",
                                  "visibility": {
                                    "visibility": {
                                      "editable": {},
                                      "type": "editable",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectQuery": {
                                  "objectQuery": {},
                                  "type": "objectQuery",
                                },
                                "type": "objectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-or-modify-employee",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create or Modify Employee",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.employee",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToCreateOrModifyParameter",
                      "managedBy",
                    ],
                    "parameters": {
                      "managedBy": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "ManagedBy",
                          "typeClasses": [],
                        },
                        "id": "managedBy",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectToCreateOrModifyParameter": {
                        "displayMetadata": {
                          "description": "Description",
                          "displayName": "Chose a manager to modify or create a new one",
                          "typeClasses": [],
                        },
                        "id": "objectToCreateOrModifyParameter",
                        "type": {
                          "objectReference": {
                            "maybeCreateObjectOption": {
                              "autoGenerated": {},
                              "type": "autoGenerated",
                            },
                            "objectTypeId": "com.palantir.employee",
                          },
                          "type": "objectReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.delete-interface-object-example-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "deleteObjectRule": {
                            "objectToDelete": "objectToDeleteParameter",
                          },
                          "type": "deleteObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectToDeleteParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "interfaceObjectQuery": {
                                  "interfaceObjectQuery": {},
                                  "type": "interfaceObjectQuery",
                                },
                                "type": "interfaceObjectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.delete-interface-object-example-interface",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Delete exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToDeleteParameter",
                    ],
                    "parameters": {
                      "objectToDeleteParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Delete object",
                          "typeClasses": [],
                        },
                        "id": "objectToDeleteParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.exampleInterface",
                          },
                          "type": "interfaceReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.delete-object-employee": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "deleteObjectRule": {
                            "objectToDelete": "objectToDeleteParameter",
                          },
                          "type": "deleteObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "objectToDeleteParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectQuery": {
                                  "objectQuery": {},
                                  "type": "objectQuery",
                                },
                                "type": "objectQuery",
                              },
                              "required": {
                                "listLengthValidation": {
                                  "maxLength": 5,
                                  "minLength": 1,
                                },
                                "type": "listLengthValidation",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.delete-object-employee",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Delete Employee",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.employee",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToDeleteParameter",
                    ],
                    "parameters": {
                      "objectToDeleteParameter": {
                        "displayMetadata": {
                          "description": "Description",
                          "displayName": "Chose managers to delete",
                          "typeClasses": [],
                        },
                        "id": "objectToDeleteParameter",
                        "type": {
                          "objectReferenceList": {
                            "objectTypeId": "com.palantir.employee",
                          },
                          "type": "objectReferenceList",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.modify-example-interface": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyInterfaceRule": {
                            "interfaceApiName": "com.palantir.exampleInterface",
                            "interfaceObjectToModifyParameter": "interfaceObjectToModifyParameter",
                            "interfacePropertyValues": {
                              "com.palantir.property1": {
                                "logicRuleValue": {
                                  "parameterId": "com.palantir.property1",
                                  "type": "parameterId",
                                },
                                "type": "logicRuleValue",
                              },
                            },
                            "sharedPropertyValues": {
                              "com.palantir.property1": {
                                "parameterId": "com.palantir.property1",
                                "type": "parameterId",
                              },
                            },
                          },
                          "type": "modifyInterfaceRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "com.palantir.property1": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "interfaceObjectToModifyParameter": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "comparison": {
                                  "left": {
                                    "type": "userProperty",
                                    "userProperty": {
                                      "propertyValue": {
                                        "groupIds": {},
                                        "type": "groupIds",
                                      },
                                      "userId": {
                                        "currentUser": {},
                                        "type": "currentUser",
                                      },
                                    },
                                  },
                                  "operator": "INTERSECTS",
                                  "right": {
                                    "staticValue": {
                                      "stringList": {
                                        "strings": [
                                          "supervisors",
                                        ],
                                      },
                                      "type": "stringList",
                                    },
                                    "type": "staticValue",
                                  },
                                },
                                "type": "comparison",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "type": "visibility",
                                  "visibility": {
                                    "visibility": {
                                      "editable": {},
                                      "type": "editable",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "interfaceObjectQuery": {
                                  "interfaceObjectQuery": {},
                                  "type": "interfaceObjectQuery",
                                },
                                "type": "interfaceObjectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-example-interface",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Modify exampleInterface",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [
                        "com.palantir.exampleInterface",
                      ],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "interfaceObjectToModifyParameter",
                      "com.palantir.property1",
                    ],
                    "parameters": {
                      "com.palantir.property1": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "property1",
                          "typeClasses": [],
                        },
                        "id": "com.palantir.property1",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "interfaceObjectToModifyParameter": {
                        "displayMetadata": {
                          "description": "Description",
                          "displayName": "Choose an object to modify",
                          "typeClasses": [],
                        },
                        "id": "interfaceObjectToModifyParameter",
                        "type": {
                          "interfaceReference": {
                            "interfaceTypeRid": "com.palantir.exampleInterface",
                          },
                          "type": "interfaceReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.modify-object-employee": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyObjectRule": {
                            "objectToModify": "objectToModifyParameter",
                            "propertyValues": {
                              "managedBy": {
                                "parameterId": "managedBy",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "modifyObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "managedBy": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToModifyParameter",
                                  "propertyTypeId": "managedBy",
                                },
                                "type": "objectParameterPropertyValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "objectToModifyParameter": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "comparison": {
                                  "left": {
                                    "type": "userProperty",
                                    "userProperty": {
                                      "propertyValue": {
                                        "groupIds": {},
                                        "type": "groupIds",
                                      },
                                      "userId": {
                                        "currentUser": {},
                                        "type": "currentUser",
                                      },
                                    },
                                  },
                                  "operator": "INTERSECTS",
                                  "right": {
                                    "staticValue": {
                                      "stringList": {
                                        "strings": [
                                          "supervisors",
                                        ],
                                      },
                                      "type": "stringList",
                                    },
                                    "type": "staticValue",
                                  },
                                },
                                "type": "comparison",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "type": "visibility",
                                  "visibility": {
                                    "visibility": {
                                      "editable": {},
                                      "type": "editable",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectQuery": {
                                  "objectQuery": {},
                                  "type": "objectQuery",
                                },
                                "type": "objectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-object-employee",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Modify Employee",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.employee",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToModifyParameter",
                      "managedBy",
                    ],
                    "parameters": {
                      "managedBy": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "ManagedBy",
                          "typeClasses": [],
                        },
                        "id": "managedBy",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "objectToModifyParameter": {
                        "displayMetadata": {
                          "description": "Description",
                          "displayName": "Chose a manager to modify",
                          "typeClasses": [],
                        },
                        "id": "objectToModifyParameter",
                        "type": {
                          "objectReference": {
                            "objectTypeId": "com.palantir.employee",
                          },
                          "type": "objectReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {
              "com.palantir.exampleInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.exampleInterface",
                  "displayMetadata": {
                    "description": "exampleInterface",
                    "displayName": "exampleInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
                  },
                  "extendsInterfaces": [],
                  "links": [],
                  "properties": [],
                  "propertiesV2": {
                    "com.palantir.property1": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.property1",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property1",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                        "typeClasses": [
                          {
                            "kind": "render_hint",
                            "name": "SELECTABLE",
                          },
                          {
                            "kind": "render_hint",
                            "name": "SORTABLE",
                          },
                        ],
                        "valueType": undefined,
                      },
                    },
                  },
                  "propertiesV3": {
                    "com.palantir.property1": {
                      "sharedPropertyBasedPropertyType": {
                        "requireImplementation": true,
                        "sharedPropertyType": {
                          "aliases": [],
                          "apiName": "com.palantir.property1",
                          "baseFormatter": undefined,
                          "dataConstraints": undefined,
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "property1",
                            "visibility": "NORMAL",
                          },
                          "gothamMapping": undefined,
                          "indexedForSearch": true,
                          "type": {
                            "string": {
                              "analyzerOverride": undefined,
                              "enableAsciiFolding": undefined,
                              "isLongText": false,
                              "supportsEfficientLeadingWildcard": false,
                              "supportsExactMatching": true,
                            },
                            "type": "string",
                          },
                          "typeClasses": [
                            {
                              "kind": "render_hint",
                              "name": "SELECTABLE",
                            },
                            {
                              "kind": "render_hint",
                              "name": "SORTABLE",
                            },
                          ],
                          "valueType": undefined,
                        },
                      },
                      "type": "sharedPropertyBasedPropertyType",
                    },
                  },
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.employee": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.employee",
                        "propertyMapping": {
                          "id": {
                            "column": "id",
                            "type": "column",
                          },
                          "managedBy": {
                            "column": "managedBy",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.employee",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.employee",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "Employee",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "Employees",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "id",
                  ],
                  "propertyTypes": {
                    "id": {
                      "apiName": "id",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": "dummy",
                        "displayName": "ID",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "managedBy": {
                      "apiName": "managedBy",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "ManagedBy",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "id",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
            },
            "sharedPropertyTypes": {
              "com.palantir.property1": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.property1",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "property1",
                    "visibility": "NORMAL",
                  },
                  "gothamMapping": undefined,
                  "indexedForSearch": true,
                  "type": {
                    "string": {
                      "analyzerOverride": undefined,
                      "enableAsciiFolding": undefined,
                      "isLongText": false,
                      "supportsEfficientLeadingWildcard": false,
                      "supportsExactMatching": true,
                    },
                    "type": "string",
                  },
                  "typeClasses": [
                    {
                      "kind": "render_hint",
                      "name": "SELECTABLE",
                    },
                    {
                      "kind": "render_hint",
                      "name": "SORTABLE",
                    },
                  ],
                  "valueType": undefined,
                },
              },
            },
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Conditional overrides on actions are properly defined", () => {
      const exampleAction = defineAction({
        apiName: "foo",
        displayName: "exampleAction",
        status: "active",
        rules: [{
          type: "modifyObjectRule",
          modifyObjectRule: {
            objectToModify: "objectToModifyParameter",
            propertyValues: {
              "bar": {
                type: "parameterId",
                parameterId: "param1",
              },
            },
            structFieldValues: {},
          },
        }],
        parameters: [{
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
        }, {
          id: "objectToModifyParameter",
          displayName: "objectToModifyParameter",
          type: "objectTypeReference",
          validation: {
            required: true,
            allowedValues: { type: "objectTypeReference", interfaceTypes: [] },
            defaultVisibility: "editable",
          },
        }],
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
          {
            "importedOntology": {
              "actionTypes": {},
              "blockPermissionInformation": {
                "actionTypes": {},
                "linkTypes": {},
                "objectTypes": {},
              },
              "interfaceTypes": {},
              "linkTypes": {},
              "objectTypes": {},
              "sharedPropertyTypes": {},
            },
            "importedValueTypes": {
              "valueTypes": [],
            },
            "ontology": {
              "actionTypes": {
                "com.palantir.foo": {
                  "actionType": {
                    "actionTypeLogic": {
                      "logic": {
                        "rules": [
                          {
                            "modifyObjectRule": {
                              "objectToModify": "objectToModifyParameter",
                              "propertyValues": {
                                "bar": {
                                  "parameterId": "param1",
                                  "type": "parameterId",
                                },
                              },
                              "structFieldValues": {},
                            },
                            "type": "modifyObjectRule",
                          },
                        ],
                      },
                      "validation": {
                        "actionTypeLevelValidation": {
                          "rules": {
                            "0": {
                              "condition": {
                                "true": {},
                                "type": "true",
                              },
                              "displayMetadata": {
                                "failureMessage": "",
                                "typeClasses": [],
                              },
                            },
                          },
                        },
                        "parameterValidations": {
                          "objectToModifyParameter": {
                            "conditionalOverrides": [],
                            "defaultValidation": {
                              "display": {
                                "renderHint": {
                                  "dropdown": {},
                                  "type": "dropdown",
                                },
                                "visibility": {
                                  "editable": {},
                                  "type": "editable",
                                },
                              },
                              "validation": {
                                "allowedValues": {
                                  "objectTypeReference": {
                                    "objectTypeReference": {
                                      "interfaceTypeRids": [],
                                    },
                                    "type": "objectTypeReference",
                                  },
                                  "type": "objectTypeReference",
                                },
                                "required": {
                                  "required": {},
                                  "type": "required",
                                },
                              },
                            },
                          },
                          "param1": {
                            "conditionalOverrides": [
                              {
                                "condition": {
                                  "comparison": {
                                    "left": {
                                      "type": "userProperty",
                                      "userProperty": {
                                        "propertyValue": {
                                          "groupIds": {},
                                          "type": "groupIds",
                                        },
                                        "userId": {
                                          "currentUser": {},
                                          "type": "currentUser",
                                        },
                                      },
                                    },
                                    "operator": "INTERSECTS",
                                    "right": {
                                      "staticValue": {
                                        "stringList": {
                                          "strings": [
                                            "myGroup",
                                          ],
                                        },
                                        "type": "stringList",
                                      },
                                      "type": "staticValue",
                                    },
                                  },
                                  "type": "comparison",
                                },
                                "parameterBlockOverrides": [
                                  {
                                    "type": "visibility",
                                    "visibility": {
                                      "visibility": {
                                        "hidden": {},
                                        "type": "hidden",
                                      },
                                    },
                                  },
                                ],
                              },
                            ],
                            "defaultValidation": {
                              "display": {
                                "renderHint": {
                                  "checkbox": {},
                                  "type": "checkbox",
                                },
                                "visibility": {
                                  "editable": {},
                                  "type": "editable",
                                },
                              },
                              "validation": {
                                "allowedValues": {
                                  "boolean": {
                                    "boolean": {},
                                    "type": "boolean",
                                  },
                                  "type": "boolean",
                                },
                                "required": {
                                  "required": {},
                                  "type": "required",
                                },
                              },
                            },
                          },
                        },
                        "sectionValidations": {},
                      },
                    },
                    "metadata": {
                      "apiName": "com.palantir.foo",
                      "displayMetadata": {
                        "configuration": {
                          "defaultLayout": "FORM",
                          "displayAndFormat": {
                            "table": {
                              "columnWidthByParameterRid": {},
                              "enableFileImport": true,
                              "fitHorizontally": false,
                              "frozenColumnCount": 0,
                              "rowHeightInLines": 1,
                            },
                          },
                          "enableLayoutUserSwitch": false,
                        },
                        "description": "",
                        "displayName": "exampleAction",
                        "icon": {
                          "blueprint": {
                            "color": "#000000",
                            "locator": "edit",
                          },
                          "type": "blueprint",
                        },
                        "successMessage": [],
                        "typeClasses": [],
                      },
                      "entities": {
                        "affectedInterfaceTypes": [],
                        "affectedLinkTypes": [],
                        "affectedObjectTypes": [],
                        "typeGroups": [],
                      },
                      "formContentOrdering": [],
                      "parameterOrdering": [
                        "param1",
                        "objectToModifyParameter",
                      ],
                      "parameters": {
                        "objectToModifyParameter": {
                          "displayMetadata": {
                            "description": "",
                            "displayName": "objectToModifyParameter",
                            "typeClasses": [],
                          },
                          "id": "objectToModifyParameter",
                          "type": {
                            "objectTypeReference": {},
                            "type": "objectTypeReference",
                          },
                        },
                        "param1": {
                          "displayMetadata": {
                            "description": "",
                            "displayName": "param1",
                            "typeClasses": [],
                          },
                          "id": "param1",
                          "type": {
                            "boolean": {},
                            "type": "boolean",
                          },
                        },
                      },
                      "sections": {},
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                    },
                  },
                },
              },
              "blockPermissionInformation": {
                "actionTypes": {},
                "linkTypes": {},
                "objectTypes": {},
              },
              "interfaceTypes": {},
              "linkTypes": {},
              "objectTypes": {},
              "sharedPropertyTypes": {},
            },
            "randomnessKey": undefined,
            "valueTypes": {
              "valueTypes": [],
            },
          }
        `);
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
          "id": { type: "string", displayName: "ID", description: "dummy" },
          "managedBy": { type: "string" },
        },
      });

      const managerObject = defineObject({
        apiName: "manager",
        displayName: "Manager",
        pluralDisplayName: "Managers",
        titlePropertyApiName: "id",
        primaryKeyPropertyApiName: "id",
        properties: {
          "id": { type: "string", displayName: "ID", description: "dummy" },
        },
        editsEnabled: true,
      });

      defineCreateObjectAction({
        objectType: employeeObject,
        parameterOrdering: ["myManager", "id", "managedBy"],
        parameterConfiguration: {
          "myManager": {
            customParameterType: {
              type: "objectReference",
              objectReference: {
                objectTypeId: managerObject.apiName,
              },
            },
          },
          "managedBy": {
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

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-object-employee": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.employee",
                            "propertyValues": {
                              "id": {
                                "parameterId": "id",
                                "type": "parameterId",
                              },
                              "managedBy": {
                                "parameterId": "managedBy",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "id": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "managedBy": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "myManager",
                                  "propertyTypeId": "id",
                                },
                                "type": "objectParameterPropertyValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "myManager": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectQuery": {
                                  "objectQuery": {},
                                  "type": "objectQuery",
                                },
                                "type": "objectQuery",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-employee",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create Employee",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.employee",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "myManager",
                      "id",
                      "managedBy",
                    ],
                    "parameters": {
                      "id": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "ID",
                          "typeClasses": [],
                        },
                        "id": "id",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "managedBy": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "ManagedBy",
                          "typeClasses": [],
                        },
                        "id": "managedBy",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "myManager": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "MyManager",
                          "typeClasses": [],
                        },
                        "id": "myManager",
                        "type": {
                          "objectReference": {
                            "objectTypeId": "com.palantir.manager",
                          },
                          "type": "objectReference",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.employee": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.employee",
                        "propertyMapping": {
                          "id": {
                            "column": "id",
                            "type": "column",
                          },
                          "managedBy": {
                            "column": "managedBy",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.employee",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.employee",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "Employee",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "Employees",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "id",
                  ],
                  "propertyTypes": {
                    "id": {
                      "apiName": "id",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": "dummy",
                        "displayName": "ID",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "managedBy": {
                      "apiName": "managedBy",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "ManagedBy",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "id",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
              "com.palantir.manager": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.manager",
                        "propertyMapping": {
                          "id": {
                            "column": "id",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.manager",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": true,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.manager",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "Manager",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "Managers",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "id",
                  ],
                  "propertyTypes": {
                    "id": {
                      "apiName": "id",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": "dummy",
                        "displayName": "ID",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "id",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
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
          "name": {
            type: "string",
            description: "The name of the test object",
          },
          "id": {
            type: "string",
            displayName: "ID",
            description: "The ID of the test object",
          },
        },
      });
      const createAction = defineCreateObjectAction({
        objectType: sampleObject,
        actionLevelValidation: [{
          condition: {
            type: "group",
            name: "testGroup",
          },
        }],
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-object-sample-object": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.sampleObject",
                            "propertyValues": {
                              "id": {
                                "parameterId": "id",
                                "type": "parameterId",
                              },
                              "name": {
                                "parameterId": "name",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "comparison": {
                                "left": {
                                  "type": "userProperty",
                                  "userProperty": {
                                    "propertyValue": {
                                      "groupIds": {},
                                      "type": "groupIds",
                                    },
                                    "userId": {
                                      "currentUser": {},
                                      "type": "currentUser",
                                    },
                                  },
                                },
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "testGroup",
                                      ],
                                    },
                                    "type": "stringList",
                                  },
                                  "type": "staticValue",
                                },
                              },
                              "type": "comparison",
                            },
                            "displayMetadata": {
                              "failureMessage": "Did not satisfy validation",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "id": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "name": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-sample-object",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create Test Object",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.sampleObject",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "name",
                      "id",
                    ],
                    "parameters": {
                      "id": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "ID",
                          "typeClasses": [],
                        },
                        "id": "id",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "name": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Name",
                          "typeClasses": [],
                        },
                        "id": "name",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {
                "com.palantir.create-object-sample-object": {
                  "restrictionStatus": {
                    "hasRolesApplied": true,
                    "ontologyPackageRid": null,
                    "publicProject": false,
                  },
                },
              },
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.sampleObject": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.sampleObject",
                        "propertyMapping": {
                          "id": {
                            "column": "id",
                            "type": "column",
                          },
                          "name": {
                            "column": "name",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.sampleObject",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.sampleObject",
                  "displayMetadata": {
                    "description": "Sample object description",
                    "displayName": "Test Object",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "tests",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "id",
                  ],
                  "propertyTypes": {
                    "id": {
                      "apiName": "id",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": "The ID of the test object",
                        "displayName": "ID",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "name": {
                      "apiName": "name",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": "The name of the test object",
                        "displayName": "Name",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "name",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
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
          "name": {
            type: "string",
            description: "The name of the test object",
          },
          "id": {
            type: "string",
            displayName: "ID",
            description: "The ID of the test object",
          },
        },
      });
      const createAction = defineCreateObjectAction({
        objectType: sampleObject,
        actionLevelValidation: [{
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
                    strings: [
                      "87ef507e-f954-457e-ad68-e0df71ef7567",
                    ],
                  },
                },
              },
            },
          },
        }],
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-object-sample-object": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.sampleObject",
                            "propertyValues": {
                              "id": {
                                "parameterId": "id",
                                "type": "parameterId",
                              },
                              "name": {
                                "parameterId": "name",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "comparison": {
                                "left": {
                                  "type": "userProperty",
                                  "userProperty": {
                                    "propertyValue": {
                                      "organizationMarkingIds": {},
                                      "type": "organizationMarkingIds",
                                    },
                                    "userId": {
                                      "currentUser": {},
                                      "type": "currentUser",
                                    },
                                  },
                                },
                                "operator": "INTERSECTS",
                                "right": {
                                  "staticValue": {
                                    "stringList": {
                                      "strings": [
                                        "87ef507e-f954-457e-ad68-e0df71ef7567",
                                      ],
                                    },
                                    "type": "stringList",
                                  },
                                  "type": "staticValue",
                                },
                              },
                              "type": "comparison",
                            },
                            "displayMetadata": {
                              "failureMessage": "Insufficient permissions. Missing organization membership required to submit action",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "id": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "name": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-sample-object",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create Test Object",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.sampleObject",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "name",
                      "id",
                    ],
                    "parameters": {
                      "id": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "ID",
                          "typeClasses": [],
                        },
                        "id": "id",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "name": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Name",
                          "typeClasses": [],
                        },
                        "id": "name",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {
                "com.palantir.create-object-sample-object": {
                  "restrictionStatus": {
                    "hasRolesApplied": true,
                    "ontologyPackageRid": null,
                    "publicProject": false,
                  },
                },
              },
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.sampleObject": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.sampleObject",
                        "propertyMapping": {
                          "id": {
                            "column": "id",
                            "type": "column",
                          },
                          "name": {
                            "column": "name",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.sampleObject",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.sampleObject",
                  "displayMetadata": {
                    "description": "Sample object description",
                    "displayName": "Test Object",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "tests",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "id",
                  ],
                  "propertyTypes": {
                    "id": {
                      "apiName": "id",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": "The ID of the test object",
                        "displayName": "ID",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "name": {
                      "apiName": "name",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": "The name of the test object",
                        "displayName": "Name",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "name",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Array property validation is correctly structured for actions", () => {
      const objectWithArrays = defineObject({
        apiName: "objectWithArrays",
        displayName: "Object With Arrays",
        primaryKeyPropertyApiName: "id",
        titlePropertyApiName: "id",
        pluralDisplayName: "Objects With Arrays",
        properties: {
          "id": { type: "string", displayName: "ID" },
          "tags": { type: "string", array: true, displayName: "Tags" },
          "numbers": { type: "integer", array: true, displayName: "Numbers" },
          "singleValue": { type: "string", displayName: "Single Value" },
        },
      });

      const createAction = defineCreateObjectAction({
        objectType: objectWithArrays,
      });
      const modifyAction = defineModifyObjectAction({
        objectType: objectWithArrays,
      });

      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-object-object-with-arrays": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.objectWithArrays",
                            "propertyValues": {
                              "id": {
                                "parameterId": "id",
                                "type": "parameterId",
                              },
                              "numbers": {
                                "parameterId": "numbers",
                                "type": "parameterId",
                              },
                              "singleValue": {
                                "parameterId": "singleValue",
                                "type": "parameterId",
                              },
                              "tags": {
                                "parameterId": "tags",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "id": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "numbers": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "numericInput": {},
                                "type": "numericInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "range": {
                                  "range": {},
                                  "type": "range",
                                },
                                "type": "range",
                              },
                              "required": {
                                "listLengthValidation": {
                                  "maxLength": undefined,
                                  "minLength": undefined,
                                },
                                "type": "listLengthValidation",
                              },
                            },
                          },
                        },
                        "singleValue": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "tags": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "listLengthValidation": {
                                  "maxLength": undefined,
                                  "minLength": undefined,
                                },
                                "type": "listLengthValidation",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-object-with-arrays",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create Object With Arrays",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.objectWithArrays",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "id",
                      "tags",
                      "numbers",
                      "singleValue",
                    ],
                    "parameters": {
                      "id": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "ID",
                          "typeClasses": [],
                        },
                        "id": "id",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "numbers": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Numbers",
                          "typeClasses": [],
                        },
                        "id": "numbers",
                        "type": {
                          "integerList": {},
                          "type": "integerList",
                        },
                      },
                      "singleValue": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Single Value",
                          "typeClasses": [],
                        },
                        "id": "singleValue",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "tags": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Tags",
                          "typeClasses": [],
                        },
                        "id": "tags",
                        "type": {
                          "stringList": {},
                          "type": "stringList",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
              "com.palantir.modify-object-object-with-arrays": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "modifyObjectRule": {
                            "objectToModify": "objectToModifyParameter",
                            "propertyValues": {
                              "numbers": {
                                "parameterId": "numbers",
                                "type": "parameterId",
                              },
                              "singleValue": {
                                "parameterId": "singleValue",
                                "type": "parameterId",
                              },
                              "tags": {
                                "parameterId": "tags",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "modifyObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "numbers": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToModifyParameter",
                                  "propertyTypeId": "numbers",
                                },
                                "type": "objectParameterPropertyValue",
                              },
                              "renderHint": {
                                "numericInput": {},
                                "type": "numericInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "range": {
                                  "range": {},
                                  "type": "range",
                                },
                                "type": "range",
                              },
                              "required": {
                                "listLengthValidation": {
                                  "maxLength": undefined,
                                  "minLength": undefined,
                                },
                                "type": "listLengthValidation",
                              },
                            },
                          },
                        },
                        "objectToModifyParameter": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "dropdown": {},
                                "type": "dropdown",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "objectQuery": {
                                  "objectQuery": {},
                                  "type": "objectQuery",
                                },
                                "type": "objectQuery",
                              },
                              "required": {
                                "required": {},
                                "type": "required",
                              },
                            },
                          },
                        },
                        "singleValue": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToModifyParameter",
                                  "propertyTypeId": "singleValue",
                                },
                                "type": "objectParameterPropertyValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "tags": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "prefill": {
                                "objectParameterPropertyValue": {
                                  "parameterId": "objectToModifyParameter",
                                  "propertyTypeId": "tags",
                                },
                                "type": "objectParameterPropertyValue",
                              },
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "listLengthValidation": {
                                  "maxLength": undefined,
                                  "minLength": undefined,
                                },
                                "type": "listLengthValidation",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.modify-object-object-with-arrays",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Modify Object With Arrays",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.objectWithArrays",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "objectToModifyParameter",
                      "tags",
                      "numbers",
                      "singleValue",
                    ],
                    "parameters": {
                      "numbers": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Numbers",
                          "typeClasses": [],
                        },
                        "id": "numbers",
                        "type": {
                          "integerList": {},
                          "type": "integerList",
                        },
                      },
                      "objectToModifyParameter": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Modify object",
                          "typeClasses": [],
                        },
                        "id": "objectToModifyParameter",
                        "type": {
                          "objectReference": {
                            "objectTypeId": "com.palantir.objectWithArrays",
                          },
                          "type": "objectReference",
                        },
                      },
                      "singleValue": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Single Value",
                          "typeClasses": [],
                        },
                        "id": "singleValue",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "tags": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Tags",
                          "typeClasses": [],
                        },
                        "id": "tags",
                        "type": {
                          "stringList": {},
                          "type": "stringList",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.objectWithArrays": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.objectWithArrays",
                        "propertyMapping": {
                          "id": {
                            "column": "id",
                            "type": "column",
                          },
                          "numbers": {
                            "column": "numbers",
                            "type": "column",
                          },
                          "singleValue": {
                            "column": "singleValue",
                            "type": "column",
                          },
                          "tags": {
                            "column": "tags",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.objectWithArrays",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.objectWithArrays",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "Object With Arrays",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "Objects With Arrays",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "id",
                  ],
                  "propertyTypes": {
                    "id": {
                      "apiName": "id",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "ID",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "numbers": {
                      "apiName": "numbers",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Numbers",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "array": {
                          "reducers": [],
                          "subtype": {
                            "integer": {},
                            "type": "integer",
                          },
                        },
                        "type": "array",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "singleValue": {
                      "apiName": "singleValue",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Single Value",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "tags": {
                      "apiName": "tags",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Tags",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "array": {
                          "reducers": [],
                          "subtype": {
                            "string": {
                              "analyzerOverride": undefined,
                              "enableAsciiFolding": undefined,
                              "isLongText": false,
                              "supportsEfficientLeadingWildcard": false,
                              "supportsExactMatching": true,
                            },
                            "type": "string",
                          },
                        },
                        "type": "array",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "id",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
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
          "name": { type: "string" },
          "id": { type: "string" },
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
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-object-sample-object": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.sampleObject",
                            "propertyValues": {
                              "id": {
                                "parameterId": "id",
                                "type": "parameterId",
                              },
                              "name": {
                                "parameterId": "name",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "id": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "name": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {
                        "section1": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "comparison": {
                                  "left": {
                                    "type": "userProperty",
                                    "userProperty": {
                                      "propertyValue": {
                                        "groupIds": {},
                                        "type": "groupIds",
                                      },
                                      "userId": {
                                        "currentUser": {},
                                        "type": "currentUser",
                                      },
                                    },
                                  },
                                  "operator": "INTERSECTS",
                                  "right": {
                                    "staticValue": {
                                      "stringList": {
                                        "strings": [
                                          "testGroup",
                                        ],
                                      },
                                      "type": "stringList",
                                    },
                                    "type": "staticValue",
                                  },
                                },
                                "type": "comparison",
                              },
                              "sectionBlockOverrides": [
                                {
                                  "type": "visibility",
                                  "visibility": {
                                    "visibility": {
                                      "hidden": {},
                                      "type": "hidden",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
                          "defaultDisplayMetadata": {
                            "visibility": {
                              "type": "visible",
                              "visible": {},
                            },
                          },
                        },
                      },
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-sample-object",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create Test Object",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.sampleObject",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [
                      {
                        "parameterId": "name",
                        "type": "parameterId",
                      },
                      {
                        "sectionId": "section1",
                        "type": "sectionId",
                      },
                    ],
                    "parameterOrdering": [
                      "name",
                      "id",
                    ],
                    "parameters": {
                      "id": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Id",
                          "typeClasses": [],
                        },
                        "id": "id",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "name": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Name",
                          "typeClasses": [],
                        },
                        "id": "name",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {
                      "section1": {
                        "content": [
                          {
                            "parameterId": "id",
                            "type": "parameterId",
                          },
                        ],
                        "displayMetadata": {
                          "collapsedByDefault": false,
                          "columnCount": 1,
                          "description": "Description for Section 1",
                          "displayName": "Section 1",
                          "showTitleBar": true,
                        },
                        "id": "section1",
                      },
                    },
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.sampleObject": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.sampleObject",
                        "propertyMapping": {
                          "id": {
                            "column": "id",
                            "type": "column",
                          },
                          "name": {
                            "column": "name",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.sampleObject",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.sampleObject",
                  "displayMetadata": {
                    "description": "Sample object description",
                    "displayName": "Test Object",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "tests",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "id",
                  ],
                  "propertyTypes": {
                    "id": {
                      "apiName": "id",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Id",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "name": {
                      "apiName": "name",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Name",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "name",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
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
          "name": { type: "string" },
          "id": { type: "string" },
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
          "name": { type: "string" },
          "id": { type: "string" },
          "foo": { type: "string" },
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
            "foo": {
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
            "foo": {
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
            "foo": {
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
          "name": {
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
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-object-sample-object": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.sampleObject",
                            "propertyValues": {
                              "foo": {
                                "parameterId": "foo",
                                "type": "parameterId",
                              },
                              "id": {
                                "parameterId": "id",
                                "type": "parameterId",
                              },
                              "name": {
                                "parameterId": "name",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "foo": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "id": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "name": {
                          "conditionalOverrides": [
                            {
                              "condition": {
                                "comparison": {
                                  "left": {
                                    "parameterId": "foo",
                                    "type": "parameterId",
                                  },
                                  "operator": "EQUALS",
                                  "right": {
                                    "staticValue": {
                                      "string": "foo",
                                      "type": "string",
                                    },
                                    "type": "staticValue",
                                  },
                                },
                                "type": "comparison",
                              },
                              "parameterBlockOverrides": [
                                {
                                  "type": "visibility",
                                  "visibility": {
                                    "visibility": {
                                      "editable": {},
                                      "type": "editable",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "textInput": {},
                                "type": "textInput",
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "text": {
                                  "text": {},
                                  "type": "text",
                                },
                                "type": "text",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-sample-object",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create Test Object",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.sampleObject",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "foo",
                      "name",
                      "id",
                    ],
                    "parameters": {
                      "foo": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Foo",
                          "typeClasses": [],
                        },
                        "id": "foo",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "id": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Id",
                          "typeClasses": [],
                        },
                        "id": "id",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "name": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Name",
                          "typeClasses": [],
                        },
                        "id": "name",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.sampleObject": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.sampleObject",
                        "propertyMapping": {
                          "foo": {
                            "column": "foo",
                            "type": "column",
                          },
                          "id": {
                            "column": "id",
                            "type": "column",
                          },
                          "name": {
                            "column": "name",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.sampleObject",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.sampleObject",
                  "displayMetadata": {
                    "description": "Sample object description",
                    "displayName": "Test Object",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "tests",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "id",
                  ],
                  "propertyTypes": {
                    "foo": {
                      "apiName": "foo",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Foo",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "id": {
                      "apiName": "id",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Id",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "name": {
                      "apiName": "name",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Name",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "name",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });

    it("Group and user parameters are properly defined", () => {
      const exampleObjectType = defineObject({
        titlePropertyApiName: "bar",
        displayName: "exampleObjectType",
        pluralDisplayName: "exampleObjectTypes",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: {
          "bar": { type: "string" },
          "fizz": { type: "string" },
          "buzz": { type: "string" },
          "fizzbuzz": { type: "string" },
        },
      });

      const createObjectActionType = defineCreateObjectAction(
        {
          objectType: exampleObjectType,
          parameterConfiguration: {
            "bar": {
              allowedValues: {
                type: "multipassGroup",
              },
            },
            "fizz": {
              allowedValues: {
                type: "user",
                fromGroups: [{
                  type: "parameter",
                  parameter: "bar",
                }],
              },
            },
            "buzz": {
              allowedValues: {
                type: "user",
              },
            },
            "fizzbuzz": {
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
        },
      );
      expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
        {
          "importedOntology": {
            "actionTypes": {},
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "importedValueTypes": {
            "valueTypes": [],
          },
          "ontology": {
            "actionTypes": {
              "com.palantir.create-object-foo": {
                "actionType": {
                  "actionTypeLogic": {
                    "logic": {
                      "rules": [
                        {
                          "addObjectRule": {
                            "objectTypeId": "com.palantir.foo",
                            "propertyValues": {
                              "bar": {
                                "parameterId": "bar",
                                "type": "parameterId",
                              },
                              "buzz": {
                                "parameterId": "buzz",
                                "type": "parameterId",
                              },
                              "fizz": {
                                "parameterId": "fizz",
                                "type": "parameterId",
                              },
                              "fizzbuzz": {
                                "parameterId": "fizzbuzz",
                                "type": "parameterId",
                              },
                            },
                            "structFieldValues": {},
                          },
                          "type": "addObjectRule",
                        },
                      ],
                    },
                    "validation": {
                      "actionTypeLevelValidation": {
                        "rules": {
                          "0": {
                            "condition": {
                              "true": {},
                              "type": "true",
                            },
                            "displayMetadata": {
                              "failureMessage": "",
                              "typeClasses": [],
                            },
                          },
                        },
                      },
                      "parameterValidations": {
                        "bar": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "type": "userDropdown",
                                "userDropdown": {},
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "multipassGroup": {
                                  "group": {},
                                  "type": "group",
                                },
                                "type": "multipassGroup",
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "buzz": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "type": "userDropdown",
                                "userDropdown": {},
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "type": "user",
                                "user": {
                                  "type": "user",
                                  "user": {
                                    "filter": [],
                                  },
                                },
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "fizz": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "type": "userDropdown",
                                "userDropdown": {},
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "type": "user",
                                "user": {
                                  "type": "user",
                                  "user": {
                                    "filter": [
                                      {
                                        "groupFilter": {
                                          "groupId": {
                                            "parameterId": "bar",
                                            "type": "parameterId",
                                          },
                                        },
                                        "type": "groupFilter",
                                      },
                                    ],
                                  },
                                },
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                        "fizzbuzz": {
                          "conditionalOverrides": [],
                          "defaultValidation": {
                            "display": {
                              "renderHint": {
                                "type": "userDropdown",
                                "userDropdown": {},
                              },
                              "visibility": {
                                "editable": {},
                                "type": "editable",
                              },
                            },
                            "validation": {
                              "allowedValues": {
                                "type": "user",
                                "user": {
                                  "type": "user",
                                  "user": {
                                    "filter": [
                                      {
                                        "groupFilter": {
                                          "groupId": {
                                            "staticValue": {
                                              "string": "inputGroup",
                                              "type": "string",
                                            },
                                            "type": "staticValue",
                                          },
                                        },
                                        "type": "groupFilter",
                                      },
                                    ],
                                  },
                                },
                              },
                              "required": {
                                "notRequired": {},
                                "type": "notRequired",
                              },
                            },
                          },
                        },
                      },
                      "sectionValidations": {},
                    },
                  },
                  "metadata": {
                    "apiName": "com.palantir.create-object-foo",
                    "displayMetadata": {
                      "configuration": {
                        "defaultLayout": "FORM",
                        "displayAndFormat": {
                          "table": {
                            "columnWidthByParameterRid": {},
                            "enableFileImport": true,
                            "fitHorizontally": false,
                            "frozenColumnCount": 0,
                            "rowHeightInLines": 1,
                          },
                        },
                        "enableLayoutUserSwitch": false,
                      },
                      "description": "",
                      "displayName": "Create exampleObjectType",
                      "icon": {
                        "blueprint": {
                          "color": "#000000",
                          "locator": "edit",
                        },
                        "type": "blueprint",
                      },
                      "successMessage": [],
                      "typeClasses": [],
                    },
                    "entities": {
                      "affectedInterfaceTypes": [],
                      "affectedLinkTypes": [],
                      "affectedObjectTypes": [
                        "com.palantir.foo",
                      ],
                      "typeGroups": [],
                    },
                    "formContentOrdering": [],
                    "parameterOrdering": [
                      "bar",
                      "fizz",
                      "buzz",
                      "fizzbuzz",
                    ],
                    "parameters": {
                      "bar": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Bar",
                          "typeClasses": [],
                        },
                        "id": "bar",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "buzz": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Buzz",
                          "typeClasses": [],
                        },
                        "id": "buzz",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "fizz": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Fizz",
                          "typeClasses": [],
                        },
                        "id": "fizz",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                      "fizzbuzz": {
                        "displayMetadata": {
                          "description": "",
                          "displayName": "Fizzbuzz",
                          "typeClasses": [],
                        },
                        "id": "fizzbuzz",
                        "type": {
                          "string": {},
                          "type": "string",
                        },
                      },
                    },
                    "sections": {},
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
              },
            },
            "blockPermissionInformation": {
              "actionTypes": {},
              "linkTypes": {},
              "objectTypes": {},
            },
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {
              "com.palantir.foo": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.foo",
                        "propertyMapping": {
                          "bar": {
                            "column": "bar",
                            "type": "column",
                          },
                          "buzz": {
                            "column": "buzz",
                            "type": "column",
                          },
                          "fizz": {
                            "column": "fizz",
                            "type": "column",
                          },
                          "fizzbuzz": {
                            "column": "fizzbuzz",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.foo",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.foo",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "exampleObjectType",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "exampleObjectTypes",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [],
                  "primaryKeys": [
                    "bar",
                  ],
                  "propertyTypes": {
                    "bar": {
                      "apiName": "bar",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Bar",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "buzz": {
                      "apiName": "buzz",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Buzz",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "fizz": {
                      "apiName": "fizz",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Fizz",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                    "fizzbuzz": {
                      "apiName": "fizzbuzz",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "Fizzbuzz",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "bar",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });
  });
});
