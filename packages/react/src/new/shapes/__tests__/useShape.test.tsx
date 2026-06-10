/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import type { ShapeDefinition } from "@osdk/api/unstable";
import { ShapeNullabilityError } from "@osdk/api/unstable";
import type { ObservableClient, Observer } from "@osdk/client/observable";
import { act, renderHook } from "@testing-library/react";
import * as React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { OsdkContext } from "../../OsdkContext.js";
import { useShapeList, useShapeSingle } from "../useShape.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

function makeShape(
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
  } as unknown as ShapeDefinition<typeof MockObjectType>;
}

function makeInstance(data: Record<string, unknown>): Record<string, unknown> {
  const instance: Record<string, unknown> = {
    ...data,
    $objectType: MockObjectType.apiName,
    $apiName: MockObjectType.apiName,
  };
  instance.$clone = (patch: Record<string, unknown>) =>
    makeInstance({ ...data, ...patch });
  return instance;
}

interface MockClientHandle {
  observableClient: ObservableClient;
  emitObjectLoaded: (object: Record<string, unknown>) => void;
  observeObject: ReturnType<typeof vi.fn>;
  observeList: ReturnType<typeof vi.fn>;
  invalidateObjectType: ReturnType<typeof vi.fn>;
}

function createMockClient(): MockClientHandle {
  let activeObjectObserver: Observer<unknown> | undefined;
  let activeListObserver: Observer<unknown> | undefined;

  const observeObject = vi.fn((
    _type: unknown,
    _pk: unknown,
    _options: unknown,
    observer: Observer<unknown>,
  ) => {
    activeObjectObserver = observer;
    observer.next({ status: "loading", object: undefined });
    return { unsubscribe: vi.fn() };
  });

  const observeList = vi.fn((
    _options: unknown,
    observer: Observer<unknown>,
  ) => {
    activeListObserver = observer;
    observer.next({
      status: "loading",
      resolvedList: undefined,
      hasMore: false,
      fetchMore: async () => {},
      isOptimistic: false,
    });
    return { unsubscribe: vi.fn() };
  });

  const invalidateObjectType = vi.fn(async () => {});

  const observableClient = {
    observeObject,
    observeList,
    canonicalizeWhereClause: (w: unknown) => w,
    invalidateObjectType,
  } as unknown as ObservableClient;

  return {
    observableClient,
    emitObjectLoaded: (object) => {
      activeObjectObserver?.next({ status: "loaded", object });
    },
    observeObject,
    observeList,
    invalidateObjectType,
  };
}

function wrap(observableClient: ObservableClient) {
  return ({ children }: React.PropsWithChildren) =>
    React.createElement(
      OsdkContext.Provider,
      { value: { observableClient, client: {} } as never },
      children,
    );
}

describe("useShapeSingle / useShapeList", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("starts in loading state and reflects loaded data once the observer emits", () => {
    const shape = makeShape({
      name: { nullabilityOp: { type: "select" } },
    });
    const mock = createMockClient();
    const { result } = renderHook(
      () => useShapeSingle(shape, "pk-1"),
      { wrapper: wrap(mock.observableClient) },
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
    expect(mock.observeObject).toHaveBeenCalledTimes(1);

    act(() => {
      mock.emitObjectLoaded(
        makeInstance({ $primaryKey: "pk-1", name: "Alice" }),
      );
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toMatchObject({
      $primaryKey: "pk-1",
      name: "Alice",
    });
    expect(result.current.error).toBeUndefined();
  });

  it("surfaces ShapeNullabilityError when a required property is missing", () => {
    const shape = makeShape({
      name: { nullabilityOp: { type: "require" } },
    });
    const mock = createMockClient();
    const { result } = renderHook(
      () => useShapeSingle(shape, "pk-1"),
      { wrapper: wrap(mock.observableClient) },
    );

    act(() => {
      mock.emitObjectLoaded(makeInstance({ $primaryKey: "pk-1", name: null }));
    });

    expect(result.current.error).toBeInstanceOf(ShapeNullabilityError);
    expect(result.current.data).toBeUndefined();
    const violation = result.current.nullabilityViolations[0];
    expect(violation?.property).toBe("name");
    expect(violation?.constraint).toBe("require");
  });

  it("does not observe when enabled is false", () => {
    const shape = makeShape({
      name: { nullabilityOp: { type: "select" } },
    });
    const mock = createMockClient();
    renderHook(
      () => useShapeList(shape, { enabled: false }),
      { wrapper: wrap(mock.observableClient) },
    );

    expect(mock.observeList).not.toHaveBeenCalled();
  });
});
