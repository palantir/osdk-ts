import type { BuilderPipelineRid } from "../../api/BuilderPipelineRid.js";
/**
* The service that is creating the branch
*/
export interface BuilderServiceBranch {
	builderPipelineRid: BuilderPipelineRid;
}
