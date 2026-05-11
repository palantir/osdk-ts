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

import React, { useMemo } from "react";
import type { AnnotationPortalTarget } from "../hooks/usePdfAnnotationPortals.js";
import type { PdfAnnotation } from "../types.js";
import { PdfViewerAnnotationLayer } from "./PdfViewerAnnotationLayer.js";

export interface PdfAnnotationOverlayProps {
  target: AnnotationPortalTarget;
  annotations: PdfAnnotation[];
  onAnnotationClick?: (annotation: PdfAnnotation) => void;
}

/**
 * Per-page annotation overlay rendered as a sibling of pdfjs's content
 * inside the scroll container. The position is taken from the page's
 * measured rect in scroll-container content coordinates (see
 * {@link AnnotationPortalTarget}), so the overlay scrolls and zooms with
 * the page without ever being a child of pdfjs-owned DOM.
 *
 * - `pointer-events: none` on the wrapper lets text selection, link
 *   navigation, and other pdfjs interactions pass through; individual
 *   annotation elements re-enable pointer events via their own CSS.
 * - `z-index: 1` ensures the overlay paints above pdfjs's canvas /
 *   textLayer / annotationLayer regardless of pdfjs CSS changes.
 * - The style object is memoized so React skips reapplying inline styles
 *   on renders where only unrelated props change.
 */
export const PdfAnnotationOverlay: React.FC<PdfAnnotationOverlayProps> = ({
  target,
  annotations,
  onAnnotationClick,
}) => {
  const style = useMemo<React.CSSProperties>(() => ({
    position: "absolute",
    left: target.left,
    top: target.top,
    width: target.width,
    height: target.height,
    pointerEvents: "none",
    zIndex: 1,
  }), [target.left, target.top, target.width, target.height]);

  return (
    <div style={style} aria-hidden={false}>
      <PdfViewerAnnotationLayer
        annotations={annotations}
        pageHeight={target.pageHeight}
        scale={target.scale}
        onAnnotationClick={onAnnotationClick}
      />
    </div>
  );
};
