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
import { describe, expect, it } from "vitest";

import {
  getFullyLoadedProperties,
  type ObjectLoadRequest,
} from "./getFullyLoadedProperties.js";

const objectDef: ObjectMetadata = {
  type: "object",
  apiName: "Person",
  rid: "",
  interfaceMap: { "ns.Named": { "ns.label": "name" } },
  inverseInterfaceMap: {},
  primaryKeyApiName: "id",
  primaryKeyType: "string",
  titleProperty: "name",
  displayName: "Person",
  pluralDisplayName: "People",
  description: undefined,
  icon: undefined,
  visibility: undefined,
  status: "ACTIVE",
  links: {},
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    address: { type: { city: "string", zip: "string" } },
    scores: { type: "integer", multiplicity: true },
  },
  interfaceImplementations: {
    "ns.Named": {
      "ns.label": { type: "localProperty", propertyApiName: "name" },
      "ns.city": {
        type: "structField",
        propertyApiName: "address",
        structFieldApiName: "city",
      },
      "ns.score": {
        type: "reduced",
        implementation: { type: "localProperty", propertyApiName: "scores" },
      },
    },
  },
};
const objectRequest: ObjectLoadRequest = {
  objectSet: { type: "base", objectType: "Person" },
  select: [],
  selectV2: [],
};
const interfaceRequest: ObjectLoadRequest = {
  objectSet: { type: "interfaceBase", interfaceType: "ns.Named" },
  select: [],
  selectV2: [],
};
const allBaseRequest: ObjectLoadRequest = {
  ...interfaceRequest,
  objectSet: {
    type: "intersect",
    objectSets: [
      interfaceRequest.objectSet,
      {
        type: "interfaceBase",
        interfaceType: "ns.Named",
        includeAllBaseObjectProperties: true,
      },
    ],
  },
};
const analyzeInterface = (request: ObjectLoadRequest) =>
  getFullyLoadedProperties(request, objectDef, "ns.Named");

describe("getFullyLoadedProperties", () => {
  it("tracks whole object properties through selections and load levels", () => {
    expect(
      getFullyLoadedProperties(objectRequest, objectDef, undefined),
    ).toEqual(new Set(["id", "name", "address", "scores"]));
    expect(
      getFullyLoadedProperties(
        { ...objectRequest, select: ["address"] },
        objectDef,
        undefined,
      ),
    ).toEqual(new Set(["address"]));
    expect(
      getFullyLoadedProperties(
        {
          ...objectRequest,
          selectV2: [
            { type: "property", apiName: "name" },
            {
              type: "structField",
              propertyApiName: "address",
              structFieldApiName: "city",
            },
            {
              type: "propertyWithLoadLevel",
              propertyIdentifier: { type: "property", apiName: "scores" },
              loadLevel: { type: "applyReducers" },
            },
          ],
        },
        objectDef,
        undefined,
      ),
    ).toEqual(new Set(["name"]));
    expect(
      getFullyLoadedProperties(
        { ...objectRequest, defaultLoadLevel: { type: "extractMainValue" } },
        objectDef,
        undefined,
      ),
    ).toEqual(new Set());
    expect(
      getFullyLoadedProperties(
        {
          ...objectRequest,
          defaultLoadLevel: { type: "applyReducersAndExtractMainValue" },
          selectV2: [
            { type: "property", apiName: "scores" },
            {
              type: "propertyWithLoadLevel",
              propertyIdentifier: { type: "property", apiName: "address" },
              loadLevel: { type: "noLoadLevel" },
            },
          ],
        },
        objectDef,
        undefined,
      ),
    ).toEqual(new Set(["address"]));
  });

  it("requires full base scope for interface structs and still respects selections", () => {
    expect(analyzeInterface(interfaceRequest)).toEqual(new Set(["name"]));
    expect(analyzeInterface(allBaseRequest)).toEqual(
      new Set(["id", "name", "address", "scores"]),
    );
    expect(
      analyzeInterface({
        ...allBaseRequest,
        selectV2: [{ type: "property", apiName: "ns.city" }],
      }),
    ).toEqual(new Set());
    expect(
      analyzeInterface({
        ...allBaseRequest,
        selectV2: [{ type: "property", apiName: "ns.label" }],
      }),
    ).toEqual(new Set(["name"]));
    expect(
      analyzeInterface({
        ...allBaseRequest,
        defaultLoadLevel: { type: "extractMainValue" },
      }),
    ).toEqual(new Set());
    expect(
      analyzeInterface({
        ...interfaceRequest,
        objectSet: {
          type: "filter",
          where: { type: "and", value: [] },
          objectSet: allBaseRequest.objectSet,
        },
      }),
    ).toEqual(new Set(["id", "name", "address", "scores"]));
    expect(
      analyzeInterface({
        ...interfaceRequest,
        objectSet: {
          type: "union",
          objectSets: [allBaseRequest.objectSet, interfaceRequest.objectSet],
        },
      }),
    ).toEqual(new Set(["name"]));
  });

  it("does not treat a transformed interface alias as a complete backing property", () => {
    const aliasedDef: ObjectMetadata = {
      ...objectDef,
      interfaceMap: {
        "ns.Named": { "ns.label": "name", "ns.address": "address" },
      },
      interfaceImplementations: {
        "ns.Named": {
          ...objectDef.interfaceImplementations!["ns.Named"],
          "ns.address": { type: "localProperty", propertyApiName: "address" },
        },
      },
    };
    expect(
      getFullyLoadedProperties(interfaceRequest, aliasedDef, "ns.Named"),
    ).toEqual(new Set(["name", "address"]));
    expect(
      getFullyLoadedProperties(
        {
          ...interfaceRequest,
          selectV2: [
            { type: "property", apiName: "ns.address" },
            {
              type: "propertyWithLoadLevel",
              propertyIdentifier: { type: "property", apiName: "ns.city" },
              loadLevel: { type: "extractMainValue" },
            },
          ],
        },
        aliasedDef,
        "ns.Named",
      ),
    ).toEqual(new Set());
  });

  it("only trusts supplied properties when no load request is available", () => {
    expect(getFullyLoadedProperties(undefined, objectDef, undefined)).toEqual(
      new Set(),
    );
    expect(
      getFullyLoadedProperties(undefined, objectDef, undefined, ["address"]),
    ).toEqual(new Set(["address"]));
    expect(
      getFullyLoadedProperties(undefined, objectDef, "ns.Named", [
        "name",
        "address",
      ]),
    ).toEqual(new Set(["name"]));
  });
});
