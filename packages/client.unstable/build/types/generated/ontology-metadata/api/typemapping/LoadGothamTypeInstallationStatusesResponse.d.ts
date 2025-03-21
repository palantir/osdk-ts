import type { CaseSensitiveGothamObjectTypeUri } from "./CaseSensitiveGothamObjectTypeUri.js";
import type { CaseSensitiveGothamPropertyTypeUri } from "./CaseSensitiveGothamPropertyTypeUri.js";
import type { GothamTypeInstallStatusWithVersion } from "./GothamTypeInstallStatusWithVersion.js";
/**
* The installation statuses along with the versions of the types queried, indexed by the type URI.
*/
export interface LoadGothamTypeInstallationStatusesResponse {
	objectTypeStatuses: Record<CaseSensitiveGothamObjectTypeUri, GothamTypeInstallStatusWithVersion>;
	propertyTypeStatuses: Record<CaseSensitiveGothamPropertyTypeUri, GothamTypeInstallStatusWithVersion>;
}
