/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
export interface DataEntities_objectTypeRids {
  type: "objectTypeRids";
  objectTypeRids: Array<ObjectTypeRid>;
}

export interface DataEntities_actionTypeRids {
  type: "actionTypeRids";
  actionTypeRids: Array<ActionTypeRid>;
}

export interface DataEntities_functionRids {
  type: "functionRids";
  functionRids: Array<FunctionRid>;
}
/**
 * A union to represent a set of homogeneous entities, each referenced by their rid.
 */
export type DataEntities =
  | DataEntities_objectTypeRids
  | DataEntities_actionTypeRids
  | DataEntities_functionRids;
