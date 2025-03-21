import { type ConjureContext } from "conjure-lite";
import type { UpdateValueTypeRequest } from "../UpdateValueTypeRequest.js";
import type { ValueTypeRid } from "../ValueTypeRid.js";
/**
* Updates an existing Value Type.
*/
export declare function updateValueType(ctx: ConjureContext, valueTypeRid: ValueTypeRid, request: UpdateValueTypeRequest): Promise<void>;
