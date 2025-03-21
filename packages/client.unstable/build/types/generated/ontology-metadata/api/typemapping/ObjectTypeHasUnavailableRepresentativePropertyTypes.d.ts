import type { GothamPropertyTypeUnavailable } from "./GothamPropertyTypeUnavailable.js";
/**
* Gotham Object Type unavailable for import because at least one of their representative property types are
* unavailable for import.
*/
export interface ObjectTypeHasUnavailableRepresentativePropertyTypes {
	unavailablePropertyTypes: Array<GothamPropertyTypeUnavailable>;
}
