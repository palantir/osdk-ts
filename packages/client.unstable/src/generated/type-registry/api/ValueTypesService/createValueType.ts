/**/
import { conjureFetch, type ConjureContext } from "conjure-lite"
import type { CreateValueTypeRequest } from "../CreateValueTypeRequest.js";
import type { CreateValueTypeResponse } from "../CreateValueTypeResponse.js";

/**
 * Creates a completely new Value Type.
 */
export async function createValueType(ctx: ConjureContext, request: CreateValueTypeRequest): Promise<CreateValueTypeResponse> {
  return conjureFetch(ctx, `/type-registry/value-types`, "POST", request)
}