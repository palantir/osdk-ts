import type { DataSetName } from "./blockdata/DataSetName.js";
import type { BranchId } from "./BranchId.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrPropertySecurityGroups } from "./OntologyIrPropertySecurityGroups.js";
import type { PropertyTypeMappingInfo } from "./PropertyTypeMappingInfo.js";
/**
* Object type datasource supporting edit only property types, that is backed by a dataset in foundry,
* uniquely identified by its rid and branch, and uses PropertySecurityGroups to allow grouping those properties
* into different security levels. It is only compatible with object storage v2, hence does not have a
* writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
*/
export interface OntologyIrObjectTypeDatasetDatasourceV3 {
	branchId: BranchId;
	datasetRid: DataSetName;
	propertyMapping: Record<ObjectTypeFieldApiName, PropertyTypeMappingInfo>;
	propertySecurityGroups: OntologyIrPropertySecurityGroups | undefined;
}
