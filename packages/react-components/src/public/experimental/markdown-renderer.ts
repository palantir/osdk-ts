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

// This subpath keeps its `markdown-renderer` name for now even though the
// components it exports are named `MarkdownViewer`. It gets renamed when the
// `experimental/` prefix is dropped, so consumers change import paths once
// rather than twice.

import { BaseMarkdownViewer as _BaseMarkdownViewer } from "../../markdown-viewer/BaseMarkdownViewer.js";
import { MarkdownViewer as _MarkdownViewer } from "../../markdown-viewer/MarkdownViewer.js";
import type { BaseMarkdownViewerProps as _BaseMarkdownViewerProps } from "../../markdown-viewer/MarkdownViewerApi.js";
import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";

// BaseMarkdownViewer
export { BaseMarkdownViewer } from "../../markdown-viewer/BaseMarkdownViewer.js";
export type {
  BaseMarkdownViewerProps,
  MarkdownViewerProps,
} from "../../markdown-viewer/MarkdownViewerApi.js";

// MarkdownViewer (Media wrapper)
export const MarkdownViewer: typeof _MarkdownViewer = withOsdkMetrics(
  _MarkdownViewer,
  "MarkdownViewer",
);

// Deprecated `Renderer` aliases of the same values, cleared in a later pass.
// `MarkdownViewerMediaProps` has none: the `Media` drop is a uniform break
// because pdf's old name was reused for a different type.

/** @deprecated Use `BaseMarkdownViewer` instead. */
export const MarkdownRenderer: typeof _BaseMarkdownViewer = _BaseMarkdownViewer;

/** @deprecated Use `BaseMarkdownViewerProps` instead. */
export type MarkdownRendererProps = _BaseMarkdownViewerProps;

/** @deprecated Use `MarkdownViewer` instead. */
export const MarkdownViewerMedia: typeof MarkdownViewer = MarkdownViewer;
