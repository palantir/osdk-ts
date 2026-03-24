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

import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Menu,
  Minus,
  Plus,
  RotatePage,
  Search,
} from "@blueprintjs/icons";
import React, { useCallback, useEffect, useState } from "react";
import { MAX_SCALE, MIN_SCALE, SCALE_STEP } from "./constants.js";
import styles from "./PdfViewerToolbar.module.css";

export interface PdfViewerToolbarProps {
  currentPage: number;
  numPages: number;
  scale: number;
  sidebarOpen: boolean;
  onPageChange: (page: number) => void;
  onScaleChange: (scale: number) => void;
  onSearchOpen: () => void;
  onSidebarToggle: () => void;
  onDownload: () => void;
  downloadEnabled: boolean;
  onRotateLeft: () => void;
  onRotateRight: () => void;
}

export function PdfViewerToolbar({
  currentPage,
  numPages,
  scale,
  sidebarOpen,
  onPageChange,
  onScaleChange,
  onSearchOpen,
  onSidebarToggle,
  onDownload,
  downloadEnabled,
  onRotateLeft,
  onRotateRight,
}: PdfViewerToolbarProps): React.ReactElement {
  const [pageInputValue, setPageInputValue] = useState(String(currentPage));

  // Sync input display when currentPage changes from scrolling
  useEffect(function syncPageInput() {
    setPageInputValue(String(currentPage));
  }, [currentPage]);

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      onPageChange(newPage);
      setPageInputValue(String(newPage));
    }
  }, [currentPage, onPageChange]);

  const handleNextPage = useCallback(() => {
    if (currentPage < numPages) {
      const newPage = currentPage + 1;
      onPageChange(newPage);
      setPageInputValue(String(newPage));
    }
  }, [currentPage, numPages, onPageChange]);

  const handlePageInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPageInputValue(e.target.value);
    },
    [],
  );

  const handlePageInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const page = parseInt(pageInputValue, 10);
        if (!isNaN(page) && page >= 1 && page <= numPages) {
          onPageChange(page);
        } else {
          setPageInputValue(String(currentPage));
        }
      }
    },
    [pageInputValue, numPages, onPageChange, currentPage],
  );

  const handlePageInputBlur = useCallback(() => {
    setPageInputValue(String(currentPage));
  }, [currentPage]);

  const handleZoomIn = useCallback(() => {
    const newScale = Math.min(scale + SCALE_STEP, MAX_SCALE);
    onScaleChange(newScale);
  }, [scale, onScaleChange]);

  const handleZoomOut = useCallback(() => {
    const newScale = Math.max(scale - SCALE_STEP, MIN_SCALE);
    onScaleChange(newScale);
  }, [scale, onScaleChange]);

  const scalePercent = `${Math.round(scale * 100)}%`;

  return (
    <div className={styles.toolbar}>
      <Button
        className={styles.toolbarButton}
        onClick={onSidebarToggle}
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        title={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        aria-pressed={sidebarOpen}
        type="button"
      >
        <Menu size={16} />
      </Button>

      <div className={styles.separator} />

      <div className={styles.toolbarGroup}>
        <Button
          className={styles.toolbarButton}
          onClick={handlePrevPage}
          disabled={currentPage <= 1}
          aria-label="Previous page"
          title="Previous page"
          type="button"
        >
          <ChevronLeft size={16} />
        </Button>
        <Input
          className={styles.pageInput}
          type="text"
          value={pageInputValue}
          onChange={handlePageInputChange}
          onKeyDown={handlePageInputKeyDown}
          onBlur={handlePageInputBlur}
          aria-label="Page number"
        />
        <span className={styles.pageCount}>of {numPages}</span>
        <Button
          className={styles.toolbarButton}
          onClick={handleNextPage}
          disabled={currentPage >= numPages}
          aria-label="Next page"
          title="Next page"
          type="button"
        >
          <ChevronRight size={16} />
        </Button>
      </div>

      <div className={styles.separator} />

      <div className={styles.toolbarGroup}>
        <Button
          className={styles.toolbarButton}
          onClick={handleZoomOut}
          disabled={scale <= MIN_SCALE}
          aria-label="Zoom out"
          title="Zoom out"
          type="button"
        >
          <Minus size={16} />
        </Button>
        <span className={styles.scaleDisplay}>{scalePercent}</span>
        <Button
          className={styles.toolbarButton}
          onClick={handleZoomIn}
          disabled={scale >= MAX_SCALE}
          aria-label="Zoom in"
          title="Zoom in"
          type="button"
        >
          <Plus size={16} />
        </Button>
      </div>

      <div className={styles.separator} />

      <div className={styles.toolbarGroup}>
        <Button
          className={styles.toolbarButton}
          onClick={onRotateLeft}
          aria-label="Rotate left"
          title="Rotate left"
          type="button"
        >
          <RotatePage size={16} />
        </Button>
        <Button
          className={styles.toolbarButton}
          onClick={onRotateRight}
          aria-label="Rotate right"
          title="Rotate right"
          type="button"
        >
          <RotatePage size={16} style={{ transform: "scaleX(-1)" }} />
        </Button>
      </div>

      <div className={styles.separator} />

      <Button
        className={styles.toolbarButton}
        onClick={onSearchOpen}
        aria-label="Search"
        title="Search"
        type="button"
      >
        <Search size={16} />
      </Button>

      {downloadEnabled && (
        <>
          <div className={styles.separator} />

          <Button
            className={styles.toolbarButton}
            onClick={onDownload}
            aria-label="Download"
            title="Download"
            type="button"
          >
            <Download size={16} />
          </Button>
        </>
      )}
    </div>
  );
}
