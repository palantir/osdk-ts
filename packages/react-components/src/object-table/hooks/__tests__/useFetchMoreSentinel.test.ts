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

import { act, renderHook } from "@testing-library/react";
import pDefer from "p-defer";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useFetchMoreSentinel } from "../useFetchMoreSentinel.js";

/**
 * useInfiniteScroll relies on IntersectionObserver, which HappyDOM doesn't
 * implement. Rather than firing on observe() (HappyDOM lays everything out at
 * zero size, so a real observer would report "visible" immediately), this stub
 * records the observed targets and exposes a trigger so each test decides when
 * the sentinel becomes visible.
 */
let observed: Element[] = [];
let triggerIntersection: (isIntersecting: boolean) => void = () => {};

beforeEach(() => {
  observed = [];
  vi.stubGlobal(
    "IntersectionObserver",
    vi.fn(function MockIntersectionObserver(
      this: IntersectionObserver,
      callback: IntersectionObserverCallback,
      options?: IntersectionObserverInit
    ) {
      // Surfaced so a test can assert the threshold we pass through.
      (globalThis as Record<string, unknown>).__lastObserverOptions = options;
      triggerIntersection = (isIntersecting: boolean) => {
        callback(
          observed.map(
            (target) =>
              ({ isIntersecting, target }) as IntersectionObserverEntry
          ),
          this
        );
      };
      return {
        observe: vi.fn((target: Element) => {
          observed.push(target);
        }),
        unobserve: vi.fn((target: Element) => {
          observed = observed.filter((t) => t !== target);
        }),
        disconnect: vi.fn(() => {
          observed = [];
        }),
      };
    })
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

/** Attaches the returned callback ref to a detached <tr>, as TableBody does. */
const attachSentinel = (
  sentinelRef: ReturnType<typeof useFetchMoreSentinel>["sentinelRef"]
): HTMLTableRowElement => {
  const row = document.createElement("tr");
  (sentinelRef as (node: HTMLTableRowElement) => void)(row);
  return row;
};

describe("useFetchMoreSentinel", () => {
  describe("hasMore", () => {
    it("is true when fetchNextPage is provided", () => {
      const { result } = renderHook(() =>
        useFetchMoreSentinel({
          isLoading: false,
          fetchNextPage: async () => {},
          loadedCount: 10,
        })
      );
      expect(result.current.hasMore).toBe(true);
    });

    it("is false when fetchNextPage is undefined, so no sentinel renders", () => {
      const { result } = renderHook(() =>
        useFetchMoreSentinel({ isLoading: false, loadedCount: 10 })
      );
      expect(result.current.hasMore).toBe(false);
    });
  });

  describe("pagination", () => {
    it("fetches when the sentinel becomes visible", () => {
      const fetchNextPage = vi.fn(async () => {});
      const { result } = renderHook(() =>
        useFetchMoreSentinel({
          isLoading: false,
          fetchNextPage,
          loadedCount: 10,
        })
      );

      attachSentinel(result.current.sentinelRef);
      expect(fetchNextPage).not.toHaveBeenCalled();

      act(() => {
        triggerIntersection(true);
      });

      expect(fetchNextPage).toHaveBeenCalledTimes(1);
    });

    it("does not fetch while the sentinel stays out of view", () => {
      const fetchNextPage = vi.fn(async () => {});
      const { result } = renderHook(() =>
        useFetchMoreSentinel({
          isLoading: false,
          fetchNextPage,
          loadedCount: 10,
        })
      );

      attachSentinel(result.current.sentinelRef);

      act(() => {
        triggerIntersection(false);
      });

      expect(fetchNextPage).not.toHaveBeenCalled();
    });

    it("does not fetch while the current page is still loading", () => {
      const fetchNextPage = vi.fn(async () => {});
      const { result } = renderHook(() =>
        useFetchMoreSentinel({
          isLoading: true,
          fetchNextPage,
          loadedCount: 10,
        })
      );

      attachSentinel(result.current.sentinelRef);

      act(() => {
        triggerIntersection(true);
      });

      expect(fetchNextPage).not.toHaveBeenCalled();
    });

    it("does not start a second fetch while one is in flight", async () => {
      const deferred = pDefer<void>();
      const fetchNextPage = vi.fn(() => deferred.promise);
      const { result } = renderHook(() =>
        useFetchMoreSentinel({
          isLoading: false,
          fetchNextPage,
          loadedCount: 10,
        })
      );

      attachSentinel(result.current.sentinelRef);

      act(() => {
        triggerIntersection(true);
      });
      expect(fetchNextPage).toHaveBeenCalledTimes(1);

      // Observer reports visibility again before the page resolves.
      act(() => {
        triggerIntersection(true);
      });
      expect(fetchNextPage).toHaveBeenCalledTimes(1);

      // Once it resolves, a later visibility report may fetch again.
      await act(async () => {
        deferred.resolve();
        await deferred.promise;
      });
      act(() => {
        triggerIntersection(true);
      });
      expect(fetchNextPage).toHaveBeenCalledTimes(2);
    });
  });

  describe("horizontal scroll", () => {
    it("observes with threshold 0 so a full-width sentinel still reports visibility", () => {
      const { result } = renderHook(() =>
        useFetchMoreSentinel({
          isLoading: false,
          fetchNextPage: async () => {},
          loadedCount: 10,
        })
      );

      attachSentinel(result.current.sentinelRef);

      // A sentinel spanning the full table width is only ever partially
      // exposed in a horizontally scrollable container, so any non-zero
      // threshold would never be crossed.
      expect(
        (globalThis as Record<string, unknown>).__lastObserverOptions
      ).toMatchObject({ threshold: 0 });
    });
  });
});
