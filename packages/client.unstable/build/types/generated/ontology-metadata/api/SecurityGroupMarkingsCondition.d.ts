import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* Condition that specifies that user's markings must be evaluated against the marking(s) contained on each
* object's 'property'.
*
* Note that the specified property's propertyType must be of type MarkingPropertyType or ArrayPropertyType
* of MarkingPropertyTypes.
*/
export interface SecurityGroupMarkingsCondition {
	property: PropertyTypeRid;
}
