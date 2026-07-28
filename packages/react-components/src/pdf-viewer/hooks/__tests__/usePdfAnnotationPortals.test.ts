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

import { act, renderHook } from "@testing-library/react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import type { EventBus, PDFViewer } from "pdfjs-dist/web/pdf_viewer.mjs";
import type { RefObject } from "react";
import { describe, expect, it, vi } from "vitest";

import { usePdfAnnotationPortals } from "../usePdfAnnotationPortals.js";

type Listener = (...args: unknown[]) => void;

function createMockEventBus() {
  const listeners = new Map<string, Set<Listener>>();

  return {
    on(event: string, listener: Listener) {
      if (!listeners.has(event)) {
        listeners.set(event, new Set());
      }
      listeners.get(event)!.add(listener);
    },
    off(event: string, listener: Listener) {
      listeners.get(event)?.delete(listener);
    },
    _emit(event: string, data: unknown) {
      listeners.get(event)?.forEach((l) => l(data));
    },
  } as unknown as EventBus & {
    _emit: (event: string, data: unknown) => void;
  };
}

// Stable mock document reference — must be reused across renders
// to avoid infinite useEffect re-runs.
const MOCK_DOCUMENT = {} as PDFDocumentProxy;

function flushRaf(): Promise<void> {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

function mockRect(el: Element, rect: Partial<DOMRect>): void {
  vi.spyOn(el, "getBoundingClientRect").mockReturnValue({
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    toJSON: () => ({}),
    ...rect,
  } as DOMRect);
}

function createMockContainer(): HTMLDivElement {
  const container = document.createElement("div");
  mockRect(container, { width: 800, height: 1000 });
  return container;
}

function createPageDiv(rect: Partial<DOMRect>): HTMLDivElement {
  const div = document.createElement("div");
  mockRect(div, { width: 612, height: 792, ...rect });
  return div;
}

// pdfjs uses an affine transform of the form [scale, 0, 0, -scale, 0, pageHeight*scale]
// for a non-rotated page. The annotation layer multiplies points by this matrix.
function pageTransform(scale: number, pageHeightPdf: number): number[] {
  return [scale, 0, 0, -scale, 0, pageHeightPdf * scale];
}

describe("usePdfAnnotationPortals", () => {
  it("should start with empty portal targets", () => {
    const pdfViewerRef = { current: null } as RefObject<PDFViewer | null>;
    const eventBusRef = { current: null } as RefObject<EventBus | null>;

    const { result } = renderHook(() =>
      usePdfAnnotationPortals(pdfViewerRef, eventBusRef, MOCK_DOCUMENT)
    );

    expect(result.current).toEqual([]);
  });

  it("should add portal target when pagerendered fires", () => {
    const eventBus = createMockEventBus();
    const container = createMockContainer();
    const div = createPageDiv({ left: 10, top: 20, width: 612, height: 792 });
    const pdfViewer = {
      container,
      getPageView: vi.fn(() => ({
        div,
        viewport: {
          viewBox: [0, 0, 612, 792],
          scale: 1.5,
          transform: pageTransform(1.5, 792),
        },
      })),
    } as unknown as PDFViewer;

    const pdfViewerRef = { current: pdfViewer } as RefObject<PDFViewer>;
    const eventBusRef = { current: eventBus } as RefObject<EventBus>;

    const { result } = renderHook(() =>
      usePdfAnnotationPortals(pdfViewerRef, eventBusRef, MOCK_DOCUMENT)
    );

    act(() => {
      eventBus._emit("pagerendered", { pageNumber: 1 });
    });

    expect(result.current).toHaveLength(1);
    expect(result.current[0]).toMatchObject({
      pageNumber: 1,
      left: 10,
      top: 20,
      width: 612,
      height: 792,
      pageHeight: 792,
      scale: 1.5,
    });
    expect(result.current[0].transform).toEqual(pageTransform(1.5, 792));
  });

  it("should sort portal targets by page number", () => {
    const eventBus = createMockEventBus();
    const container = createMockContainer();
    const div1 = createPageDiv({});
    const div3 = createPageDiv({});
    const pdfViewer = {
      container,
      getPageView: vi.fn((pageIndex: number) => {
        if (pageIndex === 0) {
          return {
            div: div1,
            viewport: {
              viewBox: [0, 0, 612, 792],
              scale: 1.0,
              transform: pageTransform(1.0, 792),
            },
          };
        }
        if (pageIndex === 2) {
          return {
            div: div3,
            viewport: {
              viewBox: [0, 0, 612, 792],
              scale: 1.0,
              transform: pageTransform(1.0, 792),
            },
          };
        }
        return undefined;
      }),
    } as unknown as PDFViewer;

    const pdfViewerRef = { current: pdfViewer } as RefObject<PDFViewer>;
    const eventBusRef = { current: eventBus } as RefObject<EventBus>;

    const { result } = renderHook(() =>
      usePdfAnnotationPortals(pdfViewerRef, eventBusRef, MOCK_DOCUMENT)
    );

    // Fire page 3 first, then page 1
    act(() => {
      eventBus._emit("pagerendered", { pageNumber: 3 });
    });
    act(() => {
      eventBus._emit("pagerendered", { pageNumber: 1 });
    });

    expect(result.current).toHaveLength(2);
    expect(result.current[0].pageNumber).toBe(1);
    expect(result.current[1].pageNumber).toBe(3);
  });

  it("should replace existing entry for same page number", () => {
    const eventBus = createMockEventBus();
    const container = createMockContainer();
    const div1 = createPageDiv({});
    const div1Updated = createPageDiv({});
    let currentPageView: {
      div: HTMLDivElement;
      viewport: { viewBox: number[]; scale: number; transform: number[] };
    } = {
      div: div1,
      viewport: {
        viewBox: [0, 0, 612, 792],
        scale: 1.0,
        transform: pageTransform(1.0, 792),
      },
    };

    const pdfViewer = {
      container,
      getPageView: vi.fn(() => currentPageView),
    } as unknown as PDFViewer;

    const pdfViewerRef = { current: pdfViewer } as RefObject<PDFViewer>;
    const eventBusRef = { current: eventBus } as RefObject<EventBus>;

    const { result } = renderHook(() =>
      usePdfAnnotationPortals(pdfViewerRef, eventBusRef, MOCK_DOCUMENT)
    );

    act(() => {
      eventBus._emit("pagerendered", { pageNumber: 1 });
    });

    expect(result.current).toHaveLength(1);
    expect(result.current[0].scale).toBe(1.0);

    currentPageView = {
      div: div1Updated,
      viewport: {
        viewBox: [0, 0, 612, 792],
        scale: 2.0,
        transform: pageTransform(2.0, 792),
      },
    };

    act(() => {
      eventBus._emit("pagerendered", { pageNumber: 1 });
    });

    expect(result.current).toHaveLength(1);
    expect(result.current[0].scale).toBe(2.0);
    expect(result.current[0].transform).toEqual(pageTransform(2.0, 792));
  });

  it("should skip if page view has no div", () => {
    const eventBus = createMockEventBus();
    const pdfViewer = {
      container: createMockContainer(),
      getPageView: vi.fn(() => ({
        div: null,
        viewport: {
          viewBox: [0, 0, 612, 792],
          scale: 1.0,
          transform: pageTransform(1.0, 792),
        },
      })),
    } as unknown as PDFViewer;

    const pdfViewerRef = { current: pdfViewer } as RefObject<PDFViewer>;
    const eventBusRef = { current: eventBus } as RefObject<EventBus>;

    const { result } = renderHook(() =>
      usePdfAnnotationPortals(pdfViewerRef, eventBusRef, MOCK_DOCUMENT)
    );

    act(() => {
      eventBus._emit("pagerendered", { pageNumber: 1 });
    });

    expect(result.current).toEqual([]);
  });

  it("should skip if page view has no viewport", () => {
    const eventBus = createMockEventBus();
    const pdfViewer = {
      container: createMockContainer(),
      getPageView: vi.fn(() => ({
        div: document.createElement("div"),
        viewport: null,
      })),
    } as unknown as PDFViewer;

    const pdfViewerRef = { current: pdfViewer } as RefObject<PDFViewer>;
    const eventBusRef = { current: eventBus } as RefObject<EventBus>;

    const { result } = renderHook(() =>
      usePdfAnnotationPortals(pdfViewerRef, eventBusRef, MOCK_DOCUMENT)
    );

    act(() => {
      eventBus._emit("pagerendered", { pageNumber: 1 });
    });

    expect(result.current).toEqual([]);
  });

  it("should skip if page div has zero size", () => {
    const eventBus = createMockEventBus();
    const container = createMockContainer();
    const div = createPageDiv({ width: 0, height: 0 });
    const pdfViewer = {
      container,
      getPageView: vi.fn(() => ({
        div,
        viewport: {
          viewBox: [0, 0, 612, 792],
          scale: 1.0,
          transform: pageTransform(1.0, 792),
        },
      })),
    } as unknown as PDFViewer;

    const pdfViewerRef = { current: pdfViewer } as RefObject<PDFViewer>;
    const eventBusRef = { current: eventBus } as RefObject<EventBus>;

    const { result } = renderHook(() =>
      usePdfAnnotationPortals(pdfViewerRef, eventBusRef, MOCK_DOCUMENT)
    );

    act(() => {
      eventBus._emit("pagerendered", { pageNumber: 1 });
    });

    expect(result.current).toEqual([]);
  });

  it.each(["scalechanging", "rotationchanging"])(
    "should re-measure all targets when %s fires",
    async (event) => {
      const eventBus = createMockEventBus();
      const container = createMockContainer();
      const div = createPageDiv({ left: 10, top: 20, width: 612, height: 792 });
      let currentScale = 1.0;
      const pdfViewer = {
        container,
        getPageView: vi.fn(() => ({
          div,
          viewport: {
            viewBox: [0, 0, 612, 792],
            scale: currentScale,
            transform: pageTransform(currentScale, 792),
          },
        })),
      } as unknown as PDFViewer;

      const pdfViewerRef = { current: pdfViewer } as RefObject<PDFViewer>;
      const eventBusRef = { current: eventBus } as RefObject<EventBus>;

      const { result } = renderHook(() =>
        usePdfAnnotationPortals(pdfViewerRef, eventBusRef, MOCK_DOCUMENT)
      );

      act(() => {
        eventBus._emit("pagerendered", { pageNumber: 1 });
      });
      expect(result.current[0].scale).toBe(1.0);

      currentScale = 2.0;
      mockRect(div, { left: 10, top: 20, width: 1224, height: 1584 });

      await act(async () => {
        eventBus._emit(event, {});
        await flushRaf();
      });

      expect(result.current).toHaveLength(1);
      expect(result.current[0].scale).toBe(2.0);
      expect(result.current[0].width).toBe(1224);
    }
  );

  it("should coalesce repeated scalechanging events into one remeasure", async () => {
    const eventBus = createMockEventBus();
    const container = createMockContainer();
    const div = createPageDiv({ left: 10, top: 20, width: 612, height: 792 });
    const getPageView = vi.fn(() => ({
      div,
      viewport: {
        viewBox: [0, 0, 612, 792],
        scale: 1.0,
        transform: pageTransform(1.0, 792),
      },
    }));
    const pdfViewer = {
      container,
      getPageView,
    } as unknown as PDFViewer;

    const pdfViewerRef = { current: pdfViewer } as RefObject<PDFViewer>;
    const eventBusRef = { current: eventBus } as RefObject<EventBus>;

    renderHook(() =>
      usePdfAnnotationPortals(pdfViewerRef, eventBusRef, MOCK_DOCUMENT)
    );

    act(() => {
      eventBus._emit("pagerendered", { pageNumber: 1 });
    });
    const callsAfterRender = getPageView.mock.calls.length;

    await act(async () => {
      for (let i = 0; i < 10; i++) {
        eventBus._emit("scalechanging", {});
      }
      await flushRaf();
    });

    expect(getPageView.mock.calls.length - callsAfterRender).toBe(1);
  });

  it("should cancel pending remeasure RAF on unmount", () => {
    const rafSpy = vi
      .spyOn(globalThis, "requestAnimationFrame")
      .mockImplementation(() => 42 as unknown as number);
    const cancelSpy = vi
      .spyOn(globalThis, "cancelAnimationFrame")
      .mockImplementation(() => {});

    try {
      const eventBus = createMockEventBus();
      const container = createMockContainer();
      const div = createPageDiv({
        left: 10,
        top: 20,
        width: 612,
        height: 792,
      });
      const pdfViewer = {
        container,
        getPageView: vi.fn(() => ({
          div,
          viewport: {
            viewBox: [0, 0, 612, 792],
            scale: 1.0,
            transform: pageTransform(1.0, 792),
          },
        })),
      } as unknown as PDFViewer;

      const pdfViewerRef = { current: pdfViewer } as RefObject<PDFViewer>;
      const eventBusRef = { current: eventBus } as RefObject<EventBus>;

      const { unmount } = renderHook(() =>
        usePdfAnnotationPortals(pdfViewerRef, eventBusRef, MOCK_DOCUMENT)
      );

      act(() => {
        eventBus._emit("pagerendered", { pageNumber: 1 });
      });

      act(() => {
        eventBus._emit("scalechanging", {});
      });
      expect(rafSpy).toHaveBeenCalledTimes(1);

      unmount();

      expect(cancelSpy).toHaveBeenCalledWith(42);
    } finally {
      rafSpy.mockRestore();
      cancelSpy.mockRestore();
    }
  });

  it("should handle null refs gracefully", () => {
    const pdfViewerRef = { current: null } as RefObject<PDFViewer | null>;
    const eventBusRef = { current: null } as RefObject<EventBus | null>;

    const { result } = renderHook(() =>
      usePdfAnnotationPortals(pdfViewerRef, eventBusRef, MOCK_DOCUMENT)
    );

    expect(result.current).toEqual([]);
  });
});
