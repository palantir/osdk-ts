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

// cspell:words pagechanging scalechanging
import { act, renderHook } from "@testing-library/react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import type { EventBus, PDFViewer } from "pdfjs-dist/web/pdf_viewer.mjs";
import type { RefObject } from "react";
import { describe, expect, it, vi } from "vitest";
import { usePdfViewerSync } from "../usePdfViewerSync.js";

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

function createMockPdfViewer(initialScale = 1.0) {
  let _currentScale = initialScale;
  let _currentPageNumber = 1;

  return {
    get currentScale() {
      return _currentScale;
    },
    set currentScale(val: number) {
      _currentScale = val;
    },
    get currentPageNumber() {
      return _currentPageNumber;
    },
    set currentPageNumber(val: number) {
      _currentPageNumber = val;
    },
  } as unknown as PDFViewer;
}

describe("usePdfViewerSync", () => {
  function setup(initialScale = 1.0) {
    const eventBus = createMockEventBus();
    const pdfViewer = createMockPdfViewer(initialScale);

    const pdfViewerRef = { current: pdfViewer } as RefObject<PDFViewer>;
    const eventBusRef = { current: eventBus } as RefObject<EventBus>;
    const document = {} as PDFDocumentProxy;

    const onScaleChange = vi.fn();
    const onPageChange = vi.fn();

    const { result, rerender } = renderHook(
      ({ scale }: { scale: number }) =>
        usePdfViewerSync({
          pdfViewerRef,
          eventBusRef,
          document,
          scale,
          onScaleChange,
          onPageChange,
        }),
      { initialProps: { scale: initialScale } },
    );

    return {
      result,
      rerender,
      eventBus,
      pdfViewer,
      onScaleChange,
      onPageChange,
    };
  }

  it("should return scrollToPage function", () => {
    const { result } = setup();
    expect(typeof result.current.scrollToPage).toBe("function");
  });

  it("should sync scale changes to PDFViewer", () => {
    const { rerender, pdfViewer } = setup(1.0);

    rerender({ scale: 1.5 });

    expect(pdfViewer.currentScale).toBe(1.5);
  });

  it("should not update PDFViewer when scale difference is negligible", () => {
    const { rerender, pdfViewer } = setup(1.0);

    // Set a spy-able value
    pdfViewer.currentScale = 1.0;
    rerender({ scale: 1.0005 });

    // Scale should stay unchanged since diff < 0.001
    expect(pdfViewer.currentScale).toBe(1.0);
  });

  it("should call onPageChange when pagechanging event fires", () => {
    const { eventBus, onPageChange } = setup();

    act(() => {
      eventBus._emit("pagechanging", { pageNumber: 5 });
    });

    expect(onPageChange).toHaveBeenCalledWith(5);
  });

  it("should call onScaleChange when scalechanging event fires", () => {
    const { eventBus, onScaleChange } = setup();

    act(() => {
      eventBus._emit("scalechanging", { scale: 2.0 });
    });

    expect(onScaleChange).toHaveBeenCalledWith(2.0);
  });

  it("should set currentPageNumber on scrollToPage", () => {
    const { result, pdfViewer } = setup();

    act(() => {
      result.current.scrollToPage(3);
    });

    expect(pdfViewer.currentPageNumber).toBe(3);
  });

  it("should handle null pdfViewerRef gracefully for scrollToPage", () => {
    const eventBus = createMockEventBus();
    const pdfViewerRef = { current: null } as RefObject<PDFViewer | null>;
    const eventBusRef = { current: eventBus } as RefObject<EventBus>;

    const { result } = renderHook(() =>
      usePdfViewerSync({
        pdfViewerRef,
        eventBusRef,
        document: {} as PDFDocumentProxy,
        scale: 1.0,
        onScaleChange: vi.fn(),
        onPageChange: vi.fn(),
      }),
    );

    // Should not throw
    act(() => {
      result.current.scrollToPage(2);
    });
  });

  it("should handle null eventBusRef without subscribing", () => {
    const pdfViewer = createMockPdfViewer();
    const pdfViewerRef = { current: pdfViewer } as RefObject<PDFViewer>;
    const eventBusRef = { current: null } as RefObject<EventBus | null>;
    const onPageChange = vi.fn();

    renderHook(() =>
      usePdfViewerSync({
        pdfViewerRef,
        eventBusRef,
        document: {} as PDFDocumentProxy,
        scale: 1.0,
        onScaleChange: vi.fn(),
        onPageChange,
      }),
    );

    // onPageChange should never be called since there's no eventBus
    expect(onPageChange).not.toHaveBeenCalled();
  });
});
