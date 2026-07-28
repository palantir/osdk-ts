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
import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useCbacSelection } from "../useCbacSelection.js";

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
    banner: undefined,
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

describe("useCbacSelection", () => {
  it("seeds the selection from the initial marking ids", () => {
    const initial = ["m1"];
    const { result } = renderHook(() => useCbacSelection(initial));
    expect(result.current.selectedIds).toEqual(["m1"]);
  });

  it("resets the selection when the initial marking ids change", () => {
    const { result, rerender } = renderHook(
      ({ ids }) => useCbacSelection(ids),
      { initialProps: { ids: ["m1"] } }
    );
    expect(result.current.selectedIds).toEqual(["m1"]);

    rerender({ ids: ["m2"] });
    expect(result.current.selectedIds).toEqual(["m2"]);
  });

  it("adds a marking in a conjunctive category on toggle", () => {
    // A stable reference mirrors how callers pass this prop.
    const initial = ["m1"];
    const { result } = renderHook(() => useCbacSelection(initial));
    act(() => result.current.toggle("m2"));
    expect(result.current.selectedIds).toEqual(["m1", "m2"]);
  });

  it("removes an already-selected marking on toggle", () => {
    const initial = ["m1", "m2"];
    const { result } = renderHook(() => useCbacSelection(initial));
    act(() => result.current.toggle("m1"));
    expect(result.current.selectedIds).toEqual(["m2"]);
  });

  it("clears the selection on dismiss", () => {
    const initial = ["m1", "m2"];
    const { result } = renderHook(() => useCbacSelection(initial));
    act(() => result.current.dismiss());
    expect(result.current.selectedIds).toEqual([]);
  });

  it("restores the initial selection on reset", () => {
    const initial = ["m1"];
    const { result } = renderHook(() => useCbacSelection(initial));
    act(() => result.current.toggle("m2"));
    expect(result.current.selectedIds).toEqual(["m1", "m2"]);

    act(() => result.current.reset());
    expect(result.current.selectedIds).toEqual(["m1"]);
  });
});
