import type { PatchOperation } from "./PatchOperation.js";
import type { Principal } from "./Principal.js";
/**
* A patch to add or remove a viewer role grant on a website repository.
*/
export interface WebsiteViewerGrantPatch {
	principal: Principal;
	patchOperation: PatchOperation;
}
