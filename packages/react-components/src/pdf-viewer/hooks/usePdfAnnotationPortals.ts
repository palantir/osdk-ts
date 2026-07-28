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

import { PAGE_RENDERED_EVENT } from "../constants.js";

export interface AnnotationPortalTarget {
  pageNumber: number;
  left: number;
  top: number;
  width: number;
  height: number;
  pageHeight: number;
  scale: number;
  transform: number[];
}

export function usePdfAnnotationPortals(
  pdfViewerRef: RefObject<PDFViewer | null>,
  eventBusRef: RefObject<EventBus | null>,
  document: PDFDocumentProxy | undefined
): AnnotationPortalTarget[] {
  const [portalTargets, setPortalTargets] = useState<AnnotationPortalTarget[]>(
    []
  );

  useEffect(
    function subscribePageEvents() {
      const eventBus = eventBusRef.current;
      const pdfViewer = pdfViewerRef.current;
      if (eventBus == null || pdfViewer == null) {
        return;
      }

      const measurePage = (
        pageNumber: number,
        containerRect: DOMRect,
        scrollContainer: HTMLElement
      ): AnnotationPortalTarget | null => {
        const pageView = pdfViewer.getPageView(pageNumber - 1);
        if (pageView?.div == null || pageView?.viewport == null) {
          return null;
        }
        const div = pageView.div as HTMLDivElement;
        const divRect = div.getBoundingClientRect();
        if (divRect.width <= 0 || divRect.height <= 0) {
          return null;
        }
        return {
          pageNumber,
          // Assumes scrollContainer has zero border/padding; otherwise overlays will be offset.
          left: divRect.left - containerRect.left + scrollContainer.scrollLeft,
          top: divRect.top - containerRect.top + scrollContainer.scrollTop,
          width: divRect.width,
          height: divRect.height,
          // viewBox is [xMin, yMin, width, height] and we need the original height before scaling
          pageHeight: pageView.viewport.viewBox[3],
          scale: pageView.viewport.scale,
          transform: pageView.viewport.transform.slice(),
        };
      };

      const readContainer = (): {
        rect: DOMRect;
        el: HTMLElement;
      } | null => {
        const scrollContainer = pdfViewer.container as HTMLElement | null;
        if (scrollContainer == null) {
          return null;
        }
        return {
          rect: scrollContainer.getBoundingClientRect(),
          el: scrollContainer,
        };
      };

      const handlePageRendered = (evt: { pageNumber: number }) => {
        const container = readContainer();
        if (container == null) {
          return;
        }
        const next = measurePage(evt.pageNumber, container.rect, container.el);
        setPortalTargets((prev) => {
          const filtered = prev.filter((t) => t.pageNumber !== evt.pageNumber);
          if (next == null) {
            return filtered;
          }
          return [...filtered, next].sort(
            (a, b) => a.pageNumber - b.pageNumber
          );
        });
      };

      let rafHandle: number | null = null;
      const flushRemeasure = () => {
        rafHandle = null;
        setPortalTargets((prev) => {
          if (prev.length === 0) {
            return prev;
          }
          const container = readContainer();
          if (container == null) {
            return prev;
          }
          const next: AnnotationPortalTarget[] = [];
          for (const target of prev) {
            const remeasured = measurePage(
              target.pageNumber,
              container.rect,
              container.el
            );
            if (remeasured != null) {
              next.push(remeasured);
            }
          }
          return next;
        });
      };
      const remeasureAll = () => {
        if (rafHandle != null) {
          return;
        }
        rafHandle = requestAnimationFrame(flushRemeasure);
      };

      eventBus.on(PAGE_RENDERED_EVENT, handlePageRendered);
      eventBus.on("scalechanging", remeasureAll);
      eventBus.on("rotationchanging", remeasureAll);

      const scrollContainer = pdfViewer.container as HTMLElement | null;
      let containerObserver: ResizeObserver | undefined;
      if (scrollContainer != null && typeof ResizeObserver !== "undefined") {
        containerObserver = new ResizeObserver(remeasureAll);
        containerObserver.observe(scrollContainer);
      }

      return () => {
        eventBus.off(PAGE_RENDERED_EVENT, handlePageRendered);
        eventBus.off("scalechanging", remeasureAll);
        eventBus.off("rotationchanging", remeasureAll);
        containerObserver?.disconnect();
        if (rafHandle != null) {
          cancelAnimationFrame(rafHandle);
          rafHandle = null;
        }
        setPortalTargets([]);
      };
    },
    [document]
  );

  return portalTargets;
}
