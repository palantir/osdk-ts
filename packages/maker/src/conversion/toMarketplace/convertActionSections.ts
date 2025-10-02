/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { OntologyIrSection, SectionId } from "@osdk/client.unstable";
import type { ActionType } from "../../api/action/ActionType.js";
import { uppercaseFirstLetter } from "../../api/defineObject.js";

export function convertActionSections(
  action: ActionType,
): Record<SectionId, OntologyIrSection> {
  return Object.fromEntries(
    Object.entries(action.sections ?? {}).map((
      [sectionId, section],
    ) => [sectionId, {
      id: sectionId,
      content: section.parameters.map(p => ({
        type: "parameterId",
        parameterId: p,
      })),
      displayMetadata: {
        collapsedByDefault: section.collapsedByDefault ?? false,
        columnCount: section.columnCount ?? 1,
        description: section.description ?? "",
        displayName: section.displayName ?? uppercaseFirstLetter(sectionId),
        showTitleBar: section.showTitleBar ?? true,
        ...section.style
          && {
            style: section.style === "box"
              ? { type: "box", box: {} }
              : { type: "minimal", minimal: {} },
          },
      },
    }]),
  );
}
