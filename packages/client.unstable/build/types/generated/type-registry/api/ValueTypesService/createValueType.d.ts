import { type ConjureContext } from "conjure-lite";
import type { CreateValueTypeRequest } from "../CreateValueTypeRequest.js";
import type { CreateValueTypeResponse } from "../CreateValueTypeResponse.js";
/**
* Creates a completely new Value Type.
*/
export declare function createValueType(ctx: ConjureContext, request: CreateValueTypeRequest): Promise<CreateValueTypeResponse>;
