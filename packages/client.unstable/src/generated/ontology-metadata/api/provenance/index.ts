/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

export * as ExperimentalOntologyProvenanceService from "./ExperimentalOntologyProvenanceService.js";

export type {
  AllPropertiesPropertySet,
  BatchGetTaggedDependentsForOntologyEntityIdentifierRequest,
  BatchGetTaggedDependentsForOntologyEntityIdentifierResponse,
  DependencyIdentifierAndTag,
  Dependent,
  GetDependenciesForTaggedDependentRequest,
  GetDependenciesForTaggedDependentRequestV2,
  GetDependenciesForTaggedDependentResponse,
  GetDependenciesForTaggedDependentResponseV2,
  GetDependenciesForTaggedDependentResponseV2Success,
  GetDependenciesForTaggedDependentResponseV2TagNotFound,
  GetDependenciesPagingToken,
  GetDependenciesV2PagingToken,
  GetEventOffsetForFirstNonProxiedFdsEventRequest,
  GetEventOffsetForFirstNonProxiedFdsEventResponse,
  GetTaggedDependentsForOntologyEntityIdentifierPagingToken,
  GetTaggedDependentsForOntologyEntityIdentifierRequest,
  GetTaggedDependentsForOntologyEntityIdentifierResponse,
  GetTaggedDependentsForOntologyEntityRequest,
  GetTaggedDependentsForOntologyEntityResponse,
  GetTaggedDependentsPagingToken,
  ObjectTypeIdWithPropertyTypeIds,
  ObjectTypeRidWithPropertyTypeRids,
  ObjectTypeWithProperties,
  OmsOpsDependentType,
  OntologyEntityId,
  PropertyTypeIdSet,
  PropertyTypeIdWithObjectTypeId,
  PropertyTypeRidSet,
  PropertyTypeRidWithObjectTypeRid,
  ProvenanceDependentOntologyEntities,
  ProvenanceOntologyEntityIdentifier,
  ProvenanceOntologyEntityRidOrReference,
  ProvenanceOntologyEntityRidType,
  RegisterDependencyRequest,
  RegisterDependencyResponse,
  Tag,
  TagDependentRequest,
  TagDependentResponse,
  TaggedDependencyAndDependent,
  Version,
  VersionedResource,
} from "./__components.js";
