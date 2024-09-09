/**/
import { conjureFetch, type ConjureContext } from "conjure-lite"
import type { ValueTypeRid } from "../ValueTypeRid.js";
import type { UpdateValueTypeRequest } from "../UpdateValueTypeRequest.js";

/**
 * Updates an existing Value Type.
 */
export async function updateValueType(ctx: ConjureContext, valueTypeRid: ValueTypeRid, request: UpdateValueTypeRequest): Promise<void> {
  return conjureFetch(ctx, `/type-registry/value-types/${valueTypeRid}`, "PUT", request)
}