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
import { renderHook } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { useOsdkObjects } from "../src/new/useOsdkObjects.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

describe("useOsdkObjects enabled option", () => {
  const mockObserveList = vitest.fn();

  const createWrapper = () => {
    const observableClient = {
      observeList: mockObserveList,
      canonicalizeWhereClause: vitest.fn((w) => w),
    } as any;

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider value={{ observableClient }}>
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    mockObserveList.mockClear();
    mockObserveList.mockReturnValue({ unsubscribe: vitest.fn() });
  });

  it("should NOT call observeList when enabled is false", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useOsdkObjects(MockObjectType, { enabled: false }),
      { wrapper },
    );

    expect(mockObserveList).not.toHaveBeenCalled();
  });

  it("should start observing when enabled changes from false to true", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ enabled }) => useOsdkObjects(MockObjectType, { enabled }),
      {
        wrapper,
        initialProps: { enabled: false },
      },
    );

    expect(mockObserveList).not.toHaveBeenCalled();

    rerender({ enabled: true });

    expect(mockObserveList).toHaveBeenCalledTimes(1);
  });

  it("should work with where clause when enabled is true", () => {
    const wrapper = createWrapper();

    renderHook(
      () =>
        useOsdkObjects(MockObjectType, {
          where: { id: "123" },
          pageSize: 50,
          enabled: true,
        }),
      { wrapper },
    );

    expect(mockObserveList).toHaveBeenCalledTimes(1);
    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        type: MockObjectType,
        where: { id: "123" },
        pageSize: 50,
      }),
      expect.any(Object),
    );
  });

  it("should call observeList with RIDs when enabled", () => {
    const wrapper = createWrapper();
    const rids = ["rid-1", "rid-2", "rid-3"];

    renderHook(
      () =>
        useOsdkObjects(MockObjectType, {
          rids,
          pageSize: 10,
        }),
      { wrapper },
    );

    expect(mockObserveList).toHaveBeenCalledTimes(1);
    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        type: MockObjectType,
        rids,
        pageSize: 10,
      }),
      expect.any(Object),
    );
  });

  it("should allow combining rids with where clause", () => {
    const wrapper = createWrapper();
    const rids = ["rid-1", "rid-2"];
    const where = { status: "active" };

    renderHook(
      () =>
        useOsdkObjects(MockObjectType, {
          rids,
          where,
          pageSize: 5,
        }),
      { wrapper },
    );

    expect(mockObserveList).toHaveBeenCalledTimes(1);
    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        type: MockObjectType,
        rids,
        where: expect.anything(),
        pageSize: 5,
      }),
      expect.any(Object),
    );
  });
});
