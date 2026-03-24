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
import { useEffect, useState } from "react";

export interface OutlineItem {
  title: string;
  depth: number;
  pageNumber: number;
  bold: boolean;
  italic: boolean;
}

const EMPTY_OUTLINE: OutlineItem[] = [];

/**
 * Minimum ratio of font size to body text to be considered a heading.
 * 1.15 means the text must be at least 15% larger than the most common size.
 */
const HEADING_SIZE_RATIO = 1.15;

export function usePdfOutline(
  document: PDFDocumentProxy | undefined,
): OutlineItem[] {
  const [outlineItems, setOutlineItems] = useState<OutlineItem[]>(
    EMPTY_OUTLINE,
  );

  useEffect(
    function loadOutline() {
      if (document == null) {
        setOutlineItems(EMPTY_OUTLINE);
        return;
      }

      let cancelled = false;

      void (async () => {
        try {
          // Try embedded bookmarks first
          const outline = await document.getOutline();
          if (cancelled) return;

          if (outline != null && outline.length > 0) {
            const items = await resolveBookmarkOutline(document, outline);
            if (!cancelled) {
              setOutlineItems(items);
            }
            return;
          }

          // Fall back to extracting headings from text content
          const items = await extractHeadingsFromText(document);
          if (!cancelled) {
            setOutlineItems(items.length > 0 ? items : EMPTY_OUTLINE);
          }
        } catch {
          // If extraction fails entirely, leave outline empty
          if (!cancelled) {
            setOutlineItems(EMPTY_OUTLINE);
          }
        }
      })();

      return () => {
        cancelled = true;
      };
    },
    [document],
  );

  return outlineItems;
}

type BookmarkNode = Awaited<ReturnType<PDFDocumentProxy["getOutline"]>>[number];

async function resolveBookmarkOutline(
  document: PDFDocumentProxy,
  outline: BookmarkNode[],
): Promise<OutlineItem[]> {
  const items: OutlineItem[] = [];

  const resolveItems = async (
    nodes: BookmarkNode[],
    depth: number,
  ): Promise<void> => {
    for (const node of nodes) {
      let pageNumber = 1;
      try {
        if (typeof node.dest === "string") {
          const dest = await document.getDestination(node.dest);
          if (dest != null) {
            const pageIndex = await document.getPageIndex(dest[0]);
            pageNumber = pageIndex + 1;
          }
        } else if (Array.isArray(node.dest) && node.dest.length > 0) {
          const pageIndex = await document.getPageIndex(node.dest[0]);
          pageNumber = pageIndex + 1;
        }
      } catch {
        // If destination resolution fails, default to page 1
      }

      items.push({
        title: node.title,
        depth,
        pageNumber,
        bold: node.bold,
        italic: node.italic,
      });

      if (node.items.length > 0) {
        await resolveItems(node.items, depth + 1);
      }
    }
  };

  await resolveItems(outline, 0);
  return items;
}

interface RawHeading {
  text: string;
  fontSize: number;
  pageNumber: number;
  fontName: string;
  /** True if this heading line immediately followed another heading line (no body text in between). */
  contiguous: boolean;
}

interface TextItemLike {
  str: string;
  height: number;
  fontName: string;
  transform: number[];
  hasEOL: boolean;
}

function isTextItem(
  item: Record<string, unknown>,
): item is Record<string, unknown> & TextItemLike {
  return "str" in item && "transform" in item;
}

/**
 * Extract the font size from a pdfjs TextItem.
 * Prefer `height` when available, otherwise derive from the transform matrix.
 * The transform is [scaleX, skewY, skewX, scaleY, translateX, translateY].
 * Font size = sqrt(skewX² + scaleY²), which handles rotated text too.
 */
function getFontSize(item: TextItemLike): number {
  if (item.height > 0) {
    return item.height;
  }
  const transform = item.transform;
  if (Array.isArray(transform) && transform.length >= 4) {
    return Math.sqrt(
      (transform[2] as number) * (transform[2] as number)
        + (transform[3] as number) * (transform[3] as number),
    );
  }
  return 0;
}

async function extractHeadingsFromText(
  document: PDFDocumentProxy,
): Promise<OutlineItem[]> {
  const numPages = document.numPages;
  const allTextItems: Array<{ fontSize: number; str: string }> = [];
  const candidateHeadings: RawHeading[] = [];

  // First pass: collect all text items to determine body text size
  for (let i = 1; i <= numPages; i++) {
    const page = await document.getPage(i);
    const textContent = await page.getTextContent();

    for (const rawItem of textContent.items) {
      const item = rawItem as Record<string, unknown>;
      if (!isTextItem(item) || item.str.trim().length === 0) {
        continue;
      }
      const fontSize = getFontSize(item);
      if (fontSize > 0) {
        allTextItems.push({ fontSize, str: item.str });
      }
    }
  }

  if (allTextItems.length === 0) {
    return [];
  }

  // Find the most common font size (body text)
  const sizeCounts = new Map<number, number>();
  for (const item of allTextItems) {
    const rounded = Math.round(item.fontSize * 10) / 10;
    sizeCounts.set(rounded, (sizeCounts.get(rounded) ?? 0) + 1);
  }

  let bodySize = 0;
  let maxCount = 0;
  for (const [size, count] of sizeCounts) {
    if (count > maxCount) {
      maxCount = count;
      bodySize = size;
    }
  }

  if (bodySize === 0) {
    return [];
  }

  // Heading threshold: text significantly larger than body text
  const headingThreshold = bodySize * HEADING_SIZE_RATIO;

  // Collect all unique heading sizes above threshold
  const headingSizes = new Set<number>();
  for (const [size] of sizeCounts) {
    if (size >= headingThreshold) {
      headingSizes.add(size);
    }
  }

  if (headingSizes.size === 0) {
    return [];
  }

  // Sort heading sizes descending (largest = depth 0)
  const sortedSizes = [...headingSizes].sort((a, b) => b - a);
  const sizeToDepth = new Map<number, number>();
  for (let i = 0; i < sortedSizes.length; i++) {
    sizeToDepth.set(sortedSizes[i], i);
  }

  // Second pass: extract headings with page numbers.
  // pdfjs splits visual lines into multiple TextItems (e.g. "1." and
  // "Introduction" are separate items). We accumulate all items on the
  // same visual line and treat the line as a heading if most of its
  // content is at a heading font size.
  for (let i = 1; i <= numPages; i++) {
    const page = await document.getPage(i);
    const textContent = await page.getTextContent();

    let lineItems: Array<{ text: string; fontSize: number }> = [];
    let linePageNumber = i;
    let lineFontName = "";
    let lineHeadingFontSize = 0;
    let lastFlushWasHeading = false;

    const flushLine = (): void => {
      if (lineItems.length === 0) return;

      // Check if the majority of the line's non-whitespace content is heading-sized
      let headingChars = 0;
      let totalChars = 0;
      for (const li of lineItems) {
        const len = li.text.trim().length;
        totalChars += len;
        if (sizeToDepth.has(Math.round(li.fontSize * 10) / 10)) {
          headingChars += len;
        }
      }

      if (totalChars > 0 && headingChars / totalChars > 0.5) {
        const fullText = lineItems.map((li) => li.text).join("").trim();
        if (fullText.length > 0) {
          candidateHeadings.push({
            text: fullText,
            fontSize: lineHeadingFontSize,
            pageNumber: linePageNumber,
            fontName: lineFontName,
            contiguous: lastFlushWasHeading,
          });
        }
        lastFlushWasHeading = true;
      } else {
        lastFlushWasHeading = false;
      }

      lineItems = [];
      lineHeadingFontSize = 0;
    };

    for (const rawItem of textContent.items) {
      const item = rawItem as Record<string, unknown>;
      if (!isTextItem(item)) {
        continue;
      }

      const fontSize = getFontSize(item);
      const rounded = Math.round(fontSize * 10) / 10;
      const isHeadingSized = sizeToDepth.has(rounded);

      if (isHeadingSized && lineHeadingFontSize === 0) {
        lineHeadingFontSize = rounded;
        linePageNumber = i;
        lineFontName = item.fontName;
      }

      if (lineHeadingFontSize > 0) {
        // We're accumulating a potential heading line
        lineItems.push({ text: item.str, fontSize });
      }

      if (item.hasEOL) {
        flushLine();
      }
    }

    // Flush remaining items at end of page
    flushLine();
  }

  // Merge consecutive heading lines that were contiguous (no body text between them)
  // and at the same font size. This joins multi-line titles that wrap in the PDF.
  const mergedHeadings: RawHeading[] = [];
  for (const heading of candidateHeadings) {
    const prev = mergedHeadings[mergedHeadings.length - 1];
    if (
      prev != null
      && heading.contiguous
      && Math.abs(prev.fontSize - heading.fontSize) < 0.1
    ) {
      prev.text += " " + heading.text;
    } else {
      mergedHeadings.push({ ...heading });
    }
  }

  // Filter out overly long entries (author blocks, abstracts, etc.)
  const MAX_HEADING_LENGTH = 200;

  return mergedHeadings
    .filter((heading) => heading.text.trim().length <= MAX_HEADING_LENGTH)
    .map((heading) => ({
      title: heading.text.trim(),
      depth: sizeToDepth.get(heading.fontSize) ?? 0,
      pageNumber: heading.pageNumber,
      bold: false,
      italic: false,
    }));
}
