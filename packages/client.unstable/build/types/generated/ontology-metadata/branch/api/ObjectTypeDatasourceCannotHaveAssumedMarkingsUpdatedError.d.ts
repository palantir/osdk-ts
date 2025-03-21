import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* Object type datasources cannot have their assumed markings updated. Datasource needs to recreated with
* new rid, when the set of assumed marking changes.
*/
export interface ObjectTypeDatasourceCannotHaveAssumedMarkingsUpdatedError {
	objectType: ObjectTypeRid;
	datasource: string;
}
