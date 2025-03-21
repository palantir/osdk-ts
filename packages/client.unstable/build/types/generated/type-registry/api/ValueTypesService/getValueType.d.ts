import { type ConjureContext } from "conjure-lite";
import type { GetValueTypeRequest } from "../GetValueTypeRequest.js";
import type { GetValueTypeResponse } from "../GetValueTypeResponse.js";
import type { ValueTypeRid } from "../ValueTypeRid.js";
/**
* Returns a single Value Type identified by its rid either at specific or latest version.
*/
export declare function getValueType(ctx: ConjureContext, valueTypeRid: ValueTypeRid, request: GetValueTypeRequest): Promise<GetValueTypeResponse>;
