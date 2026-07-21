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
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useDebouncedCallback } from "./useDebouncedCallback.js";

const DELAY = 500;

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("useDebouncedCallback", () => {
  describe("default (no options) trailing-only behavior", () => {
    it("does not invoke synchronously and invokes once after the delay elapses", () => {
      const fn = vi.fn();
      const { result } = renderHook(() => useDebouncedCallback(fn, DELAY));

      act(() => {
        result.current("a");
      });
      expect(fn).not.toHaveBeenCalled();

      act(() => {
        vi.advanceTimersByTime(DELAY);
      });
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenNthCalledWith(1, "a");
    });

    it("collapses multiple calls within the window into one trailing call carrying the last arguments", () => {
      const fn = vi.fn();
      const { result } = renderHook(() => useDebouncedCallback(fn, DELAY));

      act(() => {
        result.current("a");
        result.current("b");
        result.current("c");
      });
      expect(fn).not.toHaveBeenCalled();

      act(() => {
        vi.advanceTimersByTime(DELAY);
      });
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenNthCalledWith(1, "c");
    });
  });

  it("treats an explicit trailing-only configuration the same as the default", () => {
    const fn = vi.fn();
    const { result } = renderHook(() =>
      useDebouncedCallback(fn, DELAY, { trailing: true })
    );

    act(() => {
      result.current("a");
      result.current("b");
    });
    expect(fn).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(DELAY);
    });
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenNthCalledWith(1, "b");
  });

  describe("leading edge behavior", () => {
    it("fires synchronously on the leading edge and suppresses the trailing call", () => {
      const fn = vi.fn();
      const { result } = renderHook(() =>
        useDebouncedCallback(fn, DELAY, { leading: true, trailing: false })
      );

      act(() => {
        result.current("a");
      });
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenNthCalledWith(1, "a");

      act(() => {
        result.current("b");
      });
      expect(fn).toHaveBeenCalledTimes(1);

      act(() => {
        vi.advanceTimersByTime(DELAY);
      });
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it("re-arms the leading edge once the window has fully elapsed", () => {
      const fn = vi.fn();
      const { result } = renderHook(() =>
        useDebouncedCallback(fn, DELAY, { leading: true })
      );

      act(() => {
        result.current("a");
      });
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenNthCalledWith(1, "a");

      act(() => {
        vi.advanceTimersByTime(DELAY);
      });

      act(() => {
        result.current("b");
      });
      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn).toHaveBeenNthCalledWith(2, "b");
    });
  });

  describe("leading and trailing edges together", () => {
    it("fires the first arguments on the leading edge and the last arguments on the trailing edge", () => {
      const fn = vi.fn();
      const { result } = renderHook(() =>
        useDebouncedCallback(fn, DELAY, { leading: true, trailing: true })
      );

      act(() => {
        result.current("a");
      });
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenNthCalledWith(1, "a");

      act(() => {
        result.current("b");
      });
      expect(fn).toHaveBeenCalledTimes(1);

      act(() => {
        vi.advanceTimersByTime(DELAY);
      });
      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn).toHaveBeenNthCalledWith(2, "b");
    });

    it("does not add a trailing call for a single leading invocation", () => {
      const fn = vi.fn();
      const { result } = renderHook(() =>
        useDebouncedCallback(fn, DELAY, { leading: true, trailing: true })
      );

      act(() => {
        result.current("a");
      });
      expect(fn).toHaveBeenCalledTimes(1);

      act(() => {
        vi.advanceTimersByTime(DELAY);
      });
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenNthCalledWith(1, "a");
    });
  });

  describe("cancel", () => {
    it("prevents a pending trailing call from firing", () => {
      const fn = vi.fn();
      const { result } = renderHook(() => useDebouncedCallback(fn, DELAY));

      act(() => {
        result.current("a");
      });
      act(() => {
        result.current.cancel();
      });
      act(() => {
        vi.advanceTimersByTime(DELAY);
      });
      expect(fn).not.toHaveBeenCalled();
    });

    it("drops the trailing call while preserving the already-fired leading call", () => {
      const fn = vi.fn();
      const { result } = renderHook(() =>
        useDebouncedCallback(fn, DELAY, { leading: true, trailing: true })
      );

      act(() => {
        result.current("a");
      });
      act(() => {
        result.current("b");
      });
      expect(fn).toHaveBeenCalledTimes(1);

      act(() => {
        result.current.cancel();
      });
      act(() => {
        vi.advanceTimersByTime(DELAY);
      });
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenNthCalledWith(1, "a");
    });
  });

  it("flushes a pending trailing call immediately with the latest arguments and schedules nothing further", () => {
    const fn = vi.fn();
    const { result } = renderHook(() => useDebouncedCallback(fn, DELAY));

    act(() => {
      result.current("a");
      result.current("b");
    });
    act(() => {
      result.current.flush();
    });
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenNthCalledWith(1, "b");

    act(() => {
      vi.advanceTimersByTime(DELAY);
    });
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("treats cancel and flush as safe no-ops when nothing is scheduled", () => {
    const fn = vi.fn();
    const { result } = renderHook(() =>
      useDebouncedCallback(fn, DELAY, { leading: true, trailing: false })
    );

    expect(() => {
      act(() => {
        result.current.cancel();
      });
    }).not.toThrow();
    expect(() => {
      act(() => {
        result.current.flush();
      });
    }).not.toThrow();
    expect(fn).not.toHaveBeenCalled();

    // A leading-only fire schedules no trailing call, so flush has nothing to do.
    act(() => {
      result.current("a");
    });
    expect(fn).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.flush();
    });
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("never invokes the callback when both edges are disabled", () => {
    const fn = vi.fn();
    const { result } = renderHook(() =>
      useDebouncedCallback(fn, DELAY, { leading: false, trailing: false })
    );

    act(() => {
      result.current("a");
    });
    expect(fn).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(DELAY);
    });
    expect(fn).not.toHaveBeenCalled();
  });

  it("invokes the most recently rendered callback on the trailing edge", () => {
    const first = vi.fn();
    const second = vi.fn();
    const { result, rerender } = renderHook(
      ({ fn }: { fn: (arg: string) => void }) =>
        useDebouncedCallback(fn, DELAY),
      { initialProps: { fn: first } }
    );

    act(() => {
      result.current("a");
    });
    rerender({ fn: second });

    act(() => {
      vi.advanceTimersByTime(DELAY);
    });
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenNthCalledWith(1, "a");
  });
});
