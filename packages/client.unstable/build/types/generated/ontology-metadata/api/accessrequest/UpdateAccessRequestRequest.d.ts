import type { AccessSubRequestUpdate } from "./AccessSubRequestUpdate.js";
/**
* An update to an access request.
*/
export interface UpdateAccessRequestRequest {
	subRequestUpdates: Array<AccessSubRequestUpdate>;
}
