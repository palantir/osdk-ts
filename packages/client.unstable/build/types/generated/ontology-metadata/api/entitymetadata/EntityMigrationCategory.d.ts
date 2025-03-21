import type { ObjectStorageV1 } from "./ObjectStorageV1.js";
import type { ReadOnlyV1V2 } from "./ReadOnlyV1V2.js";
export interface EntityMigrationCategory_objectStorageV1 {
	type: "objectStorageV1";
	objectStorageV1: ObjectStorageV1;
}
export interface EntityMigrationCategory_readOnlyV1V2 {
	type: "readOnlyV1V2";
	readOnlyV1V2: ReadOnlyV1V2;
}
/**
* Migration category depending on the previous targetStorageBackend setting.
*/
export type EntityMigrationCategory = EntityMigrationCategory_objectStorageV1 | EntityMigrationCategory_readOnlyV1V2;
