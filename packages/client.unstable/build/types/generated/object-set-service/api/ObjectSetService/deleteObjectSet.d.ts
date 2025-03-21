import { type ConjureContext } from "conjure-lite";
import type { ObjectSetRid } from "../ObjectSetRid.js";
/**
* Deletes this object set, causing future operations which access it to fail.
*/
export declare function deleteObjectSet(ctx: ConjureContext, objectSetRid: ObjectSetRid): Promise<void>;
