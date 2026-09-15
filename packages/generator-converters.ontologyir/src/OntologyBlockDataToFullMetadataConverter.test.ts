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
  MarketplaceInterfaceLinkType,
  ObjectTypeBlockDataV2,
  SharedPropertyTypeBlockDataV2,
} from "@osdk/client.unstable";
import { describe, expect, it } from "vitest";

import { OntologyBlockDataToFullMetadataConverter } from "./OntologyBlockDataToFullMetadataConverter.js";

const OBJECT_RID =
  "ri.ontology.main.object-type.11111111-1111-4111-8111-111111111111";
const PROPERTY_RID =
  "ri.ontology.main.property.22222222-2222-4222-8222-222222222222";
const LINK_RID =
  "ri.ontology.main.link-type.33333333-3333-4333-8333-333333333333";
const INTERFACE_LINK_RID =
  "ri.ontology.main.interface-link-type.44444444-4444-4444-8444-444444444444";
const SHARED_PROPERTY_RID =
  "ri.ontology.main.shared-property-type.55555555-5555-4555-8555-555555555555";

describe(OntologyBlockDataToFullMetadataConverter, () => {
  it("preserves object property RIDs from block data", () => {
    const object = {
      objectType: {
        apiName: "Camper",
        rid: OBJECT_RID,
        displayMetadata: {
          displayName: "Camper",
          icon: {
            type: "blueprint",
            blueprint: { color: "#2D72D2", locator: "cube" },
          },
        },
        primaryKeys: [PROPERTY_RID],
        titlePropertyTypeRid: PROPERTY_RID,
        propertyTypes: {
          [PROPERTY_RID]: {
            apiName: "myDec",
            displayMetadata: {
              displayName: "My decimal",
              visibility: "NORMAL",
            },
            status: { type: "active", active: {} },
            type: { type: "decimal", decimal: {} },
          },
        },
        status: { type: "active", active: {} },
        implementsInterfaces2: [],
      },
    } as unknown as ObjectTypeBlockDataV2;

    const result = OntologyBlockDataToFullMetadataConverter
      .getOsdkObjectTypesFromBlockData(
        { [OBJECT_RID]: object },
        {},
        undefined,
      );

    expect(result.Camper.objectType.properties.myDec.rid).toBe(PROPERTY_RID);
  });

  it("preserves link type RIDs from block data", () => {
    const otherObjectRid =
      "ri.ontology.main.object-type.66666666-6666-4666-8666-666666666666";
    const link = {
      linkType: {
        id: "camper-to-park",
        rid: LINK_RID,
        status: { type: "active", active: {} },
        definition: {
          type: "manyToMany",
          manyToMany: {
            objectTypeRidA: OBJECT_RID,
            objectTypeRidB: otherObjectRid,
            objectTypeAToBLinkMetadata: {
              apiName: "park",
              displayMetadata: { displayName: "Park" },
            },
            objectTypeBToALinkMetadata: {
              apiName: "campers",
              displayMetadata: { displayName: "Campers" },
            },
          },
        },
      },
    } as unknown as LinkTypeBlockDataV2;

    const result = OntologyBlockDataToFullMetadataConverter
      .getLinkMappingsFromBlockData(
        [link],
        {},
        undefined,
      );

    expect(result[OBJECT_RID][0].linkTypeRid).toBe(LINK_RID);
    expect(result[otherObjectRid][0].linkTypeRid).toBe(LINK_RID);
  });

  it("preserves interface link type RIDs from block data", () => {
    const link = {
      rid: INTERFACE_LINK_RID,
      cardinality: "SINGLE",
      linkedEntityTypeId: {
        type: "interfaceType",
        interfaceType: "ri.ontology.main.interface-type.park",
      },
      metadata: {
        apiName: "park",
        displayName: "Park",
        description: "The linked park",
      },
      required: false,
    } as MarketplaceInterfaceLinkType;

    const result = OntologyBlockDataToFullMetadataConverter
      .getOsdkInterfaceLinkTypesFromBlockData(
        [link],
        undefined,
      );

    expect(result.park.rid).toBe(INTERFACE_LINK_RID);
  });

  it("preserves shared property type RIDs from block data", () => {
    const sharedPropertyType = {
      sharedPropertyType: {
        apiName: "park",
        rid: SHARED_PROPERTY_RID,
        displayMetadata: { displayName: "Park" },
        type: { type: "string", string: {} },
      },
    } as unknown as SharedPropertyTypeBlockDataV2;

    const result = OntologyBlockDataToFullMetadataConverter
      .getOsdkSharedPropertyTypesFromBlockData(
        {
          [SHARED_PROPERTY_RID]: sharedPropertyType,
        },
      );

    expect(result.park.rid).toBe(SHARED_PROPERTY_RID);
  });
});
