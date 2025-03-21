import type { WorkshopModuleRid } from "./WorkshopModuleRid.js";
/**
* While Workshops are versioned resources, embedding a Workshop
* today does not allow users to specify a version.
*/
export interface WorkshopReference {
	workshopRid: WorkshopModuleRid;
}
