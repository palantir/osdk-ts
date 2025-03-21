import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* A marking property must be referenced by a granular policy in a property security group, or must
* map to a column that is referenced by an RV granular policy.
*/
export interface MarkingPropertiesMustBeReferencedInGranularPolicyError {
	objectTypeId: ObjectTypeId | undefined;
	propertyTypeId: PropertyTypeId | undefined;
	objectTypeRid: ObjectTypeRid | undefined;
	propertyTypeRid: PropertyTypeRid | undefined;
}
