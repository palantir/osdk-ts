import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* Describes how to treat an object of this type as an event.
*/
export interface EventMetadata {
	description: PropertyTypeRid | undefined;
	endTimePropertyTypeRid: PropertyTypeRid;
	eventIdPropertyTypeRid: PropertyTypeRid;
	startTimePropertyTypeRid: PropertyTypeRid;
}
