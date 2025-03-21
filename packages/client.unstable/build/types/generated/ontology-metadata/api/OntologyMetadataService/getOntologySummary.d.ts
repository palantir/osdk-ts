import { type ConjureContext } from "conjure-lite";
import type { GetOntologySummaryRequest } from "../GetOntologySummaryRequest.js";
import type { GetOntologySummaryResponse } from "../GetOntologySummaryResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
/**
* Endpoint to load a summary of an Ontology including the number of entities of each type visible to the user.
*
* An entity is considered visible if the user has `view` or `discover` permissions. ObjectTypes and LinkTypes
* migrated to roles are also considered visible regardless of the users permissions on the backing datasources
* (i.e. the endpoint runs using `includeObjectTypesWithoutSearchableDatasources` set to true).
*
* The results in this endpoint are eventually consistent with the latest OntologyVersion and may lag slightly
* behind the last Ontology modification.
*/
export declare function getOntologySummary(ctx: ConjureContext, ontologyRid: OntologyRid, request: GetOntologySummaryRequest): Promise<GetOntologySummaryResponse>;
