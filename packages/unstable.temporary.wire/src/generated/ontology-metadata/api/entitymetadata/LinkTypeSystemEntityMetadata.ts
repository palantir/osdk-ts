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

import type { EntityMigrationStatus } from "./EntityMigrationStatus.js";
import type { SyncMetadata } from "./SyncMetadata.js";

/**
 * Metadata associated with LinkTypes which can only be modified by services.
 * Any metadata which is expected to be configured by users directly should instead
 * be added to the LinkTypeEntityMetadata object.
 *
 * LinkTypeSystemEntityMetadata will automatically be deleted when
 * the LinkType is deleted through an Ontology modification.
 */
export interface LinkTypeSystemEntityMetadata {
  syncMetadata: SyncMetadata;
  entityMigrationStatus: EntityMigrationStatus;
  redacted: boolean | undefined;
}
