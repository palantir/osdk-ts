import { type ConjureContext } from "conjure-lite";
import type { OntologyModificationRequest } from "../../modification/OntologyModificationRequest.js";
import type { OntologyModificationResponse } from "../../modification/OntologyModificationResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";
export declare function modifyOntology(ctx: ConjureContext, onBehalfOf: string | undefined, ontologyRid: OntologyRid | undefined, request: OntologyModificationRequest): Promise<OntologyModificationResponse>;
