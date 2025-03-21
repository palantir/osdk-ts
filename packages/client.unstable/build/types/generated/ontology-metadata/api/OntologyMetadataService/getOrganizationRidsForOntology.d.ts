import { type ConjureContext } from "conjure-lite";
import type { OntologyRid } from "../OntologyRid.js";
import type { OrganizationRidsForOntologyResponse } from "../OrganizationRidsForOntologyResponse.js";
/**
* Gets the organization rids to which the ontology entities in the given ontology rid belong. If the user has
* requested an ontology they do not have access to, no organization rids will be present in the response.
*/
export declare function getOrganizationRidsForOntology(ctx: ConjureContext, ontologyRid: OntologyRid): Promise<OrganizationRidsForOntologyResponse>;
