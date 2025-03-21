import { type ConjureContext } from "conjure-lite";
import type { GetPackagesForOwningResourcesRequest } from "../GetPackagesForOwningResourcesRequest.js";
import type { GetPackagesForOwningResourcesResponse } from "../GetPackagesForOwningResourcesResponse.js";
/**
* Gets all packages owned by the specified resources. Resources which have no package associated will not have
* a corresponding entry in the resulting set. Packages where the user does not have `ontology:discover-package`
* will be filtered out. At most 100 resources can be requested per call.
*/
export declare function getPackagesForOwningResources(ctx: ConjureContext, request: GetPackagesForOwningResourcesRequest): Promise<GetPackagesForOwningResourcesResponse>;
