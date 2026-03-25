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

import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { PdfAnnotation } from "../../types.js";
import { usePdfAnnotationsByPage } from "../usePdfAnnotationsByPage.js";

function createAnnotation(
  overrides: Partial<PdfAnnotation> = {},
): PdfAnnotation {
  return {
    id: "ann-1",
    type: "highlight",
    page: 1,
    rect: { x: 100, y: 500, width: 200, height: 20 },
    ...overrides,
  };
}

describe("usePdfAnnotationsByPage", () => {
  it("should return empty object for empty array", () => {
    const { result } = renderHook(() => usePdfAnnotationsByPage([]));
    expect(result.current).toEqual({});
  });

  it("should group annotations by page number", () => {
    const annotations = [
      createAnnotation({ id: "a1", page: 1 }),
      createAnnotation({ id: "a2", page: 2 }),
      createAnnotation({ id: "a3", page: 1 }),
      createAnnotation({ id: "a4", page: 3 }),
    ];

    const { result } = renderHook(() => usePdfAnnotationsByPage(annotations));

    expect(Object.keys(result.current)).toHaveLength(3);
    expect(result.current[1]).toHaveLength(2);
    expect(result.current[2]).toHaveLength(1);
    expect(result.current[3]).toHaveLength(1);
  });

  it("should preserve order within each page", () => {
    const annotations = [
      createAnnotation({ id: "first", page: 1 }),
      createAnnotation({ id: "second", page: 1 }),
      createAnnotation({ id: "third", page: 1 }),
    ];

    const { result } = renderHook(() => usePdfAnnotationsByPage(annotations));

    expect(result.current[1]!.map((a) => a.id)).toEqual([
      "first",
      "second",
      "third",
    ]);
  });

  it("should return same reference for same input", () => {
    const annotations = [createAnnotation({ id: "a1", page: 1 })];

    const { result, rerender } = renderHook(() =>
      usePdfAnnotationsByPage(annotations)
    );

    const firstResult = result.current;
    rerender();

    expect(result.current).toBe(firstResult);
  });
});
