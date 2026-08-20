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

import type { OntologyBlockDataV2 } from "@osdk/client.unstable";
import { describe, expect, it } from "vitest";
import { PreviewOntologyIrConverter } from "./PreviewOntologyIrConverter.js";

function interfaceActionBlockData(): OntologyBlockDataV2 {
  const interfaceParameters = {
    source: {
      displayMetadata: {
        description: "",
        displayName: "Source",
        structFields: {},
        structFieldsV2: [],
        typeClasses: [],
      },
      id: "source",
      rid: "ri.parameter.source",
      type: {
        type: "interfaceReference" as const,
        interfaceReference: { interfaceTypeRid: "ri.interface.item" },
      },
    },
    target: {
      displayMetadata: {
        description: "",
        displayName: "Target",
        structFields: {},
        structFieldsV2: [],
        typeClasses: [],
      },
      id: "target",
      rid: "ri.parameter.target",
      type: {
        type: "interfaceReference" as const,
        interfaceReference: { interfaceTypeRid: "ri.interface.observation" },
      },
    },
  };
  const actionMetadata = {
    displayMetadata: {
      applyingMessage: [],
      description: "",
      successMessage: [],
      typeClasses: [],
    },
    formContentOrdering: [],
    parameterOrdering: ["source", "target"],
    parameters: interfaceParameters,
    sections: {},
    status: { type: "active", active: {} } as const,
    version: "1.0.0",
  };
  const parameterValidation = {
    conditionalOverrides: [],
    defaultValidation: {
      display: {
        renderHint: { type: "dropdown" as const, dropdown: {} },
        visibility: { type: "editable" as const, editable: {} },
      },
      validation: {
        allowedValues: {
          type: "interfaceObjectQuery" as const,
          interfaceObjectQuery: {
            type: "interfaceObjectQuery" as const,
            interfaceObjectQuery: {},
          },
        },
        required: { type: "required" as const, required: {} },
      },
    },
    structFieldValidations: {},
  };
  const actionValidation = {
    actionTypeLevelValidation: { ordering: [], rules: {} },
    parameterValidations: {
      source: parameterValidation,
      target: parameterValidation,
    },
    sectionValidations: {},
  };

  return {
    actionTypes: {
      "ri.action.create-item-link": {
        actionType: {
          actionTypeLogic: {
            logic: {
              rules: [{
                type: "addInterfaceLinkRuleV2",
                addInterfaceLinkRuleV2: {
                  interfaceTypeRid: "ri.interface.item",
                  interfaceLinkTypeRid: "ri.interface-link.observations",
                  sourceObjects: [{
                    type: "existingObject",
                    existingObject: "source",
                  }],
                  targetObjects: [{
                    type: "existingObject",
                    existingObject: "target",
                  }],
                },
              }],
            },
            notifications: [],
            validation: actionValidation,
          },
          metadata: {
            ...actionMetadata,
            apiName: "createItemLink",
            displayMetadata: {
              ...actionMetadata.displayMetadata,
              displayName: "Create item link",
            },
            rid: "ri.action.create-item-link",
          },
        },
        parameterIds: {},
      },
      "ri.action.delete-item-link": {
        actionType: {
          actionTypeLogic: {
            logic: {
              rules: [{
                type: "deleteInterfaceLinkRule",
                deleteInterfaceLinkRule: {
                  interfaceTypeRid: "ri.interface.item",
                  interfaceLinkTypeRid: "ri.interface-link.observations",
                  sourceObject: "source",
                  targetObject: "target",
                },
              }],
            },
            notifications: [],
            validation: actionValidation,
          },
          metadata: {
            ...actionMetadata,
            apiName: "deleteItemLink",
            displayMetadata: {
              ...actionMetadata.displayMetadata,
              displayName: "Delete item link",
            },
            rid: "ri.action.delete-item-link",
          },
        },
        parameterIds: {},
      },
    },
    blockOutputCompassLocations: {},
    interfaceTypes: {
      "ri.interface.item": {
        interfaceType: {
          actionTypeConstraints: [],
          apiName: "local.Item",
          displayMetadata: { displayName: "Item" },
          extendsInterfaces: [],
          links: [{
            cardinality: "MANY",
            linkedEntityTypeId: {
              type: "interfaceType",
              interfaceType: "ri.interface.observation",
            },
            metadata: {
              apiName: "observations",
              description: "",
              displayName: "Observations",
            },
            required: false,
            rid: "ri.interface-link.observations",
          }],
          properties: [],
          propertiesV2: {},
          propertiesV3: {},
          rid: "ri.interface.item",
          status: { type: "active", active: {} },
        },
      },
      "ri.interface.observation": {
        interfaceType: {
          actionTypeConstraints: [],
          apiName: "local.Observation",
          displayMetadata: { displayName: "Observation" },
          extendsInterfaces: [],
          links: [],
          properties: [],
          propertiesV2: {},
          propertiesV3: {},
          rid: "ri.interface.observation",
          status: { type: "active", active: {} },
        },
      },
    },
    knownIdentifiers: {
      actionParameterIds: {},
      actionParameters: {},
      actionTypes: {},
      datasourceColumns: {},
      datasources: {},
      filesDatasources: {},
      functions: {},
      geotimeSeriesSyncs: {},
      groupIds: {},
      interfaceActionTypeConstraints: {},
      interfaceLinkTypes: {},
      interfaceParameterConstraints: {},
      interfacePropertyTypes: {},
      interfaceTypes: {},
      linkTypeIds: {},
      linkTypes: {},
      markings: {},
      objectPropertyTypeIdsToRids: {},
      objectTypeIds: {},
      objectTypes: {},
      propertyTypeIds: {},
      propertyTypes: {},
      sharedPropertyTypes: {},
      structFieldRidsToApiNames: {},
      timeSeriesSyncs: {},
      valueTypes: {},
      webhooks: {},
      workshopModules: {},
    },
    linkTypes: {},
    objectTypes: {},
    ruleSets: {},
    sharedPropertyTypes: {},
  };
}

describe(PreviewOntologyIrConverter, () => {
  it("keeps interface link operations and full rules", () => {
    const metadata = PreviewOntologyIrConverter
      .getPreviewFullMetadataFromBlockData(interfaceActionBlockData());

    expect(metadata.actionTypes.createItemLink.actionType.operations)
      .toContainEqual({
        type: "createInterfaceLink",
        interfaceTypeApiName: "local.Item",
        interfaceLinkTypeApiName: "observations",
        sourceObject: "source",
        targetObject: "target",
      });
    expect(metadata.actionTypes.createItemLink.fullLogicRules).toContainEqual({
      type: "createInterfaceLink",
      interfaceTypeApiName: "local.Item",
      interfaceLinkTypeApiName: "observations",
      sourceObject: "source",
      targetObject: "target",
    });
    expect(metadata.actionTypes.deleteItemLink.actionType.operations)
      .toContainEqual({
        type: "deleteInterfaceLink",
        interfaceTypeApiName: "local.Item",
        interfaceLinkTypeApiName: "observations",
        sourceObject: "source",
        targetObject: "target",
      });
    expect(metadata.actionTypes.deleteItemLink.fullLogicRules).toContainEqual({
      type: "deleteInterfaceLink",
      interfaceTypeApiName: "local.Item",
      interfaceLinkTypeApiName: "observations",
      sourceObject: "source",
      targetObject: "target",
    });
  });
});
