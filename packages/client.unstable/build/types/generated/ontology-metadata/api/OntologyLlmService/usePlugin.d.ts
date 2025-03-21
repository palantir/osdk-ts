import { type ConjureContext } from "conjure-lite";
import type { OntologyLmsRequest } from "../llm/OntologyLmsRequest.js";
import type { OntologyLmsResponse } from "../llm/OntologyLmsResponse.js";
/**
* Endpoint to use an Ontology LMS App plugin. This is a union of plugins that can define how we prompt the
* Language model service.
*/
export declare function usePlugin(ctx: ConjureContext, request: OntologyLmsRequest): Promise<OntologyLmsResponse>;
