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

import type { OntologyIrFormContent } from "@osdk/client.unstable";
import type { ActionType } from "@osdk/maker";

export function getFormContentOrdering(
  action: ActionType,
  parameterOrdering: string[],
): OntologyIrFormContent[] {
  if (!action.sections) return [];
  const parametersToSection = Object.fromEntries(
    Object.entries(action.sections).flatMap(([sectionId, section]) =>
      section.parameters.map(param => [param, sectionId])
    ),
  );
  const seenIds = new Set<string>();
  const formContentOrdering: OntologyIrFormContent[] = [];
  parameterOrdering.forEach(param => {
    if (
      param in parametersToSection
      && !(seenIds.has(parametersToSection[param]))
    ) {
      formContentOrdering.push({
        type: "sectionId",
        sectionId: parametersToSection[param],
      });
      seenIds.add(parametersToSection[param]);
    } else if (!(param in parametersToSection)) {
      formContentOrdering.push({
        type: "parameterId",
        parameterId: param,
      });
      seenIds.add(param);
    }
  });
  return formContentOrdering;
}
