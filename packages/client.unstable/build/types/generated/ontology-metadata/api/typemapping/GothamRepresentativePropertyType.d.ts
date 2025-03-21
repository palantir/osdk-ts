import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { GothamPropertyTypeAvailable } from "./GothamPropertyTypeAvailable.js";
export interface GothamRepresentativePropertyType_sharedPropertyTypeToCreate {
	type: "sharedPropertyTypeToCreate";
	sharedPropertyTypeToCreate: GothamPropertyTypeAvailable;
}
export interface GothamRepresentativePropertyType_existingSharedPropertyType {
	type: "existingSharedPropertyType";
	existingSharedPropertyType: SharedPropertyTypeRid;
}
/**
* A SharedPropertyTypeModification if the Gotham property type doesn't already exist in the requested
* Foundry ontology. Otherwise, the SharedPropertyTypeRid of the corresponding SharedPropertyType in the
* requested ontology.
*/
export type GothamRepresentativePropertyType = GothamRepresentativePropertyType_sharedPropertyTypeToCreate | GothamRepresentativePropertyType_existingSharedPropertyType;
