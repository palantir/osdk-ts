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
import { act, renderHook } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { useOsdkObject } from "../src/new/useOsdkObject.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

describe("useOsdkObject", () => {
  const mockObserveObject = vitest.fn();

  const createWrapper = () => {
    const observableClient = {
      observeObject: mockObserveObject,
      canonicalizeOptions: vitest.fn((opts) => opts),
    } as any;

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider
        value={{ observableClient, devtoolsEnabled: false }}
      >
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    mockObserveObject.mockClear();
    mockObserveObject.mockReturnValue({ unsubscribe: vitest.fn() });
  });

  describe("error handling", () => {
    // Reproduces a bug where calling useOsdkObject with a primary key that
    // doesn't exist surfaces "Unhandled error in observeObject PalantirApiError"
    // in the console, but the hook never resolves: `error` stays undefined and
    // `isLoading` stays true forever. The fix routes the error through the
    // payload so the hook returns `{ error, isLoading: false }`.
    it("surfaces an observer.error as a non-loading error state", () => {
      const wrapper = createWrapper();

      let capturedObserver: {
        next: (v: any) => void;
        error: (e: unknown) => void;
      } | null = null;

      mockObserveObject.mockImplementation(
        (_typeOrName, _pk, _opts, observer) => {
          capturedObserver = observer;
          return { unsubscribe: vitest.fn() };
        },
      );

      const { result } = renderHook(
        () => useOsdkObject(MockObjectType, "non-existent-pk"),
        { wrapper },
      );

      // Initial state: loading.
      expect(result.current.error).toBeUndefined();
      expect(result.current.isLoading).toBe(true);

      // Simulate the BulkObjectLoader rejecting with PalantirApiError, which
      // propagates up to AbstractHelper and ultimately calls observer.error.
      const fetchError = new Error("Object not found: non-existent-pk");
      act(() => {
        // First the cache emits a loading payload (this matches the real flow
        // since revalidate sets status to "loading" before the fetch fires).
        capturedObserver?.next({
          status: "loading",
          object: undefined,
          lastUpdated: 0,
          isOptimistic: false,
        });
        // Then the fetch rejects.
        capturedObserver?.error(fetchError);
      });

      // After the error: hook should expose the error and isLoading should be
      // false so consumers can render their error UI.
      expect(result.current.error).toBe(fetchError);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.object).toBeUndefined();
    });

    it("surfaces a payload with status: 'error' as a non-loading error state", () => {
      const wrapper = createWrapper();

      let capturedObserver: { next: (v: any) => void } | null = null;

      mockObserveObject.mockImplementation(
        (_typeOrName, _pk, _opts, observer) => {
          capturedObserver = observer;
          return { unsubscribe: vitest.fn() };
        },
      );

      const { result } = renderHook(
        () => useOsdkObject(MockObjectType, "non-existent-pk"),
        { wrapper },
      );

      expect(result.current.isLoading).toBe(true);

      // Simulate the observable layer transitioning to status: "error" (the
      // path we want the underlying ObjectQuery to take when fetch fails).
      act(() => {
        capturedObserver?.next({
          status: "error",
          object: undefined,
          lastUpdated: Date.now(),
          isOptimistic: false,
        });
      });

      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeDefined();
      expect(result.current.error?.message).toBeTruthy();
    });
  });
});
