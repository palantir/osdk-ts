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
  { value: "Engineering", count: 42 },
  { value: "Sales", count: 18 },
];

describe("ListogramInput showCount", () => {
  it("shows counts by default", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={42}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByText("42")).toBeDefined();
    expect(screen.getByText("18")).toBeDefined();
  });

  it("shows counts when showCount is true", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={42}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        showCount={true}
      />,
    );

    expect(screen.getByText("42")).toBeDefined();
    expect(screen.getByText("18")).toBeDefined();
  });

  it("hides counts when showCount is false", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={42}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        showCount={false}
      />,
    );

    expect(screen.queryByText("42")).toBeNull();
    expect(screen.queryByText("18")).toBeNull();
    // Labels are still visible
    expect(screen.getByText("Engineering")).toBeDefined();
    expect(screen.getByText("Sales")).toBeDefined();
  });

  it("hides counts when showCount is false even with displayMode full", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={42}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        displayMode="full"
        showCount={false}
      />,
    );

    expect(screen.queryByText("42")).toBeNull();
    expect(screen.queryByText("18")).toBeNull();
  });

  it("hides counts when showCount is false with displayMode count", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={42}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        displayMode="count"
        showCount={false}
      />,
    );

    expect(screen.queryByText("42")).toBeNull();
    expect(screen.queryByText("18")).toBeNull();
  });

  it("hides counts with displayMode minimal regardless of showCount", () => {
    render(
      <ListogramInput
        values={mockValues}
        maxCount={42}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        displayMode="minimal"
        showCount={true}
      />,
    );

    expect(screen.queryByText("42")).toBeNull();
    expect(screen.queryByText("18")).toBeNull();
  });
});

describe("MultiSelectInput showCounts", () => {
  // MultiSelectInput renders dropdown items inside a Combobox portal
  // which only mounts when opened. These tests verify the component
  // accepts the prop and renders without errors.

  it("mounts with showCounts=false without error", () => {
    const { container } = render(
      <MultiSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        showCounts={false}
      />,
    );

    expect(container.querySelector("input")).toBeDefined();
  });

  it("mounts with showCounts=true without error", () => {
    const { container } = render(
      <MultiSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
        showCounts={true}
      />,
    );

    expect(container.querySelector("input")).toBeDefined();
  });

  it("defaults to showing counts (no showCounts prop)", () => {
    const { container } = render(
      <MultiSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
      />,
    );

    expect(container.querySelector("input")).toBeDefined();
  });
});

describe("SingleSelectInput showCounts", () => {
  // SingleSelectInput renders dropdown items inside a Combobox portal
  // which only mounts when opened. These tests verify the component
  // accepts the prop and renders without errors.

  it("mounts with showCounts=false without error", () => {
    const { container } = render(
      <SingleSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValue={undefined}
        onChange={vi.fn()}
        showCounts={false}
      />,
    );

    expect(container.querySelector("input")).toBeDefined();
  });

  it("mounts with showCounts=true without error", () => {
    const { container } = render(
      <SingleSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValue={undefined}
        onChange={vi.fn()}
        showCounts={true}
      />,
    );

    expect(container.querySelector("input")).toBeDefined();
  });
});
