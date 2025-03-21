import type { ObjectPrimaryKeyV2 } from "./ObjectPrimaryKeyV2.js";
import type { ObjectRid } from "./ObjectRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { ObjectVersion } from "./ObjectVersion.js";
import type { PropertyId } from "./PropertyId.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { PropertyValue } from "./PropertyValue.js";
/**
* A Foundry object.
*/
export interface FoundryObject {
	objectRid: ObjectRid | undefined;
	objectTypeRid: ObjectTypeRid;
	primaryKey: ObjectPrimaryKeyV2;
	title: string;
	properties: Record<PropertyTypeRid, PropertyValue>;
	runtimeDerivedProperties: Record<PropertyId, PropertyValue>;
	score: number | undefined;
	version: ObjectVersion;
}
