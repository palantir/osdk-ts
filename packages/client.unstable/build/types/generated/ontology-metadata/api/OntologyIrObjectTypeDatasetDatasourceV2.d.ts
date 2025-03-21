import type { DataSetName } from "./blockdata/DataSetName.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { PropertyTypeMappingInfo } from "./PropertyTypeMappingInfo.js";
/**
* Object type datasource supporting edit only property types, that is backed by a dataset in foundry,
* uniquely identified by its rid and branch. It is only compatible with object storage v2, hence does not
* have a writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
*/
export interface OntologyIrObjectTypeDatasetDatasourceV2 {
	datasetRid: DataSetName;
	propertyMapping: Record<ObjectTypeFieldApiName, PropertyTypeMappingInfo>;
}
