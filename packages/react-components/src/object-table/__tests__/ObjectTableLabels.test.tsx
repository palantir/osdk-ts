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

import type { ObjectTableLabels } from "../ObjectTableLabels.js";
import {
  DEFAULT_OBJECT_TABLE_LABELS,
  ObjectTableLabelsProvider,
  useObjectTableLabels,
} from "../ObjectTableLabels.js";

type LabelKey = keyof ObjectTableLabels;

const ALL_KEYS = Object.keys(DEFAULT_OBJECT_TABLE_LABELS) as LabelKey[];

/**
 * Renders the {@link useObjectTableLabels} hook (optionally under a provider)
 * and returns the fully-resolved labels object so every key can be asserted.
 */
function resolveLabels(labels?: Partial<ObjectTableLabels>): ObjectTableLabels {
  let captured: ObjectTableLabels | undefined;
  function Capture(): null {
    captured = useObjectTableLabels();
    return null;
  }
  render(
    labels === undefined ? (
      <Capture />
    ) : (
      <ObjectTableLabelsProvider labels={labels}>
        <Capture />
      </ObjectTableLabelsProvider>
    )
  );
  if (captured == null) {
    throw new Error("useObjectTableLabels did not resolve");
  }
  return captured;
}

/**
 * Builds a complete override object with a distinct sentinel value for every
 * label key — strings become `override:<key>`, functions echo their args.
 */
function makeFullOverride(): ObjectTableLabels {
  const overrides = {} as Record<string, unknown>;
  for (const key of ALL_KEYS) {
    const defaultValue = DEFAULT_OBJECT_TABLE_LABELS[key];
    overrides[key] =
      typeof defaultValue === "function"
        ? (...args: unknown[]) => `override:${key}(${args.join(",")})`
        : `override:${key}`;
  }
  return overrides as unknown as ObjectTableLabels;
}

describe("ObjectTableLabels", () => {
  afterEach(() => {
    cleanup();
  });

  it("resolves every label to its default when nothing is overridden", () => {
    const resolved = resolveLabels();

    // Sanity check that we are actually iterating a non-trivial key set.
    expect(ALL_KEYS.length).toBeGreaterThan(0);
    for (const key of ALL_KEYS) {
      expect(resolved[key]).toBe(DEFAULT_OBJECT_TABLE_LABELS[key]);
    }
  });

  it("overrides a subset and falls back to defaults for every other label", () => {
    const overrides: Partial<ObjectTableLabels> = {
      noData: "override:noData",
      errorLoadingData: (message) => `override:errorLoadingData(${message})`,
      editFooterCancel: "override:editFooterCancel",
      editFooterModificationCount: (count) => `override:count(${count})`,
      columnConfigApply: "override:columnConfigApply",
      sortDialogToggleDirection: (name) => `override:toggle(${name})`,
      headerMenuPinColumn: "override:headerMenuPinColumn",
      selectRow: (row) => `override:selectRow(${row})`,
    };
    const overriddenKeys = new Set(Object.keys(overrides) as LabelKey[]);

    const resolved = resolveLabels(overrides);

    for (const key of ALL_KEYS) {
      if (overriddenKeys.has(key)) {
        expect(resolved[key]).toBe(overrides[key]);
      } else {
        expect(resolved[key]).toBe(DEFAULT_OBJECT_TABLE_LABELS[key]);
      }
    }
  });

  it("applies a full override for every label", () => {
    const overrides = makeFullOverride();

    const resolved = resolveLabels(overrides);

    for (const key of ALL_KEYS) {
      expect(resolved[key]).toBe(overrides[key]);
      // No key is left pointing at the built-in default.
      expect(resolved[key]).not.toBe(DEFAULT_OBJECT_TABLE_LABELS[key]);
    }
  });

  it("composes nested providers, inner overriding outer", () => {
    let captured: ObjectTableLabels | undefined;
    function Capture(): null {
      captured = useObjectTableLabels();
      return null;
    }
    render(
      <ObjectTableLabelsProvider
        labels={{ editFooterEditTable: "Outer", noData: "Empty here" }}
      >
        <ObjectTableLabelsProvider labels={{ editFooterEditTable: "Inner" }}>
          <Capture />
        </ObjectTableLabelsProvider>
      </ObjectTableLabelsProvider>
    );

    // Inner override wins for the key it sets...
    expect(captured?.editFooterEditTable).toBe("Inner");
    // ...the outer provider's other overrides still flow through...
    expect(captured?.noData).toBe("Empty here");
    // ...and untouched keys remain the defaults.
    expect(captured?.editFooterCancel).toBe(
      DEFAULT_OBJECT_TABLE_LABELS.editFooterCancel
    );
  });

  it("returns the parent context unchanged when a provider is given no labels", () => {
    let captured: ObjectTableLabels | undefined;
    function Capture(): null {
      captured = useObjectTableLabels();
      return null;
    }
    render(
      <ObjectTableLabelsProvider>
        <Capture />
      </ObjectTableLabelsProvider>
    );
    // A provider with no labels does not allocate a new object.
    expect(captured).toBe(DEFAULT_OBJECT_TABLE_LABELS);
  });

  it("resolves to the defaults when no provider is present", () => {
    const resolved = resolveLabels();
    expect(resolved).toBe(DEFAULT_OBJECT_TABLE_LABELS);
  });
});
