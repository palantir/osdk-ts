import type { EntityVersionV1 } from "./EntityVersionV1.js";
export interface EntityVersion_v1 {
	type: "v1";
	v1: EntityVersionV1;
}
/**
* Version of the returned object or many-to-many link.
* It is guaranteed that the entity has not changed as long as the returned value is the same.
*/
export type EntityVersion = EntityVersion_v1;
