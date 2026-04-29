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

import { cleanup, render } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import type {
  VirtualItemRenderProps,
  VirtualizedItemListVirtualizer,
} from "../fields/VirtualizedItemList.js";
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
    const virtualizerRef = React.createRef<VirtualizedItemListVirtualizer>();

    const { container } = render(
      <VirtualizedItemList
        count={5}
        renderItem={renderItem}
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

  it("exposes the virtualizer count through the ref", () => {
    const virtualizerRef = React.createRef<VirtualizedItemListVirtualizer>();

    render(
      <VirtualizedItemList
        count={7}
        renderItem={renderItem}
        virtualizerRef={virtualizerRef}
      />,
    );

    const virtualizer = virtualizerRef.current;
    expect(virtualizer).not.toBeNull();
    expect(virtualizer?.options.count).toBe(7);
  });
});
