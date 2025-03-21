import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An error representing when an object type datasource does not include the primary key property of the
* corresponding object type.
*/
export interface ObjectTypeDatasourceWithoutPrimaryKeyColumnError {
	objectType: ObjectTypeRid;
	datasource: string;
}
