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

import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import { EmptyStringLabel } from "../EmptyStringLabel.js";

afterEach(cleanup);

describe("EmptyStringLabel", () => {
  it("renders the literal text '(empty)'", () => {
    render(<EmptyStringLabel />);
    expect(screen.getByText("(empty)")).toBeDefined();
  });

  it("uses a span element so it composes inside other inline contexts", () => {
    const { container } = render(<EmptyStringLabel />);
    const node = container.firstElementChild;
    expect(node?.tagName).toBe("SPAN");
  });

  it("applies the emptyString class so theme tokens take effect", () => {
    const { container } = render(<EmptyStringLabel />);
    const node = container.firstElementChild;
    expect(node?.className.includes("emptyString")).toBe(true);
  });

  it("forwards a custom className alongside the emptyString class", () => {
    const { container } = render(<EmptyStringLabel className="extra" />);
    const node = container.firstElementChild;
    expect(node?.className.includes("emptyString")).toBe(true);
    expect(node?.className.includes("extra")).toBe(true);
  });
});
