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
import { afterEach, describe, expect, it } from "vitest";
import { MarkdownRenderer } from "../MarkdownRenderer.js";

afterEach(() => {
  cleanup();
});

describe("MarkdownRenderer", () => {
  it("should render a heading", () => {
    render(<MarkdownRenderer content="# Hello World" />);
    expect(screen.getByRole("heading", { level: 1 })).toBeTruthy();
    expect(screen.getByText("Hello World")).toBeTruthy();
  });

  it("should render a paragraph", () => {
    render(<MarkdownRenderer content="Some paragraph text" />);
    expect(screen.getByText("Some paragraph text")).toBeTruthy();
  });

  it("should render bold and italic text", () => {
    render(<MarkdownRenderer content="**bold** and *italic*" />);
    expect(screen.getByText("bold").tagName).toBe("STRONG");
    expect(screen.getByText("italic").tagName).toBe("EM");
  });

  it("should render a link", () => {
    render(
      <MarkdownRenderer content="[Example](https://example.com)" />,
    );
    const link = screen.getByRole("link", { name: "Example" });
    expect(link).toBeTruthy();
    expect(link.getAttribute("href")).toBe("https://example.com");
  });

  it("should render a code block", () => {
    render(
      <MarkdownRenderer content={"```\nconst x = 1;\n```"} />,
    );
    expect(screen.getByText("const x = 1;")).toBeTruthy();
  });

  it("should render a table (GFM)", () => {
    const table = `| Name | Value |
| ---- | ----- |
| foo  | bar   |`;
    render(<MarkdownRenderer content={table} />);
    expect(screen.getByRole("table")).toBeTruthy();
    expect(screen.getByText("foo")).toBeTruthy();
    expect(screen.getByText("bar")).toBeTruthy();
  });

  it("should render strikethrough text (GFM)", () => {
    render(<MarkdownRenderer content="~~deleted~~" />);
    expect(screen.getByText("deleted").tagName).toBe("DEL");
  });

  it("should render task list checkboxes (GFM)", () => {
    render(
      <MarkdownRenderer content={"- [x] Done\n- [ ] Not done"} />,
    );
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(2);
    expect((checkboxes[0] as HTMLInputElement).checked).toBe(true);
    expect((checkboxes[1] as HTMLInputElement).checked).toBe(false);
  });

  it("should apply a custom className", () => {
    const { container } = render(
      <MarkdownRenderer content="# Test" className="my-custom-class" />,
    );
    expect(container.firstElementChild?.classList.contains("my-custom-class"))
      .toBe(true);
  });
});
