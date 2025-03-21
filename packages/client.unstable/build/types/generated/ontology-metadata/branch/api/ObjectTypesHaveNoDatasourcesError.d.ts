import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An error representing when an object type has no datasources.
*/
export interface ObjectTypesHaveNoDatasourcesError {
	objectType: ObjectTypeRid;
}
