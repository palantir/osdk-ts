import type { DatasetRid } from "../DatasetRid.js";
import type { PropertySecurityGroupsModification } from "../PropertySecurityGroupsModification.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { PropertyTypeMappingInfo } from "../PropertyTypeMappingInfo.js";
export interface ObjectTypeDatasetDatasourceV3Modification {
	datasetRid: DatasetRid;
	propertyMapping: Record<PropertyTypeId, PropertyTypeMappingInfo>;
	propertySecurityGroups: PropertySecurityGroupsModification | undefined;
}
