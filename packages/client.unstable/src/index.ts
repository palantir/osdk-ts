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
export type { StructFieldType } from "./generated/ontology-metadata/api/StructFieldType.js";
export type { Type } from "./generated/ontology-metadata/api/Type.js";
export type { SharedPropertyTypeGothamMapping } from "./generated/ontology-metadata/api/typemapping/SharedPropertyTypeGothamMapping.js";

export { createTemporaryObjectSet } from "./generated/object-set-service/api/ObjectSetService.js";
export { getBulkLinksPage } from "./generated/object-set-service/api/ObjectSetServiceV2/getBulkLinksPage.js";
export { bulkLoadOntologyEntities } from "./generated/ontology-metadata/api/OntologyMetadataService/bulkLoadOntologyEntities.js";
export { getLinkTypesForObjectTypes } from "./generated/ontology-metadata/api/OntologyMetadataService/getLinkTypesForObjectTypes.js";
export { loadAllOntologies } from "./generated/ontology-metadata/api/OntologyMetadataService/loadAllOntologies.js";

export type { BaseType } from "./generated/type-registry/api/BaseType.js";
export type { DataConstraint } from "./generated/type-registry/api/DataConstraint.js";
export type { DataConstraintWrapper } from "./generated/type-registry/api/DataConstraintWrapper.js";
export type { ExampleValue } from "./generated/type-registry/api/ExampleValue.js";
export type { FailureMessage } from "./generated/type-registry/api/FailureMessage.js";
export type { ValueTypeApiName } from "./generated/type-registry/api/ValueTypeApiName.js";
export type { ValueTypeDataConstraint } from "./generated/type-registry/api/ValueTypeDataConstraint.js";
export type { ValueTypeDisplayMetadata } from "./generated/type-registry/api/ValueTypeDisplayMetadata.js";
export type { ValueTypeStatus } from "./generated/type-registry/api/ValueTypeStatus.js";
export type { ValueTypeVersion } from "./generated/type-registry/api/ValueTypeVersion.js";

export type { InterfaceTypeRid } from "./generated/ontology-metadata/api/InterfaceTypeRid.js";
export type {
  InterfaceTypeStatus,
  InterfaceTypeStatus_active,
  InterfaceTypeStatus_deprecated,
  InterfaceTypeStatus_experimental,
} from "./generated/ontology-metadata/api/InterfaceTypeStatus.js";

export type {
  ApiNameValueTypeReference,
  ImportedSharedPropertyTypes,
  ImportedTypes,
  OntologyIr,
  OntologyIrInterfaceType,
  OntologyIrInterfaceTypeBlockDataV2,
  OntologyIrOntologyBlockDataV2,
  OntologyIrPackagedValueType,
  OntologyIrPackagedValueTypeMetadata,
  OntologyIrSharedPropertyType,
  OntologyIrSharedPropertyTypeBlockDataV2,
  OntologyIrStructFieldType,
  OntologyIrType,
  OntologyIrValueTypeBlockData,
  OntologyIrValueTypeBlockDataEntry,
} from "./blockDataIr.js";
export type { OntologyIrLinkTypeBlockDataV2 } from "./generated/ontology-metadata/api/blockdata/OntologyIrLinkTypeBlockDataV2.js";
export type { OntologyIrObjectTypeBlockDataV2 } from "./generated/ontology-metadata/api/blockdata/OntologyIrObjectTypeBlockDataV2.js";
export type { ColumnName } from "./generated/ontology-metadata/api/ColumnName.js";
export type { InterfaceSharedPropertyType } from "./generated/ontology-metadata/api/InterfaceSharedPropertyType.js";
export type { LinkTypeDisplayMetadata } from "./generated/ontology-metadata/api/LinkTypeDisplayMetadata.js";
export type { ObjectTypeFieldApiName } from "./generated/ontology-metadata/api/ObjectTypeFieldApiName.js";
export type { OntologyIrInterfaceSharedPropertyType } from "./generated/ontology-metadata/api/OntologyIrInterfaceSharedPropertyType.js";
export type { OntologyIrLinkDefinition } from "./generated/ontology-metadata/api/OntologyIrLinkDefinition.js";
export type { OntologyIrLinkType } from "./generated/ontology-metadata/api/OntologyIrLinkType.js";
export type { OntologyIrLinkTypeStatus } from "./generated/ontology-metadata/api/OntologyIrLinkTypeStatus.js";
export type { OntologyIrManyToManyLinkDefinition } from "./generated/ontology-metadata/api/OntologyIrManyToManyLinkDefinition.js";
export type { OntologyIrManyToManyLinkTypeDatasource } from "./generated/ontology-metadata/api/OntologyIrManyToManyLinkTypeDatasource.js";
export type { OntologyIrObjectType } from "./generated/ontology-metadata/api/OntologyIrObjectType.js";
export type { OntologyIrObjectTypeDatasource } from "./generated/ontology-metadata/api/OntologyIrObjectTypeDatasource.js";
export type { OntologyIrObjectTypeDatasourceDefinition } from "./generated/ontology-metadata/api/OntologyIrObjectTypeDatasourceDefinition.js";
export type { OntologyIrObjectTypeInterfaceImplementation } from "./generated/ontology-metadata/api/OntologyIrObjectTypeInterfaceImplementation.js";
export type { OntologyIrOneToManyLinkDefinition } from "./generated/ontology-metadata/api/OntologyIrOneToManyLinkDefinition.js";
export type { OntologyIrPropertyType } from "./generated/ontology-metadata/api/OntologyIrPropertyType.js";
export type { PropertyTypeMappingInfo } from "./generated/ontology-metadata/api/PropertyTypeMappingInfo.js";
export type { RetentionPolicy } from "./generated/ontology-metadata/api/RetentionPolicy.js";
export type { Visibility } from "./generated/ontology-metadata/api/Visibility.js";
