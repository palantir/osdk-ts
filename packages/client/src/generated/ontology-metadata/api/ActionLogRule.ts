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

import type { ActionLogValue } from "./ActionLogValue.js";
import type { LinkTypeId } from "./LinkTypeId.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";

/**
 * Users can optionally configure an ActionLogicRule for their ActionType that defines how Action parameters and
 * their properties should be mapped to properties of their Action Log Object Type.
 */
export interface ActionLogRule {
  actionLogObjectTypeId: ObjectTypeId;
  propertyValues: Record<PropertyTypeId, ActionLogValue>;
  reasonCodes: Array<PropertyTypeId>;
  editedObjectRelations: Record<ObjectTypeId, LinkTypeId>;
  enabled: boolean;
}
