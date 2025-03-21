import { type ConjureContext } from "conjure-lite";
import type { CreateVersionedObjectSetResponse } from "../CreateVersionedObjectSetResponse.js";
import type { CreateVersionedObjectSetWithParentRequest } from "../CreateVersionedObjectSetWithParentRequest.js";
/**
* Creates a versioned object set with the given parent rid.
*/
export declare function createVersionedObjectSetWithParent(ctx: ConjureContext, request: CreateVersionedObjectSetWithParentRequest): Promise<CreateVersionedObjectSetResponse>;
