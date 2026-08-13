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

/* cspell:words openxmlformats officedocument wordprocessingml spreadsheetml */

import { Document as DocumentIcon } from "@blueprintjs/icons";
import classnames from "classnames";
import React, { useMemo } from "react";

import { EmailViewer } from "../email-viewer/EmailViewer.js";
import { ImageViewer } from "../images/image-viewer/ImageViewer.js";
import { TiffViewer } from "../images/tiff-viewer/TiffViewer.js";
import { MarkdownViewer } from "../markdown-viewer/MarkdownViewer.js";
import { PdfViewer } from "../pdf-viewer/PdfViewer.js";
import { assertUnreachable } from "../shared/assertUnreachable.js";
import { SpreadsheetViewer } from "../spreadsheet-viewer/SpreadsheetViewer.js";
import { VideoViewer } from "../video-viewer/VideoViewer.js";
import { XmlViewer } from "../xml-viewer/XmlViewer.js";
import type { DocumentViewerProps } from "./DocumentViewerApi.js";
import { ViewerType } from "./DocumentViewerApi.js";
import { TiffDocumentViewer } from "./TiffDocumentViewer.js";

import styles from "./DocumentViewer.module.css";

const IMAGE_MIME_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/gif",
  "image/svg+xml",
  "image/webp",
  "image/bmp",
]);

const MARKDOWN_MIME_TYPES = new Set(["text/markdown", "text/x-markdown"]);

const XML_MIME_TYPES = new Set(["application/xml", "text/xml"]);

function isTiffFile(mimeType: string, fileName: string | undefined): boolean {
  if (mimeType === "image/tiff") {
    return true;
  }
  const lowered = fileName?.toLowerCase();
  return (
    lowered?.endsWith(".tif") === true || lowered?.endsWith(".tiff") === true
  );
}

function getViewerType(
  mimeType: string,
  fileName: string | undefined,
): ViewerType {
  if (mimeType === "application/pdf") {
    return ViewerType.Pdf;
  }
  if (isTiffFile(mimeType, fileName)) {
    return ViewerType.Tiff;
  }
  if (IMAGE_MIME_TYPES.has(mimeType)) {
    return ViewerType.Image;
  }
  if (mimeType.startsWith("video/")) {
    return ViewerType.Video;
  }
  if (MARKDOWN_MIME_TYPES.has(mimeType)) {
    return ViewerType.Markdown;
  }
  if (
    mimeType ===
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ) {
    return ViewerType.Spreadsheet;
  }
  if (mimeType === "message/rfc822") {
    return ViewerType.Email;
  }
  if (XML_MIME_TYPES.has(mimeType)) {
    return ViewerType.Xml;
  }
  return ViewerType.Unsupported;
}

export function DocumentViewer({
  media,
  className,
  mimeTypeOverride,
  pdfViewerProps,
  imageViewerProps,
  videoViewerProps,
  tiffViewerProps,
  tiffRendererProps,
  fileName,
  enableTiffToPdf = false,
}: DocumentViewerProps): React.ReactElement {
  const mimeType = mimeTypeOverride ?? media.getMediaReference().mimeType;
  const viewerType = useMemo(
    () => getViewerType(mimeType, fileName),
    [mimeType, fileName],
  );
  const rootClassName = classnames(styles.container, className);

  // `tiffRendererProps` is the deprecated name for `tiffViewerProps`. Coalescing
  // (rather than merging) keeps the alias behaving exactly like its replacement
  // and avoids creating a new object identity on every render.
  const resolvedTiffViewerProps = tiffViewerProps ?? tiffRendererProps;

  switch (viewerType) {
    case ViewerType.Pdf:
      return (
        <PdfViewer
          media={media}
          className={rootClassName}
          {...pdfViewerProps}
        />
      );
    case ViewerType.Tiff:
      if (enableTiffToPdf) {
        return (
          <TiffDocumentViewer
            media={media}
            className={rootClassName}
            enableTiffToPdf={enableTiffToPdf}
            tiffViewerProps={resolvedTiffViewerProps}
            pdfViewerProps={pdfViewerProps}
          />
        );
      }
      return (
        <TiffViewer
          media={media}
          className={rootClassName}
          {...resolvedTiffViewerProps}
        />
      );
    case ViewerType.Image:
      return (
        <ImageViewer
          media={media}
          className={rootClassName}
          {...imageViewerProps}
        />
      );
    case ViewerType.Video:
      return (
        <VideoViewer
          media={media}
          className={rootClassName}
          {...videoViewerProps}
        />
      );
    case ViewerType.Markdown:
      return <MarkdownViewer media={media} className={rootClassName} />;
    case ViewerType.Spreadsheet:
      return <SpreadsheetViewer media={media} className={rootClassName} />;
    case ViewerType.Email:
      return <EmailViewer media={media} className={rootClassName} />;
    case ViewerType.Xml:
      return <XmlViewer media={media} className={rootClassName} />;
    case ViewerType.Unsupported:
      return (
        <div className={rootClassName}>
          <div className={styles.unsupportedContainer}>
            <DocumentIcon className={styles.unsupportedIcon} />
            Unsupported file type: {mimeType}
          </div>
        </div>
      );
    default:
      assertUnreachable(viewerType);
  }
}
