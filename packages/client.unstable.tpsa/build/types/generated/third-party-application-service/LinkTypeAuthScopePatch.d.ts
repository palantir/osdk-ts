import type { AuthScopeRemovalPatch } from "./AuthScopeRemovalPatch.js";
import type { LinkTypeAuthScope } from "./LinkTypeAuthScope.js";
export interface LinkTypeAuthScopePatch_addedOrUpdated {
	type: "addedOrUpdated";
	addedOrUpdated: LinkTypeAuthScope;
}
export interface LinkTypeAuthScopePatch_removed {
	type: "removed";
	removed: AuthScopeRemovalPatch;
}
export type LinkTypeAuthScopePatch = LinkTypeAuthScopePatch_addedOrUpdated | LinkTypeAuthScopePatch_removed;
