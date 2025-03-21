import type { StructFieldRid } from "./StructFieldRid.js";
/**
* The mapping which designated what struct fields will get which values in the all edited properties log.
*/
export interface AllEditedObjectsFieldMapping {
	objectTypeRid: StructFieldRid;
	primaryKeyValue: StructFieldRid;
	primaryKeyType: StructFieldRid;
}
