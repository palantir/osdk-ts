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
import { useEffect, useState } from "react";

// cspell:disable-next-line -- pdfjs EventBus event name
const PAGE_RENDERED_EVENT = "pagerendered";

export interface AnnotationPortalTarget {
  pageNumber: number;
  container: HTMLDivElement;
  pageHeight: number;
  scale: number;
}

export function usePdfAnnotationPortals(
  pdfViewerRef: RefObject<PDFViewer | null>,
  eventBusRef: RefObject<EventBus | null>,
  document: PDFDocumentProxy | undefined,
): AnnotationPortalTarget[] {
  const [portalTargets, setPortalTargets] = useState<AnnotationPortalTarget[]>(
    [],
  );

  useEffect(() => {
    const eventBus = eventBusRef.current;
    const pdfViewer = pdfViewerRef.current;
    if (eventBus == null || pdfViewer == null) {
      return;
    }

    const handlePageRendered = (evt: { pageNumber: number }) => {
      const pageIndex = evt.pageNumber - 1;
      const pageView = pdfViewer.getPageView(pageIndex);
      if (pageView?.div == null || pageView?.viewport == null) {
        return;
      }

      const viewport = pageView.viewport;

      setPortalTargets((prev) => {
        // Replace existing entry for this page or add new one
        const filtered = prev.filter((t) => t.pageNumber !== evt.pageNumber);
        return [...filtered, {
          pageNumber: evt.pageNumber,
          container: pageView.div as HTMLDivElement,
          pageHeight: viewport.viewBox[3],
          scale: viewport.scale,
        }].sort((a, b) => a.pageNumber - b.pageNumber);
      });
    };

    eventBus.on(PAGE_RENDERED_EVENT, handlePageRendered);

    return () => {
      eventBus.off(PAGE_RENDERED_EVENT, handlePageRendered);
      setPortalTargets([]);
    };
  }, [eventBusRef, pdfViewerRef, document]);

  return portalTargets;
}
