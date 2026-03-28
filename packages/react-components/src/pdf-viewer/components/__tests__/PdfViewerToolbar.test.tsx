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
import { PdfViewerToolbar } from "../PdfViewerToolbar.js";

const defaultProps = {
  currentPage: 1,
  numPages: 10,
  scale: 1.0,
  sidebarOpen: false,
  onPageChange: vi.fn(),
  onScaleChange: vi.fn(),
  onSearchOpen: vi.fn(),
  onSidebarToggle: vi.fn(),
  onDownload: vi.fn(),
  enableDownload: false,
  onRotateLeft: vi.fn(),
  onRotateRight: vi.fn(),
  enableHighlight: false,
  highlightModeActive: false,
  onHighlightToggle: vi.fn(),
};

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("PdfViewerToolbar", () => {
  it("should render the current page and total pages", () => {
    render(
      <PdfViewerToolbar {...defaultProps} currentPage={3} numPages={10} />,
    );

    const pageInput = screen.getByLabelText("Page number") as HTMLInputElement;
    expect(pageInput.value).toBe("3");
    expect(screen.getByText("of 10")).toBeTruthy();
  });

  it("should call onPageChange when next page button is clicked", () => {
    const onPageChange = vi.fn();
    render(
      <PdfViewerToolbar
        {...defaultProps}
        currentPage={3}
        onPageChange={onPageChange}
      />,
    );

    fireEvent.click(screen.getByLabelText("Next page"));
    expect(onPageChange).toHaveBeenCalledWith(4);
  });

  it("should call onPageChange when previous page button is clicked", () => {
    const onPageChange = vi.fn();
    render(
      <PdfViewerToolbar
        {...defaultProps}
        currentPage={3}
        onPageChange={onPageChange}
      />,
    );

    fireEvent.click(screen.getByLabelText("Previous page"));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("should disable previous page button on first page", () => {
    render(<PdfViewerToolbar {...defaultProps} currentPage={1} />);

    expect(
      (screen.getByLabelText("Previous page") as HTMLButtonElement).disabled,
    ).toBe(true);
  });

  it("should disable next page button on last page", () => {
    render(
      <PdfViewerToolbar {...defaultProps} currentPage={10} numPages={10} />,
    );

    expect((screen.getByLabelText("Next page") as HTMLButtonElement).disabled)
      .toBe(true);
  });

  it("should navigate to page on Enter in page input", () => {
    const onPageChange = vi.fn();
    render(
      <PdfViewerToolbar {...defaultProps} onPageChange={onPageChange} />,
    );

    const input = screen.getByLabelText("Page number");
    fireEvent.change(input, { target: { value: "5" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onPageChange).toHaveBeenCalledWith(5);
  });

  it("should reject invalid page input on Enter", () => {
    const onPageChange = vi.fn();
    render(
      <PdfViewerToolbar
        {...defaultProps}
        currentPage={3}
        numPages={10}
        onPageChange={onPageChange}
      />,
    );

    const input = screen.getByLabelText("Page number") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "99" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onPageChange).not.toHaveBeenCalled();
    // Resets to current page on blur
    fireEvent.blur(input);
    expect(input.value).toBe("3");
  });

  it("should call onScaleChange when zoom buttons are clicked", () => {
    const onScaleChange = vi.fn();
    render(
      <PdfViewerToolbar
        {...defaultProps}
        scale={1.0}
        onScaleChange={onScaleChange}
      />,
    );

    fireEvent.click(screen.getByLabelText("Zoom in"));
    expect(onScaleChange).toHaveBeenCalledWith(1.25);

    onScaleChange.mockClear();

    fireEvent.click(screen.getByLabelText("Zoom out"));
    expect(onScaleChange).toHaveBeenCalledWith(0.75);
  });

  it("should display scale as percentage", () => {
    render(<PdfViewerToolbar {...defaultProps} scale={1.5} />);

    expect(screen.getByText("150%")).toBeTruthy();
  });

  it("should call onSidebarToggle when sidebar button is clicked", () => {
    const onSidebarToggle = vi.fn();
    render(
      <PdfViewerToolbar {...defaultProps} onSidebarToggle={onSidebarToggle} />,
    );

    fireEvent.click(screen.getByLabelText("Open sidebar"));
    expect(onSidebarToggle).toHaveBeenCalled();
  });

  it("should call onSearchOpen when search button is clicked", () => {
    const onSearchOpen = vi.fn();
    render(
      <PdfViewerToolbar {...defaultProps} onSearchOpen={onSearchOpen} />,
    );

    fireEvent.click(screen.getByLabelText("Search"));
    expect(onSearchOpen).toHaveBeenCalled();
  });

  it("should update page input when currentPage prop changes", () => {
    const { rerender } = render(
      <PdfViewerToolbar {...defaultProps} currentPage={1} />,
    );

    const input = screen.getByLabelText("Page number") as HTMLInputElement;
    expect(input.value).toBe("1");

    rerender(<PdfViewerToolbar {...defaultProps} currentPage={5} />);
    expect(input.value).toBe("5");
  });

  it("should render save button when enableFormSave is true", () => {
    render(
      <PdfViewerToolbar
        {...defaultProps}
        enableFormSave={true}
        onFormSave={vi.fn()}
      />,
    );

    expect(screen.getByLabelText("Save form")).toBeTruthy();
  });

  it("should not render save button when enableFormSave is false", () => {
    render(<PdfViewerToolbar {...defaultProps} />);

    expect(screen.queryByLabelText("Save form")).toBeNull();
  });

  it("should call onFormSave when save button is clicked", () => {
    const onFormSave = vi.fn();
    render(
      <PdfViewerToolbar
        {...defaultProps}
        enableFormSave={true}
        onFormSave={onFormSave}
      />,
    );

    fireEvent.click(screen.getByLabelText("Save form"));
    expect(onFormSave).toHaveBeenCalled();
  });
});
