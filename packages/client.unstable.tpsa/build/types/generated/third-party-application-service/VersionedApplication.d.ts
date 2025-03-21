import type { Application } from "./Application.js";
import type { ApplicationVersionMetadata } from "./ApplicationVersionMetadata.js";
export interface VersionedApplication {
	application: Application;
	metadata: ApplicationVersionMetadata;
}
