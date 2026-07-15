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

import { useCallback, useMemo, useState } from "react";

import type { ParsedSpreadsheet, SheetData } from "../ExcelViewerApi.js";
import { parseSpreadsheet } from "../parseSpreadsheet.js";

const EMPTY_SPREADSHEET: ParsedSpreadsheet = { sheets: [] };

export interface UseExcelViewerStateOptions {
  /** Raw .xlsx bytes to parse and display (e.g. from `media.fetchContents()`). */
  content: ArrayBuffer;
}

export interface UseExcelViewerStateResult {
  /** Error thrown while parsing the spreadsheet bytes, if any */
  error: Error | undefined;
  /** All sheets in the workbook */
  sheets: readonly SheetData[];
  /** Index of the active sheet, clamped to the range of available sheets */
  activeSheetIndex: number;
  /** The active sheet, or undefined when the workbook has no sheets */
  activeSheet: SheetData | undefined;
  /** Select the sheet at the given index */
  selectSheet: (index: number) => void;
}

/**
 * Headless state for a spreadsheet viewer: parses raw .xlsx bytes into sheets
 * (synchronously) and tracks the active-sheet selection, clamping the active
 * index to the range of available sheets so it stays valid when the workbook
 * changes.
 */
export function useExcelViewerState({
  content,
}: UseExcelViewerStateOptions): UseExcelViewerStateResult {
  const { spreadsheet, error } = useMemo((): {
    spreadsheet: ParsedSpreadsheet;
    error: Error | undefined;
  } => {
    try {
      return { spreadsheet: parseSpreadsheet(content), error: undefined };
    } catch (err: unknown) {
      return {
        spreadsheet: EMPTY_SPREADSHEET,
        error: err instanceof Error ? err : new Error(String(err)),
      };
    }
  }, [content]);

  const [activeSheetIndex, setActiveSheetIndex] = useState(0);

  const safeIndex = Math.min(
    activeSheetIndex,
    Math.max(0, spreadsheet.sheets.length - 1)
  );

  const activeSheet = useMemo(
    () => spreadsheet.sheets[safeIndex],
    [spreadsheet.sheets, safeIndex]
  );

  const selectSheet = useCallback((index: number) => {
    setActiveSheetIndex(index);
  }, []);

  return useMemo(
    (): UseExcelViewerStateResult => ({
      error,
      sheets: spreadsheet.sheets,
      activeSheetIndex: safeIndex,
      activeSheet,
      selectSheet,
    }),
    [error, spreadsheet.sheets, safeIndex, activeSheet, selectSheet]
  );
}
