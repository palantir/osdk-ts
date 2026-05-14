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

// BaseDocxViewer
export { BaseDocxViewer } from "../../docx-viewer/BaseDocxViewer.js";
export type {
  BaseDocxViewerProps,
  DocxViewerMediaProps,
} from "../../docx-viewer/DocxViewerApi.js";

// DocxViewer (Media wrapper)
import { DocxViewer as _DocxViewer } from "../../docx-viewer/DocxViewer.js";
import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";
export const DocxViewer: typeof _DocxViewer = withOsdkMetrics(
  _DocxViewer,
  "DocxViewer",
);
