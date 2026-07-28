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

import type { Media } from "@osdk/api";

import type { BaseEmailViewerProps } from "../email-viewer/EmailViewerApi.js";
import type { BaseExcelViewerProps } from "../excel-viewer/ExcelViewerApi.js";
import type { BaseImageViewerProps } from "../images/image-viewer/ImageViewerApi.js";
import type { TiffRendererProps } from "../images/tiff-renderer/types.js";
import type { MarkdownRendererProps } from "../markdown-renderer/MarkdownRenderer.js";
import type { PdfViewerProps } from "../pdf-viewer/types.js";
import type { BaseVideoViewerProps } from "../video-viewer/VideoViewerApi.js";
import type { BaseXmlViewerProps } from "../xml-viewer/XmlViewerApi.js";

export enum ViewerType {
  Pdf = "pdf",
  Tiff = "tiff",
  Image = "image",
  Video = "video",
  Markdown = "markdown",
  Excel = "excel",
  Email = "email",
  Xml = "xml",
  Unsupported = "unsupported",
}

export interface DocumentViewerProps {
  /** The Media object to render */
  media: Media;
  /** Additional CSS class name for the root element
   * @default undefined */
  className?: string;
  /** Override the auto-detected MIME type
   * @default undefined */
  mimeTypeOverride?: string;
  /** Props forwarded to BasePdfViewer when rendering PDF
   * @default undefined */
  pdfViewerProps?: Partial<Omit<PdfViewerProps, "src" | "className">>;
  /** Props forwarded to BaseImageViewer when rendering images
   * @default undefined */
  imageViewerProps?: Partial<Omit<BaseImageViewerProps, "src" | "className">>;
  /** Props forwarded to BaseVideoViewer when rendering video
   * @default undefined */
  videoViewerProps?: Partial<Omit<BaseVideoViewerProps, "src" | "className">>;
  /** Props forwarded to TiffRenderer when rendering TIFF
   * @default undefined */
  tiffRendererProps?: Partial<Omit<TiffRendererProps, "content" | "className">>;
  /** Props forwarded to MarkdownRenderer when rendering markdown
   * @default undefined */
  markdownRendererProps?: Partial<
    Omit<MarkdownRendererProps, "content" | "className">
  >;
  /** Props forwarded to BaseExcelViewer when rendering Excel
   * @default undefined */
  excelViewerProps?: Partial<
    Omit<BaseExcelViewerProps, "spreadsheet" | "className">
  >;
  /** Props forwarded to BaseEmailViewer when rendering EML
   * @default undefined */
  emailViewerProps?: Partial<Omit<BaseEmailViewerProps, "email" | "className">>;
  /** Props forwarded to BaseXmlViewer when rendering XML
   * @default undefined */
  xmlViewerProps?: Partial<Omit<BaseXmlViewerProps, "content" | "className">>;
  /** File name hint for MIME type detection (e.g. "scan.tif"). Used to detect
   *  TIFF files when the MIME type is ambiguous (e.g. application/octet-stream).
   * @default undefined */
  fileName?: string;
  /** When true, multi-page TIFF files are converted to PDF via MIO transform API
   * @default false */
  enableTiffToPdf?: boolean;
}
