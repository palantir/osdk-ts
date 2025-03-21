import type { BranchId } from "./BranchId.js";
import type { ColumnName } from "./ColumnName.js";
import type { DatasetRid } from "./DatasetRid.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* Many to many link type datasource that is backed by a dataset in foundry, uniquely identified by its rid and
* branch.
*/
export interface ManyToManyLinkTypeDatasetDatasource {
	branchId: BranchId;
	datasetRid: DatasetRid;
	objectTypeAPrimaryKeyMapping: Record<PropertyTypeRid, ColumnName>;
	objectTypeBPrimaryKeyMapping: Record<PropertyTypeRid, ColumnName>;
	writebackDatasetRid: DatasetRid | undefined;
}
