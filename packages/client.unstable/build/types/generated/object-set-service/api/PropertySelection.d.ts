import type { PropertyIdPropertySelection } from "./PropertyIdPropertySelection.js";
import type { PropertyTypeRidPropertySelection } from "./PropertyTypeRidPropertySelection.js";
export interface PropertySelection_propertyId {
	type: "propertyId";
	propertyId: PropertyIdPropertySelection;
}
export interface PropertySelection_propertyTypeRid {
	type: "propertyTypeRid";
	propertyTypeRid: PropertyTypeRidPropertySelection;
}
/**
* Specify a subset of properties by PropertyId.
*/
export type PropertySelection = PropertySelection_propertyId | PropertySelection_propertyTypeRid;
