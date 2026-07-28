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
import { afterEach, describe, expect, it, vi } from "vitest";

import type { MarkingSelectionState } from "../../types.js";
import { MarkingButton } from "../MarkingButton.js";

function renderButton(
  overrides: Partial<{
    selectionState: MarkingSelectionState;
    description: string;
    disabled: boolean;
    onToggle: (id: string) => void;
  }> = {}
): (id: string) => void {
  const onToggle = overrides.onToggle ?? vi.fn();
  render(
    <MarkingButton
      id="m1"
      label="Marking 1"
      selectionState={overrides.selectionState ?? "NONE"}
      description={overrides.description}
      disabled={overrides.disabled}
      onToggle={onToggle}
    />
  );
  return onToggle;
}

describe("MarkingButton", () => {
  afterEach(cleanup);

  it("toggles an available marking by its id when clicked", () => {
    const onToggle = renderButton({ selectionState: "NONE" });
    fireEvent.click(screen.getByRole("button", { name: "Marking 1" }));
    expect(onToggle).toHaveBeenCalledExactlyOnceWith("m1");
  });

  it("marks a selected marking as pressed", () => {
    renderButton({ selectionState: "SELECTED" });
    expect(screen.getByRole("button").getAttribute("aria-pressed")).toBe(
      "true"
    );
  });

  it("marks an implied marking as pressed", () => {
    renderButton({ selectionState: "IMPLIED" });
    expect(screen.getByRole("button").getAttribute("aria-pressed")).toBe(
      "true"
    );
  });

  it("renders implied markings with a parenthesized label", () => {
    renderButton({ selectionState: "IMPLIED" });
    expect(screen.getByRole("button").textContent).toBe("(Marking 1)");
  });

  it("does not toggle a disallowed marking and marks it aria-disabled", () => {
    const onToggle = renderButton({ selectionState: "DISALLOWED" });
    const button = screen.getByRole("button", { name: "Marking 1" });
    expect(button.getAttribute("aria-disabled")).toBe("true");

    fireEvent.click(button);
    expect(onToggle).not.toHaveBeenCalled();
  });

  it("does not toggle when explicitly disabled (read-only)", () => {
    const onToggle = renderButton({ selectionState: "NONE", disabled: true });
    fireEvent.click(screen.getByRole("button", { name: "Marking 1" }));
    expect(onToggle).not.toHaveBeenCalled();
  });

  it("still toggles an available marking that carries a description tooltip", () => {
    const onToggle = renderButton({
      selectionState: "NONE",
      description: "Extra context",
    });
    fireEvent.click(screen.getByRole("button", { name: "Marking 1" }));
    expect(onToggle).toHaveBeenCalledExactlyOnceWith("m1");
  });
});
