import { type ConjureContext } from "conjure-lite";
import type { MaterializeObjectSetRequest } from "../MaterializeObjectSetRequest.js";
import type { MaterializeObjectSetResponse } from "../MaterializeObjectSetResponse.js";
/**
* Materialize an object set.
*/
export declare function materializeObjectSet(ctx: ConjureContext, request: MaterializeObjectSetRequest): Promise<MaterializeObjectSetResponse>;
