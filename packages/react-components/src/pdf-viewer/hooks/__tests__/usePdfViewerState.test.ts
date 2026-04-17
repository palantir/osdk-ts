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
import type {
  EventBus,
  PDFFindController,
  PDFViewer,
} from "pdfjs-dist/web/pdf_viewer.mjs";
import type { RefObject } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MAX_SCALE, MIN_SCALE, SCALE_STEP } from "../../constants.js";
import { usePdfViewerState } from "../usePdfViewerState.js";

// Mock all sub-hooks
vi.mock("../usePdfViewerCore.js", () => ({
  usePdfViewerCore: vi.fn(),
}));

vi.mock("../usePdfViewerSearch.js", () => ({
  usePdfViewerSearch: vi.fn(),
}));

vi.mock("../usePdfOutline.js", () => ({
  usePdfOutline: vi.fn(),
}));

const { usePdfViewerCore } = await import("../usePdfViewerCore.js");
const { usePdfViewerSearch } = await import("../usePdfViewerSearch.js");
const { usePdfOutline } = await import("../usePdfOutline.js");

const mockedUsePdfViewerCore = vi.mocked(usePdfViewerCore);
const mockedUsePdfViewerSearch = vi.mocked(usePdfViewerSearch);
const mockedUsePdfOutline = vi.mocked(usePdfOutline);

afterEach(() => {
  vi.clearAllMocks();
});

function createMockCoreResult(overrides: { scale?: number } = {}) {
  const scale = overrides.scale ?? 1.0;
  return {
    document: {} as PDFDocumentProxy,
    numPages: 10,
    loading: false,
    error: undefined,
    containerRef: { current: null } as RefObject<HTMLDivElement>,
    viewerRef: { current: null } as RefObject<HTMLDivElement>,
    currentPage: 1,
    scrollToPage: vi.fn(),
    scale,
    setScale: vi.fn(),
    portalTargets: [],
    pdfViewerRef: {
      current: { pagesRotation: 0 },
    } as unknown as RefObject<PDFViewer>,
    eventBusRef: { current: null } as RefObject<EventBus | null>,
    findControllerRef: {
      current: null,
    } as RefObject<PDFFindController | null>,
  };
}

function createMockSearchResult() {
  return {
    query: "",
    setQuery: vi.fn(),
    isSearchOpen: false,
    openSearch: vi.fn(),
    closeSearch: vi.fn(),
    nextMatch: vi.fn(),
    prevMatch: vi.fn(),
    totalMatches: 0,
    currentMatchIndex: 0,
  };
}

describe("usePdfViewerState", () => {
  function setup(
    options: {
      initialScale?: number;
      initialSidebarOpen?: boolean;
      sidebarMode?: "thumbnails" | "outline";
      coreScale?: number;
    } = {},
  ) {
    const coreResult = createMockCoreResult({
      scale: options.coreScale ?? options.initialScale,
    });
    const searchResult = createMockSearchResult();
    const outlineItems = [
      { title: "Ch1", depth: 0, pageNumber: 1, bold: false, italic: false },
    ];

    mockedUsePdfViewerCore.mockReturnValue(coreResult);
    mockedUsePdfViewerSearch.mockReturnValue(searchResult);
    mockedUsePdfOutline.mockReturnValue(outlineItems);

    const { result, rerender } = renderHook(
      (props: {
        initialScale?: number;
        initialSidebarOpen?: boolean;
        sidebarMode?: "thumbnails" | "outline";
      }) =>
        usePdfViewerState({
          src: "test.pdf",
          ...props,
        }),
      {
        initialProps: {
          initialScale: options.initialScale,
          initialSidebarOpen: options.initialSidebarOpen,
          sidebarMode: options.sidebarMode,
        },
      },
    );

    return { result, rerender, coreResult, searchResult, outlineItems };
  }

  it("should expose core properties", () => {
    const { result } = setup();

    expect(result.current.numPages).toBe(10);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  // --- Zoom ---

  it("should zoom in by SCALE_STEP", () => {
    const { result, coreResult } = setup({ coreScale: 1.0 });

    act(() => {
      result.current.zoomIn();
    });

    expect(coreResult.setScale).toHaveBeenCalledWith(1.0 + SCALE_STEP);
  });

  it("should not zoom in beyond MAX_SCALE", () => {
    const { result, coreResult } = setup({ coreScale: MAX_SCALE });

    act(() => {
      result.current.zoomIn();
    });

    expect(coreResult.setScale).toHaveBeenCalledWith(MAX_SCALE);
  });

  it("should zoom out by SCALE_STEP", () => {
    const { result, coreResult } = setup({ coreScale: 1.5 });

    act(() => {
      result.current.zoomOut();
    });

    expect(coreResult.setScale).toHaveBeenCalledWith(1.5 - SCALE_STEP);
  });

  it("should not zoom out below MIN_SCALE", () => {
    const { result, coreResult } = setup({ coreScale: MIN_SCALE });

    act(() => {
      result.current.zoomOut();
    });

    expect(coreResult.setScale).toHaveBeenCalledWith(MIN_SCALE);
  });

  // --- Rotation ---

  it("should start with rotation 0", () => {
    const { result } = setup();
    expect(result.current.rotation).toBe(0);
  });

  it("should rotate right by 90 degrees", () => {
    const { result } = setup();

    act(() => {
      result.current.rotateRight();
    });
    expect(result.current.rotation).toBe(90);

    act(() => {
      result.current.rotateRight();
    });
    expect(result.current.rotation).toBe(180);
  });

  it("should wrap rotation at 360", () => {
    const { result } = setup();

    act(() => {
      result.current.rotateRight();
      result.current.rotateRight();
      result.current.rotateRight();
      result.current.rotateRight();
    });
    expect(result.current.rotation).toBe(0);
  });

  it("should rotate left by 90 degrees", () => {
    const { result } = setup();

    act(() => {
      result.current.rotateLeft();
    });
    expect(result.current.rotation).toBe(270);
  });

  it("should rotate left from 90 to 0", () => {
    const { result } = setup();

    act(() => {
      result.current.rotateRight(); // 90
    });

    act(() => {
      result.current.rotateLeft(); // back to 0
    });
    expect(result.current.rotation).toBe(0);
  });

  // --- Sidebar ---

  it("should default sidebar to closed", () => {
    const { result } = setup();

    expect(result.current.sidebarOpen).toBe(false);
    expect(result.current.sidebarMode).toBe("thumbnails");
  });

  it("should respect initialSidebarOpen", () => {
    const { result } = setup({ initialSidebarOpen: true });
    expect(result.current.sidebarOpen).toBe(true);
  });

  it("should respect sidebarMode prop", () => {
    const { result } = setup({ sidebarMode: "outline" });
    expect(result.current.sidebarMode).toBe("outline");
  });

  it("should toggle sidebar", () => {
    const { result } = setup();

    act(() => {
      result.current.toggleSidebar();
    });
    expect(result.current.sidebarOpen).toBe(true);

    act(() => {
      result.current.toggleSidebar();
    });
    expect(result.current.sidebarOpen).toBe(false);
  });

  it("should set sidebar mode", () => {
    const { result } = setup();

    act(() => {
      result.current.setSidebarMode("outline");
    });
    expect(result.current.sidebarMode).toBe("outline");
  });

  // --- Search ---

  it("should expose search result", () => {
    const { result } = setup();
    expect(result.current.search.query).toBe("");
    expect(typeof result.current.search.setQuery).toBe("function");
  });

  // --- Outline ---

  it("should expose outline items", () => {
    const { result } = setup();
    expect(result.current.outlineItems).toHaveLength(1);
    expect(result.current.outlineItems[0].title).toBe("Ch1");
  });

  // --- Download ---

  it("should have download function", () => {
    const { result } = setup();
    expect(typeof result.current.download).toBe("function");
  });

  it("should not throw when download is called with no document", () => {
    const coreResult = createMockCoreResult();
    coreResult.document = undefined as unknown as PDFDocumentProxy;
    mockedUsePdfViewerCore.mockReturnValue(coreResult);
    mockedUsePdfViewerSearch.mockReturnValue(createMockSearchResult());
    mockedUsePdfOutline.mockReturnValue([]);

    const { result } = renderHook(() => usePdfViewerState({ src: "test.pdf" }));

    // Should not throw
    act(() => {
      result.current.download();
    });
  });

  it("should call onDownload with success result after download", async () => {
    const onDownload = vi.fn();
    const mockData = new Uint8Array([1, 2, 3]);
    const coreResult = createMockCoreResult();
    coreResult.document = {
      getData: () => Promise.resolve(mockData),
    } as unknown as PDFDocumentProxy;

    mockedUsePdfViewerCore.mockReturnValue(coreResult);
    mockedUsePdfViewerSearch.mockReturnValue(createMockSearchResult());
    mockedUsePdfOutline.mockReturnValue([]);

    const { result } = renderHook(() =>
      usePdfViewerState({ src: "test.pdf", onDownload }),
    );

    await act(async () => {
      result.current.download("report.pdf");
    });

    expect(onDownload).toHaveBeenCalledWith({
      success: true,
      filename: "report.pdf",
    });
  });

  it("should call onDownload with failure result when getData rejects", async () => {
    const onDownload = vi.fn();
    const downloadError = new Error("Corrupted data");
    const coreResult = createMockCoreResult();
    coreResult.document = {
      getData: () => Promise.reject(downloadError),
    } as unknown as PDFDocumentProxy;

    mockedUsePdfViewerCore.mockReturnValue(coreResult);
    mockedUsePdfViewerSearch.mockReturnValue(createMockSearchResult());
    mockedUsePdfOutline.mockReturnValue([]);

    const { result } = renderHook(() =>
      usePdfViewerState({ src: "test.pdf", onDownload }),
    );

    await act(async () => {
      result.current.download();
    });

    expect(onDownload).toHaveBeenCalledWith({
      success: false,
      error: downloadError,
    });
  });

  it("should wrap non-Error rejection in an Error object", async () => {
    const onDownload = vi.fn();
    const coreResult = createMockCoreResult();
    coreResult.document = {
      getData: () => Promise.reject("string error"),
    } as unknown as PDFDocumentProxy;

    mockedUsePdfViewerCore.mockReturnValue(coreResult);
    mockedUsePdfViewerSearch.mockReturnValue(createMockSearchResult());
    mockedUsePdfOutline.mockReturnValue([]);

    const { result } = renderHook(() =>
      usePdfViewerState({ src: "test.pdf", onDownload }),
    );

    await act(async () => {
      result.current.download();
    });

    expect(onDownload).toHaveBeenCalledWith({
      success: false,
      error: expect.objectContaining({
        message: "Failed to download PDF",
      }),
    });
  });

  it("should derive filename from src URL when not provided", async () => {
    const onDownload = vi.fn();
    const mockData = new Uint8Array([1, 2, 3]);
    const coreResult = createMockCoreResult();
    coreResult.document = {
      getData: () => Promise.resolve(mockData),
    } as unknown as PDFDocumentProxy;

    mockedUsePdfViewerCore.mockReturnValue(coreResult);
    mockedUsePdfViewerSearch.mockReturnValue(createMockSearchResult());
    mockedUsePdfOutline.mockReturnValue([]);

    const { result } = renderHook(() =>
      usePdfViewerState({
        src: "https://example.com/files/report.pdf",
        onDownload,
      }),
    );

    await act(async () => {
      result.current.download();
    });

    expect(onDownload).toHaveBeenCalledWith({
      success: true,
      filename: "report.pdf",
    });
  });
});
