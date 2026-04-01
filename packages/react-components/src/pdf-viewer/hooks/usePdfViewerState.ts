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

import { useCallback, useEffect, useMemo, useState } from "react";
import { MAX_SCALE, MIN_SCALE, SCALE_STEP } from "../constants.js";
import type { PdfDownloadResult, SidebarMode } from "../types.js";
import { usePdfOutline } from "./usePdfOutline.js";
import type {
  UsePdfViewerCoreOptions,
  UsePdfViewerCoreResult,
} from "./usePdfViewerCore.js";
import { usePdfViewerCore } from "./usePdfViewerCore.js";
import type { UsePdfViewerSearchResult } from "./usePdfViewerSearch.js";
import { usePdfViewerSearch } from "./usePdfViewerSearch.js";

export interface UsePdfViewerStateOptions extends UsePdfViewerCoreOptions {
  /** Whether the sidebar is initially open (default false) */
  initialSidebarOpen?: boolean;
  /** Which sidebar panel to show (default "thumbnails") */
  sidebarMode?: SidebarMode;
  /** Callback fired when a download completes or fails */
  onDownload?: (result: PdfDownloadResult) => void;
}

export interface UsePdfViewerStateResult extends UsePdfViewerCoreResult {
  /** Zoom in by one step */
  zoomIn: () => void;
  /** Zoom out by one step */
  zoomOut: () => void;

  /** Current rotation in degrees (0, 90, 180, 270) */
  rotation: number;
  /** Rotate 90 degrees counter-clockwise */
  rotateLeft: () => void;
  /** Rotate 90 degrees clockwise */
  rotateRight: () => void;

  /** Whether the sidebar panel is open */
  sidebarOpen: boolean;
  /** Which sidebar panel is active */
  sidebarMode: SidebarMode;
  /** Change the active sidebar panel */
  setSidebarMode: (mode: SidebarMode) => void;
  /** Toggle sidebar open/closed */
  toggleSidebar: () => void;

  /** Search state and actions */
  search: UsePdfViewerSearchResult;

  /** Document outline items (from bookmarks or text extraction) */
  outlineItems: ReturnType<typeof usePdfOutline>;

  /** Download the PDF as a file */
  download: (filename?: string) => void;
}

export function usePdfViewerState({
  src,
  initialPage,
  initialScale,
  initialSidebarOpen = false,
  sidebarMode: sidebarModeProp = "thumbnails",
  onDownload,
}: UsePdfViewerStateOptions): UsePdfViewerStateResult {
  const core = usePdfViewerCore({ src, initialPage, initialScale });

  const [rotation, setRotation] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(initialSidebarOpen);
  const [sidebarMode, setSidebarMode] = useState<SidebarMode>(sidebarModeProp);

  const search = usePdfViewerSearch(
    core.eventBusRef,
    core.findControllerRef,
    core.document,
  );

  const outlineItems = usePdfOutline(core.document);

  // Sync sidebarMode prop changes to state
  useEffect(function syncSidebarMode() {
    setSidebarMode(sidebarModeProp);
  }, [sidebarModeProp]);

  // Sync rotation → PDFViewer
  useEffect(function syncRotationToViewer() {
    const pdfViewer = core.pdfViewerRef.current;
    if (pdfViewer != null) {
      pdfViewer.pagesRotation = rotation;
    }
  }, [core.pdfViewerRef, rotation]);

  // Ctrl+F keyboard shortcut
  useEffect(function registerSearchShortcut() {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "f") {
        e.preventDefault();
        search.openSearch();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [search.openSearch]);

  const zoomIn = useCallback(() => {
    core.setScale(Math.min(core.scale + SCALE_STEP, MAX_SCALE));
  }, [core.scale, core.setScale]);

  const zoomOut = useCallback(() => {
    core.setScale(Math.max(core.scale - SCALE_STEP, MIN_SCALE));
  }, [core.scale, core.setScale]);

  const rotateLeft = useCallback(() => {
    setRotation((prev) => (prev - 90 + 360) % 360);
  }, []);

  const rotateRight = useCallback(() => {
    setRotation((prev) => (prev + 90) % 360);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const download = useCallback((filename?: string) => {
    if (core.document == null) {
      return;
    }
    void core.document.getData().then((data) => {
      const blob = new Blob([data.buffer as ArrayBuffer], {
        type: "application/pdf",
      });
      const url = URL.createObjectURL(blob);
      const resolvedFilename = resolveDownloadFilename(src, filename);
      const a = globalThis.document.createElement("a");
      a.href = url;
      a.download = resolvedFilename;
      a.click();
      URL.revokeObjectURL(url);
      onDownload?.({ success: true, filename: resolvedFilename });
    }).catch((err: unknown) => {
      onDownload?.({
        success: false,
        error: err instanceof Error
          ? err
          : new Error("Failed to download PDF"),
      });
    });
  }, [core.document, src, onDownload]);

  return useMemo((): UsePdfViewerStateResult => ({
    ...core,
    zoomIn,
    zoomOut,
    rotation,
    rotateLeft,
    rotateRight,
    sidebarOpen,
    sidebarMode,
    setSidebarMode,
    toggleSidebar,
    search,
    outlineItems,
    download,
  }), [
    core,
    zoomIn,
    zoomOut,
    rotation,
    rotateLeft,
    rotateRight,
    sidebarOpen,
    sidebarMode,
    setSidebarMode,
    toggleSidebar,
    search,
    outlineItems,
    download,
  ]);
}

/** Derive a download filename from an explicit name, the src URL, or a fallback. */
function resolveDownloadFilename(
  src: string | ArrayBuffer,
  filename: string | undefined,
): string {
  if (filename != null) {
    return filename;
  }
  if (typeof src === "string") {
    return src.split("/").pop()?.split("?")[0] || "document.pdf";
  }
  return "document.pdf";
}
