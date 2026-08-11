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

// Compatibility shim for the former `experimental/tiff-renderer` subpath.
// Everything here aliases the identical value exported from
// `experimental/tiff-viewer`, so the two subpaths hand out the same component
// instances (including the same `withOsdkMetrics` wrapper) rather than parallel
// copies. Deliberately not re-exported from `src/public/experimental.ts`: that
// barrel already star-exports `tiff-viewer.js`, and adding this file would make
// the shared names ambiguous star exports.

import { BaseTiffViewer, TiffViewer } from "./tiff-viewer.js";
import type { BaseTiffViewerProps, TiffViewerProps } from "./tiff-viewer.js";

/**
 * @deprecated Use `BaseTiffViewer` from
 * `@osdk/react-components/experimental/tiff-viewer` instead.
 */
export const TiffRenderer: typeof BaseTiffViewer = BaseTiffViewer;

/**
 * @deprecated Use `BaseTiffViewerProps` from
 * `@osdk/react-components/experimental/tiff-viewer` instead.
 */
export type TiffRendererProps = BaseTiffViewerProps;

/**
 * @deprecated Use `TiffViewer` from
 * `@osdk/react-components/experimental/tiff-viewer` instead.
 */
export const TiffViewerMedia: typeof TiffViewer = TiffViewer;

/**
 * @deprecated Use `TiffViewerProps` from
 * `@osdk/react-components/experimental/tiff-viewer` instead.
 */
export type TiffViewerMediaProps = TiffViewerProps;
