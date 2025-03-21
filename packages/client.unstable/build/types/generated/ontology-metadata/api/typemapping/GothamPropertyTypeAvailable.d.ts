import type { SharedPropertyTypeModification } from "../modification/SharedPropertyTypeModification.js";
import type { GothamPropertyValueTypesToCreate } from "./GothamPropertyValueTypesToCreate.js";
/**
* Represents a Gotham property type that is available to be imported.
*/
export interface GothamPropertyTypeAvailable {
	sharedPropertyTypeModification: SharedPropertyTypeModification;
	valueTypeToCreate: any | undefined;
	valueTypesToCreate: GothamPropertyValueTypesToCreate | undefined;
}
