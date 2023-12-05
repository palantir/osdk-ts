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

import type { DeleteTransitionModification } from "./DeleteTransitionModification.mjs";
import type { NewVersionSchemaTransitionModification } from "./NewVersionSchemaTransitionModification.mjs";
import type { PastVersionSchemaTransitionModification } from "./PastVersionSchemaTransitionModification.mjs";
export interface SchemaTransitionModification_newVersion {
  type: "newVersion";
  newVersion: NewVersionSchemaTransitionModification;
}

export interface SchemaTransitionModification_pastVersion {
  type: "pastVersion";
  pastVersion: PastVersionSchemaTransitionModification;
}

export interface SchemaTransitionModification_delete {
  type: "delete";
  delete: DeleteTransitionModification;
}

export type SchemaTransitionModification =
  | SchemaTransitionModification_newVersion
  | SchemaTransitionModification_pastVersion
  | SchemaTransitionModification_delete;
