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

import type { ParsedSpreadsheet } from "../../ExcelViewerApi.js";
import { useExcelViewerState } from "../useExcelViewerState.js";

function makeSpreadsheet(sheetNames: readonly string[]): ParsedSpreadsheet {
  return {
    sheets: sheetNames.map((name) => ({ name, rows: [[name]] })),
  };
}

describe("useExcelViewerState", () => {
  it("should default to the first sheet", () => {
    const spreadsheet = makeSpreadsheet(["Alpha", "Beta"]);
    const { result } = renderHook(() => useExcelViewerState({ spreadsheet }));

    expect(result.current.activeSheetIndex).toBe(0);
    expect(result.current.activeSheet?.name).toBe("Alpha");
    expect(result.current.sheets).toHaveLength(2);
  });

  it("should select a sheet by index", () => {
    const spreadsheet = makeSpreadsheet(["Alpha", "Beta", "Gamma"]);
    const { result } = renderHook(() => useExcelViewerState({ spreadsheet }));

    act(() => {
      result.current.selectSheet(2);
    });

    expect(result.current.activeSheetIndex).toBe(2);
    expect(result.current.activeSheet?.name).toBe("Gamma");
  });

  it("should clamp the active index when the workbook shrinks", () => {
    const { result, rerender } = renderHook(
      ({ spreadsheet }: { spreadsheet: ParsedSpreadsheet }) =>
        useExcelViewerState({ spreadsheet }),
      { initialProps: { spreadsheet: makeSpreadsheet(["A", "B", "C"]) } }
    );

    act(() => {
      result.current.selectSheet(2);
    });
    expect(result.current.activeSheetIndex).toBe(2);

    rerender({ spreadsheet: makeSpreadsheet(["A"]) });

    expect(result.current.activeSheetIndex).toBe(0);
    expect(result.current.activeSheet?.name).toBe("A");
  });

  it("should return undefined activeSheet for an empty workbook", () => {
    const { result } = renderHook(() =>
      useExcelViewerState({ spreadsheet: { sheets: [] } })
    );

    expect(result.current.activeSheetIndex).toBe(0);
    expect(result.current.activeSheet).toBeUndefined();
    expect(result.current.sheets).toHaveLength(0);
  });
});
