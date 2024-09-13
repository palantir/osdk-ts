/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionTypeV2 } from "@osdk/internal.foundry.core";

export type ModifiedEntityTypes = {
  addedObjects: Set<string>;
  modifiedObjects: Set<string>;
};

export function getModifiedEntityTypes(
  action: ActionTypeV2,
): ModifiedEntityTypes {
  const addedObjects = new Set<string>();
  const modifiedObjects = new Set<string>();
  for (const operation of action.operations) {
    switch (operation.type) {
      case "createObject":
        addedObjects.add(operation.objectTypeApiName);
        break;
      case "modifyObject":
        modifiedObjects.add(operation.objectTypeApiName);
        break;
      case "deleteObject":
      case "createLink":
      case "deleteLink":
      case "createInterfaceObject":
      case "modifyInterfaceObject":
        break;
      default:
        const _: never = operation;
    }
  }
  return { addedObjects, modifiedObjects };
}
