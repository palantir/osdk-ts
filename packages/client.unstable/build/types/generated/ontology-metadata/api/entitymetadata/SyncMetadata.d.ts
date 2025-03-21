import type { ObjectDbType } from "./ObjectDbType.js";
import type { ObjectDbTypeSyncConfig } from "./ObjectDbTypeSyncConfig.js";
/**
* Used by services to set up additional Funnel syncs to ObjectDbs.
*/
export interface SyncMetadata {
	objectDbTypeSyncConfig: Record<ObjectDbType, ObjectDbTypeSyncConfig>;
}
