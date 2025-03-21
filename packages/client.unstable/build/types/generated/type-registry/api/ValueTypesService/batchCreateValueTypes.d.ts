import { type ConjureContext } from "conjure-lite";
import type { BatchCreateValueTypesRequest } from "../BatchCreateValueTypesRequest.js";
import type { BatchCreateValueTypesResponse } from "../BatchCreateValueTypesResponse.js";
/**
* Creates multiple new Value Types.
*/
export declare function batchCreateValueTypes(ctx: ConjureContext, request: BatchCreateValueTypesRequest): Promise<BatchCreateValueTypesResponse>;
