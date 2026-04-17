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
import { describe, expect, it } from "vitest";
import { useFilterVisibility } from "../useFilterVisibility.js";

interface MockDef {
  key: string;
  visible: boolean;
}

function getKey(def: MockDef): string {
  return def.key;
}

function getIsVisible(def: MockDef): boolean {
  return def.visible;
}

describe("useFilterVisibility", () => {
  it("partitions definitions into visible and hidden based on getIsVisible", () => {
    const definitions: Array<MockDef> = [
      { key: "a", visible: true },
      { key: "b", visible: false },
      { key: "c", visible: true },
    ];

    const { result } = renderHook(() =>
      useFilterVisibility(definitions, getKey, getIsVisible),
    );

    expect(result.current.visibleDefinitions).toEqual([
      { key: "a", visible: true },
      { key: "c", visible: true },
    ]);
    expect(result.current.hiddenDefinitions).toEqual([
      { key: "b", visible: false },
    ]);
  });

  it("showFilter moves a hidden filter to visible", () => {
    const definitions: Array<MockDef> = [
      { key: "a", visible: true },
      { key: "b", visible: false },
    ];

    const { result } = renderHook(() =>
      useFilterVisibility(definitions, getKey, getIsVisible),
    );

    expect(result.current.hiddenDefinitions).toHaveLength(1);

    act(() => {
      result.current.showFilter("b");
    });

    expect(result.current.visibleDefinitions).toEqual([
      { key: "a", visible: true },
      { key: "b", visible: false },
    ]);
    expect(result.current.hiddenDefinitions).toEqual([]);
  });

  it("hideFilter moves a visible filter to hidden", () => {
    const definitions: Array<MockDef> = [
      { key: "a", visible: true },
      { key: "b", visible: true },
    ];

    const { result } = renderHook(() =>
      useFilterVisibility(definitions, getKey, getIsVisible),
    );

    expect(result.current.visibleDefinitions).toHaveLength(2);

    act(() => {
      result.current.hideFilter("a");
    });

    expect(result.current.visibleDefinitions).toEqual([
      { key: "b", visible: true },
    ]);
    expect(result.current.hiddenDefinitions).toEqual([
      { key: "a", visible: true },
    ]);
  });

  it("handles undefined filterDefinitions gracefully", () => {
    const { result } = renderHook(() =>
      useFilterVisibility(undefined, getKey, getIsVisible),
    );

    expect(result.current.visibleDefinitions).toEqual([]);
    expect(result.current.hiddenDefinitions).toEqual([]);
  });
});
