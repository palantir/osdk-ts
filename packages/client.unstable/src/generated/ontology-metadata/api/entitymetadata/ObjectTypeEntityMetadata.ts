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

import type { ObjectTypeGothamMapping } from "../typemapping/ObjectTypeGothamMapping.js";
import type { ActionLogRequirednessMetadata } from "./ActionLogRequirednessMetadata.js";
import type { EditsHistory } from "./EditsHistory.js";
import type { EditsResolutionStrategies } from "./EditsResolutionStrategies.js";
import type { EntityConfig } from "./EntityConfig.js";
import type { ObjectTypeAlias } from "./ObjectTypeAlias.js";
import type { ObjectTypeIndexingSettings } from "./ObjectTypeIndexingSettings.js";
import type { EntityProvenance } from "./provenance/EntityProvenance.js";
import type { StorageBackend } from "./StorageBackend.js";

/**
 * Contains additional metadata associated with an ObjectType.
 */
export interface ObjectTypeEntityMetadata {
  entityConfig: EntityConfig;
  arePatchesEnabled: boolean;
  targetStorageBackend: StorageBackend;
  redacted: boolean | undefined;
  actionLogRequirednessMetadata: ActionLogRequirednessMetadata | undefined;
  diffEdits: boolean;
  gothamMapping: ObjectTypeGothamMapping | undefined;
  provenance: EntityProvenance | undefined;
  editsResolutionStrategies: EditsResolutionStrategies;
  aliases: Array<ObjectTypeAlias>;
  editsHistory: EditsHistory;
  objectTypeIndexingSettings: ObjectTypeIndexingSettings | undefined;
}
