/**/
import { conjureFetch, type ConjureContext } from "conjure-lite"
import type { ValueTypeRid } from "../ValueTypeRid.js";
import type { CreateValueTypeVersionRequestV2 } from "../CreateValueTypeVersionRequestV2.js";
import type { CreateValueTypeVersionResponse } from "../CreateValueTypeVersionResponse.js";

/**
 * Creates a new value type version for an already existing Value Type.
 */
export async function createValueTypeVersionV2(ctx: ConjureContext, valueTypeRid: ValueTypeRid, request: CreateValueTypeVersionRequestV2): Promise<CreateValueTypeVersionResponse> {
  return conjureFetch(ctx, `/type-registry/value-types/version/v2/${valueTypeRid}`, "POST", request)
}