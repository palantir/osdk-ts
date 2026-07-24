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

import { useDebouncedCallback } from "../useDebouncedCallback.js";

describe("useDebouncedCallback", () => {
  it("calls the callback provided callback once when called multiple times with `wait` ms", () => {
    vi.useFakeTimers();
    const cb = vi.fn();
    const { result } = renderHook(() =>
      useDebouncedCallback(cb as (n: number) => void, 10)
    );
    const f = result.current;
    f(1);
    f(2);
    f(3);
    vi.runAllTimers();

    expect(cb).toHaveBeenCalledTimes(1);
    expect(cb).toHaveBeenCalledWith(3);
  });
});
