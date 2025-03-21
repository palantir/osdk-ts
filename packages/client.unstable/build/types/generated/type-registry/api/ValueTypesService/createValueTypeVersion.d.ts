import { type ConjureContext } from "conjure-lite";
import type { CreateValueTypeVersionRequest } from "../CreateValueTypeVersionRequest.js";
import type { CreateValueTypeVersionResponse } from "../CreateValueTypeVersionResponse.js";
import type { ValueTypeRid } from "../ValueTypeRid.js";
/**
* Creates a new value type version for an already existing Value Type.
*/
export declare function createValueTypeVersion(ctx: ConjureContext, valueTypeRid: ValueTypeRid, request: CreateValueTypeVersionRequest): Promise<CreateValueTypeVersionResponse>;
