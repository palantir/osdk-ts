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
import {
  formatDateForDisplay,
  formatDateForInput,
  parseDateFromInput,
  parseDateFromISO,
} from "../dateUtils.js";

describe("formatDateForInput", () => {
  it("formats a date to YYYY-MM-DD", () => {
    expect(formatDateForInput(new Date(2024, 0, 3))).toBe("2024-01-03");
    expect(formatDateForInput(undefined)).toBe("");
  });
});

describe("parseDateFromInput", () => {
  it("parses YYYY-MM-DD to local midnight", () => {
    const date = parseDateFromInput("2024-06-15")!;
    expect(date.getFullYear()).toBe(2024);
    expect(date.getMonth()).toBe(5);
    expect(date.getDate()).toBe(15);
    expect(date.getHours()).toBe(0);
  });

  it("returns undefined for empty or invalid input", () => {
    expect(parseDateFromInput("")).toBeUndefined();
    expect(parseDateFromInput("not-a-date")).toBeUndefined();
  });
});

describe("formatDateForDisplay", () => {
  it("returns fallback for undefined, formats date otherwise", () => {
    expect(formatDateForDisplay(undefined, "N/A")).toBe("N/A");
    expect(formatDateForDisplay(undefined)).toBe("");
    expect(formatDateForDisplay(new Date(2024, 5, 15))).toContain("2024");
  });
});

describe("parseDateFromISO", () => {
  it("parses ISO strings and passes through Date objects", () => {
    const existing = new Date(2024, 5, 15);
    expect(parseDateFromISO(existing)).toBe(existing);
    expect(parseDateFromISO("2024-06-15T12:00:00Z")).toBeInstanceOf(Date);
    expect(parseDateFromISO(undefined)).toBeUndefined();
    expect(parseDateFromISO(null)).toBeUndefined();
    expect(parseDateFromISO("not-a-date")).toBeUndefined();
  });
});
