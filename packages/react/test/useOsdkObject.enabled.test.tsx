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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import { renderHook } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { useOsdkObject } from "../src/new/useOsdkObject.js";

// Mock object type definition
const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

// Mock OSDK instance
const mockInstance: Osdk.Instance<typeof MockObjectType> = {
  $objectType: "MockObject",
  $primaryKey: "instance-123",
  $apiName: "MockObject",
} as any;

describe("useOsdkObject enabled option", () => {
  const mockObserveObject = vitest.fn();

  const createWrapper = () => {
    const observableClient = {
      observeObject: mockObserveObject,
      canonicalizeWhereClause: vitest.fn((w) => w),
    } as any;

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider value={{ observableClient }}>
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    mockObserveObject.mockClear();
    mockObserveObject.mockReturnValue({ unsubscribe: vitest.fn() });
  });

  it("should NOT call observeObject when enabled is false (instance signature)", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useOsdkObject(mockInstance, { enabled: false }),
      { wrapper },
    );

    expect(mockObserveObject).not.toHaveBeenCalled();
  });

  it("should NOT call observeObject when enabled is false (type signature)", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useOsdkObject(MockObjectType, "pk-000", { enabled: false }),
      { wrapper },
    );

    expect(mockObserveObject).not.toHaveBeenCalled();
  });

  it("should use offline mode for instance signature", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useOsdkObject(mockInstance),
      { wrapper },
    );

    expect(mockObserveObject).toHaveBeenCalledWith(
      "MockObject",
      "instance-123",
      { mode: "offline", streamUpdates: false },
      expect.any(Object),
    );
  });

  it("should NOT use offline mode for type signature", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useOsdkObject(MockObjectType, "pk-222"),
      { wrapper },
    );

    expect(mockObserveObject).toHaveBeenCalledWith(
      "MockObject",
      "pk-222",
      { mode: undefined, streamUpdates: false },
      expect.any(Object),
    );
  });

  it("should start observing when enabled changes from false to true", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ enabled }) => useOsdkObject(mockInstance, { enabled }),
      {
        wrapper,
        initialProps: { enabled: false },
      },
    );

    expect(mockObserveObject).not.toHaveBeenCalled();

    rerender({ enabled: true });

    expect(mockObserveObject).toHaveBeenCalledTimes(1);
  });

  it("should support legacy boolean enabled parameter (instance signature)", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useOsdkObject(mockInstance, false),
      { wrapper },
    );

    expect(mockObserveObject).not.toHaveBeenCalled();
  });

  it("should support legacy boolean enabled parameter (type signature)", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useOsdkObject(MockObjectType, "pk-123", false),
      { wrapper },
    );

    expect(mockObserveObject).not.toHaveBeenCalled();
  });

  it("should pass streamUpdates option to observeObject", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useOsdkObject(MockObjectType, "pk-123", { streamUpdates: true }),
      { wrapper },
    );

    expect(mockObserveObject).toHaveBeenCalledWith(
      "MockObject",
      "pk-123",
      { mode: undefined, streamUpdates: true },
      expect.any(Object),
    );
  });

  it("should default streamUpdates to false", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useOsdkObject(MockObjectType, "pk-123"),
      { wrapper },
    );

    expect(mockObserveObject).toHaveBeenCalledWith(
      "MockObject",
      "pk-123",
      { mode: undefined, streamUpdates: false },
      expect.any(Object),
    );
  });

  it("should support both enabled and streamUpdates options together", () => {
    const wrapper = createWrapper();

    renderHook(
      () =>
        useOsdkObject(MockObjectType, "pk-123", {
          enabled: true,
          streamUpdates: true,
        }),
      { wrapper },
    );

    expect(mockObserveObject).toHaveBeenCalledWith(
      "MockObject",
      "pk-123",
      { mode: undefined, streamUpdates: true },
      expect.any(Object),
    );
  });
});
