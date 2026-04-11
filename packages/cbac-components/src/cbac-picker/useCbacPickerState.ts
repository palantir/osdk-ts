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
} from "@osdk/react/experimental/admin";
import React from "react";
import type {
  CategoryMarkingGroup,
  CbacBannerData,
  MarkingSelectionState,
  RequiredMarkingGroup,
} from "./types.js";
import { EMPTY_ARRAY, resolveRequiredGroups } from "./utils/cbacPickerUtils.js";
import {
  computeMarkingStates,
  groupMarkingsByCategory,
} from "./utils/selectionLogic.js";

const EMPTY_GROUPS: string[][] = [];

export interface UseCbacPickerStateResult {
  categoryGroups: CategoryMarkingGroup[];
  markingStates: Map<string, MarkingSelectionState>;
  banner: CbacBannerData | undefined;
  requiredMarkingGroups: RequiredMarkingGroup[];
  isValid: boolean;
  userSatisfiesMarkings: boolean;
  disallowedMarkingIds: readonly string[];
  isLoading: boolean;
  error: Error | undefined;
  retry: () => void;
}

function useStableArray(arr: string[]): string[] {
  const ref = React.useRef(arr);
  if (
    arr.length !== ref.current.length
    || arr.some((id, i) => id !== ref.current[i])
  ) {
    ref.current = arr;
  }
  return ref.current;
}

export function useCbacPickerState(
  selectedIds: string[],
): UseCbacPickerStateResult {
  const stableSelectedIds = useStableArray(selectedIds);
  const {
    categories: rawCategories,
    isLoading: categoriesLoading,
    error: categoriesError,
    refetch: refetchCategories,
  } = useMarkingCategories();
  const {
    markings: rawMarkings,
    isLoading: markingsLoading,
    error: markingsError,
    refetch: refetchMarkings,
  } = useMarkings();
  const {
    banner: latestBanner,
    isLoading: bannerLoading,
    error: bannerError,
    refetch: refetchBanner,
  } = useCbacBanner({ markingIds: stableSelectedIds });

  const bannerRef = React.useRef(latestBanner);
  if (latestBanner != null) {
    bannerRef.current = latestBanner;
  }
  const banner = latestBanner ?? bannerRef.current;
  const {
    restrictions,
    isLoading: restrictionsLoading,
    error: restrictionsError,
    refetch: refetchRestrictions,
  } = useCbacMarkingRestrictions({ markingIds: stableSelectedIds });

  const impliedMarkingIds = restrictions?.impliedMarkings ?? EMPTY_ARRAY;
  const disallowedMarkingIds = restrictions?.disallowedMarkings ?? EMPTY_ARRAY;
  const requiredMarkingGroups = restrictions?.requiredMarkings ?? EMPTY_GROUPS;
  const isValid = restrictions?.isValid ?? true;
  const userSatisfiesMarkings = restrictions?.userSatisfiesMarkings ?? true;

  const isLoading = categoriesLoading || markingsLoading
    || restrictionsLoading || bannerLoading;

  const error = React.useMemo(() => {
    const errors = [
      categoriesError,
      markingsError,
      restrictionsError,
      bannerError,
    ].filter((e): e is Error => e != null);
    if (errors.length > 1) {
      return new AggregateError(
        errors,
        errors.map(e => e.message).join("; "),
      );
    }
    return errors[0];
  }, [categoriesError, markingsError, restrictionsError, bannerError]);

  const retry = React.useCallback(() => {
    refetchCategories();
    refetchMarkings();
    refetchBanner();
    refetchRestrictions();
  }, [refetchCategories, refetchMarkings, refetchBanner, refetchRestrictions]);

  const categoryGroups = React.useMemo(
    (): CategoryMarkingGroup[] => {
      if (rawCategories === undefined || rawMarkings === undefined) {
        return [];
      }
      return groupMarkingsByCategory(rawMarkings, rawCategories);
    },
    [rawMarkings, rawCategories],
  );

  const markingStates = React.useMemo(
    () =>
      computeMarkingStates(
        stableSelectedIds,
        impliedMarkingIds,
        disallowedMarkingIds,
      ),
    [stableSelectedIds, impliedMarkingIds, disallowedMarkingIds],
  );

  const resolvedRequiredGroups = React.useMemo(
    () => resolveRequiredGroups(categoryGroups, requiredMarkingGroups),
    [categoryGroups, requiredMarkingGroups],
  );

  return React.useMemo(
    () => ({
      categoryGroups,
      markingStates,
      banner,
      requiredMarkingGroups: resolvedRequiredGroups,
      isValid,
      userSatisfiesMarkings,
      disallowedMarkingIds,
      isLoading,
      error,
      retry,
    }),
    [
      categoryGroups,
      markingStates,
      banner,
      resolvedRequiredGroups,
      isValid,
      userSatisfiesMarkings,
      disallowedMarkingIds,
      isLoading,
      error,
      retry,
    ],
  );
}
