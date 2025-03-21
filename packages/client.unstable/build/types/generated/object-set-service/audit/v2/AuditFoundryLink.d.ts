import type { EntityTypeRid } from "../../api/EntityTypeRid.js";
import type { EntityVersion } from "../../api/EntityVersion.js";
import type { LoggableEntityPrimaryKey } from "../../loggable/LoggableEntityPrimaryKey.js";
import type { LoggableFoundryObjectReference } from "../../loggable/LoggableFoundryObjectReference.js";
export interface AuditFoundryLink {
	linkTypeRid: EntityTypeRid;
	primaryKey: LoggableEntityPrimaryKey;
	objectSideA: LoggableFoundryObjectReference;
	objectSideB: LoggableFoundryObjectReference;
	version: EntityVersion;
}
