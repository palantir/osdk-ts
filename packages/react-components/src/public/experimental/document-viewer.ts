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

// DocumentViewer
import { DocumentViewer as _DocumentViewer } from "../../document-viewer/DocumentViewer.js";
import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";
export const DocumentViewer: typeof _DocumentViewer = withOsdkMetrics(
  _DocumentViewer,
  "DocumentViewer",
);
export type { DocumentViewerProps } from "../../document-viewer/DocumentViewerApi.js";
export { ViewerType } from "../../document-viewer/DocumentViewerApi.js";
