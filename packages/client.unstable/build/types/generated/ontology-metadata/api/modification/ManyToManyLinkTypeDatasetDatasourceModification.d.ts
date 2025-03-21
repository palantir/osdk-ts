import type { ColumnName } from "../ColumnName.js";
import type { DatasetRid } from "../DatasetRid.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
export interface ManyToManyLinkTypeDatasetDatasourceModification {
	datasetRid: DatasetRid;
	objectTypeAPrimaryKeyMapping: Record<PropertyTypeId, ColumnName>;
	objectTypeBPrimaryKeyMapping: Record<PropertyTypeId, ColumnName>;
	writebackDatasetRid: DatasetRid | undefined;
}
