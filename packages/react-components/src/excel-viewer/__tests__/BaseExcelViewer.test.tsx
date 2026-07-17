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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BaseExcelViewer } from "../BaseExcelViewer.js";
import type { SheetData } from "../ExcelViewerApi.js";
import type { UseExcelViewerStateResult } from "../hooks/useExcelViewerState.js";

vi.mock("../hooks/useExcelViewerState.js", () => ({
  useExcelViewerState: vi.fn(),
}));

const { useExcelViewerState } = await import("../hooks/useExcelViewerState.js");
const mockedUseState = vi.mocked(useExcelViewerState);

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

const CONTENT = new ArrayBuffer(0);

function stateResult(
  overrides: Partial<UseExcelViewerStateResult> = {}
): UseExcelViewerStateResult {
  return {
    error: undefined,
    sheets: [],
    activeSheetIndex: 0,
    activeSheet: undefined,
    selectSheet: vi.fn(),
    ...overrides,
  };
}

const SHEET_A: SheetData = {
  name: "Alpha",
  rows: [
    ["Name", "Age"],
    ["Alice", "30"],
  ],
};
const SHEET_B: SheetData = { name: "Beta", rows: [["x"]] };

describe("BaseExcelViewer", () => {
  it("shows a parse error", () => {
    mockedUseState.mockReturnValue(
      stateResult({ error: new Error("corrupt workbook") })
    );
    render(<BaseExcelViewer content={CONTENT} />);

    expect(
      screen.getByText(/Failed to parse spreadsheet: corrupt workbook/u)
    ).toBeTruthy();
  });

  it("renders the active sheet as a table", () => {
    mockedUseState.mockReturnValue(
      stateResult({ sheets: [SHEET_A], activeSheet: SHEET_A })
    );
    render(<BaseExcelViewer content={CONTENT} />);

    expect(screen.getByText("Name")).toBeTruthy();
    expect(screen.getByText("Alice")).toBeTruthy();
    expect(screen.getByText("30")).toBeTruthy();
  });

  it("shows 'No sheets' when there is no active sheet", () => {
    mockedUseState.mockReturnValue(stateResult({ sheets: [] }));
    render(<BaseExcelViewer content={CONTENT} />);

    expect(screen.getByText("No sheets")).toBeTruthy();
  });

  it("renders a tab per sheet and calls selectSheet on click", () => {
    const selectSheet = vi.fn();
    mockedUseState.mockReturnValue(
      stateResult({
        sheets: [SHEET_A, SHEET_B],
        activeSheet: SHEET_A,
        activeSheetIndex: 0,
        selectSheet,
      })
    );
    render(<BaseExcelViewer content={CONTENT} />);

    const betaTab = screen.getByRole("button", { name: "Beta" });
    expect(screen.getByRole("button", { name: "Alpha" })).toBeTruthy();

    fireEvent.click(betaTab);
    expect(selectSheet).toHaveBeenCalledWith(1);
  });

  it("renders no tab bar for a single-sheet workbook", () => {
    mockedUseState.mockReturnValue(
      stateResult({ sheets: [SHEET_A], activeSheet: SHEET_A })
    );
    render(<BaseExcelViewer content={CONTENT} />);

    expect(screen.queryByRole("button", { name: "Alpha" })).toBeNull();
  });
});
