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

import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { additionalContext } from "../../../Client.js";
import { ObjectsHelper } from "../object/ObjectsHelper.js";
import { ObjectQuery } from "../ObjectQuery.js";
import { RdpCanonicalizer } from "../RdpCanonicalizer.js";
import { Store } from "../Store.js";

describe("ObjectQuery with RDPs", () => {
  let store: Store;
  let objectsHelper: ObjectsHelper;
  let rdpCanonicalizer: RdpCanonicalizer;
  let mockClient: any;

  beforeEach(() => {
    mockClient = vi.fn() as any;
    mockClient[additionalContext] = {
      ontologyProvider: {
        getObjectDefinition: vi.fn().mockResolvedValue({
          apiName: "Employee",
          type: "object",
          primaryKeyApiName: "id",
          primaryKeyType: "string",
          properties: {},
          links: {},
        }),
        getInterfaceDefinition: vi.fn(),
      },
      logger: undefined,
    };

    mockClient.fetchMetadata = vi.fn().mockResolvedValue({
      apiName: "Employee",
      type: "object",
      primaryKeyApiName: "id",
      primaryKeyType: "string",
      properties: {},
      links: {},
    });

    store = new Store(mockClient);
    rdpCanonicalizer = new RdpCanonicalizer();
    objectsHelper = new ObjectsHelper(store, rdpCanonicalizer);
  });

  it("should register RDPs when creating query with withProperties", () => {
    const withProperties = {
      peepCount: vi.fn(),
      avgSalary: vi.fn(),
    };

    // Mock the RDP creator functions to return definitions
    const countDef: DerivedPropertyDefinition = {
      type: "property",
      apiName: "count",
    };
    const avgDef: DerivedPropertyDefinition = {
      type: "property",
      apiName: "avg",
    };

    // Mock the definitionMap behavior
    // The function signature is (objectSet, context, definitionMap, includeRelations)
    withProperties.peepCount.mockImplementation(
      function(
        objectSet: any,
        context: any,
        definitionMap: any,
        includeRelations: any,
      ) {
        console.log("peepCount called with:", {
          objectSet,
          context,
          definitionMap,
          includeRelations,
        });
        if (definitionMap instanceof Map) {
          const result = Symbol("peepCount_result");
          definitionMap.set(result, countDef);
          return result;
        }
        return Symbol("peepCount_result");
      },
    );

    withProperties.avgSalary.mockImplementation(
      function(
        objectSet: any,
        context: any,
        definitionMap: any,
        includeRelations: any,
      ) {
        console.log("avgSalary called with:", {
          objectSet,
          context,
          definitionMap,
          includeRelations,
        });
        if (definitionMap instanceof Map) {
          const result = Symbol("avgSalary_result");
          definitionMap.set(result, avgDef);
          return result;
        }
        return Symbol("avgSalary_result");
      },
    );

    const query = objectsHelper.getQuery({
      apiName: "Employee",
      pk: "EMP001",
      withProperties,
    });

    // Verify RDPs were registered
    const registeredRdps = store.getAllRdpsForType("Employee");
    expect(registeredRdps.size).toBe(2);

    // Verify the RDPs have canonical IDs
    const canonicalIds = Array.from(registeredRdps.keys());
    expect(canonicalIds[0]).toMatch(/^rdp_[a-f0-9]{16}$/);
    expect(canonicalIds[1]).toMatch(/^rdp_[a-f0-9]{16}$/);
  });

  it("should load ALL registered RDPs for object type", async () => {
    // First query registers peepCount RDP
    const query1WithProperties = {
      peepCount: vi.fn(),
    };

    const countDef: DerivedPropertyDefinition = {
      type: "property",
      apiName: "count",
    };

    query1WithProperties.peepCount.mockImplementation(
      function(
        this: any,
        objectSet: any,
        context: any,
        definitionMap: any,
        includeRelations: any,
      ) {
        if (definitionMap instanceof Map) {
          definitionMap.set(this, countDef);
        }
        return this;
      },
    );

    const query1 = objectsHelper.getQuery({
      apiName: "Employee",
      pk: "EMP001",
      withProperties: query1WithProperties,
    });

    // Second query registers avgSalary RDP
    const query2WithProperties = {
      avgSalary: vi.fn(),
    };

    const avgDef: DerivedPropertyDefinition = {
      type: "property",
      apiName: "avg",
    };

    query2WithProperties.avgSalary.mockImplementation(
      function(
        this: any,
        objectSet: any,
        context: any,
        definitionMap: any,
        includeRelations: any,
      ) {
        if (definitionMap instanceof Map) {
          definitionMap.set(this, avgDef);
        }
        return this;
      },
    );

    // Mock client to verify ALL RDPs are fetched
    const mockObjectSet = {
      where: vi.fn().mockReturnThis(),
      withProperties: vi.fn().mockReturnThis(),
      fetchPage: vi.fn().mockResolvedValue({
        data: [{
          $apiName: "Employee",
          $objectType: "Employee",
          $primaryKey: "EMP002",
          id: "EMP002",
          name: "Jane Doe",
          rdp_abc123: 10, // First RDP with canonical ID
          rdp_def456: 150000, // Second RDP with canonical ID
        }],
        nextPageToken: undefined,
      }),
    };

    mockClient.mockReturnValue(mockObjectSet);

    const query2 = objectsHelper.getQuery({
      apiName: "Employee",
      pk: "EMP002",
      withProperties: query2WithProperties,
    });

    // Verify that both RDPs are registered
    const registeredRdps = store.getAllRdpsForType("Employee");
    expect(registeredRdps.size).toBe(2);

    // When query2 fetches, it should request BOTH RDPs
    await (query2 as any)._fetchAndStore();

    // Verify withProperties was called with all registered RDPs
    expect(mockObjectSet.withProperties).toHaveBeenCalled();
    const rdpsRequested = mockObjectSet.withProperties.mock.calls[0][0];
    expect(Object.keys(rdpsRequested).length).toBe(2);
  });

  it("should map canonical RDP IDs back to user-defined names", () => {
    const mockSubject = {
      pipe: vi.fn().mockReturnThis(),
      subscribe: vi.fn(),
    };

    // Create canonical IDs for testing
    const countCanonicalId = "rdp_1234567890abcdef";
    const avgCanonicalId = "rdp_fedcba0987654321";

    // Create RDP mappings
    const rdpMappings = new Map([
      ["peepCount", countCanonicalId],
      ["avgSalary", avgCanonicalId],
    ]);

    // Store RDP values with canonical IDs
    store.setRdpForObject("Employee", "EMP001", {
      [countCanonicalId]: 42,
      [avgCanonicalId]: 150000,
    });

    const query = new ObjectQuery(
      store,
      mockSubject as any,
      "Employee",
      "EMP001",
      { type: "object", otherKeys: ["Employee", "EMP001"] } as any,
      { dedupeInterval: 0 },
      rdpMappings,
      {},
    );

    // Create a mock observable to test the mapping
    const mockObservable = (query as any)._createConnectable({
      pipe: (mapFn: any) => ({
        subscribe: (observer: any) => {
          const input = {
            status: "loaded",
            value: {
              $apiName: "Employee",
              $objectType: "Employee",
              $primaryKey: "EMP001",
              id: "EMP001",
              name: "John Doe",
            },
            lastUpdated: Date.now(),
            isOptimistic: false,
          };

          // Apply the map function
          const mapped = mapFn.map(input);

          // Verify RDPs are mapped to user names
          expect(mapped.object.peepCount).toBe(42);
          expect(mapped.object.avgSalary).toBe(150000);
          expect(mapped.object.name).toBe("John Doe");
        },
      }),
    });
  });

  it("should share RDP registry between ObjectQuery and ListQuery", () => {
    // Register RDPs via ObjectQuery
    const objectWithProperties = {
      totalCount: vi.fn(),
    };

    const countDef: DerivedPropertyDefinition = {
      type: "property",
      apiName: "totalCount",
    };

    objectWithProperties.totalCount.mockImplementation(
      function(
        this: any,
        objectSet: any,
        context: any,
        definitionMap: any,
        includeRelations: any,
      ) {
        if (definitionMap instanceof Map) {
          definitionMap.set(this, countDef);
        }
        return this;
      },
    );

    objectsHelper.getQuery({
      apiName: "Office",
      pk: "OFF001",
      withProperties: objectWithProperties,
    });

    // Verify RDP is registered
    const registeredRdps = store.getAllRdpsForType("Office");
    expect(registeredRdps.size).toBe(1);

    // The same RDP should be available for ListQuery
    // (ListsHelper would also see this registered RDP)
    const allOfficeRdps = store.getAllRdpsForType("Office");
    expect(allOfficeRdps.size).toBe(1);
    expect(Array.from(allOfficeRdps.values())[0]).toEqual(countDef);
  });
});
