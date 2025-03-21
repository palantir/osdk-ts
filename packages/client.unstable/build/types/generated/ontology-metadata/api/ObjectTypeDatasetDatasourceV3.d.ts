import type { BranchId } from "./BranchId.js";
import type { DatasetRid } from "./DatasetRid.js";
import type { PropertySecurityGroups } from "./PropertySecurityGroups.js";
import type { PropertyTypeMappingInfo } from "./PropertyTypeMappingInfo.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* Object type datasource supporting edit only property types, that is backed by a dataset in foundry,
* uniquely identified by its rid and branch, and uses PropertySecurityGroups to allow grouping those properties
* into different security levels. It is only compatible with object storage v2, hence does not have a
* writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
*/
export interface ObjectTypeDatasetDatasourceV3 {
	branchId: BranchId;
	datasetRid: DatasetRid;
	propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
	propertySecurityGroups: PropertySecurityGroups | undefined;
}
