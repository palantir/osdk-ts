import { type ConjureContext } from "conjure-lite";
import type { SemanticSearchObjectTypesRequest } from "../search/semantic/SemanticSearchObjectTypesRequest.js";
import type { SemanticSearchObjectTypesResponse } from "../search/semantic/SemanticSearchObjectTypesResponse.js";
export declare function semanticSearchObjectTypes(ctx: ConjureContext, request: SemanticSearchObjectTypesRequest): Promise<SemanticSearchObjectTypesResponse>;
