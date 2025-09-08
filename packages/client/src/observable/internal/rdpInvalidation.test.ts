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

import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import { getObjectTypesThatInvalidate } from "./getObjectTypesThatInvalidate.js";

describe("RDP Invalidation", () => {
  const mockOntologyProvider = {
    getObjectDefinition: async (apiName: string) => ({
      apiName,
      type: "object" as const,
      primaryKeyApiName: "id",
      primaryKeyType: "string" as const,
      properties: {},
      links: {
        linkToB: {
          targetType: "ObjectB",
          apiName: "linkToB",
          cardinality: "ONE" as const,
        },
      },
    }),
    getInterfaceDefinition: async (apiName: string) => ({
      apiName,
      type: "interface" as const,
      properties: {},
      links: {},
      implementedBy: [],
    }),
  };

  const mockMinimalClient = {
    ontologyProvider: mockOntologyProvider,
  };

  it("should extract object types from simple object set", async () => {
    const objectSet: WireObjectSet = {
      type: "base",
      objectType: "ObjectA",
    };

    const result = await getObjectTypesThatInvalidate(
      mockMinimalClient as any,
      objectSet,
    );

    expect(result.resultType.apiName).toBe("ObjectA");
    expect(result.invalidationSet.has("ObjectA")).toBe(false); // Final type not in invalidation set
    expect(result.counts).toEqual({ ObjectA: 1 });
  });

  it("should track object types traversed by searchAround", async () => {
    const objectSet: WireObjectSet = {
      type: "searchAround",
      objectSet: {
        type: "base",
        objectType: "ObjectA",
      },
      link: "linkToB",
    };

    const result = await getObjectTypesThatInvalidate(
      mockMinimalClient as any,
      objectSet,
    );

    expect(result.resultType.apiName).toBe("ObjectB");
    expect(result.invalidationSet.has("ObjectA")).toBe(true); // ObjectA is traversed
    expect(result.invalidationSet.has("ObjectB")).toBe(false); // Final type not in invalidation
    expect(result.counts).toEqual({ ObjectA: 1, ObjectB: 1 });
  });

  it("should handle withProperties RDP definitions", async () => {
    const objectSet: WireObjectSet = {
      type: "withProperties",
      objectSet: {
        type: "base",
        objectType: "ObjectA",
      },
      derivedProperties: {
        prop1: {
          type: "selection",
          objectSet: {
            type: "searchAround",
            objectSet: {
              type: "methodInput",
            },
            link: "linkToB",
          },
          operation: {
            type: "get",
            selectedPropertyApiName: "someProperty",
          },
        },
      },
    };

    const result = await getObjectTypesThatInvalidate(
      mockMinimalClient as any,
      objectSet,
    );

    expect(result.resultType.apiName).toBe("ObjectA");
    expect(result.invalidationSet.has("ObjectA")).toBe(false); // Final type
    expect(result.invalidationSet.has("ObjectB")).toBe(true); // RDP traverses to ObjectB
    expect(result.counts.ObjectA).toBe(1);
    expect(result.counts.ObjectB).toBe(1);
  });

  it("should handle union operations with max counts", async () => {
    const objectSet: WireObjectSet = {
      type: "union",
      objectSets: [
        {
          type: "searchAround",
          objectSet: {
            type: "base",
            objectType: "ObjectA",
          },
          link: "linkToB",
        },
        {
          type: "base",
          objectType: "ObjectB",
        },
      ],
    };

    const result = await getObjectTypesThatInvalidate(
      mockMinimalClient as any,
      objectSet,
    );

    expect(result.resultType.apiName).toBe("ObjectB");
    expect(result.invalidationSet.has("ObjectA")).toBe(true); // Traversed in first branch
    expect(result.invalidationSet.has("ObjectB")).toBe(false); // Final type
    // Union uses max of counts from branches
    expect(result.counts).toEqual({ ObjectA: 1, ObjectB: 1 });
  });
});
