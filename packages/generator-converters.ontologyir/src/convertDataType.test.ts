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

import type { FunctionDiscovery } from "@osdk/client.unstable";
import { describe, expect, it } from "vitest";
import { convertDataType } from "./convertDataType.js";

const STRING: FunctionDiscovery.DataType = { type: "string", string: {} };
const INTEGER: FunctionDiscovery.DataType = { type: "integer", integer: {} };

const ASSET_RID = "ri.ontology.main.interface-type.asset";
const ASSET_API_NAME = "com.example.asset";
const PERSON_RID = "ri.ontology.main.interface-type.person";
const PERSON_API_NAME = "com.example.person";
const INTERFACE_RID_TO_API_NAME = {
  [ASSET_RID]: ASSET_API_NAME,
  [PERSON_RID]: PERSON_API_NAME,
};

const ASSET: FunctionDiscovery.DataType = {
  type: "interface",
  interface: { interfaceTypeRid: ASSET_RID },
};
const PERSON: FunctionDiscovery.DataType = {
  type: "interface",
  interface: { interfaceTypeRid: PERSON_RID },
};
const PEOPLE: FunctionDiscovery.DataType = {
  type: "interfaceObjectSet",
  interfaceObjectSet: { interfaceTypeRid: PERSON_RID },
};

function convert(
  dataType: FunctionDiscovery.DataType,
  customTypes: Record<string, unknown> = {},
) {
  return convertDataType(dataType, customTypes, {});
}

describe(convertDataType, () => {
  it.each<FunctionDiscovery.GeoShapeType>([
    {},
    { subType: { type: "geoPoint", geoPoint: {} } },
    { subType: { type: "polygon", polygon: {} } },
  ])("converts geo shapes with metadata %j", geoShape => {
    expect(convert({ type: "geoShape", geoShape })).toEqual({
      type: "geoshape",
    });
  });

  it("converts nested optional geo shapes", () => {
    expect(convert({
      type: "anonymousCustomType",
      anonymousCustomType: {
        fields: {
          locations: {
            type: "list",
            list: {
              elementsType: {
                type: "optionalType",
                optionalType: {
                  wrappedType: { type: "geoShape", geoShape: {} },
                },
              },
            },
          },
        },
      },
    })).toEqual({
      type: "struct",
      fields: [{
        name: "locations",
        fieldType: {
          type: "array",
          subType: {
            type: "union",
            unionTypes: [{ type: "geoshape" }, { type: "null" }],
          },
        },
      }],
    });
  });

  it("rejects a durable context used as a value", () => {
    expect(() => convert({ type: "durableContext", durableContext: {} }))
      .toThrow(
        "Unsupported data type: durableContext",
      );
  });

  it.each([null, [], "invalid"])(
    "rejects invalid custom type fields: %j",
    fields => {
      expect(() =>
        convert({
          type: "functionCustomType",
          functionCustomType: "invalid",
        }, { invalid: { fields } })
      ).toThrow("Invalid custom type structure");
    },
  );

  it("converts a media reference", () => {
    expect(convert({ type: "mediaReference", mediaReference: {} }))
      .toEqual({ type: "mediaReference" });
  });

  it("converts an optional media reference to a union with null", () => {
    expect(
      convert(
        {
          type: "optionalType",
          optionalType: {
            wrappedType: { type: "mediaReference", mediaReference: {} },
          },
        },
      ),
    ).toEqual({
      type: "union",
      unionTypes: [{ type: "mediaReference" }, { type: "null" }],
    });
  });

  it("converts a map to an entrySet, recursing into both sides", () => {
    expect(
      convert(
        {
          type: "map",
          map: { keysType: STRING, valuesType: INTEGER },
        },
      ),
    ).toEqual({
      type: "entrySet",
      keyType: { type: "string" },
      valueType: { type: "integer" },
    });
  });

  it("converts an anonymous custom type to a struct", () => {
    expect(
      convert(
        {
          type: "anonymousCustomType",
          anonymousCustomType: {
            fields: { test: STRING },
            fieldMetadata: { test: { required: true } },
          },
        },
      ),
    ).toEqual({
      type: "struct",
      fields: [{ name: "test", fieldType: { type: "string" } }],
    });
  });

  it("treats an anonymous custom type field as required when fieldMetadata is absent", () => {
    expect(
      convert(
        {
          type: "anonymousCustomType",
          anonymousCustomType: { fields: { test: STRING } },
        },
      ),
    ).toEqual({
      type: "struct",
      fields: [{ name: "test", fieldType: { type: "string" } }],
    });
  });

  it("wraps an optional custom type field in a union with null", () => {
    expect(
      convert(
        {
          type: "anonymousCustomType",
          anonymousCustomType: {
            fields: { test: STRING },
            fieldMetadata: { test: { required: false } },
          },
        },
      ),
    ).toEqual({
      type: "struct",
      fields: [{
        name: "test",
        fieldType: {
          type: "union",
          unionTypes: [{ type: "string" }, { type: "null" }],
        },
      }],
    });
  });

  it("resolves a named custom type through the customTypes map", () => {
    expect(
      convert(
        {
          type: "functionCustomType",
          functionCustomType: "some-uuid",
        },
        {
          "some-uuid": {
            fields: { test: STRING, testTwo: INTEGER },
            fieldMetadata: {
              test: { required: true },
              testTwo: { required: true },
            },
          },
        },
      ),
    ).toEqual({
      type: "struct",
      fields: [
        { name: "test", fieldType: { type: "string" } },
        { name: "testTwo", fieldType: { type: "integer" } },
      ],
    });
  });

  it("resolves interface and interface object set fields of a named custom type", () => {
    expect(
      convertDataType(
        { type: "functionCustomType", functionCustomType: "some-uuid" },
        { "some-uuid": { fields: { asset: ASSET, people: PEOPLE } } },
        INTERFACE_RID_TO_API_NAME,
      ),
    ).toEqual({
      type: "struct",
      fields: [
        {
          name: "asset",
          fieldType: {
            type: "interfaceObject",
            interfaceTypeApiName: ASSET_API_NAME,
          },
        },
        {
          name: "people",
          fieldType: {
            type: "interfaceObjectSet",
            interfaceTypeApiName: PERSON_API_NAME,
          },
        },
      ],
    });
  });

  it("resolves interface fields of an anonymous custom type", () => {
    expect(
      convertDataType(
        {
          type: "anonymousCustomType",
          anonymousCustomType: { fields: { asset: ASSET } },
        },
        {},
        INTERFACE_RID_TO_API_NAME,
      ),
    ).toEqual({
      type: "struct",
      fields: [{
        name: "asset",
        fieldType: {
          type: "interfaceObject",
          interfaceTypeApiName: ASSET_API_NAME,
        },
      }],
    });
  });

  it("resolves interfaces inside list and optional custom type fields", () => {
    expect(
      convertDataType(
        {
          type: "anonymousCustomType",
          anonymousCustomType: {
            fields: {
              assets: { type: "list", list: { elementsType: ASSET } },
              owner: PERSON,
            },
            fieldMetadata: { owner: { required: false } },
          },
        },
        {},
        INTERFACE_RID_TO_API_NAME,
      ),
    ).toEqual({
      type: "struct",
      fields: [
        {
          name: "assets",
          fieldType: {
            type: "array",
            subType: {
              type: "interfaceObject",
              interfaceTypeApiName: ASSET_API_NAME,
            },
          },
        },
        {
          name: "owner",
          fieldType: {
            type: "union",
            unionTypes: [
              {
                type: "interfaceObject",
                interfaceTypeApiName: PERSON_API_NAME,
              },
              { type: "null" },
            ],
          },
        },
      ],
    });
  });

  it("resolves interfaces inside custom types nested in other custom types", () => {
    expect(
      convertDataType(
        { type: "functionCustomType", functionCustomType: "outer-uuid" },
        {
          "outer-uuid": {
            fields: {
              owner: {
                type: "functionCustomType",
                functionCustomType: "inner-uuid",
              },
              location: {
                type: "anonymousCustomType",
                anonymousCustomType: { fields: { site: ASSET } },
              },
            },
          },
          "inner-uuid": { fields: { person: PERSON } },
        },
        INTERFACE_RID_TO_API_NAME,
      ),
    ).toEqual({
      type: "struct",
      fields: [
        {
          name: "owner",
          fieldType: {
            type: "struct",
            fields: [{
              name: "person",
              fieldType: {
                type: "interfaceObject",
                interfaceTypeApiName: PERSON_API_NAME,
              },
            }],
          },
        },
        {
          name: "location",
          fieldType: {
            type: "struct",
            fields: [{
              name: "site",
              fieldType: {
                type: "interfaceObject",
                interfaceTypeApiName: ASSET_API_NAME,
              },
            }],
          },
        },
      ],
    });
  });

  it("converts a union recursively", () => {
    expect(
      convert({
        type: "union",
        union: { allowedTypes: [STRING, INTEGER] },
      }),
    ).toEqual({
      type: "union",
      unionTypes: [{ type: "string" }, { type: "integer" }],
    });
  });

  it("still reports genuinely unsupported data types", () => {
    expect(() =>
      convert({ type: "vector" } as unknown as FunctionDiscovery.DataType)
    ).toThrow(
      "Unsupported data type: vector",
    );
  });
});
