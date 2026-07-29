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
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
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

  it("fires onChange with the updated selection when a marking is toggled", () => {
    const onChange = vi.fn();
    render(<CbacPicker onChange={onChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Alpha" }));
    expect(onChange).toHaveBeenCalledExactlyOnceWith(["m1"]);
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
      screen.getByRole("button", { name: "Clear classification" })
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
      />
    );

    expect(screen.getByText("Maximum allowed classification")).toBeDefined();
    expect(screen.getByText("TOP SECRET")).toBeDefined();
  });

  it("does not render the max-classification callout without a constraint", () => {
    render(<CbacPicker onChange={vi.fn()} />);
    expect(screen.queryByText("Maximum allowed classification")).toBeNull();
  });
});
