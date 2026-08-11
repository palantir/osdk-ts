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

import type { BaseImageViewerProps } from "../images/image-viewer/ImageViewerApi.js";
import type { BaseTiffViewerProps } from "../images/tiff-viewer/TiffViewerApi.js";
import type { BasePdfViewerProps } from "../pdf-viewer/PdfViewerApi.js";
import type { BaseVideoViewerProps } from "../video-viewer/VideoViewerApi.js";

export enum ViewerType {
  Pdf = "pdf",
  Tiff = "tiff",
  Image = "image",
  Video = "video",
  Markdown = "markdown",
  Spreadsheet = "spreadsheet",
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
  pdfViewerProps?: Partial<Omit<BasePdfViewerProps, "src" | "className">>;
  /** Props forwarded to BaseImageViewer when rendering images
   * @default undefined */
  imageViewerProps?: Partial<Omit<BaseImageViewerProps, "src" | "className">>;
  /** Props forwarded to BaseVideoViewer when rendering video
   * @default undefined */
  videoViewerProps?: Partial<Omit<BaseVideoViewerProps, "src" | "className">>;
  /** Props forwarded to BaseTiffViewer when rendering TIFF
   * @default undefined */
  tiffViewerProps?: Partial<Omit<BaseTiffViewerProps, "content" | "className">>;
  /** Alias for `tiffViewerProps`, which takes precedence when set to a non-nullish value.
   * @deprecated Use `tiffViewerProps` instead.
   * @default undefined */
  tiffRendererProps?: Partial<
    Omit<BaseTiffViewerProps, "content" | "className">
  >;
  /** File name hint for MIME type detection (e.g. "scan.tif"). Used to detect
   *  TIFF files when the MIME type is ambiguous (e.g. application/octet-stream).
   * @default undefined */
  fileName?: string;
  /** When true, multi-page TIFF files are converted to PDF via MIO transform API
   * @default false */
  enableTiffToPdf?: boolean;
}
