import type { ObjectVersionV1 } from "./ObjectVersionV1.js";
export interface ObjectVersion_v1 {
	type: "v1";
	v1: ObjectVersionV1;
}
/**
* Version of the returned object.
* It is guaranteed that the object has not changed as long as the returned value is the same.
*/
export type ObjectVersion = ObjectVersion_v1;
