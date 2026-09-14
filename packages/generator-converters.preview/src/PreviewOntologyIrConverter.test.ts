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
  MarketplaceInterfaceType,
  OntologyBlockDataV2,
  SharedPropertyType,
  ValueTypeBlockData,
  ValueTypeReference,
} from "@osdk/client.unstable";
import { generateClientSdkVersionTwoPointZero } from "@osdk/generator";
import { OntologyBlockDataToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import { describe, expect, it, vi } from "vitest";
import { PreviewOntologyIrConverter } from "./PreviewOntologyIrConverter.js";

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
