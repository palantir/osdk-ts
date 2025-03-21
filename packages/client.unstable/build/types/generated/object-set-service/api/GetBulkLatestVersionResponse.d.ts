import type { GetBulkLatestVersionResponseEntry } from "./GetBulkLatestVersionResponseEntry.js";
import type { VersionedObjectSetRid } from "./VersionedObjectSetRid.js";
/**
* Response to GetBulkLatestVersionRequest, containing a map from from versioned object set rid to responses for queried versioned object sets.
*/
export interface GetBulkLatestVersionResponse {
	latestVersionResponses: Record<VersionedObjectSetRid, GetBulkLatestVersionResponseEntry>;
}
