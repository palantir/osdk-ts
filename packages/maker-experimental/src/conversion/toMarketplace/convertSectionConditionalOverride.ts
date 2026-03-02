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

import type { OntologyIrSectionConditionalOverride } from "@osdk/client.unstable";
import type { ActionParameter, SectionConditionalOverride } from "@osdk/maker";
import { convertConditionDefinition } from "./convertConditionDefinition.js";

export function convertSectionConditionalOverride(
  override: SectionConditionalOverride,
  defaultVisibility: "visible" | "hidden",
  actionParameters?: ActionParameter[],
): OntologyIrSectionConditionalOverride {
  return {
    condition: convertConditionDefinition(override.condition, actionParameters),
    sectionBlockOverrides: [
      {
        type: "visibility",
        visibility: {
          visibility: defaultVisibility === "visible"
            ? {
              type: "hidden",
              hidden: {},
            }
            : {
              type: "visible",
              visible: {},
            },
        },
      },
    ],
  };
}
