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

import type { InterfaceMetadata } from "@osdk/api";
import { describe, expect, it } from "vitest";

import type { MinimalClient } from "../../MinimalClientContext.js";
import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
} from "../../ontology/OntologyProvider.js";
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";
import { createOsdkInterface } from "./createOsdkInterface.js";
import { createOsdkObject } from "./createOsdkObject.js";
import { get$as } from "./getDollarAs.js";
import type { ObjectLoadRequest } from "./getFullyLoadedProperties.js";

const interfaceDef: InterfaceMetadata = {
  apiName: "Located",
  type: "interface",
  displayName: "Located",
  rid: "",
  description: undefined,
  links: {},
  implements: [],
  properties: { city: { type: "string" } },
};
const objectDef: FetchedObjectTypeDefinition = {
  apiName: "Person",
  type: "object",
  displayName: "Person",
  pluralDisplayName: "People",
  rid: "",
  description: undefined,
  icon: undefined,
  visibility: undefined,
  status: "ACTIVE",
  primaryKeyApiName: "id",
  primaryKeyType: "string",
  titleProperty: "id",
  properties: {
    id: { type: "string" },
    address: { type: { city: "string", zip: "string" } },
  },
  interfaceMap: { Located: {} },
  inverseInterfaceMap: {},
  links: {},
  interfaceImplementations: {
    Located: {
      city: {
        type: "structField",
        propertyApiName: "address",
        structFieldApiName: "city",
      },
    },
  },
  [InterfaceDefinitions]: {},
};

describe(get$as, () => {
  it("analyzes the stored request only when casting an interface back to its object", () => {
    let requestReads = 0;
    const request: ObjectLoadRequest = {
      objectSet: {
        type: "interfaceBase",
        interfaceType: "Located",
        includeAllBaseObjectProperties: true,
      },
      select: [],
      get selectV2() {
        requestReads++;
        return [];
      },
    };
    const object = createOsdkObject(
      {} as MinimalClient,
      objectDef,
      {
        $apiName: "Person",
        $objectType: "Person",
        $primaryKey: "1",
        $title: "1",
        id: "1",
        address: { city: "NYC", zip: "10001" },
      } as unknown as SimpleOsdkProperties,
      {},
      undefined,
      { request, interfaceApiName: "Located" },
    );
    const view = createOsdkInterface(object, interfaceDef);
    const clone = object.$clone();
    expect(view.city).toBe("NYC");
    expect(requestReads).toBe(0);
    expect(view.$as("Person")).toBe(object);
    expect(requestReads).toBeGreaterThan(0);
    expect(
      createOsdkInterface(clone, interfaceDef).$as("Person").address,
    ).toEqual({ city: "NYC", zip: "10001" });

    let partialRequestReads = 0;
    const partial = createOsdkObject(
      {} as MinimalClient,
      objectDef,
      {
        $apiName: "Person",
        $objectType: "Person",
        $primaryKey: "2",
        $title: "2",
        id: "2",
        address: { city: "NYC" },
      } as unknown as SimpleOsdkProperties,
      {},
      undefined,
      {
        request: {
          objectSet: { type: "interfaceBase", interfaceType: "Located" },
          select: [],
          get selectV2() {
            partialRequestReads++;
            return [];
          },
        },
        interfaceApiName: "Located",
      },
    );
    const partialView = createOsdkInterface(partial, interfaceDef);
    expect(partialView.city).toBe("NYC");
    expect(partialRequestReads).toBe(0);
    expect(() => partialView.$as("Person")).toThrow(/not fully loaded/u);
    expect(partialRequestReads).toBeGreaterThan(0);
  });
});
