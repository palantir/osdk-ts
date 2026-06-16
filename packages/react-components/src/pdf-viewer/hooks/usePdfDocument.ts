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
  import.meta.url,
);
import { useEffect, useState } from "react";

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

export function usePdfDocument(
  src: string | ArrayBuffer,
): UsePdfDocumentResult {
  const [document, setDocument] = useState<PDFDocumentProxy | undefined>(
    undefined,
  );
  const [numPages, setNumPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(function loadPdfDocument() {
    pdfWorker.ensureWorker();
    setLoading(true);
    setError(undefined);

    const loadingTask = getDocument(
      typeof src === "string" ? { url: src } : { data: src },
    );

    let cancelled = false;

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
          setError(
            err instanceof Error ? err : new Error(String(err)),
          );
          setLoading(false);
        }
      },
    );

    return () => {
      cancelled = true;
      void loadingTask.destroy();
    };
  }, [src]);

  return { document, numPages, loading, error };
}
