import type { ColumnName } from "../ColumnName.js";
import type { DatasetRid } from "../DatasetRid.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
/**
* Deprecated in favor of ObjectTypeDatasetDatasourceV2Modification
*/
export interface ObjectTypeDatasetDatasourceModification {
	datasetRid: DatasetRid;
	propertyMapping: Record<PropertyTypeId, ColumnName>;
	writebackDatasetRid: DatasetRid | undefined;
}
