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

import type { Client, ObjectSet } from "@osdk/client";
import { hydrateObjectSetFromRid } from "@osdk/client/internal";
import type {
  AllowedObjectSetParameterType,
  AsyncParameterValueMap,
} from "@osdk/widget.api";
import { defineConfig } from "@osdk/widget.client";
import type { Mock } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { extendParametersWithObjectSets } from "./extendParametersWithObjectSets.js";

vi.mock("@osdk/client/internal", () => ({
  hydrateObjectSetFromRid: vi.fn(),
}));

describe("extendParametersWithObjectSets", () => {
  const client = vi.fn() as Mock<Client> & Client;
  const cache = new Map<
    string,
    { objectSetRid: string; objectSet: ObjectSet }
  >();

  // Test helpers
  const createMockObjectType = (
    rid = "ri.object-type.123",
  ): AllowedObjectSetParameterType => ({
    apiName: "MyObjectType",
    type: "object",
    internalDoNotUseMetadata: { rid },
  });

  const createLoadedValue = <T>(value: T) => ({
    type: "loaded" as const,
    value,
  });

  const createObjectSetParam = (rid: string) => ({
    type: "objectSet" as const,
    value: createLoadedValue({ objectSetRid: rid }),
  });

  const createStringParam = (value: string) => ({
    type: "string" as const,
    value: createLoadedValue(value),
  });

  const createNumberParam = (value: number) => ({
    type: "number" as const,
    value: createLoadedValue(value),
  });

  const createMockObjectSet = (name = "MockObjectSet") =>
    Symbol(name) as unknown as ObjectSet;

  beforeEach(() => {
    vi.clearAllMocks();
    cache.clear();
  });

  it("should hydrate an object set for a valid objectSetRid", async () => {
    const config = defineConfig({
      id: "testWidget",
      name: "Test Widget",
      type: "workshop",
      parameters: {
        myObjectSet: {
          displayName: "My Object Set",
          type: "objectSet",
          allowedType: createMockObjectType(),
        },
        myString: {
          displayName: "My String",
          type: "string",
        },
      },
      events: {},
    });

    const parameters: AsyncParameterValueMap<typeof config> = {
      myString: createStringParam("test string"),
      myObjectSet: createObjectSetParam("ri.object-set.123"),
    };

    const mockObjectSet = createMockObjectSet();
    vi.mocked(hydrateObjectSetFromRid).mockReturnValue(mockObjectSet);

    const result = await extendParametersWithObjectSets(
      client,
      config,
      parameters,
      cache,
    );

    expect(result).toEqual({
      myString: parameters.myString,
      myObjectSet: {
        ...parameters.myObjectSet,
        value: {
          ...parameters.myObjectSet.value,
          value: {
            objectSetRid: "ri.object-set.123",
            objectSet: mockObjectSet,
          },
        },
      },
    });
  });

  it("should pass-through a config with no object set parameters", async () => {
    const config = defineConfig({
      id: "testWidget",
      name: "Test Widget",
      type: "workshop",
      parameters: {
        myNumber: {
          displayName: "My Number",
          type: "number",
        },
        myString: {
          displayName: "My String",
          type: "string",
        },
      },
      events: {},
    });

    const parameters: AsyncParameterValueMap<typeof config> = {
      myString: createStringParam("test string"),
      myNumber: createNumberParam(123),
    };

    const result = await extendParametersWithObjectSets(
      undefined,
      config,
      parameters,
      cache,
    );

    expect(result).toEqual(parameters);
    expect(hydrateObjectSetFromRid).not.toHaveBeenCalled();
  });

  it("should handle multiple object set parameters independently", async () => {
    const mockObjectType = createMockObjectType();
    const config = defineConfig({
      id: "testWidget",
      name: "Test Widget",
      type: "workshop",
      parameters: {
        objectsA: {
          displayName: "Object Set A",
          type: "objectSet",
          allowedType: mockObjectType,
        },
        objectsB: {
          displayName: "Object Set B",
          type: "objectSet",
          allowedType: mockObjectType,
        },
      },
      events: {},
    });

    // Setup initial parameters
    const mockObjectSetA = createMockObjectSet("MockObjectSetA");
    const mockObjectSetB = createMockObjectSet("MockObjectSetB");

    vi.mocked(hydrateObjectSetFromRid)
      .mockReturnValueOnce(mockObjectSetA)
      .mockReturnValueOnce(mockObjectSetB);

    let parameters: AsyncParameterValueMap<typeof config> = {
      objectsA: createObjectSetParam("ri.object-set.123"),
      objectsB: createObjectSetParam("ri.object-set.456"),
    };

    const result = await extendParametersWithObjectSets(
      client,
      config,
      parameters,
      cache,
    );

    // Helper to create expected result with hydrated object set
    const expectHydratedParam = (rid: string, objectSet: ObjectSet) => ({
      type: "objectSet",
      value: createLoadedValue({
        objectSetRid: rid,
        objectSet,
      }),
    });

    expect(result).toEqual({
      objectsA: expectHydratedParam("ri.object-set.123", mockObjectSetA),
      objectsB: expectHydratedParam("ri.object-set.456", mockObjectSetB),
    });

    // Test parameter update
    const mockObjectSetB2 = createMockObjectSet("MockObjectSetB2");
    vi.mocked(hydrateObjectSetFromRid).mockReturnValueOnce(mockObjectSetB2);

    parameters = {
      ...parameters,
      objectsB: createObjectSetParam("ri.object-set.789"),
    };

    const result2 = await extendParametersWithObjectSets(
      client,
      config,
      parameters,
      cache,
    );

    expect(result2).toEqual({
      objectsA: expectHydratedParam("ri.object-set.123", mockObjectSetA),
      objectsB: expectHydratedParam("ri.object-set.789", mockObjectSetB2),
    });

    // Verify cache updated correctly
    expect(cache.get("objectsB")).toMatchObject({
      objectSetRid: "ri.object-set.789",
      objectSet: mockObjectSetB2,
    });
  });

  it("should clear cache and provide no object set when parameter transitions to failed state", async () => {
    const config = defineConfig({
      id: "testWidget",
      name: "Test Widget",
      type: "workshop",
      parameters: {
        myObjectSet: {
          displayName: "My Object Set",
          type: "objectSet",
          allowedType: createMockObjectType(),
        },
        myString: {
          displayName: "My String",
          type: "string",
        },
      },
      events: {},
    });

    // Initially load an object set successfully
    const mockObjectSet = createMockObjectSet();
    vi.mocked(hydrateObjectSetFromRid).mockReturnValue(mockObjectSet);

    const initialParameters: AsyncParameterValueMap<typeof config> = {
      myString: createStringParam("test string"),
      myObjectSet: createObjectSetParam("ri.object-set.123"),
    };

    const initialResult = await extendParametersWithObjectSets(
      client,
      config,
      initialParameters,
      cache,
    );

    // Verify initial state - object set is loaded and cached
    expect(initialResult.myObjectSet.value.value).toMatchObject({
      objectSetRid: "ri.object-set.123",
      objectSet: mockObjectSet,
    });
    expect(cache.get("myObjectSet")).toMatchObject({
      objectSetRid: "ri.object-set.123",
      objectSet: mockObjectSet,
    });

    // Transition to failed state and omit value
    const failedParameters: AsyncParameterValueMap<typeof config> = {
      myString: createStringParam("test string"),
      myObjectSet: {
        type: "objectSet",
        value: {
          type: "failed",
          error: new Error("Failed to load object set"),
          value: undefined,
        },
      },
    };

    const failedResult = await extendParametersWithObjectSets(
      client,
      config,
      failedParameters,
      cache,
    );

    // Verify failed state - no object set in result and cache is cleared
    expect(failedResult).toEqual(failedParameters);
    expect(cache.has("myObjectSet")).toBe(false);

    // Verify hydrateObjectSetFromRid was not called again for the failed state
    expect(hydrateObjectSetFromRid).toHaveBeenCalledTimes(1);
  });

  it("should throw an error when osdkClient is undefined but object set parameters used", async () => {
    const config = defineConfig({
      id: "testWidget",
      name: "Test Widget",
      type: "workshop",
      parameters: {
        myObjectSet: {
          displayName: "My Object Set",
          type: "objectSet",
          allowedType: createMockObjectType(),
        },
      },
      events: {},
    });

    const parameters: AsyncParameterValueMap<typeof config> = {
      myObjectSet: createObjectSetParam("ri.object-set.123"),
    };

    await expect(
      extendParametersWithObjectSets(
        undefined,
        config,
        parameters,
        cache,
      ),
    ).rejects.toThrow("Not provided an OSDK client");
  });

  it("should pass through loading state without hydration", async () => {
    const config = defineConfig({
      id: "testWidget",
      name: "Test Widget",
      type: "workshop",
      parameters: {
        myObjectSet: {
          displayName: "My Object Set",
          type: "objectSet",
          allowedType: createMockObjectType(),
        },
      },
      events: {},
    });

    const parameters: AsyncParameterValueMap<typeof config> = {
      myObjectSet: {
        type: "objectSet",
        value: {
          type: "loading",
          value: undefined,
        },
      },
    };

    const result = await extendParametersWithObjectSets(
      client,
      config,
      parameters,
      cache,
    );

    expect(result).toEqual(parameters);
    expect(hydrateObjectSetFromRid).not.toHaveBeenCalled();
  });

  it("should handle transition from loaded to reloading to loaded with new rid", async () => {
    const config = defineConfig({
      id: "testWidget",
      name: "Test Widget",
      type: "workshop",
      parameters: {
        myObjectSet: {
          displayName: "My Object Set",
          type: "objectSet",
          allowedType: createMockObjectType(),
        },
      },
      events: {},
    });

    // Step 1: Initial loaded state
    const mockObjectSet1 = createMockObjectSet("InitialObjectSet");
    vi.mocked(hydrateObjectSetFromRid).mockReturnValue(mockObjectSet1);

    const initialParameters: AsyncParameterValueMap<typeof config> = {
      myObjectSet: createObjectSetParam("ri.object-set.123"),
    };

    const initialResult = await extendParametersWithObjectSets(
      client,
      config,
      initialParameters,
      cache,
    );

    // Verify initial state
    expect(initialResult.myObjectSet.value.value).toMatchObject({
      objectSetRid: "ri.object-set.123",
      objectSet: mockObjectSet1,
    });
    expect(cache.get("myObjectSet")).toMatchObject({
      objectSetRid: "ri.object-set.123",
      objectSet: mockObjectSet1,
    });
    expect(hydrateObjectSetFromRid).toHaveBeenCalledTimes(1);
    expect(hydrateObjectSetFromRid).toHaveBeenCalledWith(
      client,
      expect.anything(),
      "ri.object-set.123",
    );

    // Step 2: Transition to reloading state (value persists during reload)
    const reloadingParameters: AsyncParameterValueMap<typeof config> = {
      myObjectSet: {
        type: "objectSet",
        value: {
          type: "reloading",
          value: {
            objectSetRid: "ri.object-set.123",
          },
        },
      },
    };

    const reloadingResult = await extendParametersWithObjectSets(
      client,
      config,
      reloadingParameters,
      cache,
    );

    // During reloading, the cached objectSet should be reused (no new hydration)
    expect(reloadingResult.myObjectSet.value.value).toMatchObject({
      objectSetRid: "ri.object-set.123",
      objectSet: mockObjectSet1, // Same object set from cache
    });
    expect(cache.get("myObjectSet")).toMatchObject({
      objectSetRid: "ri.object-set.123",
      objectSet: mockObjectSet1,
    });
    expect(hydrateObjectSetFromRid).toHaveBeenCalledTimes(1); // Still only 1 call

    // Step 3: Transition back to loaded with new rid
    const mockObjectSet2 = createMockObjectSet("UpdatedObjectSet");
    vi.mocked(hydrateObjectSetFromRid).mockReturnValue(mockObjectSet2);

    const newLoadedParameters: AsyncParameterValueMap<typeof config> = {
      myObjectSet: createObjectSetParam("ri.object-set.456"),
    };

    const newLoadedResult = await extendParametersWithObjectSets(
      client,
      config,
      newLoadedParameters,
      cache,
    );

    // Verify new state - new object set hydrated and cache updated
    expect(newLoadedResult.myObjectSet.value.value).toMatchObject({
      objectSetRid: "ri.object-set.456",
      objectSet: mockObjectSet2,
    });
    expect(cache.get("myObjectSet")).toMatchObject({
      objectSetRid: "ri.object-set.456",
      objectSet: mockObjectSet2,
    });
    expect(hydrateObjectSetFromRid).toHaveBeenCalledTimes(2);
    expect(hydrateObjectSetFromRid).toHaveBeenLastCalledWith(
      client,
      expect.anything(),
      "ri.object-set.456",
    );
  });
});
