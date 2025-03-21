import type { OwningResource } from "./OwningResource.js";
/**
* Request to create a new package.
*/
export interface CreatePackageRequest {
	owningResource: OwningResource;
}
