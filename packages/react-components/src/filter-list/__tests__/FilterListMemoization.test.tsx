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

import { cleanup, render } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { RenderFilterInput } from "../base/BaseFilterListApi.js";
import { FilterListContent } from "../base/FilterListContent.js";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { getFilterKey } from "../utils/getFilterKey.js";
import { getFilterLabel } from "../utils/getFilterLabel.js";
import type { MockObjectType } from "./testUtils.js";
import { createPropertyFilterDef } from "./testUtils.js";

afterEach(cleanup);

type TestDef = FilterDefinitionUnion<typeof MockObjectType>;

function buildDefinitions(): TestDef[] {
  return [
    createPropertyFilterDef("name", "CONTAINS_TEXT", {
      type: "CONTAINS_TEXT",
    }),
    createPropertyFilterDef("age", "NUMBER_RANGE", {
      type: "NUMBER_RANGE",
      minValue: undefined,
      maxValue: undefined,
    }),
    createPropertyFilterDef("active", "TOGGLE", {
      type: "TOGGLE",
      enabled: false,
    }),
  ];
}

function buildStates(defs: TestDef[]): Map<string, FilterState> {
  const states = new Map<string, FilterState>();
  for (const def of defs) {
    if (def.type === "PROPERTY" && def.filterState) {
      states.set(getFilterKey(def), def.filterState);
    }
  }
  return states;
}

describe("FilterListContent memoization", () => {
  it(
    "does not re-render filter inputs whose state has not changed when another filter's state changes",
    () => {
      const definitions = buildDefinitions();
      const renderCounts: Record<string, number> = {};

      // Stable handler refs — mimics what FilterList.tsx provides via
      // useCallback. Without these, FilterListItem.memo would bust on every
      // parent render and the assertion below would always fail regardless
      // of the perFilterWhereClauses fix.
      const onFilterStateChanged = vi.fn();
      const renderInput: RenderFilterInput<TestDef> = ({ filterKey }) => {
        renderCounts[filterKey] = (renderCounts[filterKey] ?? 0) + 1;
        return <div data-testid={`input-${filterKey}`} />;
      };

      function Harness({ states }: { states: Map<string, FilterState> }) {
        return (
          <FilterListContent
            filterDefinitions={definitions}
            filterStates={states}
            onFilterStateChanged={onFilterStateChanged}
            renderInput={renderInput}
            getFilterKey={getFilterKey}
            getFilterLabel={getFilterLabel}
          />
        );
      }

      const initialStates = buildStates(definitions);
      const { rerender } = render(<Harness states={initialStates} />);

      expect(renderCounts.name).toBe(1);
      expect(renderCounts.age).toBe(1);
      expect(renderCounts.active).toBe(1);

      // Mutate ONLY the `name` filter's state. Build a new Map so the parent
      // re-renders (matches what useFilterListState's setFilterState does).
      const nextStates = new Map(initialStates);
      nextStates.set("name", { type: "CONTAINS_TEXT", value: "anne" });

      rerender(<Harness states={nextStates} />);

      // Only the changed filter should re-render. Other filters' memoized
      // outputs hold because all of their props are referentially equal
      // across renders.
      expect(renderCounts.name).toBe(2);
      expect(renderCounts.age).toBe(1);
      expect(renderCounts.active).toBe(1);
    },
  );

  it(
    "does not bust memoization when perFilterWhereClauses changes shape but a filter's own clause is unchanged",
    () => {
      const definitions = buildDefinitions();
      const renderCounts: Record<string, number> = {};
      const onFilterStateChanged = vi.fn();
      const renderInput: RenderFilterInput<TestDef> = ({ filterKey }) => {
        renderCounts[filterKey] = (renderCounts[filterKey] ?? 0) + 1;
        return <div data-testid={`input-${filterKey}`} />;
      };

      function Harness(
        { perFilterWhereClauses, states }: {
          perFilterWhereClauses: ReadonlyMap<string, unknown>;
          states: Map<string, FilterState>;
        },
      ) {
        return (
          <FilterListContent
            filterDefinitions={definitions}
            filterStates={states}
            onFilterStateChanged={onFilterStateChanged}
            renderInput={renderInput}
            getFilterKey={getFilterKey}
            getFilterLabel={getFilterLabel}
            perFilterWhereClauses={perFilterWhereClauses}
          />
        );
      }

      const states = buildStates(definitions);
      const ageClause = { age: { $gt: 30 } };
      const activeClause = { active: true };

      const initialClauses = new Map<string, unknown>([
        ["name", { name: "anne" }],
        ["age", ageClause],
        ["active", activeClause],
      ]);

      const { rerender } = render(
        <Harness states={states} perFilterWhereClauses={initialClauses} />,
      );

      expect(renderCounts.name).toBe(1);
      expect(renderCounts.age).toBe(1);
      expect(renderCounts.active).toBe(1);

      // Selecting a value on `name` rebuilds the whole perFilterWhereClauses
      // Map. The `name` clause changes; `age` and `active` clauses keep their
      // existing references (passed by identity, not deep-cloned).
      const nextClauses = new Map<string, unknown>([
        ["name", { name: "anne smith" }],
        ["age", ageClause],
        ["active", activeClause],
      ]);

      rerender(
        <Harness states={states} perFilterWhereClauses={nextClauses} />,
      );

      // The age and active filters got the SAME whereClauseForFilter
      // reference, plus all their other props are stable. So they MUST stay
      // memoized. This is the core invariant Item 4 protects.
      expect(renderCounts.name).toBe(2);
      expect(renderCounts.age).toBe(1);
      expect(renderCounts.active).toBe(1);
    },
  );

  it(
    "forwards whereClauseForFilter from perFilterWhereClauses for each filter",
    () => {
      const definitions = buildDefinitions();
      const states = buildStates(definitions);

      const observedClauses: Record<string, unknown> = {};
      const renderInput: RenderFilterInput<TestDef> = (
        { filterKey, whereClauseForFilter },
      ) => {
        observedClauses[filterKey] = whereClauseForFilter;
        return <div data-testid={`input-${filterKey}`} />;
      };

      const perFilterWhereClauses = new Map<string, unknown>([
        ["name", { name: "anne" }],
        ["age", { age: { $gt: 30 } }],
        ["active", { active: true }],
      ]);

      render(
        <FilterListContent
          filterDefinitions={definitions}
          filterStates={states}
          onFilterStateChanged={vi.fn()}
          renderInput={renderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
          perFilterWhereClauses={perFilterWhereClauses}
        />,
      );

      expect(observedClauses.name).toEqual({ name: "anne" });
      expect(observedClauses.age).toEqual({ age: { $gt: 30 } });
      expect(observedClauses.active).toEqual({ active: true });
    },
  );

  it(
    "passes undefined to whereClauseForFilter when perFilterWhereClauses is omitted",
    () => {
      const definitions = buildDefinitions();
      const states = buildStates(definitions);

      const observedClauses: Record<string, unknown> = {};
      const renderInput: RenderFilterInput<TestDef> = (
        { filterKey, whereClauseForFilter },
      ) => {
        observedClauses[filterKey] = whereClauseForFilter;
        return <div data-testid={`input-${filterKey}`} />;
      };

      render(
        <FilterListContent
          filterDefinitions={definitions}
          filterStates={states}
          onFilterStateChanged={vi.fn()}
          renderInput={renderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
        />,
      );

      expect(observedClauses.name).toBeUndefined();
      expect(observedClauses.age).toBeUndefined();
      expect(observedClauses.active).toBeUndefined();
    },
  );
});
