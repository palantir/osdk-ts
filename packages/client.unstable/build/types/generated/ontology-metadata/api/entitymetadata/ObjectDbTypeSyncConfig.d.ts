import type { ObjectDbSyncRid } from "../ObjectDbSyncRid.js";
import type { SyncConfig } from "./SyncConfig.js";
/**
* Allows services to set up Funnel syncs by ObjectDbSyncRid for the case where multiple syncs are
* requested per ObjectDbType.
*/
export interface ObjectDbTypeSyncConfig {
	syncConfig: Record<ObjectDbSyncRid, SyncConfig>;
}
