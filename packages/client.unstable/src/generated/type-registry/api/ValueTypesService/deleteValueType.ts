/**/
import { conjureFetch, type ConjureContext } from "conjure-lite"
import type { ValueTypeRid } from "../ValueTypeRid.js";

/**
 * Deletes a value type. Only a deprecated value type that has passed a deadline can be deleted.
 */
export async function deleteValueType(ctx: ConjureContext, valueTypeRid: ValueTypeRid): Promise<void> {
  return conjureFetch(ctx, `/type-registry/value-types/${valueTypeRid}`, "DELETE")
}