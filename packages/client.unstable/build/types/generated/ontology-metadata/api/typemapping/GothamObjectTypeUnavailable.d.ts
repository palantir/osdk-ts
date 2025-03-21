import type { GothamObjectTypeUri } from "./GothamObjectTypeUri.js";
import type { UnavailableGothamObjectTypeCause } from "./UnavailableGothamObjectTypeCause.js";
/**
* The URI of a Gotham object type that is currently unavailable to be imported, along with the causes
* of unavailability.
*/
export interface GothamObjectTypeUnavailable {
	displayName: string;
	description: string;
	unavailableGothamObjectTypeUri: GothamObjectTypeUri;
	unavailableObjectTypeCauses: Array<UnavailableGothamObjectTypeCause>;
}
