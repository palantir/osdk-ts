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
import React, { useCallback, useMemo } from "react";
import styles from "./PdfViewerAnnotationLayer.module.css";
import type { PdfAnnotation } from "./types.js";

interface PdfViewerAnnotationLayerProps {
  annotations: PdfAnnotation[];
  pageHeight: number;
  scale: number;
  onAnnotationClick?: (annotation: PdfAnnotation) => void;
}

interface AnnotationItemProps {
  annotation: PdfAnnotation;
  pageHeight: number;
  scale: number;
  onClick?: (annotation: PdfAnnotation) => void;
}

function AnnotationItem({
  annotation,
  pageHeight,
  scale,
  onClick,
}: AnnotationItemProps): React.ReactElement {
  const handleClick = useCallback(() => {
    onClick?.(annotation);
  }, [onClick, annotation]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onClick?.(annotation);
      }
    },
    [onClick, annotation],
  );

  // Convert PDF coordinates (bottom-left origin) to CSS (top-left origin)
  const style = useMemo(
    () => ({
      left: annotation.rect.x * scale,
      top: (pageHeight - annotation.rect.y - annotation.rect.height) * scale,
      width: annotation.rect.width * scale,
      height: annotation.rect.height * scale,
      ...(annotation.color != null
        ? {
          "--osdk-pdf-annotation-color": annotation.color,
        } as React.CSSProperties
        : {}),
    }),
    [annotation, pageHeight, scale],
  );

  const className = classnames(
    styles.annotation,
    styles[annotation.type],
  );

  return (
    <div
      className={className}
      style={style}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      title={annotation.label}
      data-annotation-id={annotation.id}
    />
  );
}

export function PdfViewerAnnotationLayer({
  annotations,
  pageHeight,
  scale,
  onAnnotationClick,
}: PdfViewerAnnotationLayerProps): React.ReactElement {
  return (
    <div className={styles.annotationLayer}>
      {annotations.map((annotation) => (
        <AnnotationItem
          key={annotation.id}
          annotation={annotation}
          pageHeight={pageHeight}
          scale={scale}
          onClick={onAnnotationClick}
        />
      ))}
    </div>
  );
}
