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

import type { WhereClause } from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DateRangeFilterInput } from "../inputs/DateRangeFilterInput.js";
import { MockObjectType } from "./testUtils.js";

vi.mock("@osdk/react", () => ({
  useOsdkAggregation: vi.fn().mockReturnValue({
    data: undefined,
    isLoading: false,
    error: null,
  }),
  useRegisterUserAgent: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.clearAllMocks();
});

describe("DateRangeFilterInput", () => {
  it("passes whereClause to the histogram aggregation query", () => {
    const whereClause = { name: "Engineering" } as WhereClause<
      typeof MockObjectType
    >;

    render(
      <DateRangeFilterInput
        objectType={MockObjectType}
        propertyKey="createdAt"
        filterState={undefined}
        onFilterStateChanged={vi.fn()}
        whereClause={whereClause}
      />,
    );

    const calls = vi.mocked(useOsdkAggregation).mock.calls;
    // Find the histogram call by its $groupBy aggregate shape
    const histogramCall = calls.find(
      (c) => (c[1].aggregate as Record<string, unknown>).$groupBy != null,
    );
    expect(histogramCall).toBeDefined();
    expect(histogramCall![1]).toHaveProperty("where", whereClause);
  });

  it("emits a DATE_RANGE state when a shortcut is clicked", () => {
    // Mid-year date avoids DST boundary drift.
    vi.useFakeTimers({ now: new Date(2024, 5, 15, 12, 0, 0, 0) });
    const whereClause = {} as WhereClause<typeof MockObjectType>;
    const onFilterStateChanged = vi.fn();
    render(
      <DateRangeFilterInput
        objectType={MockObjectType}
        propertyKey="createdAt"
        filterState={undefined}
        onFilterStateChanged={onFilterStateChanged}
        whereClause={whereClause}
        dateShortcuts={[
          {
            label: "Past 24 hours",
            dateRange: (n) => [new Date(n.getTime() - 24 * 60 * 60 * 1000), n],
          },
        ]}
      />,
    );
    // The range shortcut rail renders inline above the From / To inputs, so
    // no popover needs to be opened to reach it.
    fireEvent.click(screen.getByRole("button", { name: "Past 24 hours" }));
    expect(onFilterStateChanged).toHaveBeenCalledTimes(1);
    const state = onFilterStateChanged.mock.calls[0][0];
    expect(state.type).toBe("DATE_RANGE");
    if (
      !(state.minValue instanceof Date) || !(state.maxValue instanceof Date)
    ) {
      throw new Error("expected minValue and maxValue to be Dates");
    }
    expect(state.maxValue.getTime() - state.minValue.getTime()).toBe(
      24 * 60 * 60 * 1000,
    );
  });

  it("combines whereClause with null-check in the null count query", () => {
    const whereClause = { name: "Engineering" } as WhereClause<
      typeof MockObjectType
    >;

    render(
      <DateRangeFilterInput
        objectType={MockObjectType}
        propertyKey="createdAt"
        filterState={undefined}
        onFilterStateChanged={vi.fn()}
        whereClause={whereClause}
      />,
    );

    const calls = vi.mocked(useOsdkAggregation).mock.calls;
    // Find the null count call by its lack of $groupBy
    const nullCountCall = calls.find(
      (c) => (c[1].aggregate as Record<string, unknown>).$groupBy == null,
    );
    expect(nullCountCall).toBeDefined();
    const nullCountWhere = nullCountCall![1].where;

    expect(nullCountWhere).toHaveProperty("$and");
    const andClauses = (nullCountWhere as { $and: unknown[] }).$and;
    expect(andClauses).toContainEqual({ createdAt: { $isNull: true } });
    expect(andClauses).toContainEqual(whereClause);
  });
});
