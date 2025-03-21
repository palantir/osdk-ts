import type { BaseFormatterReferencedPropertiesDoNotExistError } from "./BaseFormatterReferencedPropertiesDoNotExistError.js";
export interface ObjectTypePropertyConstraintError_baseFormatterReferencedPropertiesDoNotExist {
	type: "baseFormatterReferencedPropertiesDoNotExist";
	baseFormatterReferencedPropertiesDoNotExist: BaseFormatterReferencedPropertiesDoNotExistError;
}
/**
* A type representing the Validation Errors associated with Property Type References.
*/
export type ObjectTypePropertyConstraintError = ObjectTypePropertyConstraintError_baseFormatterReferencedPropertiesDoNotExist;
