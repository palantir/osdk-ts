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

import type { ObjectTypeDefinition, WhereClause } from "@osdk/api";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@osdk/react", () => ({
  useOsdkAggregation: vi.fn().mockReturnValue({
    data: [],
    isLoading: false,
    error: null,
    refetch: vi.fn(),
  }),
  useOsdkMetadata: vi.fn(() => ({ loading: false, metadata: undefined })),
  useRegisterUserAgent: vi.fn(),
}));

import { FilterInput } from "../FilterInput.js";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type { CustomFilterState } from "../types/CustomRendererTypes.js";
import { MockObjectType } from "./testUtils.js";

const EMPTY_WHERE = {} as WhereClause<typeof MockObjectType>;

function customState(value: string): CustomFilterState {
  return { type: "custom", customState: { value } };
}

/**
 * Renders the state `renderInput` actually receives, so each arm of
 * FilterInput's CUSTOM resolution is observable from the DOM. The renderer
 * dereferences `customState` unguarded, the way one written against the
 * previously required `filterState` would.
 */
function renderCustomFilter(
  definitionFields: Record<string, unknown>,
  filterState?: FilterState,
) {
  const definition = {
    type: "CUSTOM",
    key: "custom",
    filterComponent: "CUSTOM",
    toWhereClause: () => ({}),
    renderInput: ({ filterState: received }: { filterState: unknown }) => (
      <div data-testid="received">
        {JSON.stringify((received as CustomFilterState).customState)}
      </div>
    ),
    ...definitionFields,
  } as unknown as FilterDefinitionUnion<typeof MockObjectType>;

  return render(
    <FilterInput
      objectType={MockObjectType as ObjectTypeDefinition}
      definition={definition}
      filterState={filterState}
      onFilterStateChanged={vi.fn()}
      whereClause={EMPTY_WHERE}
    />,
  );
}

function receivedCustomState() {
  return JSON.parse(screen.getByTestId("received").textContent ?? "null");
}

afterEach(cleanup);

describe("FilterInput", () => {
  describe("CUSTOM state resolution", () => {
    it("hands renderInput the stored state when there is one", () => {
      renderCustomFilter(
        { filterState: customState("definition") },
        customState("stored"),
      );

      expect(receivedCustomState()).toEqual({ value: "stored" });
    });

    it("falls back to the deprecated filterState", () => {
      renderCustomFilter({ filterState: customState("definition") });

      expect(receivedCustomState()).toEqual({ value: "definition" });
    });

    // `filterState` is optional now, so a definition can seed nothing at all.
    // `renderInput` still has to receive a state object.
    it("hands renderInput an empty custom state when the definition seeds nothing", () => {
      renderCustomFilter({});

      expect(receivedCustomState()).toEqual({});
    });

    it("ignores a stored state that is not a custom state", () => {
      renderCustomFilter(
        { filterState: customState("definition") },
        {
          type: "EXACT_MATCH",
          values: ["stray"],
        },
      );

      expect(receivedCustomState()).toEqual({ value: "definition" });
    });

    it("renders an unsupported marker when renderInput is missing", () => {
      const definition = {
        type: "CUSTOM",
        key: "custom",
        filterComponent: "CUSTOM",
        toWhereClause: () => ({}),
      } as unknown as FilterDefinitionUnion<typeof MockObjectType>;

      const { container } = render(
        <FilterInput
          objectType={MockObjectType as ObjectTypeDefinition}
          definition={definition}
          filterState={undefined}
          onFilterStateChanged={vi.fn()}
          whereClause={EMPTY_WHERE}
        />,
      );

      expect(container.querySelector("[data-unsupported]")).not.toBeNull();
    });
  });
});
