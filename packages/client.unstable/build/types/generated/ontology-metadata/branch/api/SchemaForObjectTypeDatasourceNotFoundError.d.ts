import type { DatasourceRid } from "../../api/DatasourceRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An error representing when the schema for a datasource on an object type cannot be found. For most datasources, the datasource identifier on the master branch is used to load the schema. On non-default branches for datasources that are datasets, the datasource BranchId is used (if one is configured for the branch); if the schema cannot be loaded in this case, the master branch of the dataset will be used instead.
*/
export interface SchemaForObjectTypeDatasourceNotFoundError {
	datasource: DatasourceRid;
	objectType: ObjectTypeRid;
}
