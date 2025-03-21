import type { DataSetName } from "./blockdata/DataSetName.js";
import type { BranchId } from "./BranchId.js";
import type { ColumnName } from "./ColumnName.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
/**
* Object type datasource that is backed by a dataset in foundry, uniquely identified by its rid and
* branch.
* Deprecated in favor of ObjectTypeDatasetDatasourceV2
*/
export interface OntologyIrObjectTypeDatasetDatasource {
	branchId: BranchId;
	datasetRid: DataSetName;
	propertyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
	writebackDatasetRid: DataSetName | undefined;
}
