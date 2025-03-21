import { type ConjureContext } from "conjure-lite";
import type { CreateVersionedObjectSetRequest } from "../CreateVersionedObjectSetRequest.js";
import type { CreateVersionedObjectSetResponse } from "../CreateVersionedObjectSetResponse.js";
/**
* Creates a versioned object set located at the specified compass path. Propagates any exceptions thrown by Compass when registering the versioned object set resource.
*/
export declare function createVersionedObjectSet(ctx: ConjureContext, request: CreateVersionedObjectSetRequest): Promise<CreateVersionedObjectSetResponse>;
