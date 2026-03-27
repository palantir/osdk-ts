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
import type { PdfAnnotation, PdfRect } from "../types.js";
import styles from "./PdfViewerAnnotationLayer.module.css";

export interface PdfViewerAnnotationLayerProps {
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

/** Convert a single PDF rect (bottom-left origin) to CSS positioning (top-left origin). */
function computeRectStyle(
  rect: PdfRect,
  pageHeight: number,
  scale: number,
  color: string | undefined,
): React.CSSProperties {
  return {
    left: rect.x * scale,
    top: (pageHeight - rect.y - rect.height) * scale,
    width: rect.width * scale,
    height: rect.height * scale,
    ...(color != null
      ? { "--osdk-pdf-annotation-color": color } as React.CSSProperties
      : {}),
  };
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

  const className = classnames(
    styles.annotation,
    styles[annotation.type],
  );

  const hasMultipleRects = annotation.rects != null
    && annotation.rects.length > 1;

  const style = useMemo(
    () =>
      computeRectStyle(annotation.rect, pageHeight, scale, annotation.color),
    [annotation, pageHeight, scale],
  );

  // Multi-rect: render a group wrapper with one div per rect
  if (hasMultipleRects) {
    return (
      <div
        className={styles.annotationGroup}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        title={annotation.label}
        data-annotation-id={annotation.id}
      >
        {annotation.rects!.map((rect, i) => (
          <div
            key={i}
            className={className}
            style={computeRectStyle(
              rect,
              pageHeight,
              scale,
              annotation.color,
            )}
          />
        ))}
      </div>
    );
  }

  // Single rect: existing behavior

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

function CustomAnnotationItem({
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

  const style = useMemo(
    () => computeRectStyle(annotation.rect, pageHeight, scale, undefined),
    [annotation, pageHeight, scale],
  );

  return (
    <div
      className={styles.annotation}
      style={style}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      title={annotation.label}
      data-annotation-id={annotation.id}
    >
      {annotation.render?.({ annotation, scale, pageHeight })}
    </div>
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
      {annotations.map((annotation) =>
        annotation.type === "custom"
          ? (
            <CustomAnnotationItem
              key={annotation.id}
              annotation={annotation}
              pageHeight={pageHeight}
              scale={scale}
              onClick={onAnnotationClick}
            />
          )
          : (
            <AnnotationItem
              key={annotation.id}
              annotation={annotation}
              pageHeight={pageHeight}
              scale={scale}
              onClick={onAnnotationClick}
            />
          )
      )}
    </div>
  );
}
