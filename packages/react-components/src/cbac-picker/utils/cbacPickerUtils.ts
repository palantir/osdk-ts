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
  CbacBannerData,
  RequiredMarkingGroup,
} from "../types.js";
const UNMARKED_BACKGROUND_COLORS: string[] = ["#8F99A8"];
const UNMARKED_TEXT_COLOR = "#FFFFFF";
const UNMARKED_CLASSIFICATION_STRING = "UNMARKED";

export const EMPTY_ARRAY: string[] = [];

export function backgroundFromColors(backgroundColors: string[]): string {
  return backgroundColors.length > 1
    ? `linear-gradient(to right, ${backgroundColors.join(", ")})`
    : (backgroundColors[0] ?? "transparent");
}

export interface ResolvedBannerDisplay {
  classificationString: string;
  textColor: string;
  backgroundColors: string[];
}

export function resolveBannerDisplay(
  banner: CbacBannerData | undefined,
): ResolvedBannerDisplay {
  return {
    classificationString:
      banner?.classificationString ?? UNMARKED_CLASSIFICATION_STRING,
    textColor: banner?.textColor ?? UNMARKED_TEXT_COLOR,
    backgroundColors: banner?.backgroundColors ?? UNMARKED_BACKGROUND_COLORS,
  };
}

export interface AppliedMarkingGroup {
  categoryName: string;
  markingNames: string[];
}

export function groupMarkingsByCategory(
  markingIds: string[],
  categories: ReadonlyArray<{ id: string; name: string }> | undefined,
  markings:
    | ReadonlyArray<{ id: string; name: string; categoryId: string }>
    | undefined,
): AppliedMarkingGroup[] {
  if (
    markingIds.length === 0 ||
    categories === undefined ||
    markings === undefined
  ) {
    return [];
  }

  const selected = new Set(markingIds);
  const categoryNames = new Map(categories.map((c) => [c.id, c.name]));
  const grouped = new Map<string, string[]>();

  for (const marking of markings) {
    if (selected.has(marking.id)) {
      const name = categoryNames.get(marking.categoryId) ?? marking.categoryId;
      const list = grouped.get(name);
      if (list !== undefined) {
        list.push(marking.name);
      } else {
        grouped.set(name, [marking.name]);
      }
    }
  }

  return Array.from(grouped, ([categoryName, markingNames]) => ({
    categoryName,
    markingNames,
  }));
}

export function resolveRequiredGroups(
  categoryGroups: CategoryMarkingGroup[],
  requiredMarkingGroups: string[][],
): RequiredMarkingGroup[] {
  const markingIdToName = new Map(
    categoryGroups
      .flatMap((g) => g.markings)
      .map((m) => [m.id, m.name] as const),
  );
  return requiredMarkingGroups.map((ids) => ({
    markingNames: ids.map((id) => markingIdToName.get(id) ?? id),
  }));
}
