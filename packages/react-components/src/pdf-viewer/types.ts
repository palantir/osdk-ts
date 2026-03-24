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

/** The visual style of an annotation rendered on the PDF. */
export type AnnotationType = "highlight" | "underline" | "comment" | "pin";

/** A single annotation positioned on a specific page of the PDF. */
export interface PdfAnnotation {
  /** Unique identifier for this annotation */
  id: string;
  /** The type of annotation to render */
  type: AnnotationType;
  /** Page number (1-indexed) */
  page: number;
  /** Coordinates in PDF points (origin: bottom-left of page) */
  rect: { x: number; y: number; width: number; height: number };
  /** Optional label or tooltip text */
  label?: string;
  /** Optional color override (CSS color string) */
  color?: string;
}

/** Props for the {@link PdfViewer} component. */
export interface PdfViewerProps {
  /** PDF source — URL string or ArrayBuffer */
  src: string | ArrayBuffer;
  /** Annotations to overlay on the PDF, keyed by page number (1-indexed) */
  annotations?: Record<number, PdfAnnotation[]>;
  /**
   * Callback fired when an annotation is clicked.
   *
   * @param annotation - The annotation that was clicked
   * @returns void
   */
  onAnnotationClick?: (annotation: PdfAnnotation) => void;
  /** Initial page number (1-indexed, default 1) */
  initialPage?: number;
  /** Initial zoom scale (default 1.0) */
  initialScale?: number;
  /** Whether the sidebar is initially open (default false) */
  initialSidebarOpen?: boolean;
  /** Whether the download button is shown in the toolbar (default false) */
  downloadEnabled?: boolean;
  /** Additional CSS class name for the root element */
  className?: string;
}
