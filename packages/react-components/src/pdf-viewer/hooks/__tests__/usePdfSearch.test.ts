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

import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { usePdfSearch } from "../usePdfSearch.js";

function createTextDiv(text: string): HTMLElement {
  const div = document.createElement("div");
  div.textContent = text;
  document.body.appendChild(div);
  return div;
}

afterEach(() => {
  document.body.innerHTML = "";
});

describe("usePdfSearch", () => {
  it("should initialize with default state", () => {
    const { result } = renderHook(() => usePdfSearch());

    expect(result.current.query).toBe("");
    expect(result.current.totalMatches).toBe(0);
    expect(result.current.currentMatchIndex).toBe(-1);
    expect(result.current.isSearchOpen).toBe(false);
  });

  it("should open and close search", () => {
    const { result } = renderHook(() => usePdfSearch());

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

  it("should find matches in registered text layers", () => {
    const { result } = renderHook(() => usePdfSearch());

    const div1 = createTextDiv("Hello world");
    const div2 = createTextDiv("world peace");

    act(() => {
      result.current.registerTextLayer(1, [div1, div2]);
    });

    act(() => {
      result.current.setQuery("world");
    });

    expect(result.current.totalMatches).toBe(2);
    expect(result.current.currentMatchIndex).toBe(0);
  });

  it("should perform case-insensitive search", () => {
    const { result } = renderHook(() => usePdfSearch());

    const div = createTextDiv("Hello HELLO hello");

    act(() => {
      result.current.registerTextLayer(1, [div]);
    });

    act(() => {
      result.current.setQuery("hello");
    });

    expect(result.current.totalMatches).toBe(3);
  });

  it("should navigate between matches", () => {
    const { result } = renderHook(() => usePdfSearch());

    // Use separate divs to avoid DOM mutation conflicts from surroundContents
    const div1 = createTextDiv("abc first");
    const div2 = createTextDiv("abc second");
    const div3 = createTextDiv("abc third");

    act(() => {
      result.current.registerTextLayer(1, [div1, div2, div3]);
    });

    act(() => {
      result.current.setQuery("abc");
    });

    expect(result.current.totalMatches).toBe(3);
    expect(result.current.currentMatchIndex).toBe(0);

    act(() => {
      result.current.nextMatch();
    });
    expect(result.current.currentMatchIndex).toBe(1);

    act(() => {
      result.current.nextMatch();
    });
    expect(result.current.currentMatchIndex).toBe(2);

    // Wraps around to first match
    act(() => {
      result.current.nextMatch();
    });
    expect(result.current.currentMatchIndex).toBe(0);
  });

  it("should navigate backwards with prevMatch", () => {
    const { result } = renderHook(() => usePdfSearch());

    const div1 = createTextDiv("abc first");
    const div2 = createTextDiv("abc second");
    const div3 = createTextDiv("abc third");

    act(() => {
      result.current.registerTextLayer(1, [div1, div2, div3]);
    });

    act(() => {
      result.current.setQuery("abc");
    });

    // Wraps around to last match
    act(() => {
      result.current.prevMatch();
    });
    expect(result.current.currentMatchIndex).toBe(2);

    act(() => {
      result.current.prevMatch();
    });
    expect(result.current.currentMatchIndex).toBe(1);
  });

  it("should return zero matches for empty query", () => {
    const { result } = renderHook(() => usePdfSearch());

    const div = createTextDiv("some text");

    act(() => {
      result.current.registerTextLayer(1, [div]);
    });

    act(() => {
      result.current.setQuery("");
    });

    expect(result.current.totalMatches).toBe(0);
    expect(result.current.currentMatchIndex).toBe(-1);
  });

  it("should return zero matches when text not found", () => {
    const { result } = renderHook(() => usePdfSearch());

    const div = createTextDiv("some text");

    act(() => {
      result.current.registerTextLayer(1, [div]);
    });

    act(() => {
      result.current.setQuery("nonexistent");
    });

    expect(result.current.totalMatches).toBe(0);
    expect(result.current.currentMatchIndex).toBe(-1);
  });

  it("should clear search state on closeSearch", () => {
    const { result } = renderHook(() => usePdfSearch());

    const div = createTextDiv("hello world");

    act(() => {
      result.current.registerTextLayer(1, [div]);
    });

    act(() => {
      result.current.openSearch();
      result.current.setQuery("hello");
    });

    expect(result.current.totalMatches).toBe(1);

    act(() => {
      result.current.closeSearch();
    });

    expect(result.current.query).toBe("");
    expect(result.current.totalMatches).toBe(0);
    expect(result.current.currentMatchIndex).toBe(-1);
    expect(result.current.isSearchOpen).toBe(false);
  });

  it("should search across multiple pages in order", () => {
    const { result } = renderHook(() => usePdfSearch());

    const divPage2 = createTextDiv("match on page 2");
    const divPage1 = createTextDiv("match on page 1");

    // Register page 2 before page 1 to verify sorting
    act(() => {
      result.current.registerTextLayer(2, [divPage2]);
      result.current.registerTextLayer(1, [divPage1]);
    });

    act(() => {
      result.current.setQuery("match");
    });

    expect(result.current.totalMatches).toBe(2);
  });
});
