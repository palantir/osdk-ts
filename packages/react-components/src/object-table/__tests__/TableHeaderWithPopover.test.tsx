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

import type {
  ColumnDef,
  Header,
  OnChangeFn,
  SortingState,
  Table,
} from "@tanstack/react-table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import React, { createRef, useCallback, useRef, useState } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { PortalContainerProvider } from "../../shared/PortalContainerContext.js";
import { TableHeaderWithPopover } from "../TableHeaderWithPopover.js";

import styles from "../TableHeaderWithPopover.module.css";

interface TestRow {
  name: string;
  age: number;
}

describe(TableHeaderWithPopover, () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the header menu inside the provided portal container", async () => {
    const portalContainerRef = createRef<HTMLDivElement>();

    render(
      <PortalContainerProvider container={portalContainerRef}>
        <TableHeaderWithPopover
          table={createTable()}
          header={createHeader()}
          isColumnPinned={false}
          featureFlags={{
            showPinningItems: true,
          }}
        />
        <div data-testid="header-menu-portal" ref={portalContainerRef} />
      </PortalContainerProvider>,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open header menu for column with id=name",
      }),
    );

    await waitFor(() => {
      expect(screen.getByRole("menuitem", { name: "Pin column" })).toBeTruthy();
    });

    const portalContainer = screen.getByTestId("header-menu-portal");
    expect(
      portalContainer.contains(
        screen.getByRole("menuitem", { name: "Pin column" }),
      ),
    ).toBe(true);
  });

  describe("sort indicator icon", () => {
    it.each([
      ["string", "asc", "sort-alphabetical"],
      ["string", "desc", "sort-alphabetical-desc"],
      ["double", "asc", "sort-numerical"],
      ["double", "desc", "sort-numerical-desc"],
      ["integer", "asc", "sort-numerical"],
      ["long", "desc", "sort-numerical-desc"],
      ["timestamp", "asc", "sort-asc"],
      ["datetime", "desc", "sort-desc"],
      ["boolean", "asc", "sort-asc"],
      [undefined, "asc", "sort-asc"],
    ] as const)(
      "renders %s sorted %s with the %s icon",
      (dataType, direction, expectedIcon) => {
        const { container } = render(
          <TableHeaderWithPopover
            table={createTable()}
            header={createHeader({ dataType, isSorted: direction })}
            isColumnPinned={false}
          />,
        );

        expect(
          container.querySelector(`svg[data-icon="${expectedIcon}"]`),
        ).toBeTruthy();
      },
    );

    it("uses the property-type icons for the sort menu items", async () => {
      const portalContainerRef = createRef<HTMLDivElement>();

      render(
        <PortalContainerProvider container={portalContainerRef}>
          <TableHeaderWithPopover
            table={createTable()}
            header={createHeader({ dataType: "double", canSort: true })}
            isColumnPinned={false}
            featureFlags={{ showSortingItems: true }}
          />
          <div data-testid="header-menu-portal" ref={portalContainerRef} />
        </PortalContainerProvider>,
      );

      fireEvent.click(
        screen.getByRole("button", {
          name: "Open header menu for column with id=name",
        }),
      );

      await waitFor(() => {
        expect(
          screen.getByRole("menuitem", { name: "Sort ascending" }),
        ).toBeTruthy();
      });

      expect(
        screen
          .getByRole("menuitem", { name: "Sort ascending" })
          .querySelector('svg[data-icon="sort-numerical"]'),
      ).toBeTruthy();
      expect(
        screen
          .getByRole("menuitem", { name: "Sort descending" })
          .querySelector('svg[data-icon="sort-numerical-desc"]'),
      ).toBeTruthy();
    });
  });

  describe("active menu item styling for pinning", () => {
    it("marks the unpin item active while the column is pinned", async () => {
      render(
        <PortalContainerProvider container={createRef<HTMLDivElement>()}>
          <TableHeaderWithPopover
            table={createTable()}
            header={createHeader()}
            isColumnPinned="left"
            featureFlags={{ showPinningItems: true }}
          />
        </PortalContainerProvider>
      );

      await openHeaderMenu("name");

      expect(activeStateByMenuItem()).toEqual({ "Unpin Column": true });
    });

    it("does not mark the pin item active while the column is unpinned", async () => {
      render(
        <PortalContainerProvider container={createRef<HTMLDivElement>()}>
          <TableHeaderWithPopover
            table={createTable()}
            header={createHeader()}
            isColumnPinned={false}
            featureFlags={{ showPinningItems: true }}
          />
        </PortalContainerProvider>
      );

      await openHeaderMenu("name");

      expect(activeStateByMenuItem()).toEqual({ "Pin column": false });
    });
  });

  describe("sort menu item toggling", () => {
    it("removes the column's sort when the already-active ascending item is clicked", async () => {
      const onSortingChanged = vi.fn();

      render(
        <SortMenuHarness
          columnId="name"
          initialSorting={[{ id: "name", desc: false }]}
          onSortingChanged={onSortingChanged}
        />
      );

      await clickSortMenuItem("name", "Sort ascending");

      expect(latestSorting(onSortingChanged)).toEqual([]);
    });

    it("removes the column's sort when the already-active descending item is clicked", async () => {
      const onSortingChanged = vi.fn();

      render(
        <SortMenuHarness
          columnId="name"
          initialSorting={[{ id: "name", desc: true }]}
          onSortingChanged={onSortingChanged}
        />
      );

      await clickSortMenuItem("name", "Sort descending");

      expect(latestSorting(onSortingChanged)).toEqual([]);
    });

    it("keeps other columns sorted when one column of a multi-column sort is unsorted", async () => {
      const onSortingChanged = vi.fn();

      render(
        <SortMenuHarness
          columnId="name"
          initialSorting={[
            { id: "name", desc: false },
            { id: "age", desc: true },
          ]}
          onSortingChanged={onSortingChanged}
        />
      );

      await clickSortMenuItem("name", "Sort ascending");

      expect(latestSorting(onSortingChanged)).toEqual([
        { id: "age", desc: true },
      ]);
    });

    it("still flips direction when the inactive item is clicked", async () => {
      const onSortingChanged = vi.fn();

      render(
        <SortMenuHarness
          columnId="name"
          initialSorting={[{ id: "name", desc: false }]}
          onSortingChanged={onSortingChanged}
        />
      );

      await clickSortMenuItem("name", "Sort descending");

      expect(latestSorting(onSortingChanged)).toEqual([
        { id: "name", desc: true },
      ]);
    });

    it("marks the matching direction item active while leaving the other inactive", async () => {
      render(
        <SortMenuHarness
          columnId="name"
          initialSorting={[{ id: "name", desc: false }]}
          onSortingChanged={vi.fn()}
        />
      );

      await openHeaderMenu("name");

      expect(activeStateByMenuItem()).toEqual({
        "Sort ascending": true,
        "Sort descending": false,
        "Clear all sorts": false,
      });
    });

    it("moves the active marker to the descending item when sorted descending", async () => {
      render(
        <SortMenuHarness
          columnId="name"
          initialSorting={[{ id: "name", desc: true }]}
          onSortingChanged={vi.fn()}
        />
      );

      await openHeaderMenu("name");

      expect(activeStateByMenuItem()).toEqual({
        "Sort ascending": false,
        "Sort descending": true,
        "Clear all sorts": false,
      });
    });

    it("marks no direction item active while the column is unsorted", async () => {
      render(
        <SortMenuHarness
          columnId="name"
          initialSorting={EMPTY_SORTING}
          onSortingChanged={vi.fn()}
        />
      );

      await openHeaderMenu("name");

      expect(activeStateByMenuItem()).toEqual({
        "Sort ascending": false,
        "Sort descending": false,
      });
    });

    it("sorts an unsorted column ascending", async () => {
      const onSortingChanged = vi.fn();

      render(
        <SortMenuHarness
          columnId="name"
          initialSorting={EMPTY_SORTING}
          onSortingChanged={onSortingChanged}
        />
      );

      await clickSortMenuItem("name", "Sort ascending");

      expect(latestSorting(onSortingChanged)).toEqual([
        { id: "name", desc: false },
      ]);
    });
  });
});

const EMPTY_SORTING: SortingState = [];
const TEST_DATA: TestRow[] = [{ name: "Alice", age: 30 }];
const TEST_COLUMNS: Array<ColumnDef<TestRow>> = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "age", header: "Age" },
];

interface SortMenuHarnessProps {
  columnId: string;
  initialSorting: SortingState;
  onSortingChanged: (sorting: SortingState) => void;
}

/**
 * Renders the header menu for a single column of a real TanStack table so
 * sort toggling is exercised against the actual table state rather than a
 * hand-rolled mock.
 */
function SortMenuHarness({
  columnId,
  initialSorting,
  onSortingChanged,
}: SortMenuHarnessProps): React.ReactElement {
  const portalContainerRef = useRef<HTMLDivElement>(null);
  const [sorting, setSorting] = useState<SortingState>(initialSorting);
  // Tracked in a ref as well so back-to-back updates within one click handler
  // each see the previous value instead of the stale render-time state.
  const sortingRef = useRef<SortingState>(initialSorting);

  const onSortingChange: OnChangeFn<SortingState> = useCallback(
    (updater) => {
      const next =
        typeof updater === "function" ? updater(sortingRef.current) : updater;
      sortingRef.current = next;
      setSorting(next);
      onSortingChanged(next);
    },
    [onSortingChanged]
  );

  const table = useReactTable<TestRow>({
    data: TEST_DATA,
    columns: TEST_COLUMNS,
    getCoreRowModel: getCoreRowModel(),
    state: { sorting },
    onSortingChange,
    manualSorting: true,
  });

  const header = table
    .getHeaderGroups()[0]
    .headers.find((h) => h.column.id === columnId);
  if (header == null) {
    throw new Error(`No header found for column id=${columnId}`);
  }

  return (
    <PortalContainerProvider container={portalContainerRef}>
      <TableHeaderWithPopover
        table={table}
        header={header}
        isColumnPinned={false}
        featureFlags={{ showSortingItems: true }}
      />
      <div data-testid="header-menu-portal" ref={portalContainerRef} />
    </PortalContainerProvider>
  );
}

async function openHeaderMenu(columnId: string): Promise<void> {
  fireEvent.click(
    screen.getByRole("button", {
      name: `Open header menu for column with id=${columnId}`,
    })
  );

  await waitFor(() => screen.getAllByRole("menuitem"));
}

async function clickSortMenuItem(
  columnId: string,
  itemLabel: string
): Promise<void> {
  await openHeaderMenu(columnId);
  fireEvent.click(screen.getByRole("menuitem", { name: itemLabel }));
}

/**
 * Whether each open menu item carries the active-styling class, keyed by
 * label. Vitest stubs CSS modules, so this asserts the class is applied to
 * the right item — not that the stylesheet renders it.
 */
function activeStateByMenuItem(): Record<string, boolean> {
  return Object.fromEntries(
    screen
      .getAllByRole("menuitem")
      .map((item) => [
        item.textContent?.trim() ?? "",
        item.classList.contains(styles.osdkHeaderActiveMenuItem),
      ])
  );
}

/**
 * The final sorting state the header menu settled on. The menu may notify
 * more than once per click, so only the last value is meaningful.
 */
function latestSorting(
  onSortingChanged: ReturnType<typeof vi.fn>
): SortingState | undefined {
  const calls = onSortingChanged.mock.calls;
  return calls.at(-1)?.[0] as SortingState | undefined;
}

function createTable(): Table<TestRow> {
  return {
    setColumnPinning: vi.fn(),
    setSorting: vi.fn(),
    getState: () => ({
      sorting: [],
    }),
  } as unknown as Table<TestRow>;
}

function createHeader({
  dataType,
  isSorted = false,
  canSort = false,
}: {
  dataType?: string;
  isSorted?: "asc" | "desc" | false;
  canSort?: boolean;
} = {}): Header<TestRow, unknown> {
  return {
    column: {
      id: "name",
      columnDef: {
        header: "Name",
        meta: dataType != null ? { dataType } : undefined,
      },
      getIsSorted: () => isSorted,
      getCanSort: () => canSort,
      toggleSorting: vi.fn(),
      clearSorting: vi.fn(),
    },
    getContext: () => ({}),
  } as unknown as Header<TestRow, unknown>;
}
