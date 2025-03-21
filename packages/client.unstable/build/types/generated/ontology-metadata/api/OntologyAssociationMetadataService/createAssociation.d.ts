import { type ConjureContext } from "conjure-lite";
import type { CreateAssociationRequest } from "../association/metadata/CreateAssociationRequest.js";
import type { CreateAssociationResponse } from "../association/metadata/CreateAssociationResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
/**
* Endpoint to register an association between an ontology entity and a resource
*/
export declare function createAssociation(ctx: ConjureContext, ontologyRid: OntologyRid, request: CreateAssociationRequest): Promise<CreateAssociationResponse>;
