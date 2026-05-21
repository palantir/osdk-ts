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

// @vitest-environment happy-dom

import React, { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, describe, expect, it } from "vitest";
import { BrandThemeDecorator } from "../BrandThemeDecorator.js";
import { BRAND_THEME_PRESET_GLOBAL_KEY } from "../brandThemeState.js";

declare global {
  // React's `act` warning reads this test-only global before flushing updates.
  // Without it, direct ReactDOM tests pass but print noisy environment warnings.
  var IS_REACT_ACT_ENVIRONMENT: boolean | undefined;
}

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

function Story() {
  return <div>Story</div>;
}

function renderDecorator(element: React.ReactElement) {
  const container = document.createElement("div");
  document.body.append(container);
  let root: Root | undefined;

  act(() => {
    root = createRoot(container);
    root.render(element);
  });

  return {
    rerender(nextElement: React.ReactElement) {
      act(() => root?.render(nextElement));
    },
    unmount() {
      act(() => root?.unmount());
      container.remove();
    },
  };
}

describe("BrandThemeDecorator", () => {
  afterEach(() => {
    document.documentElement.removeAttribute("style");
    document.body.replaceChildren();
  });

  it("applies preset CSS variables before the story is painted", () => {
    renderDecorator(
      <BrandThemeDecorator
        Story={Story}
        globals={{ [BRAND_THEME_PRESET_GLOBAL_KEY]: "devcon" }}
      />,
    );

    expect(
      document.documentElement.style.getPropertyValue(
        "--osdk-intent-primary-rest",
      ),
    ).toBe("#16a34a");
  });

  it("removes stale preset variables when the selected preset changes", () => {
    const { rerender } = renderDecorator(
      <BrandThemeDecorator
        Story={Story}
        globals={{ [BRAND_THEME_PRESET_GLOBAL_KEY]: "modern" }}
      />,
    );

    expect(
      document.documentElement.style.getPropertyValue("--bp-palette-black"),
    ).toBe("oklch(0.2827 0.019 238.86)");

    rerender(
      <BrandThemeDecorator
        Story={Story}
        globals={{ [BRAND_THEME_PRESET_GLOBAL_KEY]: "workshop-light" }}
      />,
    );

    expect(
      document.documentElement.style.getPropertyValue(
        "--osdk-intent-primary-rest",
      ),
    ).toBe("#2d72d2");
    expect(
      document.documentElement.style.getPropertyValue("--bp-palette-black"),
    ).toBe("");
  });

  it("restores inline variables that existed before the decorator mounted", () => {
    document.documentElement.style.setProperty(
      "--osdk-intent-primary-rest",
      "rebeccapurple",
    );

    const { unmount } = renderDecorator(
      <BrandThemeDecorator
        Story={Story}
        globals={{ [BRAND_THEME_PRESET_GLOBAL_KEY]: "devcon" }}
      />,
    );

    unmount();

    expect(
      document.documentElement.style.getPropertyValue(
        "--osdk-intent-primary-rest",
      ),
    ).toBe("rebeccapurple");
  });

  it("restores inline variable priority after the decorator unmounts", () => {
    document.documentElement.style.setProperty(
      "--osdk-intent-primary-rest",
      "rebeccapurple",
      "important",
    );

    const { unmount } = renderDecorator(
      <BrandThemeDecorator
        Story={Story}
        globals={{ [BRAND_THEME_PRESET_GLOBAL_KEY]: "devcon" }}
      />,
    );

    unmount();

    expect(
      document.documentElement.style.getPropertyPriority(
        "--osdk-intent-primary-rest",
      ),
    ).toBe("important");
  });
});
