/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

// This subpath keeps its `tiff-renderer` name for now even though the
// components it exports are named `TiffViewer`. It gets renamed when the
// `experimental/` prefix is dropped, so consumers change import paths once
// rather than twice.

import { BaseTiffViewer as _BaseTiffViewer } from "../../images/tiff-viewer/BaseTiffViewer.js";
import { TiffViewer as _TiffViewer } from "../../images/tiff-viewer/TiffViewer.js";
import type { BaseTiffViewerProps as _BaseTiffViewerProps } from "../../images/tiff-viewer/TiffViewerApi.js";
import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";

// BaseTiffViewer
export { BaseTiffViewer } from "../../images/tiff-viewer/BaseTiffViewer.js";
export type {
  BaseTiffViewerProps,
  TiffViewerProps,
} from "../../images/tiff-viewer/TiffViewerApi.js";

// TiffViewer (Media wrapper)
export const TiffViewer: typeof _TiffViewer = withOsdkMetrics(
  _TiffViewer,
  "TiffViewer",
);

// Deprecated `Renderer` aliases of the same values, cleared in a later pass.
// `TiffViewerMediaProps` has none: the `Media` drop is a uniform break because
// pdf's old name was reused for a different type.

/** @deprecated Use `BaseTiffViewer` instead. */
export const TiffRenderer: typeof _BaseTiffViewer = _BaseTiffViewer;

/** @deprecated Use `BaseTiffViewerProps` instead. */
export type TiffRendererProps = _BaseTiffViewerProps;

/** @deprecated Use `TiffViewer` instead. */
export const TiffViewerMedia: typeof TiffViewer = TiffViewer;
