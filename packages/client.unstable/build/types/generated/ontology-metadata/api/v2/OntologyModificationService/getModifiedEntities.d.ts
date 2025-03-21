import { type ConjureContext } from "conjure-lite";
import type { GetModifiedEntitiesRequest } from "../../modification/GetModifiedEntitiesRequest.js";
import type { GetModifiedEntitiesResponse } from "../../modification/GetModifiedEntitiesResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";
/**
* Returns all entities modified between two given OntologyVersions.
*/
export declare function getModifiedEntities(ctx: ConjureContext, ontologyRid: OntologyRid, request: GetModifiedEntitiesRequest): Promise<GetModifiedEntitiesResponse>;
