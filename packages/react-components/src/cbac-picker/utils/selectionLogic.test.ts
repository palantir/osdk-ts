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

import { describe, expect, it } from "vitest";
import type {
  CategoryMarkingGroup,
  PickerMarking,
  PickerMarkingCategory,
} from "../types.js";
import {
  computeMarkingStates,
  groupMarkingsByCategory,
  toggleMarking,
} from "./selectionLogic.js";

const conjunctiveCategory: PickerMarkingCategory = {
  id: "cat-conj",
  name: "Conjunctive Category",
  description: "A conjunctive category",
  categoryType: "CONJUNCTIVE",
  markingType: "CBAC",
};

const disjunctiveCategory: PickerMarkingCategory = {
  id: "cat-disjunctive",
  name: "Disjunctive Category",
  description: "A disjunctive category",
  categoryType: "DISJUNCTIVE",
  markingType: "CBAC",
};

const conjunctiveGroup: CategoryMarkingGroup = {
  category: conjunctiveCategory,
  markings: [
    { id: "m1", categoryId: "cat-conj", name: "Marking 1" },
    { id: "m2", categoryId: "cat-conj", name: "Marking 2" },
    { id: "m3", categoryId: "cat-conj", name: "Marking 3" },
  ],
};

const disjunctiveGroup: CategoryMarkingGroup = {
  category: disjunctiveCategory,
  markings: [
    { id: "d1", categoryId: "cat-disjunctive", name: "Disjunctive 1" },
    { id: "d2", categoryId: "cat-disjunctive", name: "Disjunctive 2" },
  ],
};

const allGroups: CategoryMarkingGroup[] = [conjunctiveGroup, disjunctiveGroup];

describe("toggleMarking", () => {
  it("selecting a marking in a CONJUNCTIVE category adds it", () => {
    const result = toggleMarking("m1", [], [conjunctiveGroup]);
    expect(result).toEqual(["m1"]);
  });

  it("deselecting a marking in a CONJUNCTIVE category removes it", () => {
    const result = toggleMarking("m1", ["m1", "m2"], [conjunctiveGroup]);
    expect(result).toEqual(["m2"]);
  });

  it("selecting a marking in a DISJUNCTIVE category replaces previous selection in that category", () => {
    const result = toggleMarking("d2", ["d1"], [disjunctiveGroup]);
    expect(result).toEqual(["d2"]);
  });

  it("deselecting the only selected marking in a DISJUNCTIVE category removes it", () => {
    const result = toggleMarking("d1", ["d1"], [disjunctiveGroup]);
    expect(result).toEqual([]);
  });

  it("cross-category: selecting in one category doesn't affect another", () => {
    const result = toggleMarking("d1", ["m1", "m2"], allGroups);
    expect(result).toEqual(["m1", "m2", "d1"]);
  });

  it("returns current selection when marking id is not found in any category", () => {
    const result = toggleMarking("unknown", ["m1"], allGroups);
    expect(result).toEqual(["m1"]);
  });

  it("returns unchanged selection when categories array is empty", () => {
    const result = toggleMarking("m1", ["m2"], []);
    expect(result).toEqual(["m2"]);
  });
});

describe("computeMarkingStates", () => {
  it("selected marking returns SELECTED", () => {
    const states = computeMarkingStates(["m1"], [], []);
    expect(states.get("m1")).toBe("SELECTED");
  });

  it("implied marking returns IMPLIED", () => {
    const states = computeMarkingStates([], ["m1"], []);
    expect(states.get("m1")).toBe("IMPLIED");
  });

  it("disallowed marking returns DISALLOWED", () => {
    const states = computeMarkingStates([], [], ["m1"]);
    expect(states.get("m1")).toBe("DISALLOWED");
  });

  it("both implied and disallowed returns IMPLIED_DISALLOWED", () => {
    const states = computeMarkingStates([], ["m1"], ["m1"]);
    expect(states.get("m1")).toBe("IMPLIED_DISALLOWED");
  });

  it("unknown marking returns undefined from map lookup", () => {
    const states = computeMarkingStates([], [], []);
    expect(states.get("unknown")).toBeUndefined();
  });

  it("empty inputs returns empty map", () => {
    const states = computeMarkingStates([], [], []);
    expect(states.size).toBe(0);
  });

  it("marking that is both SELECTED and DISALLOWED returns SELECTED", () => {
    const states = computeMarkingStates(["m1"], [], ["m1"]);
    expect(states.get("m1")).toBe("SELECTED");
  });

  it("marking that is both SELECTED and IMPLIED returns SELECTED", () => {
    const states = computeMarkingStates(["m1"], ["m1"], []);
    expect(states.get("m1")).toBe("SELECTED");
  });

  it("marking that is SELECTED, IMPLIED, and DISALLOWED returns SELECTED", () => {
    const states = computeMarkingStates(["m1"], ["m1"], ["m1"]);
    expect(states.get("m1")).toBe("SELECTED");
  });
});

describe("groupMarkingsByCategory", () => {
  const categoryA: PickerMarkingCategory = {
    id: "a",
    name: "Category A",
    description: "First",
    categoryType: "CONJUNCTIVE",
    markingType: "CBAC",
  };

  const categoryB: PickerMarkingCategory = {
    id: "b",
    name: "Category B",
    description: "Second",
    categoryType: "DISJUNCTIVE",
    markingType: "MANDATORY",
  };

  const categoryEmpty: PickerMarkingCategory = {
    id: "empty",
    name: "Empty Category",
    description: "No markings",
    categoryType: "CONJUNCTIVE",
    markingType: "CBAC",
  };

  const markings: PickerMarking[] = [
    { id: "a1", categoryId: "a", name: "A1" },
    { id: "a2", categoryId: "a", name: "A2" },
    { id: "b1", categoryId: "b", name: "B1" },
  ];

  it("groups markings correctly by category", () => {
    const groups = groupMarkingsByCategory(markings, [categoryA, categoryB]);
    expect(groups).toHaveLength(2);
    expect(groups[0].category).toEqual(categoryA);
    expect(groups[0].markings).toEqual([
      { id: "a1", categoryId: "a", name: "A1" },
      { id: "a2", categoryId: "a", name: "A2" },
    ]);
    expect(groups[1].category).toEqual(categoryB);
    expect(groups[1].markings).toEqual([
      { id: "b1", categoryId: "b", name: "B1" },
    ]);
  });

  it("maintains category order", () => {
    const groups = groupMarkingsByCategory(markings, [categoryB, categoryA]);
    expect(groups[0].category.id).toBe("b");
    expect(groups[1].category.id).toBe("a");
  });

  it("excludes categories with no markings", () => {
    const groups = groupMarkingsByCategory(markings, [
      categoryA,
      categoryEmpty,
      categoryB,
    ]);
    expect(groups).toHaveLength(2);
    expect(groups.map((g) => g.category.id)).toEqual(["a", "b"]);
  });

  it("handles empty inputs", () => {
    expect(groupMarkingsByCategory([], [])).toEqual([]);
    expect(groupMarkingsByCategory([], [categoryA])).toEqual([]);
    expect(groupMarkingsByCategory(markings, [])).toEqual([]);
  });

  it("silently drops orphan markings whose categoryId is not in categories", () => {
    const orphanMarking: PickerMarking = {
      id: "orphan",
      categoryId: "nonexistent",
      name: "Orphan",
    };
    const groups = groupMarkingsByCategory(
      [...markings, orphanMarking],
      [categoryA, categoryB],
    );
    expect(groups).toHaveLength(2);
    const allMarkingIds = groups.flatMap((g) => g.markings.map((m) => m.id));
    expect(allMarkingIds).not.toContain("orphan");
  });
});
