import type { ObjectTypeApiName } from "./ObjectTypeApiName.js";
/**
* This status indicates that the ObjectType is reaching the end of its life and will be removed as per the deadline specified.
*/
export interface OntologyIrDeprecatedObjectTypeStatus {
	message: string;
	deadline: string;
	replacedBy: ObjectTypeApiName | undefined;
}
