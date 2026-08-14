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

import type { ActionType } from "./action/ActionType.js";
import { cloneDefinition } from "./cloneDefinition.js";
import type { InterfaceActionTypeUserDefinition } from "./defineAction.js";
import {
  defineAction,
  DELETE_OBJECT_PARAMETER,
  kebab,
} from "./defineAction.js";

export function defineDeleteInterfaceObjectAction(
  defInput: InterfaceActionTypeUserDefinition,
): ActionType {
  const def = cloneDefinition(defInput);
  return defineAction({
    apiName:
      def.apiName ??
      `delete-interface-object-${kebab(
        def.interfaceType.apiName.split(".").pop() ?? def.interfaceType.apiName,
      )}`,
    displayName:
      def.displayName ??
      `Delete ${def.interfaceType.displayMetadata.displayName}`,
    description: def.description,
    parameters: [
      {
        id: DELETE_OBJECT_PARAMETER,
        displayName:
          def.parameterConfiguration?.[DELETE_OBJECT_PARAMETER]?.displayName ??
          "Delete object",
        description:
          def.parameterConfiguration?.[DELETE_OBJECT_PARAMETER]?.description,
        type: {
          type: "interfaceReference",
          interfaceReference: { interfaceTypeRid: def.interfaceType.apiName },
        },
        validation: {
          required: true,
          allowedValues: { type: "interfaceObjectQuery" },
        },
      },
    ],
    status: def.status ?? "active",
    rules: [
      {
        type: "deleteObjectRule",
        deleteObjectRule: {
          objectToDelete: DELETE_OBJECT_PARAMETER,
        },
      },
    ],
    entities: {
      affectedInterfaceTypes: [def.interfaceType.apiName],
      affectedObjectTypes: [],
      affectedLinkTypes: [],
      typeGroups: [],
    },
    ...(def.permission && { permission: def.permission }),
    ...(def.icon && { icon: def.icon }),
  });
}
