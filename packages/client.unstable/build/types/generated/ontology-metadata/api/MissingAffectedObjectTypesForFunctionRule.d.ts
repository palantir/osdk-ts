import type { FunctionRid } from "./FunctionRid.js";
import type { FunctionVersion } from "./FunctionVersion.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
export interface MissingAffectedObjectTypesForFunctionRule {
	functionVersion: FunctionVersion;
	functionRid: FunctionRid;
	missingAffectedObjectTypes: Array<ObjectTypeRid>;
}
