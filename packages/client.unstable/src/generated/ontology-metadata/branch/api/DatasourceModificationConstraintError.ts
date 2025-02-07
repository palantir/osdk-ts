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

import type { DerivedPropertyBaseTypeChangedWhenObjectTypeIsNotModifiedError } from "./DerivedPropertyBaseTypeChangedWhenObjectTypeIsNotModifiedError.js";
import type { DerivedPropertyDefinitionDoesNotMatchSharedPropertyTypeError } from "./DerivedPropertyDefinitionDoesNotMatchSharedPropertyTypeError.js";
import type { DerivedPropertyIncompatibleDefinitionAndForeignPropertyBaseTypeError } from "./DerivedPropertyIncompatibleDefinitionAndForeignPropertyBaseTypeError.js";
import type { DerivedPropertyLinkDefinitionCardinalityInvalidError } from "./DerivedPropertyLinkDefinitionCardinalityInvalidError.js";
import type { DerivedPropertyLinkDefinitionInvalidError } from "./DerivedPropertyLinkDefinitionInvalidError.js";
import type { DerivedPropertyTypeDependOnAnotherDerivedPropertyError } from "./DerivedPropertyTypeDependOnAnotherDerivedPropertyError.js";
import type { ForeignPropertyTypeInDerivedPropertyDefinitionNotFoundError } from "./ForeignPropertyTypeInDerivedPropertyDefinitionNotFoundError.js";
import type { GpsPolicyColumnsFromRestrictedViewsAreMappedError } from "./GpsPolicyColumnsFromRestrictedViewsAreMappedError.js";
import type { LinkTypeInDerivedPropertyDefinitionNotFoundOrDeletedError } from "./LinkTypeInDerivedPropertyDefinitionNotFoundOrDeletedError.js";
import type { ManyToManyLinkTypeDatasourcePrimaryKeyMismatchError } from "./ManyToManyLinkTypeDatasourcePrimaryKeyMismatchError.js";
import type { MarkingPropertiesMustBeBackedByDatasourceWithGranularPermissionsError } from "./MarkingPropertiesMustBeBackedByDatasourceWithGranularPermissionsError.js";
import type { MarkingPropertiesMustBeReferencedInGranularPolicyError } from "./MarkingPropertiesMustBeReferencedInGranularPolicyError.js";
import type { MarkingPropertiesMustHaveAssociatedMarkingConstraintsError } from "./MarkingPropertiesMustHaveAssociatedMarkingConstraintsError.js";
import type { NotAllPropertyTypesAreMappedToDatasourceWithinObjectType } from "./NotAllPropertyTypesAreMappedToDatasourceWithinObjectType.js";
import type { ObjectTypeDatasourceColumnMappingMismatchError } from "./ObjectTypeDatasourceColumnMappingMismatchError.js";
import type { ObjectTypeDatasourceWithoutPrimaryKeyColumnError } from "./ObjectTypeDatasourceWithoutPrimaryKeyColumnError.js";
import type { ObjectTypeWithUnmappedTitlePropertyError } from "./ObjectTypeWithUnmappedTitlePropertyError.js";
import type { PrimaryKeyIsDerivedError } from "./PrimaryKeyIsDerivedError.js";
import type { TitlePropertyTypeIsDerivedError } from "./TitlePropertyTypeIsDerivedError.js";
export interface DatasourceModificationConstraintError_objectTypeDatasourceWithoutPrimaryKeyColumn {
  type: "objectTypeDatasourceWithoutPrimaryKeyColumn";
  objectTypeDatasourceWithoutPrimaryKeyColumn:
    ObjectTypeDatasourceWithoutPrimaryKeyColumnError;
}

export interface DatasourceModificationConstraintError_objectTypeWithUnmappedTitleProperty {
  type: "objectTypeWithUnmappedTitleProperty";
  objectTypeWithUnmappedTitleProperty: ObjectTypeWithUnmappedTitlePropertyError;
}

export interface DatasourceModificationConstraintError_objectTypeDatasourceColumnMappingMismatch {
  type: "objectTypeDatasourceColumnMappingMismatch";
  objectTypeDatasourceColumnMappingMismatch:
    ObjectTypeDatasourceColumnMappingMismatchError;
}

export interface DatasourceModificationConstraintError_notAllPropertyTypesAreMappedToDatasourceWithinObjectType {
  type: "notAllPropertyTypesAreMappedToDatasourceWithinObjectType";
  notAllPropertyTypesAreMappedToDatasourceWithinObjectType:
    NotAllPropertyTypesAreMappedToDatasourceWithinObjectType;
}

export interface DatasourceModificationConstraintError_manyToManyLinkTypeDatasourcePrimaryKeyMismatch {
  type: "manyToManyLinkTypeDatasourcePrimaryKeyMismatch";
  manyToManyLinkTypeDatasourcePrimaryKeyMismatch:
    ManyToManyLinkTypeDatasourcePrimaryKeyMismatchError;
}

export interface DatasourceModificationConstraintError_primaryKeyIsDerived {
  type: "primaryKeyIsDerived";
  primaryKeyIsDerived: PrimaryKeyIsDerivedError;
}

export interface DatasourceModificationConstraintError_titlePropertyTypeIsDerived {
  type: "titlePropertyTypeIsDerived";
  titlePropertyTypeIsDerived: TitlePropertyTypeIsDerivedError;
}

export interface DatasourceModificationConstraintError_linkTypeInDerivedPropertyDefinitionNotFoundOrDeleted {
  type: "linkTypeInDerivedPropertyDefinitionNotFoundOrDeleted";
  linkTypeInDerivedPropertyDefinitionNotFoundOrDeleted:
    LinkTypeInDerivedPropertyDefinitionNotFoundOrDeletedError;
}

export interface DatasourceModificationConstraintError_foreignPropertyTypeInDerivedPropertyDefinitionNotFound {
  type: "foreignPropertyTypeInDerivedPropertyDefinitionNotFound";
  foreignPropertyTypeInDerivedPropertyDefinitionNotFound:
    ForeignPropertyTypeInDerivedPropertyDefinitionNotFoundError;
}

export interface DatasourceModificationConstraintError_derivedPropertyTypeDependOnAnotherDerivedProperty {
  type: "derivedPropertyTypeDependOnAnotherDerivedProperty";
  derivedPropertyTypeDependOnAnotherDerivedProperty:
    DerivedPropertyTypeDependOnAnotherDerivedPropertyError;
}

export interface DatasourceModificationConstraintError_markingPropertiesMustBeBackedByDatasourceWithGranularPermissions {
  type: "markingPropertiesMustBeBackedByDatasourceWithGranularPermissions";
  markingPropertiesMustBeBackedByDatasourceWithGranularPermissions:
    MarkingPropertiesMustBeBackedByDatasourceWithGranularPermissionsError;
}

export interface DatasourceModificationConstraintError_markingPropertiesMustBeReferencedInGranularPolicy {
  type: "markingPropertiesMustBeReferencedInGranularPolicy";
  markingPropertiesMustBeReferencedInGranularPolicy:
    MarkingPropertiesMustBeReferencedInGranularPolicyError;
}

export interface DatasourceModificationConstraintError_markingPropertiesMustHaveAssociatedMarkingConstraints {
  type: "markingPropertiesMustHaveAssociatedMarkingConstraints";
  markingPropertiesMustHaveAssociatedMarkingConstraints:
    MarkingPropertiesMustHaveAssociatedMarkingConstraintsError;
}

export interface DatasourceModificationConstraintError_derivedPropertyBaseTypeChangedWhenObjectTypeIsNotModified {
  type: "derivedPropertyBaseTypeChangedWhenObjectTypeIsNotModified";
  derivedPropertyBaseTypeChangedWhenObjectTypeIsNotModified:
    DerivedPropertyBaseTypeChangedWhenObjectTypeIsNotModifiedError;
}

export interface DatasourceModificationConstraintError_derivedPropertyDefinitionDoesNotMatchSharedPropertyType {
  type: "derivedPropertyDefinitionDoesNotMatchSharedPropertyType";
  derivedPropertyDefinitionDoesNotMatchSharedPropertyType:
    DerivedPropertyDefinitionDoesNotMatchSharedPropertyTypeError;
}

export interface DatasourceModificationConstraintError_derivedPropertyLinkDefinitionInvalid {
  type: "derivedPropertyLinkDefinitionInvalid";
  derivedPropertyLinkDefinitionInvalid:
    DerivedPropertyLinkDefinitionInvalidError;
}

export interface DatasourceModificationConstraintError_derivedPropertyLinkDefinitionCardinalityInvalid {
  type: "derivedPropertyLinkDefinitionCardinalityInvalid";
  derivedPropertyLinkDefinitionCardinalityInvalid:
    DerivedPropertyLinkDefinitionCardinalityInvalidError;
}

export interface DatasourceModificationConstraintError_derivedPropertyIncompatibleDefinitionAndForeignPropertyBaseType {
  type: "derivedPropertyIncompatibleDefinitionAndForeignPropertyBaseType";
  derivedPropertyIncompatibleDefinitionAndForeignPropertyBaseType:
    DerivedPropertyIncompatibleDefinitionAndForeignPropertyBaseTypeError;
}

export interface DatasourceModificationConstraintError_gpsPolicyColumnsFromRestrictedViewsAreMapped {
  type: "gpsPolicyColumnsFromRestrictedViewsAreMapped";
  gpsPolicyColumnsFromRestrictedViewsAreMapped:
    GpsPolicyColumnsFromRestrictedViewsAreMappedError;
}
/**
 * A type representing validation errors associated with datasource modifications on a branch.
 */
export type DatasourceModificationConstraintError =
  | DatasourceModificationConstraintError_objectTypeDatasourceWithoutPrimaryKeyColumn
  | DatasourceModificationConstraintError_objectTypeWithUnmappedTitleProperty
  | DatasourceModificationConstraintError_objectTypeDatasourceColumnMappingMismatch
  | DatasourceModificationConstraintError_notAllPropertyTypesAreMappedToDatasourceWithinObjectType
  | DatasourceModificationConstraintError_manyToManyLinkTypeDatasourcePrimaryKeyMismatch
  | DatasourceModificationConstraintError_primaryKeyIsDerived
  | DatasourceModificationConstraintError_titlePropertyTypeIsDerived
  | DatasourceModificationConstraintError_linkTypeInDerivedPropertyDefinitionNotFoundOrDeleted
  | DatasourceModificationConstraintError_foreignPropertyTypeInDerivedPropertyDefinitionNotFound
  | DatasourceModificationConstraintError_derivedPropertyTypeDependOnAnotherDerivedProperty
  | DatasourceModificationConstraintError_markingPropertiesMustBeBackedByDatasourceWithGranularPermissions
  | DatasourceModificationConstraintError_markingPropertiesMustBeReferencedInGranularPolicy
  | DatasourceModificationConstraintError_markingPropertiesMustHaveAssociatedMarkingConstraints
  | DatasourceModificationConstraintError_derivedPropertyBaseTypeChangedWhenObjectTypeIsNotModified
  | DatasourceModificationConstraintError_derivedPropertyDefinitionDoesNotMatchSharedPropertyType
  | DatasourceModificationConstraintError_derivedPropertyLinkDefinitionInvalid
  | DatasourceModificationConstraintError_derivedPropertyLinkDefinitionCardinalityInvalid
  | DatasourceModificationConstraintError_derivedPropertyIncompatibleDefinitionAndForeignPropertyBaseType
  | DatasourceModificationConstraintError_gpsPolicyColumnsFromRestrictedViewsAreMapped;
