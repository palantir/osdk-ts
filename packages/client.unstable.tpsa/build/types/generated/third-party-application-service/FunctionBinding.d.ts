import type { FunctionApiName } from "./FunctionApiName.js";
import type { FunctionRid } from "./FunctionRid.js";
export interface FunctionBinding {
	localRid: FunctionRid;
	boundApiName: FunctionApiName;
}
