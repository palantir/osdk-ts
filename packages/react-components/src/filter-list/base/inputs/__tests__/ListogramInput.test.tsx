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
import React, { useState } from "react";
import { afterEach, describe, expect, it } from "vitest";

import type { PropertyAggregationValue } from "../../../types/AggregationTypes.js";
import { ListogramInput } from "../ListogramInput.js";

afterEach(cleanup);

const mockValues: PropertyAggregationValue[] = [
  { value: "Engineering", count: 42 },
  { value: "Sales", count: 18 },
  { value: "Marketing", count: 12 },
  { value: "Support", count: 6 },
];

describe("ListogramInput ordering", () => {
  it("keeps row order unchanged when a checkbox is toggled", () => {
    render(<ControlledListogram values={mockValues} maxCount={42} />);

    const before = getRenderedOrder();
    expect(before).toEqual(["Engineering", "Sales", "Marketing", "Support"]);

    // Toggle a row that is not already at the top.
    fireEvent.click(screen.getByText("Sales"));

    const afterSelect = getRenderedOrder();
    expect(afterSelect).toEqual(before);

    // Toggling it back off must also leave order unchanged.
    fireEvent.click(screen.getByText("Sales"));
    expect(getRenderedOrder()).toEqual(before);
  });

  it("renders in natural order regardless of which values are selected", () => {
    render(
      <ControlledListogram
        values={mockValues}
        maxCount={42}
        initialSelected={["Support", "Marketing"]}
      />
    );

    expect(getRenderedOrder()).toEqual([
      "Engineering",
      "Sales",
      "Marketing",
      "Support",
    ]);
  });

  it("keeps a below-fold selected value visible at the tail in the collapsed view", () => {
    // maxVisibleItems=2 -> collapsed body shows Engineering, Sales.
    // Support is below the fold but selected, so it must be appended at the tail
    // without hoisting it above the fold or displacing the visible rows.
    render(
      <ControlledListogram
        values={mockValues}
        maxCount={42}
        maxVisibleItems={2}
        initialSelected={["Support"]}
      />
    );

    expect(getRenderedOrder()).toEqual(["Engineering", "Sales", "Support"]);
    expect(queryRow("Marketing")).toBeNull();
    expect(queryRow("Support")).not.toBeNull();
    expect(screen.getByRole("button", { name: "View all (4)" })).not.toBeNull();
  });

  it("drops a below-fold value from the collapsed view once it is unchecked", () => {
    // maxVisibleItems=2 -> collapsed body shows Engineering, Sales; Support is
    // below the fold but selected, so it is appended at the tail.
    render(
      <ControlledListogram
        values={mockValues}
        maxCount={42}
        maxVisibleItems={2}
        initialSelected={["Support"]}
      />
    );

    const supportRow = queryRow("Support");
    expect(supportRow).not.toBeNull();
    expect(supportRow?.getAttribute("aria-pressed")).toBe("true");
    expect(getRenderedOrder()).toEqual(["Engineering", "Sales", "Support"]);

    fireEvent.click(supportRow!);

    expect(queryRow("Support")).toBeNull();
    expect(getRenderedOrder()).toEqual(["Engineering", "Sales"]);
    expect(screen.getByRole("button", { name: "View all (4)" })).not.toBeNull();
  });

  it("shows the View all button in the collapsed view and expands to all values", () => {
    render(
      <ControlledListogram
        values={mockValues}
        maxCount={42}
        maxVisibleItems={2}
      />
    );

    expect(getRenderedOrder()).toEqual(["Engineering", "Sales"]);
    expect(queryRow("Marketing")).toBeNull();
    expect(queryRow("Support")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "View all (4)" }));

    expect(getRenderedOrder()).toEqual([
      "Engineering",
      "Sales",
      "Marketing",
      "Support",
    ]);
    expect(screen.queryByRole("button", { name: "View all (4)" })).toBeNull();
  });

  it("omits the view toggle entirely when all values fit in the collapsed view", () => {
    render(
      <ControlledListogram
        values={mockValues}
        maxCount={42}
        maxVisibleItems={mockValues.length}
      />
    );

    expect(getRenderedOrder()).toEqual([
      "Engineering",
      "Sales",
      "Marketing",
      "Support",
    ]);
    expect(
      screen.queryByRole("button", { name: /View (all|less)/u })
    ).toBeNull();
  });

  it("keeps a single view toggle present in both the collapsed and expanded states", () => {
    render(
      <ControlledListogram
        values={mockValues}
        maxCount={42}
        maxVisibleItems={2}
      />
    );

    expect(
      screen.queryAllByRole("button", { name: /View (all|less)/u })
    ).toHaveLength(1);

    fireEvent.click(screen.getByRole("button", { name: "View all (4)" }));

    expect(
      screen.queryAllByRole("button", { name: /View (all|less)/u })
    ).toHaveLength(1);
  });

  it("labels the toggle with the filtered count when collapsed and drops the count once expanded", () => {
    render(
      <ControlledListogram
        values={mockValues}
        maxCount={42}
        maxVisibleItems={2}
      />
    );

    expect(screen.getByRole("button", { name: "View all (4)" })).not.toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "View all (4)" }));

    expect(screen.queryByRole("button", { name: "View less" })).not.toBeNull();
    expect(screen.queryByRole("button", { name: /View all/u })).toBeNull();
  });

  it("collapses back to the head values when the toggle is clicked a second time", () => {
    render(
      <ControlledListogram
        values={mockValues}
        maxCount={42}
        maxVisibleItems={2}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "View all (4)" }));
    expect(getRenderedOrder()).toEqual([
      "Engineering",
      "Sales",
      "Marketing",
      "Support",
    ]);

    const viewLessToggle = getToggle("viewLess");
    expect(viewLessToggle).not.toBeNull();
    fireEvent.click(viewLessToggle!);

    expect(getRenderedOrder()).toEqual(["Engineering", "Sales"]);
    expect(queryRow("Marketing")).toBeNull();
    expect(queryRow("Support")).toBeNull();
  });

  it("flips aria-expanded on the toggle across clicks", () => {
    render(
      <ControlledListogram
        values={mockValues}
        maxCount={42}
        maxVisibleItems={2}
      />
    );

    const collapsed = screen.getByRole("button", { name: "View all (4)" });
    expect(collapsed.getAttribute("aria-expanded")).toBe("false");

    fireEvent.click(collapsed);

    const viewLessToggle = getToggle("viewLess");
    expect(viewLessToggle).not.toBeNull();
    expect(viewLessToggle!.getAttribute("aria-expanded")).toBe("true");

    fireEvent.click(viewLessToggle!);

    const viewAllToggle = getToggle("viewAll");
    expect(viewAllToggle).not.toBeNull();
    expect(viewAllToggle!.getAttribute("aria-expanded")).toBe("false");
  });
});

// Rows are the only buttons carrying aria-pressed; the "View all" button has none.
function getRenderedOrder(): string[] {
  const rows = document.querySelectorAll<HTMLElement>("button[aria-pressed]");
  return Array.from(rows).map((row) => {
    const match = mockValues.find((v) => row.textContent?.includes(v.value));
    return match?.value ?? row.textContent ?? "";
  });
}

function queryRow(value: string): HTMLElement | null {
  return screen.queryByRole("button", {
    name: new RegExp(`^${value}\\s+\\d+`, "u"),
  });
}

// The expand/collapse toggle is the only button whose label reads "View
// all…" (collapsed) or "View less" (expanded); row buttons never contain that
// text. Pass the expected label so the assertion is explicit about which state
// the toggle should be in. Returns null unless exactly one such toggle is
// mounted so callers can assert its presence.
function getToggle(label: "viewAll" | "viewLess"): HTMLElement | null {
  const name = label === "viewAll" ? /View all/u : /View less/u;
  const toggles = screen.queryAllByRole("button", { name });
  return toggles.length === 1 ? toggles[0] : null;
}

/** Controlled wrapper so a click actually updates selection and re-renders. */
function ControlledListogram({
  initialSelected = [],
  ...rest
}: {
  initialSelected?: string[];
  values: PropertyAggregationValue[];
  maxCount: number;
  maxVisibleItems?: number;
}): React.ReactElement {
  const [selected, setSelected] = useState<string[]>(initialSelected);
  return (
    <ListogramInput
      isLoading={false}
      error={null}
      selectedValues={selected}
      onChange={setSelected}
      {...rest}
    />
  );
}
