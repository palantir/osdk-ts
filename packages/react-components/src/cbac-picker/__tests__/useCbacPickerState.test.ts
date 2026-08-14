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
import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { CbacBannerData } from "../types.js";
import { useCbacPickerState } from "../useCbacPickerState.js";

vi.mock("@osdk/react/platform-apis", () => ({
  useCbacBanner: vi.fn(),
  useCbacMarkingRestrictions: vi.fn(),
  useMarkingCategories: vi.fn(),
  useMarkings: vi.fn(),
}));

type Slot = "categories" | "markings" | "banner" | "restrictions";

interface RestrictionsShape {
  disallowedMarkings: string[];
  impliedMarkings: string[];
  requiredMarkings: string[][];
  userSatisfiesMarkings: boolean;
  isValid: boolean;
}

interface HookConfig {
  categories?: ReadonlyArray<{
    id: string;
    name: string;
    description: string;
    categoryType: "CONJUNCTIVE" | "DISJUNCTIVE";
    markingType: "MANDATORY" | "CBAC";
  }>;
  markings?: ReadonlyArray<{ id: string; categoryId: string; name: string }>;
  banner?: CbacBannerData;
  restrictions?: RestrictionsShape;
  loading?: Partial<Record<Slot, boolean>>;
  errors?: Partial<Record<Slot, Error>>;
  refetch?: Partial<Record<Slot, () => void>>;
}

function setHooks(config: HookConfig = {}): void {
  vi.mocked(useMarkingCategories).mockReturnValue({
    categories: config.categories,
    isLoading: config.loading?.categories ?? false,
    error: config.errors?.categories,
    refetch: config.refetch?.categories ?? vi.fn(),
  } as unknown as ReturnType<typeof useMarkingCategories>);
  vi.mocked(useMarkings).mockReturnValue({
    markings: config.markings,
    isLoading: config.loading?.markings ?? false,
    error: config.errors?.markings,
    refetch: config.refetch?.markings ?? vi.fn(),
  } as unknown as ReturnType<typeof useMarkings>);
  vi.mocked(useCbacBanner).mockReturnValue({
    banner: config.banner,
    isLoading: config.loading?.banner ?? false,
    error: config.errors?.banner,
    refetch: config.refetch?.banner ?? vi.fn(),
  } as unknown as ReturnType<typeof useCbacBanner>);
  vi.mocked(useCbacMarkingRestrictions).mockReturnValue({
    restrictions: config.restrictions,
    isLoading: config.loading?.restrictions ?? false,
    error: config.errors?.restrictions,
    refetch: config.refetch?.restrictions ?? vi.fn(),
  } as unknown as ReturnType<typeof useCbacMarkingRestrictions>);
}

const CATEGORIES = [
  {
    id: "c1",
    name: "Clearance",
    description: "",
    categoryType: "CONJUNCTIVE" as const,
    markingType: "CBAC" as const,
  },
];
const MARKINGS = [
  { id: "m1", categoryId: "c1", name: "Alpha" },
  { id: "m2", categoryId: "c1", name: "Beta" },
];

describe("useCbacPickerState", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setHooks();
  });

  it("uses permissive defaults when restrictions have not loaded", () => {
    const { result } = renderHook(() => useCbacPickerState(["m1"]));
    expect(result.current.isValid).toBe(true);
    expect(result.current.userSatisfiesMarkings).toBe(true);
    expect(result.current.disallowedMarkingIds).toEqual([]);
    expect(result.current.requiredMarkingGroups).toEqual([]);
  });

  it("passes a single hook error straight through", () => {
    setHooks({ errors: { categories: new Error("boom") } });
    const { result } = renderHook(() => useCbacPickerState([]));
    expect(result.current.error?.message).toBe("boom");
    expect(result.current.error).not.toBeInstanceOf(AggregateError);
  });

  it("combines multiple hook errors into an AggregateError", () => {
    setHooks({
      errors: { categories: new Error("A"), markings: new Error("B") },
    });
    const { result } = renderHook(() => useCbacPickerState([]));
    const error = result.current.error;
    expect(error).toBeInstanceOf(AggregateError);
    expect((error as AggregateError).errors).toHaveLength(2);
  });

  it("reports loading when any underlying query is loading", () => {
    setHooks({ loading: { banner: true } });
    const { result } = renderHook(() => useCbacPickerState([]));
    expect(result.current.isLoading).toBe(true);
  });

  it("retains the last banner while a new one is being fetched", () => {
    const banner: CbacBannerData = {
      classificationString: "SECRET",
      textColor: "#000000",
      backgroundColors: ["#123456"],
      markingIds: ["m1"],
    };
    setHooks({ banner });
    const { result, rerender } = renderHook(() => useCbacPickerState(["m1"]));
    expect(result.current.banner).toBe(banner);

    // The next fetch is in flight and returns no banner yet.
    setHooks({ banner: undefined });
    rerender();
    expect(result.current.banner).toBe(banner);
  });

  it("refetches every underlying query on retry", () => {
    const refetch = {
      categories: vi.fn(),
      markings: vi.fn(),
      banner: vi.fn(),
      restrictions: vi.fn(),
    };
    setHooks({ refetch });
    const { result } = renderHook(() => useCbacPickerState([]));
    result.current.retry();
    expect(refetch.categories).toHaveBeenCalledOnce();
    expect(refetch.markings).toHaveBeenCalledOnce();
    expect(refetch.banner).toHaveBeenCalledOnce();
    expect(refetch.restrictions).toHaveBeenCalledOnce();
  });

  it("derives marking states and resolves required-group names from restrictions", () => {
    setHooks({
      categories: CATEGORIES,
      markings: MARKINGS,
      restrictions: {
        disallowedMarkings: [],
        impliedMarkings: ["m2"],
        requiredMarkings: [["m1"]],
        userSatisfiesMarkings: true,
        isValid: false,
      },
    });
    const { result } = renderHook(() => useCbacPickerState(["m1"]));

    expect(result.current.markingStates.get("m1")).toBe("SELECTED");
    expect(result.current.markingStates.get("m2")).toBe("IMPLIED");
    expect(result.current.isValid).toBe(false);
    expect(result.current.requiredMarkingGroups).toEqual([
      { markingNames: ["Alpha"] },
    ]);
  });
});
