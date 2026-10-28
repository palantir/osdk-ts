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

import {
  useCbacBanner,
  useCbacMarkingRestrictions,
  useMarkingCategories,
  useMarkings,
} from "@osdk/react/platform-apis";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { CbacPicker } from "../CbacPicker.js";

vi.mock("@osdk/react/platform-apis", () => ({
  useCbacBanner: vi.fn(),
  useCbacMarkingRestrictions: vi.fn(),
  useMarkingCategories: vi.fn(),
  useMarkings: vi.fn(),
}));

const CATEGORIES = [
  {
    id: "c1",
    name: "Clearance",
    description: "",
    categoryType: "CONJUNCTIVE",
    markingType: "CBAC",
  },
];
const MARKINGS = [
  { id: "m1", categoryId: "c1", name: "Alpha" },
  { id: "m2", categoryId: "c1", name: "Beta" },
];
const BANNER = {
  classificationString: "SECRET",
  textColor: "#000000",
  backgroundColors: ["#123456"],
  markingIds: ["m1"],
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(useMarkingCategories).mockReturnValue({
    categories: CATEGORIES,
    isLoading: false,
    error: undefined,
    refetch: vi.fn(),
  } as unknown as ReturnType<typeof useMarkingCategories>);
  vi.mocked(useMarkings).mockReturnValue({
    markings: MARKINGS,
    isLoading: false,
    error: undefined,
    refetch: vi.fn(),
  } as unknown as ReturnType<typeof useMarkings>);
  vi.mocked(useCbacBanner).mockReturnValue({
    banner: BANNER,
    isLoading: false,
    error: undefined,
    refetch: vi.fn(),
  } as unknown as ReturnType<typeof useCbacBanner>);
  vi.mocked(useCbacMarkingRestrictions).mockReturnValue({
    restrictions: undefined,
    isLoading: false,
    error: undefined,
    refetch: vi.fn(),
  } as unknown as ReturnType<typeof useCbacMarkingRestrictions>);
});

describe("CbacPicker", () => {
  afterEach(cleanup);

  describe("display ordering", () => {
    it("orders categories by descending numeric priority, preserving ties and placing missing priorities last", () => {
      const categories: NonNullable<
        ReturnType<typeof useMarkingCategories>["categories"]
      > = [
        { id: "missing-z", name: "Zulu missing" },
        { id: "two-z", name: "Zulu tied", priority: "2" },
        { id: "negative", name: "Negative", priority: "-1" },
        { id: "ten", name: "Ten", priority: "10" },
        { id: "missing-a", name: "Alpha missing" },
        { id: "two-a", name: "Alpha tied", priority: "2" },
        { id: "empty", name: "Empty", priority: "100" },
      ].map((category) => ({
        ...category,
        description: "",
        categoryType: "CONJUNCTIVE",
        markingType: "CBAC",
        markings: [],
        deleted: false,
        createdTime: "2026-01-01T00:00:00Z",
      }));
      const markings = categories.slice(0, -1).map((category) => ({
        id: `marking-${category.id}`,
        name: `Marking ${category.name}`,
        categoryId: category.id,
        deleted: false,
        createdTime: "2026-01-01T00:00:00Z",
      }));
      // Hook results are shared cache data; ordering must not mutate them.
      Object.freeze(categories);
      Object.freeze(markings);
      vi.mocked(useMarkingCategories).mockReturnValue({
        ...useMarkingCategories(),
        categories,
      });
      vi.mocked(useMarkings).mockReturnValue({
        ...useMarkings(),
        markings,
      });

      render(<CbacPicker onChange={vi.fn()} />);

      expect(
        screen
          .getAllByRole("heading", { level: 3 })
          .map((heading) => heading.textContent),
      ).toEqual([
        "Ten",
        "Zulu tied",
        "Alpha tied",
        "Negative",
        "Zulu missing",
        "Alpha missing",
      ]);
    });

    it("orders markings by descending numeric priority, preserving ties and placing missing priorities last", () => {
      const markings = [
        { id: "missing-z", name: "Zulu missing" },
        { id: "two-z", name: "Zulu tied", priority: "2" },
        { id: "negative", name: "Negative", priority: "-1" },
        { id: "ten", name: "Ten", priority: "10" },
        { id: "missing-a", name: "Alpha missing" },
        { id: "two-a", name: "Alpha tied", priority: "2" },
      ].map((marking) => ({
        ...marking,
        categoryId: "c1",
        deleted: false,
        createdTime: "2026-01-01T00:00:00Z",
      }));
      Object.freeze(markings);
      vi.mocked(useMarkings).mockReturnValue({
        ...useMarkings(),
        markings,
      });

      render(<CbacPicker onChange={vi.fn()} />);

      const category = within(screen.getByRole("group", { name: "Clearance" }));
      expect(
        category.getAllByRole("button").map((button) => button.textContent),
      ).toEqual([
        "Ten",
        "Zulu tied",
        "Alpha tied",
        "Negative",
        "Zulu missing",
        "Alpha missing",
      ]);
    });

    it("orders common, uncommon, then missing-prominence markings across overflow and selection", async () => {
      const markings: NonNullable<ReturnType<typeof useMarkings>["markings"]> =
        [
          {
            id: "uncommon-low",
            name: "Uncommon low",
            priority: "50",
            prominence: "UNCOMMON" as const,
          },
          {
            id: "common-low",
            name: "Common low",
            priority: "2",
            prominence: "COMMON" as const,
          },
          {
            id: "uncommon-z",
            name: "Zulu uncommon",
            priority: "100",
            prominence: "UNCOMMON" as const,
          },
          { id: "missing", name: "Missing prominence", priority: "500" },
          {
            id: "common-high",
            name: "Common high",
            priority: "10",
            prominence: "COMMON" as const,
          },
          {
            id: "uncommon-a",
            name: "Alpha uncommon",
            priority: "100",
            prominence: "UNCOMMON" as const,
          },
          ...Array.from({ length: 8 }, (_, i) => ({
            id: `common-${i}`,
            name: `Common ${i}`,
            priority: "0",
            prominence: "COMMON" as const,
          })),
        ].map((marking) => ({
          ...marking,
          categoryId: "c1",
          deleted: false,
          createdTime: "2026-01-01T00:00:00Z",
        }));
      Object.freeze(markings);
      vi.mocked(useMarkings).mockReturnValue({
        ...useMarkings(),
        markings,
      });
      const onChange = vi.fn();

      render(<CbacPicker onChange={onChange} />);

      const category = within(screen.getByRole("group", { name: "Clearance" }));
      const visibleNames = [
        "Common high",
        "Common low",
        ...Array.from({ length: 8 }, (_, i) => `Common ${i}`),
        "Zulu uncommon",
        "+3 more",
      ];
      expect(
        category.getAllByRole("button").map((button) => button.textContent),
      ).toEqual(visibleNames);

      fireEvent.click(category.getByRole("button", { name: "Common low" }));
      expect(onChange).toHaveBeenLastCalledWith(["common-low"]);
      expect(
        category.getAllByRole("button").map((button) => button.textContent),
      ).toEqual(visibleNames);

      fireEvent.click(category.getByRole("button", { name: "+3 more" }));
      const missingProminenceButton = await screen.findByRole("button", {
        name: "Missing prominence",
      });
      const overflow = within(screen.getByRole("dialog"));
      const overflowNames = [
        "Alpha uncommon",
        "Uncommon low",
        "Missing prominence",
      ];
      expect(
        overflow.getAllByRole("button").map((button) => button.textContent),
      ).toEqual(overflowNames);

      fireEvent.click(missingProminenceButton);
      expect(onChange).toHaveBeenLastCalledWith(["common-low", "missing"]);
      expect(
        category.getAllByRole("button").map((button) => button.textContent),
      ).toEqual(visibleNames);
      expect(
        overflow.getAllByRole("button").map((button) => button.textContent),
      ).toEqual(overflowNames);
    });
  });

  it("fires onChange with the updated selection when a marking is toggled", () => {
    const onChange = vi.fn();
    render(<CbacPicker onChange={onChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Alpha" }));
    expect(onChange).toHaveBeenCalledExactlyOnceWith(["m1"]);
  });

  it("defers the includeDeleted default to the hooks", () => {
    render(<CbacPicker onChange={vi.fn()} />);
    expect(useMarkingCategories).toHaveBeenLastCalledWith({
      includeDeleted: undefined,
      markingType: "CBAC",
    });
    expect(useMarkings).toHaveBeenLastCalledWith({
      includeDeleted: undefined,
      markingType: "CBAC",
    });
  });

  it("excludes deleted markings and categories when includeDeleted is false", () => {
    render(<CbacPicker onChange={vi.fn()} includeDeleted={false} />);
    expect(useMarkingCategories).toHaveBeenLastCalledWith({
      includeDeleted: false,
      markingType: "CBAC",
    });
    expect(useMarkings).toHaveBeenLastCalledWith({
      includeDeleted: false,
      markingType: "CBAC",
    });
  });

  it("does not change the selection when readOnly", () => {
    const onChange = vi.fn();
    render(<CbacPicker onChange={onChange} readOnly />);

    fireEvent.click(screen.getByRole("button", { name: "Alpha" }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("clears the selection and fires onChange([]) when the banner is dismissed", () => {
    const onChange = vi.fn();
    render(<CbacPicker initialMarkingIds={["m1"]} onChange={onChange} />);

    fireEvent.click(
      screen.getByRole("button", { name: "Clear classification" }),
    );
    expect(onChange).toHaveBeenCalledExactlyOnceWith([]);
  });

  it("renders the max-classification callout when a constraint is provided", () => {
    render(
      <CbacPicker
        onChange={vi.fn()}
        maxClassificationConstraint={{
          bannerClassificationString: "TOP SECRET",
          markingIds: ["m9"],
          helperText: "Do not exceed.",
        }}
      />,
    );

    expect(screen.getByText("Maximum allowed classification")).toBeDefined();
    expect(screen.getByText("TOP SECRET")).toBeDefined();
  });

  it("does not render the max-classification callout without a constraint", () => {
    render(<CbacPicker onChange={vi.fn()} />);
    expect(screen.queryByText("Maximum allowed classification")).toBeNull();
  });
});
