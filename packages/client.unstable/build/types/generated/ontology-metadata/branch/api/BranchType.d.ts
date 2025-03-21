import type { BuilderServiceBranch } from "./BuilderServiceBranch.js";
export interface BranchType_builder {
	type: "builder";
	builder: BuilderServiceBranch;
}
/**
* The service that is creating the branch
*/
export type BranchType = BranchType_builder;
