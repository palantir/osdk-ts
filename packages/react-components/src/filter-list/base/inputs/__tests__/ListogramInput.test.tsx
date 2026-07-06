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
  });
});
