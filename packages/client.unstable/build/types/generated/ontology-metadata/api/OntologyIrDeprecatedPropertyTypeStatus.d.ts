import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
/**
* This status indicates that the PropertyType is reaching the end of its life and will be removed as per the deadline specified.
*/
export interface OntologyIrDeprecatedPropertyTypeStatus {
	message: string;
	deadline: string;
	replacedBy: ObjectTypeFieldApiName | undefined;
}
