/**/
import { conjureFetch, type ConjureContext } from "conjure-lite"
import type { ValueTypeRid } from "../ValueTypeRid.js";
import type { GetValueTypeVersionsResponse } from "../GetValueTypeVersionsResponse.js";

/**
 * Returns all versions corresponding to a specific Value Type rid, sorted by creation time in descending order.
 */
export async function getValueTypeVersions(ctx: ConjureContext, valueTypeRid: ValueTypeRid): Promise<GetValueTypeVersionsResponse> {
  return conjureFetch(ctx, `/type-registry/value-types/get/${valueTypeRid}/versions`, "POST")
}