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
import { isEqual } from "lodash-es";
import { describe, expect, it } from "vitest";

import {
  useGatedValue,
  useInverseGatedValue,
} from "../variables/useGatedValue.js";

describe("useGatedValue", () => {
  it("can gate on isEqual", () => {
    const arr1 = [1, 2];
    const arr2 = [1, 2];
    const arr3 = [1, 3];

    const { result, rerender } = renderHook(
      ({ value }) => useInverseGatedValue(value, isEqual),
      {
        initialProps: { value: arr1 },
      }
    );

    expect(result.current).toBe(arr1);
    rerender({ value: arr2 });
    expect(result.current).toBe(arr1); // reference didn't change
    rerender({ value: arr3 });
    expect(result.current).toBe(arr3); // reference changed
  });

  it("can gate on non-equality functions", () => {
    const isGateOpen = (current: number, previous: number): boolean =>
      current > previous;

    const { result, rerender } = renderHook(
      ({ value }) => useGatedValue(value, isGateOpen),
      {
        initialProps: { value: 0 },
      }
    );

    expect(result.current).toBe(0);
    rerender({ value: 1 });
    expect(result.current).toBe(1);
    rerender({ value: 0 });
    expect(result.current).toBe(1);
    rerender({ value: 2 });
    expect(result.current).toBe(2);
  });

  it("behaves as an identity function if gate is always open", () => {
    const isGateOpen = () => true;
    const arr1 = [1];
    const arr2 = [1];
    const arr3 = [1];
    const arr4 = [2];

    const { result, rerender } = renderHook(
      ({ value }) => useGatedValue(value, isGateOpen),
      {
        initialProps: { value: arr1 },
      }
    );

    expect(result.current).toBe(arr1);
    rerender({ value: arr2 });
    expect(result.current).toBe(arr2);
    rerender({ value: arr3 });
    expect(result.current).toBe(arr3);
    rerender({ value: arr4 });
    expect(result.current).toBe(arr4);
  });

  it("handles changing the gating function", () => {
    const gateClosed = () => false;
    const gateOpen = () => true;

    const { result, rerender } = renderHook(
      ({ value, isGateOpen }) => useGatedValue(value, isGateOpen),
      {
        initialProps: { value: 1, isGateOpen: gateOpen },
      }
    );

    expect(result.current).toBe(1);
    rerender({ value: 2, isGateOpen: gateOpen });
    expect(result.current).toBe(2);

    rerender({ value: 3, isGateOpen: gateClosed });
    expect(result.current).toBe(2);
  });
});
