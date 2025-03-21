import type { FunctionRid } from "./FunctionRid.js";
import type { FunctionVersion } from "./FunctionVersion.js";
export interface FunctionReference {
	functionRid: FunctionRid;
	functionVersion: FunctionVersion;
}
