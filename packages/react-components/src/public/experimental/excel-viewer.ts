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

// BaseExcelViewer
export { BaseExcelViewer } from "../../excel-viewer/BaseExcelViewer.js";
export type {
  BaseExcelViewerProps,
  ExcelViewerMediaProps,
  ParsedSpreadsheet,
  SheetData,
} from "../../excel-viewer/ExcelViewerApi.js";

// ExcelViewer hooks
export {
  useExcelViewerState,
  type UseExcelViewerStateOptions,
  type UseExcelViewerStateResult,
} from "../../excel-viewer/hooks/useExcelViewerState.js";

// ExcelViewer (Media wrapper)
import { ExcelViewer as _ExcelViewer } from "../../excel-viewer/ExcelViewer.js";
import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";
export const ExcelViewer: typeof _ExcelViewer = withOsdkMetrics(
  _ExcelViewer,
  "ExcelViewer"
);
