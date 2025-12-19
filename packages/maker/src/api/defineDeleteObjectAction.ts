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

import { type ActionType } from "./action/ActionType.js";
import type { ActionTypeUserDefinition } from "./defineAction.js";
import {
  convertValidationRule,
  createParameters,
  defineAction,
  kebab,
} from "./defineAction.js";

export function defineDeleteObjectAction(
  def: ActionTypeUserDefinition,
): ActionType {
  const parameters = createParameters(
    def,
    {},
    new Set(["objectToDeleteParameter"]),
  );
  return defineAction({
    apiName: def.apiName
      ?? `delete-object-${
        kebab(def.objectType.apiName.split(".").pop() ?? def.objectType.apiName)
      }`,
    displayName: def.displayName ?? `Delete ${def.objectType.displayName}`,
    parameters: createParameters(def, {}, new Set(["objectToDeleteParameter"])),
    status: def.status ?? "active",
    rules: [{
      type: "deleteObjectRule",
      deleteObjectRule: {
        objectToDelete: "objectToDeleteParameter",
      },
    }],
    entities: {
      affectedInterfaceTypes: [],
      affectedObjectTypes: [def.objectType.apiName],
      affectedLinkTypes: [],
      typeGroups: [],
    },
    ...(def.actionLevelValidation
      ? {
        validation: convertValidationRule(
          def.actionLevelValidation,
        ),
      }
      : {}),
    ...(def.icon && { icon: def.icon }),
  });
}
