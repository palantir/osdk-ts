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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ContextItemPill } from "../ContextItemPill.js";

afterEach(() => {
  cleanup();
});

describe("ContextItemPill", () => {
  it("renders the label", () => {
    render(<ContextItemPill label="employees" dialogTitle="emp" />);
    expect(screen.getByText("employees")).toBeTruthy();
  });

  it("renders the secondary text when provided", () => {
    render(
      <ContextItemPill
        label="employees"
        secondaryText="42 props"
        dialogTitle="emp"
      />,
    );
    expect(screen.getByText("42 props")).toBeTruthy();
  });

  it("does not render secondary text when undefined", () => {
    render(<ContextItemPill label="employees" dialogTitle="emp" />);
    expect(screen.queryByText("42 props")).toBeNull();
  });

  it("renders the loaded badge by default", () => {
    render(<ContextItemPill label="employees" dialogTitle="emp" />);
    expect(screen.getByText("Loaded")).toBeTruthy();
  });

  it("hides the loaded badge when showLoadedBadge is false", () => {
    render(
      <ContextItemPill
        label="employees"
        dialogTitle="emp"
        showLoadedBadge={false}
      />,
    );
    expect(screen.queryByText("Loaded")).toBeNull();
  });

  it("renders a custom loaded label", () => {
    render(
      <ContextItemPill
        label="employees"
        dialogTitle="emp"
        loadedLabel="Ready"
      />,
    );
    expect(screen.getByText("Ready")).toBeTruthy();
  });

  it("renders the root as a button for keyboard accessibility", () => {
    render(<ContextItemPill label="employees" dialogTitle="emp" />);
    const button = screen.getByRole("button", { name: /employees/i });
    expect(button.tagName).toBe("BUTTON");
    expect(button.getAttribute("type")).toBe("button");
  });

  it("opens the dialog when the pill is clicked", () => {
    render(
      <ContextItemPill
        label="employees"
        dialogTitle="employees context"
        data={{ count: 42 }}
      />,
    );
    expect(screen.queryByText("employees context")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /employees/i }));
    expect(screen.getByText("employees context")).toBeTruthy();
  });

  it("renders JSON.stringify of data inside the open dialog", () => {
    render(
      <ContextItemPill
        label="employees"
        dialogTitle="employees context"
        data={{ count: 42, ids: ["a", "b"] }}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /employees/i }));
    const pre = screen.getByText(/"count": 42/);
    expect(pre).toBeTruthy();
    expect(pre.textContent).toContain("\"ids\"");
  });

  it("renders dialogContent when provided, ignoring data", () => {
    render(
      <ContextItemPill
        label="employees"
        dialogTitle="employees context"
        data={{ count: 42 }}
        dialogContent={<div>custom content</div>}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /employees/i }));
    expect(screen.getByText("custom content")).toBeTruthy();
    expect(screen.queryByText(/"count": 42/)).toBeNull();
  });

  it("merges className onto the root", () => {
    render(
      <ContextItemPill
        label="employees"
        dialogTitle="emp"
        className="custom-class"
      />,
    );
    const button = screen.getByRole("button", { name: /employees/i });
    expect(button.classList.contains("custom-class")).toBe(true);
  });
});
