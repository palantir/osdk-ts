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

import type {
  PdfAnnotation,
  PdfTextHighlightEvent,
  PdfViewerHandle,
} from "@osdk/react-components/experimental";
import { BasePdfViewer } from "@osdk/react-components/experimental";
import React, { useCallback, useRef, useState } from "react";

type AnnotationWithText = PdfAnnotation & { selectedText: string };

interface AnnotationSidebarItemProps {
  annotation: AnnotationWithText;
  onDelete: (id: string) => void;
}

function AnnotationSidebarItem(
  { annotation, onDelete }: AnnotationSidebarItemProps,
): React.ReactElement {
  const handleDelete = useCallback(() => {
    onDelete(annotation.id);
  }, [onDelete, annotation.id]);

  return (
    <div
      style={{
        padding: 8,
        marginBottom: 8,
        backgroundColor: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: 4,
        borderLeft: `3px solid ${annotation.color ?? "#fff066"}`,
      }}
    >
      <div style={{ fontSize: 12, color: "#666", marginBottom: 4 }}>
        Page {annotation.page}
      </div>
      <div
        style={{
          fontSize: 13,
          marginBottom: 8,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        &ldquo;{annotation.selectedText}&rdquo;
      </div>
      <button
        onClick={handleDelete}
        style={{
          fontSize: 12,
          color: "#c00",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        Delete
      </button>
    </div>
  );
}

interface AnnotationSidebarProps {
  annotations: AnnotationWithText[];
  onDelete: (id: string) => void;
}

function AnnotationSidebar(
  { annotations, onDelete }: AnnotationSidebarProps,
): React.ReactElement {
  return (
    <div
      style={{
        width: 260,
        borderLeft: "1px solid #e0e0e0",
        padding: 12,
        overflowY: "auto",
        backgroundColor: "#fafafa",
        flexShrink: 0,
      }}
    >
      <h3 style={{ margin: "0 0 12px", fontSize: 14 }}>
        Annotations ({annotations.length})
      </h3>
      {annotations.length === 0 && (
        <p style={{ color: "#888", fontSize: 13 }}>
          Enable highlight mode and select text to create annotations.
        </p>
      )}
      {annotations.map((annotation) => (
        <AnnotationSidebarItem
          key={annotation.id}
          annotation={annotation}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export function AnnotationCreatorDemo(
  { src }: { src: string },
): React.ReactElement {
  const [annotations, setAnnotations] = useState<AnnotationWithText[]>([]);
  const viewerRef = useRef<PdfViewerHandle>(null);

  const handleTextHighlight = useCallback((event: PdfTextHighlightEvent) => {
    // Remove the pdfjs editor highlight so we render via annotations prop only
    viewerRef.current?.deleteHighlight(event.editorId);

    const newAnnotation: AnnotationWithText = {
      id: crypto.randomUUID(),
      type: "highlight",
      page: event.page,
      rect: event.rects[0],
      rects: event.rects,
      color: event.color,
      label: event.selectedText,
      selectedText: event.selectedText,
    };
    setAnnotations((prev) => [...prev, newAnnotation]);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setAnnotations((prev) => prev.filter((a) => a.id !== id));
  }, []);

  return (
    <div style={{ display: "flex", height: "600px" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <BasePdfViewer
          ref={viewerRef}
          src={src}
          enableHighlight
          annotations={annotations}
          onTextHighlight={handleTextHighlight}
        />
      </div>
      <AnnotationSidebar annotations={annotations} onDelete={handleDelete} />
    </div>
  );
}
