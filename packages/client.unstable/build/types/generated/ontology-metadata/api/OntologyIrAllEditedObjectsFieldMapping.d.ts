import type { StructFieldRid } from "./StructFieldRid.js";
/**
* The mapping which designated what struct fields will get which values in the all edited properties log.
*/
export interface OntologyIrAllEditedObjectsFieldMapping {
	objectTypeRid: StructFieldRid;
	primaryKeyValue: StructFieldRid;
	primaryKeyType: StructFieldRid;
}
