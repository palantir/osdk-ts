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

import type { ObjectTypeCreate } from "./ObjectTypeCreate.js";
import type { ObjectTypeDelete } from "./ObjectTypeDelete.js";
import type { ObjectTypeUpdate } from "./ObjectTypeUpdate.js";
export interface ObjectTypeModifyRequest_create {
  type: "create";
  create: ObjectTypeCreate;
}

export interface ObjectTypeModifyRequest_update {
  type: "update";
  update: ObjectTypeUpdate;
}

export interface ObjectTypeModifyRequest_delete {
  type: "delete";
  delete: ObjectTypeDelete;
}
export type ObjectTypeModifyRequest =
  | ObjectTypeModifyRequest_create
  | ObjectTypeModifyRequest_update
  | ObjectTypeModifyRequest_delete;
