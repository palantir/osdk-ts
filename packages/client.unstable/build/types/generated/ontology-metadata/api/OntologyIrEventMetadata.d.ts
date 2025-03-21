import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
/**
* Describes how to treat an object of this type as an event.
*/
export interface OntologyIrEventMetadata {
	description: ObjectTypeFieldApiName | undefined;
	endTimePropertyTypeRid: ObjectTypeFieldApiName;
	eventIdPropertyTypeRid: ObjectTypeFieldApiName;
	startTimePropertyTypeRid: ObjectTypeFieldApiName;
}
