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
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { OutlineItem } from "../../hooks/usePdfOutline.js";
import { PdfViewerOutlineSidebar } from "../PdfViewerOutlineSidebar.js";

afterEach(() => {
  cleanup();
});

function createOutlineItem(
  overrides: Partial<OutlineItem> = {},
): OutlineItem {
  return {
    title: "Chapter 1",
    depth: 0,
    pageNumber: 1,
    bold: false,
    italic: false,
    ...overrides,
  };
}

const defaultProps = {
  currentPage: 1,
  onItemClick: vi.fn(),
  sidebarMode: "outline" as const,
  onSidebarModeChange: vi.fn(),
};

describe("PdfViewerOutlineSidebar", () => {
  // --- Empty state ---

  it("should render empty state when there are no outline items", () => {
    render(
      <PdfViewerOutlineSidebar
        {...defaultProps}
        outlineItems={[]}
      />,
    );

    expect(screen.getByText("No outline available")).toBeTruthy();
  });

  // --- Rendering items ---

  it("should render outline items", () => {
    const items = [
      createOutlineItem({ title: "Introduction", pageNumber: 1 }),
      createOutlineItem({ title: "Background", pageNumber: 5 }),
      createOutlineItem({ title: "Conclusion", pageNumber: 10 }),
    ];

    render(
      <PdfViewerOutlineSidebar
        {...defaultProps}
        outlineItems={items}
      />,
    );

    expect(screen.getByText("Introduction")).toBeTruthy();
    expect(screen.getByText("Background")).toBeTruthy();
    expect(screen.getByText("Conclusion")).toBeTruthy();
  });

  it("should set aria-label on each item", () => {
    const items = [
      createOutlineItem({ title: "Chapter 1" }),
    ];

    render(
      <PdfViewerOutlineSidebar
        {...defaultProps}
        outlineItems={items}
      />,
    );

    expect(screen.getByLabelText("Chapter 1")).toBeTruthy();
  });

  // --- Click handling ---

  it("should call onItemClick with page number when item is clicked", () => {
    const onItemClick = vi.fn();
    const items = [
      createOutlineItem({ title: "Section A", pageNumber: 7 }),
    ];

    render(
      <PdfViewerOutlineSidebar
        {...defaultProps}
        outlineItems={items}
        onItemClick={onItemClick}
      />,
    );

    fireEvent.click(screen.getByLabelText("Section A"));
    expect(onItemClick).toHaveBeenCalledWith(7);
  });

  it("should call onItemClick on Enter key", () => {
    const onItemClick = vi.fn();
    const items = [
      createOutlineItem({ title: "Section B", pageNumber: 3 }),
    ];

    render(
      <PdfViewerOutlineSidebar
        {...defaultProps}
        outlineItems={items}
        onItemClick={onItemClick}
      />,
    );

    fireEvent.keyDown(screen.getByLabelText("Section B"), { key: "Enter" });
    expect(onItemClick).toHaveBeenCalledWith(3);
  });

  it("should call onItemClick on Space key", () => {
    const onItemClick = vi.fn();
    const items = [
      createOutlineItem({ title: "Section C", pageNumber: 4 }),
    ];

    render(
      <PdfViewerOutlineSidebar
        {...defaultProps}
        outlineItems={items}
        onItemClick={onItemClick}
      />,
    );

    fireEvent.keyDown(screen.getByLabelText("Section C"), { key: " " });
    expect(onItemClick).toHaveBeenCalledWith(4);
  });

  // --- Active item ---

  it("should mark the active item with aria-current", () => {
    const items = [
      createOutlineItem({ title: "Page 1 Item", pageNumber: 1 }),
      createOutlineItem({ title: "Page 5 Item", pageNumber: 5 }),
      createOutlineItem({ title: "Page 10 Item", pageNumber: 10 }),
    ];

    render(
      <PdfViewerOutlineSidebar
        {...defaultProps}
        outlineItems={items}
        currentPage={7}
      />,
    );

    // Current page 7 is between page 5 and 10, so "Page 5 Item" should be active
    expect(screen.getByLabelText("Page 5 Item").getAttribute("aria-current"))
      .toBe("location");
    expect(screen.getByLabelText("Page 1 Item").getAttribute("aria-current"))
      .toBeNull();
    expect(screen.getByLabelText("Page 10 Item").getAttribute("aria-current"))
      .toBeNull();
  });

  it("should mark the last item as active when on the last page", () => {
    const items = [
      createOutlineItem({ title: "Start", pageNumber: 1 }),
      createOutlineItem({ title: "End", pageNumber: 10 }),
    ];

    render(
      <PdfViewerOutlineSidebar
        {...defaultProps}
        outlineItems={items}
        currentPage={15}
      />,
    );

    expect(screen.getByLabelText("End").getAttribute("aria-current"))
      .toBe("location");
  });

  // --- Indentation ---

  it("should indent nested items based on depth", () => {
    const items = [
      createOutlineItem({ title: "Top Level", depth: 0 }),
      createOutlineItem({ title: "Nested", depth: 1 }),
      createOutlineItem({ title: "Deeply Nested", depth: 2 }),
    ];

    render(
      <PdfViewerOutlineSidebar
        {...defaultProps}
        outlineItems={items}
      />,
    );

    // INDENT_PER_DEPTH = 16, base padding = 12
    const topLevel = screen.getByLabelText("Top Level");
    const nested = screen.getByLabelText("Nested");
    const deeplyNested = screen.getByLabelText("Deeply Nested");

    expect(topLevel.style.paddingLeft).toBe("12px"); // 16 * 0 + 12
    expect(nested.style.paddingLeft).toBe("28px"); // 16 * 1 + 12
    expect(deeplyNested.style.paddingLeft).toBe("44px"); // 16 * 2 + 12
  });

  // --- Icons ---

  it("should render icon component when outlineIcons are provided", () => {
    function TestIcon() {
      return <span data-testid="test-icon">icon</span>;
    }

    const items = [
      createOutlineItem({ title: "With Icon", depth: 0 }),
    ];

    render(
      <PdfViewerOutlineSidebar
        {...defaultProps}
        outlineItems={items}
        outlineIcons={{ 0: TestIcon }}
      />,
    );

    expect(screen.getByTestId("test-icon")).toBeTruthy();
  });

  it("should not render icon when outlineIcons does not include the depth", () => {
    function TestIcon() {
      return <span data-testid="test-icon">icon</span>;
    }

    const items = [
      createOutlineItem({ title: "No Icon", depth: 1 }),
    ];

    render(
      <PdfViewerOutlineSidebar
        {...defaultProps}
        outlineItems={items}
        outlineIcons={{ 0: TestIcon }}
      />,
    );

    expect(screen.queryByTestId("test-icon")).toBeNull();
  });
});
