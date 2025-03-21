import { type ConjureContext } from "conjure-lite";
import type { GetEntityModificationHistoryRequest } from "../../modification/GetEntityModificationHistoryRequest.js";
import type { GetEntityModificationHistoryResponse } from "../../modification/GetEntityModificationHistoryResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";
/**
* Returns pages of metadata about the history of modifications to the provided entity, including the
* OntologyVersion and Attribution for each modification. The order of the items returned is from the most recent
* to the oldest.
*
* Note that an entry for a version is only returned for an ObjectType or a LinkType if the corresponding
* `OntologyModificationRequest` included an `ObjectTypeModifyRequest` or a `LinkTypeModifyRequest` for
* the ObjectType or LinkType. If the OntologyMOdificationRequest only contained EntityMetadata or
* Schema migration modifications for the ObjectType or LinkType, then no entry will be returned for
* the entity at that version.
*/
export declare function getEntityModificationHistory(ctx: ConjureContext, ontologyRid: OntologyRid, request: GetEntityModificationHistoryRequest): Promise<GetEntityModificationHistoryResponse>;
