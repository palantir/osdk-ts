import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { StructFieldRid } from "./StructFieldRid.js";
export interface StructFieldApiNameOrRid_rid {
	type: "rid";
	rid: StructFieldRid;
}
export interface StructFieldApiNameOrRid_apiName {
	type: "apiName";
	apiName: ObjectTypeFieldApiName;
}
export type StructFieldApiNameOrRid = StructFieldApiNameOrRid_rid | StructFieldApiNameOrRid_apiName;
