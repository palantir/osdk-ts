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

import type { RequiredMarkingGroup } from "../types.js";

export interface ValidationContext {
  isValid: boolean;
  requiredMarkingGroups: ReadonlyArray<RequiredMarkingGroup>;
  selectedIds: string[];
  disallowedMarkingIds: readonly string[];
  userSatisfiesMarkings: boolean;
}

export function getSubmitDisabledReason(
  ctx: ValidationContext,
): string | undefined {
  if (ctx.isValid) {
    return undefined;
  }
  if (ctx.requiredMarkingGroups.length > 0) {
    return "Selected markings do not include all required markings.";
  }
  const selectedSet = new Set(ctx.selectedIds);
  const hasDisallowedSelected = ctx.disallowedMarkingIds.some(
    (id) => selectedSet.has(id),
  );
  if (hasDisallowedSelected) {
    return "Selections include disallowed markings.";
  }
  if (!ctx.userSatisfiesMarkings) {
    return "Invalid configuration of markings. Please ensure that you have permission to use all selected markings.";
  }
  return "Invalid marking selection.";
}
