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
import type { EventBus, PDFViewer } from "pdfjs-dist/web/pdf_viewer.mjs";
import type { RefObject } from "react";
import { useCallback, useEffect, useRef } from "react";
import { PAGE_CHANGING_EVENT, SCALE_CHANGING_EVENT } from "../constants.js";

interface UsePdfViewerSyncOptions {
  pdfViewerRef: RefObject<PDFViewer | null>;
  eventBusRef: RefObject<EventBus | null>;
  document: PDFDocumentProxy | undefined;
  scale: number;
  onScaleChange: (scale: number) => void;
  onPageChange: (page: number) => void;
}

export function usePdfViewerSync({
  pdfViewerRef,
  eventBusRef,
  document,
  scale,
  onScaleChange,
  onPageChange,
}: UsePdfViewerSyncOptions): {
  scrollToPage: (page: number) => void;
} {
  const lastScaleRef = useRef(scale);

  // Sync React scale → PDFViewer
  useEffect(() => {
    const pdfViewer = pdfViewerRef.current;
    if (pdfViewer == null) {
      return;
    }
    if (Math.abs(lastScaleRef.current - scale) > 0.001) {
      lastScaleRef.current = scale;
      pdfViewer.currentScale = scale;
    }
  }, [pdfViewerRef, scale]);

  // Listen to PDFViewer events → React state
  useEffect(() => {
    const eventBus = eventBusRef.current;
    if (eventBus == null) {
      return;
    }

    const handlePageChanging = (evt: { pageNumber: number }) => {
      onPageChange(evt.pageNumber);
    };

    const handleScaleChanging = (evt: { scale: number }) => {
      lastScaleRef.current = evt.scale;
      onScaleChange(evt.scale);
    };

    eventBus.on(PAGE_CHANGING_EVENT, handlePageChanging);
    eventBus.on(SCALE_CHANGING_EVENT, handleScaleChanging);

    return () => {
      eventBus.off(PAGE_CHANGING_EVENT, handlePageChanging);
      eventBus.off(SCALE_CHANGING_EVENT, handleScaleChanging);
    };
  }, [eventBusRef, document, onPageChange, onScaleChange]);

  const scrollToPage = useCallback(
    (page: number) => {
      const pdfViewer = pdfViewerRef.current;
      if (pdfViewer != null) {
        pdfViewer.currentPageNumber = page;
      }
    },
    [pdfViewerRef],
  );

  return { scrollToPage };
}
