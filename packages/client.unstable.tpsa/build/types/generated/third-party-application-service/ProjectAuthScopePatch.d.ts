import type { AuthScopeRemovalPatch } from "./AuthScopeRemovalPatch.js";
import type { ProjectAdditionReason } from "./ProjectAdditionReason.js";
export interface ProjectAuthScopePatch_addedOrUpdated {
	type: "addedOrUpdated";
	addedOrUpdated: Array<ProjectAdditionReason>;
}
export interface ProjectAuthScopePatch_removed {
	type: "removed";
	removed: AuthScopeRemovalPatch;
}
export type ProjectAuthScopePatch = ProjectAuthScopePatch_addedOrUpdated | ProjectAuthScopePatch_removed;
