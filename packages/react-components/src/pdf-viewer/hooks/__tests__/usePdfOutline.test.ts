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
import type { PDFDocumentProxy } from "pdfjs-dist";
import { describe, expect, it, vi } from "vitest";
import { usePdfOutline } from "../usePdfOutline.js";

function createMockDocument(
  options: {
    outline?:
      | Array<{
        title: string;
        bold: boolean;
        italic: boolean;
        dest: string | unknown[] | null;
        items: Array<{
          title: string;
          bold: boolean;
          italic: boolean;
          dest: string | unknown[] | null;
          items: never[];
        }>;
      }>
      | null;
    pages?: Array<{
      items: Array<{
        str: string;
        height: number;
        fontName: string;
        transform: number[];
        hasEOL: boolean;
      }>;
    }>;
    numPages?: number;
  } = {},
): PDFDocumentProxy {
  const { outline = null, pages = [], numPages = pages.length } = options;

  const pageIndexMap = new Map<unknown, number>();

  return {
    numPages,
    getOutline: vi.fn(() => Promise.resolve(outline)),
    getDestination: vi.fn((dest: string) => {
      // Return a mock destination array: [pageRef, ...]
      const ref = { num: 0, gen: 0 };
      pageIndexMap.set(ref, 0);
      return Promise.resolve([ref]);
    }),
    getPageIndex: vi.fn((ref: unknown) => {
      // Return 0-based page index
      return Promise.resolve(pageIndexMap.get(ref) ?? 0);
    }),
    getPage: vi.fn((pageNum: number) => {
      const page = pages[pageNum - 1];
      return Promise.resolve({
        getTextContent: vi.fn(() =>
          Promise.resolve({ items: page?.items ?? [] })
        ),
      });
    }),
  } as unknown as PDFDocumentProxy;
}

describe("usePdfOutline", () => {
  it("should return empty array when document is undefined", () => {
    const { result } = renderHook(() => usePdfOutline(undefined));
    expect(result.current).toEqual([]);
  });

  it("should resolve bookmark outline from document", async () => {
    const mockRef = { num: 1, gen: 0 };
    const doc = {
      numPages: 2,
      getOutline: vi.fn(() =>
        Promise.resolve([
          {
            title: "Chapter 1",
            bold: true,
            italic: false,
            dest: [mockRef],
            items: [],
          },
          {
            title: "Chapter 2",
            bold: false,
            italic: true,
            dest: [mockRef],
            items: [],
          },
        ])
      ),
      getPageIndex: vi.fn(() => Promise.resolve(0)),
      getDestination: vi.fn(),
      getPage: vi.fn(),
    } as unknown as PDFDocumentProxy;

    const { result } = renderHook(() => usePdfOutline(doc));

    await waitFor(() => {
      expect(result.current.length).toBe(2);
    });

    expect(result.current[0]).toEqual({
      title: "Chapter 1",
      depth: 0,
      pageNumber: 1,
      bold: true,
      italic: false,
    });
    expect(result.current[1]).toEqual({
      title: "Chapter 2",
      depth: 0,
      pageNumber: 1,
      bold: false,
      italic: true,
    });
  });

  it("should resolve nested bookmark outlines", async () => {
    const mockRef = { num: 1, gen: 0 };
    const doc = {
      numPages: 3,
      getOutline: vi.fn(() =>
        Promise.resolve([
          {
            title: "Part 1",
            bold: true,
            italic: false,
            dest: [mockRef],
            items: [
              {
                title: "Section 1.1",
                bold: false,
                italic: false,
                dest: [mockRef],
                items: [],
              },
            ],
          },
        ])
      ),
      getPageIndex: vi.fn(() => Promise.resolve(0)),
      getDestination: vi.fn(),
      getPage: vi.fn(),
    } as unknown as PDFDocumentProxy;

    const { result } = renderHook(() => usePdfOutline(doc));

    await waitFor(() => {
      expect(result.current.length).toBe(2);
    });

    expect(result.current[0].title).toBe("Part 1");
    expect(result.current[0].depth).toBe(0);
    expect(result.current[1].title).toBe("Section 1.1");
    expect(result.current[1].depth).toBe(1);
  });

  it("should resolve string destinations in bookmarks", async () => {
    const destRef = { num: 2, gen: 0 };
    const doc = {
      numPages: 5,
      getOutline: vi.fn(() =>
        Promise.resolve([
          {
            title: "Named Dest",
            bold: false,
            italic: false,
            dest: "named-destination-1",
            items: [],
          },
        ])
      ),
      getDestination: vi.fn(() => Promise.resolve([destRef])),
      getPageIndex: vi.fn(() => Promise.resolve(3)),
      getPage: vi.fn(),
    } as unknown as PDFDocumentProxy;

    const { result } = renderHook(() => usePdfOutline(doc));

    await waitFor(() => {
      expect(result.current.length).toBe(1);
    });

    expect(result.current[0].pageNumber).toBe(4); // 0-indexed 3 → 1-indexed 4
  });

  it("should fall back to text extraction when no bookmarks", async () => {
    // Create a document with no outline but with text content that has
    // heading-sized text (larger than body text)
    const bodyFontSize = 12;
    const headingFontSize = 18;

    const doc = createMockDocument({
      outline: null,
      numPages: 1,
      pages: [
        {
          items: [
            {
              str: "My Heading",
              height: headingFontSize,
              fontName: "Bold",
              transform: [headingFontSize, 0, 0, headingFontSize, 72, 700],
              hasEOL: true,
            },
            // Several body text items to establish body size
            {
              str: "Body text line one",
              height: bodyFontSize,
              fontName: "Regular",
              transform: [bodyFontSize, 0, 0, bodyFontSize, 72, 680],
              hasEOL: true,
            },
            {
              str: "Body text line two",
              height: bodyFontSize,
              fontName: "Regular",
              transform: [bodyFontSize, 0, 0, bodyFontSize, 72, 660],
              hasEOL: true,
            },
            {
              str: "Body text line three",
              height: bodyFontSize,
              fontName: "Regular",
              transform: [bodyFontSize, 0, 0, bodyFontSize, 72, 640],
              hasEOL: true,
            },
            {
              str: "Body text line four",
              height: bodyFontSize,
              fontName: "Regular",
              transform: [bodyFontSize, 0, 0, bodyFontSize, 72, 620],
              hasEOL: true,
            },
            {
              str: "Body text line five",
              height: bodyFontSize,
              fontName: "Regular",
              transform: [bodyFontSize, 0, 0, bodyFontSize, 72, 600],
              hasEOL: true,
            },
          ],
        },
      ],
    });

    const { result } = renderHook(() => usePdfOutline(doc));

    await waitFor(() => {
      expect(result.current.length).toBeGreaterThan(0);
    });

    expect(result.current[0].title).toBe("My Heading");
    expect(result.current[0].pageNumber).toBe(1);
  });

  it("should return empty array when outline extraction fails", async () => {
    const doc = {
      numPages: 1,
      getOutline: vi.fn(() => Promise.reject(new Error("Failed"))),
      getPage: vi.fn(),
      getDestination: vi.fn(),
      getPageIndex: vi.fn(),
    } as unknown as PDFDocumentProxy;

    const { result } = renderHook(() => usePdfOutline(doc));

    // Should stay empty since error is caught
    await waitFor(() => {
      expect(result.current).toEqual([]);
    });
  });

  it("should reset outline when document changes to undefined", async () => {
    const mockRef = { num: 1, gen: 0 };
    const doc = {
      numPages: 1,
      getOutline: vi.fn(() =>
        Promise.resolve([
          {
            title: "Ch 1",
            bold: false,
            italic: false,
            dest: [mockRef],
            items: [],
          },
        ])
      ),
      getPageIndex: vi.fn(() => Promise.resolve(0)),
      getDestination: vi.fn(),
      getPage: vi.fn(),
    } as unknown as PDFDocumentProxy;

    const { result, rerender } = renderHook(
      ({ document }: { document: PDFDocumentProxy | undefined }) =>
        usePdfOutline(document),
      {
        initialProps: { document: doc } as {
          document: PDFDocumentProxy | undefined;
        },
      },
    );

    await waitFor(() => {
      expect(result.current.length).toBe(1);
    });

    rerender({ document: undefined });

    await waitFor(() => {
      expect(result.current).toEqual([]);
    });
  });

  it("should return empty when document has no text items at all", async () => {
    const doc = createMockDocument({
      outline: null,
      numPages: 1,
      pages: [{ items: [] }],
    });

    const { result } = renderHook(() => usePdfOutline(doc));

    // Wait a tick for async effect to resolve
    await waitFor(() => {
      // getOutline was called, returned null, fell back to text extraction
      expect(vi.mocked(doc.getOutline)).toHaveBeenCalled();
    });

    expect(result.current).toEqual([]);
  });
});
