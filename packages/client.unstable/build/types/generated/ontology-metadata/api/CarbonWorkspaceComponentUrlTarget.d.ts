import type { RidUrlTarget } from "./RidUrlTarget.js";
export interface CarbonWorkspaceComponentUrlTarget_rid {
	type: "rid";
	rid: RidUrlTarget;
}
/**
* The second part of a carbon workspace Url target.
*/
export type CarbonWorkspaceComponentUrlTarget = CarbonWorkspaceComponentUrlTarget_rid;
