import type { ActionTypeAuthScope } from "./ActionTypeAuthScope.js";
import type { AuthScopeRemovalPatch } from "./AuthScopeRemovalPatch.js";
export interface ActionTypeAuthScopePatch_addedOrUpdated {
	type: "addedOrUpdated";
	addedOrUpdated: ActionTypeAuthScope;
}
export interface ActionTypeAuthScopePatch_removed {
	type: "removed";
	removed: AuthScopeRemovalPatch;
}
export type ActionTypeAuthScopePatch = ActionTypeAuthScopePatch_addedOrUpdated | ActionTypeAuthScopePatch_removed;
