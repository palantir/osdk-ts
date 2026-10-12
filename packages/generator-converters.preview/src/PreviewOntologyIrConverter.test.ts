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
  LinkTypeBlockDataV2,
  MarketplaceInterfaceType,
  OntologyBlockDataV2,
  SharedPropertyType,
  ValueTypeBlockData,
  ValueTypeReference,
} from "@osdk/client.unstable";
import { generateClientSdkVersionTwoPointZero } from "@osdk/generator";
import { OntologyBlockDataToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import * as path from "node:path";
import { describe, expect, it, vi } from "vitest";
import { PreviewOntologyIrConverter } from "./index.js";

const valueTypes: Record<string, ValueTypeBlockData> = {
  "classification-rid": {
    metadata: {
      apiName: "classification",
      displayMetadata: { displayName: "Classification", description: "" },
      status: { type: "active", active: {} },
      baseType: { type: "string", string: {} },
    },
    versions: [{
      version: "2.0.0",
      exampleValues: [],
      constraints: [{
        constraint: {
          constraint: {
            type: "string",
            string: {
              type: "oneOf",
              oneOf: { values: ["A", "B"], useIgnoreCase: false },
            },
          },
        },
      }],
    }],
  },
};

const sharedProperty = {
  rid: "shared-property-rid",
  apiName: "classificationProperty",
  displayMetadata: { displayName: "Classification", visibility: "NORMAL" },
  type: {
    type: "string",
    string: { isLongText: false, supportsExactMatching: true },
  },
  indexedForSearch: false,
  typeClasses: [],
  aliases: [],
  valueType: { rid: "classification-rid", versionId: "1.0.0" },
} satisfies SharedPropertyType;

function getBlockData(versionId: string): OntologyBlockDataV2 {
  const property = {
    ...sharedProperty,
    valueType: { rid: "classification-rid", versionId },
  };
  const parent: MarketplaceInterfaceType = {
    rid: "parent-rid",
    apiName: "Parent",
    displayMetadata: { displayName: "Parent" },
    status: { type: "active", active: {} },
    actionTypeConstraints: [],
    extendsInterfaces: [],
    links: [],
    properties: [],
    propertiesV2: {
      legacyProperty: { required: false, sharedPropertyType: property },
    },
    propertiesV3: {
      "defined-property-rid": {
        type: "interfaceDefinedPropertyType",
        interfaceDefinedPropertyType: {
          rid: "defined-property-rid",
          apiName: "definedProperty",
          displayMetadata: { displayName: "Defined", visibility: "NORMAL" },
          type: property.type,
          constraints: {
            indexedForSearch: false,
            primaryKeyConstraint: "NO_RESTRICTION",
            requireImplementation: false,
            typeClasses: [],
            valueType: property.valueType,
          },
        },
      },
      "shared-property-rid": {
        type: "sharedPropertyBasedPropertyType",
        sharedPropertyBasedPropertyType: {
          requireImplementation: false,
          sharedPropertyType: property,
        },
      },
    },
  };

  return {
    objectTypes: {
      "item-rid": {
        datasources: [],
        writebackDatasets: [],
        objectType: {
          rid: "item-rid",
          id: "item",
          apiName: "Item",
          displayMetadata: {
            displayName: "Item",
            pluralDisplayName: "Items",
            visibility: "NORMAL",
            icon: {
              type: "blueprint",
              blueprint: { locator: "cube", color: "blue" },
            },
          },
          status: { type: "active", active: {} },
          primaryKeys: ["property-rid"],
          titlePropertyTypeRid: "property-rid",
          propertyTypes: {
            "property-rid": {
              ...property,
              rid: "property-rid",
              id: "classification",
              status: { type: "active", active: {} },
            },
          },
          implementsInterfaces: [],
          implementsInterfaces2: [],
          allImplementsInterfaces: {},
          traits: { workflowObjectTypeTraits: {} },
          typeGroups: [],
        },
      },
    },
    sharedPropertyTypes: {
      [property.rid]: { sharedPropertyType: property },
    },
    interfaceTypes: {
      "child-rid": {
        interfaceType: {
          ...parent,
          rid: "child-rid",
          apiName: "Child",
          displayMetadata: { displayName: "Child" },
          extendsInterfaces: [parent.rid],
          propertiesV2: {},
          propertiesV3: {},
        },
      },
      "parent-rid": { interfaceType: parent },
    },
    actionTypes: {},
    linkTypes: {},
    ruleSets: {},
    blockOutputCompassLocations: {},
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
      interfaceTypeSchemaTransitions: {},
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
  };
}

function getActionBlockData(): OntologyBlockDataV2 {
  const blockData = getBlockData("2.0.0");
  blockData.actionTypes["action-rid"] = {
    parameterIds: { parent: "parent" },
    actionType: {
      metadata: {
        rid: "action-rid",
        apiName: "createItem",
        version: "1.0.0",
        displayMetadata: {
          displayName: "Create item",
          description: "Create a local item",
          applyingMessage: [],
          successMessage: [],
          typeClasses: [],
        },
        status: { type: "active", active: {} },
        parameters: {
          parent: {
            id: "parent",
            rid: "parent-parameter-rid",
            displayMetadata: {
              displayName: "Parent",
              description: "Parent object",
              structFields: {},
              structFieldsV2: [],
              typeClasses: [],
            },
            type: {
              type: "interfaceReference",
              interfaceReference: { interfaceTypeRid: "parent-rid" },
            },
          },
        },
        parameterOrdering: ["parent"],
        formContentOrdering: [],
        sections: {},
      },
      actionTypeLogic: {
        logic: {
          rules: [{
            type: "addObjectRule",
            addObjectRule: {
              objectTypeId: "item-rid",
              propertyValues: {
                classificationProperty: {
                  type: "staticValue",
                  staticValue: { type: "string", string: "A" },
                },
              },
              structFieldValues: {},
            },
          }],
        },
        notifications: [],
        validation: {
          actionTypeLevelValidation: { ordering: [], rules: {} },
          parameterValidations: {
            parent: {
              conditionalOverrides: [],
              structFieldValidations: {},
              defaultValidation: {
                display: {
                  renderHint: { type: "dropdown", dropdown: {} },
                  visibility: { type: "editable", editable: {} },
                },
                validation: {
                  required: { type: "required", required: {} },
                  allowedValues: {
                    type: "interfaceObjectQuery",
                    interfaceObjectQuery: {
                      type: "interfaceObjectQuery",
                      interfaceObjectQuery: {},
                    },
                  },
                },
              },
            },
          },
          sectionValidations: {},
        },
      },
    },
  };
  return blockData;
}

describe("preview action metadata", () => {
  it.each(["local", "imported"])(
    "preserves action metadata and logic rules referencing %s entities",
    source => {
      const blockData = getActionBlockData();
      const importedTypes = source === "imported"
        ? OntologyBlockDataToFullMetadataConverter.getFullMetadataFromBlockData(
          getBlockData("2.0.0"),
        )
        : undefined;
      if (importedTypes) {
        blockData.objectTypes = {};
        blockData.interfaceTypes = {};
      }
      const inputBefore = structuredClone({ blockData, importedTypes });

      const metadata = PreviewOntologyIrConverter
        .getPreviewFullMetadataFromBlockData(blockData, importedTypes);

      expect(metadata.actionTypes).toEqual({
        createItem: {
          actionType: {
            rid: "action-rid",
            apiName: "createItem",
            displayName: "Create item",
            description: "Create a local item",
            status: "ACTIVE",
            parameters: {
              parent: {
                displayName: "Parent",
                description: "Parent object",
                dataType: {
                  type: "interfaceObject",
                  interfaceTypeApiName: "Parent",
                },
                required: true,
                typeClasses: [],
              },
            },
            operations: [{ type: "createObject", objectTypeApiName: "Item" }],
          },
          fullLogicRules: [{
            type: "createObject",
            objectTypeApiName: "Item",
            propertyArguments: {
              classificationProperty: { type: "staticValue", value: "A" },
            },
            structPropertyArguments: {},
          }],
        },
      });
      expect(metadata.actionTypesFullMetadata).toBe(metadata.actionTypes);
      expect(metadata.objectTypes.Item.objectType.apiName).toBe("Item");
      expect(metadata.interfaceTypes.Parent.apiName).toBe("Parent");
      expect({ blockData, importedTypes }).toEqual(inputBefore);
    },
  );

  it.each([true, false])(
    "excludes imported actions without replacing local definitions (local action: %s)",
    hasLocalAction => {
      const blockData = hasLocalAction
        ? getActionBlockData()
        : getBlockData("2.0.0");
      const importedTypes = OntologyBlockDataToFullMetadataConverter
        .getFullMetadataFromBlockData(getActionBlockData());
      importedTypes.actionTypes.createItem.rid = "imported-action-rid";
      importedTypes.actionTypes.createItem.description = "Imported action";
      importedTypes.actionTypes.importedOnly = {
        ...importedTypes.actionTypes.createItem,
        apiName: "importedOnly",
      };
      importedTypes.actionTypesFullMetadata = {
        importedOnly: {
          actionType: importedTypes.actionTypes.importedOnly,
          fullLogicRules: [],
        },
      };
      const importedBefore = structuredClone(importedTypes);

      const metadata = PreviewOntologyIrConverter
        .getPreviewFullMetadataFromBlockData(blockData, importedTypes);

      expect(Object.keys(metadata.actionTypes)).toEqual(
        hasLocalAction ? ["createItem"] : [],
      );
      expect(metadata.actionTypesFullMetadata).toBe(metadata.actionTypes);
      if (hasLocalAction) {
        expect(metadata.actionTypes.createItem.actionType).toMatchObject({
          rid: "action-rid",
          description: "Create a local item",
        });
      }
      expect(importedTypes).toEqual(importedBefore);
    },
  );
});

it("generates both directions of an intermediary link", async () => {
  const blockData = getBlockData("1.0.0");
  const item = blockData.objectTypes["item-rid"];
  blockData.objectTypes["other-rid"] = {
    ...item,
    objectType: {
      ...item.objectType,
      rid: "other-rid",
      id: "other",
      apiName: "Other",
    },
  };
  blockData.linkTypes["link-rid"] = {
    linkType: {
      rid: "link-rid",
      id: "item-to-other",
      status: { type: "active", active: {} },
      definition: {
        type: "intermediary",
        intermediary: {
          objectTypeRidA: "item-rid",
          objectTypeRidB: "other-rid",
          intermediaryObjectTypeRid: "bridge-rid",
          aToIntermediaryLinkTypeRid: "item-to-bridge-rid",
          intermediaryToBLinkTypeRid: "other-to-bridge-rid",
          objectTypeAToBLinkMetadata: {
            apiName: "others",
            displayMetadata: {
              displayName: "Others",
              pluralDisplayName: "Others",
              visibility: "NORMAL",
            },
            typeClasses: [],
          },
          objectTypeBToALinkMetadata: {
            apiName: "items",
            displayMetadata: {
              displayName: "Items",
              pluralDisplayName: "Items",
              visibility: "NORMAL",
            },
            typeClasses: [],
          },
        },
      },
    },
    datasources: [],
  };
  const metadata = PreviewOntologyIrConverter
    .getPreviewFullMetadataFromBlockData(blockData);
  const writeFile = vi.fn<(file: string, contents: string) => Promise<void>>()
    .mockResolvedValue(undefined);
  await generateClientSdkVersionTwoPointZero(
    { ...metadata, actionTypes: {} },
    "test",
    {
      readdir: () => Promise.resolve([]),
      mkdir: () => Promise.resolve(),
      writeFile,
    },
    "/virtual-sdk",
    "module",
  );
  const files = Object.fromEntries(writeFile.mock.calls);
  const itemSource = files[
    path.join("/virtual-sdk", "ontology", "objects", "Item.ts")
  ];
  const otherSource = files[
    path.join("/virtual-sdk", "ontology", "objects", "Other.ts")
  ];
  expect(itemSource).toContain("readonly others: Other.ObjectSet;");
  expect(itemSource)
    .toContain("others: $ObjectMetadata.Link<Other, true>;");
  expect(otherSource).toContain("readonly items: Item.ObjectSet;");
  expect(otherSource)
    .toContain("items: $ObjectMetadata.Link<Item, true>;");
});

describe("property value type associations", () => {
  it.each(["1.0.0", "2.0.0"])(
    "associates each property representation and inherited properties for version %s",
    versionId => {
      const metadata = PreviewOntologyIrConverter
        .getPreviewFullMetadataFromBlockData(
          getBlockData(versionId),
          undefined,
          valueTypes,
        );
      const association = { valueTypeApiName: "classification" };
      expect(metadata).toMatchObject({
        objectTypes: {
          Item: {
            objectType: { properties: { classificationProperty: association } },
          },
        },
        sharedPropertyTypes: { classificationProperty: association },
        interfaceTypes: {
          Parent: {
            properties: { legacyProperty: association },
            propertiesV2: {
              definedProperty: association,
              classificationProperty: association,
            },
          },
          Child: {
            allProperties: { legacyProperty: association },
            allPropertiesV2: {
              definedProperty: association,
              classificationProperty: association,
            },
          },
        },
      });
    },
  );

  it.each(
    [
      ["absent", undefined],
      ["null", null],
      ["unloaded", { rid: "unloaded-rid", versionId: "1.0.0" }],
    ] satisfies [string, ValueTypeReference | null | undefined][],
  )(
    "leaves %s references unset",
    (_name, reference) => {
      const properties = OntologyBlockDataToFullMetadataConverter
        .getOsdkSharedPropertyTypesFromBlockData(
          {
            [sharedProperty.rid]: {
              sharedPropertyType: { ...sharedProperty, valueType: reference },
            },
          },
          valueTypes,
        );
      expect(properties.classificationProperty.valueTypeApiName)
        .toBeUndefined();
    },
  );

  it.each([
    {
      name: "with definitions",
      definitions: valueTypes,
      expected: "'A' | 'B'",
    },
    {
      name: "without definitions",
      definitions: undefined,
      expected: "$PropType['string']",
    },
  ])("generates property types $name", async ({ definitions, expected }) => {
    const metadata = PreviewOntologyIrConverter
      .getPreviewFullMetadataFromBlockData(
        getBlockData("1.0.0"),
        undefined,
        definitions,
      );
    const writeFile = vi.fn<(file: string, contents: string) => Promise<void>>()
      .mockResolvedValue(undefined);
    await generateClientSdkVersionTwoPointZero(
      { ...metadata, actionTypes: {} },
      "test",
      {
        readdir: () => Promise.resolve([]),
        mkdir: () => Promise.resolve(),
        writeFile,
      },
      "/virtual-sdk",
      "module",
    );
    const files = Object.fromEntries(writeFile.mock.calls);
    expect(files["/virtual-sdk/ontology/objects/Item.ts"])
      .toContain(`readonly classificationProperty: ${expected};`);
    for (const name of ["Parent", "Child"]) {
      expect(files[`/virtual-sdk/ontology/interfaces/${name}.ts`])
        .toContain(`readonly classificationProperty: ${expected} | undefined;`);
      expect(files[`/virtual-sdk/ontology/interfaces/${name}.ts`])
        .toContain(`readonly definedProperty: ${expected} | undefined;`);
    }
  });
});

describe("links involving imported objects", () => {
  it.each(
    [
      ["manyToMany", "item-rid"],
      ["manyToMany", "customer-rid"],
      ["intermediary", "item-rid"],
      ["intermediary", "customer-rid"],
      ["oneToMany", "item-rid"],
      ["oneToMany", "customer-rid"],
    ] as const,
  )(
    "converts and generates %s sides with imported %s",
    async (type, importedRid) => {
      const blockData = getBlockData("1.0.0");
      const item = blockData.objectTypes["item-rid"];
      const property = item.objectType.propertyTypes["property-rid"];
      blockData.objectTypes["customer-rid"] = {
        ...item,
        objectType: {
          ...item.objectType,
          rid: "customer-rid",
          id: "customer",
          apiName: "Customer",
          primaryKeys: ["customer-id-rid"],
          titlePropertyTypeRid: "customer-id-rid",
          propertyTypes: {
            "customer-id-rid": {
              ...property,
              rid: "customer-id-rid",
              id: "id",
              apiName: "id",
            },
            "customer-item-id-rid": {
              ...property,
              rid: "customer-item-id-rid",
              id: "itemId",
              apiName: "itemId",
            },
          },
        },
      };
      const importedTypes = OntologyBlockDataToFullMetadataConverter
        .getFullMetadataFromBlockData({
          ...blockData,
          objectTypes: { [importedRid]: blockData.objectTypes[importedRid] },
        });
      delete blockData.objectTypes[importedRid];
      if (importedRid === "customer-rid") {
        importedTypes.objectTypes.Customer.objectType.properties.itemId.rid =
          "original-imported-property-rid";
        blockData.knownIdentifiers.objectPropertyTypeIdsToRids = {
          customer: { itemId: "customer-item-id-rid" },
        };
      }
      const linkMetadata = (apiName: string) => ({
        apiName,
        displayMetadata: {
          displayName: apiName,
          pluralDisplayName: apiName,
          visibility: "NORMAL" as const,
        },
        typeClasses: [],
      });
      const endpoints = {
        objectTypeRidA: "item-rid",
        objectTypeRidB: "customer-rid",
        objectTypeAToBLinkMetadata: linkMetadata("customers"),
        objectTypeBToALinkMetadata: linkMetadata("items"),
      };
      const definition: LinkTypeBlockDataV2["linkType"]["definition"] =
        type === "oneToMany"
          ? {
            type,
            oneToMany: {
              cardinalityHint: "ONE_TO_MANY",
              objectTypeRidOneSide: "item-rid",
              objectTypeRidManySide: "customer-rid",
              oneToManyLinkMetadata: linkMetadata("customers"),
              manyToOneLinkMetadata: linkMetadata("items"),
              oneSidePrimaryKeyToManySidePropertyMapping: {
                "property-rid": "customer-item-id-rid",
              },
            },
          }
          : type === "intermediary"
          ? {
            type,
            intermediary: {
              ...endpoints,
              intermediaryObjectTypeRid: "bridge-rid",
              aToIntermediaryLinkTypeRid: "item-to-bridge-rid",
              intermediaryToBLinkTypeRid: "customer-to-bridge-rid",
            },
          }
          : {
            type,
            manyToMany: {
              ...endpoints,
              objectTypeAPrimaryKeyPropertyMapping: {},
              objectTypeBPrimaryKeyPropertyMapping: {},
            },
          };
      blockData.linkTypes = {
        "new-link-rid": {
          linkType: {
            rid: "new-link-rid",
            id: "item-to-customer",
            status: { type: "active", active: {} },
            definition,
          },
          datasources: [],
        },
      };
      const originalImportedTypes = structuredClone(importedTypes);
      const metadata = PreviewOntologyIrConverter
        .getPreviewFullMetadataFromBlockData(blockData, importedTypes);
      const forward = metadata.objectTypes.Item.linkTypes;
      const reverse = metadata.objectTypes.Customer.linkTypes;
      expect(forward).toEqual([{
        apiName: "customers",
        displayName: "customers",
        objectTypeApiName: "Customer",
        cardinality: "MANY",
        status: "ACTIVE",
        linkTypeRid: expect.stringMatching(
          /^ri\.ontology\.main\.link-type\.[0-9a-f-]{36}$/,
        ),
      }]);
      expect(reverse).toEqual([{
        apiName: "items",
        displayName: "items",
        objectTypeApiName: "Item",
        cardinality: type === "oneToMany" ? "ONE" : "MANY",
        status: "ACTIVE",
        linkTypeRid: forward[0].linkTypeRid,
        ...(type === "oneToMany"
          ? { foreignKeyPropertyApiName: "itemId" }
          : {}),
      }]);
      expect(importedTypes).toEqual(originalImportedTypes);
      const writeFile = vi.fn<
        (file: string, contents: string) => Promise<void>
      >()
        .mockResolvedValue(undefined);
      await generateClientSdkVersionTwoPointZero(
        { ...metadata, actionTypes: {} },
        "test",
        {
          readdir: () => Promise.resolve([]),
          mkdir: () => Promise.resolve(),
          writeFile,
        },
        "/virtual-sdk",
        "module",
      );
      const files = Object.fromEntries(writeFile.mock.calls);
      expect(files["/virtual-sdk/ontology/objects/Item.ts"])
        .toContain("readonly customers: Customer.ObjectSet;");
      expect(files["/virtual-sdk/ontology/objects/Customer.ts"])
        .toContain(
          type === "oneToMany"
            ? "readonly items: $SingleLinkAccessor<Item>;"
            : "readonly items: Item.ObjectSet;",
        );
    },
  );
});
