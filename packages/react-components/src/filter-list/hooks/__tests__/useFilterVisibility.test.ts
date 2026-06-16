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
import {
  createPropertyFilterDef,
  createSelectState,
  type MockObjectType,
} from "../../__tests__/testUtils.js";
import type { FilterDefinitionUnion } from "../../FilterListApi.js";
import { useFilterVisibility } from "../useFilterVisibility.js";

type MockQ = typeof MockObjectType;

function makeDef(
  key: string,
  isVisible?: boolean,
): FilterDefinitionUnion<MockQ> {
  const def = createPropertyFilterDef(key, "LISTOGRAM", createSelectState([]));
  if (isVisible !== undefined) {
    return { ...def, isVisible } as FilterDefinitionUnion<MockQ>;
  }
  return def;
}

describe("useFilterVisibility", () => {
  it("partitions definitions into visible and hidden based on isVisible", () => {
    const definitions = [
      makeDef("a"),
      makeDef("b", false),
      makeDef("c"),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    expect(result.current.visibleDefinitions).toEqual([
      definitions[0],
      definitions[2],
    ]);
    expect(result.current.hiddenDefinitions).toEqual([
      definitions[1],
    ]);
  });

  it("showFilter moves a hidden filter to visible", () => {
    const definitions = [
      makeDef("a"),
      makeDef("b", false),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    expect(result.current.hiddenDefinitions).toHaveLength(1);

    act(() => {
      result.current.showFilter("b");
    });

    expect(result.current.visibleDefinitions).toEqual([
      definitions[0],
      definitions[1],
    ]);
    expect(result.current.hiddenDefinitions).toEqual([]);
  });

  it("hideFilter moves a visible filter to hidden", () => {
    const definitions = [
      makeDef("a"),
      makeDef("b"),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    expect(result.current.visibleDefinitions).toHaveLength(2);

    act(() => {
      result.current.hideFilter("a");
    });

    expect(result.current.visibleDefinitions).toEqual([
      definitions[1],
    ]);
    expect(result.current.hiddenDefinitions).toEqual([
      definitions[0],
    ]);
  });

  it("handles undefined filterDefinitions gracefully", () => {
    const { result } = renderHook(() => useFilterVisibility(undefined));

    expect(result.current.visibleDefinitions).toEqual([]);
    expect(result.current.hiddenDefinitions).toEqual([]);
  });

  it("reorderVisible changes the order of visible filters", () => {
    const definitions = [
      makeDef("a"),
      makeDef("b"),
      makeDef("c"),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    act(() => {
      result.current.reorderVisible(["c", "a", "b"]);
    });

    expect(result.current.visibleDefinitions).toEqual([
      definitions[2],
      definitions[0],
      definitions[1],
    ]);
  });

  it("reorderVisible is a no-op if order is unchanged", () => {
    const definitions = [
      makeDef("a"),
      makeDef("b"),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    const prevVisible = result.current.visibleDefinitions;

    act(() => {
      result.current.reorderVisible(["a", "b"]);
    });

    expect(result.current.visibleDefinitions).toBe(prevVisible);
  });

  it("hasVisibilityChanges is false initially", () => {
    const definitions = [
      makeDef("a"),
      makeDef("b", false),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    expect(result.current.hasVisibilityChanges).toBe(false);
  });

  it("hasVisibilityChanges is true after showing a hidden filter", () => {
    const definitions = [
      makeDef("a"),
      makeDef("b", false),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    act(() => {
      result.current.showFilter("b");
    });

    expect(result.current.hasVisibilityChanges).toBe(true);
  });

  it("hasVisibilityChanges is true after hiding a visible filter", () => {
    const definitions = [
      makeDef("a"),
      makeDef("b"),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    act(() => {
      result.current.hideFilter("a");
    });

    expect(result.current.hasVisibilityChanges).toBe(true);
  });

  it("hasVisibilityChanges is true after reordering", () => {
    const definitions = [
      makeDef("a"),
      makeDef("b"),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    act(() => {
      result.current.reorderVisible(["b", "a"]);
    });

    expect(result.current.hasVisibilityChanges).toBe(true);
  });

  it("resetVisibility restores original visibility and order", () => {
    const definitions = [
      makeDef("a"),
      makeDef("b", false),
      makeDef("c"),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    act(() => {
      result.current.showFilter("b");
      result.current.reorderVisible(["c", "b", "a"]);
    });

    expect(result.current.hasVisibilityChanges).toBe(true);

    act(() => {
      result.current.resetVisibility();
    });

    expect(result.current.visibleDefinitions).toEqual([
      definitions[0],
      definitions[2],
    ]);
    expect(result.current.hiddenDefinitions).toEqual([
      definitions[1],
    ]);
    expect(result.current.hasVisibilityChanges).toBe(false);
  });

  it("resetVisibility is a no-op when already at defaults", () => {
    const definitions = [
      makeDef("a"),
      makeDef("b"),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    const prevVisible = result.current.visibleDefinitions;

    act(() => {
      result.current.resetVisibility();
    });

    expect(result.current.visibleDefinitions).toBe(prevVisible);
  });

  it("showFilter is a no-op for already-visible filters", () => {
    const definitions = [
      makeDef("a"),
      makeDef("b"),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    const prevVisible = result.current.visibleDefinitions;

    act(() => {
      result.current.showFilter("a");
    });

    expect(result.current.visibleDefinitions).toBe(prevVisible);
  });

  it("showFilter appends newly shown filter to the end", () => {
    const definitions = [
      makeDef("a"),
      makeDef("b", false),
      makeDef("c"),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    act(() => {
      result.current.showFilter("b");
    });

    // "b" should be appended after the existing visible filters
    expect(
      result.current.visibleDefinitions.map(d => (d as { key: string }).key),
    ).toEqual(["a", "c", "b"]);
  });

  it("calls onVisibilityChange when a filter is shown", () => {
    const onChange = vi.fn();
    const definitions = [
      makeDef("a"),
      makeDef("b", false),
    ];

    const { result } = renderHook(() =>
      useFilterVisibility(definitions, onChange)
    );

    act(() => {
      result.current.showFilter("b");
    });

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange).toHaveBeenCalledWith(["a", "b"], []);
  });

  it("calls onVisibilityChange when a filter is hidden", () => {
    const onChange = vi.fn();
    const definitions = [
      makeDef("a"),
      makeDef("b"),
    ];

    const { result } = renderHook(() =>
      useFilterVisibility(definitions, onChange)
    );

    act(() => {
      result.current.hideFilter("a");
    });

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange).toHaveBeenCalledWith(["b"], ["a"]);
  });

  it("calls onVisibilityChange when filters are reordered", () => {
    const onChange = vi.fn();
    const definitions = [
      makeDef("a"),
      makeDef("b"),
    ];

    const { result } = renderHook(() =>
      useFilterVisibility(definitions, onChange)
    );

    act(() => {
      result.current.reorderVisible(["b", "a"]);
    });

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange).toHaveBeenCalledWith(["b", "a"], []);
  });

  it("treats isVisible undefined as visible (default true)", () => {
    const definitions = [
      makeDef("a"), // no isVisible — should be visible
      makeDef("b", true), // explicitly visible
      makeDef("c", false),
    ];

    const { result } = renderHook(() => useFilterVisibility(definitions));

    expect(result.current.visibleDefinitions).toHaveLength(2);
    expect(result.current.hiddenDefinitions).toHaveLength(1);
  });

  it("syncs state when filterDefinitions change", () => {
    const defsV1 = [
      makeDef("a"),
      makeDef("b"),
    ];
    const defsV2 = [
      makeDef("a"),
      makeDef("b"),
      makeDef("c"),
    ];

    const { result, rerender } = renderHook(
      ({ defs }) => useFilterVisibility(defs),
      { initialProps: { defs: defsV1 } },
    );

    expect(result.current.visibleDefinitions).toHaveLength(2);

    rerender({ defs: defsV2 });

    expect(result.current.visibleDefinitions).toHaveLength(3);
  });
});
