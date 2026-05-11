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

/**
 * Position metadata for an annotation overlay placed over a single PDF page.
 *
 * Note: the type name retains the "Portal" word for backward-compatibility
 * with the previous public API shape. The underlying implementation no
 * longer uses {@link React.createPortal} — see the hook below for why.
 *
 * Breaking change: prior versions exposed a `container: HTMLDivElement`
 * pointing at pdfjs's internal `pageView.div`. That field has been removed
 * because portaling React-managed children into pdfjs-owned DOM caused
 * `NotFoundError: removeChild` crashes on zoom and document switch (pdfjs
 * tears down its subtree while React still believes it owns those nodes).
 * Consumers should position their own overlay using `left/top/width/height`
 * (all in scrollContainer content coordinates, scroll-aware).
 */
export interface AnnotationPortalTarget {
  pageNumber: number;
  /** Position of the page in the scroll container's content area, in CSS
   * pixels, scroll-aware (i.e. usable directly as `top`/`left` on an
   * absolutely-positioned descendant of the scroll container). */
  left: number;
  top: number;
  /** Rendered size of the page at the current zoom level, in CSS pixels. */
  width: number;
  height: number;
  /** Intrinsic page height in PDF user-space units (pre-scale). Used by the
   * annotation layer to flip y-coordinates from PDF's bottom-left origin to
   * CSS's top-left origin. */
  pageHeight: number;
  /** Current pdfjs zoom scale for this page. */
  scale: number;
}

/**
 * Tracks position metadata for an annotation overlay placed over each PDF
 * page that has been laid out by pdfjs.
 *
 * Design note — why this is no longer a React portal:
 * The original implementation portaled a React-managed annotation layer
 * into pdfjs's internal `pageView.div`. That worked until the user zoomed
 * (pdfjs clears and rebuilds the page's DOM subtree) or switched documents
 * (pdfjs destroys page subtrees during the same commit phase in which
 * React was unmounting the portal). Both paths produced
 * `NotFoundError: removeChild — the node to be removed is not a child of
 * this node` because pdfjs had already removed the annotation DOM that
 * React still believed it owned.
 *
 * The current implementation reads each page's geometry on pdfjs lifecycle
 * events and exposes it as state. Consumers render their overlay layer as
 * a sibling of pdfjs's content (inside the scroll container, but in DOM we
 * own) using these coordinates. pdfjs never touches React's overlay DOM,
 * so unmount/remount is safe and crash-free.
 *
 * Events handled:
 *  - `pagerendered`: per-page; fires when pdfjs finishes painting a page.
 *    This is the canonical update signal — covers initial load, page
 *    swap-in after scroll, and the per-page repaint that follows a zoom.
 *  - `scalechanging` / `rotationchanging`: viewer-wide; fires when the
 *    user changes zoom or rotation. We re-measure every known page on
 *    these events so the overlay doesn't sit at stale coordinates during
 *    the in-flight transition (pages have already resized but `pagerendered`
 *    fires only after the canvas finishes painting).
 *  - `pagecleanup`: per-page; fires when pdfjs evicts a page from its
 *    buffer (long documents only). We drop the corresponding entry so we
 *    don't render an overlay over a now-empty slot.
 *  - `ResizeObserver` on the scroll container: catches container size
 *    changes that don't go through pdfjs's event bus — e.g. sidebar/panel
 *    toggling in fixed-scale modes where pdfjs does not reflow.
 *
 * Cleanup ordering:
 * On document change the effect cleanup detaches all listeners, disconnects
 * the ResizeObserver, and clears state. This happens before the new
 * document's `pagerendered` events fire, so we don't leak stale targets
 * referring to the old document's pages.
 */
export function usePdfAnnotationPortals(
  pdfViewerRef: RefObject<PDFViewer | null>,
  eventBusRef: RefObject<EventBus | null>,
  document: PDFDocumentProxy | undefined,
): AnnotationPortalTarget[] {
  const [portalTargets, setPortalTargets] = useState<AnnotationPortalTarget[]>(
    [],
  );

  useEffect(function subscribePageEvents() {
    const eventBus = eventBusRef.current;
    const pdfViewer = pdfViewerRef.current;
    if (eventBus == null || pdfViewer == null) {
      return;
    }

    /**
     * Measure one page against a pre-captured container rect. Returns null
     * if the page or its viewport is no longer available (e.g. cleaned up
     * by pdfjs) or hasn't been laid out yet (zero-sized) — callers should
     * drop the corresponding target instead of caching unusable values.
     */
    const measurePage = (
      pageNumber: number,
      containerRect: DOMRect,
      scrollContainer: HTMLElement,
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
      // getBoundingClientRect is viewport-relative; subtract the container's
      // own viewport position and add its scroll offset to land in the
      // scroll container's content coordinates. This is independent of
      // whatever offsetParent / padding / transform pdfjs uses for pages.
      return {
        pageNumber,
        left: divRect.left - containerRect.left + scrollContainer.scrollLeft,
        top: divRect.top - containerRect.top + scrollContainer.scrollTop,
        width: divRect.width,
        height: divRect.height,
        // viewBox is [xMin, yMin, width, height]; we need the height
        // pre-scale so the annotation layer can flip y-coordinates.
        pageHeight: pageView.viewport.viewBox[3],
        scale: pageView.viewport.scale,
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
        return [...filtered, next].sort((a, b) => a.pageNumber - b.pageNumber);
      });
    };

    const handlePageCleanup = (evt: { pageNumber: number }) => {
      setPortalTargets((prev) =>
        prev.filter((t) => t.pageNumber !== evt.pageNumber)
      );
    };

    const remeasureAll = () => {
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
            container.el,
          );
          if (remeasured != null) {
            next.push(remeasured);
          }
        }
        return next;
      });
    };

    eventBus.on(PAGE_RENDERED_EVENT, handlePageRendered);
    eventBus.on("scalechanging", remeasureAll);
    eventBus.on("rotationchanging", remeasureAll);
    eventBus.on("pagecleanup", handlePageCleanup);

    // Container size can change without pdfjs firing scalechanging — e.g.
    // a sidebar toggling open in a fixed-scale mode. Re-measure on those
    // resizes so overlays stay aligned.
    const scrollContainer = pdfViewer.container as HTMLElement | null;
    let resizeObserver: ResizeObserver | undefined;
    if (scrollContainer != null && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(remeasureAll);
      resizeObserver.observe(scrollContainer);
    }

    return () => {
      eventBus.off(PAGE_RENDERED_EVENT, handlePageRendered);
      eventBus.off("scalechanging", remeasureAll);
      eventBus.off("rotationchanging", remeasureAll);
      eventBus.off("pagecleanup", handlePageCleanup);
      resizeObserver?.disconnect();
      setPortalTargets([]);
    };
  }, [eventBusRef, pdfViewerRef, document]);

  return portalTargets;
}
