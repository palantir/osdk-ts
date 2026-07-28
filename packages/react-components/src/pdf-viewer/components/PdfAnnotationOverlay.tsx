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

export const PdfAnnotationOverlay: React.FC<PdfAnnotationOverlayProps> = ({
  target,
  annotations,
  onAnnotationClick,
}) => {
  const style = useMemo<React.CSSProperties>(
    () => ({
      position: "absolute",
      left: target.left,
      top: target.top,
      width: target.width,
      height: target.height,
      pointerEvents: "none",
      zIndex: 1,
    }),
    [target.left, target.top, target.width, target.height]
  );

  return (
    <div style={style}>
      <PdfViewerAnnotationLayer
        annotations={annotations}
        pageHeight={target.pageHeight}
        scale={target.scale}
        transform={target.transform}
        onAnnotationClick={onAnnotationClick}
      />
    </div>
  );
};
