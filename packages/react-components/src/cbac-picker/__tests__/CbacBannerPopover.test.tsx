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
  useMarkingCategories,
  useMarkings,
} from "@osdk/react/platform-apis";
import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { BaseCbacBannerPopover } from "../base/BaseCbacBannerPopover.js";
import { CbacBannerPopover } from "../CbacBannerPopover.js";

vi.mock("@osdk/react/platform-apis", () => ({
  useCbacBanner: vi.fn(),
  useMarkingCategories: vi.fn(),
  useMarkings: vi.fn(),
}));
vi.mock("../base/BaseCbacBannerPopover.js", () => ({
  BaseCbacBannerPopover: vi.fn(() => null),
}));
vi.mock("../CbacPickerDialog.js", () => ({
  CbacPickerDialog: vi.fn(() => null),
}));

const markingIds = ["later"];
const markingsResult: ReturnType<typeof useMarkings> = {
  markings: [
    {
      id: "later",
      name: "Later marking",
      categoryId: "category",
      createdTime: "2026-01-01T00:00:00Z",
    },
  ],
  isLoading: false,
  error: undefined,
  refetch: vi.fn(),
  hasMore: false,
  fetchMore: undefined,
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(useMarkings).mockReturnValue(markingsResult);
  vi.mocked(useMarkingCategories).mockReturnValue({
    categories: [
      {
        id: "category",
        name: "Classification",
        description: "",
        categoryType: "CONJUNCTIVE",
        markingType: "CBAC",
        markings: markingIds,
        createdTime: "2026-01-01T00:00:00Z",
      },
    ],
    isLoading: false,
    error: undefined,
    refetch: vi.fn(),
    hasMore: false,
    fetchMore: undefined,
  });
  vi.mocked(useCbacBanner).mockReturnValue({
    banner: undefined,
    isLoading: false,
    error: undefined,
    refetch: vi.fn(),
  });
});
afterEach(cleanup);

describe("CbacBannerPopover", () => {
  it("requests complete catalogues to resolve applied marking names", () => {
    render(<CbacBannerPopover markingIds={markingIds} onChange={vi.fn()} />);
    expect(useMarkings).toHaveBeenCalledWith({ autoFetchMore: true });
    expect(useMarkingCategories).toHaveBeenCalledWith({ autoFetchMore: true });
    expect(
      vi.mocked(BaseCbacBannerPopover).mock.lastCall?.[0].appliedMarkings,
    ).toEqual([
      { categoryName: "Classification", markingNames: ["Later marking"] },
    ]);
  });

  it("waits for the complete catalogue and hides incomplete data on failure", () => {
    vi.mocked(useMarkings).mockReturnValue({
      ...markingsResult,
      isLoading: true,
      hasMore: true,
    });
    const { rerender } = render(
      <CbacBannerPopover markingIds={markingIds} onChange={vi.fn()} />,
    );
    expect(
      vi.mocked(BaseCbacBannerPopover).mock.lastCall?.[0].appliedMarkings,
    ).toEqual([]);
    const error = new Error("later page failed");
    vi.mocked(useMarkings).mockReturnValue({
      ...markingsResult,
      error,
      hasMore: true,
    });
    rerender(<CbacBannerPopover markingIds={markingIds} onChange={vi.fn()} />);
    expect(
      vi.mocked(BaseCbacBannerPopover).mock.lastCall?.[0].appliedMarkings,
    ).toEqual([]);
    expect(vi.mocked(BaseCbacBannerPopover).mock.lastCall?.[0].error).toBe(
      error,
    );
  });
});
