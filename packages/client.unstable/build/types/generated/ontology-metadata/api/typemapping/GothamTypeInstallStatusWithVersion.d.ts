import type { OntologyVersion } from "../OntologyVersion.js";
import type { GothamTypeInstallStatus } from "./GothamTypeInstallStatus.js";
import type { GothamUsageRestriction } from "./GothamUsageRestriction.js";
export interface GothamTypeInstallStatusWithVersion {
	status: GothamTypeInstallStatus;
	usageRestriction: GothamUsageRestriction | undefined;
	foundryVersion: OntologyVersion | undefined;
}
