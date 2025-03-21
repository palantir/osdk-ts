import type { ObjectDbType } from "./ObjectDbType.js";
import type { ObjectDbTypeSyncConfig } from "./ObjectDbTypeSyncConfig.js";
/**
* Contains ObjectDB Sync (This is a Funnel concept - check Objects Data Funnel documentation for more
* details) configurations for a particular ObjectType or LinkType. This modification carries out a complete
* overwrite of the existing Sync config Map with the provided Map in this request.
*/
export interface SyncMetadataModification {
	objectDbTypeSyncConfigs: Record<ObjectDbType, ObjectDbTypeSyncConfig>;
}
