import type { DatasourceRid } from "../DatasourceRid.js";
import type { EntityPrimaryKey } from "../EntityPrimaryKey.js";
import type { EntityTypeRid } from "../EntityTypeRid.js";
import type { EntityVersion } from "../EntityVersion.js";
import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { PropertyValue } from "../PropertyValue.js";
import type { InternalPropertyValue } from "./InternalPropertyValue.js";
/**
* Represents an object or a many-to-many link, in a format consumable for patching workflows with Funnel.
*/
export interface PatchableFoundryEntity {
	entityTypeRid: EntityTypeRid;
	primaryKey: EntityPrimaryKey;
	properties: Record<PropertyTypeRid, PropertyValue>;
	propertiesV2: Record<PropertyTypeRid, InternalPropertyValue>;
	version: EntityVersion;
	isAlive: boolean;
	authCode: Blob;
	patch: Blob | undefined;
	datasourceRids: Array<DatasourceRid>;
	invisibleDatasourceRids: Array<DatasourceRid>;
	invisibleProperties: Array<PropertyTypeRid>;
}
