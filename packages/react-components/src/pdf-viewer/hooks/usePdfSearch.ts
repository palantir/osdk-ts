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

import { useCallback, useRef, useState } from "react";

interface TextLayerEntry {
  pageNumber: number;
  textDivs: HTMLElement[];
}

interface SearchMatch {
  pageNumber: number;
  divIndex: number;
  startOffset: number;
  endOffset: number;
}

const HIGHLIGHT_CLASS = "highlight";
const SELECTED_CLASS = "selected";

export interface UsePdfSearchResult {
  query: string;
  totalMatches: number;
  currentMatchIndex: number;
  isSearchOpen: boolean;
  setQuery: (query: string) => void;
  nextMatch: () => void;
  prevMatch: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  registerTextLayer: (pageNumber: number, textDivs: HTMLElement[]) => void;
}

export function usePdfSearch(): UsePdfSearchResult {
  const [query, setQueryState] = useState("");
  const [totalMatches, setTotalMatches] = useState(0);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(-1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const textLayersRef = useRef<Map<number, TextLayerEntry>>(new Map());
  const matchesRef = useRef<SearchMatch[]>([]);
  const highlightElementsRef = useRef<HTMLElement[]>([]);

  const clearHighlights = useCallback(() => {
    for (const el of highlightElementsRef.current) {
      // Unwrap highlight spans — replace with their text content
      const parent = el.parentNode;
      if (parent != null) {
        const textNode = document.createTextNode(el.textContent ?? "");
        parent.replaceChild(textNode, el);
        parent.normalize();
      }
    }
    highlightElementsRef.current = [];
    matchesRef.current = [];
  }, []);

  const performSearch = useCallback((searchQuery: string) => {
    clearHighlights();

    if (searchQuery.length === 0) {
      setTotalMatches(0);
      setCurrentMatchIndex(-1);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const matches: SearchMatch[] = [];
    const highlights: HTMLElement[] = [];

    // Sort pages by page number
    const sortedEntries = Array.from(textLayersRef.current.values())
      .sort((a, b) => a.pageNumber - b.pageNumber);

    for (const entry of sortedEntries) {
      for (let divIndex = 0; divIndex < entry.textDivs.length; divIndex++) {
        const div = entry.textDivs[divIndex];
        const text = div.textContent ?? "";
        const lowerText = text.toLowerCase();

        let searchStart = 0;
        let matchIndex = lowerText.indexOf(lowerQuery, searchStart);

        while (matchIndex !== -1) {
          matches.push({
            pageNumber: entry.pageNumber,
            divIndex,
            startOffset: matchIndex,
            endOffset: matchIndex + searchQuery.length,
          });

          // Create highlight wrapper
          const textNode = findTextNode(div, matchIndex);
          if (textNode != null) {
            const highlightSpan = document.createElement("span");
            highlightSpan.className = HIGHLIGHT_CLASS;
            highlightSpan.textContent = text.substring(
              matchIndex,
              matchIndex + searchQuery.length,
            );

            const range = document.createRange();
            range.setStart(textNode.node, textNode.offset);
            range.setEnd(
              textNode.node,
              textNode.offset + searchQuery.length,
            );
            range.surroundContents(highlightSpan);

            highlights.push(highlightSpan);
          }

          searchStart = matchIndex + 1;
          matchIndex = lowerText.indexOf(lowerQuery, searchStart);
        }
      }
    }

    matchesRef.current = matches;
    highlightElementsRef.current = highlights;
    setTotalMatches(matches.length);

    if (matches.length > 0) {
      setCurrentMatchIndex(0);
      highlights[0]?.classList.add(SELECTED_CLASS);
      highlights[0]?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      setCurrentMatchIndex(-1);
    }
  }, [clearHighlights]);

  const setQuery = useCallback(
    (newQuery: string) => {
      setQueryState(newQuery);
      performSearch(newQuery);
    },
    [performSearch],
  );

  const navigateToMatch = useCallback((index: number) => {
    const highlights = highlightElementsRef.current;
    if (highlights.length === 0) {
      return;
    }

    // Remove selected from current
    for (const el of highlights) {
      el.classList.remove(SELECTED_CLASS);
    }

    // Add selected to new current
    const wrappedIndex = ((index % highlights.length) + highlights.length)
      % highlights.length;
    setCurrentMatchIndex(wrappedIndex);
    highlights[wrappedIndex]?.classList.add(SELECTED_CLASS);
    highlights[wrappedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  const nextMatch = useCallback(() => {
    navigateToMatch(currentMatchIndex + 1);
  }, [navigateToMatch, currentMatchIndex]);

  const prevMatch = useCallback(() => {
    navigateToMatch(currentMatchIndex - 1);
  }, [navigateToMatch, currentMatchIndex]);

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    setQueryState("");
    clearHighlights();
    setTotalMatches(0);
    setCurrentMatchIndex(-1);
  }, [clearHighlights]);

  const registerTextLayer = useCallback(
    (pageNumber: number, textDivs: HTMLElement[]) => {
      textLayersRef.current.set(pageNumber, { pageNumber, textDivs });
      // Re-run search if active
      if (query.length > 0) {
        performSearch(query);
      }
    },
    [query, performSearch],
  );

  return {
    query,
    totalMatches,
    currentMatchIndex,
    isSearchOpen,
    setQuery,
    nextMatch,
    prevMatch,
    openSearch,
    closeSearch,
    registerTextLayer,
  };
}

/** Find the text node and offset within an element for a given character offset */
function findTextNode(
  element: HTMLElement,
  offset: number,
): { node: Text; offset: number } | undefined {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  let currentOffset = 0;

  let node = walker.nextNode() as Text | null;
  while (node != null) {
    const nodeLength = node.textContent?.length ?? 0;
    if (currentOffset + nodeLength > offset) {
      return { node, offset: offset - currentOffset };
    }
    currentOffset += nodeLength;
    node = walker.nextNode() as Text | null;
  }

  return undefined;
}
