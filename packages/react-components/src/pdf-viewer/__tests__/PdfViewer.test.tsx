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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { usePdfViewerState } from "../hooks/usePdfViewerState.js";
import { BasePdfViewer } from "../PdfViewer.js";

vi.mock("../hooks/usePdfViewerState.js", () => ({
  usePdfViewerState: vi.fn(),
}));
vi.mock("../hooks/usePdfHighlightMode.js", () => ({
  usePdfHighlightMode: () => ({
    highlightModeActive: false,
    toggleHighlightMode: vi.fn(),
    deleteHighlight: vi.fn(),
  }),
}));
vi.mock("../hooks/usePdfFormFields.js", () => ({
  usePdfFormFields: () => ({ hasFormFields: false, submitFormData: vi.fn() }),
}));
vi.mock("../hooks/usePdfAnnotationsByPage.js", () => ({
  usePdfAnnotationsByPage: () => ({}),
}));

const mockedUsePdfViewerState = vi.mocked(usePdfViewerState);

function createViewer(download: (filename?: string) => void) {
  const ref = { current: null };
  return {
    loading: false,
    error: undefined,
    document: {},
    numPages: 3,
    currentPage: 1,
    scale: 1,
    autoSize: false,
    sidebarOpen: false,
    sidebarMode: "thumbnails",
    outlineItems: [],
    portalTargets: [],
    containerRef: ref,
    viewerRef: ref,
    pdfViewerRef: ref,
    eventBusRef: ref,
    scrollToPage: vi.fn(),
    setSidebarMode: vi.fn(),
    zoomIn: vi.fn(),
    zoomOut: vi.fn(),
    toggleAutoSize: vi.fn(),
    toggleSidebar: vi.fn(),
    rotateLeft: vi.fn(),
    rotateRight: vi.fn(),
    search: {
      query: "",
      isSearchOpen: false,
      openSearch: vi.fn(),
      closeSearch: vi.fn(),
      setQuery: vi.fn(),
      nextMatch: vi.fn(),
      prevMatch: vi.fn(),
      totalMatches: 0,
      currentMatchIndex: 0,
    },
    download,
  } as unknown as ReturnType<typeof usePdfViewerState>;
}

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("BasePdfViewer download wiring", () => {
  it("forwards downloadFileName to viewer.download when the toolbar button is clicked", () => {
    const download = vi.fn();
    mockedUsePdfViewerState.mockReturnValue(createViewer(download));

    render(
      <BasePdfViewer
        src="x.pdf"
        enableDownload={true}
        downloadFileName="custom.pdf"
      />,
    );
    fireEvent.click(screen.getByLabelText("Download"));

    expect(download).toHaveBeenCalledTimes(1);
    expect(download).toHaveBeenCalledWith("custom.pdf");
  });

  it("drops the click event instead of using it as the filename", () => {
    const download = vi.fn();
    mockedUsePdfViewerState.mockReturnValue(createViewer(download));

    render(<BasePdfViewer src="x.pdf" enableDownload={true} />);
    fireEvent.click(screen.getByLabelText("Download"));

    expect(download).toHaveBeenCalledTimes(1);
    expect(download).toHaveBeenCalledWith(undefined);
    const arg = download.mock.calls[0][0];
    expect(arg === undefined || typeof arg === "string").toBe(true);
  });
});
