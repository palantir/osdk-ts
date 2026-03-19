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
import {
  UNMARKED_BACKGROUND_COLORS,
  UNMARKED_CLASSIFICATION_STRING,
  UNMARKED_TEXT_COLOR,
} from "../unmarkedDefaults.js";

export const EMPTY_ARRAY: string[] = [];

export function backgroundFromColors(backgroundColors: string[]): string {
  return backgroundColors.length > 1
    ? `linear-gradient(to right, ${backgroundColors.join(", ")})`
    : backgroundColors[0] ?? "transparent";
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
    classificationString: banner?.classificationString
      ?? UNMARKED_CLASSIFICATION_STRING,
    textColor: banner?.textColor ?? UNMARKED_TEXT_COLOR,
    backgroundColors: banner?.backgroundColors ?? UNMARKED_BACKGROUND_COLORS,
  };
}

export function resolveRequiredGroups(
  categoryGroups: CategoryMarkingGroup[],
  requiredMarkingGroups: string[][],
): RequiredMarkingGroup[] {
  const markingIdToName = new Map<string, string>();
  for (const group of categoryGroups) {
    for (const marking of group.markings) {
      markingIdToName.set(marking.id, marking.name);
    }
  }
  return requiredMarkingGroups.map((ids) => ({
    markingNames: ids.map((id) => markingIdToName.get(id) ?? id),
  }));
}
