import type { BuilderPipelineRid } from "../../api/BuilderPipelineRid.js";
/**
* Indicates this branch was created by builder/eddie.
*/
export interface OwnerIdentifierBuilder {
	builderPipelineRid: BuilderPipelineRid;
}
