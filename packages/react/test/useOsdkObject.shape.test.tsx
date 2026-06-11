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

import type { ObjectTypeDefinition } from "@osdk/api";
import type { ShapePropertyConfig } from "@osdk/api/shapes-internal";
import type { InlineShapeConfig, ShapeDefinition } from "@osdk/api/unstable";
import { Employee } from "@osdk/client.test.ontology";
import { renderHook } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { OsdkContext } from "../src/new/OsdkContext.js";
import { useOsdkObject } from "../src/new/useOsdkObject.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

function makeMockShapeDefinition(
  props: Record<string, ShapePropertyConfig>,
): ShapeDefinition<typeof MockObjectType> {
  return {
    __shapeId: "test-shape-id",
    __debugName: "TestShape",
    __baseType: MockObjectType,
    __baseTypeApiName: "MockObject",
    __props: Object.freeze(props),
    __derivedLinks: Object.freeze([]),
    __selectedPropsType: {},
    __derivedLinksType: {},
  } as ShapeDefinition<typeof MockObjectType>;
}

describe("useOsdkObject with pre-built ShapeDefinition", () => {
  const mockObserveObject = vitest.fn();

  const createWrapper = () => {
    const observableClient = {
      observeObject: mockObserveObject,
      canonicalizeWhereClause: vitest.fn((w: unknown) => w),
      invalidateObjectType: vitest.fn(),
    };

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext.Provider
        value={{ observableClient, client: {} } as never}
      >
        {children}
      </OsdkContext.Provider>
    );
  };

  beforeEach(() => {
    mockObserveObject.mockClear();
    mockObserveObject.mockReturnValue({ unsubscribe: vitest.fn() });
  });

  it("should call observeObject with select for shape properties", () => {
    const shape = makeMockShapeDefinition({
      name: { nullabilityOp: { type: "require" } },
      age: { nullabilityOp: { type: "select" } },
    });
    const wrapper = createWrapper();

    renderHook(
      () => useOsdkObject(MockObjectType, "pk-1", { shape }),
      { wrapper },
    );

    expect(mockObserveObject).toHaveBeenCalledWith(
      "MockObject",
      "pk-1",
      { mode: undefined, select: expect.arrayContaining(["name", "age"]) },
      expect.any(Object),
    );
  });

  it("should return loading state initially", () => {
    const shape = makeMockShapeDefinition({
      name: { nullabilityOp: { type: "select" } },
    });
    const wrapper = createWrapper();

    const { result } = renderHook(
      () => useOsdkObject(MockObjectType, "pk-1", { shape }),
      { wrapper },
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
  });

  it("should NOT call observeObject when enabled is false", () => {
    const shape = makeMockShapeDefinition({
      name: { nullabilityOp: { type: "select" } },
    });
    const wrapper = createWrapper();

    renderHook(
      () =>
        useOsdkObject(MockObjectType, "pk-1", {
          shape,
          enabled: false,
        }),
      { wrapper },
    );

    expect(mockObserveObject).not.toHaveBeenCalled();
  });

  it("should return shape result fields (not plain object result)", () => {
    const shape = makeMockShapeDefinition({
      name: { nullabilityOp: { type: "select" } },
    });
    const wrapper = createWrapper();

    const { result } = renderHook(
      () => useOsdkObject(MockObjectType, "pk-1", { shape }),
      { wrapper },
    );

    expect(result.current).toHaveProperty("data");
    expect(result.current).toHaveProperty("isLoading");
    expect(result.current).toHaveProperty("droppedDueToNullability");
    expect(result.current).toHaveProperty("nullabilityViolations");
    expect(result.current).toHaveProperty("linkStatus");
    expect(result.current).toHaveProperty("loadDeferred");
    expect(result.current).toHaveProperty("retry");
    expect(result.current).toHaveProperty("invalidate");
    // Pre-built shapes should NOT have a `shape` field (that's for inline configs)
    expect(result.current).not.toHaveProperty("shape");
  });
});

describe("useOsdkObject with inline shape config", () => {
  const mockObserveObject = vitest.fn();

  const createWrapper = () => {
    const observableClient = {
      observeObject: mockObserveObject,
      canonicalizeWhereClause: vitest.fn((w: unknown) => w),
      invalidateObjectType: vitest.fn(),
    };

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext.Provider
        value={{ observableClient, client: {} } as never}
      >
        {children}
      </OsdkContext.Provider>
    );
  };

  beforeEach(() => {
    mockObserveObject.mockClear();
    mockObserveObject.mockReturnValue({ unsubscribe: vitest.fn() });
  });

  function lastSelect(): readonly string[] | undefined {
    const calls = mockObserveObject.mock.calls;
    const lastCall = calls[calls.length - 1];
    return lastCall?.[2]?.select;
  }

  it("re-derives the shape when the inline config changes across renders", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ config }: { config: InlineShapeConfig<typeof Employee> }) =>
        useOsdkObject(Employee, 1, { shape: config }),
      {
        wrapper,
        initialProps: {
          config: { select: ["fullName"] } satisfies InlineShapeConfig<
            typeof Employee
          >,
        },
      },
    );

    expect(lastSelect()).toContain("fullName");
    expect(lastSelect()).not.toContain("office");

    rerender({
      config: { select: ["office"] } satisfies InlineShapeConfig<
        typeof Employee
      >,
    });

    // With the freeze bug the projection stays pinned to the first config and
    // never selects "office"; the reactive fix must pick up the new config.
    expect(lastSelect()).toContain("office");
  });

  it("keeps the same shape definition when the config is structurally equal", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ config }: { config: InlineShapeConfig<typeof Employee> }) =>
        useOsdkObject(Employee, 1, { shape: config }),
      {
        wrapper,
        initialProps: {
          config: { select: ["fullName"] } satisfies InlineShapeConfig<
            typeof Employee
          >,
        },
      },
    );

    const callsAfterFirst = mockObserveObject.mock.calls.length;

    // New object identity, same structural content: must not re-subscribe.
    rerender({
      config: { select: ["fullName"] } satisfies InlineShapeConfig<
        typeof Employee
      >,
    });

    expect(mockObserveObject.mock.calls.length).toBe(callsAfterFirst);
  });
});
