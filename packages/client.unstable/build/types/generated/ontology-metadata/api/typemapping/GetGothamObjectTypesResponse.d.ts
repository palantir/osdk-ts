import type { GothamObjectTypeAvailable } from "./GothamObjectTypeAvailable.js";
import type { GothamObjectTypeUnavailable } from "./GothamObjectTypeUnavailable.js";
/**
* Contains Gotham object types available and unavailable to be imported as Foundry ObjectTypes.
*/
export interface GetGothamObjectTypesResponse {
	gothamObjectTypesAvailable: Array<GothamObjectTypeAvailable>;
	gothamObjectTypesUnavailable: Array<GothamObjectTypeUnavailable>;
}
