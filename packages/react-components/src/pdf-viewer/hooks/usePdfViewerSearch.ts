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
import type {
  EventBus,
  PDFFindController,
} from "pdfjs-dist/web/pdf_viewer.mjs";
import type { RefObject } from "react";
import { useCallback, useEffect, useState } from "react";

const EMPTY_STRING = "";
const FIND_EVENT = "find";
// cspell:disable-next-line -- pdfjs EventBus event names
const UPDATE_FIND_CONTROL_STATE_EVENT = "updatefindcontrolstate";
// cspell:disable-next-line -- pdfjs EventBus event name
const UPDATE_FIND_MATCHES_COUNT_EVENT = "updatefindmatchescount";

export interface UsePdfViewerSearchResult {
  query: string;
  totalMatches: number;
  currentMatchIndex: number;
  isSearchOpen: boolean;
  setQuery: (query: string) => void;
  nextMatch: () => void;
  prevMatch: () => void;
  openSearch: () => void;
  closeSearch: () => void;
}

export function usePdfViewerSearch(
  eventBusRef: RefObject<EventBus | null>,
  findControllerRef: RefObject<PDFFindController | null>,
  document: PDFDocumentProxy | undefined,
): UsePdfViewerSearchResult {
  const [query, setQueryState] = useState(EMPTY_STRING);
  const [totalMatches, setTotalMatches] = useState(0);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const dispatchFind = useCallback(
    (queryString: string, findPrevious: boolean) => {
      eventBusRef.current?.dispatch(FIND_EVENT, {
        source: undefined,
        type: "",
        query: queryString,
        caseSensitive: false,
        highlightAll: true,
        phraseSearch: true,
        findPrevious,
      });
    },
    [eventBusRef],
  );

  const dispatchFindAgain = useCallback(
    (findPrevious: boolean) => {
      eventBusRef.current?.dispatch(FIND_EVENT, {
        source: undefined,
        type: "again",
        query,
        caseSensitive: false,
        highlightAll: true,
        phraseSearch: true,
        findPrevious,
      });
    },
    [eventBusRef, query],
  );

  const setQuery = useCallback(
    (input: string) => {
      setQueryState(input);

      if (input === EMPTY_STRING) {
        setTotalMatches(0);
        setCurrentMatchIndex(0);
        // Dispatch empty query to clear highlights
        dispatchFind(EMPTY_STRING, false);
        return;
      }

      dispatchFind(input, false);
    },
    [dispatchFind],
  );

  const nextMatch = useCallback(() => {
    dispatchFindAgain(false);
  }, [dispatchFindAgain]);

  const prevMatch = useCallback(() => {
    dispatchFindAgain(true);
  }, [dispatchFindAgain]);

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    setQueryState(EMPTY_STRING);
    setTotalMatches(0);
    setCurrentMatchIndex(0);
    // Clear highlights
    dispatchFind(EMPTY_STRING, false);
  }, [dispatchFind]);

  useEffect(() => {
    const eventBus = eventBusRef.current;
    if (eventBus == null) {
      return;
    }

    const handleMatchesCount = (evt: {
      matchesCount: { current: number; total: number };
    }) => {
      setTotalMatches(evt.matchesCount.total);
      setCurrentMatchIndex(
        evt.matchesCount.current > 0 ? evt.matchesCount.current - 1 : 0,
      );
    };

    const handleControlState = (evt: {
      state: number;
      matchesCount: { current: number; total: number };
    }) => {
      setTotalMatches(evt.matchesCount.total);
      setCurrentMatchIndex(
        evt.matchesCount.current > 0 ? evt.matchesCount.current - 1 : 0,
      );
    };

    eventBus.on(UPDATE_FIND_MATCHES_COUNT_EVENT, handleMatchesCount);
    eventBus.on(UPDATE_FIND_CONTROL_STATE_EVENT, handleControlState);

    return () => {
      eventBus.off(UPDATE_FIND_MATCHES_COUNT_EVENT, handleMatchesCount);
      eventBus.off(UPDATE_FIND_CONTROL_STATE_EVENT, handleControlState);
    };
  }, [eventBusRef, findControllerRef, document]);

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
  };
}
