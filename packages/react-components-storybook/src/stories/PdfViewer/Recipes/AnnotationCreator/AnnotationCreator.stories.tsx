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

import type {
  PdfAnnotation,
  PdfRect,
  PdfViewerHandle,
  PdfViewerProps,
} from "@osdk/react-components/experimental";
import { BasePdfViewer } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useCallback, useEffect, useRef, useState } from "react";

// cspell:ignore tracemonkey pldi
const SAMPLE_PDF_URL = "/compressed.tracemonkey-pldi-09.pdf";

type AnnotationWithText = PdfAnnotation & { selectedText: string };

const HIGHLIGHT_COLOR = "#fff066";

/**
 * Walk up from a DOM node to find the enclosing pdfjs `.page` element.
 */
function findPageElement(node: Node): HTMLElement | undefined {
  let current: Node | null = node;
  while (current != null) {
    if (
      current instanceof HTMLElement
      && current.classList.contains("page")
      && current.getAttribute("data-page-number") != null
    ) {
      return current;
    }
    current = current.parentNode;
  }
  return undefined;
}

/**
 * Convert browser DOMRect values (relative to viewport) into a PdfRect
 * in PDF coordinate space (bottom-left origin, unscaled).
 */
function domRectToPdfRect(
  clientRect: DOMRect,
  pageRect: DOMRect,
  pageHeight: number,
  scale: number,
): PdfRect {
  const x = (clientRect.left - pageRect.left) / scale;
  const width = clientRect.width / scale;
  const height = clientRect.height / scale;
  const topInPdfUnits = (clientRect.top - pageRect.top) / scale;
  // Flip y-axis: PDF origin is bottom-left
  const y = pageHeight - topInPdfUnits - height;
  return { x, y, width, height };
}

interface AnnotationSidebarItemProps {
  annotation: AnnotationWithText;
  onClick: (page: number) => void;
  onDelete: (id: string) => void;
}

function AnnotationSidebarItem(
  { annotation, onClick, onDelete }: AnnotationSidebarItemProps,
): React.ReactElement {
  const handleClick = useCallback(() => {
    onClick(annotation.page);
  }, [onClick, annotation.page]);

  const handleDelete = useCallback(() => {
    onDelete(annotation.id);
  }, [onDelete, annotation.id]);

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      style={{
        padding: 8,
        marginBottom: 8,
        backgroundColor: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: 4,
        borderLeft: `3px solid ${annotation.color ?? HIGHLIGHT_COLOR}`,
        cursor: "pointer",
      }}
    >
      <div style={{ fontSize: 12, color: "#666", marginBottom: 4 }}>
        Page {annotation.page}
      </div>
      <div
        style={{
          fontSize: 13,
          marginBottom: 8,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        &ldquo;{annotation.selectedText}&rdquo;
      </div>
      <button
        onClick={handleDelete}
        style={{
          fontSize: 12,
          color: "#c00",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        Delete
      </button>
    </div>
  );
}

interface AnnotationSidebarProps {
  annotations: AnnotationWithText[];
  annotationModeActive: boolean;
  onToggleMode: () => void;
  onAnnotationClick: (page: number) => void;
  onDelete: (id: string) => void;
}

function AnnotationSidebar(
  {
    annotations,
    annotationModeActive,
    onToggleMode,
    onAnnotationClick,
    onDelete,
  }: AnnotationSidebarProps,
): React.ReactElement {
  return (
    <div
      style={{
        width: 260,
        borderLeft: "1px solid #e0e0e0",
        padding: 12,
        overflowY: "auto",
        backgroundColor: "#fafafa",
        flexShrink: 0,
      }}
    >
      <h3 style={{ margin: "0 0 12px", fontSize: 14 }}>
        Annotations ({annotations.length})
      </h3>
      <button
        onClick={onToggleMode}
        type="button"
        style={{
          width: "100%",
          padding: "8px 12px",
          marginBottom: 12,
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 600,
          background: annotationModeActive ? "#c00" : "#2965cc",
          color: "white",
        }}
      >
        {annotationModeActive ? "Stop Annotating" : "Start Annotating"}
      </button>
      {annotations.length === 0 && (
        <p style={{ color: "#888", fontSize: 13 }}>
          {annotationModeActive
            ? "Select text on the PDF to create an annotation."
            : "Click \"Start Annotating\" then select text on the PDF."}
        </p>
      )}
      {annotations.map((annotation) => (
        <AnnotationSidebarItem
          key={annotation.id}
          annotation={annotation}
          onClick={onAnnotationClick}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

function AnnotationCreatorDemo(
  { src }: { src: string },
): React.ReactElement {
  const [annotations, setAnnotations] = useState<AnnotationWithText[]>([]);
  const [annotationModeActive, setAnnotationModeActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<PdfViewerHandle>(null);

  const handleAnnotationClick = useCallback((page: number) => {
    viewerRef.current?.scrollToPage(page);
  }, []);

  const toggleMode = useCallback(() => {
    setAnnotationModeActive((prev) => !prev);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setAnnotations((prev) => prev.filter((a) => a.id !== id));
  }, []);

  // Listen for text selection when annotation mode is active
  useEffect(function captureTextSelection() {
    if (!annotationModeActive) return;

    const container = containerRef.current;
    if (container == null) return;

    function handleMouseUp() {
      const selection = window.getSelection();
      if (selection == null || selection.isCollapsed) return;

      const selectedText = selection.toString().trim();
      if (selectedText === "") return;

      const range = selection.getRangeAt(0);
      const pageEl = findPageElement(range.startContainer);
      if (pageEl == null) return;

      const pageNumber = Number(pageEl.getAttribute("data-page-number"));
      if (Number.isNaN(pageNumber)) return;

      // Read the pdfjs scale factor from the CSS variable
      const scale = parseFloat(
        getComputedStyle(pageEl).getPropertyValue("--scale-factor"),
      ) || 1;
      const pageHeight = pageEl.clientHeight / scale;

      const pageRect = pageEl.getBoundingClientRect();
      const clientRects = range.getClientRects();

      const pdfRects: PdfRect[] = [];
      for (let i = 0; i < clientRects.length; i++) {
        const cr = clientRects[i];
        // Skip zero-size rects
        if (cr.width === 0 || cr.height === 0) continue;
        pdfRects.push(domRectToPdfRect(cr, pageRect, pageHeight, scale));
      }

      if (pdfRects.length === 0) return;

      const newAnnotation: AnnotationWithText = {
        id: crypto.randomUUID(),
        type: "highlight",
        page: pageNumber,
        rect: pdfRects[0],
        rects: pdfRects,
        color: HIGHLIGHT_COLOR,
        label: selectedText,
        selectedText,
      };

      setAnnotations((prev) => [...prev, newAnnotation]);
      selection.removeAllRanges();
    }

    container.addEventListener("mouseup", handleMouseUp);
    return () => container.removeEventListener("mouseup", handleMouseUp);
  }, [annotationModeActive]);

  return (
    <div style={{ display: "flex", height: "600px" }}>
      <div ref={containerRef} style={{ flex: 1, minWidth: 0 }}>
        <BasePdfViewer
          ref={viewerRef}
          src={src}
          annotations={annotations}
        />
      </div>
      <AnnotationSidebar
        annotations={annotations}
        annotationModeActive={annotationModeActive}
        onToggleMode={toggleMode}
        onAnnotationClick={handleAnnotationClick}
        onDelete={handleDelete}
      />
    </div>
  );
}

const meta: Meta<PdfViewerProps> = {
  title: "Components/PdfViewer/Recipes",
  component: BasePdfViewer,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AnnotationCreator: Story = {
  render: () => <AnnotationCreatorDemo src={SAMPLE_PDF_URL} />,
  parameters: {
    docs: {
      source: {
        code:
          `// Select text to create annotations, view and manage them in the sidebar`,
      },
    },
  },
};
