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

import { renderHook, waitFor } from "@testing-library/react";
import pDefer from "p-defer";
import { afterEach, describe, expect, it, vi } from "vitest";
import { usePdfDocument } from "../usePdfDocument.js";

vi.mock("pdfjs-dist", () => ({
  getDocument: vi.fn(),
  GlobalWorkerOptions: { workerSrc: "" },
}));

const { getDocument } = await import("pdfjs-dist");
const mockedGetDocument = vi.mocked(getDocument);

afterEach(() => {
  vi.clearAllMocks();
});

describe("usePdfDocument", () => {
  it("should start in loading state", () => {
    const deferred = pDefer();
    mockedGetDocument.mockReturnValue({
      promise: deferred.promise,
      destroy: vi.fn(() => Promise.resolve()),
    } as unknown as ReturnType<typeof getDocument>);

    const { result } = renderHook(() => usePdfDocument("test.pdf"));

    expect(result.current.loading).toBe(true);
    expect(result.current.document).toBeUndefined();
    expect(result.current.numPages).toBe(0);
    expect(result.current.error).toBeUndefined();
  });

  it("should load a PDF document successfully", async () => {
    const mockPdf = { numPages: 5 };
    mockedGetDocument.mockReturnValue({
      promise: Promise.resolve(mockPdf),
      destroy: vi.fn(() => Promise.resolve()),
    } as unknown as ReturnType<typeof getDocument>);

    const { result } = renderHook(() => usePdfDocument("test.pdf"));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.document).toEqual(mockPdf);
    expect(result.current.numPages).toBe(5);
    expect(result.current.error).toBeUndefined();
  });

  it("should pass url option for string src", () => {
    const deferred = pDefer();
    mockedGetDocument.mockReturnValue({
      promise: deferred.promise,
      destroy: vi.fn(() => Promise.resolve()),
    } as unknown as ReturnType<typeof getDocument>);

    renderHook(() => usePdfDocument("https://example.com/test.pdf"));

    expect(mockedGetDocument).toHaveBeenCalledWith({
      url: "https://example.com/test.pdf",
    });
  });

  it("should pass data option for ArrayBuffer src", () => {
    const buffer = new ArrayBuffer(10);
    const deferred = pDefer();
    mockedGetDocument.mockReturnValue({
      promise: deferred.promise,
      destroy: vi.fn(() => Promise.resolve()),
    } as unknown as ReturnType<typeof getDocument>);

    renderHook(() => usePdfDocument(buffer));

    expect(mockedGetDocument).toHaveBeenCalledWith({ data: buffer });
  });

  it("should set error state on load failure", async () => {
    const error = new Error("Failed to load");
    mockedGetDocument.mockReturnValue({
      promise: Promise.reject(error),
      destroy: vi.fn(() => Promise.resolve()),
    } as unknown as ReturnType<typeof getDocument>);

    const { result } = renderHook(() => usePdfDocument("bad.pdf"));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe(error);
    expect(result.current.document).toBeUndefined();
    expect(result.current.numPages).toBe(0);
  });

  it("should destroy loading task on unmount", () => {
    const destroyFn = vi.fn(() => Promise.resolve());
    const deferred = pDefer();
    mockedGetDocument.mockReturnValue({
      promise: deferred.promise,
      destroy: destroyFn,
    } as unknown as ReturnType<typeof getDocument>);

    const { unmount } = renderHook(() => usePdfDocument("test.pdf"));
    unmount();

    expect(destroyFn).toHaveBeenCalled();
  });

  it("should reload when src changes", async () => {
    const mockPdf1 = { numPages: 3 };
    const mockPdf2 = { numPages: 7 };

    mockedGetDocument
      .mockReturnValueOnce({
        promise: Promise.resolve(mockPdf1),
        destroy: vi.fn(() => Promise.resolve()),
      } as unknown as ReturnType<typeof getDocument>)
      .mockReturnValueOnce({
        promise: Promise.resolve(mockPdf2),
        destroy: vi.fn(() => Promise.resolve()),
      } as unknown as ReturnType<typeof getDocument>);

    const { result, rerender } = renderHook(
      ({ src }: { src: string }) => usePdfDocument(src),
      { initialProps: { src: "first.pdf" } },
    );

    await waitFor(() => {
      expect(result.current.numPages).toBe(3);
    });

    rerender({ src: "second.pdf" });

    await waitFor(() => {
      expect(result.current.numPages).toBe(7);
    });

    expect(mockedGetDocument).toHaveBeenCalledTimes(2);
  });
});
