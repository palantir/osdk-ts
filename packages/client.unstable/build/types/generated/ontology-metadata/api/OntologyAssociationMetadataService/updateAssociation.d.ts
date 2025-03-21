import { type ConjureContext } from "conjure-lite";
import type { UpdateAssociationRequest } from "../association/metadata/UpdateAssociationRequest.js";
import type { UpdateAssociationResponse } from "../association/metadata/UpdateAssociationResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
/**
* Endpoint to update an association between an ontology entity and a resource
*/
export declare function updateAssociation(ctx: ConjureContext, ontologyRid: OntologyRid, request: UpdateAssociationRequest): Promise<UpdateAssociationResponse>;
