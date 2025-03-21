import type { ResolvedFilterParameter } from "./ResolvedFilterParameter.js";
import type { UnresolvedFilterParameter } from "./UnresolvedFilterParameter.js";
export interface FilterParameter_unresolved {
	type: "unresolved";
	unresolved: UnresolvedFilterParameter;
}
export interface FilterParameter_resolved {
	type: "resolved";
	resolved: ResolvedFilterParameter;
}
export type FilterParameter = FilterParameter_unresolved | FilterParameter_resolved;
