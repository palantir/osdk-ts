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
import { afterEach, describe, expect, it, vi } from "vitest";

import type { ParsedSpreadsheet } from "../../ExcelViewerApi.js";
import { useExcelViewerState } from "../useExcelViewerState.js";

vi.mock("../../parseSpreadsheet.js", () => ({
  parseSpreadsheet: vi.fn(),
}));

const { parseSpreadsheet } = await import("../../parseSpreadsheet.js");
const mockedParse = vi.mocked(parseSpreadsheet);

afterEach(() => {
  vi.clearAllMocks();
});

function makeSpreadsheet(sheetNames: readonly string[]): ParsedSpreadsheet {
  return {
    sheets: sheetNames.map((name) => ({ name, rows: [[name]] })),
  };
}

// Distinct buffer lengths let the parse mock return different workbooks per
// content, so we can exercise re-parsing on content change.
const CONTENT = new ArrayBuffer(8);

describe("useExcelViewerState", () => {
  it("should parse the content and default to the first sheet", () => {
    mockedParse.mockReturnValue(makeSpreadsheet(["Alpha", "Beta"]));
    const { result } = renderHook(() =>
      useExcelViewerState({ content: CONTENT })
    );

    expect(mockedParse).toHaveBeenCalledWith(CONTENT);
    expect(result.current.error).toBeUndefined();
    expect(result.current.activeSheetIndex).toBe(0);
    expect(result.current.activeSheet?.name).toBe("Alpha");
    expect(result.current.sheets).toHaveLength(2);
  });

  it("should select a sheet by index", () => {
    mockedParse.mockReturnValue(makeSpreadsheet(["Alpha", "Beta", "Gamma"]));
    const { result } = renderHook(() =>
      useExcelViewerState({ content: CONTENT })
    );

    act(() => {
      result.current.selectSheet(2);
    });

    expect(result.current.activeSheetIndex).toBe(2);
    expect(result.current.activeSheet?.name).toBe("Gamma");
  });

  it("should re-parse and clamp the active index when content changes", () => {
    mockedParse.mockImplementation((content: ArrayBuffer) =>
      content.byteLength === 3
        ? makeSpreadsheet(["A"])
        : makeSpreadsheet(["A", "B", "C"])
    );

    const { result, rerender } = renderHook(
      ({ content }: { content: ArrayBuffer }) =>
        useExcelViewerState({ content }),
      { initialProps: { content: new ArrayBuffer(9) } }
    );

    act(() => {
      result.current.selectSheet(2);
    });
    expect(result.current.activeSheetIndex).toBe(2);

    rerender({ content: new ArrayBuffer(3) });

    expect(result.current.activeSheetIndex).toBe(0);
    expect(result.current.activeSheet?.name).toBe("A");
  });

  it("should return undefined activeSheet for an empty workbook", () => {
    mockedParse.mockReturnValue({ sheets: [] });
    const { result } = renderHook(() =>
      useExcelViewerState({ content: CONTENT })
    );

    expect(result.current.activeSheetIndex).toBe(0);
    expect(result.current.activeSheet).toBeUndefined();
    expect(result.current.sheets).toHaveLength(0);
  });

  it("should surface a parse error and fall back to no sheets", () => {
    mockedParse.mockImplementation(() => {
      throw new Error("corrupt workbook");
    });
    const { result } = renderHook(() =>
      useExcelViewerState({ content: CONTENT })
    );

    expect(result.current.error?.message).toBe("corrupt workbook");
    expect(result.current.sheets).toHaveLength(0);
    expect(result.current.activeSheet).toBeUndefined();
  });
});
