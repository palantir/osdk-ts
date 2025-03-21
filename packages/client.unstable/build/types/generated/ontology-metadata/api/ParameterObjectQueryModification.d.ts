import type { ActionsObjectSetModification } from "./ActionsObjectSetModification.js";
/**
* Only allows Objects that are in this Dynamic Object Set at Execution time.
*/
export interface ParameterObjectQueryModification {
	objectSet: ActionsObjectSetModification | undefined;
}
