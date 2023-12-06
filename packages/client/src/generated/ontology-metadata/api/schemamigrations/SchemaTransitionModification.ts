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

import type { DeleteTransitionModification } from "./DeleteTransitionModification.js";
import type { NewVersionSchemaTransitionModification } from "./NewVersionSchemaTransitionModification.js";
import type { PastVersionSchemaTransitionModification } from "./PastVersionSchemaTransitionModification.js";
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
/**
 * Type to represent a schema transition modification. Either to delete or create a new SchemaTransition where
 * the target version is either the schema version that will be created as a result of the current modification,
 * or a past schema version.
 */
export type SchemaTransitionModification =
  | SchemaTransitionModification_newVersion
  | SchemaTransitionModification_pastVersion
  | SchemaTransitionModification_delete;
