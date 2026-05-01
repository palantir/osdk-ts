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

import type { Osdk } from "@osdk/api";
import type { Client } from "@osdk/client";
import { Employee } from "@osdk/client.test.ontology";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { act, renderHook } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { OsdkContext2 } from "../OsdkContext2.js";
import { useOsdkObject } from "../useOsdkObject.js";

type Observer = {
  next: (payload: unknown) => void;
  error: (err: unknown) => void;
  complete: () => void;
};

type ObserveObjectCall = {
  type: unknown;
  primaryKey: unknown;
  options: {
    select?: readonly string[];
    $loadPropertySecurityMetadata?: boolean;
    mode?: string;
  };
  observer: Observer;
};

function createMockObservableClient(): {
  client: ObservableClient;
  calls: ObserveObjectCall[];
} {
  const calls: ObserveObjectCall[] = [];
  const client = {
    observeObject: vi
      .fn()
      .mockImplementation(
        (
          type: unknown,
          primaryKey: unknown,
          options: ObserveObjectCall["options"],
          observer: Observer,
        ) => {
          calls.push({ type, primaryKey, options, observer });
          return { unsubscribe: vi.fn() };
        },
      ),
  } as unknown as ObservableClient;
  return { client, calls };
}

function createWrapper(observableClient: ObservableClient) {
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <OsdkContext2.Provider
        value={{
          client: {} as Client,
          observableClient,
          devtoolsEnabled: false,
        }}
      >
        {children}
      </OsdkContext2.Provider>
    );
  };
}

describe("useOsdkObject", () => {
  let observableClient: ObservableClient;
  let calls: ObserveObjectCall[];

  beforeEach(() => {
    ({ client: observableClient, calls } = createMockObservableClient());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("forwards each hook's options to observeObject independently when two hooks share a primary key", () => {
    function useTwoHooks() {
      const a = useOsdkObject(Employee, 1, {
        $select: ["fullName"],
      });
      const b = useOsdkObject(Employee, 1, {
        $select: ["employeeId"],
      });
      return { a, b };
    }

    const { result } = renderHook(useTwoHooks, {
      wrapper: createWrapper(observableClient),
    });

    expect(calls).toHaveLength(2);
    expect(calls[0].primaryKey).toBe(1);
    expect(calls[1].primaryKey).toBe(1);
    expect(calls[0].options.select).toEqual(["fullName"]);
    expect(calls[1].options.select).toEqual(["employeeId"]);
    expect(result.current.a.isLoading).toBe(true);
    expect(result.current.b.isLoading).toBe(true);
  });

  it("returns each hook's own loaded object when two hooks share a primary key but observe different selects", () => {
    function useTwoHooks() {
      const a = useOsdkObject(Employee, 1, {
        $select: ["fullName"],
      });
      const b = useOsdkObject(Employee, 1, {
        $select: ["employeeId"],
      });
      return { a, b };
    }

    const { result } = renderHook(useTwoHooks, {
      wrapper: createWrapper(observableClient),
    });

    const objectA = {
      $apiName: "Employee",
      $primaryKey: 1,
      fullName: "Alice",
    } as unknown as Osdk.Instance<typeof Employee>;
    const objectB = {
      $apiName: "Employee",
      $primaryKey: 1,
      employeeId: 1,
    } as unknown as Osdk.Instance<typeof Employee>;

    act(() => {
      calls[0].observer.next({
        status: "loaded",
        object: objectA,
        lastUpdated: 1,
        isOptimistic: false,
      });
      calls[1].observer.next({
        status: "loaded",
        object: objectB,
        lastUpdated: 2,
        isOptimistic: false,
      });
    });

    expect(result.current.a.object).toBe(objectA);
    expect(result.current.b.object).toBe(objectB);
    expect(result.current.a.isLoading).toBe(false);
    expect(result.current.b.isLoading).toBe(false);
  });
});
