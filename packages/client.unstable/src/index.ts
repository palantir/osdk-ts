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

export type { DirectedLinkTypeRid } from "./generated/object-set-service/api/DirectedLinkTypeRid.js";
export type { FoundryObjectReference } from "./generated/object-set-service/api/FoundryObjectReference.js";
export type { GetBulkLinksPageRequest } from "./generated/object-set-service/api/GetBulkLinksPageRequest.js";
export type { ObjectIdentifier } from "./generated/object-set-service/api/ObjectIdentifier.js";
export type {
  ObjectSet,
} from "./generated/object-set-service/api/ObjectSet.js";
export type {
  ObjectSetFilter,
} from "./generated/object-set-service/api/ObjectSetFilter.js";
export type { LinkTypeMetadata } from "./generated/ontology-metadata/api/LinkTypeMetadata.js";
export type { LoadAllOntologiesResponse } from "./generated/ontology-metadata/api/LoadAllOntologiesResponse.js";
export type { ObjectType } from "./generated/ontology-metadata/api/ObjectType.js";
export type { Type } from "./generated/ontology-metadata/api/Type.js";

export { createTemporaryObjectSet } from "./generated/object-set-service/api/ObjectSetService.js";
export { getBulkLinksPage } from "./generated/object-set-service/api/ObjectSetServiceV2/getBulkLinksPage.js";
export { bulkLoadOntologyEntities } from "./generated/ontology-metadata/api/OntologyMetadataService/bulkLoadOntologyEntities.js";
export { getLinkTypesForObjectTypes } from "./generated/ontology-metadata/api/OntologyMetadataService/getLinkTypesForObjectTypes.js";
export { loadAllOntologies } from "./generated/ontology-metadata/api/OntologyMetadataService/loadAllOntologies.js";

export type {
  OntologyIrInterfaceType,
  OntologyIrInterfaceTypeBlockDataV2,
  OntologyIrOntologyBlockDataV2,
  OntologyIrSharedPropertyType,
  OntologyIrSharedPropertyTypeBlockDataV2,
} from "./blockDataIr.js";
