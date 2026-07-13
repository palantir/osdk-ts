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

import type { PDFDocumentProxy } from "pdfjs-dist";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
const pdfWorkerUrl = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
);
import { useEffect, useState } from "react";

import type { PdfSource } from "../types.js";

type GetDocumentParams = Parameters<typeof getDocument>[0];

/**
 * Resolve a {@link PdfSource} to pdfjs `getDocument` parameters.
 *
 * String URLs and in-memory bytes (ArrayBuffer/Uint8Array) resolve
 * synchronously; a Blob is read into an ArrayBuffer first, so it resolves to a
 * promise. Callers can branch on `instanceof Promise` to keep the synchronous
 * path synchronous.
 */
function toDocumentParams(
  src: PdfSource
): GetDocumentParams | Promise<GetDocumentParams> {
  if (typeof src === "string") {
    return { url: src };
  }
  if (src instanceof Blob) {
    return src.arrayBuffer().then((data) => ({ data }));
  }
  return { data: src };
}

const pdfWorker = {
  workerInitialized: false,
  ensureWorker() {
    GlobalWorkerOptions.workerSrc = pdfWorkerUrl.href;
    this.workerInitialized = true;
  },
};

interface UsePdfDocumentResult {
  document: PDFDocumentProxy | undefined;
  numPages: number;
  loading: boolean;
  error: Error | undefined;
}

export function usePdfDocument(src: PdfSource): UsePdfDocumentResult {
  const [document, setDocument] = useState<PDFDocumentProxy | undefined>(
    undefined
  );
  const [numPages, setNumPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(
    function loadPdfDocument() {
      pdfWorker.ensureWorker();
      setLoading(true);
      setError(undefined);

      let cancelled = false;
      let loadingTask: ReturnType<typeof getDocument> | undefined;

      const startLoad = (params: GetDocumentParams) => {
        if (cancelled) {
          return;
        }
        loadingTask = getDocument(params);
        loadingTask.promise.then(
          (pdf) => {
            if (!cancelled) {
              setDocument(pdf);
              setNumPages(pdf.numPages);
              setLoading(false);
            }
          },
          (err: unknown) => {
            if (!cancelled) {
              setError(err instanceof Error ? err : new Error(String(err)));
              setLoading(false);
            }
          }
        );
      };

      // Blob sources must be read asynchronously; URL and in-memory byte
      // sources resolve synchronously so getDocument is called this tick.
      const params = toDocumentParams(src);
      if (params instanceof Promise) {
        params.then(startLoad, (err: unknown) => {
          if (!cancelled) {
            setError(err instanceof Error ? err : new Error(String(err)));
            setLoading(false);
          }
        });
      } else {
        startLoad(params);
      }

      return () => {
        cancelled = true;
        void loadingTask?.destroy();
      };
    },
    [src]
  );

  return { document, numPages, loading, error };
}
