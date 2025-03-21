import type { DatasourceRid } from "../../api/DatasourceRid.js";
import type { EntityTypeRid } from "../../api/EntityTypeRid.js";
import type { EntityVersion } from "../../api/EntityVersion.js";
import type { LoggableEntityPrimaryKey } from "../../loggable/LoggableEntityPrimaryKey.js";
/**
* Property values other than primary key values are not included in the audit version of a
* PatchableFoundryEntity to avoid dropping audit logs due to them being too large.
*/
export interface AuditPatchableFoundryEntity {
	entityTypeRid: EntityTypeRid;
	primaryKey: LoggableEntityPrimaryKey;
	version: EntityVersion;
	isAlive: boolean;
	datasourceRids: Array<DatasourceRid>;
}
