import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An error representing when an object type has too many datasources.
*/
export interface ObjectTypesHaveTooManyDatasourcesError {
	objectType: ObjectTypeRid;
	numberOfDatasources: number;
	maxDatasources: number;
}
