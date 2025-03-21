import type { SharedPropertyTypeModification } from "../modification/SharedPropertyTypeModification.js";
import type { GothamPropertyTypeAvailable } from "./GothamPropertyTypeAvailable.js";
import type { GothamPropertyTypeUnavailable } from "./GothamPropertyTypeUnavailable.js";
/**
* Contains Gotham property types available and unavailable to be imported as SharedPropertyTypes.
*/
export interface GetGothamPropertyTypesResponse {
	gothamPropertyTypesAvailable: Array<SharedPropertyTypeModification>;
	gothamPropertyTypesAvailable2: Array<GothamPropertyTypeAvailable>;
	gothamPropertyTypesUnavailableForImport: Array<GothamPropertyTypeUnavailable>;
}
