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

/* cspell:disable */

import type {
  PdfAnnotation,
  PdfAnnotationRenderProps,
  PdfCustomAnnotation,
  PdfViewerProps,
} from "@osdk/react-components/experimental";
import {
  BasePdfViewer,
  PdfViewerAnnotationLayer,
  PdfViewerProvider,
  PdfViewerSearchBar,
  PdfViewerToolbar,
  usePdfViewerContext,
  usePdfViewerInstance,
} from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";

// cspell:ignore tracemonkey pldi
const SAMPLE_PDF_URL =
  `${import.meta.env.BASE_URL}compressed.tracemonkey-pldi-09.pdf`;

// Stable empty array to avoid re-render loops
const EMPTY_ANNOTATIONS: PdfAnnotation[] = [];

const outlineRendererStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  border: "2px solid rgba(41, 101, 204, 0.7)",
  borderRadius: "2px",
  backgroundColor: "rgba(41, 101, 204, 0.12)",
  boxSizing: "border-box",
};

function OutlineRenderer(_props: PdfAnnotationRenderProps): React.ReactElement {
  return <div style={outlineRendererStyles} />;
}

function renderOutline(props: PdfAnnotationRenderProps): React.ReactNode {
  return <OutlineRenderer {...props} />;
}

const ALL_ANNOTATIONS: PdfCustomAnnotation[] = [
  {
    id: "a1",
    type: "custom",
    page: 1,
    rect: { x: 108, y: 700, width: 380, height: 14 },
    label: "Trace-based compilation",
    render: renderOutline,
  },
  {
    id: "a2",
    type: "custom",
    page: 1,
    rect: { x: 88, y: 614, width: 440, height: 12 },
    label: "Abstract section",
    render: renderOutline,
  },
  {
    id: "a3",
    type: "custom",
    page: 2,
    rect: { x: 86, y: 710, width: 220, height: 12 },
    label: "Introduction paragraph",
    render: renderOutline,
  },
  {
    id: "a4",
    type: "custom",
    page: 3,
    rect: { x: 86, y: 680, width: 220, height: 12 },
    label: "Trace tree concept",
    render: renderOutline,
  },
  {
    id: "a5",
    type: "custom",
    page: 5,
    rect: { x: 86, y: 600, width: 220, height: 12 },
    label: "Type specialization",
    render: renderOutline,
  },
  {
    id: "a6",
    type: "custom",
    page: 8,
    rect: { x: 86, y: 650, width: 220, height: 12 },
    label: "Benchmarks overview",
    render: renderOutline,
  },
  {
    id: "a7",
    type: "custom",
    page: 10,
    rect: { x: 86, y: 700, width: 220, height: 12 },
    label: "Related work",
    render: renderOutline,
  },
  {
    id: "a8",
    type: "custom",
    page: 14,
    rect: { x: 86, y: 700, width: 220, height: 12 },
    label: "Conclusions",
    render: renderOutline,
  },
];

const outerContainerStyles: React.CSSProperties = {
  display: "flex",
  height: "100%",
};

const viewerColumnStyles: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const contentAreaStyles: React.CSSProperties = {
  flex: 1,
  overflow: "hidden",
  display: "flex",
  position: "relative",
};

const scrollContainerWrapperStyles: React.CSSProperties = {
  flex: 1,
  position: "relative",
  overflow: "hidden",
};

const scrollContainerStyles: React.CSSProperties = {
  overflow: "auto",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const sidebarStyles: React.CSSProperties = {
  width: "280px",
  borderLeft: "1px solid var(--osdk-surface-border-color, #e0e0e0)",
  overflowY: "auto",
  fontFamily: "var(--osdk-typography-family-default)",
  fontSize: "var(--osdk-typography-size-body-small, 13px)",
};

const sidebarHeaderStyles: React.CSSProperties = {
  padding: "12px 16px",
  fontWeight: 600,
  fontSize: "var(--osdk-typography-size-body-medium, 14px)",
  borderBottom: "1px solid var(--osdk-surface-border-color, #e0e0e0)",
};

const itemBaseStyles: React.CSSProperties = {
  padding: "10px 16px",
  cursor: "pointer",
  borderBottom: "1px solid var(--osdk-surface-border-color, #e0e0e0)",
  transition: "background-color 150ms ease",
};

const itemLabelStyles: React.CSSProperties = {
  fontWeight: 500,
};

const itemPageStyles: React.CSSProperties = {
  marginTop: "4px",
  color: "var(--osdk-typography-color-muted, #666)",
  fontSize: "var(--osdk-typography-size-body-small, 12px)",
};

function ConnectedPdfView(): React.ReactElement {
  const ctx = usePdfViewerContext();

  const handleDownload = useCallback(() => ctx.download(), [ctx]);

  return (
    <div style={viewerColumnStyles}>
      <PdfViewerToolbar
        currentPage={ctx.currentPage}
        numPages={ctx.numPages}
        scale={ctx.scale}
        sidebarOpen={ctx.sidebarOpen}
        onPageChange={ctx.scrollToPage}
        onScaleChange={ctx.setScale}
        onSearchOpen={ctx.search.openSearch}
        onSidebarToggle={ctx.toggleSidebar}
        onDownload={handleDownload}
        enableDownload={ctx.enableDownload}
        onRotateLeft={ctx.rotateLeft}
        onRotateRight={ctx.rotateRight}
        enableHighlight={ctx.highlightEnabled}
        highlightModeActive={ctx.highlightModeActive}
        onHighlightToggle={ctx.toggleHighlightMode}
        enableFormSave={ctx.enableFormSave}
        onFormSave={ctx.submitFormData}
      />
      {ctx.search.isSearchOpen && (
        <PdfViewerSearchBar
          query={ctx.search.query}
          totalMatches={ctx.search.totalMatches}
          currentMatchIndex={ctx.search.currentMatchIndex}
          onQueryChange={ctx.search.setQuery}
          onNext={ctx.search.nextMatch}
          onPrev={ctx.search.prevMatch}
          onClose={ctx.search.closeSearch}
        />
      )}
      <div style={contentAreaStyles}>
        <div style={scrollContainerWrapperStyles}>
          <div ref={ctx.containerRef} style={scrollContainerStyles}>
            <div ref={ctx.viewerRef} className="pdfViewer" />
            {ctx.portalTargets.map((target) => {
              const pageAnnotations = ctx.annotationsByPage[target.pageNumber]
                ?? EMPTY_ANNOTATIONS;
              if (pageAnnotations.length === 0) {
                return null;
              }
              return createPortal(
                <PdfViewerAnnotationLayer
                  key={target.pageNumber}
                  annotations={pageAnnotations}
                  pageHeight={target.pageHeight}
                  scale={target.scale}
                  onAnnotationClick={ctx.onAnnotationClick}
                />,
                target.container,
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

interface AnnotationSidebarItemProps {
  annotation: PdfAnnotation;
  isHovered: boolean;
  onHover: (annotationId: string | null) => void;
}

function AnnotationSidebarItem({
  annotation,
  isHovered,
  onHover,
}: AnnotationSidebarItemProps): React.ReactElement {
  const { scrollToPage } = usePdfViewerContext();

  const handleClick = useCallback(() => {
    scrollToPage(annotation.page);
  }, [scrollToPage, annotation.page]);

  const handleMouseEnter = useCallback(
    () => onHover(annotation.id),
    [onHover, annotation.id],
  );

  const handleMouseLeave = useCallback(() => onHover(null), [onHover]);

  const itemStyles = useMemo(
    (): React.CSSProperties => ({
      ...itemBaseStyles,
      backgroundColor: isHovered
        ? "var(--osdk-palette-blue-100, #e3f2fd)"
        : "transparent",
    }),
    [isHovered],
  );

  return (
    <div
      style={itemStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
    >
      <div style={itemLabelStyles}>{annotation.label ?? annotation.id}</div>
      <div style={itemPageStyles}>Page {annotation.page}</div>
    </div>
  );
}

interface AnnotationSidebarProps {
  annotations: PdfAnnotation[];
  onAnnotationHover: (annotationId: string | null) => void;
  hoveredAnnotationId: string | null;
}

function AnnotationSidebar({
  annotations,
  onAnnotationHover,
  hoveredAnnotationId,
}: AnnotationSidebarProps): React.ReactElement {
  return (
    <div style={sidebarStyles}>
      <div style={sidebarHeaderStyles}>Annotations</div>
      {annotations.map((annotation) => (
        <AnnotationSidebarItem
          key={annotation.id}
          annotation={annotation}
          isHovered={annotation.id === hoveredAnnotationId}
          onHover={onAnnotationHover}
        />
      ))}
    </div>
  );
}

function AnnotationExplorerDemo(
  { src }: { src: string },
): React.ReactElement {
  const [hoveredAnnotationId, setHoveredAnnotationId] = useState<
    string | null
  >(null);

  const visibleAnnotations = useMemo(() => {
    if (hoveredAnnotationId == null) return EMPTY_ANNOTATIONS;
    return ALL_ANNOTATIONS.filter((a) => a.id === hoveredAnnotationId);
  }, [hoveredAnnotationId]);

  const viewer = usePdfViewerInstance({
    src,
    annotations: visibleAnnotations,
  });

  const handleAnnotationHover = useCallback(
    (annotationId: string | null) => {
      setHoveredAnnotationId(annotationId);
    },
    [],
  );

  return (
    <PdfViewerProvider value={viewer}>
      <div style={outerContainerStyles}>
        <ConnectedPdfView />
        <AnnotationSidebar
          annotations={ALL_ANNOTATIONS}
          onAnnotationHover={handleAnnotationHover}
          hoveredAnnotationId={hoveredAnnotationId}
        />
      </div>
    </PdfViewerProvider>
  );
}

const meta: Meta<PdfViewerProps> = {
  title: "Components/PdfViewer/Recipes",
  component: BasePdfViewer,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AnnotationExplorer: Story = {
  render: () => (
    <div style={{ height: "600px" }}>
      <AnnotationExplorerDemo src={SAMPLE_PDF_URL} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `// Annotation Explorer: sidebar lists all annotations
// Hover to reveal on PDF, click to navigate to page`,
      },
    },
  },
};
