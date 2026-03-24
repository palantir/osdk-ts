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
import type { RefObject } from "react";
import { useCallback, useRef, useState } from "react";
import type { AnnotationPortalTarget } from "./usePdfAnnotationPortals.js";
import { usePdfAnnotationPortals } from "./usePdfAnnotationPortals.js";
import { usePdfDocument } from "./usePdfDocument.js";
import { usePdfViewer } from "./usePdfViewer.js";
import { usePdfViewerSync } from "./usePdfViewerSync.js";

export interface UsePdfViewerCoreOptions {
  /** PDF source — URL string or ArrayBuffer */
  src: string | ArrayBuffer;
  /** Initial page number (1-indexed, default 1) */
  initialPage?: number;
  /** Initial zoom scale (default 1.0) */
  initialScale?: number;
}

export interface UsePdfViewerCoreResult {
  /** The loaded PDF document, or undefined while loading */
  document: PDFDocumentProxy | undefined;
  /** Total number of pages in the document */
  numPages: number;
  /** Whether the document is currently loading */
  loading: boolean;
  /** Error encountered while loading the document */
  error: Error | undefined;

  /** Ref to attach to the scroll-container div */
  containerRef: RefObject<HTMLDivElement>;
  /** Ref to attach to the inner viewer div (className="pdfViewer") */
  viewerRef: RefObject<HTMLDivElement>;

  /** Current page number (1-indexed) */
  currentPage: number;
  /** Navigate to a specific page (updates state and scrolls the viewer) */
  scrollToPage: (page: number) => void;

  /** Current zoom scale */
  scale: number;
  /** Set the zoom scale directly */
  setScale: (scale: number) => void;

  /** Portal targets for rendering annotation overlays on each page */
  portalTargets: AnnotationPortalTarget[];

  /** Ref to the internal pdfjs PDFViewer instance */
  pdfViewerRef: RefObject<PDFViewer | null>;
  /** Ref to the internal pdfjs EventBus instance */
  eventBusRef: RefObject<EventBus | null>;
  /** Ref to the internal pdfjs PDFFindController instance */
  findControllerRef: RefObject<PDFFindController | null>;
}

export function usePdfViewerCore({
  src,
  initialPage = 1,
  initialScale = 1.0,
}: UsePdfViewerCoreOptions): UsePdfViewerCoreResult {
  const { document, numPages, loading, error } = usePdfDocument(src);
  const [scale, setScale] = useState(initialScale);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  const { pdfViewerRef, eventBusRef, findControllerRef } = usePdfViewer(
    containerRef,
    viewerRef,
    document,
    initialScale,
    initialPage,
  );

  const handleScaleChange = useCallback((newScale: number) => {
    setScale(newScale);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const { scrollToPage: syncScrollToPage } = usePdfViewerSync({
    pdfViewerRef,
    eventBusRef,
    document,
    scale,
    onScaleChange: handleScaleChange,
    onPageChange: handlePageChange,
  });

  const scrollToPage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      syncScrollToPage(page);
    },
    [syncScrollToPage],
  );

  const portalTargets = usePdfAnnotationPortals(
    pdfViewerRef,
    eventBusRef,
    document,
  );

  return {
    document,
    numPages,
    loading,
    error,
    containerRef,
    viewerRef,
    currentPage,
    scrollToPage,
    scale,
    setScale,
    portalTargets,
    pdfViewerRef,
    eventBusRef,
    findControllerRef,
  };
}
