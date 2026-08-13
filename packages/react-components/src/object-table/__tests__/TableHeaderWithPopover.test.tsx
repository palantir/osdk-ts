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

import type { Header, Table } from "@tanstack/react-table";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import React, { createRef } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { PortalContainerProvider } from "../../shared/PortalContainerContext.js";
import { TableHeaderWithPopover } from "../TableHeaderWithPopover.js";

interface TestRow {
  name: string;
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
});

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
