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

import { Error as ErrorIcon, Spin } from "@blueprintjs/icons";
import classnames from "classnames";
import "pdfjs-dist/web/pdf_viewer.css";
import React, { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { PdfViewerAnnotationLayer } from "./components/PdfViewerAnnotationLayer.js";
import { PdfViewerOutlineSidebar } from "./components/PdfViewerOutlineSidebar.js";
import { PdfViewerSearchBar } from "./components/PdfViewerSearchBar.js";
import { PdfViewerSidebar } from "./components/PdfViewerSidebar.js";
import { PdfViewerToolbar } from "./components/PdfViewerToolbar.js";
import { EMPTY_ANNOTATION_ARRAY } from "./constants.js";
import { usePdfAnnotationsByPage } from "./hooks/usePdfAnnotationsByPage.js";
import { usePdfFormFields } from "./hooks/usePdfFormFields.js";
import { usePdfHighlightMode } from "./hooks/usePdfHighlightMode.js";
import { usePdfViewerState } from "./hooks/usePdfViewerState.js";
import styles from "./PdfViewer.module.css";
import type { PdfViewerHandle, PdfViewerProps } from "./types.js";

export const BasePdfViewer: React.ForwardRefExoticComponent<
  PdfViewerProps & React.RefAttributes<PdfViewerHandle>
> = forwardRef<PdfViewerHandle, PdfViewerProps>(function BasePdfViewer(
  {
    src,
    annotations = EMPTY_ANNOTATION_ARRAY,
    onAnnotationClick,
    onDownload,
    enableHighlight = false,
    onTextHighlight,
    onHighlightDelete,
    formData,
    onFormSubmit,
    onFormChange,
    initialPage = 1,
    initialScale = 1.0,
    initialSidebarOpen = false,
    enableDownload = false,
    sidebarMode: sidebarModeProp = "thumbnails",
    outlineIcons,
    className,
  },
  ref,
) {
  const viewer = usePdfViewerState({
    src,
    initialPage,
    initialScale,
    initialSidebarOpen,
    sidebarMode: sidebarModeProp,
    onDownload,
  });

  const { highlightModeActive, toggleHighlightMode, deleteHighlight } =
    usePdfHighlightMode({
      pdfViewerRef: viewer.pdfViewerRef,
      document: viewer.document,
      enabled: enableHighlight,
      onTextHighlight,
      onHighlightDelete,
    });

  useImperativeHandle(
    ref,
    () => ({
      scrollToPage: viewer.scrollToPage,
      deleteHighlight,
    }),
    [viewer.scrollToPage, deleteHighlight],
  );

  const { hasFormFields, submitFormData } = usePdfFormFields({
    pdfViewerRef: viewer.pdfViewerRef,
    eventBusRef: viewer.eventBusRef,
    document: viewer.document,
    formData,
    onFormSubmit,
    onFormChange,
  });

  const annotationsByPage = usePdfAnnotationsByPage(annotations);

  const rootClassName = classnames(styles.pdfViewer, className);

  if (viewer.loading) {
    return (
      <div className={rootClassName}>
        <div className={styles.loadingContainer}>
          <Spin className={styles.spinnerIcon} />
          Loading…
        </div>
      </div>
    );
  }

  if (viewer.error != null) {
    return (
      <div className={rootClassName}>
        <div className={styles.errorContainer}>
          <ErrorIcon className={styles.errorIcon} />
          Failed to load PDF: {viewer.error.message}
        </div>
      </div>
    );
  }

  if (viewer.document == null) {
    return (
      <div className={rootClassName}>
        <div className={styles.loadingContainer}>No document</div>
      </div>
    );
  }

  return (
    <div className={rootClassName}>
      <PdfViewerToolbar
        currentPage={viewer.currentPage}
        numPages={viewer.numPages}
        scale={viewer.scale}
        sidebarOpen={viewer.sidebarOpen}
        onPageChange={viewer.scrollToPage}
        onScaleChange={viewer.setScale}
        onSearchOpen={viewer.search.openSearch}
        onSidebarToggle={viewer.toggleSidebar}
        onDownload={viewer.download}
        enableDownload={enableDownload}
        onRotateLeft={viewer.rotateLeft}
        onRotateRight={viewer.rotateRight}
        enableHighlight={enableHighlight}
        highlightModeActive={highlightModeActive}
        onHighlightToggle={toggleHighlightMode}
        enableFormSave={onFormSubmit != null && hasFormFields}
        onFormSave={submitFormData}
      />
      {viewer.search.isSearchOpen && (
        <PdfViewerSearchBar
          query={viewer.search.query}
          totalMatches={viewer.search.totalMatches}
          currentMatchIndex={viewer.search.currentMatchIndex}
          onQueryChange={viewer.search.setQuery}
          onNext={viewer.search.nextMatch}
          onPrev={viewer.search.prevMatch}
          onClose={viewer.search.closeSearch}
        />
      )}
      <div className={styles.contentArea}>
        {viewer.sidebarOpen && viewer.sidebarMode === "thumbnails" && (
          <PdfViewerSidebar
            document={viewer.document}
            numPages={viewer.numPages}
            currentPage={viewer.currentPage}
            onPageClick={viewer.scrollToPage}
            sidebarMode={viewer.sidebarMode}
            onSidebarModeChange={viewer.setSidebarMode}
          />
        )}
        {viewer.sidebarOpen && viewer.sidebarMode === "outline" && (
          <PdfViewerOutlineSidebar
            outlineItems={viewer.outlineItems}
            currentPage={viewer.currentPage}
            onItemClick={viewer.scrollToPage}
            sidebarMode={viewer.sidebarMode}
            onSidebarModeChange={viewer.setSidebarMode}
            outlineIcons={outlineIcons}
          />
        )}
        <div className={styles.scrollContainerWrapper}>
          <div ref={viewer.containerRef} className={styles.scrollContainer}>
            <div ref={viewer.viewerRef} className="pdfViewer" />
            {viewer.portalTargets.map((target) => {
              const pageAnnotations =
                annotationsByPage[target.pageNumber] ?? EMPTY_ANNOTATION_ARRAY;
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
});
