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
import { useOsdkAggregation } from "@osdk/react/experimental";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { NumberRangeFilterInput } from "../inputs/NumberRangeFilterInput.js";
import { MockObjectType } from "./testUtils.js";

vi.mock("@osdk/react/experimental", () => ({
  useOsdkAggregation: vi.fn().mockReturnValue({
    data: undefined,
    isLoading: false,
    error: null,
  }),
  useRegisterUserAgent: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("NumberRangeFilterInput", () => {
  it("passes whereClause to the histogram aggregation query", () => {
    const whereClause = { name: "Engineering" } as WhereClause<
      typeof MockObjectType
    >;

    render(
      <NumberRangeFilterInput
        objectType={MockObjectType}
        propertyKey="score"
        filterState={undefined}
        onFilterStateChanged={vi.fn()}
        whereClause={whereClause}
      />,
    );

    const calls = vi.mocked(useOsdkAggregation).mock.calls;
    const histogramCall = calls.find(
      (c) => (c[1].aggregate as Record<string, unknown>).$groupBy != null,
    );
    expect(histogramCall).toBeDefined();
    expect(histogramCall![1]).toHaveProperty("where", whereClause);
  });

  it("combines whereClause with null-check in the null count query", () => {
    const whereClause = { name: "Engineering" } as WhereClause<
      typeof MockObjectType
    >;

    render(
      <NumberRangeFilterInput
        objectType={MockObjectType}
        propertyKey="score"
        filterState={undefined}
        onFilterStateChanged={vi.fn()}
        whereClause={whereClause}
      />,
    );

    const calls = vi.mocked(useOsdkAggregation).mock.calls;
    const nullCountCall = calls.find(
      (c) => (c[1].aggregate as Record<string, unknown>).$groupBy == null,
    );
    expect(nullCountCall).toBeDefined();
    const nullCountWhere = nullCountCall![1].where;

    expect(nullCountWhere).toHaveProperty("$and");
    const andClauses = (nullCountWhere as { $and: unknown[] }).$and;
    expect(andClauses).toContainEqual({ score: { $isNull: true } });
    expect(andClauses).toContainEqual(whereClause);
  });
});
