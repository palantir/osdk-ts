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
import type { PDFDocumentProxy } from "pdfjs-dist";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  DEFAULT_PAGE_HEIGHT,
  THUMBNAIL_GAP,
  THUMBNAIL_SCALE,
} from "./constants.js";
import styles from "./PdfViewerSidebar.module.css";
import { PdfViewerThumbnail } from "./PdfViewerThumbnail.js";

interface PdfViewerSidebarProps {
  document: PDFDocumentProxy;
  numPages: number;
  currentPage: number;
  onPageClick: (page: number) => void;
}

export function PdfViewerSidebar({
  document,
  numPages,
  currentPage,
  onPageClick,
}: PdfViewerSidebarProps): React.ReactElement {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const estimatedItemHeight = useMemo(
    () =>
      Math.floor(DEFAULT_PAGE_HEIGHT * THUMBNAIL_SCALE) + THUMBNAIL_GAP + 20,
    [],
  );

  const virtualizer = useVirtualizer({
    count: numPages,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: () => estimatedItemHeight,
    overscan: 2,
  });

  // Auto-scroll to keep the active thumbnail visible
  useEffect(() => {
    virtualizer.scrollToIndex(currentPage - 1, { align: "auto" });
  }, [currentPage, virtualizer]);

  const handlePageClick = useCallback(
    (page: number) => {
      onPageClick(page);
    },
    [onPageClick],
  );

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>Pages</div>
      <div ref={scrollContainerRef} className={styles.scrollContainer}>
        <div
          className={styles.thumbnailsContainer}
          style={{ height: virtualizer.getTotalSize() }}
        >
          {virtualizer.getVirtualItems().map((virtualItem) => {
            const pageNumber = virtualItem.index + 1;
            return (
              <div
                key={virtualItem.key}
                className={styles.thumbnailWrapper}
                style={{
                  top: virtualItem.start,
                  height: virtualItem.size,
                }}
              >
                <div>
                  <PdfViewerThumbnail
                    document={document}
                    pageNumber={pageNumber}
                    isActive={pageNumber === currentPage}
                    onClick={() => handlePageClick(pageNumber)}
                  />
                  <div className={styles.pageNumber}>{pageNumber}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
