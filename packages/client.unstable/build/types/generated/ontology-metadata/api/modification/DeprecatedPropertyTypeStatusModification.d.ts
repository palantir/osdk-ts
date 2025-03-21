import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { PropertyTypeRid } from "../PropertyTypeRid.js";
/**
* This status indicates that the PropertyType is reaching the end of its life and will be removed as per the deadline specified.
*/
export interface DeprecatedPropertyTypeStatusModification {
	message: string;
	deadline: string;
	replacedBy: PropertyTypeRid | undefined;
	replacedById: PropertyTypeId | undefined;
}
