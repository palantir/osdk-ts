/**/
import { conjureFetch, type ConjureContext } from "conjure-lite"
import type { ValueTypeRid } from "../ValueTypeRid.js";
import type { CreateValueTypeVersionRequest } from "../CreateValueTypeVersionRequest.js";
import type { CreateValueTypeVersionResponse } from "../CreateValueTypeVersionResponse.js";

/**
 * Creates a new value type version for an already existing Value Type.
 */
export async function createValueTypeVersion(ctx: ConjureContext, valueTypeRid: ValueTypeRid, request: CreateValueTypeVersionRequest): Promise<CreateValueTypeVersionResponse> {
  return conjureFetch(ctx, `/type-registry/value-types/version/${valueTypeRid}`, "POST", request)
}