import type { GetDependenciesForTaggedDependentResponseV2Success } from "./GetDependenciesForTaggedDependentResponseV2Success.js";
import type { GetDependenciesForTaggedDependentResponseV2TagNotFound } from "./GetDependenciesForTaggedDependentResponseV2TagNotFound.js";
export interface GetDependenciesForTaggedDependentResponseV2_success {
	type: "success";
	success: GetDependenciesForTaggedDependentResponseV2Success;
}
export interface GetDependenciesForTaggedDependentResponseV2_tagNotFound {
	type: "tagNotFound";
	tagNotFound: GetDependenciesForTaggedDependentResponseV2TagNotFound;
}
export type GetDependenciesForTaggedDependentResponseV2 = GetDependenciesForTaggedDependentResponseV2_success | GetDependenciesForTaggedDependentResponseV2_tagNotFound;
