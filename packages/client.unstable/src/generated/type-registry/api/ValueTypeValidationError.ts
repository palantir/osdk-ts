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

import type { InvalidStatusTransitionError } from "./InvalidStatusTransitionError.js";
import type { InvalidDisplayNameError } from "./InvalidDisplayNameError.js";
import type { InvalidDescriptionError } from "./InvalidDescriptionError.js";
import type { InvalidApiNameError } from "./InvalidApiNameError.js";
import type { ConflictingApiNameError } from "./ConflictingApiNameError.js";
import type { DeprecationInvalidDeadlineError } from "./DeprecationInvalidDeadlineError.js";
import type { DeprecationInvalidMessageError } from "./DeprecationInvalidMessageError.js";
import type { DeprecationReplacementMismatchedBaseTypeError } from "./DeprecationReplacementMismatchedBaseTypeError.js";
import type { DeprecationReplacementNotFoundError } from "./DeprecationReplacementNotFoundError.js";
import type { DeprecationReplacementAlreadyDeprecatedError } from "./DeprecationReplacementAlreadyDeprecatedError.js";
import type { DeprecationReplacementPermissionDeniedError } from "./DeprecationReplacementPermissionDeniedError.js";
import type { NestedTypeMustBePrimitiveTypeError } from "./NestedTypeMustBePrimitiveTypeError.js";
import type { ValueTypeCannotExceedNestingLimitError } from "./ValueTypeCannotExceedNestingLimitError.js";
import type { InvalidDataConstraintsForBaseTypeError } from "./InvalidDataConstraintsForBaseTypeError.js";
import type { InvalidDataConstraintRangeTypeError } from "./InvalidDataConstraintRangeTypeError.js";
import type { InvalidDataConstraintSizeTypeError } from "./InvalidDataConstraintSizeTypeError.js";
import type { EmptyDataConstraintError } from "./EmptyDataConstraintError.js";
import type { NoBooleanValueAllowedDataConstraintError } from "./NoBooleanValueAllowedDataConstraintError.js";
import type { InvalidNumericRangeDataConstraintError } from "./InvalidNumericRangeDataConstraintError.js";
import type { InvalidRegexDataConstraintError } from "./InvalidRegexDataConstraintError.js";
import type { InvalidStringTypeLengthDataConstraintsError } from "./InvalidStringTypeLengthDataConstraintsError.js";
import type { InvalidStringTypeOneOfDataConstraintsError } from "./InvalidStringTypeOneOfDataConstraintsError.js";
import type { EmptyStructTypeDataConstraintError } from "./EmptyStructTypeDataConstraintError.js";
import type { StructTypeConstraintWithUnknownStructElementsError } from "./StructTypeConstraintWithUnknownStructElementsError.js";
import type { DuplicateStructFieldIdentifiersInBaseTypeError } from "./DuplicateStructFieldIdentifiersInBaseTypeError.js";
import type { StructFieldIdentifierInConstraintsNotFoundInBaseTypeError } from "./StructFieldIdentifierInConstraintsNotFoundInBaseTypeError.js";
import type { StructFieldBaseTypeAndConstraintBaseTypesDoNotMatchError } from "./StructFieldBaseTypeAndConstraintBaseTypesDoNotMatchError.js";
import type { StructFieldConstraintValueTypeReferenceCannotBeFoundError } from "./StructFieldConstraintValueTypeReferenceCannotBeFoundError.js";
import type { NonPrivilegedUserCreatingSuffixedValueTypeVersionError } from "./NonPrivilegedUserCreatingSuffixedValueTypeVersionError.js";
import type { NonPrivilegedUserCreatingVersionOnMarketplaceOwnedValueTypeError } from "./NonPrivilegedUserCreatingVersionOnMarketplaceOwnedValueTypeError.js";
import type { NonPrivilegedUserCreatingValueTypeWithMarketplaceProvenanceError } from "./NonPrivilegedUserCreatingValueTypeWithMarketplaceProvenanceError.js";
import type { InvalidPermissioningRidCompassNamespaceWithNonNamespaceRidError } from "./InvalidPermissioningRidCompassNamespaceWithNonNamespaceRidError.js";
import type { ReferencedTypeMaxCountExceededError } from "./ReferencedTypeMaxCountExceededError.js";
export interface ValueTypeValidationError_invalidStatusTransition {
type: "invalidStatusTransition";
invalidStatusTransition: InvalidStatusTransitionError
}

export interface ValueTypeValidationError_invalidDisplayName {
type: "invalidDisplayName";
invalidDisplayName: InvalidDisplayNameError
}

export interface ValueTypeValidationError_invalidDescription {
type: "invalidDescription";
invalidDescription: InvalidDescriptionError
}

export interface ValueTypeValidationError_invalidApiName {
type: "invalidApiName";
invalidApiName: InvalidApiNameError
}

export interface ValueTypeValidationError_conflictingApiName {
type: "conflictingApiName";
conflictingApiName: ConflictingApiNameError
}

export interface ValueTypeValidationError_invalidDeprecationDeadline {
type: "invalidDeprecationDeadline";
invalidDeprecationDeadline: DeprecationInvalidDeadlineError
}

export interface ValueTypeValidationError_invalidDeprecationMessage {
type: "invalidDeprecationMessage";
invalidDeprecationMessage: DeprecationInvalidMessageError
}

export interface ValueTypeValidationError_deprecationReplacementMismatchedBaseType {
type: "deprecationReplacementMismatchedBaseType";
deprecationReplacementMismatchedBaseType: DeprecationReplacementMismatchedBaseTypeError
}

export interface ValueTypeValidationError_deprecationReplacementNotFound {
type: "deprecationReplacementNotFound";
deprecationReplacementNotFound: DeprecationReplacementNotFoundError
}

export interface ValueTypeValidationError_deprecationReplacementAlreadyDeprecated {
type: "deprecationReplacementAlreadyDeprecated";
deprecationReplacementAlreadyDeprecated: DeprecationReplacementAlreadyDeprecatedError
}

export interface ValueTypeValidationError_deprecationReplacementPermissionDenied {
type: "deprecationReplacementPermissionDenied";
deprecationReplacementPermissionDenied: DeprecationReplacementPermissionDeniedError
}

export interface ValueTypeValidationError_nestedTypeMustBePrimitiveType {
type: "nestedTypeMustBePrimitiveType";
nestedTypeMustBePrimitiveType: NestedTypeMustBePrimitiveTypeError
}

export interface ValueTypeValidationError_cannotExceedNestingLimit {
type: "cannotExceedNestingLimit";
cannotExceedNestingLimit: ValueTypeCannotExceedNestingLimitError
}

export interface ValueTypeValidationError_invalidDataConstraintsForBaseType {
type: "invalidDataConstraintsForBaseType";
invalidDataConstraintsForBaseType: InvalidDataConstraintsForBaseTypeError
}

export interface ValueTypeValidationError_invalidRange {
type: "invalidRange";
invalidRange: InvalidDataConstraintRangeTypeError
}

export interface ValueTypeValidationError_invalidSize {
type: "invalidSize";
invalidSize: InvalidDataConstraintSizeTypeError
}

export interface ValueTypeValidationError_emptyDataConstraint {
type: "emptyDataConstraint";
emptyDataConstraint: EmptyDataConstraintError
}

export interface ValueTypeValidationError_noBooleanValueAllowed {
type: "noBooleanValueAllowed";
noBooleanValueAllowed: NoBooleanValueAllowedDataConstraintError
}

export interface ValueTypeValidationError_invalidNumericRange {
type: "invalidNumericRange";
invalidNumericRange: InvalidNumericRangeDataConstraintError
}

export interface ValueTypeValidationError_invalidRegex {
type: "invalidRegex";
invalidRegex: InvalidRegexDataConstraintError
}

export interface ValueTypeValidationError_invalidStringTypeLength {
type: "invalidStringTypeLength";
invalidStringTypeLength: InvalidStringTypeLengthDataConstraintsError
}

export interface ValueTypeValidationError_invalidStringTypeOneOfConstraint {
type: "invalidStringTypeOneOfConstraint";
invalidStringTypeOneOfConstraint: InvalidStringTypeOneOfDataConstraintsError
}

export interface ValueTypeValidationError_emptyStructTypeConstraint {
type: "emptyStructTypeConstraint";
emptyStructTypeConstraint: EmptyStructTypeDataConstraintError
}

export interface ValueTypeValidationError_unknownStructElementsOnConstraint {
type: "unknownStructElementsOnConstraint";
unknownStructElementsOnConstraint: StructTypeConstraintWithUnknownStructElementsError
}

export interface ValueTypeValidationError_duplicateStructFieldIdentifiersInBaseType {
type: "duplicateStructFieldIdentifiersInBaseType";
duplicateStructFieldIdentifiersInBaseType: DuplicateStructFieldIdentifiersInBaseTypeError
}

export interface ValueTypeValidationError_structFieldIdentifierInConstraintsNotFoundInBaseType {
type: "structFieldIdentifierInConstraintsNotFoundInBaseType";
structFieldIdentifierInConstraintsNotFoundInBaseType: StructFieldIdentifierInConstraintsNotFoundInBaseTypeError
}

export interface ValueTypeValidationError_structFieldBaseTypeAndConstraintBaseTypesDoNotMatch {
type: "structFieldBaseTypeAndConstraintBaseTypesDoNotMatch";
structFieldBaseTypeAndConstraintBaseTypesDoNotMatch: StructFieldBaseTypeAndConstraintBaseTypesDoNotMatchError
}

export interface ValueTypeValidationError_structFieldConstraintValueTypeReferenceCannotBeFound {
type: "structFieldConstraintValueTypeReferenceCannotBeFound";
structFieldConstraintValueTypeReferenceCannotBeFound: StructFieldConstraintValueTypeReferenceCannotBeFoundError
}

export interface ValueTypeValidationError_nonPrivilegedUserCreatingSuffixedValueTypeVersion {
type: "nonPrivilegedUserCreatingSuffixedValueTypeVersion";
nonPrivilegedUserCreatingSuffixedValueTypeVersion: NonPrivilegedUserCreatingSuffixedValueTypeVersionError
}

export interface ValueTypeValidationError_nonPrivilegedUserCreatingVersionOnMarketplaceOwnedValueType {
type: "nonPrivilegedUserCreatingVersionOnMarketplaceOwnedValueType";
nonPrivilegedUserCreatingVersionOnMarketplaceOwnedValueType: NonPrivilegedUserCreatingVersionOnMarketplaceOwnedValueTypeError
}

export interface ValueTypeValidationError_nonPrivilegedUserCreatingValueTypeWithMarketplaceProvenance {
type: "nonPrivilegedUserCreatingValueTypeWithMarketplaceProvenance";
nonPrivilegedUserCreatingValueTypeWithMarketplaceProvenance: NonPrivilegedUserCreatingValueTypeWithMarketplaceProvenanceError
}

export interface ValueTypeValidationError_invalidPermissioningRidCompassNamespaceWithNonNamespaceRid {
type: "invalidPermissioningRidCompassNamespaceWithNonNamespaceRid";
invalidPermissioningRidCompassNamespaceWithNonNamespaceRid: InvalidPermissioningRidCompassNamespaceWithNonNamespaceRidError
}

export interface ValueTypeValidationError_referencedTypeMaxCountExceeded {
type: "referencedTypeMaxCountExceeded";
referencedTypeMaxCountExceeded: ReferencedTypeMaxCountExceededError
}export type ValueTypeValidationError = ValueTypeValidationError_invalidStatusTransition | ValueTypeValidationError_invalidDisplayName | ValueTypeValidationError_invalidDescription | ValueTypeValidationError_invalidApiName | ValueTypeValidationError_conflictingApiName | ValueTypeValidationError_invalidDeprecationDeadline | ValueTypeValidationError_invalidDeprecationMessage | ValueTypeValidationError_deprecationReplacementMismatchedBaseType | ValueTypeValidationError_deprecationReplacementNotFound | ValueTypeValidationError_deprecationReplacementAlreadyDeprecated | ValueTypeValidationError_deprecationReplacementPermissionDenied | ValueTypeValidationError_nestedTypeMustBePrimitiveType | ValueTypeValidationError_cannotExceedNestingLimit | ValueTypeValidationError_invalidDataConstraintsForBaseType | ValueTypeValidationError_invalidRange | ValueTypeValidationError_invalidSize | ValueTypeValidationError_emptyDataConstraint | ValueTypeValidationError_noBooleanValueAllowed | ValueTypeValidationError_invalidNumericRange | ValueTypeValidationError_invalidRegex | ValueTypeValidationError_invalidStringTypeLength | ValueTypeValidationError_invalidStringTypeOneOfConstraint | ValueTypeValidationError_emptyStructTypeConstraint | ValueTypeValidationError_unknownStructElementsOnConstraint | ValueTypeValidationError_duplicateStructFieldIdentifiersInBaseType | ValueTypeValidationError_structFieldIdentifierInConstraintsNotFoundInBaseType | ValueTypeValidationError_structFieldBaseTypeAndConstraintBaseTypesDoNotMatch | ValueTypeValidationError_structFieldConstraintValueTypeReferenceCannotBeFound | ValueTypeValidationError_nonPrivilegedUserCreatingSuffixedValueTypeVersion | ValueTypeValidationError_nonPrivilegedUserCreatingVersionOnMarketplaceOwnedValueType | ValueTypeValidationError_nonPrivilegedUserCreatingValueTypeWithMarketplaceProvenance | ValueTypeValidationError_invalidPermissioningRidCompassNamespaceWithNonNamespaceRid | ValueTypeValidationError_referencedTypeMaxCountExceeded