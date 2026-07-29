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
import { CategoryMarkingGroup } from "../CategoryMarkingGroup.js";

const EMPTY_STATES = new Map<string, MarkingSelectionState>();

function markings(count: number): Array<{ id: string; name: string }> {
  return Array.from({ length: count }, (_, i) => ({
    id: `m${i}`,
    name: `Marking ${i}`,
  }));
}

function renderGroup(
  count: number,
  onMarkingToggle: (id: string) => void = vi.fn()
): void {
  render(
    <CategoryMarkingGroup
      categoryName="Clearance"
      markings={markings(count)}
      markingStates={EMPTY_STATES}
      onMarkingToggle={onMarkingToggle}
    />
  );
}

describe("CategoryMarkingGroup", () => {
  afterEach(cleanup);

  it("renders every marking directly when the count fits the grid", () => {
    renderGroup(5);
    for (let i = 0; i < 5; i++) {
      expect(
        screen.getByRole("button", { name: `Marking ${i}` })
      ).toBeDefined();
    }
    expect(screen.queryByText(/more$/u)).toBeNull();
  });

  it("collapses markings beyond the grid into an overflow button", () => {
    renderGroup(15);
    // First 11 markings stay visible; the rest collapse behind "+N more".
    expect(screen.getByRole("button", { name: "Marking 0" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Marking 10" })).toBeDefined();
    expect(screen.queryByRole("button", { name: "Marking 11" })).toBeNull();
    expect(screen.getByRole("button", { name: "+4 more" })).toBeDefined();
  });

  it("toggles a visible marking by id", () => {
    const onMarkingToggle = vi.fn();
    renderGroup(3, onMarkingToggle);
    fireEvent.click(screen.getByRole("button", { name: "Marking 1" }));
    expect(onMarkingToggle).toHaveBeenCalledExactlyOnceWith("m1");
  });
});
