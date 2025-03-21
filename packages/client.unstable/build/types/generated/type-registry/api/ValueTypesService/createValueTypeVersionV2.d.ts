import { type ConjureContext } from "conjure-lite";
import type { CreateValueTypeVersionRequestV2 } from "../CreateValueTypeVersionRequestV2.js";
import type { CreateValueTypeVersionResponse } from "../CreateValueTypeVersionResponse.js";
import type { ValueTypeRid } from "../ValueTypeRid.js";
/**
* Creates a new value type version for an already existing Value Type.
*/
export declare function createValueTypeVersionV2(ctx: ConjureContext, valueTypeRid: ValueTypeRid, request: CreateValueTypeVersionRequestV2): Promise<CreateValueTypeVersionResponse>;
