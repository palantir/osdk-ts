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

import { Error as ErrorIcon, Spin } from "@blueprintjs/icons";
import classnames from "classnames";
import React, { useCallback } from "react";
import { useMediaContents } from "../shared/hooks/useMediaContents.js";
import { BaseExcelViewer } from "./BaseExcelViewer.js";
import styles from "./BaseExcelViewer.module.css";
import type {
  ExcelViewerMediaProps,
  ParsedSpreadsheet,
} from "./ExcelViewerApi.js";
import { parseSpreadsheetFromResponse } from "./parseSpreadsheet.js";

export function ExcelViewer({
  media,
  className,
  ...excelViewerProps
}: ExcelViewerMediaProps): React.ReactElement {
  const { data: spreadsheet, loading, error } = useMediaContents<
    ParsedSpreadsheet
  >(
    media,
    useCallback(parseSpreadsheetFromResponse, []),
  );

  const rootClassName = classnames(styles.container, className);

  return (
    <div className={rootClassName}>
      {loading && (
        <div className={styles.loadingContainer}>
          <Spin className={styles.spinnerIcon} />
          Loading…
        </div>
      )}
      {error != null && (
        <div className={styles.errorContainer}>
          <ErrorIcon className={styles.errorIcon} />
          Failed to load spreadsheet: {error.message}
        </div>
      )}
      {spreadsheet != null && (
        <BaseExcelViewer spreadsheet={spreadsheet} {...excelViewerProps} />
      )}
    </div>
  );
}
