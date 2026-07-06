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

import { describe, expect, it } from "vitest";

import type {
  ComponentHookBinding,
  QueryParams,
} from "../../utils/ComponentQueryRegistry.js";
import type { PropertyAccessEvent } from "../../utils/PropertyAccessTracker.js";
import {
  deriveComponentOntology,
  objectTypeOf,
} from "./deriveComponentOntology.js";

function binding(queryParams: QueryParams): ComponentHookBinding {
  return {
    componentId: "c1",
    componentName: "C",
    hookType: "useOsdkObjects",
    hookIndex: 0,
    subscriptionId: "s",
    querySignature: "sig",
    queryParams,
    stackTrace: "",
    mountedAt: 0,
    renderCount: 0,
    lastRenderDuration: 0,
    avgRenderDuration: 0,
  };
}

function access(objectKey: string, property: string): PropertyAccessEvent {
  return { componentId: "c1", objectKey, property, timestamp: 0 };
}

describe("objectTypeOf", () => {
  it("reads the object type from each query shape", () => {
    expect(objectTypeOf({ type: "list", objectType: "Parcel" })).toBe("Parcel");
    expect(
      objectTypeOf({ type: "object", objectType: "Parcel", primaryKey: "1" })
    ).toBe("Parcel");
    expect(objectTypeOf({ type: "aggregation", objectType: "Parcel" })).toBe(
      "Parcel"
    );
    expect(
      objectTypeOf({
        type: "links",
        sourceObject: "Parcel:p1",
        linkName: "owner",
      })
    ).toBe("Parcel");
    expect(
      objectTypeOf({
        type: "objectSet",
        baseObjectSet: "Parcel",
        operations: [],
      })
    ).toBe("Parcel");
    expect(
      objectTypeOf({ type: "action", actionName: "createParcel" })
    ).toBeNull();
  });
});

describe("deriveComponentOntology", () => {
  it("surfaces object types and actions from hook usage, not hook names", () => {
    const result = deriveComponentOntology(
      [
        binding({ type: "list", objectType: "Parcel" }),
        binding({ type: "object", objectType: "Workspace", primaryKey: "w1" }),
        binding({ type: "action", actionName: "createParcel" }),
      ],
      [],
      undefined,
      {}
    );

    expect(result.objectTypes.map((t) => t.name)).toEqual([
      "Parcel",
      "Workspace",
    ]);
    expect(result.actions).toEqual(["createParcel"]);
  });

  it("groups read instances and properties by object type", () => {
    const result = deriveComponentOntology(
      [binding({ type: "list", objectType: "Parcel" })],
      [
        access("Parcel:p2", "status"),
        access("Parcel:p1", "name"),
        access("Parcel:p1", "status"),
        // nested proxy key: instance is p1, property attributed to Parcel.
        access("Parcel:p1.owner", "displayName"),
      ],
      undefined,
      {}
    );

    const parcel = result.objectTypes.find((t) => t.name === "Parcel");
    expect(parcel?.instances).toEqual(["p1", "p2"]);

    const parcelProps = result.properties.find(
      (p) => p.objectType === "Parcel"
    );
    expect(parcelProps?.names).toEqual(["displayName", "name", "status"]);
  });

  it("exposes react props as sorted entries", () => {
    const result = deriveComponentOntology(
      [binding({ type: "list", objectType: "Parcel" })],
      [],
      { title: "Hello", count: "3" },
      {}
    );
    expect(result.reactProps).toContainEqual(["title", "Hello"]);
    expect(result.reactProps).toContainEqual(["count", "3"]);
  });

  it("is healthy with no wasted renders or over-fetch", () => {
    const result = deriveComponentOntology(
      [binding({ type: "list", objectType: "Parcel" })],
      [],
      undefined,
      {}
    );
    expect(result.healthy).toBe(true);
    expect(result.warning).toBeUndefined();
  });

  it("reports a warning when wasted renders or over-fetch exist", () => {
    const result = deriveComponentOntology(
      [binding({ type: "list", objectType: "Parcel" })],
      [],
      undefined,
      {
        wasted: {
          componentId: "c1",
          componentName: "C",
          count: 3,
          timestamp: 0,
        },
        unused: [
          {
            componentId: "c1",
            componentName: "C",
            propertyName: "a",
            totalRenders: 10,
            accessCount: 0,
          },
          {
            componentId: "c1",
            componentName: "C",
            propertyName: "b",
            totalRenders: 10,
            accessCount: 0,
          },
        ],
      }
    );
    expect(result.healthy).toBe(false);
    expect(result.warning).toContain("3 wasted");
    expect(result.warning).toContain("over-fetch 2");
  });

  it("drops Unknown object types and actions", () => {
    const result = deriveComponentOntology(
      [
        binding({ type: "list", objectType: "Unknown" }),
        binding({ type: "action", actionName: "Unknown" }),
      ],
      [],
      undefined,
      {}
    );
    expect(result.objectTypes).toEqual([]);
    expect(result.actions).toEqual([]);
  });
});
