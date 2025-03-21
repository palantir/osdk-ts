import type { PropertyTypeId } from "../PropertyTypeId.js";
/**
* Describes how to treat an object of this type as an event.
*/
export interface EventMetadataModification {
	descriptionPropertyTypeId: PropertyTypeId | undefined;
	endTimePropertyTypeId: PropertyTypeId;
	eventIdPropertyTypeId: PropertyTypeId;
	startTimePropertyTypeId: PropertyTypeId;
}
