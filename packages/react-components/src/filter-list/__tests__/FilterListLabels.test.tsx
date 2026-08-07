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

import type { FilterListLabels } from "../FilterListLabels.js";
import {
  DEFAULT_FILTER_LIST_LABELS,
  FilterListLabelsProvider,
  useFilterListLabels,
} from "../FilterListLabels.js";

type LabelKey = keyof FilterListLabels;

const ALL_KEYS = Object.keys(DEFAULT_FILTER_LIST_LABELS) as LabelKey[];

/**
 * Renders the {@link useFilterListLabels} hook (optionally under a provider)
 * and returns the fully-resolved labels object so every key can be asserted.
 */
function resolveLabels(labels?: Partial<FilterListLabels>): FilterListLabels {
  let captured: FilterListLabels | undefined;
  function Capture(): null {
    captured = useFilterListLabels();
    return null;
  }
  render(
    labels === undefined ? (
      <Capture />
    ) : (
      <FilterListLabelsProvider labels={labels}>
        <Capture />
      </FilterListLabelsProvider>
    ),
  );
  if (captured == null) {
    throw new Error("useFilterListLabels did not resolve");
  }
  return captured;
}

/**
 * Builds a complete override object with a distinct sentinel value for every
 * label key — strings become `override:<key>`, functions echo their args.
 */
function makeFullOverride(): FilterListLabels {
  const overrides = {} as Record<string, unknown>;
  for (const key of ALL_KEYS) {
    const defaultValue = DEFAULT_FILTER_LIST_LABELS[key];
    overrides[key] =
      typeof defaultValue === "function"
        ? (...args: unknown[]) => `override:${key}(${args.join(",")})`
        : `override:${key}`;
  }
  return overrides as unknown as FilterListLabels;
}

describe("FilterListLabels", () => {
  afterEach(() => {
    cleanup();
  });

  it("resolves every label to its default when nothing is overridden", () => {
    const resolved = resolveLabels();

    // Sanity check that we are actually iterating a non-trivial key set.
    expect(ALL_KEYS.length).toBeGreaterThan(0);
    for (const key of ALL_KEYS) {
      expect(resolved[key]).toBe(DEFAULT_FILTER_LIST_LABELS[key]);
    }
  });

  it("overrides a subset and falls back to defaults for every other label", () => {
    const overrides: Partial<FilterListLabels> = {
      resetFilters: "override:resetFilters",
      removeFilter: (name) => `override:removeFilter(${name})`,
      clearAll: "override:clearAll",
      viewAll: (count) => `override:viewAll(${count})`,
      noValue: "override:noValue",
      numberRangeMinLabel: "override:numberRangeMinLabel",
      selectedOfTotalValues: (a, b) => `override:selected(${a},${b})`,
      summaryCustom: "override:summaryCustom",
    };
    const overriddenKeys = new Set(Object.keys(overrides) as LabelKey[]);

    const resolved = resolveLabels(overrides);

    for (const key of ALL_KEYS) {
      if (overriddenKeys.has(key)) {
        expect(resolved[key]).toBe(overrides[key]);
      } else {
        expect(resolved[key]).toBe(DEFAULT_FILTER_LIST_LABELS[key]);
      }
    }
  });

  it("applies a full override for every label", () => {
    const overrides = makeFullOverride();

    const resolved = resolveLabels(overrides);

    for (const key of ALL_KEYS) {
      expect(resolved[key]).toBe(overrides[key]);
      // No key is left pointing at the built-in default.
      expect(resolved[key]).not.toBe(DEFAULT_FILTER_LIST_LABELS[key]);
    }
  });

  it("composes nested providers, inner overriding outer", () => {
    let captured: FilterListLabels | undefined;
    function Capture(): null {
      captured = useFilterListLabels();
      return null;
    }
    render(
      <FilterListLabelsProvider
        labels={{ clearAll: "Outer", noValue: "Nothing here" }}
      >
        <FilterListLabelsProvider labels={{ clearAll: "Inner" }}>
          <Capture />
        </FilterListLabelsProvider>
      </FilterListLabelsProvider>,
    );

    // Inner override wins for the key it sets...
    expect(captured?.clearAll).toBe("Inner");
    // ...the outer provider's other overrides still flow through...
    expect(captured?.noValue).toBe("Nothing here");
    // ...and untouched keys remain the defaults.
    expect(captured?.resetFilters).toBe(
      DEFAULT_FILTER_LIST_LABELS.resetFilters,
    );
  });

  it("returns the parent context unchanged when a provider is given no labels", () => {
    let captured: FilterListLabels | undefined;
    function Capture(): null {
      captured = useFilterListLabels();
      return null;
    }
    render(
      <FilterListLabelsProvider>
        <Capture />
      </FilterListLabelsProvider>,
    );
    // A provider with no labels does not allocate a new object.
    expect(captured).toBe(DEFAULT_FILTER_LIST_LABELS);
  });

  it("resolves to the defaults when no provider is present", () => {
    const resolved = resolveLabels();
    expect(resolved).toBe(DEFAULT_FILTER_LIST_LABELS);
  });

  it("keeps a stable value identity across renders with an equal inline labels object", () => {
    const seen: FilterListLabels[] = [];
    function Capture(): null {
      seen.push(useFilterListLabels());
      return null;
    }
    const { rerender } = render(
      <FilterListLabelsProvider labels={{ clearAll: "Wipe" }}>
        <Capture />
      </FilterListLabelsProvider>,
    );
    // Re-render with a brand-new inline object of identical content.
    rerender(
      <FilterListLabelsProvider labels={{ clearAll: "Wipe" }}>
        <Capture />
      </FilterListLabelsProvider>,
    );
    // Content change gets a fresh identity.
    rerender(
      <FilterListLabelsProvider labels={{ clearAll: "Erase" }}>
        <Capture />
      </FilterListLabelsProvider>,
    );

    expect(seen[0]).toBe(seen[1]);
    expect(seen[2]).not.toBe(seen[1]);
    expect(seen[2].clearAll).toBe("Erase");
  });
});
