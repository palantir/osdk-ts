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

import type { PDFDocumentProxy } from "pdfjs-dist";
import type {
  EventBus,
  PDFFindController,
  PDFViewer,
} from "pdfjs-dist/web/pdf_viewer.mjs";
import React, { createContext, useContext, useMemo } from "react";
import type { RefObject } from "react";
import { EMPTY_ANNOTATION_ARRAY } from "./constants.js";
import type {
  AnnotationPortalTarget,
} from "./hooks/usePdfAnnotationPortals.js";
import { usePdfAnnotationsByPage } from "./hooks/usePdfAnnotationsByPage.js";
import { usePdfFormFields } from "./hooks/usePdfFormFields.js";
import { usePdfHighlightMode } from "./hooks/usePdfHighlightMode.js";
import type { UsePdfViewerSearchResult } from "./hooks/usePdfViewerSearch.js";
import { usePdfViewerState } from "./hooks/usePdfViewerState.js";
import type {
  OutlineItem,
  PdfAnnotation,
  PdfViewerInstanceOptions,
  SidebarMode,
} from "./types.js";

/** The shape of the value provided by {@link PdfViewerProvider}. */
export interface PdfViewerContextValue {
  // From UsePdfViewerStateResult (core + state)
  document: PDFDocumentProxy | undefined;
  numPages: number;
  loading: boolean;
  error: Error | undefined;
  containerRef: RefObject<HTMLDivElement>;
  viewerRef: RefObject<HTMLDivElement>;
  currentPage: number;
  scrollToPage: (page: number) => void;
  scale: number;
  setScale: (scale: number) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  rotation: number;
  rotateLeft: () => void;
  rotateRight: () => void;
  sidebarOpen: boolean;
  sidebarMode: SidebarMode;
  setSidebarMode: (mode: SidebarMode) => void;
  toggleSidebar: () => void;
  search: UsePdfViewerSearchResult;
  outlineItems: OutlineItem[];
  download: (filename?: string) => void;
  portalTargets: AnnotationPortalTarget[];

  // From UsePdfHighlightModeResult
  highlightEnabled: boolean;
  highlightModeActive: boolean;
  toggleHighlightMode: () => void;

  // From UsePdfFormFieldsResult
  hasFormFields: boolean;
  submitFormData: () => void;

  // Annotations
  annotations: PdfAnnotation[];
  annotationsByPage: Record<number, PdfAnnotation[]>;
  onAnnotationClick: ((annotation: PdfAnnotation) => void) | undefined;

  // Config props passed through
  enableDownload: boolean;
  enableFormSave: boolean;
  outlineIcons: Partial<Record<number, React.ComponentType>> | undefined;

  // Internal refs (for advanced consumers)
  pdfViewerRef: RefObject<PDFViewer | null>;
  eventBusRef: RefObject<EventBus | null>;
  findControllerRef: RefObject<PDFFindController | null>;
}

const PdfViewerContext = createContext<PdfViewerContextValue | null>(null);

export interface PdfViewerProviderProps {
  value: PdfViewerContextValue;
  children: React.ReactNode;
}

/** Provides {@link PdfViewerContextValue} to descendant components. */
export function PdfViewerProvider(
  { value, children }: PdfViewerProviderProps,
): React.ReactElement {
  return (
    <PdfViewerContext.Provider value={value}>
      {children}
    </PdfViewerContext.Provider>
  );
}

/**
 * Returns the nearest {@link PdfViewerContextValue} from a {@link PdfViewerProvider}.
 * Throws if called outside a provider.
 */
export function usePdfViewerContext(): PdfViewerContextValue {
  const ctx = useContext(PdfViewerContext);
  if (ctx == null) {
    throw new Error(
      "usePdfViewerContext must be used within a PdfViewerProvider",
    );
  }
  return ctx;
}

/**
 * Consumer-facing setup hook analogous to react-hook-form's `useForm()`.
 * Accepts viewer options and returns a {@link PdfViewerContextValue} suitable
 * for passing to {@link PdfViewerProvider}.
 */
export function usePdfViewerInstance(
  options: PdfViewerInstanceOptions,
): PdfViewerContextValue {
  const viewer = usePdfViewerState({
    src: options.src,
    initialPage: options.initialPage,
    initialScale: options.initialScale,
    initialSidebarOpen: options.initialSidebarOpen,
    sidebarMode: options.sidebarMode,
    onDownload: options.onDownload,
  });

  const { highlightModeActive, toggleHighlightMode } = usePdfHighlightMode({
    pdfViewerRef: viewer.pdfViewerRef,
    document: viewer.document,
    enabled: options.highlightEnabled ?? false,
    onTextHighlight: options.onTextHighlight,
    onHighlightDelete: options.onHighlightDelete,
  });

  const { hasFormFields, submitFormData } = usePdfFormFields({
    pdfViewerRef: viewer.pdfViewerRef,
    eventBusRef: viewer.eventBusRef,
    document: viewer.document,
    formData: options.formData,
    onFormSubmit: options.onFormSubmit,
    onFormChange: options.onFormChange,
  });

  const annotations = options.annotations ?? EMPTY_ANNOTATION_ARRAY;
  const annotationsByPage = usePdfAnnotationsByPage(annotations);

  const highlightEnabled = options.highlightEnabled ?? false;
  const enableDownload = options.enableDownload ?? false;
  const enableFormSave = options.onFormSubmit != null && hasFormFields;
  const { onAnnotationClick, outlineIcons } = options;

  return useMemo(
    () => ({
      ...viewer,
      highlightEnabled,
      highlightModeActive,
      toggleHighlightMode,
      hasFormFields,
      submitFormData,
      annotations,
      annotationsByPage,
      onAnnotationClick,
      enableDownload,
      enableFormSave,
      outlineIcons,
    }),
    [
      viewer,
      highlightEnabled,
      highlightModeActive,
      toggleHighlightMode,
      hasFormFields,
      submitFormData,
      annotations,
      annotationsByPage,
      onAnnotationClick,
      enableDownload,
      enableFormSave,
      outlineIcons,
    ],
  );
}
