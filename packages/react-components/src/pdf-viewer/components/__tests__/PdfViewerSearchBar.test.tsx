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
import { PdfViewerSearchBar } from "../PdfViewerSearchBar.js";

const defaultProps = {
  query: "",
  totalMatches: 0,
  currentMatchIndex: -1,
  onQueryChange: vi.fn(),
  onNext: vi.fn(),
  onPrev: vi.fn(),
  onClose: vi.fn(),
};

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("PdfViewerSearchBar", () => {
  it("should render search input", () => {
    render(<PdfViewerSearchBar {...defaultProps} />);

    expect(screen.getByLabelText("Search in PDF")).toBeTruthy();
  });

  it("should call onQueryChange when typing", () => {
    const onQueryChange = vi.fn();
    render(
      <PdfViewerSearchBar {...defaultProps} onQueryChange={onQueryChange} />,
    );

    fireEvent.change(screen.getByLabelText("Search in PDF"), {
      target: { value: "test" },
    });

    expect(onQueryChange).toHaveBeenCalledWith("test");
  });

  it("should call onNext on Enter", () => {
    const onNext = vi.fn();
    render(<PdfViewerSearchBar {...defaultProps} onNext={onNext} />);

    fireEvent.keyDown(screen.getByLabelText("Search in PDF"), { key: "Enter" });
    expect(onNext).toHaveBeenCalled();
  });

  it("should call onPrev on Shift+Enter", () => {
    const onPrev = vi.fn();
    render(<PdfViewerSearchBar {...defaultProps} onPrev={onPrev} />);

    fireEvent.keyDown(screen.getByLabelText("Search in PDF"), {
      key: "Enter",
      shiftKey: true,
    });
    expect(onPrev).toHaveBeenCalled();
  });

  it("should call onClose on Escape", () => {
    const onClose = vi.fn();
    render(<PdfViewerSearchBar {...defaultProps} onClose={onClose} />);

    fireEvent.keyDown(screen.getByLabelText("Search in PDF"), {
      key: "Escape",
    });
    expect(onClose).toHaveBeenCalled();
  });

  it("should display match count when there are matches", () => {
    render(
      <PdfViewerSearchBar
        {...defaultProps}
        query="test"
        totalMatches={5}
        currentMatchIndex={2}
      />,
    );

    expect(screen.getByText("3 of 5")).toBeTruthy();
  });

  it("should display 'No results' when query has no matches", () => {
    render(
      <PdfViewerSearchBar {...defaultProps} query="test" totalMatches={0} />,
    );

    expect(screen.getByText("No results")).toBeTruthy();
  });

  it("should not display match count for empty query", () => {
    render(<PdfViewerSearchBar {...defaultProps} query="" totalMatches={0} />);

    expect(screen.queryByText("No results")).toBeNull();
  });

  it("should disable nav buttons when there are no matches", () => {
    render(<PdfViewerSearchBar {...defaultProps} totalMatches={0} />);

    expect(
      (screen.getByLabelText("Previous match") as HTMLButtonElement).disabled,
    ).toBe(true);
    expect(
      (screen.getByLabelText("Next match") as HTMLButtonElement).disabled,
    ).toBe(true);
  });

  it("should enable nav buttons when there are matches", () => {
    render(
      <PdfViewerSearchBar
        {...defaultProps}
        query="test"
        totalMatches={3}
        currentMatchIndex={0}
      />,
    );

    expect(
      (screen.getByLabelText("Previous match") as HTMLButtonElement).disabled,
    ).toBe(false);
    expect(
      (screen.getByLabelText("Next match") as HTMLButtonElement).disabled,
    ).toBe(false);
  });
});
