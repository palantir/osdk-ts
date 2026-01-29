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

import type { ObjectTypeDefinition, Osdk, QueryDefinition } from "@osdk/api";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { act, renderHook } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { useOsdkFunction } from "../src/new/useOsdkFunction.js";

const MockQueryDef: QueryDefinition<unknown> = {
  type: "query",
  apiName: "mockFunction",
  version: "1.0.0",
  isFixedVersion: false,
  parameters: {},
  output: { type: "integer" },
};

const MockObjectType: ObjectTypeDefinition = {
  type: "object",
  apiName: "MockObject",
  primaryKeyApiName: "id",
  primaryKeyType: "string",
  properties: {},
  links: {},
};

describe("useOsdkFunction", () => {
  const mockObserveFunction = vitest.fn();
  const mockInvalidateFunction = vitest.fn();

  const createWrapper = () => {
    const observableClient: Partial<ObservableClient> = {
      observeFunction: mockObserveFunction,
      invalidateFunction: mockInvalidateFunction,
    };

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider
        value={{ observableClient: observableClient as ObservableClient }}
      >
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    mockObserveFunction.mockClear();
    mockInvalidateFunction.mockClear();
    mockObserveFunction.mockReturnValue({ unsubscribe: vitest.fn() });
    mockInvalidateFunction.mockResolvedValue(undefined);
  });

  it("should NOT call observeFunction when enabled is false", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useOsdkFunction(MockQueryDef, { enabled: false }),
      { wrapper },
    );

    expect(mockObserveFunction).not.toHaveBeenCalled();
  });

  it("should start observing when enabled changes from false to true", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ enabled }) => useOsdkFunction(MockQueryDef, { enabled }),
      {
        wrapper,
        initialProps: { enabled: false },
      },
    );

    expect(mockObserveFunction).not.toHaveBeenCalled();

    rerender({ enabled: true });

    expect(mockObserveFunction).toHaveBeenCalledTimes(1);
  });

  it("should call observeFunction with correct arguments", () => {
    const wrapper = createWrapper();

    const mockObject: Osdk.Instance<ObjectTypeDefinition> = {
      $apiName: "MockObject",
      $primaryKey: "pk-123",
      $objectType: "MockObject",
      $title: "Mock Object",
    };

    renderHook(
      () =>
        useOsdkFunction(MockQueryDef, {
          params: { id: "123" },
          dependsOn: [MockObjectType],
          dependsOnObjects: [mockObject],
          dedupeIntervalMs: 5000,
        }),
      { wrapper },
    );

    expect(mockObserveFunction).toHaveBeenCalledTimes(1);
    expect(mockObserveFunction).toHaveBeenCalledWith(
      MockQueryDef,
      { id: "123" },
      expect.objectContaining({
        dependsOn: [MockObjectType],
        dependsOnObjects: [mockObject],
        dedupeInterval: 5000,
      }),
      expect.any(Object),
    );
  });

  it("should call invalidateFunction when refetch is called", () => {
    const wrapper = createWrapper();

    const { result } = renderHook(
      () => useOsdkFunction(MockQueryDef, { params: { id: "123" } }),
      { wrapper },
    );

    act(() => {
      result.current.refetch();
    });

    expect(mockInvalidateFunction).toHaveBeenCalledTimes(1);
    expect(mockInvalidateFunction).toHaveBeenCalledWith(
      MockQueryDef,
      { id: "123" },
    );
  });

  it("should return isLoading true when status is loading", () => {
    const wrapper = createWrapper();

    const { result } = renderHook(
      () => useOsdkFunction(MockQueryDef, { params: { id: "123" } }),
      { wrapper },
    );

    const observer = mockObserveFunction.mock.calls[0][3];

    act(() => {
      observer.next({ status: "loading", result: undefined, lastUpdated: 0 });
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
  });

  it("should return error when payload has error", () => {
    const wrapper = createWrapper();

    const { result } = renderHook(
      () => useOsdkFunction(MockQueryDef, { params: { id: "123" } }),
      { wrapper },
    );

    const observer = mockObserveFunction.mock.calls[0][3];
    const testError = new Error("Test error");

    act(() => {
      observer.next({
        status: "error",
        result: undefined,
        lastUpdated: 0,
        error: testError,
      });
    });

    expect(result.current.error).toBe(testError);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBeUndefined();
  });
});
