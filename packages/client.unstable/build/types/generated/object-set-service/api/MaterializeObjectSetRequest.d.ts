import type { ObjectSetContext } from "./ObjectSetContext.js";
import type { ObjectSetRid } from "./ObjectSetRid.js";
export interface MaterializeObjectSetRequest {
	objectSetRid: ObjectSetRid;
	objectSetContext: ObjectSetContext | undefined;
	securityRid: string;
}
