/**/
import { conjureFetch, type ConjureContext } from "conjure-lite"
import type { ValueTypeRid } from "../ValueTypeRid.js";
import type { GetValueTypeRequest } from "../GetValueTypeRequest.js";
import type { GetValueTypeResponse } from "../GetValueTypeResponse.js";

/**
 * Returns a single Value Type identified by its rid either at specific or latest version.
 */
export async function getValueType(ctx: ConjureContext, valueTypeRid: ValueTypeRid, request: GetValueTypeRequest): Promise<GetValueTypeResponse> {
  return conjureFetch(ctx, `/type-registry/value-types/get/${valueTypeRid}`, "POST", request)
}