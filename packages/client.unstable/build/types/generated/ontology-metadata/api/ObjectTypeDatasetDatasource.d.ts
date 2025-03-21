import type { BranchId } from "./BranchId.js";
import type { ColumnName } from "./ColumnName.js";
import type { DatasetRid } from "./DatasetRid.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* Object type datasource that is backed by a dataset in foundry, uniquely identified by its rid and
* branch.
* Deprecated in favor of ObjectTypeDatasetDatasourceV2
*/
export interface ObjectTypeDatasetDatasource {
	branchId: BranchId;
	datasetRid: DatasetRid;
	propertyMapping: Record<PropertyTypeRid, ColumnName>;
	writebackDatasetRid: DatasetRid | undefined;
}
