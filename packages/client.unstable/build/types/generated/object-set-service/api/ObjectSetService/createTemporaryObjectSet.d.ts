import { type ConjureContext } from "conjure-lite";
import type { CreateTemporaryObjectSetRequest } from "../CreateTemporaryObjectSetRequest.js";
import type { CreateTemporaryObjectSetResponse } from "../CreateTemporaryObjectSetResponse.js";
/**
* Creates a temporary object set that will live for at least as long as the provided TTL, and will get deleted
* at some point after that.
*
* Temporary object sets can only be accessed by users who have created them; a gatekeeper resource is registered
* for every temporary object set. NOTE: The same gatekeeper resource may be reused for the same userId across
* different createTemporaryObjectSet requests.
*
* Whenever an object set (temporary, or otherwise) referencing a temporary object set gets saved or used in
* versioned object sets, the reference gets replaced with a full definition of the previously saved temporary
* object. This is to ensure that they do not inherit the TTL of temporary object sets they reference.
*
* Please consider using temporary object sets whenever there is a need to save an object set just to be able to
* pass it to another service without a need to persist it indefinitely.
*/
export declare function createTemporaryObjectSet(ctx: ConjureContext, request: CreateTemporaryObjectSetRequest): Promise<CreateTemporaryObjectSetResponse>;
