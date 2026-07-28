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

import { describe, expect, it } from "vitest";

import type { Recommendation } from "../utils/PerformanceRecommendationEngine.js";
import { OSDK_GUIDANCE_BY_CATEGORY } from "../utils/PerformanceRecommendationEngine.js";
import { buildCopyAllPrompt, buildCopyPrompt } from "./copyPrompt.js";

function makeRec(overrides: Partial<Recommendation> = {}): Recommendation {
  return {
    id: "rec-1",
    level: "high",
    category: "Bandwidth",
    title: "EmployeeCard fetches unused data",
    description: "This component fetches 12 properties but only uses 3",
    impact: "Save 4.2KB bandwidth per load",
    effort: "Low",
    suggestion: "Use $select to only fetch used properties",
    dismissible: true,
    ...overrides,
  };
}

describe("buildCopyPrompt", () => {
  it("renders intro, issue, suggestion, guidance and task sections", () => {
    const prompt = buildCopyPrompt(makeRec());

    expect(prompt).toContain("OSDK React Toolkit");
    expect(prompt).toContain(
      "ISSUE: EmployeeCard fetches unused data (Bandwidth, severity: high)"
    );
    expect(prompt).toContain(
      "WHY IT MATTERS: This component fetches 12 properties but only uses 3"
    );
    expect(prompt).toContain("EXPECTED IMPACT: Save 4.2KB bandwidth per load");
    expect(prompt).toContain(
      "SUGGESTED FIX:\nUse $select to only fetch used properties"
    );
    expect(prompt).toContain("OSDK GUIDANCE:");
    expect(prompt).toContain("TASK: Apply the suggested fix");
  });

  it("omits LOCATION and points the task at the issue when filePath is absent", () => {
    const prompt = buildCopyPrompt(makeRec());

    expect(prompt).not.toContain("LOCATION:");
    expect(prompt).not.toContain("the location above");
    expect(prompt).toContain(
      "Use the issue above — it names the component, query, and object type involved"
    );
  });

  it("never renders 'undefined' and omits sections whose data is missing", () => {
    // Mirrors a partially-populated recommendation (e.g. from a source that
    // can't fill every field): the prompt must not leak the literal "undefined".
    const sparse = {
      id: "sparse",
      level: "high",
      title: "Query waterfall on Employee",
      description: "ParcelList reads Shipment after Parcel resolves",
      category: "network",
    } as unknown as Recommendation;

    const prompt = buildCopyPrompt(sparse);

    expect(prompt).not.toContain("undefined");
    expect(prompt).not.toContain("EXPECTED IMPACT:");
    expect(prompt).not.toContain("SUGGESTED FIX:");
    expect(prompt).not.toContain("OSDK GUIDANCE:");
    expect(prompt).toContain(
      "ISSUE: Query waterfall on Employee (network, severity: high)"
    );
    expect(prompt).toContain(
      "WHY IT MATTERS: ParcelList reads Shipment after Parcel resolves"
    );
  });

  it("points the task at the location when filePath is present", () => {
    const prompt = buildCopyPrompt(makeRec({ filePath: "src/A.tsx" }));

    expect(prompt).toContain(
      "TASK: Apply the suggested fix at the location above"
    );
  });

  it("renders LOCATION with line number when both filePath and lineNumber are present", () => {
    const prompt = buildCopyPrompt(
      makeRec({ filePath: "src/A.tsx", lineNumber: 17 })
    );

    expect(prompt).toContain("LOCATION: src/A.tsx:17");
  });

  it("renders LOCATION without a line suffix when only filePath is present", () => {
    const prompt = buildCopyPrompt(makeRec({ filePath: "src/A.tsx" }));

    expect(prompt).toContain("LOCATION: src/A.tsx");
    expect(prompt).not.toContain("src/A.tsx:");
  });

  it("includes lineNumber 0 in the LOCATION line", () => {
    const prompt = buildCopyPrompt(
      makeRec({ filePath: "src/A.tsx", lineNumber: 0 })
    );

    expect(prompt).toContain("LOCATION: src/A.tsx:0");
  });

  it("omits the CURRENT CODE block when currentCode is absent", () => {
    expect(buildCopyPrompt(makeRec())).not.toContain("CURRENT CODE:");
  });

  it("renders a fenced CURRENT CODE block when currentCode is present", () => {
    const prompt = buildCopyPrompt(makeRec({ currentCode: "const x = 1;" }));

    expect(prompt).toContain("CURRENT CODE:\n```tsx\nconst x = 1;\n```");
  });

  it("renders the suggestion without a code fence when code is absent", () => {
    const prompt = buildCopyPrompt(makeRec());

    expect(prompt).toContain(
      "SUGGESTED FIX:\nUse $select to only fetch used properties"
    );
    expect(prompt).not.toContain("```tsx");
  });

  it("appends a fenced code block under SUGGESTED FIX when code is present", () => {
    const prompt = buildCopyPrompt(makeRec({ code: "const y = 2;" }));

    expect(prompt).toContain(
      "SUGGESTED FIX:\nUse $select to only fetch used properties\n```tsx\nconst y = 2;\n```"
    );
  });

  it("prefers the recommendation's own osdkGuidance when provided", () => {
    const prompt = buildCopyPrompt(
      makeRec({ osdkGuidance: "Custom guidance for this rec." })
    );

    expect(prompt).toContain("OSDK GUIDANCE:\nCustom guidance for this rec.");
  });

  it("falls back to the category guidance when osdkGuidance is absent", () => {
    const prompt = buildCopyPrompt(makeRec({ category: "Cache" }));

    expect(prompt).toContain(
      `OSDK GUIDANCE:\n${OSDK_GUIDANCE_BY_CATEGORY.Cache}`
    );
  });
});

describe("buildCopyAllPrompt", () => {
  it("renders the count preamble", () => {
    const prompt = buildCopyAllPrompt([makeRec(), makeRec({ id: "rec-2" })]);

    expect(prompt).toContain(
      "Here are 2 OSDK optimizations, ordered by priority:"
    );
  });

  it("numbers each recommendation and separates them with a horizontal rule", () => {
    const prompt = buildCopyAllPrompt([
      makeRec({ id: "rec-1", title: "First" }),
      makeRec({ id: "rec-2", title: "Second" }),
    ]);

    expect(prompt).toContain("1. You are helping optimize");
    expect(prompt).toContain("2. You are helping optimize");
    expect(prompt).toContain("\n\n---\n\n");
  });
});
