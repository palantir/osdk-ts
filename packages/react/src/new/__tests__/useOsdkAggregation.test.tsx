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

import type { ObjectSet } from "@osdk/api";
import type { Client } from "@osdk/client";
import { Employee } from "@osdk/client.test.ontology";
import type { ObservableClient, Observer } from "@osdk/client/observable";
import { act, renderHook } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { OsdkContext } from "../OsdkContext.js";
import { useOsdkAggregation } from "../useOsdkAggregation.js";

const AGGREGATE = { $select: { $count: "unordered" } } as const;

function createMockObservableClient(): {
  client: ObservableClient;
  observeAggregation: ReturnType<typeof vi.fn>;
  invalidateObjectType: ReturnType<typeof vi.fn>;
  revalidate: ReturnType<typeof vi.fn>;
} {
  const revalidate = vi.fn().mockResolvedValue(undefined);
  const observeAggregation = vi.fn(
    (_args: unknown, _observer: Observer<unknown>) => ({
      unsubscribe: vi.fn(),
      revalidate,
    }),
  );
  const invalidateObjectType = vi.fn().mockResolvedValue(undefined);
  const client = {
    observeAggregation,
    canonicalizeOptions: vi.fn((opts: unknown) => opts),
    invalidateObjectType,
  } as unknown as ObservableClient;
  return { client, observeAggregation, invalidateObjectType, revalidate };
}

function createWrapper(observableClient: ObservableClient) {
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <OsdkContext.Provider
        value={{
          client: {} as Client,
          observableClient,
          devtoolsEnabled: false,
        }}
      >
        {children}
      </OsdkContext.Provider>
    );
  };
}

describe("useOsdkAggregation", () => {
  let observableClient: ObservableClient;
  let observeAggregation: ReturnType<typeof vi.fn>;
  let invalidateObjectType: ReturnType<typeof vi.fn>;
  let revalidate: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    ({
      client: observableClient,
      observeAggregation,
      invalidateObjectType,
      revalidate,
    } = createMockObservableClient());
  });

  describe("enabled option", () => {
    it("does not call observeAggregation when enabled is false", () => {
      const { result } = renderHook(
        () =>
          useOsdkAggregation(Employee, {
            aggregate: AGGREGATE,
            enabled: false,
          }),
        { wrapper: createWrapper(observableClient) },
      );

      expect(observeAggregation).not.toHaveBeenCalled();
      expect(result.current.data).toBeUndefined();
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeUndefined();
    });

    it("calls observeAggregation once when enabled is true", () => {
      renderHook(
        () =>
          useOsdkAggregation(Employee, { aggregate: AGGREGATE, enabled: true }),
        { wrapper: createWrapper(observableClient) },
      );

      expect(observeAggregation).toHaveBeenCalledTimes(1);
    });

    it("calls observeAggregation by default when enabled is omitted", () => {
      renderHook(() => useOsdkAggregation(Employee, { aggregate: AGGREGATE }), {
        wrapper: createWrapper(observableClient),
      });

      expect(observeAggregation).toHaveBeenCalledTimes(1);
    });

    it("starts observing when enabled flips from false to true", () => {
      const { rerender } = renderHook(
        ({ enabled }) =>
          useOsdkAggregation(Employee, { aggregate: AGGREGATE, enabled }),
        {
          wrapper: createWrapper(observableClient),
          initialProps: { enabled: false },
        },
      );

      expect(observeAggregation).not.toHaveBeenCalled();

      rerender({ enabled: true });

      expect(observeAggregation).toHaveBeenCalledTimes(1);
    });

    it("clears data when enabled flips from true to false", () => {
      const unsubscribe = vi.fn();
      let observer: Observer<unknown> | undefined;
      observeAggregation.mockImplementation((_args, obs: Observer<unknown>) => {
        observer = obs;
        return { unsubscribe };
      });

      const { result, rerender } = renderHook(
        ({ enabled }) =>
          useOsdkAggregation(Employee, { aggregate: AGGREGATE, enabled }),
        {
          wrapper: createWrapper(observableClient),
          initialProps: { enabled: true },
        },
      );

      act(() => {
        observer?.next({ status: "loaded", result: { $count: 5 } });
      });

      expect(observeAggregation).toHaveBeenCalledTimes(1);
      expect(result.current.data).toEqual({ $count: 5 });
      expect(result.current.isLoading).toBe(false);

      rerender({ enabled: false });

      expect(unsubscribe).toHaveBeenCalledTimes(1);
      expect(observeAggregation).toHaveBeenCalledTimes(1);
      expect(result.current.data).toBeUndefined();
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeUndefined();
    });

    it("does not call observeAggregation when enabled is false even with an objectSet", () => {
      const objectSet = {} as unknown as ObjectSet<typeof Employee>;

      renderHook(
        () =>
          useOsdkAggregation(Employee, {
            objectSet,
            aggregate: AGGREGATE,
            enabled: false,
          }),
        { wrapper: createWrapper(observableClient) },
      );

      expect(observeAggregation).not.toHaveBeenCalled();
    });
  });

  describe("refetch", () => {
    it("revalidates only the calling query by default when enabled is true", async () => {
      const { result } = renderHook(
        () =>
          useOsdkAggregation(Employee, { aggregate: AGGREGATE, enabled: true }),
        { wrapper: createWrapper(observableClient) },
      );

      await act(async () => {
        await result.current.refetch();
      });

      expect(revalidate).toHaveBeenCalledTimes(1);
      expect(invalidateObjectType).not.toHaveBeenCalled();
    });

    it("revalidates only the calling query when refetch({ scope: 'query' }) is called", async () => {
      const { result } = renderHook(
        () =>
          useOsdkAggregation(Employee, { aggregate: AGGREGATE, enabled: true }),
        { wrapper: createWrapper(observableClient) },
      );

      await act(async () => {
        await result.current.refetch({ scope: "query" });
      });

      expect(revalidate).toHaveBeenCalledTimes(1);
      expect(invalidateObjectType).not.toHaveBeenCalled();
    });

    it("invalidates the object type when refetch({ scope: 'type' }) is called", async () => {
      const { result } = renderHook(
        () =>
          useOsdkAggregation(Employee, { aggregate: AGGREGATE, enabled: true }),
        { wrapper: createWrapper(observableClient) },
      );

      await act(async () => {
        await result.current.refetch({ scope: "type" });
      });

      expect(invalidateObjectType).toHaveBeenCalledTimes(1);
      expect(revalidate).not.toHaveBeenCalled();
    });

    it("does not revalidate or invalidate when enabled is false", async () => {
      const { result } = renderHook(
        () =>
          useOsdkAggregation(Employee, {
            aggregate: AGGREGATE,
            enabled: false,
          }),
        { wrapper: createWrapper(observableClient) },
      );

      await act(async () => {
        await result.current.refetch();
      });

      expect(revalidate).not.toHaveBeenCalled();
      expect(invalidateObjectType).not.toHaveBeenCalled();
    });
  });
});
