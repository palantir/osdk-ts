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
import { createAndFetchTempObjectSetRid } from "@osdk/client/internal";
import type { AllowedObjectSetParameterType } from "@osdk/widget.api";
import { defineConfig } from "@osdk/widget.client";
import type { Mock } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { transformEmitEventPayload } from "./transformEmitEventPayload.js";

vi.mock("@osdk/client/internal", () => ({
  createAndFetchTempObjectSetRid: vi.fn(),
}));

describe("transformEmitEventPayload", () => {
  const client = vi.fn() as Mock<Client> & Client;

  const createMockObjectType = (
    rid = "ri.object-type.123",
  ): AllowedObjectSetParameterType => ({
    apiName: "MyObjectType",
    type: "object",
    internalDoNotUseMetadata: { rid },
  });

  const mockObjectSet = {} as ObjectSet;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should transform ObjectSet parameters and pass through others", async () => {
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
      events: {
        updateMixed: {
          displayName: "Update Mixed",
          parameterUpdateIds: ["myObjectSet", "myString"],
        },
      },
    });

    vi.mocked(createAndFetchTempObjectSetRid).mockResolvedValue(
      "ri.object-set.456",
    );

    const result = transformEmitEventPayload(
      config,
      "updateMixed",
      { parameterUpdates: { myObjectSet: mockObjectSet, myString: "world" } },
      client,
    );

    expect(result.type).toBe("async");
    const resolved = await result.payload;
    expect(resolved).toEqual({
      parameterUpdates: {
        myObjectSet: { objectSetRid: "ri.object-set.456" },
        myString: "world",
      },
    });
  });

  it("should transform multiple ObjectSet parameters", async () => {
    const config = defineConfig({
      id: "testWidget",
      name: "Test Widget",
      type: "workshop",
      parameters: {
        objectSetA: {
          displayName: "Object Set A",
          type: "objectSet",
          allowedType: createMockObjectType(),
        },
        objectSetB: {
          displayName: "Object Set B",
          type: "objectSet",
          allowedType: createMockObjectType(),
        },
      },
      events: {
        updateBoth: {
          displayName: "Update Both",
          parameterUpdateIds: ["objectSetA", "objectSetB"],
        },
      },
    });

    vi.mocked(createAndFetchTempObjectSetRid)
      .mockResolvedValueOnce("ri.object-set.aaa")
      .mockResolvedValueOnce("ri.object-set.bbb");

    const result = transformEmitEventPayload(
      config,
      "updateBoth",
      {
        parameterUpdates: {
          objectSetA: mockObjectSet,
          objectSetB: mockObjectSet,
        },
      },
      client,
    );

    expect(result.type).toBe("async");
    const resolved = await result.payload;
    expect(createAndFetchTempObjectSetRid).toHaveBeenCalledTimes(2);
    expect(resolved).toEqual({
      parameterUpdates: {
        objectSetA: { objectSetRid: "ri.object-set.aaa" },
        objectSetB: { objectSetRid: "ri.object-set.bbb" },
      },
    });
  });

  it("should throw error when ObjectSet parameter used without client", async () => {
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
      events: {
        updateObjectSet: {
          displayName: "Update Object Set",
          parameterUpdateIds: ["myObjectSet"],
        },
      },
    });

    const result = transformEmitEventPayload(config, "updateObjectSet", {
      parameterUpdates: { myObjectSet: mockObjectSet },
    });

    expect(result.type).toBe("async");
    await expect(result.payload).rejects.toThrow(
      "Cannot emit event \"updateObjectSet\" with ObjectSet parameter \"myObjectSet\" without an osdk client",
    );
  });

  it("should pass through all parameters when none are ObjectSet type", () => {
    const config = defineConfig({
      id: "testWidget",
      name: "Test Widget",
      type: "workshop",
      parameters: {
        myString: {
          displayName: "My String",
          type: "string",
        },
        myNumber: {
          displayName: "My Number",
          type: "number",
        },
      },
      events: {
        updatePrimitives: {
          displayName: "Update Primitives",
          parameterUpdateIds: ["myString", "myNumber"],
        },
      },
    });

    const result = transformEmitEventPayload(
      config,
      "updatePrimitives",
      { parameterUpdates: { myString: "hello", myNumber: 42 } },
      client,
    );

    expect(result.type).toBe("passThrough");
    expect(result.payload).toEqual({
      parameterUpdates: { myString: "hello", myNumber: 42 },
    });
    expect(createAndFetchTempObjectSetRid).not.toHaveBeenCalled();
  });

  it("should throw error when eventId not found in config", async () => {
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

    const result = transformEmitEventPayload(
      config,
      "nonExistentEvent" as never,
      { parameterUpdates: { myObjectSet: mockObjectSet } } as never,
      client,
    );

    expect(result.type).toBe("async");
    await expect(result.payload).rejects.toThrow(
      "Event with ID \"nonExistentEvent\" not found in widget config",
    );
  });
});
