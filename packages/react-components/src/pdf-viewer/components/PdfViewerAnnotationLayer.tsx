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
import type { PdfAnnotation, PdfCustomAnnotation, PdfRect } from "../types.js";
import styles from "./PdfViewerAnnotationLayer.module.css";

export interface PdfViewerAnnotationLayerProps {
  annotations: PdfAnnotation[];
  pageHeight: number;
  scale: number;
  transform: number[];
  onAnnotationClick?: (annotation: PdfAnnotation) => void;
}

interface AnnotationItemProps {
  annotation: PdfAnnotation;
  transform: number[];
  onClick?: (annotation: PdfAnnotation) => void;
}

interface CustomAnnotationItemProps extends AnnotationItemProps {
  annotation: PdfCustomAnnotation;
  pageHeight: number;
  scale: number;
}

function applyTransform(
  point: readonly [number, number],
  m: readonly number[],
): [number, number] {
  return [
    m[0] * point[0] + m[2] * point[1] + m[4],
    m[1] * point[0] + m[3] * point[1] + m[5],
  ];
}

/** Convert a single PDF rect (bottom-left origin) to CSS positioning (top-left origin). */
function computeRectStyle(
  rect: PdfRect,
  transform: readonly number[],
  color: string | undefined,
): React.CSSProperties {
  const [x1, y1] = applyTransform([rect.x, rect.y], transform);
  const [x2, y2] = applyTransform(
    [rect.x + rect.width, rect.y + rect.height],
    transform,
  );
  return {
    left: Math.min(x1, x2),
    top: Math.min(y1, y2),
    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1),
    ...(color != null
      ? { "--osdk-pdf-annotation-color": color } as React.CSSProperties
      : {}),
  };
}

function useAnnotationHandlers(
  annotation: PdfAnnotation,
  onClick?: (annotation: PdfAnnotation) => void,
) {
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

  return { handleClick, handleKeyDown };
}

function AnnotationItem({
  annotation,
  transform,
  onClick,
}: AnnotationItemProps): React.ReactElement {
  const { handleClick, handleKeyDown } = useAnnotationHandlers(
    annotation,
    onClick,
  );

  const className = classnames(
    styles.annotation,
    styles[annotation.type],
  );

  const multiRects = annotation.rects;
  const hasMultipleRects = multiRects != null && multiRects.length > 1;

  const style = useMemo(
    () => computeRectStyle(annotation.rect, transform, annotation.color),
    [annotation, transform],
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
        {multiRects.map((rect, i) => (
          <div
            key={i}
            className={className}
            style={computeRectStyle(rect, transform, annotation.color)}
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
  transform,
  onClick,
}: CustomAnnotationItemProps): React.ReactElement {
  const { handleClick, handleKeyDown } = useAnnotationHandlers(
    annotation,
    onClick,
  );

  const style = useMemo(
    () => computeRectStyle(annotation.rect, transform, undefined),
    [annotation, transform],
  );

  const renderProps = useMemo(
    () => ({ annotation, scale, pageHeight, transform }),
    [annotation, scale, pageHeight, transform],
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
      {annotation.render(renderProps)}
    </div>
  );
}

export function PdfViewerAnnotationLayer({
  annotations,
  pageHeight,
  scale,
  transform,
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
              transform={transform}
              onClick={onAnnotationClick}
            />
          )
          : (
            <AnnotationItem
              key={annotation.id}
              annotation={annotation}
              transform={transform}
              onClick={onAnnotationClick}
            />
          )
      )}
    </div>
  );
}
