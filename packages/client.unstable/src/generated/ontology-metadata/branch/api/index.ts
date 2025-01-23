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

export * as OntologyBranchService from "./OntologyBranchService.js";

export type { BaseValueTypeUsageError } from "./BaseValueTypeUsageError.js";
export type { BranchIndexingConfig } from "./BranchIndexingConfig.js";
export type { BranchLock } from "./BranchLock.js";
export type { BranchMergeStatus } from "./BranchMergeStatus.js";
export type { BranchStatus } from "./BranchStatus.js";
export type { BranchType } from "./BranchType.js";
export type { BuilderServiceBranch } from "./BuilderServiceBranch.js";
export type { ClosedStatusV2 } from "./ClosedStatusV2.js";
export type { ColumnMissingFromBackingDatasourceForLinkTypeError } from "./ColumnMissingFromBackingDatasourceForLinkTypeError.js";
export type { ColumnMissingFromBackingDatasourceForObjectTypeError } from "./ColumnMissingFromBackingDatasourceForObjectTypeError.js";
export type { ConflictingEntitiesSummary } from "./ConflictingEntitiesSummary.js";
export type { ConflictingPropertyImplementationError } from "./ConflictingPropertyImplementationError.js";
export type { CreateOntologyBranchRequest } from "./CreateOntologyBranchRequest.js";
export type { CreateOntologyBranchResponse } from "./CreateOntologyBranchResponse.js";
export type { CreateOntologyServiceBranchRequest } from "./CreateOntologyServiceBranchRequest.js";
export type { CreateOntologyServiceBranchResponse } from "./CreateOntologyServiceBranchResponse.js";
export type { DatasourceModificationConstraintError } from "./DatasourceModificationConstraintError.js";
export type { DefaultOntologyBranchDetails } from "./DefaultOntologyBranchDetails.js";
export type { DerivedPropertyBaseTypeChangedWhenObjectTypeIsNotModifiedError } from "./DerivedPropertyBaseTypeChangedWhenObjectTypeIsNotModifiedError.js";
export type { DerivedPropertyDefinitionDoesNotMatchSharedPropertyTypeError } from "./DerivedPropertyDefinitionDoesNotMatchSharedPropertyTypeError.js";
export type { DerivedPropertyIncompatibleDefinitionAndForeignPropertyBaseTypeError } from "./DerivedPropertyIncompatibleDefinitionAndForeignPropertyBaseTypeError.js";
export type { DerivedPropertyLinkDefinitionCardinalityInvalidError } from "./DerivedPropertyLinkDefinitionCardinalityInvalidError.js";
export type { DerivedPropertyLinkDefinitionInvalidError } from "./DerivedPropertyLinkDefinitionInvalidError.js";
export type { DerivedPropertyTypeDependOnAnotherDerivedPropertyError } from "./DerivedPropertyTypeDependOnAnotherDerivedPropertyError.js";
export type { ErrorStatus } from "./ErrorStatus.js";
export type { FindConflictsRequest } from "./FindConflictsRequest.js";
export type { FindConflictsResponse } from "./FindConflictsResponse.js";
export type { ForeignKeyConstraintError } from "./ForeignKeyConstraintError.js";
export type { ForeignPropertyTypeInDerivedPropertyDefinitionNotFoundError } from "./ForeignPropertyTypeInDerivedPropertyDefinitionNotFoundError.js";
export type { FoundrySchemaConstraintError } from "./FoundrySchemaConstraintError.js";
export type { GeotimeSeriesDatasourceDoesNotReferenceExistingPropertiesError } from "./GeotimeSeriesDatasourceDoesNotReferenceExistingPropertiesError.js";
export type { GeotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferencePropertiesError } from "./GeotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferencePropertiesError.js";
export type { GeotimeSeriesReferencePropertyTypeConstraintError } from "./GeotimeSeriesReferencePropertyTypeConstraintError.js";
export type { GeotimeSeriesReferencePropertyTypeHasNoDatasourcesError } from "./GeotimeSeriesReferencePropertyTypeHasNoDatasourcesError.js";
export type { ImplicitAndExplicitPropertyImplementationError } from "./ImplicitAndExplicitPropertyImplementationError.js";
export type { IndexedBranchConfig } from "./IndexedBranchConfig.js";
export type { InterfaceImplementationError } from "./InterfaceImplementationError.js";
export type { InterfaceLinkNotFoundError } from "./InterfaceLinkNotFoundError.js";
export type { InterfaceLinkTypeImplementedTooOftenError } from "./InterfaceLinkTypeImplementedTooOftenError.js";
export type { InterfacePropertyNotFound } from "./InterfacePropertyNotFound.js";
export type { InvalidCardinalityImplementingInterfaceLinkTypeError } from "./InvalidCardinalityImplementingInterfaceLinkTypeError.js";
export type { InvalidConflictingDefinitionsImplementingInterfaceLinkTypeError } from "./InvalidConflictingDefinitionsImplementingInterfaceLinkTypeError.js";
export type { InvalidDataConstraintsError } from "./InvalidDataConstraintsError.js";
export type { InvalidDerivedForeignKeyError } from "./InvalidDerivedForeignKeyError.js";
export type { InvalidForeignKeyTypeError } from "./InvalidForeignKeyTypeError.js";
export type { InvalidIsIndexedForSearchError } from "./InvalidIsIndexedForSearchError.js";
export type { InvalidLinkedEntityImplementingInterfaceLinkTypeError } from "./InvalidLinkedEntityImplementingInterfaceLinkTypeError.js";
export type { InvalidPropertyImplementationError } from "./InvalidPropertyImplementationError.js";
export type { InvalidPropertyTypeError } from "./InvalidPropertyTypeError.js";
export type { InvalidTypeClassesError } from "./InvalidTypeClassesError.js";
export type { InvalidValueTypeError } from "./InvalidValueTypeError.js";
export type { LinkTypeInDerivedPropertyDefinitionNotFoundOrDeletedError } from "./LinkTypeInDerivedPropertyDefinitionNotFoundOrDeletedError.js";
export type { LinkTypePropertiesReferenceSameColumnError } from "./LinkTypePropertiesReferenceSameColumnError.js";
export type { LinkTypePropertyIncompatibleBackingColumnTypeError } from "./LinkTypePropertyIncompatibleBackingColumnTypeError.js";
export type { LinkTypeReferencesInvalidForeignKeyError } from "./LinkTypeReferencesInvalidForeignKeyError.js";
export type { LinkTypeReferencesInvalidPrimaryKeyError } from "./LinkTypeReferencesInvalidPrimaryKeyError.js";
export type { LinkTypesHaveMultipleDatasourcesError } from "./LinkTypesHaveMultipleDatasourcesError.js";
export type { LinkTypesHaveNoDatasourcesError } from "./LinkTypesHaveNoDatasourcesError.js";
export type { LoadOntologyBranchByVersionRequest } from "./LoadOntologyBranchByVersionRequest.js";
export type { LoadOntologyBranchByVersionResponse } from "./LoadOntologyBranchByVersionResponse.js";
export type { LoadOntologyBranchForProposalRequest } from "./LoadOntologyBranchForProposalRequest.js";
export type { LoadOntologyBranchForProposalResponse } from "./LoadOntologyBranchForProposalResponse.js";
export type { LoadOntologyBranchMarkingsRequest } from "./LoadOntologyBranchMarkingsRequest.js";
export type { LoadOntologyBranchMarkingsResponse } from "./LoadOntologyBranchMarkingsResponse.js";
export type { LoadOntologyBranchRequest } from "./LoadOntologyBranchRequest.js";
export type { LoadOntologyBranchResponse } from "./LoadOntologyBranchResponse.js";
export type { LocalAndSharedPropertyTypesConflictingApiNamesError } from "./LocalAndSharedPropertyTypesConflictingApiNamesError.js";
export type { ManyToManyLinkTypeDatasourcePrimaryKeyMismatchError } from "./ManyToManyLinkTypeDatasourcePrimaryKeyMismatchError.js";
export type { MarkingPropertiesMustBeBackedByDatasourceWithGranularPermissionsError } from "./MarkingPropertiesMustBeBackedByDatasourceWithGranularPermissionsError.js";
export type { MarkingPropertiesMustBeReferencedInGranularPolicyError } from "./MarkingPropertiesMustBeReferencedInGranularPolicyError.js";
export type { MarkingPropertiesMustHaveAssociatedMarkingConstraintsError } from "./MarkingPropertiesMustHaveAssociatedMarkingConstraintsError.js";
export type { MediaDatasourceDoesNotReferenceExistingPropertiesError } from "./MediaDatasourceDoesNotReferenceExistingPropertiesError.js";
export type { MediaDatasourceDoesNotReferenceMediaReferencePropertiesError } from "./MediaDatasourceDoesNotReferenceMediaReferencePropertiesError.js";
export type { MediaReferencePropertyTypeConstraintError } from "./MediaReferencePropertyTypeConstraintError.js";
export type { MediaReferencePropertyTypeHasNoDatasourcesError } from "./MediaReferencePropertyTypeHasNoDatasourcesError.js";
export type { MediaViewDatasourceDoesNotReferenceMediaReferencePropertiesError } from "./MediaViewDatasourceDoesNotReferenceMediaReferencePropertiesError.js";
export type { MergeableStatus } from "./MergeableStatus.js";
export type { MergedStatusV2 } from "./MergedStatusV2.js";
export type { MergeOntologyServiceBranchRequest } from "./MergeOntologyServiceBranchRequest.js";
export type { MergeOntologyServiceBranchResponse } from "./MergeOntologyServiceBranchResponse.js";
export type { MissingDatasourceMigrationError } from "./MissingDatasourceMigrationError.js";
export type { MissingDeletedPropertyTypeSchemaMigrationError } from "./MissingDeletedPropertyTypeSchemaMigrationError.js";
export type { MissingImplementingPropertyError } from "./MissingImplementingPropertyError.js";
export type { MissingPropertyDataTypeSchemaMigrationError } from "./MissingPropertyDataTypeSchemaMigrationError.js";
export type { MissingSharedPropertyError } from "./MissingSharedPropertyError.js";
export type { NonDefaultOntologyBranchDetails } from "./NonDefaultOntologyBranchDetails.js";
export type { NonIndexedBranchConfig } from "./NonIndexedBranchConfig.js";
export type { NotAllPropertyTypesAreMappedToDatasourceWithinObjectType } from "./NotAllPropertyTypesAreMappedToDatasourceWithinObjectType.js";
export type { NumberOfDatasourcesConstraintError } from "./NumberOfDatasourcesConstraintError.js";
export type { ObjectTypeDatasourceColumnMappingMismatchError } from "./ObjectTypeDatasourceColumnMappingMismatchError.js";
export type { ObjectTypeDatasourceWithoutPrimaryKeyColumnError } from "./ObjectTypeDatasourceWithoutPrimaryKeyColumnError.js";
export type { ObjectTypeImplementsTooManyInterfacesError } from "./ObjectTypeImplementsTooManyInterfacesError.js";
export type { ObjectTypePropertyIncompatibleBackingColumnTypeError } from "./ObjectTypePropertyIncompatibleBackingColumnTypeError.js";
export type { ObjectTypesHaveNoDatasourcesError } from "./ObjectTypesHaveNoDatasourcesError.js";
export type { ObjectTypesHaveTooManyDatasourcesError } from "./ObjectTypesHaveTooManyDatasourcesError.js";
export type { ObjectTypeWithUnmappedTitlePropertyError } from "./ObjectTypeWithUnmappedTitlePropertyError.js";
export type { OntologyBranch } from "./OntologyBranch.js";
export type { OntologyBranchAttribution } from "./OntologyBranchAttribution.js";
export type { OntologyBranchDescription } from "./OntologyBranchDescription.js";
export type { OntologyBranchDetails } from "./OntologyBranchDetails.js";
export type { OntologyBranchDisplayName } from "./OntologyBranchDisplayName.js";
export type { OntologyBranchEntityModificationData } from "./OntologyBranchEntityModificationData.js";
export type { OntologyBranchModificationData } from "./OntologyBranchModificationData.js";
export type { OntologyBranchSchemaMigrationModificationMetadata } from "./OntologyBranchSchemaMigrationModificationMetadata.js";
export type { OntologyErrors } from "./OntologyErrors.js";
export type { OntologyProposalV2 } from "./OntologyProposalV2.js";
export type { OpenStatusV2 } from "./OpenStatusV2.js";
export type { OwnerIdentifier } from "./OwnerIdentifier.js";
export type { OwnerIdentifierBuilder } from "./OwnerIdentifierBuilder.js";
export type { OwnerIdentifierNone } from "./OwnerIdentifierNone.js";
export type { PrimaryAndForeignKeyTypeMismatchError } from "./PrimaryAndForeignKeyTypeMismatchError.js";
export type { PrimaryKeyChangeMigrationError } from "./PrimaryKeyChangeMigrationError.js";
export type { PrimaryKeyIsDerivedError } from "./PrimaryKeyIsDerivedError.js";
export type { PropertyTypeValueTypeUsageError } from "./PropertyTypeValueTypeUsageError.js";
export type { ProposalStatusV2 } from "./ProposalStatusV2.js";
export type { ProposalTaskDetails } from "./ProposalTaskDetails.js";
export type { ProposalV2Attribution } from "./ProposalV2Attribution.js";
export type { RequiredInterfaceLinkTypeNotImplementedError } from "./RequiredInterfaceLinkTypeNotImplementedError.js";
export type { ResourceErrors } from "./ResourceErrors.js";
export type { SchemaForLinkTypeDatasourceNotFoundError } from "./SchemaForLinkTypeDatasourceNotFoundError.js";
export type { SchemaForObjectTypeDatasourceNotFoundError } from "./SchemaForObjectTypeDatasourceNotFoundError.js";
export type { SchemaMigrationError } from "./SchemaMigrationError.js";
export type { SetOntologyBranchLockRequest } from "./SetOntologyBranchLockRequest.js";
export type { SetOntologyBranchLockResponse } from "./SetOntologyBranchLockResponse.js";
export type { SetOntologyBranchOrganizationMarkingsRequest } from "./SetOntologyBranchOrganizationMarkingsRequest.js";
export type { SetOntologyBranchOrganizationMarkingsResponse } from "./SetOntologyBranchOrganizationMarkingsResponse.js";
export type { SharedPropertyTypeValueTypeUsageError } from "./SharedPropertyTypeValueTypeUsageError.js";
export type { StructColumnFieldMissingFromBackingDatasourceForObjectTypeError } from "./StructColumnFieldMissingFromBackingDatasourceForObjectTypeError.js";
export type { TaskDetailsV1 } from "./TaskDetailsV1.js";
export type { TaskDetailsV2 } from "./TaskDetailsV2.js";
export type { TimeDependentPropertyTypeConstraintError } from "./TimeDependentPropertyTypeConstraintError.js";
export type { TimeDependentPropertyTypeHasNoDatasourcesError } from "./TimeDependentPropertyTypeHasNoDatasourcesError.js";
export type { TimeSeriesDatasourceDoesNotReferenceExistingPropertiesError } from "./TimeSeriesDatasourceDoesNotReferenceExistingPropertiesError.js";
export type { TimeSeriesDatasourceDoesNotReferenceTimeDependentPropertiesError } from "./TimeSeriesDatasourceDoesNotReferenceTimeDependentPropertiesError.js";
export type { TitlePropertyTypeIsDerivedError } from "./TitlePropertyTypeIsDerivedError.js";
export type { ValidateOntologyBranchRequest } from "./ValidateOntologyBranchRequest.js";
export type { ValidateOntologyBranchResponse } from "./ValidateOntologyBranchResponse.js";
export type { ValidationError } from "./ValidationError.js";
export type { ValueTypeUsageError } from "./ValueTypeUsageError.js";
export type { ValueTypeUsageMismatchPropertyTypeError } from "./ValueTypeUsageMismatchPropertyTypeError.js";
export type { ValueTypeUsageMismatchScaleOrPrecisionError } from "./ValueTypeUsageMismatchScaleOrPrecisionError.js";
export type { ValueTypeUsageMismatchStructFieldError } from "./ValueTypeUsageMismatchStructFieldError.js";
export type { ValueTypeUsageMissingStructFieldError } from "./ValueTypeUsageMissingStructFieldError.js";
export type { VersionedBranchDetails } from "./VersionedBranchDetails.js";
export type { VersionedDefaultBranchDetails } from "./VersionedDefaultBranchDetails.js";
export type { VersionedNonDefaultBranchDetails } from "./VersionedNonDefaultBranchDetails.js";
