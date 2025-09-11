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
import { Subject } from "rxjs";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { additionalContext } from "../../Client.js";
import type { Changes } from "./Changes.js";
import { getObjectTypesThatInvalidate } from "./getObjectTypesThatInvalidate.js";
import { ListQuery } from "./ListQuery.js";
import type { Store } from "./Store.js";

describe("RDP Invalidation", () => {
  describe("getObjectTypesThatInvalidate", () => {
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
  });

  describe("ListQuery RDP invalidation", () => {
    let mockStore: any;
    let mockObjectSet: any;
    let subject: Subject<any>;
    let mockChanges: Changes;
    let revalidateSpy: any;

    beforeEach(() => {
      const mockAdditionalContext = {
        ontologyProvider: {
          getObjectDefinition: vi.fn(),
          getInterfaceDefinition: vi.fn(),
        },
        logger: undefined,
      };

      const mockClient = vi.fn() as any;
      mockClient[additionalContext] = mockAdditionalContext;
      mockClient.fetchMetadata = vi.fn();

      mockStore = {
        client: mockClient,
        getCacheKey: vi.fn(),
        batch: vi.fn(),
      };

      mockObjectSet = {
        fetchPage: vi.fn().mockResolvedValue({
          data: [],
          nextPageToken: undefined,
        }),
      };

      subject = new Subject();
      mockChanges = { modified: new Set() } as any as Changes;
    });

    function createListQuery(hasRdps: boolean) {
      const cacheKey = {
        type: "list" as const,
        otherKeys: [
          "object" as const,
          "ObjectA",
          {} as any,
          {} as any,
        ] as [
          type: "object" | "interface",
          apiName: string,
          whereClause: any,
          orderByClause: any,
        ],
        __cacheKey: {} as any,
      };

      const rdpMappings = hasRdps ? new Map([["prop", "rdp_123"]]) : undefined;
      const listQuery = new ListQuery(
        mockStore as Store,
        subject as any,
        "object",
        "ObjectA",
        mockObjectSet,
        cacheKey as any,
        {},
        rdpMappings,
      );

      revalidateSpy = vi.spyOn(listQuery, "revalidate").mockResolvedValue();
      return { listQuery, cacheKey };
    }

    it("should not invalidate unrelated object types", async () => {
      const { listQuery, cacheKey } = createListQuery(true);

      await listQuery.invalidateObjectType("UnrelatedType", mockChanges);

      expect(revalidateSpy).not.toHaveBeenCalled();
      expect(mockChanges.modified.has(cacheKey)).toBe(false);
    });

    it("should handle lists without RDPs", async () => {
      const { listQuery, cacheKey } = createListQuery(false);

      await listQuery.invalidateObjectType("ObjectB", mockChanges);
      expect(revalidateSpy).not.toHaveBeenCalled();
      expect(mockChanges.modified.has(cacheKey)).toBe(false);

      await listQuery.invalidateObjectType("ObjectA", mockChanges);
      expect(revalidateSpy).toHaveBeenCalledWith(true);
      expect(mockChanges.modified.has(cacheKey)).toBe(true);
    });
  });
});
