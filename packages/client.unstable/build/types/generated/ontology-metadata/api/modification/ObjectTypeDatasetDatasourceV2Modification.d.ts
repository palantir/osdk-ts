import type { DatasetRid } from "../DatasetRid.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { PropertyTypeMappingInfo } from "../PropertyTypeMappingInfo.js";
export interface ObjectTypeDatasetDatasourceV2Modification {
	datasetRid: DatasetRid;
	propertyMapping: Record<PropertyTypeId, PropertyTypeMappingInfo>;
}
