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

  it("keeps a below-fold value visible at the tail after it is unchecked in the collapsed view", () => {
    // maxVisibleItems=2 -> collapsed body shows Engineering, Sales; Support is
    // below the fold but selected, so it is pinned at the tail.
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

    // Unchecking a tail-pinned row must NOT remove it. It stays visible (now
    // unchecked) so it can be re-checked in place; only "View all" changes the
    // collapsed row set.
    fireEvent.click(supportRow!);

    const supportRowAfter = queryRow("Support");
    expect(supportRowAfter).not.toBeNull();
    expect(supportRowAfter?.getAttribute("aria-pressed")).toBe("false");
    expect(getRenderedOrder()).toEqual(["Engineering", "Sales", "Support"]);
    expect(screen.getByRole("button", { name: "View all (4)" })).not.toBeNull();
  });

  it("does not pin a head-row value that is unchecked and later falls below the fold", () => {
    const { rerender } = render(
      <ControlledListogram
        values={mockValues}
        maxCount={42}
        maxVisibleItems={2}
        initialSelected={["Engineering"]}
      />
    );

    // Engineering is in the head (index 0). Unchecking a head row must not mark
    // it as a surfaced tail pin — head rows never vanish, so there is nothing to
    // preserve.
    const engineeringRow = queryRow("Engineering");
    expect(engineeringRow).not.toBeNull();
    fireEvent.click(engineeringRow!);

    // Counts shift (as they do when other filters change) so Engineering now
    // sorts below the collapsed fold.
    const reordered: PropertyAggregationValue[] = [
      { value: "Sales", count: 18 },
      { value: "Marketing", count: 12 },
      { value: "Engineering", count: 3 },
      { value: "Support", count: 6 },
    ];
    rerender(
      <ControlledListogram
        values={reordered}
        maxCount={42}
        maxVisibleItems={2}
        initialSelected={["Engineering"]}
      />
    );

    // It was never a below-fold interaction, so it must not reappear pinned at
    // the tail.
    expect(getRenderedOrder()).toEqual(["Sales", "Marketing"]);
    expect(queryRow("Engineering")).toBeNull();
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

  it("omits the View all button when all values fit in the collapsed view", () => {
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
    expect(screen.queryByRole("button", { name: /View all/u })).toBeNull();
  });
});

// A pinned below-fold row is plain instance state, so it stays pinned for the
// life of this component instance — even if the underlying data is later
// replaced in place. This test documents the in-instance persistence
describe("ListogramInput tail-pin scoping", () => {
  it("keeps a pinned below-fold value visible when the same instance receives new data", () => {
    const datasetA: PropertyAggregationValue[] = [
      { value: "North", count: 10 },
      { value: "South", count: 9 },
      { value: "Sales", count: 8 }, // below the fold at index 2
      { value: "East", count: 7 },
    ];
    const { rerender } = render(
      <ControlledListogram
        values={datasetA}
        maxCount={10}
        maxVisibleItems={2}
        initialSelected={["Sales"]}
      />
    );

    // Uncheck the below-fold Sales row -> pinned for this instance.
    fireEvent.click(screen.getByRole("button", { name: /^Sales\s+\d+/u }));
    expect(
      screen.queryByRole("button", { name: /^Sales\s+\d+/u })
    ).not.toBeNull();

    // New data is fed to the SAME (non-remounted) instance. Sales happens to
    // reuse the same label below the fold; there is no seeded selection.
    const datasetB: PropertyAggregationValue[] = [
      { value: "Red", count: 5 },
      { value: "Green", count: 4 },
      { value: "Sales", count: 3 }, // same label, below the fold
      { value: "Blue", count: 2 },
    ];
    rerender(
      <ControlledListogram values={datasetB} maxCount={5} maxVisibleItems={2} />
    );

    // The pin persists for the instance's lifetime, so Sales stays visible at
    // the tail next to the head rows; Blue (below fold, not pinned) does not.
    expect(queryRow("Red")).not.toBeNull();
    expect(queryRow("Green")).not.toBeNull();
    expect(queryRow("Sales")).not.toBeNull();
    expect(queryRow("Blue")).toBeNull();
  });
});
