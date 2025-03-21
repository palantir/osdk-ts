import { type ConjureContext } from "conjure-lite";
import type { GetValueTypeVersionsResponse } from "../GetValueTypeVersionsResponse.js";
import type { ValueTypeRid } from "../ValueTypeRid.js";
/**
* Returns all versions corresponding to a specific Value Type rid, sorted by creation time in descending order.
*/
export declare function getValueTypeVersions(ctx: ConjureContext, valueTypeRid: ValueTypeRid): Promise<GetValueTypeVersionsResponse>;
