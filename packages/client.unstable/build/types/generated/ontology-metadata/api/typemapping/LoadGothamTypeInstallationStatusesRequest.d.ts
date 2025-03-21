import type { GothamObjectTypeUri } from "./GothamObjectTypeUri.js";
import type { GothamPropertyTypeUri } from "./GothamPropertyTypeUri.js";
/**
* Contains the URIs of the types that the caller wants to query the installation status on.
*/
export interface LoadGothamTypeInstallationStatusesRequest {
	objectTypeUris: Array<GothamObjectTypeUri>;
	propertyTypeUris: Array<GothamPropertyTypeUri>;
}
