import { type ConjureContext } from "conjure-lite";
import type { DeleteAssociationsRequest } from "../association/metadata/DeleteAssociationsRequest.js";
import type { DeleteAssociationsResponse } from "../association/metadata/DeleteAssociationsResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
/**
* Endpoint to delete associations between one or more <ontology entity, resource> pairs
*/
export declare function deleteAssociations(ctx: ConjureContext, ontologyRid: OntologyRid, request: DeleteAssociationsRequest): Promise<DeleteAssociationsResponse>;
