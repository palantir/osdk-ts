/**/
import { conjureFetch, type ConjureContext } from "conjure-lite"
import type { BatchGetValueTypesRequest } from "../BatchGetValueTypesRequest.js";
import type { BatchGetValueTypesResponse } from "../BatchGetValueTypesResponse.js";
export async function batchGetValueTypes(ctx: ConjureContext, request: BatchGetValueTypesRequest): Promise<BatchGetValueTypesResponse> {
  return conjureFetch(ctx, `/type-registry/value-types/batch-get-value-types`, "POST", request)
}