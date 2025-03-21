import type { ObjectSetRid } from "./ObjectSetRid.js";
/**
* A bulk request for getting object sets identified by given object set rids.
*/
export interface GetBulkObjectSetRequest {
	objectSetRids: Array<ObjectSetRid>;
}
