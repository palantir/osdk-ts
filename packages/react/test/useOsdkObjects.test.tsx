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

import type { ObjectTypeDefinition } from "@osdk/client";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { renderHook } from "@testing-library/react";
import pDefer from "p-defer";
import * as React from "react";
import { describe, expect, it, vitest } from "vitest";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { useOsdkObjects } from "../src/new/useOsdkObjects.js";

const TodoDef = {
  type: "object",
  apiName: "Todo",
} as const as ObjectTypeDefinition;

describe(useOsdkObjects, () => {
  it("passes withProperties to observeList", () => {
    const deferred = pDefer();
    const mockObserveList = vitest.fn(() => deferred.promise);

    const fakeObservableClient = {
      observeList: mockObserveList,
      canonicalizeWhereClause: vitest.fn((where) => where),
    } as any as ObservableClient;

    const wrapper = ({ children }: React.PropsWithChildren) => {
      return (
        <OsdkContext2.Provider
          value={{
            client: {} as any,
            observableClient: fakeObservableClient,
          }}
        >
          {children}
        </OsdkContext2.Provider>
      );
    };

    const withProperties = {
      computed: {
        $aggregate: {
          $sum: "count",
        },
      },
    };

    renderHook(
      () =>
        useOsdkObjects(TodoDef, {
          withProperties,
        }),
      { wrapper },
    );

    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        withProperties,
      }),
      expect.objectContaining({
        next: expect.any(Function),
        error: expect.any(Function),
        complete: expect.any(Function),
      }),
    );
  });

  it("passes intersectWith to observeList", () => {
    const deferred = pDefer();
    const mockObserveList = vitest.fn(() => deferred.promise);

    const fakeObservableClient = {
      observeList: mockObserveList,
      canonicalizeWhereClause: vitest.fn((where) => where),
    } as any as ObservableClient;

    const wrapper = ({ children }: React.PropsWithChildren) => {
      return (
        <OsdkContext2.Provider
          value={{
            client: {} as any,
            observableClient: fakeObservableClient,
          }}
        >
          {children}
        </OsdkContext2.Provider>
      );
    };

    const intersectWith = [
      { where: { text: { $startsWith: "urgent" } } },
    ];

    renderHook(
      () =>
        useOsdkObjects(TodoDef, {
          intersectWith,
        }),
      { wrapper },
    );

    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        intersectWith,
      }),
      expect.objectContaining({
        next: expect.any(Function),
        error: expect.any(Function),
        complete: expect.any(Function),
      }),
    );
  });

  it("passes pivotTo to observeList", () => {
    const deferred = pDefer();
    const mockObserveList = vitest.fn(() => deferred.promise);

    const fakeObservableClient = {
      observeList: mockObserveList,
      canonicalizeWhereClause: vitest.fn((where) => where),
    } as any as ObservableClient;

    const wrapper = ({ children }: React.PropsWithChildren) => {
      return (
        <OsdkContext2.Provider
          value={{
            client: {} as any,
            observableClient: fakeObservableClient,
          }}
        >
          {children}
        </OsdkContext2.Provider>
      );
    };

    renderHook(
      () =>
        useOsdkObjects(TodoDef, {
          pivotTo: "assignee" as any,
        }),
      { wrapper },
    );

    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        pivotTo: "assignee",
      }),
      expect.objectContaining({
        next: expect.any(Function),
        error: expect.any(Function),
        complete: expect.any(Function),
      }),
    );
  });

  it("passes all new options together", () => {
    const deferred = pDefer();
    const mockObserveList = vitest.fn(() => deferred.promise);

    const fakeObservableClient = {
      observeList: mockObserveList,
      canonicalizeWhereClause: vitest.fn((where) => where),
    } as any as ObservableClient;

    const wrapper = ({ children }: React.PropsWithChildren) => {
      return (
        <OsdkContext2.Provider
          value={{
            client: {} as any,
            observableClient: fakeObservableClient,
          }}
        >
          {children}
        </OsdkContext2.Provider>
      );
    };

    const withProperties = {
      computed: {
        $aggregate: {
          $sum: "count",
        },
      },
    };

    const intersectWith = [
      { where: { text: { $startsWith: "urgent" } } },
    ];

    renderHook(
      () =>
        useOsdkObjects(TodoDef, {
          where: { isComplete: false },
          pageSize: 20,
          withProperties,
          intersectWith,
          pivotTo: "assignee" as any,
        }),
      { wrapper },
    );

    expect(mockObserveList).toHaveBeenCalledWith(
      expect.objectContaining({
        type: TodoDef,
        where: { isComplete: false },
        pageSize: 20,
        withProperties,
        intersectWith,
        pivotTo: "assignee",
      }),
      expect.objectContaining({
        next: expect.any(Function),
        error: expect.any(Function),
        complete: expect.any(Function),
      }),
    );
  });
});
