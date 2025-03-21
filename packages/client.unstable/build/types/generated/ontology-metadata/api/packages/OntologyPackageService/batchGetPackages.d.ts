import { type ConjureContext } from "conjure-lite";
import type { BatchGetPackagesRequest } from "../BatchGetPackagesRequest.js";
import type { BatchGetPackagesResponse } from "../BatchGetPackagesResponse.js";
/**
* Gets packages by Rid. Resources which have no package associated will not have
* a corresponding entry in the resulting set. Packages where the user does not have `ontology:discover-package`
* will be filtered out. At most 100 resources can be requested per call.
*/
export declare function batchGetPackages(ctx: ConjureContext, request: BatchGetPackagesRequest): Promise<BatchGetPackagesResponse>;
