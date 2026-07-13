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

import type { CellContext } from "@tanstack/react-table";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { renderDefaultCell } from "../DefaultCellRenderer.js";
import type { CellEditInfo, EditFieldConfig } from "../utils/types.js";

vi.mock("../../cbac-picker/CbacBanner.js", () => ({
  CbacBanner: ({ markingIds }: { markingIds: string[] }) => (
    <div data-testid="cbac-banner" data-marking-ids={markingIds.join(",")}>
      {markingIds.join(",")}
    </div>
  ),
}));

function createCellContext(
  value: unknown,
  overrides?: {
    rowId?: string;
    columnId?: string;
    rowData?: unknown;
    tableMeta?: Record<string, unknown>;
    columnMeta?: Record<string, unknown>;
  }
): CellContext<unknown, unknown> {
  return {
    getValue: () => value,
    table: { options: { meta: overrides?.tableMeta } },
    column: {
      id: overrides?.columnId ?? "col-0",
      columnDef: { meta: overrides?.columnMeta },
    },
    row: {
      original: overrides?.rowData ?? {},
      id: overrides?.rowId ?? "row-0",
    },
  } as unknown as CellContext<unknown, unknown>;
}

describe("renderDefaultCell", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render boolean true as 'true'", () => {
    const result = renderDefaultCell(createCellContext(true));
    render(<div data-testid="cell">{result}</div>);
    expect(screen.getByTestId("cell").textContent).toBe("true");
  });

  it("should render boolean false as 'false'", () => {
    const result = renderDefaultCell(createCellContext(false));
    render(<div data-testid="cell">{result}</div>);
    expect(screen.getByTestId("cell").textContent).toBe("false");
  });

  it("should render string values", () => {
    const result = renderDefaultCell(createCellContext("hello"));
    render(<div data-testid="cell">{result}</div>);
    expect(screen.getByTestId("cell").textContent).toBe("hello");
  });

  it("should render number values", () => {
    const result = renderDefaultCell(createCellContext(42));
    render(<div data-testid="cell">{result}</div>);
    expect(screen.getByTestId("cell").textContent).toBe("42");
  });

  it("should render null as empty", () => {
    const result = renderDefaultCell(createCellContext(null));
    render(<div data-testid="cell">{result}</div>);
    expect(screen.getByTestId("cell").textContent).toBe("");
  });

  it("should render undefined as empty", () => {
    const result = renderDefaultCell(createCellContext(undefined));
    render(<div data-testid="cell">{result}</div>);
    expect(screen.getByTestId("cell").textContent).toBe("");
  });

  describe("marking columns", () => {
    it("renders a CbacBanner for a CBAC marking column with a single id", () => {
      const result = renderDefaultCell(
        createCellContext("marking-1", {
          columnMeta: { markingType: "CBAC" },
        })
      );
      render(<div data-testid="cell">{result}</div>);
      expect(screen.getByTestId("cbac-banner").textContent).toBe("marking-1");
    });

    it("renders a CbacBanner for a CBAC marking column with multiple ids", () => {
      const result = renderDefaultCell(
        createCellContext(["m-1", "m-2"], {
          columnMeta: { markingType: "CBAC" },
        })
      );
      render(<div data-testid="cell">{result}</div>);
      expect(screen.getByTestId("cbac-banner").textContent).toBe("m-1,m-2");
    });

    it("renders nothing for an empty CBAC marking value", () => {
      const result = renderDefaultCell(
        createCellContext(null, {
          columnMeta: { markingType: "CBAC" },
        })
      );
      render(<div data-testid="cell">{result}</div>);
      expect(screen.queryByTestId("cbac-banner")).toBeNull();
    });

    it("renders one CbacBanner per id for a MANDATORY marking column", () => {
      const result = renderDefaultCell(
        createCellContext(["m-1", "m-2"], {
          columnMeta: { markingType: "MANDATORY" },
        })
      );
      render(<div data-testid="cell">{result}</div>);
      const banners = screen.getAllByTestId("cbac-banner");
      expect(banners).toHaveLength(2);
      expect(banners.map((el) => el.getAttribute("data-marking-ids"))).toEqual([
        "m-1",
        "m-2",
      ]);
    });

    it("deduplicates marking ids so duplicate values don't break React keys", () => {
      const result = renderDefaultCell(
        createCellContext(["m-1", "m-1", "m-2"], {
          columnMeta: { markingType: "MANDATORY" },
        })
      );
      render(<div data-testid="cell">{result}</div>);
      const banners = screen.getAllByTestId("cbac-banner");
      expect(banners).toHaveLength(2);
      expect(banners.map((el) => el.getAttribute("data-marking-ids"))).toEqual([
        "m-1",
        "m-2",
      ]);
    });

    it("renders a single CbacBanner for a single-valued MANDATORY marking", () => {
      const result = renderDefaultCell(
        createCellContext("m-1", {
          columnMeta: { markingType: "MANDATORY" },
        })
      );
      render(<div data-testid="cell">{result}</div>);
      const banners = screen.getAllByTestId("cbac-banner");
      expect(banners).toHaveLength(1);
      expect(banners[0].getAttribute("data-marking-ids")).toBe("m-1");
    });

    it("falls back to the default renderer when markingType is absent", () => {
      const result = renderDefaultCell(
        createCellContext("plain-value", {
          columnMeta: { dataType: "marking" },
        })
      );
      render(<div data-testid="cell">{result}</div>);
      expect(screen.getByTestId("cell").textContent).toBe("plain-value");
      expect(screen.queryByTestId("cbac-banner")).toBeNull();
    });
  });

  it("should pass only the current row's pending edits to getFieldComponentProps", () => {
    const getFieldComponentProps = vi.fn().mockReturnValue({ items: [] });
    const editFieldConfig: EditFieldConfig<unknown> = {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps,
    };
    const rowData = { id: "row-1" };
    const otherRowEdit: CellEditInfo<unknown, unknown> = {
      rowId: "row-2",
      columnId: "col-other",
      newValue: "other-row-new",
      oldValue: "other-row-old",
      originalRowData: { id: "row-2" },
    };
    const sameRowEdit: CellEditInfo<unknown, unknown> = {
      rowId: "row-1",
      columnId: "col-sibling",
      newValue: "sibling-new",
      oldValue: "sibling-old",
      originalRowData: rowData,
    };

    const result = renderDefaultCell(
      createCellContext("initial", {
        rowId: "row-1",
        columnId: "col-1",
        rowData,
        tableMeta: {
          onCellEdit: vi.fn(),
          isInEditMode: true,
          focusedRowId: "row-1",
          cellEdits: {
            "row-2_col-other": otherRowEdit,
            "row-1_col-sibling": sameRowEdit,
          },
        },
        columnMeta: {
          editable: true,
          editFieldConfig,
        },
      })
    );

    render(<div data-testid="cell">{result}</div>);

    expect(getFieldComponentProps).toHaveBeenCalled();
    const [forwardedRowData, forwardedEdits] =
      getFieldComponentProps.mock.calls[0];
    expect(forwardedRowData).toBe(rowData);
    expect(forwardedEdits).toEqual({ "col-sibling": sameRowEdit });
  });
});
