import type { PackagedEntityRid } from "../PackagedEntityRid.js";
/**
* Adds or removes the requested entities to/from a package. Removing means moving the resources to the default
* ontology project in the same ontology as the given package.
*/
export interface UpdateEntitiesInPackageRequest {
	entitiesToAdd: Array<PackagedEntityRid>;
	entitiesToRemove: Array<PackagedEntityRid>;
}
