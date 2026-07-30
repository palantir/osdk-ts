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
  SortAlphabetical,
  SortAlphabeticalDesc,
  SortAsc,
  SortDesc,
  SortNumerical,
  SortNumericalDesc,
} from "@blueprintjs/icons";
import type React from "react";

/**
 * Blueprint icon components are rendered with only these props by the table
 * header, so this is narrower than Blueprint's full `IconProps`.
 */
export type SortIconComponent = React.ComponentType<{
  className?: string;
  color?: string;
}>;

export interface SortIcons {
  /** Icon for ascending order (A→Z, 1→9, oldest→newest). */
  asc: SortIconComponent;
  /** Icon for descending order (Z→A, 9→1, newest→oldest). */
  desc: SortIconComponent;
}

/** `WirePropertyTypes` values whose values order alphabetically. */
const ALPHABETICAL_TYPES: ReadonlySet<string> = new Set([
  "string",
  "cipherText",
  "marking",
]);

/** `WirePropertyTypes` values whose values order numerically. */
const NUMERICAL_TYPES: ReadonlySet<string> = new Set([
  "byte",
  "decimal",
  "double",
  "float",
  "integer",
  "long",
  "short",
]);

const ALPHABETICAL_SORT_ICONS: SortIcons = {
  asc: SortAlphabetical,
  desc: SortAlphabeticalDesc,
};

const NUMERICAL_SORT_ICONS: SortIcons = {
  asc: SortNumerical,
  desc: SortNumericalDesc,
};

/**
 * Direction-only icons, used for chronological (date/timestamp) ordering and
 * as the fallback for booleans and any type without a more specific icon.
 * Blueprint has no chronological sort glyph, so dates share this pair.
 */
const DIRECTIONAL_SORT_ICONS: SortIcons = {
  asc: SortAsc,
  desc: SortDesc,
};

/**
 * Picks the sort icons that match a column's underlying property type, so the
 * header indicator reads as A→Z for text, 1→9 for numbers, and a plain
 * ascending/descending arrow for dates and everything else.
 *
 * @param dataType The column's `meta.dataType`, i.e. an OSDK
 * `WirePropertyTypes` value. Absent for columns whose type isn't known (e.g.
 * function-backed columns), which fall back to the directional icons.
 */
export function getSortIcons(dataType: string | undefined): SortIcons {
  // The null check only narrows for the `Set<string>.has` calls; an unknown
  // type takes the same directional fallback as any unrecognized one.
  if (dataType != null) {
    if (ALPHABETICAL_TYPES.has(dataType)) {
      return ALPHABETICAL_SORT_ICONS;
    }
    if (NUMERICAL_TYPES.has(dataType)) {
      return NUMERICAL_SORT_ICONS;
    }
  }
  return DIRECTIONAL_SORT_ICONS;
}
