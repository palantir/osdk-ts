import type { ApplicationVersion } from "./ApplicationVersion.js";
import type { Attribution } from "./Attribution.js";
export interface ApplicationVersionMetadata {
	applicationVersion: ApplicationVersion;
	created: Attribution;
}
