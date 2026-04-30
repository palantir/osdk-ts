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
import { afterEach, describe, expect, it } from "vitest";
import { TypingIndicator } from "../TypingIndicator.js";

afterEach(() => {
  cleanup();
});

describe("TypingIndicator", () => {
  it("renders three dot children", () => {
    const { container } = render(<TypingIndicator />);
    const root = container.firstElementChild;
    expect(root).toBeTruthy();
    expect(root?.children.length).toBe(3);
  });

  it("exposes role=status with default label", () => {
    render(<TypingIndicator />);
    const status = screen.getByRole("status");
    expect(status.getAttribute("aria-label")).toBe("Loading");
  });

  it("uses custom aria-label when label prop is provided", () => {
    render(<TypingIndicator label="Agent thinking" />);
    expect(screen.getByRole("status").getAttribute("aria-label")).toBe(
      "Agent thinking",
    );
  });

  it("merges className onto the root", () => {
    const { container } = render(
      <TypingIndicator className="custom-class" />,
    );
    expect(
      container.firstElementChild?.classList.contains("custom-class"),
    ).toBe(true);
  });

  it("does not set an inline style attribute on the root", () => {
    const { container } = render(<TypingIndicator />);
    const root = container.firstElementChild as HTMLElement | null;
    expect(root?.getAttribute("style")).toBeNull();
  });

  it("hides dots from assistive technology", () => {
    const { container } = render(<TypingIndicator />);
    const dots = container.firstElementChild?.children;
    expect(dots).toBeTruthy();
    Array.from(dots ?? []).forEach((dot) => {
      expect(dot.getAttribute("aria-hidden")).toBe("true");
    });
  });
});
