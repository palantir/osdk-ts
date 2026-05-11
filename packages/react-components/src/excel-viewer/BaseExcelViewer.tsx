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

import classnames from "classnames";
import React, { useCallback, useMemo, useState } from "react";
import styles from "./BaseExcelViewer.module.css";
import type { BaseExcelViewerProps, SheetData } from "./types.js";

const SheetTable: React.FunctionComponent<{ sheet: SheetData }> = React.memo(
  ({ sheet }) => {
    if (sheet.rows.length === 0) {
      return <div className={styles.emptySheet}>Empty sheet</div>;
    }

    const headerRow = sheet.rows[0];
    const dataRows = sheet.rows.slice(1);

    return (
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          {headerRow != null && (
            <thead>
              <tr>
                {headerRow.map((cell, i) => <th key={i}>{cell}</th>)}
              </tr>
            </thead>
          )}
          <tbody>
            {dataRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
);

export function BaseExcelViewer({
  spreadsheet,
  className,
}: BaseExcelViewerProps): React.ReactElement {
  const [activeSheetIndex, setActiveSheetIndex] = useState(0);
  const rootClassName = classnames(styles.container, className);

  const activeSheet = useMemo(
    () => spreadsheet.sheets[activeSheetIndex],
    [spreadsheet.sheets, activeSheetIndex],
  );

  const handleTabClick = useCallback((index: number) => {
    setActiveSheetIndex(index);
  }, []);

  return (
    <div className={rootClassName}>
      {activeSheet != null
        ? <SheetTable sheet={activeSheet} />
        : <div className={styles.emptySheet}>No sheets</div>}
      {spreadsheet.sheets.length > 1 && (
        <div className={styles.tabBar}>
          {spreadsheet.sheets.map((sheet, index) => (
            <button
              key={sheet.name}
              className={classnames(styles.tab, {
                [styles.tabActive]: index === activeSheetIndex,
              })}
              onClick={() => handleTabClick(index)}
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
