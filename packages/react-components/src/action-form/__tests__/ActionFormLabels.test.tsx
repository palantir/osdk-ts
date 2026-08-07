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

import type { ActionFormLabels } from "../ActionFormLabels.js";
import {
  ActionFormLabelsProvider,
  DEFAULT_ACTION_FORM_LABELS,
  useActionFormLabels,
} from "../ActionFormLabels.js";

type LabelKey = keyof ActionFormLabels;

const ALL_KEYS = Object.keys(DEFAULT_ACTION_FORM_LABELS) as LabelKey[];

/**
 * Renders the {@link useActionFormLabels} hook (optionally under a provider)
 * and returns the fully-resolved labels object so every key can be asserted.
 */
function resolveLabels(labels?: Partial<ActionFormLabels>): ActionFormLabels {
  let captured: ActionFormLabels | undefined;
  function Capture(): null {
    captured = useActionFormLabels();
    return null;
  }
  render(
    labels === undefined ? (
      <Capture />
    ) : (
      <ActionFormLabelsProvider labels={labels}>
        <Capture />
      </ActionFormLabelsProvider>
    ),
  );
  if (captured == null) {
    throw new Error("useActionFormLabels did not resolve");
  }
  return captured;
}

/**
 * Builds a complete override object with a distinct sentinel value for every
 * label key — strings become `override:<key>`, functions echo their args.
 */
function makeFullOverride(): ActionFormLabels {
  const overrides = {} as Record<string, unknown>;
  for (const key of ALL_KEYS) {
    const defaultValue = DEFAULT_ACTION_FORM_LABELS[key];
    overrides[key] =
      typeof defaultValue === "function"
        ? (...args: unknown[]) => `override:${key}(${args.join(",")})`
        : `override:${key}`;
  }
  return overrides as unknown as ActionFormLabels;
}

describe("ActionFormLabels", () => {
  afterEach(() => {
    cleanup();
  });

  it("resolves every label to its default when nothing is overridden", () => {
    const resolved = resolveLabels();

    // Sanity check that we are actually iterating a non-trivial key set.
    expect(ALL_KEYS.length).toBeGreaterThan(0);
    for (const key of ALL_KEYS) {
      expect(resolved[key]).toBe(DEFAULT_ACTION_FORM_LABELS[key]);
    }
  });

  it("overrides a subset and falls back to defaults for every other label", () => {
    const overrides: Partial<ActionFormLabels> = {
      submitButton: "override:submitButton",
      issueCount: (count) => `override:issueCount(${count})`,
      sectionErrorCount: (count) => `override:sectionErrorCount(${count})`,
      editedTag: "override:editedTag",
      dropdownNoResults: "override:dropdownNoResults",
      objectSetLoadError: (message) =>
        `override:objectSetLoadError(${message})`,
      validationRequired: "override:validationRequired",
      validationMinLength: (length) =>
        `override:validationMinLength(${length})`,
    };
    const overriddenKeys = new Set(Object.keys(overrides) as LabelKey[]);

    const resolved = resolveLabels(overrides);

    for (const key of ALL_KEYS) {
      if (overriddenKeys.has(key)) {
        expect(resolved[key]).toBe(overrides[key]);
      } else {
        expect(resolved[key]).toBe(DEFAULT_ACTION_FORM_LABELS[key]);
      }
    }
  });

  it("applies a full override for every label", () => {
    const overrides = makeFullOverride();

    const resolved = resolveLabels(overrides);

    for (const key of ALL_KEYS) {
      expect(resolved[key]).toBe(overrides[key]);
      // No key is left pointing at the built-in default.
      expect(resolved[key]).not.toBe(DEFAULT_ACTION_FORM_LABELS[key]);
    }
  });

  it("composes nested providers, inner overriding outer", () => {
    let captured: ActionFormLabels | undefined;
    function Capture(): null {
      captured = useActionFormLabels();
      return null;
    }
    render(
      <ActionFormLabelsProvider
        labels={{ submitButton: "Outer", editedTag: "Touched" }}
      >
        <ActionFormLabelsProvider labels={{ submitButton: "Inner" }}>
          <Capture />
        </ActionFormLabelsProvider>
      </ActionFormLabelsProvider>,
    );

    // Inner override wins for the key it sets...
    expect(captured?.submitButton).toBe("Inner");
    // ...the outer provider's other overrides still flow through...
    expect(captured?.editedTag).toBe("Touched");
    // ...and untouched keys remain the defaults.
    expect(captured?.validationRequired).toBe(
      DEFAULT_ACTION_FORM_LABELS.validationRequired,
    );
  });

  it("returns the parent context unchanged when a provider is given no labels", () => {
    let captured: ActionFormLabels | undefined;
    function Capture(): null {
      captured = useActionFormLabels();
      return null;
    }
    render(
      <ActionFormLabelsProvider>
        <Capture />
      </ActionFormLabelsProvider>,
    );
    // A provider with no labels does not allocate a new object.
    expect(captured).toBe(DEFAULT_ACTION_FORM_LABELS);
  });

  it("resolves to the defaults when no provider is present", () => {
    const resolved = resolveLabels();
    expect(resolved).toBe(DEFAULT_ACTION_FORM_LABELS);
  });

  it("keeps a stable value identity across renders with an equal inline labels object", () => {
    const seen: ActionFormLabels[] = [];
    function Capture(): null {
      seen.push(useActionFormLabels());
      return null;
    }
    const { rerender } = render(
      <ActionFormLabelsProvider labels={{ submitButton: "Send" }}>
        <Capture />
      </ActionFormLabelsProvider>,
    );
    // Re-render with a brand-new inline object of identical content.
    rerender(
      <ActionFormLabelsProvider labels={{ submitButton: "Send" }}>
        <Capture />
      </ActionFormLabelsProvider>,
    );
    // Content change gets a fresh identity.
    rerender(
      <ActionFormLabelsProvider labels={{ submitButton: "Go" }}>
        <Capture />
      </ActionFormLabelsProvider>,
    );

    expect(seen[0]).toBe(seen[1]);
    expect(seen[2]).not.toBe(seen[1]);
    expect(seen[2].submitButton).toBe("Go");
  });
});
