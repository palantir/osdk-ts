import type { AuthScopeRemovalPatch } from "./AuthScopeRemovalPatch.js";
import type { FunctionAuthScope } from "./FunctionAuthScope.js";
export interface FunctionAuthScopePatch_addedOrUpdated {
	type: "addedOrUpdated";
	addedOrUpdated: FunctionAuthScope;
}
export interface FunctionAuthScopePatch_removed {
	type: "removed";
	removed: AuthScopeRemovalPatch;
}
export type FunctionAuthScopePatch = FunctionAuthScopePatch_addedOrUpdated | FunctionAuthScopePatch_removed;
