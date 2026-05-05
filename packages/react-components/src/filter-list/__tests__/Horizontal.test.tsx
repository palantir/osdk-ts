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
import type { RenderFilterInput } from "../base/BaseFilterListApi.js";
import { FilterListContent } from "../base/FilterListContent.js";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { getFilterKey } from "../utils/getFilterKey.js";
import {
  getFilterLabel,
  summarizeFilterValue,
} from "../utils/getFilterLabel.js";
import type { MockObjectType } from "./testUtils.js";
import { createPropertyFilterDef } from "./testUtils.js";

afterEach(cleanup);

type TestDef = FilterDefinitionUnion<typeof MockObjectType>;

const stubRenderInput: RenderFilterInput<TestDef> = ({ filterKey }) => (
  <input data-testid={`input-${filterKey}`} />
);

function buildDefinitions(): TestDef[] {
  return [
    createPropertyFilterDef("name", "CONTAINS_TEXT", {
      type: "CONTAINS_TEXT",
    }),
    createPropertyFilterDef("age", "NUMBER_RANGE", {
      type: "NUMBER_RANGE",
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

const inlineByComponent: Record<string, "inline" | "trigger"> = {
  CONTAINS_TEXT: "inline",
  SINGLE_DATE: "inline",
  TOGGLE: "inline",
};

const getRenderMode = (def: TestDef): "inline" | "trigger" => {
  if (def.type !== "PROPERTY") return "trigger";
  return inlineByComponent[def.filterComponent] ?? "trigger";
};

describe("FilterListContent horizontal orientation", () => {
  it(
    "applies the horizontal class to the container in horizontal mode",
    () => {
      const definitions = buildDefinitions();
      const { container } = render(
        <FilterListContent
          filterDefinitions={definitions}
          filterStates={buildStates(definitions)}
          onFilterStateChanged={vi.fn()}
          renderInput={stubRenderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
          orientation="horizontal"
          getFilterRenderMode={getRenderMode}
        />,
      );
      const root = container.querySelector("[class*='horizontal']");
      expect(root).not.toBeNull();
    },
  );

  it("vertical default produces no horizontal class", () => {
    const definitions = buildDefinitions();
    const { container } = render(
      <FilterListContent
        filterDefinitions={definitions}
        filterStates={buildStates(definitions)}
        onFilterStateChanged={vi.fn()}
        renderInput={stubRenderInput}
        getFilterKey={getFilterKey}
        getFilterLabel={getFilterLabel}
      />,
    );
    const root = container.firstElementChild;
    expect(root?.className.includes("horizontal")).toBe(false);
  });

  it(
    "renders inline filters with their input directly (no popover trigger)",
    () => {
      const definitions = buildDefinitions();
      const { container } = render(
        <FilterListContent
          filterDefinitions={definitions}
          filterStates={buildStates(definitions)}
          onFilterStateChanged={vi.fn()}
          renderInput={stubRenderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
          orientation="horizontal"
          getFilterRenderMode={getRenderMode}
        />,
      );
      // CONTAINS_TEXT, TOGGLE → inline. The actual input is in the DOM
      // (no trigger button wrapping it).
      expect(screen.getByTestId("input-name")).toBeDefined();
      expect(screen.getByTestId("input-active")).toBeDefined();
      // NUMBER_RANGE → trigger. Its input is NOT in the DOM until the
      // popover opens.
      expect(screen.queryByTestId("input-age")).toBeNull();
    },
  );

  it(
    "renders tall filters as <button> triggers in horizontal mode",
    () => {
      const definitions = buildDefinitions();
      const { container } = render(
        <FilterListContent
          filterDefinitions={definitions}
          filterStates={buildStates(definitions)}
          onFilterStateChanged={vi.fn()}
          renderInput={stubRenderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
          orientation="horizontal"
          getFilterRenderMode={getRenderMode}
        />,
      );
      // The age filter (NUMBER_RANGE → trigger) should render as a
      // button trigger.
      const triggers = container.querySelectorAll("button[class*='trigger']");
      expect(triggers.length).toBeGreaterThan(0);
    },
  );
});

describe("summarizeFilterValue", () => {
  const def: TestDef = createPropertyFilterDef("status", "SINGLE_SELECT", {
    type: "SELECT",
    selectedValues: [],
  });

  it("returns empty string for an empty filter state", () => {
    expect(summarizeFilterValue(def, undefined)).toBe("");
  });

  it("returns the single selected value as a string", () => {
    const summary = summarizeFilterValue(def, {
      type: "SELECT",
      selectedValues: ["Active"],
    });
    expect(summary).toBe("Active");
  });

  it("returns 'N selected' for multi-value SELECT", () => {
    const summary = summarizeFilterValue(def, {
      type: "SELECT",
      selectedValues: ["Active", "Inactive", "Archived"],
    });
    expect(summary).toBe("3 selected");
  });

  it("returns 'min – max' for NUMBER_RANGE", () => {
    const numDef = createPropertyFilterDef("age", "NUMBER_RANGE", {
      type: "NUMBER_RANGE",
    });
    const summary = summarizeFilterValue(numDef, {
      type: "NUMBER_RANGE",
      minValue: 18,
      maxValue: 65,
    });
    expect(summary).toBe("18 – 65");
  });

  it("returns the search term for CONTAINS_TEXT", () => {
    const textDef = createPropertyFilterDef("name", "CONTAINS_TEXT", {
      type: "CONTAINS_TEXT",
    });
    const summary = summarizeFilterValue(textDef, {
      type: "CONTAINS_TEXT",
      value: "anne",
    });
    expect(summary).toBe("anne");
  });

  it(
    "uses formatDate for date-typed property when provided in definition",
    () => {
      const dateDef = {
        ...createPropertyFilterDef("createdAt", "DATE_RANGE", {
          type: "DATE_RANGE",
        }),
        formatDate: (d: Date) => `D=${d.getFullYear()}`,
      } as TestDef;
      const summary = summarizeFilterValue(dateDef, {
        type: "DATE_RANGE",
        minValue: new Date(2024, 0, 1),
        maxValue: new Date(2024, 11, 31),
      });
      expect(summary).toBe("D=2024 – D=2024");
    },
  );
});
