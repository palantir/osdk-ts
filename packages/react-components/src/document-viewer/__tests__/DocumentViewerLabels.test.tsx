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

import type { DocumentViewerLabels } from "../DocumentViewerLabels.js";
import {
  DEFAULT_DOCUMENT_VIEWER_LABELS,
  DocumentViewerLabelsProvider,
  useDocumentViewerLabels,
} from "../DocumentViewerLabels.js";

type LabelKey = keyof DocumentViewerLabels;

const ALL_KEYS = Object.keys(DEFAULT_DOCUMENT_VIEWER_LABELS) as LabelKey[];

/**
 * Renders the {@link useDocumentViewerLabels} hook (optionally under a
 * provider) and returns the fully-resolved labels object so every key can be
 * asserted.
 */
function resolveLabels(
  labels?: Partial<DocumentViewerLabels>,
): DocumentViewerLabels {
  let captured: DocumentViewerLabels | undefined;
  function Capture(): null {
    captured = useDocumentViewerLabels();
    return null;
  }
  render(
    labels === undefined ? (
      <Capture />
    ) : (
      <DocumentViewerLabelsProvider labels={labels}>
        <Capture />
      </DocumentViewerLabelsProvider>
    ),
  );
  if (captured == null) {
    throw new Error("useDocumentViewerLabels did not resolve");
  }
  return captured;
}

/**
 * Builds a complete override object with a distinct sentinel value for every
 * label key — strings become `override:<key>`, functions echo their args.
 */
function makeFullOverride(): DocumentViewerLabels {
  const overrides = {} as Record<string, unknown>;
  for (const key of ALL_KEYS) {
    const defaultValue = DEFAULT_DOCUMENT_VIEWER_LABELS[key];
    overrides[key] =
      typeof defaultValue === "function"
        ? (...args: unknown[]) => `override:${key}(${args.join(",")})`
        : `override:${key}`;
  }
  return overrides as unknown as DocumentViewerLabels;
}

describe("DocumentViewerLabels", () => {
  afterEach(() => {
    cleanup();
  });

  it("resolves every label to its default when nothing is overridden", () => {
    const resolved = resolveLabels();

    // Sanity check that we are actually iterating a non-trivial key set.
    expect(ALL_KEYS.length).toBeGreaterThan(0);
    for (const key of ALL_KEYS) {
      expect(resolved[key]).toBe(DEFAULT_DOCUMENT_VIEWER_LABELS[key]);
    }
  });

  it("overrides a subset and falls back to defaults for every other label", () => {
    const overrides: Partial<DocumentViewerLabels> = {
      unsupportedFileType: (mimeType) => `override:unsupported(${mimeType})`,
    };
    const overriddenKeys = new Set(Object.keys(overrides) as LabelKey[]);

    const resolved = resolveLabels(overrides);

    for (const key of ALL_KEYS) {
      if (overriddenKeys.has(key)) {
        expect(resolved[key]).toBe(overrides[key]);
      } else {
        expect(resolved[key]).toBe(DEFAULT_DOCUMENT_VIEWER_LABELS[key]);
      }
    }
  });

  it("applies a full override for every label", () => {
    const overrides = makeFullOverride();

    const resolved = resolveLabels(overrides);

    for (const key of ALL_KEYS) {
      expect(resolved[key]).toBe(overrides[key]);
      // No key is left pointing at the built-in default.
      expect(resolved[key]).not.toBe(DEFAULT_DOCUMENT_VIEWER_LABELS[key]);
    }
  });

  it("composes nested providers, inner overriding outer", () => {
    let captured: DocumentViewerLabels | undefined;
    function Capture(): null {
      captured = useDocumentViewerLabels();
      return null;
    }
    render(
      <DocumentViewerLabelsProvider
        labels={{
          convertingDocument: "Outer",
          unsupportedFileType: () => "Outer unsupported",
        }}
      >
        <DocumentViewerLabelsProvider labels={{ convertingDocument: "Inner" }}>
          <Capture />
        </DocumentViewerLabelsProvider>
      </DocumentViewerLabelsProvider>,
    );

    // Inner override wins for the key it sets...
    expect(captured?.convertingDocument).toBe("Inner");
    // ...and the outer provider's other overrides still flow through.
    expect(captured?.unsupportedFileType("text/plain")).toBe(
      "Outer unsupported",
    );
  });

  it("returns the parent context unchanged when a provider is given no labels", () => {
    let captured: DocumentViewerLabels | undefined;
    function Capture(): null {
      captured = useDocumentViewerLabels();
      return null;
    }
    render(
      <DocumentViewerLabelsProvider>
        <Capture />
      </DocumentViewerLabelsProvider>,
    );
    // A provider with no labels does not allocate a new object.
    expect(captured).toBe(DEFAULT_DOCUMENT_VIEWER_LABELS);
  });

  it("resolves to the defaults when no provider is present", () => {
    const resolved = resolveLabels();
    expect(resolved).toBe(DEFAULT_DOCUMENT_VIEWER_LABELS);
  });

  it("keeps a stable value identity across renders with an equal inline labels object", () => {
    const seen: DocumentViewerLabels[] = [];
    function Capture(): null {
      seen.push(useDocumentViewerLabels());
      return null;
    }
    const { rerender } = render(
      <DocumentViewerLabelsProvider labels={{ convertingDocument: "Working…" }}>
        <Capture />
      </DocumentViewerLabelsProvider>,
    );
    // Re-render with a brand-new inline object of identical content.
    rerender(
      <DocumentViewerLabelsProvider labels={{ convertingDocument: "Working…" }}>
        <Capture />
      </DocumentViewerLabelsProvider>,
    );
    // Content change gets a fresh identity.
    rerender(
      <DocumentViewerLabelsProvider labels={{ convertingDocument: "Other" }}>
        <Capture />
      </DocumentViewerLabelsProvider>,
    );

    expect(seen[0]).toBe(seen[1]);
    expect(seen[2]).not.toBe(seen[1]);
    expect(seen[2].convertingDocument).toBe("Other");
  });

  it("renders the default unsupported-file-type message", () => {
    expect(
      DEFAULT_DOCUMENT_VIEWER_LABELS.unsupportedFileType(
        "application/octet-stream",
      ),
    ).toBe("Unsupported file type: application/octet-stream");
  });
});
