import type { EntityPrimaryKey } from "./EntityPrimaryKey.js";
import type { EntityTypeRid } from "./EntityTypeRid.js";
import type { EntityVersion } from "./EntityVersion.js";
import type { FoundryObjectReference } from "./FoundryObjectReference.js";
/**
* A Foundry link.
*/
export interface FoundryLink {
	linkTypeRid: EntityTypeRid;
	primaryKey: EntityPrimaryKey;
	objectSideA: FoundryObjectReference;
	objectSideB: FoundryObjectReference;
	version: EntityVersion;
}
