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

import { describe, expect, it } from "vitest";

import type { MarkingSelectionState } from "../../types.js";
import {
  getDisplayLabel,
  getTooltipText,
  isDisallowed,
  isImplied,
} from "../selectionStateHelpers.js";

const ALL_STATES: MarkingSelectionState[] = [
  "NONE",
  "SELECTED",
  "IMPLIED",
  "DISALLOWED",
  "IMPLIED_DISALLOWED",
];

describe("isDisallowed", () => {
  it("is true only for DISALLOWED and IMPLIED_DISALLOWED", () => {
    const disallowed = ALL_STATES.filter(isDisallowed);
    expect(disallowed).toEqual(["DISALLOWED", "IMPLIED_DISALLOWED"]);
  });
});

describe("isImplied", () => {
  it("is true only for IMPLIED and IMPLIED_DISALLOWED", () => {
    const implied = ALL_STATES.filter(isImplied);
    expect(implied).toEqual(["IMPLIED", "IMPLIED_DISALLOWED"]);
  });
});

describe("getDisplayLabel", () => {
  it("wraps implied markings in parentheses", () => {
    expect(getDisplayLabel("Secret", "IMPLIED")).toBe("(Secret)");
    expect(getDisplayLabel("Secret", "IMPLIED_DISALLOWED")).toBe("(Secret)");
  });

  it("leaves non-implied markings unchanged", () => {
    expect(getDisplayLabel("Secret", "SELECTED")).toBe("Secret");
    expect(getDisplayLabel("Secret", "DISALLOWED")).toBe("Secret");
    expect(getDisplayLabel("Secret", "NONE")).toBe("Secret");
  });
});

describe("getTooltipText", () => {
  it("explains why a disallowed marking is unavailable", () => {
    expect(getTooltipText("DISALLOWED")).toBe(
      "This marking is not allowed with the current selection"
    );
  });

  it("distinguishes implied-but-disallowed markings", () => {
    expect(getTooltipText("IMPLIED_DISALLOWED")).toBe(
      "This marking is implied but not allowed"
    );
  });

  it("returns undefined for states that need no explanation", () => {
    expect(getTooltipText("NONE")).toBeUndefined();
    expect(getTooltipText("SELECTED")).toBeUndefined();
    expect(getTooltipText("IMPLIED")).toBeUndefined();
  });
});
