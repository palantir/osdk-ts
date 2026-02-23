/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectMetadata } from "@osdk/api";
import { describe, expect, expectTypeOf, it } from "vitest";
import type {
  supportedIconTypes,
  supportedObjectTypeVisibility,
  supportedReleaseStatus,
} from "./wireObjectTypeFullMetadataToSdkObjectMetadata.js";
import { wireObjectTypeFullMetadataToSdkObjectMetadata } from "./wireObjectTypeFullMetadataToSdkObjectMetadata.js";

describe(wireObjectTypeFullMetadataToSdkObjectMetadata, () => {
  it("handles magic nullable properties", () => {
    const result = wireObjectTypeFullMetadataToSdkObjectMetadata({
      implementsInterfaces: [],
      implementsInterfaces2: {},
      linkTypes: [],
      objectType: {
        apiName: "apiName",
        description: "description",
        displayName: "displayName",
        pluralDisplayName: "displayNames",
        icon: { type: "blueprint", name: "blueprint", color: "blue" },
        primaryKey: "primaryKey",
        properties: {
          primaryKey: {
            dataType: { type: "string" },
            "rid": "rid",
            typeClasses: [],
          },
          otherKey: {
            nullable: false,
            dataType: { type: "string" },
            rid: "rid",
            typeClasses: [],
          },
          defaulted: {
            dataType: { type: "string" },
            rid: "rid",
            typeClasses: [],
          },
        },
        rid: "rid",
        status: "ACTIVE",
        titleProperty: "otherKey",
      },
      sharedPropertyTypeMapping: {},
    }, true);

    // PK is never nullable
    expect(result.properties["primaryKey"].nullable).toBe(false);

    // was specified above
    expect(result.properties["otherKey"].nullable).toBe(false);

    // was unspecified, so should be nullable
    expect(result.properties["defaulted"].nullable).toBe(true);
  });

  it("Is up to date with the enums from API", () => {
    type excludedStatuses = "";
    expectTypeOf<
      Exclude<
        typeof supportedReleaseStatus[number],
        excludedStatuses
      >
    >()
      .toEqualTypeOf<
        NonNullable<ObjectMetadata["status"]>
      >();

    type excludedVisibility = "";
    expectTypeOf<
      Exclude<typeof supportedObjectTypeVisibility[number], excludedVisibility>
    >().toEqualTypeOf<
      NonNullable<ObjectMetadata["visibility"]>
    >();

    type excludedIconTypes = "";
    expectTypeOf<
      Exclude<typeof supportedIconTypes[number], excludedIconTypes>
    >()
      .toEqualTypeOf<
        NonNullable<NonNullable<ObjectMetadata["icon"]>["type"]>
      >();
  });

  it("does not throw when enums don't match", () => {
    const result = wireObjectTypeFullMetadataToSdkObjectMetadata({
      implementsInterfaces: [],
      implementsInterfaces2: {},
      linkTypes: [],
      objectType: {
        apiName: "apiName",
        description: "description",
        displayName: "displayName",
        pluralDisplayName: "displayNames",
        icon: {
          type: "INVALID_NOT_IN_API",
          name: "blueprint",
          color: "blue",
        } as any,
        primaryKey: "primaryKey",
        properties: {
          primaryKey: {
            dataType: { type: "string" },
            "rid": "rid",
            typeClasses: [],
          },
          otherKey: {
            nullable: false,
            dataType: { type: "string" },
            rid: "rid",
            typeClasses: [],
          },
          defaulted: {
            dataType: { type: "string" },
            rid: "rid",
            typeClasses: [],
          },
        },
        rid: "rid",
        status: "INVALID_NOT_IN_API" as any,
        visibility: "INVALID_NOT_IN_API" as any,
        titleProperty: "otherKey",
      },
      sharedPropertyTypeMapping: {},
    }, true);

    expect(result.status).toBeUndefined();
    expect(result.visibility).toBeUndefined();
    expect(result.icon).toBeUndefined();
  });

  it("sorts the implements array for stable output", () => {
    const result = wireObjectTypeFullMetadataToSdkObjectMetadata({
      implementsInterfaces: ["InterfaceZ", "InterfaceA", "InterfaceC"],
      implementsInterfaces2: {
        "InterfaceZ": { properties: {}, propertiesV2: {}, links: {} },
        "InterfaceA": { properties: {}, propertiesV2: {}, links: {} },
        "InterfaceC": { properties: {}, propertiesV2: {}, links: {} },
      },
      linkTypes: [],
      objectType: {
        apiName: "apiName",
        description: "description",
        displayName: "displayName",
        pluralDisplayName: "displayNames",
        icon: { type: "blueprint", name: "blueprint", color: "blue" },
        primaryKey: "primaryKey",
        properties: {
          primaryKey: {
            dataType: { type: "string" },
            "rid": "rid",
            typeClasses: [],
          },
        },
        rid: "rid",
        status: "ACTIVE",
        titleProperty: "primaryKey",
      },
      sharedPropertyTypeMapping: {},
    }, true);

    // Check that the array is sorted alphabetically
    expect(result.implements).toEqual([
      "InterfaceA",
      "InterfaceC",
      "InterfaceZ",
    ]);
  });

  it("sorts the linkTypes array for stable output", () => {
    const result = wireObjectTypeFullMetadataToSdkObjectMetadata({
      implementsInterfaces: [],
      implementsInterfaces2: {},
      linkTypes: [
        {
          apiName: "linkZ",
          cardinality: "ONE",
          objectTypeApiName: "TargetZ",
          displayName: "LinkZ",
          status: "ACTIVE",
          linkTypeRid: "ridZ",
        },
        {
          apiName: "linkA",
          cardinality: "MANY",
          objectTypeApiName: "TargetA",
          displayName: "LinkA",
          status: "ACTIVE",
          linkTypeRid: "ridA",
        },
        {
          apiName: "linkC",
          cardinality: "ONE",
          objectTypeApiName: "TargetC",
          displayName: "LinkC",
          status: "ACTIVE",
          linkTypeRid: "ridC",
        },
      ],
      objectType: {
        apiName: "apiName",
        description: "description",
        displayName: "displayName",
        pluralDisplayName: "displayNames",
        icon: { type: "blueprint", name: "blueprint", color: "blue" },
        primaryKey: "primaryKey",
        properties: {
          primaryKey: {
            dataType: { type: "string" },
            "rid": "rid",
            typeClasses: [],
          },
        },
        rid: "rid",
        status: "ACTIVE",
        titleProperty: "primaryKey",
      },
      sharedPropertyTypeMapping: {},
    }, true);

    // Get the link keys in the order they appear in the result
    const linkKeys = Object.keys(result.links);

    // Check that the links are sorted alphabetically by apiName
    expect(linkKeys).toEqual(["linkA", "linkC", "linkZ"]);
  });

  it("preserves empty arrays", () => {
    const result = wireObjectTypeFullMetadataToSdkObjectMetadata({
      implementsInterfaces: [],
      implementsInterfaces2: {},
      linkTypes: [],
      objectType: {
        apiName: "apiName",
        description: "description",
        displayName: "displayName",
        pluralDisplayName: "displayNames",
        icon: { type: "blueprint", name: "blueprint", color: "blue" },
        primaryKey: "primaryKey",
        properties: {
          primaryKey: {
            dataType: { type: "string" },
            "rid": "rid",
            typeClasses: [],
          },
        },
        rid: "rid",
        status: "ACTIVE",
        titleProperty: "primaryKey",
      },
      sharedPropertyTypeMapping: {},
    }, true);

    // Check that empty array is preserved
    expect(result.implements).toEqual([]);
  });
});
