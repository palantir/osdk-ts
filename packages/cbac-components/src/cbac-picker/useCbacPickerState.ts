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
  useUserMarkings,
} from "@osdk/react/experimental/admin";
import React from "react";
import type {
  CategoryMarkingGroup,
  CbacBannerData,
  MarkingSelectionState,
  PickerMarking,
  PickerMarkingCategory,
} from "./types.js";
import { EMPTY_ARRAY } from "./utils/cbacPickerUtils.js";
import {
  computeMarkingStates,
  groupMarkingsByCategory,
} from "./utils/selectionLogic.js";

const EMPTY_GROUPS: string[][] = [];

export interface UseCbacPickerStateResult {
  categoryGroups: CategoryMarkingGroup[];
  markingStates: Map<string, MarkingSelectionState>;
  banner: CbacBannerData | undefined;
  requiredMarkingGroups: string[][];
  isValid: boolean;
  isLoading: boolean;
  error: Error | undefined;
}

export function useCbacPickerState(
  selectedIds: string[],
): UseCbacPickerStateResult {
  const {
    categories: rawCategories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useMarkingCategories();
  const {
    markings: rawMarkings,
    isLoading: markingsLoading,
    error: markingsError,
  } = useMarkings();
  const {
    markingIds: userMarkingIds,
    isLoading: userMarkingsLoading,
    error: userMarkingsError,
  } = useUserMarkings();
  const { banner } = useCbacBanner({ markingIds: selectedIds });
  const {
    restrictions,
    isLoading: restrictionsLoading,
    error: restrictionsError,
  } = useCbacMarkingRestrictions({ markingIds: selectedIds });

  const impliedMarkingIds = restrictions?.impliedMarkings ?? EMPTY_ARRAY;
  const disallowedMarkingIds = restrictions?.disallowedMarkings ?? EMPTY_ARRAY;
  const requiredMarkingGroups = restrictions?.requiredMarkings ?? EMPTY_GROUPS;
  const isValid = restrictions?.isValid ?? true;

  const isLoading = categoriesLoading || markingsLoading || userMarkingsLoading
    || restrictionsLoading;

  const error = React.useMemo(() => {
    const errors = [
      categoriesError,
      markingsError,
      userMarkingsError,
      restrictionsError,
    ].filter((e): e is Error => e != null);
    if (errors.length > 1) {
      return new AggregateError(
        errors,
        errors.map(e => e.message).join("; "),
      );
    }
    return errors[0];
  }, [categoriesError, markingsError, userMarkingsError, restrictionsError]);

  const pickerCategories = React.useMemo((): PickerMarkingCategory[] => {
    if (rawCategories === undefined) {
      return [];
    }
    return rawCategories.map((c): PickerMarkingCategory => ({
      id: c.id,
      name: c.name,
      description: c.description,
      categoryType: c.categoryType,
      markingType: c.markingType,
    }));
  }, [rawCategories]);

  const pickerMarkings = React.useMemo((): PickerMarking[] => {
    if (rawMarkings === undefined) {
      return [];
    }
    return rawMarkings.map((m): PickerMarking => ({
      id: m.id,
      categoryId: m.categoryId,
      name: m.name,
      description: m.description,
    }));
  }, [rawMarkings]);

  const categoryGroups = React.useMemo(
    (): CategoryMarkingGroup[] =>
      groupMarkingsByCategory(pickerMarkings, pickerCategories),
    [pickerMarkings, pickerCategories],
  );

  const markingStates = React.useMemo(
    () =>
      computeMarkingStates(
        selectedIds,
        impliedMarkingIds,
        disallowedMarkingIds,
      ),
    [selectedIds, impliedMarkingIds, disallowedMarkingIds],
  );

  return {
    categoryGroups,
    markingStates,
    banner,
    requiredMarkingGroups,
    isValid,
    isLoading,
    error,
  };
}
