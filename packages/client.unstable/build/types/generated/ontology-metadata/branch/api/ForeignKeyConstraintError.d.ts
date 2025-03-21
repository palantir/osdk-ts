import type { InvalidDerivedForeignKeyError } from "./InvalidDerivedForeignKeyError.js";
import type { InvalidForeignKeyTypeError } from "./InvalidForeignKeyTypeError.js";
import type { LinkTypeReferencesInvalidForeignKeyError } from "./LinkTypeReferencesInvalidForeignKeyError.js";
import type { LinkTypeReferencesInvalidPrimaryKeyError } from "./LinkTypeReferencesInvalidPrimaryKeyError.js";
import type { PrimaryAndForeignKeyTypeMismatchError } from "./PrimaryAndForeignKeyTypeMismatchError.js";
export interface ForeignKeyConstraintError_linkTypeReferencesInvalidPrimaryKey {
	type: "linkTypeReferencesInvalidPrimaryKey";
	linkTypeReferencesInvalidPrimaryKey: LinkTypeReferencesInvalidPrimaryKeyError;
}
export interface ForeignKeyConstraintError_linkTypeReferencesInvalidForeignKey {
	type: "linkTypeReferencesInvalidForeignKey";
	linkTypeReferencesInvalidForeignKey: LinkTypeReferencesInvalidForeignKeyError;
}
export interface ForeignKeyConstraintError_primaryAndForeignKeyTypeMismatch {
	type: "primaryAndForeignKeyTypeMismatch";
	primaryAndForeignKeyTypeMismatch: PrimaryAndForeignKeyTypeMismatchError;
}
export interface ForeignKeyConstraintError_invalidForeignKeyType {
	type: "invalidForeignKeyType";
	invalidForeignKeyType: InvalidForeignKeyTypeError;
}
export interface ForeignKeyConstraintError_invalidDerivedForeignKey {
	type: "invalidDerivedForeignKey";
	invalidDerivedForeignKey: InvalidDerivedForeignKeyError;
}
/**
* A type representing the Validation Errors associated with link type primary/foreign key validation.
*/
export type ForeignKeyConstraintError = ForeignKeyConstraintError_linkTypeReferencesInvalidPrimaryKey | ForeignKeyConstraintError_linkTypeReferencesInvalidForeignKey | ForeignKeyConstraintError_primaryAndForeignKeyTypeMismatch | ForeignKeyConstraintError_invalidForeignKeyType | ForeignKeyConstraintError_invalidDerivedForeignKey;
