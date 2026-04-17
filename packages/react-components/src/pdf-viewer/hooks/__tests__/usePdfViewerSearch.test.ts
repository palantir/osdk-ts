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

// cspell:words updatefindmatchescount updatefindcontrolstate
import { act, renderHook } from "@testing-library/react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import type {
  EventBus,
  PDFFindController,
} from "pdfjs-dist/web/pdf_viewer.mjs";
import type { RefObject } from "react";
import { describe, expect, it, vi } from "vitest";
import { usePdfViewerSearch } from "../usePdfViewerSearch.js";

type Listener = (...args: unknown[]) => void;

function createMockEventBus() {
  const listeners = new Map<string, Set<Listener>>();

  return {
    on(event: string, listener: Listener) {
      if (!listeners.has(event)) {
        listeners.set(event, new Set());
      }
      listeners.get(event)!.add(listener);
    },
    off(event: string, listener: Listener) {
      listeners.get(event)?.delete(listener);
    },
    dispatch: vi.fn((event: string, data: unknown) => {
      listeners.get(event)?.forEach((l) => l(data));
    }),
    _emit(event: string, data: unknown) {
      listeners.get(event)?.forEach((l) => l(data));
    },
  } as unknown as EventBus & {
    dispatch: ReturnType<typeof vi.fn>;
    _emit: (event: string, data: unknown) => void;
  };
}

function createMockFindController() {
  return {
    setDocument: vi.fn(),
    _pageMatches: [] as number[][],
    _selected: { pageIdx: 0, matchIdx: 0 },
  } as unknown as PDFFindController;
}

describe("usePdfViewerSearch", () => {
  function setup() {
    const eventBus = createMockEventBus();
    const findController = createMockFindController();
    const eventBusRef = {
      current: eventBus,
    } as RefObject<EventBus>;
    const findControllerRef = {
      current: findController,
    } as RefObject<PDFFindController>;

    const mockDocument = {} as PDFDocumentProxy;
    const { result } = renderHook(() =>
      usePdfViewerSearch(eventBusRef, findControllerRef, mockDocument),
    );

    return { result, eventBus, findController };
  }

  it("should initialize with default state", () => {
    const { result } = setup();

    expect(result.current.query).toBe("");
    expect(result.current.totalMatches).toBe(0);
    expect(result.current.currentMatchIndex).toBe(0);
    expect(result.current.isSearchOpen).toBe(false);
  });

  it("should open and close search", () => {
    const { result } = setup();

    act(() => {
      result.current.openSearch();
    });
    expect(result.current.isSearchOpen).toBe(true);

    act(() => {
      result.current.closeSearch();
    });
    expect(result.current.isSearchOpen).toBe(false);
    expect(result.current.query).toBe("");
  });

  it("should dispatch find event on setQuery", () => {
    const { result, eventBus } = setup();

    act(() => {
      result.current.setQuery("hello");
    });

    expect(result.current.query).toBe("hello");
    expect(eventBus.dispatch).toHaveBeenCalledWith(
      "find",
      expect.objectContaining({
        query: "hello",
        highlightAll: true,
        caseSensitive: false,
      }),
    );
  });

  it("should dispatch find again on nextMatch", () => {
    const { result, eventBus } = setup();

    act(() => {
      result.current.setQuery("test");
    });

    eventBus.dispatch.mockClear();

    act(() => {
      result.current.nextMatch();
    });

    expect(eventBus.dispatch).toHaveBeenCalledWith(
      "find",
      expect.objectContaining({
        type: "again",
        findPrevious: false,
      }),
    );
  });

  it("should dispatch find again with findPrevious on prevMatch", () => {
    const { result, eventBus } = setup();

    act(() => {
      result.current.setQuery("test");
    });

    eventBus.dispatch.mockClear();

    act(() => {
      result.current.prevMatch();
    });

    expect(eventBus.dispatch).toHaveBeenCalledWith(
      "find",
      expect.objectContaining({
        type: "again",
        findPrevious: true,
      }),
    );
  });

  it("should update match count from updatefindmatchescount event", () => {
    const { result, eventBus } = setup();

    act(() => {
      eventBus._emit("updatefindmatchescount", {
        matchesCount: { current: 3, total: 10 },
      });
    });

    expect(result.current.totalMatches).toBe(10);
    expect(result.current.currentMatchIndex).toBe(2);
  });

  it("should update match count from updatefindcontrolstate event", () => {
    const { result, eventBus } = setup();

    act(() => {
      eventBus._emit("updatefindcontrolstate", {
        state: 0,
        matchesCount: { current: 1, total: 5 },
      });
    });

    expect(result.current.totalMatches).toBe(5);
    expect(result.current.currentMatchIndex).toBe(0);
  });

  it("should clear state on closeSearch", () => {
    const { result, eventBus } = setup();

    act(() => {
      result.current.openSearch();
      result.current.setQuery("hello");
    });

    act(() => {
      eventBus._emit("updatefindmatchescount", {
        matchesCount: { current: 1, total: 3 },
      });
    });

    expect(result.current.totalMatches).toBe(3);

    act(() => {
      result.current.closeSearch();
    });

    expect(result.current.query).toBe("");
    expect(result.current.totalMatches).toBe(0);
    expect(result.current.currentMatchIndex).toBe(0);
    expect(result.current.isSearchOpen).toBe(false);
  });

  it("should dispatch empty query to clear highlights on close", () => {
    const { result, eventBus } = setup();

    act(() => {
      result.current.setQuery("test");
    });

    eventBus.dispatch.mockClear();

    act(() => {
      result.current.closeSearch();
    });

    expect(eventBus.dispatch).toHaveBeenCalledWith(
      "find",
      expect.objectContaining({
        query: "",
      }),
    );
  });
});
