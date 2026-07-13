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

import { Spin } from "@blueprintjs/icons";
import type { Media } from "@osdk/api";
import React from "react";

import { TiffViewerMedia } from "../images/tiff-renderer/TiffViewerMedia.js";
import type { TiffRendererProps } from "../images/tiff-renderer/types.js";
import { BasePdfViewer } from "../pdf-viewer/PdfViewer.js";
import type { PdfViewerProps } from "../pdf-viewer/types.js";
import { ViewerType } from "./DocumentViewerApi.js";
import { useTiffToPdf } from "./hooks/useTiffToPdf.js";

import styles from "./DocumentViewer.module.css";

interface TiffDocumentViewerProps {
  media: Media;
  className: string;
  enableTiffToPdf: boolean;
  tiffRendererProps?: Partial<Omit<TiffRendererProps, "content">>;
  pdfViewerProps?: Partial<Omit<PdfViewerProps, "src">>;
}

export function TiffDocumentViewer({
  media,
  className,
  enableTiffToPdf,
  tiffRendererProps,
  pdfViewerProps,
}: TiffDocumentViewerProps): React.ReactElement {
  const { viewerType, pdfData, loading } = useTiffToPdf(media, enableTiffToPdf);

  if (loading) {
    return (
      <div className={className}>
        <div className={styles.loadingContainer}>
          <Spin className={styles.spinnerIcon} />
          Converting document…
        </div>
      </div>
    );
  }

  if (viewerType === ViewerType.Pdf && pdfData != null) {
    return (
      <BasePdfViewer src={pdfData} className={className} {...pdfViewerProps} />
    );
  }

  return (
    <TiffViewerMedia
      media={media}
      className={className}
      {...tiffRendererProps}
    />
  );
}
