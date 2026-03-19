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

import classnames from "classnames";
import "pdfjs-dist/web/pdf_viewer.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePdfAnnotationPortals } from "./hooks/usePdfAnnotationPortals.js";
import { usePdfDocument } from "./hooks/usePdfDocument.js";
import { usePdfViewer } from "./hooks/usePdfViewer.js";
import { usePdfViewerSearch } from "./hooks/usePdfViewerSearch.js";
import { usePdfViewerSync } from "./hooks/usePdfViewerSync.js";
import styles from "./PdfViewer.module.css";
import { PdfViewerAnnotationLayer } from "./PdfViewerAnnotationLayer.js";
import { PdfViewerSearchBar } from "./PdfViewerSearchBar.js";
import { PdfViewerSidebar } from "./PdfViewerSidebar.js";
import { PdfViewerToolbar } from "./PdfViewerToolbar.js";
import type { PdfAnnotation, PdfViewerProps } from "./types.js";

const EMPTY_ANNOTATIONS: Record<number, PdfAnnotation[]> = {};
const EMPTY_ANNOTATION_ARRAY: PdfAnnotation[] = [];

export function PdfViewer({
  src,
  annotations = EMPTY_ANNOTATIONS,
  onAnnotationClick,
  initialPage = 1,
  initialScale = 1.0,
  initialSidebarOpen = false,
  className,
}: PdfViewerProps): React.ReactElement {
  const { document, numPages, loading, error } = usePdfDocument(src);
  const [scale, setScale] = useState(initialScale);
  const [sidebarOpen, setSidebarOpen] = useState(initialSidebarOpen);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  const { pdfViewerRef, eventBusRef, findControllerRef } = usePdfViewer(
    containerRef,
    viewerRef,
    document,
  );

  const search = usePdfViewerSearch(eventBusRef, findControllerRef, document);

  const handleScaleChange = useCallback((newScale: number) => {
    setScale(newScale);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const { scrollToPage } = usePdfViewerSync({
    pdfViewerRef,
    eventBusRef,
    document,
    scale,
    onScaleChange: handleScaleChange,
    onPageChange: handlePageChange,
  });

  const portalTargets = usePdfAnnotationPortals(
    pdfViewerRef,
    eventBusRef,
    document,
  );

  // Set initial page after viewer is ready
  useEffect(() => {
    if (pdfViewerRef.current != null && initialPage > 1) {
      pdfViewerRef.current.currentPageNumber = initialPage;
    }
  }, [pdfViewerRef, initialPage]);

  // Ctrl+F handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "f") {
        e.preventDefault();
        search.openSearch();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [search.openSearch]);

  const handleSidebarToggle = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const handleToolbarPageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      scrollToPage(page);
    },
    [scrollToPage],
  );

  const rootClassName = classnames(styles.pdfViewer, className);

  if (loading) {
    return (
      <div className={rootClassName}>
        <div className={styles.loadingContainer}>Loading PDF...</div>
      </div>
    );
  }

  if (error != null) {
    return (
      <div className={rootClassName}>
        <div className={styles.errorContainer}>
          Failed to load PDF: {error.message}
        </div>
      </div>
    );
  }

  if (document == null) {
    return (
      <div className={rootClassName}>
        <div className={styles.loadingContainer}>No document</div>
      </div>
    );
  }

  return (
    <div className={rootClassName}>
      <PdfViewerToolbar
        currentPage={currentPage}
        numPages={numPages}
        scale={scale}
        sidebarOpen={sidebarOpen}
        onPageChange={handleToolbarPageChange}
        onScaleChange={setScale}
        onSearchOpen={search.openSearch}
        onSidebarToggle={handleSidebarToggle}
      />
      {search.isSearchOpen && (
        <PdfViewerSearchBar
          query={search.query}
          totalMatches={search.totalMatches}
          currentMatchIndex={search.currentMatchIndex}
          onQueryChange={search.setQuery}
          onNext={search.nextMatch}
          onPrev={search.prevMatch}
          onClose={search.closeSearch}
        />
      )}
      <div className={styles.contentArea}>
        {sidebarOpen && (
          <PdfViewerSidebar
            document={document}
            numPages={numPages}
            currentPage={currentPage}
            onPageClick={handleToolbarPageChange}
          />
        )}
        <div className={styles.scrollContainerWrapper}>
          <div ref={containerRef} className={styles.scrollContainer}>
            <div ref={viewerRef} className="pdfViewer" />
            {portalTargets.map((target) => {
              const pageAnnotations = annotations[target.pageNumber]
                ?? EMPTY_ANNOTATION_ARRAY;
              if (pageAnnotations.length === 0) {
                return null;
              }
              return createPortal(
                <PdfViewerAnnotationLayer
                  key={target.pageNumber}
                  annotations={pageAnnotations}
                  pageHeight={target.pageHeight}
                  scale={target.scale}
                  onAnnotationClick={onAnnotationClick}
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
