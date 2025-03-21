import type { ActionsObjectSet } from "./ActionsObjectSet.js";
/**
* Only allows Objects that are in this Dynamic Object Set at Execution time.
*/
export interface ParameterObjectQuery {
	objectSet: ActionsObjectSet | undefined;
}
