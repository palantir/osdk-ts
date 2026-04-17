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

// PdfViewer
export { BasePdfViewer } from "../../pdf-viewer/PdfViewer.js";
export type {
  AnnotationType,
  PdfAnnotation,
  PdfAnnotationRenderProps,
  PdfCustomAnnotation,
  PdfDownloadResult,
  PdfFormFieldValue,
  PdfRect,
  PdfTextHighlightEvent,
  PdfViewerProps,
  SidebarMode,
} from "../../pdf-viewer/types.js";

// PdfViewer building blocks
export {
  PdfViewerAnnotationLayer,
  type PdfViewerAnnotationLayerProps,
} from "../../pdf-viewer/components/PdfViewerAnnotationLayer.js";
export {
  PdfViewerContent,
  type PdfViewerContentProps,
} from "../../pdf-viewer/components/PdfViewerContent.js";
export {
  PdfViewerOutlineSidebar,
  type PdfViewerOutlineSidebarProps,
} from "../../pdf-viewer/components/PdfViewerOutlineSidebar.js";
export {
  PdfViewerSearchBar,
  type PdfViewerSearchBarProps,
} from "../../pdf-viewer/components/PdfViewerSearchBar.js";
export {
  PdfViewerSidebar,
  type PdfViewerSidebarProps,
} from "../../pdf-viewer/components/PdfViewerSidebar.js";
export {
  PdfViewerToolbar,
  type PdfViewerToolbarProps,
} from "../../pdf-viewer/components/PdfViewerToolbar.js";

// PdfViewer hooks — primitive
export {
  type AnnotationPortalTarget,
  usePdfAnnotationPortals,
} from "../../pdf-viewer/hooks/usePdfAnnotationPortals.js";
export { usePdfAnnotationsByPage } from "../../pdf-viewer/hooks/usePdfAnnotationsByPage.js";
export { usePdfDocument } from "../../pdf-viewer/hooks/usePdfDocument.js";
export {
  usePdfFormFields,
  type UsePdfFormFieldsOptions,
  type UsePdfFormFieldsResult,
} from "../../pdf-viewer/hooks/usePdfFormFields.js";
export {
  usePdfHighlightMode,
  type UsePdfHighlightModeOptions,
  type UsePdfHighlightModeResult,
} from "../../pdf-viewer/hooks/usePdfHighlightMode.js";
export { usePdfOutline } from "../../pdf-viewer/hooks/usePdfOutline.js";
export {
  usePdfViewer,
  type UsePdfViewerResult,
} from "../../pdf-viewer/hooks/usePdfViewer.js";
export {
  usePdfViewerSearch,
  type UsePdfViewerSearchResult,
} from "../../pdf-viewer/hooks/usePdfViewerSearch.js";
export { usePdfViewerSync } from "../../pdf-viewer/hooks/usePdfViewerSync.js";
export { type OutlineItem } from "../../pdf-viewer/types.js";

// PdfViewer context
export {
  type PdfViewerContextValue,
  PdfViewerProvider,
  usePdfViewerContext,
  usePdfViewerInstance,
} from "../../pdf-viewer/PdfViewerContext.js";
export type {
  PdfViewerHandle,
  PdfViewerInstanceOptions,
} from "../../pdf-viewer/types.js";

// PdfViewer hooks — composition
export {
  usePdfViewerCore,
  type UsePdfViewerCoreOptions,
  type UsePdfViewerCoreResult,
} from "../../pdf-viewer/hooks/usePdfViewerCore.js";
export {
  usePdfViewerState,
  type UsePdfViewerStateOptions,
  type UsePdfViewerStateResult,
} from "../../pdf-viewer/hooks/usePdfViewerState.js";

// PdfViewer (Media wrapper)
export {
  PdfViewer,
  type PdfViewerMediaProps,
} from "../../pdf-viewer/PdfRenderer.js";
