/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { isEqual } from "lodash-es";
import React, {
  createContext,
  type ReactElement,
  type ReactNode,
  useContext,
  useRef,
} from "react";

/**
 * All user-facing strings rendered by the document viewer itself.
 *
 * Strings rendered by the viewer that `DocumentViewer` delegates to for a
 * given MIME type — `PdfViewer`, `ImageViewer`, `SpreadsheetViewer`,
 * `EmailViewer`, `VideoViewer`, `XmlViewer`, `MarkdownRenderer` and
 * `TiffRenderer` — are owned by those components and are not covered here.
 */
export interface DocumentViewerLabels {
  /**
   * Shown in place of a viewer when the resolved MIME type has no matching
   * viewer.
   * @default (mimeType) => `Unsupported file type: ${mimeType}`
   */
  unsupportedFileType: (mimeType: string) => string;
  /**
   * Shown while a multi-page TIFF is being converted to PDF, which only
   * happens when `enableTiffToPdf` is set.
   * @default "Converting document…"
   */
  convertingDocument: string;
}

export const DEFAULT_DOCUMENT_VIEWER_LABELS: DocumentViewerLabels = {
  unsupportedFileType: (mimeType) => `Unsupported file type: ${mimeType}`,
  convertingDocument: "Converting document…",
};

const DocumentViewerLabelsContext = createContext<DocumentViewerLabels>(
  DEFAULT_DOCUMENT_VIEWER_LABELS,
);

export interface DocumentViewerLabelsProviderProps {
  labels?: Partial<DocumentViewerLabels>;
  children: ReactNode;
}

/**
 * Supplies overridden {@link DocumentViewerLabels} to descendant document
 * viewer sub-components via context. Merges `labels` over the labels from the
 * nearest ancestor provider, so an outer and an inner provider can each
 * override a different subset.
 *
 * The provided value keeps a stable identity across renders whenever the
 * merged labels are equal, so callers can pass an inline `labels` object
 * without re-rendering every label consumer.
 */
export function DocumentViewerLabelsProvider({
  labels,
  children,
}: DocumentViewerLabelsProviderProps): ReactElement {
  const parent = useContext(DocumentViewerLabelsContext);
  const merged = labels != null ? { ...parent, ...labels } : parent;

  // Reuse the previous value when the merge is equal so an inline `labels`
  // object (new identity each render) doesn't churn the context.
  const stableRef = useRef(merged);
  if (!isEqual(stableRef.current, merged)) {
    stableRef.current = merged;
  }

  return (
    <DocumentViewerLabelsContext.Provider value={stableRef.current}>
      {children}
    </DocumentViewerLabelsContext.Provider>
  );
}

/**
 * Returns the fully-resolved {@link DocumentViewerLabels} for the current
 * subtree. When no {@link DocumentViewerLabelsProvider} is present, returns
 * {@link DEFAULT_DOCUMENT_VIEWER_LABELS}.
 */
export function useDocumentViewerLabels(): DocumentViewerLabels {
  return useContext(DocumentViewerLabelsContext);
}

/**
 * Wraps `Inner` so it accepts an optional `labels` prop and supplies the merged
 * {@link DocumentViewerLabels} to its subtree.
 *
 * For generic components use {@link DocumentViewerLabelsProvider} directly to
 * preserve their type parameters.
 */
export function withDocumentViewerLabels<P extends object>(
  Inner: React.ComponentType<P>,
): React.FC<P & { labels?: Partial<DocumentViewerLabels> }> {
  function LabelledComponent(
    props: P & { labels?: Partial<DocumentViewerLabels> },
  ): ReactElement {
    const { labels, ...rest } = props;
    return (
      <DocumentViewerLabelsProvider labels={labels}>
        <Inner {...(rest as unknown as P)} />
      </DocumentViewerLabelsProvider>
    );
  }
  LabelledComponent.displayName = `withDocumentViewerLabels(${Inner.displayName})`;
  return LabelledComponent;
}
