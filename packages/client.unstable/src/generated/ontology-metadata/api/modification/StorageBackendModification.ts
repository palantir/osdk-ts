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

import type { ObjectStorageV1Modification } from "./ObjectStorageV1Modification.js";
import type { ObjectStorageV2Modification } from "./ObjectStorageV2Modification.js";
import type { ReadOnlyV1V2Modification } from "./ReadOnlyV1V2Modification.js";
export interface StorageBackendModification_objectStorageV1 {
  type: "objectStorageV1";
  objectStorageV1: ObjectStorageV1Modification;
}

export interface StorageBackendModification_readOnlyV1V2 {
  type: "readOnlyV1V2";
  readOnlyV1V2: ReadOnlyV1V2Modification;
}

export interface StorageBackendModification_objectStorageV2 {
  type: "objectStorageV2";
  objectStorageV2: ObjectStorageV2Modification;
}
/**
 * Indicates which Objects Storage should be used for storing this entity.
 */
export type StorageBackendModification =
  | StorageBackendModification_objectStorageV1
  | StorageBackendModification_readOnlyV1V2
  | StorageBackendModification_objectStorageV2;
