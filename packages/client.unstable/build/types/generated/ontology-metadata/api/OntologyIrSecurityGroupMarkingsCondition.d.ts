import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
/**
* Condition that specifies that user's markings must be evaluated against the marking(s) contained on each
* object's 'property'.
*
* Note that the specified property's propertyType must be of type MarkingPropertyType or ArrayPropertyType
* of MarkingPropertyTypes.
*/
export interface OntologyIrSecurityGroupMarkingsCondition {
	property: ObjectTypeFieldApiName;
}
