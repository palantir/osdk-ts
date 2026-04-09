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
import { isValidApiName, isValidObjectApiName } from "./ApiNameValidator.js";

describe("isValidApiName", () => {
  it("accepts valid names", () => {
    expect(isValidApiName("foo")).toBe(true);
    expect(isValidApiName("foo_bar")).toBe(true);
  });

  it("rejects names starting with a digit", () => {
    expect(isValidApiName("1foo")).toBe(false);
  });

  it("rejects empty string", () => {
    expect(isValidApiName("")).toBe(false);
  });

  it("rejects names with special characters", () => {
    expect(isValidApiName("foo bar")).toBe(false);
    expect(isValidApiName("foo-bar")).toBe(false);
  });

  it("rejects reserved keywords case-insensitively", () => {
    expect(isValidApiName("ontology")).toBe(false);
    expect(isValidApiName("Ontology")).toBe(false);
  });

  it("accepts names at exactly 100 characters", () => {
    expect(isValidApiName("a".repeat(100))).toBe(true);
  });

  it("rejects names exceeding 100 characters", () => {
    expect(isValidApiName("a".repeat(101))).toBe(false);
  });
});

describe("isValidObjectApiName", () => {
  it("rejects names with underscores", () => {
    expect(isValidObjectApiName("foo_bar")).toBe(false);
  });

  it("accepts names at exactly 100 characters", () => {
    expect(isValidObjectApiName("a".repeat(100))).toBe(true);
  });

  it("rejects names exceeding 100 characters", () => {
    expect(isValidObjectApiName("a".repeat(101))).toBe(false);
  });
});
