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

import type { ObjectTypeDatasourceCreate } from "./ObjectTypeDatasourceCreate.js";
import type { ObjectTypeDatasourceDelete } from "./ObjectTypeDatasourceDelete.js";
import type { ObjectTypeDatasourceUpdate } from "./ObjectTypeDatasourceUpdate.js";
export interface ObjectTypeDatasourceModifyRequest_create {
  type: "create";
  create: ObjectTypeDatasourceCreate;
}

export interface ObjectTypeDatasourceModifyRequest_update {
  type: "update";
  update: ObjectTypeDatasourceUpdate;
}

export interface ObjectTypeDatasourceModifyRequest_delete {
  type: "delete";
  delete: ObjectTypeDatasourceDelete;
}
export type ObjectTypeDatasourceModifyRequest =
  | ObjectTypeDatasourceModifyRequest_create
  | ObjectTypeDatasourceModifyRequest_update
  | ObjectTypeDatasourceModifyRequest_delete;
