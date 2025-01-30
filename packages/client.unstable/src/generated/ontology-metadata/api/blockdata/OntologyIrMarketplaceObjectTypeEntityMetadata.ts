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
import type { EntityConfig } from "../entitymetadata/EntityConfig.js";
import type { ObjectTypeAlias } from "../entitymetadata/ObjectTypeAlias.js";
import type { OntologyIrEditsHistory } from "../entitymetadata/OntologyIrEditsHistory.js";
import type { OntologyIrEditsResolutionStrategies } from "../entitymetadata/OntologyIrEditsResolutionStrategies.js";
import type { OntologyIrEntityProvenance } from "../entitymetadata/provenance/OntologyIrEntityProvenance.js";
import type { StorageBackend } from "../entitymetadata/StorageBackend.js";
import type { OntologyIrObjectTypeGothamMapping } from "../typemapping/OntologyIrObjectTypeGothamMapping.js";

/**
 * Local overridden alias of OMS public API representation of ObjectTypeEntityMetadata. In OMS API we model
 * editsResolutionStrategies field as non-optional, but Marketplace ontology block data uploaded to
 * artifacts faces similar constraints as our internal StorageObjectTypeEntityMetadata and we need to provide
 * runtime conversion with default value.
 */
export interface OntologyIrMarketplaceObjectTypeEntityMetadata {
  entityConfig: EntityConfig;
  arePatchesEnabled: boolean;
  targetStorageBackend: StorageBackend;
  redacted: boolean | undefined;
  actionLogRequirednessMetadata: ActionLogRequirednessMetadata | undefined;
  diffEdits: boolean;
  gothamMapping: OntologyIrObjectTypeGothamMapping | undefined;
  provenance: OntologyIrEntityProvenance | undefined;
  editsResolutionStrategies: OntologyIrEditsResolutionStrategies | undefined;
  aliases: Array<ObjectTypeAlias>;
  editsHistory: OntologyIrEditsHistory | undefined;
}
