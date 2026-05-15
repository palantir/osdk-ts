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

import type { ObjectSet } from "@osdk/api";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  createLinkedPropertyFilterDef,
  createPropertyFilterDef,
  type MockObjectType,
} from "../../__tests__/testUtils.js";
import type { FilterDefinitionUnion } from "../../FilterListApi.js";
import type { FilterState } from "../../FilterListItemApi.js";
import { applyLinkedFilters } from "../applyLinkedFilters.js";
import { getFilterKey } from "../getFilterKey.js";

/**
 * Minimal `ObjectSet` stub where each chainable method returns a fresh stub.
 * Tests walk the chain via `vi.mocked(set.pivotTo).mock.results[i].value` to
 * inspect what was called on each intermediate set.
 */
interface ChainStub {
  pivotTo: ReturnType<typeof vi.fn>;
  where: ReturnType<typeof vi.fn>;
  intersect: ReturnType<typeof vi.fn>;
}

function chainStub(): ChainStub {
  const stub: ChainStub = {
    pivotTo: vi.fn(() => chainStub()),
    where: vi.fn(() => chainStub()),
    intersect: vi.fn(() => chainStub()),
  };
  return stub;
}

function stateMap(
  entries: Array<[FilterDefinitionUnion<typeof MockObjectType>, FilterState]>,
): Map<string, FilterState> {
  return new Map(entries.map(([def, state]) => [getFilterKey(def), state]));
}

function asObjectSet(s: ChainStub): ObjectSet<typeof MockObjectType> {
  return s as unknown as ObjectSet<typeof MockObjectType>;
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("applyLinkedFilters", () => {
  it("returns the base objectSet unchanged when no LINKED_PROPERTY definitions are present", () => {
    const base = chainStub();
    const def = createPropertyFilterDef("name", "LISTOGRAM", {
      type: "EXACT_MATCH",
      values: ["a"],
    });
    const result = applyLinkedFilters(
      asObjectSet(base),
      [def],
      stateMap([[def, { type: "EXACT_MATCH", values: ["a"] }]]),
    );
    expect(result).toBe(asObjectSet(base));
    expect(base.intersect).not.toHaveBeenCalled();
  });

  it("returns the base objectSet unchanged when LINKED_PROPERTY filter has an empty inner state", () => {
    const base = chainStub();
    const def = createLinkedPropertyFilterDef("manager", "name");
    const result = applyLinkedFilters(
      asObjectSet(base),
      [def],
      stateMap([[def, {
        type: "linkedProperty",
        linkedFilterState: { type: "EXACT_MATCH", values: [] },
      }]]),
    );
    expect(result).toBe(asObjectSet(base));
    expect(base.intersect).not.toHaveBeenCalled();
  });

  it("intersects base with forward+reverse pivot when inner state has selections", () => {
    const base = chainStub();
    const def = {
      ...createLinkedPropertyFilterDef("manager", "name"),
      reverseLinkName: "employees",
    } as FilterDefinitionUnion<typeof MockObjectType>;

    applyLinkedFilters(
      asObjectSet(base),
      [def],
      stateMap([[def, {
        type: "linkedProperty",
        linkedFilterState: { type: "EXACT_MATCH", values: ["Alice"] },
      }]]),
    );

    expect(base.pivotTo).toHaveBeenCalledWith("manager");
    const afterForward = base.pivotTo.mock.results[0].value as ChainStub;
    const afterWhere = afterForward.where.mock.results[0].value as ChainStub;
    expect(afterWhere.pivotTo).toHaveBeenCalledWith("employees");
    expect(base.intersect).toHaveBeenCalledTimes(1);
  });

  it("converts SELECT inner state to a $in where clause on the linked property", () => {
    const base = chainStub();
    const def = {
      ...createLinkedPropertyFilterDef("manager", "name"),
      reverseLinkName: "employees",
    } as FilterDefinitionUnion<typeof MockObjectType>;

    applyLinkedFilters(
      asObjectSet(base),
      [def],
      stateMap([[def, {
        type: "linkedProperty",
        linkedFilterState: {
          type: "SELECT",
          selectedValues: ["Alice", "Bob"],
        },
      }]]),
    );

    const afterForward = base.pivotTo.mock.results[0].value as ChainStub;
    expect(afterForward.where).toHaveBeenCalledWith({
      name: { $in: ["Alice", "Bob"] },
    });
  });

  it("intersects sequentially when multiple LINKED_PROPERTY filters apply", () => {
    const base = chainStub();
    const managerDef = {
      ...createLinkedPropertyFilterDef("manager", "name"),
      reverseLinkName: "employees",
    } as FilterDefinitionUnion<typeof MockObjectType>;
    const officeDef = {
      ...createLinkedPropertyFilterDef("office", "city"),
      reverseLinkName: "occupants",
    } as FilterDefinitionUnion<typeof MockObjectType>;

    applyLinkedFilters(
      asObjectSet(base),
      [managerDef, officeDef],
      stateMap([
        [managerDef, {
          type: "linkedProperty",
          linkedFilterState: { type: "EXACT_MATCH", values: ["Alice"] },
        }],
        [officeDef, {
          type: "linkedProperty",
          linkedFilterState: { type: "EXACT_MATCH", values: ["NYC"] },
        }],
      ]),
    );

    // base.intersect runs once for the first filter; the second narrowing
    // chains off that result's intersect.
    expect(base.intersect).toHaveBeenCalledTimes(1);
    const firstIntersect = base.intersect.mock.results[0].value as ChainStub;
    expect(firstIntersect.intersect).toHaveBeenCalledTimes(1);
  });

  it("skips LINKED_PROPERTY filters missing reverseLinkName silently", () => {
    const base = chainStub();
    const def = createLinkedPropertyFilterDef("manager", "name");
    // No reverseLinkName set.

    const result = applyLinkedFilters(
      asObjectSet(base),
      [def, def],
      stateMap([[def, {
        type: "linkedProperty",
        linkedFilterState: { type: "EXACT_MATCH", values: ["Alice"] },
      }]]),
    );

    expect(result).toBe(asObjectSet(base));
    expect(base.intersect).not.toHaveBeenCalled();
  });

  it("ignores PROPERTY and other non-LINKED_PROPERTY definitions", () => {
    const base = chainStub();
    const propertyDef = createPropertyFilterDef("name", "LISTOGRAM", {
      type: "EXACT_MATCH",
      values: ["a"],
    });
    const linkedDef = {
      ...createLinkedPropertyFilterDef("manager", "name"),
      reverseLinkName: "employees",
    } as FilterDefinitionUnion<typeof MockObjectType>;

    applyLinkedFilters(
      asObjectSet(base),
      [propertyDef, linkedDef],
      stateMap([
        [propertyDef, { type: "EXACT_MATCH", values: ["a"] }],
        [linkedDef, {
          type: "linkedProperty",
          linkedFilterState: { type: "EXACT_MATCH", values: ["Alice"] },
        }],
      ]),
    );

    // Only the linked filter caused narrowing; the property filter is
    // expected to be applied via filterClause downstream.
    expect(base.intersect).toHaveBeenCalledTimes(1);
  });
});
