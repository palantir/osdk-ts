import type { OwningResource } from "./OwningResource.js";
/**
* Request to get packages for the specified owning resources. At most 100 owning resources can be requested per
* call
*/
export interface GetPackagesForOwningResourcesRequest {
	owningResources: Array<OwningResource>;
}
