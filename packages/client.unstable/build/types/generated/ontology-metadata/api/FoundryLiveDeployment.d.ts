import type { LiveDeploymentRid } from "./LiveDeploymentRid.js";
export interface FoundryLiveDeployment {
	rid: LiveDeploymentRid;
	inputParamName: string;
	outputParamName: string;
}
