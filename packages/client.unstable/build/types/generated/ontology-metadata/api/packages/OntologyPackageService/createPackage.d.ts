import { type ConjureContext } from "conjure-lite";
import type { OntologyRid } from "../../OntologyRid.js";
import type { CreatePackageRequest } from "../CreatePackageRequest.js";
import type { CreatePackageResponse } from "../CreatePackageResponse.js";
/**
* Creates a new package in the specified ontology. Requires the privileged operation `ontology:service-create-package`
* on the ontology root rid rid.
*
* If using a Compass project as OwningRid, the project must be in the same namespace as the ontology.
*/
export declare function createPackage(ctx: ConjureContext, onBehalfOf: string | undefined, ontologyRid: OntologyRid, request: CreatePackageRequest): Promise<CreatePackageResponse>;
