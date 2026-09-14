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
  ValueTypeReference,
} from "@osdk/client.unstable";
import { describe, expect, it } from "vitest";
import type { ResolvedValueType } from "./convertValueType.js";
import { OntologyBlockDataToFullMetadataConverter } from "./OntologyBlockDataToFullMetadataConverter.js";

const valueType: ResolvedValueType = {
  rid: "value-type-rid",
  apiName: "classification",
  displayMetadata: {
    displayName: "Classification",
    description: "A classification",
  },
  status: { type: "active", active: {} },
  version: "2.0.0",
  baseType: { type: "string", string: {} },
  constraints: [],
};

function blockData(
  reference: ValueTypeReference | null | undefined,
): OntologyBlockDataV2 {
  const stringType = {
    type: "string",
    string: { isLongText: false, supportsExactMatching: true },
  } as const;
  const sharedProperty: SharedPropertyType = {
    rid: "shared-property-rid",
    apiName: "classificationProperty",
    displayMetadata: { displayName: "Classification", visibility: "NORMAL" },
    type: stringType,
    indexedForSearch: false,
    typeClasses: [],
    aliases: [],
    valueType: reference,
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
      legacyProperty: { required: false, sharedPropertyType: sharedProperty },
    },
    propertiesV3: {
      "defined-property-rid": {
        type: "interfaceDefinedPropertyType",
        interfaceDefinedPropertyType: {
          rid: "defined-property-rid",
          apiName: "definedProperty",
          displayMetadata: { displayName: "Defined", visibility: "NORMAL" },
          type: stringType,
          constraints: {
            indexedForSearch: false,
            primaryKeyConstraint: "NO_RESTRICTION",
            requireImplementation: false,
            typeClasses: [],
            valueType: reference,
          },
        },
      },
      "shared-property-rid": {
        type: "sharedPropertyBasedPropertyType",
        sharedPropertyBasedPropertyType: {
          requireImplementation: false,
          sharedPropertyType: sharedProperty,
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
              ...sharedProperty,
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
      "shared-property-rid": { sharedPropertyType: sharedProperty },
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

describe(OntologyBlockDataToFullMetadataConverter, () => {
  it.each(["1.0.0", "2.0.0"])(
    "associates object, shared, and interface properties by RID for consumed version %s",
    versionId => {
      const metadata = OntologyBlockDataToFullMetadataConverter
        .getFullMetadataFromBlockData(
          blockData({ rid: valueType.rid, versionId }),
          undefined,
          undefined,
          [{ ...valueType, rid: "other-rid", apiName: "otherType" }, valueType],
        );
      expect.soft(
        metadata.objectTypes.Item.objectType.properties.classificationProperty
          .valueTypeApiName,
      )
        .toBe("classification");
      expect.soft(
        metadata.sharedPropertyTypes.classificationProperty.valueTypeApiName,
      )
        .toBe("classification");
      expect.soft(
        metadata.interfaceTypes.Parent.properties.legacyProperty
          .valueTypeApiName,
      )
        .toBe("classification");
      expect.soft(
        metadata.interfaceTypes.Parent.propertiesV2?.definedProperty
          .valueTypeApiName,
      )
        .toBe("classification");
      expect.soft(
        metadata.interfaceTypes.Parent.propertiesV2?.classificationProperty
          .valueTypeApiName,
      )
        .toBe("classification");
      expect(metadata.valueTypes.classification.version).toBe("2.0.0");
    },
  );

  it("preserves associations on inherited interface properties", () => {
    const metadata = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(
        blockData({ rid: valueType.rid, versionId: "1.0.0" }),
        undefined,
        undefined,
        [valueType],
      );
    const child = metadata.interfaceTypes.Child;
    expect.soft(child.allProperties?.legacyProperty.valueTypeApiName).toBe(
      "classification",
    );
    expect.soft(child.allPropertiesV2?.definedProperty.valueTypeApiName).toBe(
      "classification",
    );
    expect.soft(child.allPropertiesV2?.classificationProperty.valueTypeApiName)
      .toBe("classification");
    expect(child.propertiesV2).toEqual({});
  });

  it.each([undefined, null, { rid: "unloaded-rid", versionId: "1.0.0" }])(
    "leaves absent or unloaded references unset: %j",
    reference => {
      const metadata = OntologyBlockDataToFullMetadataConverter
        .getFullMetadataFromBlockData(
          blockData(reference),
          undefined,
          undefined,
          [valueType],
        );
      expect(
        metadata.objectTypes.Item.objectType.properties.classificationProperty
          .valueTypeApiName,
      )
        .toBeUndefined();
      expect(
        metadata.sharedPropertyTypes.classificationProperty.valueTypeApiName,
      )
        .toBeUndefined();
      expect(
        metadata.interfaceTypes.Parent.properties.legacyProperty
          .valueTypeApiName,
      )
        .toBeUndefined();
      expect(
        metadata.interfaceTypes.Parent.allPropertiesV2?.definedProperty
          .valueTypeApiName,
      )
        .toBeUndefined();
      expect(
        metadata.interfaceTypes.Parent.allPropertiesV2?.classificationProperty
          .valueTypeApiName,
      )
        .toBeUndefined();
    },
  );

  it("preserves conversion without supplied value types", () => {
    const metadata = OntologyBlockDataToFullMetadataConverter
      .getFullMetadataFromBlockData(
        blockData({ rid: valueType.rid, versionId: "1.0.0" }),
      );
    expect(metadata.valueTypes).toEqual({});
    expect(
      metadata.objectTypes.Item.objectType.properties.classificationProperty
        .valueTypeApiName,
    )
      .toBeUndefined();
    expect(metadata.sharedPropertyTypes.classificationProperty.valueTypeApiName)
      .toBeUndefined();
    expect(
      metadata.interfaceTypes.Child.allProperties?.legacyProperty
        .valueTypeApiName,
    )
      .toBeUndefined();
    expect(
      metadata.interfaceTypes.Child.allPropertiesV2?.definedProperty
        .valueTypeApiName,
    )
      .toBeUndefined();
    expect(
      metadata.interfaceTypes.Child.allPropertiesV2?.classificationProperty
        .valueTypeApiName,
    )
      .toBeUndefined();
  });
});
