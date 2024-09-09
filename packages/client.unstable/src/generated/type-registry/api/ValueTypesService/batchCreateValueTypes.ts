/**/
import { conjureFetch, type ConjureContext } from "conjure-lite"
import type { BatchCreateValueTypesRequest } from "../BatchCreateValueTypesRequest.js";
import type { BatchCreateValueTypesResponse } from "../BatchCreateValueTypesResponse.js";

/**
 * Creates multiple new Value Types.
 */
export async function batchCreateValueTypes(ctx: ConjureContext, request: BatchCreateValueTypesRequest): Promise<BatchCreateValueTypesResponse> {
  return conjureFetch(ctx, `/type-registry/value-types/batch-create-value-types`, "POST", request)
}