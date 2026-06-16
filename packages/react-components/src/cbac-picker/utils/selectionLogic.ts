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

import type {
  CategoryMarkingGroup,
  MarkingSelectionState,
  PickerMarking,
  PickerMarkingCategory,
} from "../types.js";

export function toggleMarking(
  markingId: string,
  currentSelection: string[],
  categories: CategoryMarkingGroup[],
): string[] {
  const isSelected = currentSelection.includes(markingId);

  let ownerGroup: CategoryMarkingGroup | undefined;
  for (const group of categories) {
    for (const marking of group.markings) {
      if (marking.id === markingId) {
        ownerGroup = group;
        break;
      }
    }
    if (ownerGroup !== undefined) {
      break;
    }
  }

  if (ownerGroup === undefined) {
    return currentSelection;
  }

  if (isSelected) {
    return currentSelection.filter((id) => id !== markingId);
  }

  // Disjunctive categories allow only one marking selected at a time (radio-style).
  // Conjunctive categories allow multiple markings (checkbox-style).
  if (ownerGroup.category.categoryType === "DISJUNCTIVE") {
    const sameCategoryMarkingIds = new Set(
      ownerGroup.markings.map((m) => m.id),
    );
    const withoutSameCategory = currentSelection.filter(
      (id) => !sameCategoryMarkingIds.has(id),
    );
    return [...withoutSameCategory, markingId];
  }

  return [...currentSelection, markingId];
}

export function computeMarkingStates(
  selectedIds: string[],
  impliedIds: string[],
  disallowedIds: string[],
): Map<string, MarkingSelectionState> {
  const states = new Map<string, MarkingSelectionState>();

  const selectedSet = new Set(selectedIds);
  const impliedSet = new Set(impliedIds);
  const disallowedSet = new Set(disallowedIds);

  const allIds = new Set([...selectedIds, ...impliedIds, ...disallowedIds]);

  for (const id of allIds) {
    const isImplied = impliedSet.has(id);
    const isDisallowed = disallowedSet.has(id);
    const isSelected = selectedSet.has(id);

    if (isSelected) {
      states.set(id, "SELECTED");
    } else if (isImplied && isDisallowed) {
      states.set(id, "IMPLIED_DISALLOWED");
    } else if (isImplied) {
      states.set(id, "IMPLIED");
    } else if (isDisallowed) {
      states.set(id, "DISALLOWED");
    }
  }

  return states;
}

export function groupMarkingsByCategory(
  markings: PickerMarking[],
  categories: PickerMarkingCategory[],
): CategoryMarkingGroup[] {
  const markingsByCategoryId = new Map<string, PickerMarking[]>();

  for (const marking of markings) {
    const existing = markingsByCategoryId.get(marking.categoryId);
    if (existing !== undefined) {
      existing.push(marking);
    } else {
      markingsByCategoryId.set(marking.categoryId, [marking]);
    }
  }

  const groups: CategoryMarkingGroup[] = [];

  for (const category of categories) {
    const categoryMarkings = markingsByCategoryId.get(category.id);
    if (categoryMarkings !== undefined && categoryMarkings.length > 0) {
      groups.push({ category, markings: categoryMarkings });
    }
  }

  return groups;
}
