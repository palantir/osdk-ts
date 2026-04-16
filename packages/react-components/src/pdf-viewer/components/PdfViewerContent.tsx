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
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { EMPTY_ANNOTATION_ARRAY } from "../constants.js";
import { usePdfAnnotationsByPage } from "../hooks/usePdfAnnotationsByPage.js";
import { usePdfFormFields } from "../hooks/usePdfFormFields.js";
import { usePdfViewerCore } from "../hooks/usePdfViewerCore.js";
import styles from "../PdfViewer.module.css";
import type { PdfAnnotation, PdfFormFieldValue } from "../types.js";
import { PdfViewerAnnotationLayer } from "./PdfViewerAnnotationLayer.js";

export interface PdfViewerContentProps {
  /** PDF source — URL string or ArrayBuffer */
  src: string | ArrayBuffer;
  /** Annotations to overlay on the PDF */
  annotations?: PdfAnnotation[];
  /** Callback fired when an annotation is clicked */
  onAnnotationClick?: (annotation: PdfAnnotation) => void;
  /** Initial page number (1-indexed, default 1) */
  initialPage?: number;
  /** Initial zoom scale (default 1.0) */
  initialScale?: number;
  /** Callback fired when the current page changes during scrolling */
  onPageChange?: (page: number) => void;
  /** Callback fired when the zoom scale changes */
  onScaleChange?: (scale: number) => void;
  /** Initial form field values keyed by field name. Applied when the document loads. */
  formData?: Record<string, PdfFormFieldValue>;
  /** Callback fired when any form field value changes. */
  onFormChange?: (fieldName: string, value: PdfFormFieldValue) => void;
  /** Additional CSS class name for the root element */
  className?: string;
}

export function PdfViewerContent({
  src,
  annotations = EMPTY_ANNOTATION_ARRAY,
  onAnnotationClick,
  initialPage = 1,
  initialScale = 1.0,
  onPageChange: onPageChangeProp,
  onScaleChange: onScaleChangeProp,
  formData,
  onFormChange,
  className,
}: PdfViewerContentProps): React.ReactElement {
  const viewer = usePdfViewerCore({ src, initialPage, initialScale });
  const annotationsByPage = usePdfAnnotationsByPage(annotations);

  usePdfFormFields({
    pdfViewerRef: viewer.pdfViewerRef,
    eventBusRef: viewer.eventBusRef,
    document: viewer.document,
    formData,
    onFormChange,
  });

  // Use refs for callbacks to avoid firing on initial mount
  const onPageChangeRef = useRef(onPageChangeProp);
  onPageChangeRef.current = onPageChangeProp;
  const onScaleChangeRef = useRef(onScaleChangeProp);
  onScaleChangeRef.current = onScaleChangeProp;
  const isInitialMountRef = useRef(true);

  useEffect(
    function notifyPageChange() {
      if (isInitialMountRef.current) {
        return;
      }
      onPageChangeRef.current?.(viewer.currentPage);
    },
    [viewer.currentPage],
  );

  useEffect(
    function notifyScaleChange() {
      if (isInitialMountRef.current) {
        return;
      }
      onScaleChangeRef.current?.(viewer.scale);
    },
    [viewer.scale],
  );

  useEffect(function clearInitialMount() {
    isInitialMountRef.current = false;
  }, []);

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
  );
}
