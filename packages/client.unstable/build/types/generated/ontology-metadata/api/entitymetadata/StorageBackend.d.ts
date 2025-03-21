import type { ObjectStorageV1 } from "./ObjectStorageV1.js";
import type { ObjectStorageV2 } from "./ObjectStorageV2.js";
import type { ReadOnlyV1V2 } from "./ReadOnlyV1V2.js";
export interface StorageBackend_objectStorageV1 {
	type: "objectStorageV1";
	objectStorageV1: ObjectStorageV1;
}
export interface StorageBackend_readOnlyV1V2 {
	type: "readOnlyV1V2";
	readOnlyV1V2: ReadOnlyV1V2;
}
export interface StorageBackend_objectStorageV2 {
	type: "objectStorageV2";
	objectStorageV2: ObjectStorageV2;
}
/**
* Storage backend intended to be used for the Entity. This is used to indicate whether
* an entity can be stored in Phonograph or Highbury.
*/
export type StorageBackend = StorageBackend_objectStorageV1 | StorageBackend_readOnlyV1V2 | StorageBackend_objectStorageV2;
