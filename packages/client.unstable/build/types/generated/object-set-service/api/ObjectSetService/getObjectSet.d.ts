import { type ConjureContext } from "conjure-lite";
import type { GetObjectSetResponse } from "../GetObjectSetResponse.js";
import type { ObjectSetRid } from "../ObjectSetRid.js";
/**
* Returns the definition of this object set.
*/
export declare function getObjectSet(ctx: ConjureContext, objectSetRid: ObjectSetRid): Promise<GetObjectSetResponse>;
