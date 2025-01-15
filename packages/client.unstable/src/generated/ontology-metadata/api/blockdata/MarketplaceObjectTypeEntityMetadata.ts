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

import type { ActionLogRequirednessMetadata } from "../entitymetadata/ActionLogRequirednessMetadata.js";
import type { EditsHistory } from "../entitymetadata/EditsHistory.js";
import type { EditsResolutionStrategies } from "../entitymetadata/EditsResolutionStrategies.js";
import type { EntityConfig } from "../entitymetadata/EntityConfig.js";
import type { ObjectTypeAlias } from "../entitymetadata/ObjectTypeAlias.js";
import type { EntityProvenance } from "../entitymetadata/provenance/EntityProvenance.js";
import type { StorageBackend } from "../entitymetadata/StorageBackend.js";
import type { ObjectTypeGothamMapping } from "../typemapping/ObjectTypeGothamMapping.js";

/**
 * Local overridden alias of OMS public API representation of ObjectTypeEntityMetadata. In OMS API we model
 * editsResolutionStrategies field as non-optional, but Marketplace ontology block data uploaded to
 * artifacts faces similar constraints as our internal StorageObjectTypeEntityMetadata and we need to provide
 * runtime conversion with default value.
 */
export interface MarketplaceObjectTypeEntityMetadata {
  entityConfig: EntityConfig;
  arePatchesEnabled: boolean;
  targetStorageBackend: StorageBackend;
  redacted: boolean | undefined;
  actionLogRequirednessMetadata: ActionLogRequirednessMetadata | undefined;
  diffEdits: boolean;
  gothamMapping: ObjectTypeGothamMapping | undefined;
  provenance: EntityProvenance | undefined;
  editsResolutionStrategies: EditsResolutionStrategies | undefined;
  aliases: Array<ObjectTypeAlias>;
  editsHistory: EditsHistory | undefined;
}
