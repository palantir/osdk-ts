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

// cspell:words pagerendered
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
    const div = document.createElement("div");
    const pdfViewer = {
      getPageView: vi.fn(() => ({
        div,
        viewport: { viewBox: [0, 0, 612, 792], scale: 1.5 },
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
    expect(result.current[0]).toEqual({
      pageNumber: 1,
      container: div,
      pageHeight: 792,
      scale: 1.5,
    });
  });

  it("should sort portal targets by page number", () => {
    const eventBus = createMockEventBus();
    const div1 = document.createElement("div");
    const div3 = document.createElement("div");
    const pdfViewer = {
      getPageView: vi.fn((pageIndex: number) => {
        if (pageIndex === 0) {
          return {
            div: div1,
            viewport: { viewBox: [0, 0, 612, 792], scale: 1.0 },
          };
        }
        if (pageIndex === 2) {
          return {
            div: div3,
            viewport: { viewBox: [0, 0, 612, 792], scale: 1.0 },
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
    const div1 = document.createElement("div");
    const div1Updated = document.createElement("div");
    let currentPageView: {
      div: HTMLDivElement;
      viewport: { viewBox: number[]; scale: number };
    } = {
      div: div1,
      viewport: { viewBox: [0, 0, 612, 792], scale: 1.0 },
    };

    const pdfViewer = {
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

    // Update the page view to have different scale
    currentPageView = {
      div: div1Updated,
      viewport: { viewBox: [0, 0, 612, 792], scale: 2.0 },
    };

    act(() => {
      eventBus._emit("pagerendered", { pageNumber: 1 });
    });

    expect(result.current).toHaveLength(1);
    expect(result.current[0].scale).toBe(2.0);
    expect(result.current[0].container).toBe(div1Updated);
  });

  it("should skip if page view has no div", () => {
    const eventBus = createMockEventBus();
    const pdfViewer = {
      getPageView: vi.fn(() => ({
        div: null,
        viewport: { viewBox: [0, 0, 612, 792], scale: 1.0 },
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

  it("should handle null refs gracefully", () => {
    const pdfViewerRef = { current: null } as RefObject<PDFViewer | null>;
    const eventBusRef = { current: null } as RefObject<EventBus | null>;

    const { result } = renderHook(() =>
      usePdfAnnotationPortals(pdfViewerRef, eventBusRef, MOCK_DOCUMENT)
    );

    expect(result.current).toEqual([]);
  });
});
