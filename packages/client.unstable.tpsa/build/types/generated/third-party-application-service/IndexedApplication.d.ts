import type { ApplicationRid } from "./ApplicationRid.js";
import type { Attribution } from "./Attribution.js";
export interface IndexedApplication {
	rid: ApplicationRid;
	name: string;
	description: string | undefined;
	lastModified: Attribution;
}
