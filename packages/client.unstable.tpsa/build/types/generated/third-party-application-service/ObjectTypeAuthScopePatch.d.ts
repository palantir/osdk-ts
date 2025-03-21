import type { AuthScopeRemovalPatch } from "./AuthScopeRemovalPatch.js";
import type { ObjectTypeAuthScope } from "./ObjectTypeAuthScope.js";
export interface ObjectTypeAuthScopePatch_addedOrUpdated {
	type: "addedOrUpdated";
	addedOrUpdated: ObjectTypeAuthScope;
}
export interface ObjectTypeAuthScopePatch_removed {
	type: "removed";
	removed: AuthScopeRemovalPatch;
}
export type ObjectTypeAuthScopePatch = ObjectTypeAuthScopePatch_addedOrUpdated | ObjectTypeAuthScopePatch_removed;
