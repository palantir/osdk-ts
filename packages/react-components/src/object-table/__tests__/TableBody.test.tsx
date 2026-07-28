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

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { cleanup, render } from "@testing-library/react";
import React, { useRef } from "react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { LoadingStateTable } from "../LoadingStateTable.js";
import { TableBody } from "../TableBody.js";
import {
  DEFAULT_ROW_HEIGHT,
  VIRTUALIZER_OVERSCAN,
} from "../utils/constants.js";

interface TestRow {
  id: string;
  name: string;
}

const COLUMNS = [{ accessorKey: "name", id: "name", header: "Name" }];

/**
 * happy-dom reports every element as 0x0. `@tanstack/react-virtual` sizes its
 * window from the scroll element's `offsetHeight`, so without this stub the
 * virtualizer renders nothing at all.
 */
const VIEWPORT_HEIGHT = DEFAULT_ROW_HEIGHT * 10;

/**
 * Rows the virtualizer keeps mounted at scroll offset 0: the visible window
 * plus `VIRTUALIZER_OVERSCAN` trailing rows.
 */
const RENDERED_ROW_COUNT =
  VIEWPORT_HEIGHT / DEFAULT_ROW_HEIGHT + VIRTUALIZER_OVERSCAN;

function makeRows(count: number): TestRow[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `row-${index}`,
    name: `Row ${index}`,
  }));
}

/**
 * Renders `TableBody` against a real TanStack table instance. The scroll
 * container has no layout in happy-dom, so the virtualizer keeps its window
 * near the top of the list — which is exactly the condition under which a
 * DOM-position-based last-row selector misfires.
 */
function TableBodyHarness({
  rowCount,
  isLoadingMore = false,
}: {
  rowCount: number;
  isLoadingMore?: boolean;
}): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const table = useReactTable<TestRow>({
    data: makeRows(rowCount),
    columns: COLUMNS,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.id,
  });

  return (
    <div ref={containerRef}>
      <table>
        <TableBody
          rows={table.getRowModel().rows}
          tableContainerRef={containerRef}
          headerGroups={table.getHeaderGroups()}
          isLoadingMore={isLoadingMore}
        />
      </table>
    </div>
  );
}

/** Renders the full-table loading skeleton (`LoadingStateTable`). */
function LoadingSkeletonHarness(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const table = useReactTable<TestRow>({
    data: makeRows(0),
    columns: COLUMNS,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.id,
  });

  return (
    <div ref={containerRef}>
      <table>
        <LoadingStateTable
          table={table}
          tableContainerRef={containerRef}
          headerGroups={table.getHeaderGroups()}
        />
      </table>
    </div>
  );
}

function renderedRows(container: HTMLElement): HTMLTableRowElement[] {
  return Array.from(container.querySelectorAll("tbody tr"));
}

function lastRowMarked(container: HTMLElement): HTMLTableRowElement[] {
  return renderedRows(container).filter(
    (row) => row.getAttribute("data-last-row") === "true"
  );
}

describe(TableBody, () => {
  const originalDescriptors = new Map<string, PropertyDescriptor | undefined>();

  function stubLayout(property: "offsetHeight" | "offsetWidth", value: number) {
    originalDescriptors.set(
      property,
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, property)
    );
    Object.defineProperty(HTMLElement.prototype, property, {
      configurable: true,
      get: () => value,
    });
  }

  beforeEach(() => {
    stubLayout("offsetHeight", VIEWPORT_HEIGHT);
    stubLayout("offsetWidth", 800);
  });

  afterEach(() => {
    cleanup();
    for (const [property, descriptor] of originalDescriptors) {
      if (descriptor != null) {
        Object.defineProperty(HTMLElement.prototype, property, descriptor);
      } else {
        Reflect.deleteProperty(HTMLElement.prototype, property);
      }
    }
    originalDescriptors.clear();
  });

  describe("last row bottom border", () => {
    it("marks the final data row so it can carry the terminating border", () => {
      const { container } = render(<TableBodyHarness rowCount={3} />);

      const rows = renderedRows(container);
      expect(rows).toHaveLength(3);

      const marked = lastRowMarked(container);
      expect(marked).toHaveLength(1);
      expect(marked[0]).toBe(rows[rows.length - 1]);
    });

    it("does not mark the last rendered row when it is only an overscan row", () => {
      // Far more rows than the virtualizer renders, so the final data row is
      // outside the virtual window. Keying the border off DOM position would
      // paint it on an arbitrary mid-list row instead.
      const { container } = render(<TableBodyHarness rowCount={500} />);

      const rows = renderedRows(container);
      expect(rows).toHaveLength(RENDERED_ROW_COUNT);

      // The DOM's `:last-child` here is a trailing overscan row sitting below
      // the fold — not row 499 — which is why the border cannot be keyed off
      // DOM position.
      const lastRendered = rows[rows.length - 1];
      expect(lastRendered.textContent).toContain(
        `Row ${RENDERED_ROW_COUNT - 1}`
      );

      expect(lastRowMarked(container)).toHaveLength(0);
    });

    it("hands the terminating border to the loading row while fetching more", () => {
      const { container } = render(
        <TableBodyHarness rowCount={3} isLoadingMore={true} />
      );

      const rows = renderedRows(container);
      // 3 data rows plus the loading skeleton row.
      expect(rows).toHaveLength(4);

      // Exactly one border, on the skeleton row at the visual bottom. Marking
      // the last data row too would butt its 1px bottom border against the
      // skeleton's 1px top border and render a doubled 2px line.
      const marked = lastRowMarked(container);
      expect(marked).toHaveLength(1);
      expect(marked[0]).toBe(rows[3]);
      expect(rows[2].getAttribute("data-last-row")).toBeNull();
    });

    it("gives the full-table loading skeleton exactly one terminating border", () => {
      // LoadingStateTable renders a whole column of LoadingRows, so the
      // attribute must not be baked into LoadingRow itself.
      const { container } = render(<LoadingSkeletonHarness />);

      const rows = renderedRows(container);
      expect(rows.length).toBeGreaterThan(1);

      const marked = lastRowMarked(container);
      expect(marked).toHaveLength(1);
      expect(marked[0]).toBe(rows[rows.length - 1]);
    });
  });
});
