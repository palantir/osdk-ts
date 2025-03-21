import type { FunctionRid } from "../../api/FunctionRid.js";
import type { FunctionVersion } from "../../api/FunctionVersion.js";
/**
* A `WorkflowFunction` is a type to uniquely represent a `Function` in a `Workflow` definition.
*/
export interface WorkflowFunction {
	rid: FunctionRid;
	version: FunctionVersion;
}
