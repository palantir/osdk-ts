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

import type { PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";
import { TextLayer } from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { PdfViewerAnnotationLayer } from "./PdfViewerAnnotationLayer.js";
import styles from "./PdfViewerPage.module.css";
import type { PdfAnnotation } from "./types.js";

interface PdfViewerPageProps {
  document: PDFDocumentProxy;
  pageNumber: number;
  scale: number;
  annotations: PdfAnnotation[];
  onAnnotationClick?: (annotation: PdfAnnotation) => void;
  onTextLayerRendered?: (pageNumber: number, textDivs: HTMLElement[]) => void;
}

const DEVICE_PIXEL_RATIO = typeof window !== "undefined"
  ? window.devicePixelRatio || 1
  : 1;

export function PdfViewerPage({
  document,
  pageNumber,
  scale,
  annotations,
  onAnnotationClick,
  onTextLayerRendered,
}: PdfViewerPageProps): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const [pageProxy, setPageProxy] = useState<PDFPageProxy | undefined>(
    undefined,
  );
  const [pageHeight, setPageHeight] = useState(0);
  const renderTaskRef = useRef<ReturnType<PDFPageProxy["render"]> | null>(null);
  const textLayerInstanceRef = useRef<TextLayer | null>(null);

  // Load the page
  useEffect(() => {
    let cancelled = false;
    void document.getPage(pageNumber).then((page) => {
      if (!cancelled) {
        setPageProxy(page);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [document, pageNumber]);

  // Render canvas + text layer
  const renderPage = useCallback(async () => {
    if (
      pageProxy == null || canvasRef.current == null
      || textLayerRef.current == null
    ) {
      return;
    }

    const viewport = pageProxy.getViewport({ scale });
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (context == null) {
      return;
    }

    // Set canvas size accounting for device pixel ratio
    canvas.width = Math.floor(viewport.width * DEVICE_PIXEL_RATIO);
    canvas.height = Math.floor(viewport.height * DEVICE_PIXEL_RATIO);
    canvas.style.width = `${Math.floor(viewport.width)}px`;
    canvas.style.height = `${Math.floor(viewport.height)}px`;

    setPageHeight(viewport.height / scale);

    // Set --scale-factor for pdf.js text layer positioning (CSS pixels, not device pixels)
    textLayerRef.current.style.setProperty(
      "--scale-factor",
      String(viewport.scale),
    );

    // Cancel previous render
    if (renderTaskRef.current != null) {
      renderTaskRef.current.cancel();
    }

    // Scale context for high-DPI
    context.setTransform(DEVICE_PIXEL_RATIO, 0, 0, DEVICE_PIXEL_RATIO, 0, 0);

    // Render PDF page to canvas
    const renderTask = pageProxy.render({
      canvasContext: context,
      viewport,
    });
    renderTaskRef.current = renderTask;

    try {
      await renderTask.promise;
    } catch (err: unknown) {
      if (err instanceof Error && err.message.includes("cancelled")) {
        return;
      }
      throw err;
    }

    // Cancel previous text layer
    if (textLayerInstanceRef.current != null) {
      textLayerInstanceRef.current.cancel();
    }

    // Clear previous text layer content
    const textLayerDiv = textLayerRef.current;
    textLayerDiv.innerHTML = "";

    // Render text layer
    const textContent = await pageProxy.getTextContent();
    const textLayer = new TextLayer({
      textContentSource: textContent,
      container: textLayerDiv,
      viewport,
    });
    textLayerInstanceRef.current = textLayer;

    await textLayer.render();

    // Notify parent about rendered text divs (for search)
    if (onTextLayerRendered != null) {
      const textDivs = Array.from(
        textLayerDiv.querySelectorAll("span"),
      ) as HTMLElement[];
      onTextLayerRendered(pageNumber, textDivs);
    }
  }, [pageProxy, scale, pageNumber, onTextLayerRendered]);

  useEffect(() => {
    void renderPage();

    return () => {
      if (renderTaskRef.current != null) {
        renderTaskRef.current.cancel();
        renderTaskRef.current = null;
      }
      if (textLayerInstanceRef.current != null) {
        textLayerInstanceRef.current.cancel();
        textLayerInstanceRef.current = null;
      }
    };
  }, [renderPage]);

  const viewport = pageProxy?.getViewport({ scale });
  const width = viewport != null ? Math.floor(viewport.width) : 0;
  const height = viewport != null ? Math.floor(viewport.height) : 0;

  return (
    <div
      className={styles.pageContainer}
      style={{ width, height }}
      data-page-number={pageNumber}
    >
      <canvas ref={canvasRef} className={styles.canvasLayer} />
      <div ref={textLayerRef} className="textLayer" />
      {annotations.length > 0 && (
        <PdfViewerAnnotationLayer
          annotations={annotations}
          pageHeight={pageHeight}
          scale={scale}
          onAnnotationClick={onAnnotationClick}
        />
      )}
    </div>
  );
}
