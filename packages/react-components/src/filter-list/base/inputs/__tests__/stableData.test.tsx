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
import { MultiSelectInput } from "../MultiSelectInput.js";
import { SingleSelectInput } from "../SingleSelectInput.js";
import { TextTagsInput } from "../TextTagsInput.js";

afterEach(cleanup);

const mockValues: PropertyAggregationValue[] = [
  { value: "Engineering", count: 42 },
  { value: "Sales", count: 18 },
];

describe("MultiSelectInput stableData", () => {
  it("preserves selected chips when values drop during a refetch", () => {
    const { container, rerender } = render(
      <MultiSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValues={["Engineering"]}
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByText("Engineering")).toBeDefined();

    rerender(
      <MultiSelectInput
        values={[]}
        isLoading={true}
        error={null}
        selectedValues={["Engineering"]}
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByText("Engineering")).toBeDefined();
    expect(container.querySelector("input")).not.toBeNull();
    expect(screen.queryByText("Loading options...")).toBeNull();
  });

  it("shows skeleton on first load with no data", () => {
    const { rerender } = render(
      <MultiSelectInput
        values={[]}
        isLoading={true}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
      />,
    );

    expect(screen.queryByTestId("select-input-skeleton")).not.toBeNull();
    expect(screen.queryByText("Loading options...")).toBeNull();

    rerender(
      <MultiSelectInput
        values={[]}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByText("No options available")).toBeDefined();
    expect(screen.queryByTestId("select-input-skeleton")).toBeNull();
  });

  it("transitions to empty-state when refetch resolves to no data", () => {
    const { rerender } = render(
      <MultiSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
      />,
    );

    rerender(
      <MultiSelectInput
        values={[]}
        isLoading={false}
        error={null}
        selectedValues={[]}
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByText("No options available")).toBeDefined();
    expect(screen.queryByText("Engineering")).toBeNull();
  });
});

describe("SingleSelectInput stableData", () => {
  it("keeps the combobox mounted when values drop during a refetch", () => {
    const { container, rerender } = render(
      <SingleSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValue={undefined}
        onChange={vi.fn()}
      />,
    );

    expect(container.querySelector("input")).not.toBeNull();

    rerender(
      <SingleSelectInput
        values={[]}
        isLoading={true}
        error={null}
        selectedValue={undefined}
        onChange={vi.fn()}
      />,
    );

    expect(container.querySelector("input")).not.toBeNull();
    expect(screen.queryByText("Loading options...")).toBeNull();
  });

  it("shows skeleton on first load with no data", () => {
    const { rerender } = render(
      <SingleSelectInput
        values={[]}
        isLoading={true}
        error={null}
        selectedValue={undefined}
        onChange={vi.fn()}
      />,
    );

    expect(screen.queryByTestId("select-input-skeleton")).not.toBeNull();
    expect(screen.queryByText("Loading options...")).toBeNull();

    rerender(
      <SingleSelectInput
        values={[]}
        isLoading={false}
        error={null}
        selectedValue={undefined}
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByText("No options available")).toBeDefined();
    expect(screen.queryByTestId("select-input-skeleton")).toBeNull();
  });

  it("transitions to empty-state when refetch resolves to no data", () => {
    const { container, rerender } = render(
      <SingleSelectInput
        values={mockValues}
        isLoading={false}
        error={null}
        selectedValue={undefined}
        onChange={vi.fn()}
      />,
    );

    rerender(
      <SingleSelectInput
        values={[]}
        isLoading={false}
        error={null}
        selectedValue={undefined}
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByText("No options available")).toBeDefined();
    expect(container.querySelector("input")).toBeNull();
  });
});

describe("TextTagsInput stableData", () => {
  it("shows skeleton on first load with no suggestions when suggestionLimit is set", () => {
    const { rerender } = render(
      <TextTagsInput
        suggestions={[]}
        isLoading={true}
        error={null}
        tags={[]}
        onChange={vi.fn()}
        suggestionLimit={10}
      />,
    );

    expect(screen.queryByTestId("select-input-skeleton")).not.toBeNull();

    rerender(
      <TextTagsInput
        suggestions={[{ value: "Engineering", count: 1 }]}
        isLoading={false}
        error={null}
        tags={[]}
        onChange={vi.fn()}
        suggestionLimit={10}
      />,
    );

    expect(screen.queryByTestId("select-input-skeleton")).toBeNull();
  });

  it("does not show skeleton when suggestionLimit is 0", () => {
    render(
      <TextTagsInput
        suggestions={[]}
        isLoading={true}
        error={null}
        tags={[]}
        onChange={vi.fn()}
        suggestionLimit={0}
      />,
    );

    expect(screen.queryByTestId("select-input-skeleton")).toBeNull();
  });

  it("does not show skeleton when suggestions exist", () => {
    render(
      <TextTagsInput
        suggestions={[{ value: "Engineering", count: 1 }]}
        isLoading={true}
        error={null}
        tags={[]}
        onChange={vi.fn()}
        suggestionLimit={10}
      />,
    );

    expect(screen.queryByTestId("select-input-skeleton")).toBeNull();
  });
});
