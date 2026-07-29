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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import type {
  CategoryMarkingGroup,
  CbacBannerData,
  MarkingSelectionState,
} from "../../types.js";
import { BaseCbacPicker } from "../BaseCbacPicker.js";

const CATEGORIES: CategoryMarkingGroup[] = [
  {
    category: {
      id: "c1",
      name: "Clearance",
      description: "",
      categoryType: "CONJUNCTIVE",
      markingType: "CBAC",
    },
    markings: [
      { id: "m1", categoryId: "c1", name: "Alpha" },
      { id: "m2", categoryId: "c1", name: "Beta" },
    ],
  },
];

const EMPTY_STATES = new Map<string, MarkingSelectionState>();

function renderPicker(props: Partial<Parameters<typeof BaseCbacPicker>[0]>) {
  // Concrete defaults first; any key present in `props` overrides them.
  return render(
    <BaseCbacPicker
      categories={CATEGORIES}
      markingStates={EMPTY_STATES}
      onMarkingToggle={vi.fn()}
      {...props}
    />
  );
}

describe("BaseCbacPicker", () => {
  afterEach(cleanup);

  it("renders each category and its markings as buttons", () => {
    renderPicker({});
    expect(screen.getByRole("group", { name: "Clearance" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Alpha" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Beta" })).toBeDefined();
  });

  it("shows a formatted error and hides the markings when an error is present", () => {
    renderPicker({
      error: Object.assign(new Error("denied"), { statusCode: 403 }),
    });
    const alert = screen.getByRole("alert");
    expect(alert.textContent).toContain("Permission denied");
    expect(alert.textContent).toContain("Contact your administrator");
    expect(screen.queryByRole("button", { name: "Alpha" })).toBeNull();
  });

  it("shows the initial loading state only when no categories have arrived yet", () => {
    renderPicker({ categories: [], isLoading: true });
    expect(screen.getByRole("status").textContent).toContain("Loading");
  });

  it("keeps rendering existing categories while reloading (no loading flash)", () => {
    renderPicker({ isLoading: true });
    expect(screen.getByRole("button", { name: "Alpha" })).toBeDefined();
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("shows the validation warning only when invalid and required groups exist", () => {
    renderPicker({
      isValid: false,
      requiredMarkingGroups: [{ markingNames: ["Need X", "Need Y"] }],
    });
    expect(
      screen.getByText(/To complete a valid classification/u)
    ).toBeDefined();
    expect(screen.getByText("Need X")).toBeDefined();
    expect(screen.getByText("Need Y")).toBeDefined();
  });

  it("does not show the validation warning when there are no required groups", () => {
    renderPicker({ isValid: false, requiredMarkingGroups: [] });
    expect(
      screen.queryByText(/To complete a valid classification/u)
    ).toBeNull();
  });

  it("renders the classification banner and clears it on dismiss", () => {
    const banner: CbacBannerData = {
      classificationString: "SECRET",
      textColor: "#000000",
      backgroundColors: ["#123456"],
      markingIds: ["m1"],
    };
    const onDismissBanner = vi.fn();
    renderPicker({ banner, onDismissBanner });

    expect(screen.getByText("SECRET")).toBeDefined();
    fireEvent.click(
      screen.getByRole("button", { name: "Clear classification" })
    );
    expect(onDismissBanner).toHaveBeenCalledOnce();
  });

  it("renders the info banner when requested", () => {
    renderPicker({ showInfoBanner: true });
    expect(screen.getByText(/Implied markings are/u)).toBeDefined();
  });
});
