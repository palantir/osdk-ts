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
import type { PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { DEVICE_PIXEL_RATIO, THUMBNAIL_SCALE } from "./constants.js";
import styles from "./PdfViewerThumbnail.module.css";

interface PdfViewerThumbnailProps {
  document: PDFDocumentProxy;
  pageNumber: number;
  isActive: boolean;
  onClick: () => void;
}

export function PdfViewerThumbnail({
  document,
  pageNumber,
  isActive,
  onClick,
}: PdfViewerThumbnailProps): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderTaskRef = useRef<ReturnType<PDFPageProxy["render"]> | null>(null);
  const [dimensions, setDimensions] = useState<
    { width: number; height: number } | undefined
  >(undefined);

  useEffect(() => {
    let cancelled = false;

    void document.getPage(pageNumber).then((page) => {
      if (cancelled || canvasRef.current == null) {
        return;
      }

      const viewport = page.getViewport({ scale: THUMBNAIL_SCALE });
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context == null) {
        return;
      }

      canvas.width = Math.floor(viewport.width * DEVICE_PIXEL_RATIO);
      canvas.height = Math.floor(viewport.height * DEVICE_PIXEL_RATIO);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;

      setDimensions({
        width: Math.floor(viewport.width),
        height: Math.floor(viewport.height),
      });

      if (renderTaskRef.current != null) {
        renderTaskRef.current.cancel();
      }

      context.setTransform(
        DEVICE_PIXEL_RATIO,
        0,
        0,
        DEVICE_PIXEL_RATIO,
        0,
        0,
      );

      const renderTask = page.render({
        canvasContext: context,
        viewport,
      });
      renderTaskRef.current = renderTask;

      void renderTask.promise.catch((err: unknown) => {
        if (err instanceof Error && err.message.includes("cancelled")) {
          return;
        }
        throw err;
      });
    });

    return () => {
      cancelled = true;
      if (renderTaskRef.current != null) {
        renderTaskRef.current.cancel();
        renderTaskRef.current = null;
      }
    };
  }, [document, pageNumber]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
    },
    [onClick],
  );

  const containerClassName = classnames(
    styles.thumbnailContainer,
    isActive && styles.active,
  );

  return (
    <div
      className={containerClassName}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Page ${pageNumber}`}
      aria-current={isActive ? "page" : undefined}
      style={dimensions != null
        ? { width: dimensions.width, height: dimensions.height }
        : undefined}
    >
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
