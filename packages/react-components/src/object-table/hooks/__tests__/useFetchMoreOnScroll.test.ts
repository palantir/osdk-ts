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
import type React from "react";
import { describe, expect, it, vi } from "vitest";

import { useFetchMoreOnScroll } from "../useFetchMoreOnScroll.js";

interface ScrollGeometry {
  scrollTop: number;
  scrollLeft: number;
  scrollHeight: number;
  clientHeight: number;
}

/**
 * jsdom never lays elements out, so scroll geometry is faked. Only the
 * properties the hook reads off `currentTarget` need to be present.
 */
const scrollEvent = (
  geometry: Partial<ScrollGeometry>
): React.UIEvent<HTMLDivElement> =>
  ({
    currentTarget: {
      scrollTop: 0,
      scrollLeft: 0,
      scrollHeight: 1000,
      clientHeight: 500,
      ...geometry,
    },
  }) as unknown as React.UIEvent<HTMLDivElement>;

describe("useFetchMoreOnScroll", () => {
  describe("vertical scroll", () => {
    it("fetches the next page when scrolled near the bottom", async () => {
      const fetchNextPage = vi.fn(async () => {});
      const { result } = renderHook(() =>
        useFetchMoreOnScroll({ isLoading: false, fetchNextPage })
      );

      await act(async () => {
        // 1000 - 950 - 500 => already past the bottom threshold
        await result.current.handleScroll(scrollEvent({ scrollTop: 950 }));
      });

      expect(fetchNextPage).toHaveBeenCalledTimes(1);
    });

    it("does not fetch while still far from the bottom", async () => {
      const fetchNextPage = vi.fn(async () => {});
      const { result } = renderHook(() =>
        useFetchMoreOnScroll({ isLoading: false, fetchNextPage })
      );

      await act(async () => {
        // 1000 - 100 - 500 = 400, well above SCROLL_FETCH_THRESHOLD
        await result.current.handleScroll(scrollEvent({ scrollTop: 100 }));
      });

      expect(fetchNextPage).not.toHaveBeenCalled();
    });

    it("does not fetch when fetchNextPage is not provided", async () => {
      const { result } = renderHook(() =>
        useFetchMoreOnScroll({ isLoading: false })
      );

      await act(async () => {
        await result.current.handleScroll(scrollEvent({ scrollTop: 950 }));
      });

      expect(result.current.isLoadingMore).toBe(false);
    });
  });

  describe("horizontal scroll", () => {
    it("does not fetch when only scrollLeft changes and rows fit vertically", async () => {
      const fetchNextPage = vi.fn(async () => {});
      const { result } = renderHook(() =>
        useFetchMoreOnScroll({ isLoading: false, fetchNextPage })
      );

      // No vertical overflow at all: scrollHeight === clientHeight, so the
      // "near the bottom" check is trivially satisfied on every event.
      await act(async () => {
        await result.current.handleScroll(
          scrollEvent({
            scrollTop: 0,
            scrollLeft: 200,
            scrollHeight: 500,
            clientHeight: 500,
          })
        );
      });

      expect(fetchNextPage).not.toHaveBeenCalled();
    });

    it("does not fetch on horizontal scroll after the user has reached the bottom", async () => {
      const fetchNextPage = vi.fn(async () => {});
      const { result, rerender } = renderHook(
        ({ isLoading }: { isLoading: boolean }) =>
          useFetchMoreOnScroll({ isLoading, fetchNextPage }),
        { initialProps: { isLoading: false } }
      );

      // Scroll to the bottom: one legitimate fetch.
      await act(async () => {
        await result.current.handleScroll(scrollEvent({ scrollTop: 950 }));
      });
      expect(fetchNextPage).toHaveBeenCalledTimes(1);

      // The page resolves, clearing `isLoadingMore`, so the in-flight guard is
      // no longer what keeps further fetches out.
      rerender({ isLoading: true });
      rerender({ isLoading: false });
      expect(result.current.isLoadingMore).toBe(false);

      // Now scroll sideways while parked at the bottom. scrollTop is
      // unchanged, so no further pages should be requested.
      await act(async () => {
        await result.current.handleScroll(
          scrollEvent({ scrollTop: 950, scrollLeft: 120 })
        );
        await result.current.handleScroll(
          scrollEvent({ scrollTop: 950, scrollLeft: 240 })
        );
      });

      expect(fetchNextPage).toHaveBeenCalledTimes(1);
    });

    it("still fetches once vertical scrolling resumes", async () => {
      const fetchNextPage = vi.fn(async () => {});
      const { result } = renderHook(() =>
        useFetchMoreOnScroll({ isLoading: false, fetchNextPage })
      );

      await act(async () => {
        await result.current.handleScroll(
          scrollEvent({ scrollTop: 0, scrollLeft: 200 })
        );
      });
      expect(fetchNextPage).not.toHaveBeenCalled();

      await act(async () => {
        await result.current.handleScroll(
          scrollEvent({ scrollTop: 950, scrollLeft: 200 })
        );
      });
      expect(fetchNextPage).toHaveBeenCalledTimes(1);
    });
  });
});
