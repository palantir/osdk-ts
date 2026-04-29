/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { VirtualItemRenderProps } from "../fields/VirtualizedItemList.js";
import { VirtualizedItemList } from "../fields/VirtualizedItemList.js";

afterEach(() => {
  cleanup();
});

function renderItem(
  index: number,
  virtualProps: VirtualItemRenderProps,
): React.ReactElement {
  return (
    <div data-testid={`item-${index}`} {...virtualProps}>
      Item {index}
    </div>
  );
}

function getScroller(container: HTMLElement): HTMLElement | null {
  return container.querySelector("[class*='osdkVirtualizedScroller']");
}

describe("VirtualizedItemList", () => {
  it("renders the virtual scroll container with correct structure", () => {
    const virtualizerRef: React.RefObject<unknown> = React.createRef();

    const { container } = render(
      <VirtualizedItemList
        count={5}
        renderItem={renderItem}
        hasMore={false}
        virtualizerRef={virtualizerRef}
      />,
    );

    const scroller = getScroller(container);
    expect(scroller).not.toBeNull();

    // The spacer div holds the full virtual height
    const spacer = scroller?.querySelector("[class*='osdkVirtualizedSpacer']");
    expect(spacer).not.toBeNull();

    // Virtualizer ref is exposed for keyboard scroll-to-index
    expect(virtualizerRef.current).not.toBeNull();
    const virtualizer = virtualizerRef.current as { scrollToIndex?: unknown };
    expect(typeof virtualizer.scrollToIndex).toBe("function");
  });

  it("calls onFetchMore when scrolled near the end and hasMore is true", () => {
    const onFetchMore = vi.fn();
    const virtualizerRef: React.RefObject<unknown> = React.createRef();

    const { container } = render(
      <div style={{ height: "200px", overflow: "auto" }}>
        <VirtualizedItemList
          count={50}
          renderItem={renderItem}
          hasMore={true}
          onFetchMore={onFetchMore}
          virtualizerRef={virtualizerRef}
        />
      </div>,
    );

    const scroller = getScroller(container);
    expect(scroller).not.toBeNull();

    // Simulate scroll near the bottom
    Object.defineProperty(scroller, "scrollHeight", {
      value: 1600,
      configurable: true,
    });
    Object.defineProperty(scroller, "clientHeight", {
      value: 200,
      configurable: true,
    });
    Object.defineProperty(scroller, "scrollTop", {
      value: 1350,
      configurable: true,
    });
    fireEvent.scroll(scroller!);

    expect(onFetchMore).toHaveBeenCalled();
  });

  it("calls onFetchMore on mount when list fits without scrollbar", () => {
    const onFetchMore = vi.fn();
    const virtualizerRef: React.RefObject<unknown> = React.createRef();

    render(
      <VirtualizedItemList
        count={3}
        renderItem={renderItem}
        hasMore={true}
        onFetchMore={onFetchMore}
        virtualizerRef={virtualizerRef}
      />,
    );

    // In HappyDOM, scrollHeight and clientHeight are both 0.
    // The ref callback checks scrollHeight <= clientHeight (0 <= 0 is true),
    // which triggers onFetchMore synchronously for short lists.
    expect(onFetchMore).toHaveBeenCalled();
  });

  it("does not call onFetchMore when hasMore is false", () => {
    const onFetchMore = vi.fn();
    const virtualizerRef: React.RefObject<unknown> = React.createRef();

    const { container } = render(
      <div style={{ height: "200px", overflow: "auto" }}>
        <VirtualizedItemList
          count={50}
          renderItem={renderItem}
          hasMore={false}
          onFetchMore={onFetchMore}
          virtualizerRef={virtualizerRef}
        />
      </div>,
    );

    const scroller = getScroller(container);

    // Simulate scroll near the bottom
    Object.defineProperty(scroller, "scrollHeight", {
      value: 1600,
      configurable: true,
    });
    Object.defineProperty(scroller, "clientHeight", {
      value: 200,
      configurable: true,
    });
    Object.defineProperty(scroller, "scrollTop", {
      value: 1350,
      configurable: true,
    });
    fireEvent.scroll(scroller!);

    expect(onFetchMore).not.toHaveBeenCalled();
  });
});
