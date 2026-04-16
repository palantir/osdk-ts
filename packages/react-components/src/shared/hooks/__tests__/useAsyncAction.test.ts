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
import { describe, expect, it, vi } from "vitest";
import { useAsyncAction } from "../useAsyncAction.js";

describe("useAsyncAction", () => {
  it("starts with isPending false and no error", () => {
    const { result } = renderHook(() =>
      useAsyncAction(vi.fn().mockResolvedValue(undefined)),
    );
    expect(result.current.isPending).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it("sets isPending to true while the action is executing", async () => {
    let resolve: () => void;
    const action = vi.fn(
      () =>
        new Promise<void>((r) => {
          resolve = r;
        }),
    );

    const { result } = renderHook(() => useAsyncAction(action));

    let promise: Promise<void>;
    act(() => {
      promise = result.current.execute();
    });

    expect(result.current.isPending).toBe(true);

    await act(async () => {
      resolve!();
      await promise!;
    });

    expect(result.current.isPending).toBe(false);
  });

  it("forwards arguments to the action", async () => {
    const action = vi.fn(
      (_a: string, _b: number): Promise<void> => Promise.resolve(),
    );

    const { result } = renderHook(() => useAsyncAction(action));

    await act(async () => {
      await result.current.execute("hello", 42);
    });

    expect(action).toHaveBeenCalledWith("hello", 42);
  });

  it("captures error on rejection and resets isPending", async () => {
    const error = new Error("boom");
    const action = vi.fn().mockRejectedValue(error);

    const { result } = renderHook(() => useAsyncAction(action));

    await act(async () => {
      await result.current.execute();
    });

    expect(result.current.isPending).toBe(false);
    expect(result.current.error).toBe(error);
  });

  it("clears previous error on next execute", async () => {
    const action = vi
      .fn()
      .mockRejectedValueOnce(new Error("first"))
      .mockResolvedValueOnce(undefined);

    const { result } = renderHook(() => useAsyncAction(action));

    await act(async () => {
      await result.current.execute();
    });
    expect(result.current.error).toBeInstanceOf(Error);

    await act(async () => {
      await result.current.execute();
    });
    expect(result.current.error).toBeUndefined();
  });

  it("clearError resets the error to undefined", async () => {
    const action = vi.fn().mockRejectedValue(new Error("oops"));

    const { result } = renderHook(() => useAsyncAction(action));

    await act(async () => {
      await result.current.execute();
    });
    expect(result.current.error).toBeInstanceOf(Error);

    act(() => {
      result.current.clearError();
    });
    expect(result.current.error).toBeUndefined();
  });

  it("does not update state after unmount", async () => {
    let resolve: () => void;
    const action = vi.fn(
      () =>
        new Promise<void>((r) => {
          resolve = r;
        }),
    );

    const { result, unmount } = renderHook(() => useAsyncAction(action));

    let promise: Promise<void>;
    act(() => {
      promise = result.current.execute();
    });

    expect(result.current.isPending).toBe(true);

    unmount();

    await act(async () => {
      resolve!();
      await promise!;
    });

    // After unmount + resolve, isPending should still be true
    // because the finally block skipped the state update
    expect(result.current.isPending).toBe(true);
  });

  it("does not set error state after unmount", async () => {
    let reject: (err: Error) => void;
    const action = vi.fn(
      () =>
        new Promise<void>((_resolve, rej) => {
          reject = rej;
        }),
    );

    const { result, unmount } = renderHook(() => useAsyncAction(action));

    let promise: Promise<void>;
    act(() => {
      promise = result.current.execute();
    });

    unmount();

    await act(async () => {
      reject!(new Error("boom"));
      await promise!;
    });

    expect(result.current.error).toBeUndefined();
  });

  it("handles synchronous (void) actions", async () => {
    const action = vi.fn();

    const { result } = renderHook(() => useAsyncAction(action));

    await act(async () => {
      await result.current.execute();
    });

    expect(action).toHaveBeenCalledOnce();
    expect(result.current.isPending).toBe(false);
    expect(result.current.error).toBeUndefined();
  });
});
