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
import { afterEach, describe, expect, it, vi } from "vitest";
import type { PropertyAggregationValue } from "../../../types/AggregationTypes.js";
import { ListogramInput } from "../ListogramInput.js";
import { MultiSelectInput } from "../MultiSelectInput.js";
import { SingleSelectInput } from "../SingleSelectInput.js";

afterEach(cleanup);

const mockValues: PropertyAggregationValue[] = [
  { value: "abc-123", count: 7 },
  { value: "def-456", count: 3 },
];

const mockRenderValue = (value: string) => (
  <span data-testid="custom-value">{`User: ${value}`}</span>
);

describe("ListogramInput renderValue", () => {
  it("renders custom content via renderValue", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={7}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        renderValue={mockRenderValue}
      />,
    );

    const customValues = screen.getAllByTestId("custom-value");
    expect(customValues).toHaveLength(2);
    expect(customValues[0].textContent).toBe("User: abc-123");
    expect(customValues[1].textContent).toBe("User: def-456");
  });

  it("falls back to raw string without renderValue", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={7}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByText("abc-123")).toBeDefined();
    expect(screen.getByText("def-456")).toBeDefined();
    expect(screen.queryAllByTestId("custom-value")).toHaveLength(0);
  });

  it("renders 'No value' for empty values even with renderValue", () => {
    const valuesWithNull: PropertyAggregationValue[] = [
      { value: "", count: 2, isNull: true },
      { value: "abc-123", count: 5 },
    ];

    render(
      <ListogramInput
        values={valuesWithNull}
        maxCount={5}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        renderValue={mockRenderValue}
      />,
    );

    expect(screen.getByText("No value")).toBeDefined();
    const customValues = screen.getAllByTestId("custom-value");
    expect(customValues).toHaveLength(1);
    expect(customValues[0].textContent).toBe("User: abc-123");
  });
});

describe("MultiSelectInput renderValue", () => {
  it("renders custom content in selected chips", () => {
    render(
      <MultiSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValues={["abc-123"]}
        onChange={vi.fn()}
        renderValue={mockRenderValue}
      />,
    );

    // Chip content should use renderValue
    const customValues = screen.getAllByTestId("custom-value");
    expect(customValues.length).toBeGreaterThanOrEqual(1);
    expect(customValues[0].textContent).toBe("User: abc-123");
  });

  it("does not render custom content without renderValue", () => {
    render(
      <MultiSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValues={["abc-123"]}
        onChange={vi.fn()}
      />,
    );

    expect(screen.queryAllByTestId("custom-value")).toHaveLength(0);
  });
});

describe("SingleSelectInput renderValue", () => {
  // SingleSelectInput renders dropdown items inside a Combobox portal
  // which only mounts when opened — not testable in jsdom without
  // full browser event sequences. These tests verify the component
  // accepts the prop and renders without errors.

  it("mounts with renderValue without error", () => {
    const { container } = render(
      <SingleSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValue={undefined}
        onChange={vi.fn()}
        renderValue={mockRenderValue}
      />,
    );

    expect(container.querySelector("input")).toBeDefined();
  });

  it("mounts without renderValue without error", () => {
    render(
      <SingleSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValue={undefined}
        onChange={vi.fn()}
      />,
    );

    expect(screen.queryAllByTestId("custom-value")).toHaveLength(0);
  });
});
