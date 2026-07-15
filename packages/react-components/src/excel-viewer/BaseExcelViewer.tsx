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

import { Error as ErrorIcon } from "@blueprintjs/icons";
import classnames from "classnames";
import React, { useMemo } from "react";

import type { BaseExcelViewerProps, SheetData } from "./ExcelViewerApi.js";
import { useExcelViewerState } from "./hooks/useExcelViewerState.js";

import styles from "./BaseExcelViewer.module.css";

/**
 * Converts a 0-based column index to a spreadsheet column letter (0=A, 1=B, ..., 25=Z, 26=AA).
 */
function columnIndexToLetter(index: number): string {
  let letter = "";
  let num = index;
  do {
    const remainder = num % 26;
    letter = String.fromCharCode(65 + remainder) + letter;
    num = Math.floor(num / 26) - 1;
  } while (num >= 0);
  return letter;
}

const SheetTable: React.FunctionComponent<{ sheet: SheetData }> = React.memo(
  ({ sheet }) => {
    const maxCols = useMemo(
      () => sheet.rows.reduce((max, row) => Math.max(max, row.length), 0),
      [sheet.rows]
    );

    if (sheet.rows.length === 0) {
      return <div className={styles.emptySheet}>Empty sheet</div>;
    }

    return (
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.cornerCell} />
              {Array.from({ length: maxCols }, (_, i) => (
                <th key={i} className={styles.columnHeader}>
                  {columnIndexToLetter(i)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sheet.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={styles.rowHeader}>{rowIndex + 1}</td>
                {Array.from({ length: maxCols }, (_, cellIndex) => (
                  <td key={cellIndex} className={styles.cell}>
                    {row[cellIndex] ?? ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
);
SheetTable.displayName = "SheetTable";

export function BaseExcelViewer({
  content,
  className,
}: BaseExcelViewerProps): React.ReactElement {
  const { error, sheets, activeSheetIndex, activeSheet, selectSheet } =
    useExcelViewerState({ content });
  const rootClassName = classnames(styles.container, className);

  if (error != null) {
    return (
      <div className={rootClassName}>
        <div className={styles.errorContainer}>
          <ErrorIcon className={styles.errorIcon} />
          Failed to parse spreadsheet: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className={rootClassName}>
      {activeSheet != null ? (
        <SheetTable sheet={activeSheet} />
      ) : (
        <div className={styles.emptySheet}>No sheets</div>
      )}
      {sheets.length > 1 && (
        <div className={styles.tabBar}>
          {sheets.map((sheet, index) => (
            <button
              key={sheet.name}
              className={classnames(styles.tab, {
                [styles.tabActive]: index === activeSheetIndex,
              })}
              onClick={() => selectSheet(index)}
              type="button"
            >
              {sheet.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
