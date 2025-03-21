import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
import type { BaseValueTypeUsageError } from "./BaseValueTypeUsageError.js";
/**
* Validation error using a value type with a property type.
*/
export interface PropertyTypeValueTypeUsageError {
	objectTypeRid: ObjectTypeRid | undefined;
	objectTypeId: ObjectTypeId | undefined;
	propertyTypeRid: PropertyTypeRid | undefined;
	propertyTypeId: PropertyTypeId | undefined;
	error: BaseValueTypeUsageError;
}
