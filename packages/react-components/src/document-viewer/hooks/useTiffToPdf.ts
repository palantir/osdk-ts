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

/* cspell:words ifds */

import type { Media } from "@osdk/api";
import { __EXPERIMENTAL__NOT_SUPPORTED_YET__transformAndWait } from "@osdk/api/unstable";
import { useOsdkClient } from "@osdk/react";
import { useEffect, useRef, useState } from "react";
import * as UTIF from "utif";
import { ViewerType } from "../DocumentViewerApi.js";

export interface UseTiffToPdfResult {
  /** Which viewer to use: Tiff for single-page, Pdf for multi-page */
  viewerType: ViewerType.Tiff | ViewerType.Pdf;
  /** PDF content as ArrayBuffer when multi-page TIFF was converted */
  pdfData: ArrayBuffer | undefined;
  loading: boolean;
  error: Error | undefined;
}

const DISABLED_RESULT: UseTiffToPdfResult = {
  viewerType: ViewerType.Tiff,
  pdfData: undefined,
  loading: false,
  error: undefined,
};

/**
 * Detects multi-page TIFFs and converts them to PDF via the MIO transform API.
 * Single-page TIFFs are left for the TiffRenderer to handle.
 *
 * @param media - The OSDK Media object (must be a TIFF)
 * @param enabled - Whether to attempt multi-page detection and conversion
 */
export function useTiffToPdf(
  media: Media,
  enabled: boolean,
): UseTiffToPdfResult {
  const client = useOsdkClient();
  const [result, setResult] = useState<UseTiffToPdfResult>(DISABLED_RESULT);
  const mediaRef = useRef(media);
  mediaRef.current = media;

  useEffect(() => {
    if (!enabled) {
      setResult(DISABLED_RESULT);
      return;
    }

    let cancelled = false;
    setResult({
      viewerType: ViewerType.Tiff,
      pdfData: undefined,
      loading: true,
      error: undefined,
    });

    async function detectAndTransform() {
      const currentMedia = mediaRef.current;

      // Step 1: Fetch TIFF bytes and count pages
      const response = await currentMedia.fetchContents();
      const buffer = await response.arrayBuffer();

      if (cancelled) return;

      const ifds = UTIF.decode(buffer);
      const pageCount = ifds.length;

      if (pageCount <= 1) {
        // Single-page TIFF — use TiffRenderer
        if (!cancelled) {
          setResult({
            viewerType: ViewerType.Tiff,
            pdfData: undefined,
            loading: false,
            error: undefined,
          });
        }
        return;
      }

      // Step 2: Multi-page TIFF — convert to PDF via MIO transform
      const mediaReference = currentMedia.getMediaReference();
      const pdfResponse = await client(
        __EXPERIMENTAL__NOT_SUPPORTED_YET__transformAndWait,
      ).transformAndWait({
        mediaReference,
        transformation: {
          $imageToDocument: { $operation: { $createPdf: {} } },
        },
      });

      if (cancelled) return;

      const pdfBuffer = await pdfResponse.arrayBuffer();

      if (!cancelled) {
        setResult({
          viewerType: ViewerType.Pdf,
          pdfData: pdfBuffer,
          loading: false,
          error: undefined,
        });
      }
    }

    detectAndTransform().catch((err: unknown) => {
      if (!cancelled) {
        // eslint-disable-next-line no-console
        console.warn(
          "TIFF to PDF conversion failed, falling back to TIFF renderer:",
          err,
        );
        setResult({
          viewerType: ViewerType.Tiff,
          pdfData: undefined,
          loading: false,
          error: err instanceof Error ? err : new Error(String(err)),
        });
      }
    });

    return () => {
      cancelled = true;
    };
  }, [media, enabled, client]);

  return result;
}
