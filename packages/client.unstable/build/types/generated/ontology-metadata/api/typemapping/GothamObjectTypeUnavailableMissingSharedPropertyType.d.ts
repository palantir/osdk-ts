import type { GothamPropertyTypeUri } from "./GothamPropertyTypeUri.js";
/**
* Gotham Object types with Foundry-owned property types for which we were unable to find a
* Shared Property Type with a matching URI. This can happen if the Shared Property Type gets
* deleted by the time we look for it in Foundry, or if the SPT shares a Gotham URI with another SPT.
*/
export interface GothamObjectTypeUnavailableMissingSharedPropertyType {
	propertyTypeUris: Array<GothamPropertyTypeUri>;
}
