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

import { AnnotationEditorType } from "pdfjs-dist";
import type { PDFDocumentProxy } from "pdfjs-dist";
import {
  EventBus,
  PDFFindController,
  PDFLinkService,
  PDFViewer,
} from "pdfjs-dist/web/pdf_viewer.mjs";
import type { RefObject } from "react";
import { useEffect, useRef } from "react";
import { PAGES_LOADED_EVENT } from "../constants.js";

export interface UsePdfViewerResult {
  pdfViewerRef: RefObject<PDFViewer | null>;
  eventBusRef: RefObject<EventBus | null>;
  findControllerRef: RefObject<PDFFindController | null>;
}

export function usePdfViewer(
  containerRef: RefObject<HTMLDivElement | null>,
  viewerRef: RefObject<HTMLDivElement | null>,
  document: PDFDocumentProxy | undefined,
  initialScale?: number,
  initialPage?: number,
): UsePdfViewerResult {
  const pdfViewerRef = useRef<PDFViewer | null>(null);
  const eventBusRef = useRef<EventBus | null>(null);
  const findControllerRef = useRef<PDFFindController | null>(null);

  useEffect(
    function initializePdfViewer() {
      const container = containerRef.current;
      const viewer = viewerRef.current;
      if (container == null || viewer == null || document == null) {
        return;
      }

      const eventBus = new EventBus();
      const linkService = new PDFLinkService({ eventBus });
      const findController = new PDFFindController({
        linkService,
        eventBus,
        updateMatchesCountOnProgress: true,
      });

      const pdfViewer = new PDFViewer({
        container,
        viewer,
        eventBus,
        linkService,
        findController,
        removePageBorders: true,
        annotationEditorMode: AnnotationEditorType.NONE,
        annotationEditorHighlightColors:
          "yellow=#FFFF98,green=#53FFBC,blue=#80EBFF,pink=#FFCBE6,red=#FF4F5F",
      });

      linkService.setViewer(pdfViewer);
      linkService.setDocument(document);
      findController.setDocument(document);
      pdfViewer.setDocument(document);

      // Apply initial scale and page after pages are loaded to avoid
      // "scrollPageIntoView: not a valid pageNumber" console errors.
      const onPagesLoaded = () => {
        if (initialScale != null) {
          pdfViewer.currentScale = initialScale;
        }
        if (initialPage != null && initialPage > 1) {
          pdfViewer.currentPageNumber = initialPage;
          pdfViewer.scrollPageIntoView({ pageNumber: initialPage });
        }
        eventBus.off(PAGES_LOADED_EVENT, onPagesLoaded);
      };
      eventBus.on(PAGES_LOADED_EVENT, onPagesLoaded);

      eventBusRef.current = eventBus;
      findControllerRef.current = findController;
      pdfViewerRef.current = pdfViewer;

      return () => {
        pdfViewerRef.current = null;
        eventBusRef.current = null;
        findControllerRef.current = null;
        pdfViewer.cleanup();
      };
    },
    [containerRef, viewerRef, document],
  );

  return { pdfViewerRef, eventBusRef, findControllerRef };
}
