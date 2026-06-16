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

import { useMemo } from "react";
import type { PdfAnnotation } from "../types.js";

/**
 * Groups a flat array of annotations by page number for efficient per-page lookup.
 */
export function usePdfAnnotationsByPage(
  annotations: PdfAnnotation[],
): Record<number, PdfAnnotation[]> {
  return useMemo(() => {
    const result: Record<number, PdfAnnotation[]> = {};
    for (const ann of annotations) {
      (result[ann.page] ??= []).push(ann);
    }
    return result;
  }, [annotations]);
}
