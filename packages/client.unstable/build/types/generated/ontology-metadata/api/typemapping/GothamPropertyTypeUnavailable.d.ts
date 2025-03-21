import type { GothamPropertyTypeUri } from "./GothamPropertyTypeUri.js";
import type { UnavailableGothamPropertyTypeCause } from "./UnavailableGothamPropertyTypeCause.js";
/**
* A Gotham property type that is currently unavailable to be imported along with all the reasons why
* it cannot be imported.
*/
export interface GothamPropertyTypeUnavailable {
	unavailableGothamPropertyTypeUri: GothamPropertyTypeUri;
	unavailableGothamPropertyTypeDisplayName: string;
	unavailableGothamPropertyTypeDescription: string;
	unavailableGothamPropertyTypeCauses: Array<UnavailableGothamPropertyTypeCause>;
}
