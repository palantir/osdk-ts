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

import { useVirtualizer } from "@tanstack/react-virtual";
import classnames from "classnames";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./PdfViewer.module.css";
import { PdfViewerPage } from "./PdfViewerPage.js";
import { PdfViewerSearchBar } from "./PdfViewerSearchBar.js";
import { PdfViewerSidebar } from "./PdfViewerSidebar.js";
import { PdfViewerToolbar } from "./PdfViewerToolbar.js";
import type { PdfAnnotation, PdfViewerProps } from "./types.js";
import { usePdfDocument } from "./usePdfDocument.js";
import { usePdfSearch } from "./usePdfSearch.js";

const EMPTY_ANNOTATIONS: Record<number, PdfAnnotation[]> = {};
const EMPTY_ANNOTATION_ARRAY: PdfAnnotation[] = [];
const DEFAULT_PAGE_HEIGHT = 792; // US Letter height in PDF points
const PAGE_GAP = 8;

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const search = usePdfSearch();

  // Estimate page sizes — all pages assumed same height until rendered
  const estimatedPageHeight = useMemo(
    () => Math.floor(DEFAULT_PAGE_HEIGHT * scale) + PAGE_GAP,
    [scale],
  );

  const virtualizer = useVirtualizer({
    count: numPages,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: () => estimatedPageHeight,
    overscan: 2,
  });

  // Derive current page from virtualizer — no scroll listener needed
  const virtualItems = virtualizer.getVirtualItems();
  const currentPage = virtualItems.length > 0
    ? virtualItems[0].index + 1
    : initialPage;

  // Ctrl+F handler — useEffect necessary for global DOM event listener
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

  const handlePageChange = useCallback(
    (page: number) => {
      virtualizer.scrollToIndex(page - 1, { align: "start" });
    },
    [virtualizer],
  );

  const handleTextLayerRendered = useCallback(
    (pageNumber: number, textDivs: HTMLElement[]) => {
      search.registerTextLayer(pageNumber, textDivs);
    },
    [search.registerTextLayer],
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
        onPageChange={handlePageChange}
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
            onPageClick={handlePageChange}
          />
        )}
        <div ref={scrollContainerRef} className={styles.scrollContainer}>
          <div
            className={styles.pagesContainer}
            style={{ height: virtualizer.getTotalSize() }}
          >
            {virtualizer.getVirtualItems().map((virtualItem) => {
              const pageNumber = virtualItem.index + 1;
              const pageAnnotations = annotations[pageNumber]
                ?? EMPTY_ANNOTATION_ARRAY;

              return (
                <div
                  key={virtualItem.key}
                  className={styles.pageWrapper}
                  style={{
                    top: virtualItem.start,
                    height: virtualItem.size,
                  }}
                >
                  <PdfViewerPage
                    document={document}
                    pageNumber={pageNumber}
                    scale={scale}
                    annotations={pageAnnotations}
                    onAnnotationClick={onAnnotationClick}
                    onTextLayerRendered={handleTextLayerRendered}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
