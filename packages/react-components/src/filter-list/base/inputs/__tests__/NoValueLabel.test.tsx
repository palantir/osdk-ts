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

import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import { isEmptyValue } from "../../../utils/filterValues.js";
import { NoValueLabel } from "../NoValueLabel.js";

afterEach(cleanup);

describe("NoValueLabel", () => {
  it("renders the literal text 'No value'", () => {
    render(<NoValueLabel />);
    expect(screen.getByText("No value")).toBeDefined();
  });

  it("uses a span element so it composes inside other inline contexts", () => {
    const { container } = render(<NoValueLabel />);
    const node = container.firstElementChild;
    expect(node?.tagName).toBe("SPAN");
  });

  it("applies the noValue class so theme tokens take effect", () => {
    const { container } = render(<NoValueLabel />);
    const node = container.firstElementChild;
    expect(node?.className.includes("noValue")).toBe(true);
  });

  it("forwards a custom className alongside the noValue class", () => {
    const { container } = render(<NoValueLabel className="extra" />);
    const node = container.firstElementChild;
    expect(node?.className.includes("noValue")).toBe(true);
    expect(node?.className.includes("extra")).toBe(true);
  });
});

describe("isEmptyValue", () => {
  it("treats null and undefined as empty", () => {
    expect(isEmptyValue(null)).toBe(true);
    expect(isEmptyValue(undefined)).toBe(true);
  });

  it("treats empty and whitespace-only strings as empty", () => {
    expect(isEmptyValue("")).toBe(true);
    expect(isEmptyValue("   ")).toBe(true);
    expect(isEmptyValue("\t\n")).toBe(true);
  });

  it("treats non-empty strings as non-empty", () => {
    expect(isEmptyValue("Active")).toBe(false);
    expect(isEmptyValue("0")).toBe(false);
    expect(isEmptyValue(" a ")).toBe(false);
  });

  it("treats numbers and booleans as non-empty", () => {
    expect(isEmptyValue(0)).toBe(false);
    expect(isEmptyValue(false)).toBe(false);
  });
});
