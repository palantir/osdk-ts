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

import type React from "react";

/** Which sidebar panel to display when the sidebar is open. */
export type SidebarMode = "thumbnails" | "outline";

/** A single item in the PDF document outline (table of contents). */
export interface OutlineItem {
  title: string;
  depth: number;
  pageNumber: number;
  bold: boolean;
  italic: boolean;
}

/** The visual style of an annotation rendered on the PDF. */
export type AnnotationType =
  | "highlight"
  | "underline"
  | "comment"
  | "pin"
  | "custom";

/** A rectangle in PDF coordinate space (origin: bottom-left of page). */
export interface PdfRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Props passed to a custom annotation renderer. */
export interface PdfAnnotationRenderProps {
  annotation: PdfAnnotation;
  scale: number;
  pageHeight: number;
}

/** Common fields shared by all annotation types. */
interface PdfAnnotationBase {
  /** Unique identifier for this annotation */
  id: string;
  /** Page number (1-indexed) */
  page: number;
  /** Coordinates in PDF points (origin: bottom-left of page) */
  rect: PdfRect;
  /** Additional rects for multi-line text highlights. When present, all rects are rendered. */
  rects?: PdfRect[];
  /** Optional label or tooltip text */
  label?: string;
  /** Optional color override (CSS color string) */
  color?: string;
}

/** A built-in annotation type (highlight, underline, comment, pin). */
interface PdfStandardAnnotation extends PdfAnnotationBase {
  /** The type of annotation to render */
  type: "highlight" | "underline" | "comment" | "pin";
}

/** A custom annotation with a user-provided renderer. */
export interface PdfCustomAnnotation extends PdfAnnotationBase {
  /** Must be "custom" for custom-rendered annotations */
  type: "custom";
  /** Render function for the custom annotation content (required for custom type) */
  render: (props: PdfAnnotationRenderProps) => React.ReactNode;
}

/** A single annotation positioned on a specific page of the PDF. */
export type PdfAnnotation = PdfStandardAnnotation | PdfCustomAnnotation;

/** Result passed to the {@link PdfViewerProps.onDownload} callback. */
export type PdfDownloadResult =
  | { success: true; filename: string }
  | { success: false; error: Error };

/** Possible values for a PDF form field. */
export type PdfFormFieldValue = string | boolean | string[];

/** Data emitted when the user creates a text highlight via the highlight editor. */
export interface PdfTextHighlightEvent {
  /** Page number (1-indexed) */
  page: number;
  /** Bounding rects in PDF coordinate space (bottom-left origin) */
  rects: PdfRect[];
  /** The selected text content */
  selectedText: string;
  /** Highlight color as CSS color string */
  color: string;
}

/** Props for the {@link PdfViewer} component. */
export interface PdfViewerProps {
  /** PDF source — URL string or ArrayBuffer */
  src: string | ArrayBuffer;
  /** Annotations to overlay on the PDF */
  annotations?: PdfAnnotation[];
  /**
   * Callback fired when an annotation is clicked.
   *
   * @param annotation - The annotation that was clicked
   * @returns void
   */
  onAnnotationClick?: (annotation: PdfAnnotation) => void;
  /**
   * Callback fired when a download completes or fails.
   *
   * @param result - The download result indicating success with the filename, or failure with an error
   * @returns void
   */
  onDownload?: (result: PdfDownloadResult) => void;
  /**
   * Whether the highlight toggle button is shown in the toolbar.
   * @default false
   */
  enableHighlight?: boolean;
  /**
   * Callback fired when the user creates a text highlight.
   * Only fires when highlight mode is active.
   *
   * @param event - The highlight event with page, rects, text, and color
   * @returns void
   */
  onTextHighlight?: (event: PdfTextHighlightEvent) => void;
  /**
   * Callback fired when the user deletes a highlight via the PDF.js editor UI.
   *
   * @param event - The highlight event that was deleted
   * @returns void
   */
  onHighlightDelete?: (event: PdfTextHighlightEvent) => void;
  /** Initial page number (1-indexed, default 1) */
  initialPage?: number;
  /** Initial zoom scale (default 1.0) */
  initialScale?: number;
  /** Whether the sidebar is initially open (default false) */
  initialSidebarOpen?: boolean;
  /**
   * Whether the download button is shown in the toolbar.
   * @default false
   */
  enableDownload?: boolean;
  /**
   * Which sidebar panel to show: thumbnails or document outline.
   * @default "thumbnails"
   */
  sidebarMode?: SidebarMode;
  /**
   * Custom icon components for each outline depth level (0-indexed).
   * Key 0 = top-level items, 1 = first nesting level, etc.
   * If omitted, no icons are rendered.
   */
  outlineIcons?: Partial<Record<number, React.ComponentType>>;
  /**
   * Initial form field values keyed by field name. Applied when the document loads.
   * Use this to pre-populate form fields when resuming a previously edited PDF.
   */
  formData?: Record<string, PdfFormFieldValue>;
  /**
   * Callback fired when the user clicks the save button in the toolbar.
   * Receives all current form field values keyed by field name.
   *
   * @param data - All form field values keyed by field name
   * @returns void
   */
  onFormSubmit?: (data: Record<string, PdfFormFieldValue>) => void;
  /**
   * Callback fired when any form field value changes.
   *
   * @param fieldName - The name of the field that changed
   * @param value - The new value
   * @returns void
   */
  onFormChange?: (fieldName: string, value: PdfFormFieldValue) => void;
  /** Additional CSS class name for the root element */
  className?: string;
}
