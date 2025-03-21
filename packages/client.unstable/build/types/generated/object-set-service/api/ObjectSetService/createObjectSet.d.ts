import { type ConjureContext } from "conjure-lite";
import type { CreateObjectSetRequest } from "../CreateObjectSetRequest.js";
import type { CreateObjectSetResponse } from "../CreateObjectSetResponse.js";
/**
* Creates an orphaned object set - i.e. not part of any versioned object set. This may be for temporary or internal application use. No gatekeeper resource is created - instead the given security rid is assumed to already exist and will be used to permission the created object set.
*/
export declare function createObjectSet(ctx: ConjureContext, request: CreateObjectSetRequest): Promise<CreateObjectSetResponse>;
