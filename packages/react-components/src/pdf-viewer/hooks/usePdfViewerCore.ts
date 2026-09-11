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
import { useCallback, useMemo, useRef, useState } from "react";

import type { PdfSource } from "../PdfViewerApi.js";
import type { AnnotationPortalTarget } from "./usePdfAnnotationPortals.js";
import { usePdfAnnotationPortals } from "./usePdfAnnotationPortals.js";
import { usePdfDocument } from "./usePdfDocument.js";
import { usePdfViewer } from "./usePdfViewer.js";
import { usePdfViewerSync } from "./usePdfViewerSync.js";

export interface UsePdfViewerCoreOptions {
  /** PDF source — URL string, ArrayBuffer, Uint8Array, or Blob */
  src: PdfSource;
  /** Initial page number (1-indexed, default 1) */
  defaultPage?: number;
  /** @deprecated Rename to `defaultPage`. */
  initialPage?: number;
  /** Initial zoom scale (default 1.0) */
  defaultScale?: number;
  /** @deprecated Rename to `defaultScale`. */
  initialScale?: number;
  /** Whether auto-size (fit to width) is initially enabled (default false) */
  defaultAutoSize?: boolean;
  /** @deprecated Rename to `defaultAutoSize`. */
  initialAutoSize?: boolean;
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

  /** Whether auto-size (fit to width) is active */
  autoSize: boolean;
  /** Enable or disable auto-size */
  setAutoSize: (autoSize: boolean) => void;

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
  defaultPage,
  // TODO: Move these defaults to the default* props when the initial* aliases are removed.
  initialPage = 1,
  defaultScale,
  initialScale = 1.0,
  defaultAutoSize,
  initialAutoSize = false,
}: UsePdfViewerCoreOptions): UsePdfViewerCoreResult {
  const seededPage = defaultPage ?? initialPage;
  const seededScale = defaultScale ?? initialScale;
  const seededAutoSize = defaultAutoSize ?? initialAutoSize;
  const { document, numPages, loading, error } = usePdfDocument(src);
  const [scale, setScale] = useState(seededScale);
  const [currentPage, setCurrentPage] = useState(seededPage);
  const [autoSize, setAutoSize] = useState(seededAutoSize);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  const { pdfViewerRef, eventBusRef, findControllerRef } = usePdfViewer(
    containerRef,
    viewerRef,
    document,
    seededScale,
    seededPage,
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
    containerRef,
    document,
    scale,
    autoSize,
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

  return useMemo(
    (): UsePdfViewerCoreResult => ({
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
      autoSize,
      setAutoSize,
      portalTargets,
      pdfViewerRef,
      eventBusRef,
      findControllerRef,
    }),
    [
      document,
      numPages,
      loading,
      error,
      currentPage,
      scrollToPage,
      scale,
      setScale,
      autoSize,
      setAutoSize,
      portalTargets,
    ],
  );
}
