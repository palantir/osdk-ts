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

import type { WhereClause } from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockObjectType } from "../../__tests__/testUtils.js";
import { ListogramFilterInput } from "../ListogramFilterInput.js";
import { MultiSelectFilterInput } from "../MultiSelectFilterInput.js";
import { SingleSelectFilterInput } from "../SingleSelectFilterInput.js";

vi.mock("@osdk/react", () => ({
  useOsdkAggregation: vi.fn(),
  useRegisterUserAgent: vi.fn(),
}));

const EMPTY_WHERE = {} as WhereClause<typeof MockObjectType>;

function mockAggregationData(
  groups: Array<{ name: string; count: number }>,
): void {
  vi.mocked(useOsdkAggregation).mockReturnValue({
    data: groups.map((g) => ({ $group: { name: g.name }, $count: g.count })),
    isLoading: false,
    error: null,
    refetch: vi.fn(),
  } as unknown as ReturnType<typeof useOsdkAggregation>);
}

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("ghost initialFilterStates values", () => {
  describe("ListogramFilterInput", () => {
    it("renders ghost selected values that are absent from aggregation data", () => {
      mockAggregationData([{ name: "Marketing", count: 5 }]);
      render(
        <ListogramFilterInput
          objectType={MockObjectType}
          propertyKey="name"
          filterState={{
            type: "EXACT_MATCH",
            values: ["Marketing", "Research"],
          }}
          onFilterStateChanged={vi.fn()}
          whereClause={EMPTY_WHERE}
        />,
      );

      // "Marketing" comes from aggregation data
      expect(screen.getByText("Marketing")).toBeDefined();
      // "Research" is a ghost value — should still appear with count 0
      expect(screen.getByText("Research")).toBeDefined();
      expect(screen.getByText("0")).toBeDefined();
    });
  });

  describe("MultiSelectFilterInput", () => {
    it("renders ghost selected values when aggregation returns no matching data", () => {
      // Empty aggregation — all selected values are ghost values
      mockAggregationData([]);

      render(
        <MultiSelectFilterInput
          objectType={MockObjectType}
          propertyKey="name"
          filterState={{
            type: "SELECT",
            selectedValues: ["Research"],
          }}
          onFilterStateChanged={vi.fn()}
          whereClause={EMPTY_WHERE}
        />,
      );

      // Without the fix, this shows "No options available" instead of the chip
      expect(screen.getByText("Research")).toBeDefined();
    });
  });

  describe("SingleSelectFilterInput", () => {
    it("mounts combobox for ghost selected value instead of showing empty message", () => {
      mockAggregationData([]);

      render(
        <SingleSelectFilterInput
          objectType={MockObjectType}
          propertyKey="name"
          filterState={{
            type: "SELECT",
            selectedValues: ["Research"],
          }}
          onFilterStateChanged={vi.fn()}
          whereClause={EMPTY_WHERE}
        />,
      );

      // Without the fix, values.length === 0 renders "No options available"
      // and the Combobox never mounts. With the fix, the ghost value makes
      // values.length > 0, so the search input renders instead.
      expect(screen.queryByText("No options available")).toBeNull();
      expect(screen.getByLabelText("Select name")).toBeDefined();
    });
  });
});
