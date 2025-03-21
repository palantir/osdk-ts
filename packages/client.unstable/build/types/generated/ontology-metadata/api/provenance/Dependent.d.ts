import type { VersionedResource } from "./VersionedResource.js";
export interface Dependent_versionedResource {
	type: "versionedResource";
	versionedResource: VersionedResource;
}
/**
* The entity which depends on the given OntologyEntities.
*/
export type Dependent = Dependent_versionedResource;
