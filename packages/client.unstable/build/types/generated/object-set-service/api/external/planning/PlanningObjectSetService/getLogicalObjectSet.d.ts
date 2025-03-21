import { type ConjureContext } from "conjure-lite";
import type { LogicalObjectSetRequest } from "../LogicalObjectSetRequest.js";
import type { LogicalObjectSetResponse } from "../LogicalObjectSetResponse.js";
/**
* Endpoint which exposes the logical plan for a given object set.
* This endpoint will output a logical object set if and only if the Object Types and Link Types referenced in the given Object Set are backed by Objects Backend V2.
* A user must be able to view all Object Types and Link Types that are referenced in the given Object Set. They must also have `object-set-service:read-object-set` on the given Object Set.
*/
export declare function getLogicalObjectSet(ctx: ConjureContext, request: LogicalObjectSetRequest): Promise<LogicalObjectSetResponse>;
