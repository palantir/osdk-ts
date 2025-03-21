import type { ResourceRid } from "./ResourceRid.js";
/**
* Request to load all resource metadata associated with a resource rid.
* The endpoint will return an empty set in case there is any error
* retrieving the associated resource metadata
*/
export interface LoadResourceAssociationsRequest {
	rid: ResourceRid;
}
