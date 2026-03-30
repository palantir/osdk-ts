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

import { AnnotationEditorType } from "pdfjs-dist";
import type { PDFDocumentProxy } from "pdfjs-dist";
import type { PDFViewer } from "pdfjs-dist/web/pdf_viewer.mjs";
import type { RefObject } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { PdfRect, PdfTextHighlightEvent } from "../types.js";

export interface UsePdfHighlightModeOptions {
  pdfViewerRef: RefObject<PDFViewer | null>;
  document: PDFDocumentProxy | undefined;
  enabled: boolean;
  onTextHighlight?: (event: PdfTextHighlightEvent) => void;
  onHighlightDelete?: (event: PdfTextHighlightEvent) => void;
}

export interface UsePdfHighlightModeResult {
  highlightModeActive: boolean;
  toggleHighlightMode: () => void;
}

/**
 * Converts an RGB array (0.0–1.0 per channel) to a CSS hex color string.
 */
export function rgbArrayToHex(color: number[]): string {
  const r = Math.round(color[0] * 255);
  const g = Math.round(color[1] * 255);
  const b = Math.round(color[2] * 255);
  return `#${r.toString(16).padStart(2, "0")}${
    g.toString(16).padStart(2, "0")
  }${b.toString(16).padStart(2, "0")}`;
}

/**
 * Converts quadPoints (PDF spec format) back to PdfRect[].
 * QuadPoints are 8 values per quad: [x1,y1, x2,y2, x3,y3, x4,y4]
 * representing the four corners of each highlight rect.
 *
 * PDF.js highlight editor produces axis-aligned quads with ordering:
 *   (x1,y1)=top-left, (x2,y2)=top-right, (x3,y3)=bottom-left, (x4,y4)=bottom-right
 * We derive the bounding rect from x1, y1 (top), x2 (right edge), y3 (bottom).
 */
export function quadPointsToRects(
  quadPoints: Float32Array,
): PdfRect[] {
  const rects: PdfRect[] = [];
  for (let i = 0; i < quadPoints.length; i += 8) {
    const x1 = quadPoints[i];
    const y1 = quadPoints[i + 1];
    const x2 = quadPoints[i + 2];
    const y3 = quadPoints[i + 5];

    const x = Math.min(x1, x2);
    const y = Math.min(y1, y3);
    const width = Math.abs(x2 - x1);
    const height = Math.abs(y1 - y3);

    rects.push({ x, y, width, height });
  }
  return rects;
}

/**
 * Hook that manages the PDF.js built-in highlight annotation editor mode.
 * When active, users can select text to create highlights.
 * A callback fires with the annotation details for persistence.
 */
export function usePdfHighlightMode({
  pdfViewerRef,
  document,
  enabled,
  onTextHighlight,
  onHighlightDelete,
}: UsePdfHighlightModeOptions): UsePdfHighlightModeResult {
  const [highlightModeActive, setHighlightModeActive] = useState(false);
  const onTextHighlightRef = useRef(onTextHighlight);
  const onHighlightDeleteRef = useRef(onHighlightDelete);
  const knownEditorIdsRef = useRef<Set<string>>(new Set());
  const editorEventsRef = useRef<Map<string, PdfTextHighlightEvent>>(new Map());

  // Keep callback refs in sync
  useEffect(function syncCallbackRef() {
    onTextHighlightRef.current = onTextHighlight;
    onHighlightDeleteRef.current = onHighlightDelete;
  }, [onTextHighlight, onHighlightDelete]);

  // Toggle the PDF.js annotation editor mode
  useEffect(function syncHighlightMode() {
    const pdfViewer = pdfViewerRef.current;
    if (pdfViewer == null || document == null) {
      return;
    }

    try {
      if (highlightModeActive && enabled) {
        pdfViewer.annotationEditorMode = {
          mode: AnnotationEditorType.HIGHLIGHT,
        };
      } else {
        pdfViewer.annotationEditorMode = {
          mode: AnnotationEditorType.NONE,
        };
      }
    } catch {
      // AnnotationEditorUIManager may not be initialized yet
    }
  }, [pdfViewerRef, document, highlightModeActive, enabled]);

  // Deactivate highlight mode when the feature is disabled
  useEffect(function deactivateOnDisable() {
    if (!enabled) {
      setHighlightModeActive(false);
    }
  }, [enabled]);

  // Clear tracked editors when the document changes (but not on highlight toggle)
  const prevDocumentRef = useRef<PDFDocumentProxy | undefined>(undefined);
  useEffect(function clearOnDocumentChange() {
    if (document !== prevDocumentRef.current) {
      knownEditorIdsRef.current.clear();
      editorEventsRef.current.clear();
      prevDocumentRef.current = document;
    }
  }, [document]);

  // Listen for new highlights being added to annotation storage
  useEffect(function listenForHighlights() {
    if (document == null || !highlightModeActive || !enabled) {
      return;
    }

    const storage = document.annotationStorage;
    const previousOnAnnotationEditor = storage.onAnnotationEditor;

    // Monkey-patch storage.remove to detect highlight deletions.
    // This is fragile but necessary because PDF.js does not emit events
    // when editors are removed. Restore the original on cleanup.
    const originalRemove = storage.remove.bind(storage);
    storage.remove = (key: string) => {
      const savedEvent = editorEventsRef.current.get(key);
      if (savedEvent != null) {
        editorEventsRef.current.delete(key);
        knownEditorIdsRef.current.delete(key);
        onHighlightDeleteRef.current?.(savedEvent);
      }
      originalRemove(key);
    };

    storage.onAnnotationEditor = (type: string | number | null) => {
      // onAnnotationEditor fires with the editor's static _type (string "highlight")
      if (type !== "highlight") {
        return;
      }

      // Find new editors in storage
      const allEntries = storage.getAll();
      if (allEntries == null) {
        return;
      }

      for (const [id, entry] of Object.entries(allEntries)) {
        if (knownEditorIdsRef.current.has(id)) {
          continue;
        }

        // Check if this is a highlight editor with serializable data
        if (
          typeof entry === "object" && entry != null
          && "serialize" in entry
          && typeof entry.serialize === "function"
        ) {
          knownEditorIdsRef.current.add(id);
          const serialized = entry.serialize(false);
          if (
            serialized == null
            || serialized.annotationType !== AnnotationEditorType.HIGHLIGHT
          ) {
            continue;
          }

          const rects = serialized.quadPoints != null
            ? quadPointsToRects(serialized.quadPoints)
            : [];

          if (rects.length === 0) {
            continue;
          }

          const color = Array.isArray(serialized.color)
            ? rgbArrayToHex(serialized.color)
            : "#fff066";

          // Extract text from the editor's aria-label (stores selected text)
          const selectedText = typeof entry.div?.getAttribute === "function"
            ? entry.div.getAttribute("aria-label") ?? ""
            : "";

          const event: PdfTextHighlightEvent = {
            page: serialized.pageIndex + 1,
            rects,
            selectedText,
            color,
          };

          // Store the event so we can provide it back on delete
          editorEventsRef.current.set(id, event);

          onTextHighlightRef.current?.(event);
        }
      }
    };

    return () => {
      storage.onAnnotationEditor = previousOnAnnotationEditor;
      storage.remove = originalRemove;
    };
  }, [document, highlightModeActive, enabled]);

  const toggleHighlightMode = useCallback(() => {
    setHighlightModeActive((prev) => !prev);
  }, []);

  return {
    highlightModeActive,
    toggleHighlightMode,
  };
}
