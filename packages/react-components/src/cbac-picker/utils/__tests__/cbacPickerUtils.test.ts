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

import type { CategoryMarkingGroup, CbacBannerData } from "../../types.js";
import {
  backgroundFromColors,
  groupMarkingsByCategory,
  resolveBannerDisplay,
  resolveRequiredGroups,
} from "../cbacPickerUtils.js";

describe("backgroundFromColors", () => {
  it("returns transparent when there are no colors", () => {
    expect(backgroundFromColors([])).toBe("transparent");
  });

  it("returns the single color directly", () => {
    expect(backgroundFromColors(["#FF0000"])).toBe("#FF0000");
  });

  it("builds a left-to-right gradient for multiple colors", () => {
    expect(backgroundFromColors(["#FF0000", "#00FF00", "#0000FF"])).toBe(
      "linear-gradient(to right, #FF0000, #00FF00, #0000FF)",
    );
  });
});

describe("resolveBannerDisplay", () => {
  it("uses UNMARKED defaults when banner is undefined", () => {
    expect(resolveBannerDisplay(undefined)).toEqual({
      classificationString: "UNMARKED",
      textColor: "#FFFFFF",
      backgroundColors: ["#8F99A8"],
    });
  });

  it("passes through the banner's display values", () => {
    const banner: CbacBannerData = {
      classificationString: "SECRET",
      textColor: "#000000",
      backgroundColors: ["#123456", "#654321"],
      markingIds: ["m1"],
    };
    expect(resolveBannerDisplay(banner)).toEqual({
      classificationString: "SECRET",
      textColor: "#000000",
      backgroundColors: ["#123456", "#654321"],
    });
  });
});

describe("groupMarkingsByCategory (applied markings)", () => {
  const categories = [
    { id: "cat-a", name: "Category A" },
    { id: "cat-b", name: "Category B" },
  ];
  const markings = [
    { id: "a1", name: "Alpha", categoryId: "cat-a" },
    { id: "a2", name: "Beta", categoryId: "cat-a" },
    { id: "b1", name: "Gamma", categoryId: "cat-b" },
  ];

  it("returns an empty array when nothing is selected", () => {
    expect(groupMarkingsByCategory([], categories, markings)).toEqual([]);
  });

  it("returns an empty array when categories or markings are undefined", () => {
    expect(groupMarkingsByCategory(["a1"], undefined, markings)).toEqual([]);
    expect(groupMarkingsByCategory(["a1"], categories, undefined)).toEqual([]);
  });

  it("groups only the selected markings under their category name", () => {
    expect(groupMarkingsByCategory(["a1", "b1"], categories, markings)).toEqual(
      [
        { categoryName: "Category A", markingNames: ["Alpha"] },
        { categoryName: "Category B", markingNames: ["Gamma"] },
      ],
    );
  });

  it("collects multiple selected markings within the same category", () => {
    expect(groupMarkingsByCategory(["a1", "a2"], categories, markings)).toEqual(
      [{ categoryName: "Category A", markingNames: ["Alpha", "Beta"] }],
    );
  });

  it("falls back to the category id when the category name is unknown", () => {
    const orphan = [{ id: "x1", name: "Orphan", categoryId: "missing" }];
    expect(groupMarkingsByCategory(["x1"], categories, orphan)).toEqual([
      { categoryName: "missing", markingNames: ["Orphan"] },
    ]);
  });

  describe("ordering", () => {
    it("sorts selected markings by category priority, prominence, and marking priority", () => {
      const unsortedCategories = Object.freeze([
        { id: "missing", name: "Missing priority" },
        { id: "low", name: "Low priority", priority: "2" },
        { id: "high", name: "High priority", priority: "10" },
      ]);
      const unsortedMarkings = Object.freeze([
        { id: "missing", categoryId: "missing", name: "Missing" },
        { id: "low", categoryId: "low", name: "Low" },
        {
          id: "unspecified",
          categoryId: "high",
          name: "Unspecified",
          priority: "100",
        },
        {
          id: "uncommon",
          categoryId: "high",
          name: "Uncommon",
          priority: "50",
          prominence: "UNCOMMON" as const,
        },
        {
          id: "common-low",
          categoryId: "high",
          name: "Common low",
          priority: "2",
          prominence: "COMMON" as const,
        },
        {
          id: "common-high",
          categoryId: "high",
          name: "Common high",
          priority: "10",
          prominence: "COMMON" as const,
        },
        { id: "unselected", categoryId: "high", name: "Unselected" },
      ]);

      expect(
        groupMarkingsByCategory(
          [
            "missing",
            "low",
            "unspecified",
            "uncommon",
            "common-low",
            "common-high",
          ],
          unsortedCategories,
          unsortedMarkings,
        ),
      ).toEqual([
        {
          categoryName: "High priority",
          markingNames: [
            "Common high",
            "Common low",
            "Uncommon",
            "Unspecified",
          ],
        },
        { categoryName: "Low priority", markingNames: ["Low"] },
        { categoryName: "Missing priority", markingNames: ["Missing"] },
      ]);
    });

    it("preserves category input order for ties rather than marking encounter order", () => {
      expect(
        groupMarkingsByCategory(["a1", "b1"], categories, [
          markings[2],
          markings[0],
        ]),
      ).toEqual([
        { categoryName: "Category A", markingNames: ["Alpha"] },
        { categoryName: "Category B", markingNames: ["Gamma"] },
      ]);
    });

    it("uses the highest category priority when category names repeat", () => {
      const duplicateNameCategories = [
        { id: "cat-a", name: "Shared", priority: "10" },
        { id: "cat-b", name: "Other", priority: "5" },
        { id: "cat-c", name: "Shared", priority: "2" },
      ];

      expect(
        groupMarkingsByCategory(["a1", "b1", "c1"], duplicateNameCategories, [
          markings[2],
          markings[0],
          { id: "c1", name: "Delta", categoryId: "cat-c" },
        ]),
      ).toEqual([
        { categoryName: "Shared", markingNames: ["Alpha", "Delta"] },
        { categoryName: "Other", markingNames: ["Gamma"] },
      ]);
    });
  });
});

describe("resolveRequiredGroups", () => {
  const categoryGroups: CategoryMarkingGroup[] = [
    {
      category: {
        id: "cat",
        name: "Category",
        description: "",
        categoryType: "CONJUNCTIVE",
        markingType: "CBAC",
      },
      markings: [
        { id: "m1", categoryId: "cat", name: "Marking One" },
        { id: "m2", categoryId: "cat", name: "Marking Two" },
      ],
    },
  ];

  it("resolves marking ids to their display names", () => {
    expect(resolveRequiredGroups(categoryGroups, [["m1", "m2"]])).toEqual([
      { markingNames: ["Marking One", "Marking Two"] },
    ]);
  });

  it("falls back to the raw id when a marking is not found", () => {
    expect(resolveRequiredGroups(categoryGroups, [["m1", "unknown"]])).toEqual([
      { markingNames: ["Marking One", "unknown"] },
    ]);
  });

  it("preserves the group structure across multiple groups", () => {
    expect(resolveRequiredGroups(categoryGroups, [["m1"], ["m2"]])).toEqual([
      { markingNames: ["Marking One"] },
      { markingNames: ["Marking Two"] },
    ]);
  });
});
