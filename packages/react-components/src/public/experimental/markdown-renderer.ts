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

// Compatibility shim for the former `experimental/markdown-renderer` subpath.
// Everything here aliases the identical value exported from
// `experimental/markdown-viewer`, so the two subpaths hand out the same
// component instances (including the same `withOsdkMetrics` wrapper) rather
// than parallel copies. Deliberately not re-exported from
// `src/public/experimental.ts`: that barrel already star-exports
// `markdown-viewer.js`, and adding this file would make the shared names
// ambiguous star exports.

import { BaseMarkdownViewer, MarkdownViewer } from "./markdown-viewer.js";
import type {
  BaseMarkdownViewerProps,
  MarkdownViewerProps,
} from "./markdown-viewer.js";

/**
 * @deprecated Use `BaseMarkdownViewer` from
 * `@osdk/react-components/experimental/markdown-viewer` instead.
 */
export const MarkdownRenderer: typeof BaseMarkdownViewer = BaseMarkdownViewer;

/**
 * @deprecated Use `BaseMarkdownViewerProps` from
 * `@osdk/react-components/experimental/markdown-viewer` instead.
 */
export type MarkdownRendererProps = BaseMarkdownViewerProps;

/**
 * @deprecated Use `MarkdownViewer` from
 * `@osdk/react-components/experimental/markdown-viewer` instead.
 */
export const MarkdownViewerMedia: typeof MarkdownViewer = MarkdownViewer;

/**
 * @deprecated Use `MarkdownViewerProps` from
 * `@osdk/react-components/experimental/markdown-viewer` instead.
 */
export type MarkdownViewerMediaProps = MarkdownViewerProps;
