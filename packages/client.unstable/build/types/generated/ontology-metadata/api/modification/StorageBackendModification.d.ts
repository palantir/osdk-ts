import type { ObjectStorageV1Modification } from "./ObjectStorageV1Modification.js";
import type { ObjectStorageV2Modification } from "./ObjectStorageV2Modification.js";
import type { ReadOnlyV1V2Modification } from "./ReadOnlyV1V2Modification.js";
export interface StorageBackendModification_objectStorageV1 {
	type: "objectStorageV1";
	objectStorageV1: ObjectStorageV1Modification;
}
export interface StorageBackendModification_readOnlyV1V2 {
	type: "readOnlyV1V2";
	readOnlyV1V2: ReadOnlyV1V2Modification;
}
export interface StorageBackendModification_objectStorageV2 {
	type: "objectStorageV2";
	objectStorageV2: ObjectStorageV2Modification;
}
/**
* Indicates which Objects Storage should be used for storing this entity.
*/
export type StorageBackendModification = StorageBackendModification_objectStorageV1 | StorageBackendModification_readOnlyV1V2 | StorageBackendModification_objectStorageV2;
