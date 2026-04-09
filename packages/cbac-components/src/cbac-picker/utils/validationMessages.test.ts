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
import type { ValidationContext } from "./validationMessages.js";
import { getSubmitDisabledReason } from "./validationMessages.js";

const validBase: ValidationContext = {
  isValid: true,
  requiredMarkingGroups: [],
  selectedIds: ["m1"],
  disallowedMarkingIds: [],
  userSatisfiesMarkings: true,
};

describe("getSubmitDisabledReason", () => {
  it("returns undefined when isValid is true", () => {
    expect(getSubmitDisabledReason(validBase)).toBeUndefined();
  });

  it("returns required markings message when required groups exist", () => {
    expect(getSubmitDisabledReason({
      ...validBase,
      isValid: false,
      requiredMarkingGroups: [{ markingNames: ["A", "B"] }],
      disallowedMarkingIds: ["m1"],
      userSatisfiesMarkings: false,
    })).toBe("Selected markings do not include all required markings.");
  });

  it("returns disallowed message when selected markings are disallowed", () => {
    expect(getSubmitDisabledReason({
      ...validBase,
      isValid: false,
      selectedIds: ["m1", "m2"],
      disallowedMarkingIds: ["m2"],
      userSatisfiesMarkings: false,
    })).toBe("Selections include disallowed markings.");
  });

  it("returns user satisfaction message when userSatisfiesMarkings is false", () => {
    expect(getSubmitDisabledReason({
      ...validBase,
      isValid: false,
      userSatisfiesMarkings: false,
    })).toBe("Invalid configuration of markings.");
  });

  it("returns generic fallback when invalid with no specific reason", () => {
    expect(getSubmitDisabledReason({
      ...validBase,
      isValid: false,
    })).toBe("Invalid marking selection.");
  });

  it("prioritizes required markings over disallowed", () => {
    expect(getSubmitDisabledReason({
      ...validBase,
      isValid: false,
      requiredMarkingGroups: [{ markingNames: ["A"] }],
      selectedIds: ["m1"],
      disallowedMarkingIds: ["m1"],
    })).toBe("Selected markings do not include all required markings.");
  });

  it("prioritizes disallowed over userSatisfiesMarkings", () => {
    expect(getSubmitDisabledReason({
      ...validBase,
      isValid: false,
      selectedIds: ["m1"],
      disallowedMarkingIds: ["m1"],
      userSatisfiesMarkings: false,
    })).toBe("Selections include disallowed markings.");
  });

  it("does not flag disallowed markings that are not selected", () => {
    expect(getSubmitDisabledReason({
      ...validBase,
      isValid: false,
      selectedIds: ["m1"],
      disallowedMarkingIds: ["m2"],
      userSatisfiesMarkings: false,
    })).toBe("Invalid configuration of markings.");
  });

  it("returns undefined when isValid is true even if userSatisfiesMarkings is false", () => {
    expect(getSubmitDisabledReason({
      ...validBase,
      isValid: true,
      userSatisfiesMarkings: false,
    })).toBeUndefined();
  });

  it("returns generic fallback with empty selectedIds and disallowed markings", () => {
    expect(getSubmitDisabledReason({
      ...validBase,
      isValid: false,
      selectedIds: [],
      disallowedMarkingIds: ["m1"],
    })).toBe("Invalid marking selection.");
  });
});
