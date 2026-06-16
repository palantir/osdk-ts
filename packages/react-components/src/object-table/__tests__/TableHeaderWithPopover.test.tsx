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
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React, { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { PortalContainerProvider } from "../../shared/PortalContainerContext.js";
import { TableHeaderWithPopover } from "../TableHeaderWithPopover.js";

interface TestRow {
  name: string;
}

describe(TableHeaderWithPopover, () => {
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

function createHeader(): Header<TestRow, unknown> {
  return {
    column: {
      id: "name",
      columnDef: {
        header: "Name",
      },
      getIsSorted: () => false,
      getCanSort: () => false,
      toggleSorting: vi.fn(),
      clearSorting: vi.fn(),
    },
    getContext: () => ({}),
  } as unknown as Header<TestRow, unknown>;
}
