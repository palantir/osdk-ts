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

import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { useOnUnmount } from "../lifecycle/useOnUnmount.js";

describe("useOnUnmount", () => {
  it("does not call onUnmount on render or re-render", () => {
    const onUnmount = vi.fn();
    const { rerender } = renderHook(() => useOnUnmount(onUnmount));
    rerender();
    rerender();

    expect(onUnmount).not.toHaveBeenCalled();
  });

  it("calls onUnmount exactly once when the component unmounts", () => {
    const onUnmount = vi.fn();
    const { unmount } = renderHook(() => useOnUnmount(onUnmount));

    expect(onUnmount).not.toHaveBeenCalled();
    unmount();

    expect(onUnmount).toHaveBeenCalledTimes(1);
  });

  it("calls the latest onUnmount callback provided before unmount", () => {
    const first = vi.fn();
    const second = vi.fn();
    const { rerender, unmount } = renderHook(
      ({ onUnmount }) => useOnUnmount(onUnmount),
      { initialProps: { onUnmount: first } }
    );
    rerender({ onUnmount: second });
    unmount();

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });
});
