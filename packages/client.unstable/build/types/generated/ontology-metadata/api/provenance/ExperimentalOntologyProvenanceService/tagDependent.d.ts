import { type ConjureContext } from "conjure-lite";
import type { TagDependentRequest } from "../TagDependentRequest.js";
import type { TagDependentResponse } from "../TagDependentResponse.js";
/**
* Endpoint to tag a dependent entity.
* Permissions required:
* - `ontology:register-dependency` on the root ontology rid
*/
export declare function tagDependent(ctx: ConjureContext, request: TagDependentRequest): Promise<TagDependentResponse>;
