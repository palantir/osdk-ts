import { type ConjureContext } from "conjure-lite";
import type { GetSecurityProvenanceRequest } from "../objectstorage/GetSecurityProvenanceRequest.js";
import type { GetSecurityProvenanceResponse } from "../objectstorage/GetSecurityProvenanceResponse.js";
/**
* Called by OMS ObjectTypeInputManager and LinkTypeInputManager to retrieve security provenance information
* about Ontology entities made available by Object Storage services.
*/
export declare function getSecurityProvenanceInformation(ctx: ConjureContext, request: GetSecurityProvenanceRequest): Promise<GetSecurityProvenanceResponse>;
