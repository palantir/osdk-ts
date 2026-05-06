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

import type { DragEndEvent } from "@dnd-kit/core";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FilterList } from "../FilterList.js";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import { createPropertyFilterDef, MockObjectType } from "./testUtils.js";

vi.mock("@osdk/react", () => ({
  useOsdkMetadata: vi.fn(() => ({ loading: false, metadata: undefined })),
  useOsdkAggregation: vi.fn(() => ({
    data: undefined,
    isLoading: false,
    error: undefined,
  })),
}));

const dndDragEndCaptors = new Set<(event: DragEndEvent) => void>();
vi.mock("@dnd-kit/core", async () => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  const actual: typeof import("@dnd-kit/core") = await vi.importActual(
    "@dnd-kit/core",
  );
  return {
    ...actual,
    DndContext: (
      props: React.ComponentProps<typeof actual.DndContext>,
    ) => {
      const onDragEnd = props.onDragEnd;
      React.useEffect(() => {
        if (!onDragEnd) return;
        dndDragEndCaptors.add(onDragEnd);
        return () => {
          dndDragEndCaptors.delete(onDragEnd);
        };
      }, [onDragEnd]);
      return <actual.DndContext {...props} />;
    },
  };
});

function syntheticDragEndEvent(
  activeId: string,
  overId: string | null,
): DragEndEvent {
  return {
    active: {
      id: activeId,
      data: { current: undefined },
      rect: { current: { initial: null, translated: null } },
    },
    over: overId
      ? {
        id: overId,
        data: { current: undefined },
        rect: {} as DOMRect,
        disabled: false,
      }
      : null,
    delta: { x: 0, y: 0 },
    collisions: null,
    activatorEvent: new Event("test"),
  } as unknown as DragEndEvent;
}

type Def = FilterDefinitionUnion<typeof MockObjectType>;

function visibleDef(key: string): Def {
  return createPropertyFilterDef(key, "LISTOGRAM", {
    type: "EXACT_MATCH",
    values: [],
  });
}

function hiddenDef(key: string): Def {
  const def = visibleDef(key);
  return { ...def, isVisible: false } as Def;
}

describe("FilterList onFilterVisibilityChange", () => {
  afterEach(() => {
    cleanup();
    dndDragEndCaptors.clear();
  });

  it("fires onFilterVisibilityChange when a filter is removed", () => {
    const onFilterVisibilityChange = vi.fn();
    const definitions: Def[] = [
      visibleDef("name"),
      visibleDef("age"),
      hiddenDef("active"),
    ];

    render(
      <FilterList
        objectType={MockObjectType}
        filterDefinitions={definitions}
        onFilterVisibilityChange={onFilterVisibilityChange}
      />,
    );

    fireEvent.click(screen.getByLabelText("Remove name filter"));

    expect(onFilterVisibilityChange).toHaveBeenCalledTimes(1);
    expect(onFilterVisibilityChange).toHaveBeenLastCalledWith([
      { filterKey: "age", isVisible: true },
      { filterKey: "active", isVisible: false },
      { filterKey: "name", isVisible: false },
    ]);
  });

  it("fires twice with consistent state when two filters are removed in sequence", () => {
    const onFilterVisibilityChange = vi.fn();
    const definitions: Def[] = [
      visibleDef("name"),
      visibleDef("age"),
      visibleDef("active"),
    ];

    render(
      <FilterList
        objectType={MockObjectType}
        filterDefinitions={definitions}
        onFilterVisibilityChange={onFilterVisibilityChange}
      />,
    );

    fireEvent.click(screen.getByLabelText("Remove name filter"));
    fireEvent.click(screen.getByLabelText("Remove age filter"));

    expect(onFilterVisibilityChange).toHaveBeenCalledTimes(2);
    expect(onFilterVisibilityChange).toHaveBeenNthCalledWith(1, [
      { filterKey: "age", isVisible: true },
      { filterKey: "active", isVisible: true },
      { filterKey: "name", isVisible: false },
    ]);
    expect(onFilterVisibilityChange).toHaveBeenNthCalledWith(2, [
      { filterKey: "active", isVisible: true },
      { filterKey: "name", isVisible: false },
      { filterKey: "age", isVisible: false },
    ]);
  });

  it("does not fire on remove when addFilterMode is controlled", () => {
    const onFilterVisibilityChange = vi.fn();
    const onFilterRemoved = vi.fn();
    const definitions: Def[] = [visibleDef("name"), visibleDef("age")];

    render(
      <FilterList
        objectType={MockObjectType}
        addFilterMode="controlled"
        filterDefinitions={definitions}
        onFilterVisibilityChange={onFilterVisibilityChange}
        onFilterRemoved={onFilterRemoved}
      />,
    );

    fireEvent.click(screen.getByLabelText("Remove name filter"));

    expect(onFilterRemoved).toHaveBeenCalledWith("name");
    expect(onFilterVisibilityChange).not.toHaveBeenCalled();
  });

  it("forwards onFilterRemoved alongside onFilterVisibilityChange", () => {
    const onFilterVisibilityChange = vi.fn();
    const onFilterRemoved = vi.fn();
    const definitions: Def[] = [visibleDef("name"), visibleDef("age")];

    render(
      <FilterList
        objectType={MockObjectType}
        filterDefinitions={definitions}
        onFilterVisibilityChange={onFilterVisibilityChange}
        onFilterRemoved={onFilterRemoved}
      />,
    );

    fireEvent.click(screen.getByLabelText("Remove age filter"));

    expect(onFilterVisibilityChange).toHaveBeenCalledTimes(1);
    expect(onFilterRemoved).toHaveBeenCalledWith("age");
  });

  it("fires when a hidden filter is added via the popover", async () => {
    const onFilterVisibilityChange = vi.fn();
    const onFilterAdded = vi.fn();
    const definitions: Def[] = [
      visibleDef("name"),
      hiddenDef("age"),
    ];

    render(
      <FilterList
        objectType={MockObjectType}
        filterDefinitions={definitions}
        onFilterVisibilityChange={onFilterVisibilityChange}
        onFilterAdded={onFilterAdded}
      />,
    );

    fireEvent.click(screen.getByText("+ Add filter"));
    const ageOption = await screen.findByRole("menuitem", { name: "age" });
    fireEvent.click(ageOption);

    expect(onFilterAdded).toHaveBeenCalledWith("age", definitions);
    expect(onFilterVisibilityChange).toHaveBeenCalledTimes(1);
    expect(onFilterVisibilityChange).toHaveBeenLastCalledWith([
      { filterKey: "name", isVisible: true },
      { filterKey: "age", isVisible: true },
    ]);
  });

  it("renders newly added filters at the bottom of the list", async () => {
    const definitions: Def[] = [
      visibleDef("name"),
      hiddenDef("age"),
      hiddenDef("active"),
    ];

    render(
      <FilterList
        objectType={MockObjectType}
        filterDefinitions={definitions}
      />,
    );

    const orderOfRows = () =>
      screen.queryAllByLabelText(/^Remove .* filter$/).map((b) =>
        b.getAttribute("aria-label")
      );

    expect(orderOfRows()).toEqual(["Remove name filter"]);

    fireEvent.click(screen.getByText("+ Add filter"));
    fireEvent.click(await screen.findByRole("menuitem", { name: "active" }));
    expect(orderOfRows()).toEqual([
      "Remove name filter",
      "Remove active filter",
    ]);

    // "age" sits before "active" in filterDefinitions, but as a freshly-added
    // filter it must still render at the bottom.
    fireEvent.click(screen.getByText("+ Add filter"));
    fireEvent.click(await screen.findByRole("menuitem", { name: "age" }));
    expect(orderOfRows()).toEqual([
      "Remove name filter",
      "Remove active filter",
      "Remove age filter",
    ]);
  });

  it("fires with appended order when multiple hidden filters are added in sequence", async () => {
    const onFilterVisibilityChange = vi.fn();
    const definitions: Def[] = [
      visibleDef("name"),
      hiddenDef("age"),
      hiddenDef("active"),
    ];

    render(
      <FilterList
        objectType={MockObjectType}
        filterDefinitions={definitions}
        onFilterVisibilityChange={onFilterVisibilityChange}
      />,
    );

    fireEvent.click(screen.getByText("+ Add filter"));
    fireEvent.click(await screen.findByRole("menuitem", { name: "active" }));

    fireEvent.click(screen.getByText("+ Add filter"));
    fireEvent.click(await screen.findByRole("menuitem", { name: "age" }));

    expect(onFilterVisibilityChange).toHaveBeenCalledTimes(2);
    expect(onFilterVisibilityChange).toHaveBeenNthCalledWith(1, [
      { filterKey: "name", isVisible: true },
      { filterKey: "active", isVisible: true },
      { filterKey: "age", isVisible: false },
    ]);
    expect(onFilterVisibilityChange).toHaveBeenNthCalledWith(2, [
      { filterKey: "name", isVisible: true },
      { filterKey: "active", isVisible: true },
      { filterKey: "age", isVisible: true },
    ]);
  });

  it("fires with reordered visible keys when filters are reordered", () => {
    const onFilterVisibilityChange = vi.fn();
    const definitions: Def[] = [
      visibleDef("name"),
      visibleDef("age"),
      visibleDef("active"),
    ];

    render(
      <FilterList
        objectType={MockObjectType}
        filterDefinitions={definitions}
        enableSorting={true}
        onFilterVisibilityChange={onFilterVisibilityChange}
      />,
    );

    expect(dndDragEndCaptors.size).toBe(1);
    const [onDragEnd] = Array.from(dndDragEndCaptors);
    onDragEnd(syntheticDragEndEvent("name", "active"));

    expect(onFilterVisibilityChange).toHaveBeenCalledTimes(1);
    expect(onFilterVisibilityChange).toHaveBeenLastCalledWith([
      { filterKey: "age", isVisible: true },
      { filterKey: "active", isVisible: true },
      { filterKey: "name", isVisible: true },
    ]);
  });

  it("preserves hidden filters in payload when visible filters are reordered", () => {
    const onFilterVisibilityChange = vi.fn();
    const definitions: Def[] = [
      visibleDef("name"),
      visibleDef("age"),
      hiddenDef("active"),
    ];

    render(
      <FilterList
        objectType={MockObjectType}
        filterDefinitions={definitions}
        enableSorting={true}
        onFilterVisibilityChange={onFilterVisibilityChange}
      />,
    );

    const [onDragEnd] = Array.from(dndDragEndCaptors);
    onDragEnd(syntheticDragEndEvent("name", "age"));

    expect(onFilterVisibilityChange).toHaveBeenLastCalledWith([
      { filterKey: "age", isVisible: true },
      { filterKey: "name", isVisible: true },
      { filterKey: "active", isVisible: false },
    ]);
  });

  it("does not fire on reorder when the drop target equals the active item", () => {
    const onFilterVisibilityChange = vi.fn();
    const definitions: Def[] = [
      visibleDef("name"),
      visibleDef("age"),
    ];

    render(
      <FilterList
        objectType={MockObjectType}
        filterDefinitions={definitions}
        enableSorting={true}
        onFilterVisibilityChange={onFilterVisibilityChange}
      />,
    );

    const [onDragEnd] = Array.from(dndDragEndCaptors);
    onDragEnd(syntheticDragEndEvent("name", "name"));
    onDragEnd(syntheticDragEndEvent("name", null));

    expect(onFilterVisibilityChange).not.toHaveBeenCalled();
  });

  it("fires with the original visibility state on reset", () => {
    const onFilterVisibilityChange = vi.fn();
    const definitions: Def[] = [
      visibleDef("name"),
      visibleDef("age"),
      hiddenDef("active"),
    ];

    render(
      <FilterList
        objectType={MockObjectType}
        filterDefinitions={definitions}
        showResetButton={true}
        onFilterVisibilityChange={onFilterVisibilityChange}
      />,
    );

    fireEvent.click(screen.getByLabelText("Remove name filter"));
    expect(onFilterVisibilityChange).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole("button", { name: /Reset filters/ }));

    expect(onFilterVisibilityChange).toHaveBeenCalledTimes(2);
    expect(onFilterVisibilityChange).toHaveBeenLastCalledWith([
      { filterKey: "name", isVisible: true },
      { filterKey: "age", isVisible: true },
      { filterKey: "active", isVisible: false },
    ]);
  });
});
