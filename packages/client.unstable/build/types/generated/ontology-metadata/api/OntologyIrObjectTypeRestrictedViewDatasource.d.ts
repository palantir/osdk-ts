import type { DataSetName } from "./blockdata/DataSetName.js";
import type { RestrictedViewName } from "./blockdata/RestrictedViewName.js";
import type { ColumnName } from "./ColumnName.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
/**
* Object type datasource that is backed by a restricted view in foundry, uniquely identified by its rid.
* Deprecated in favor of ObjectTypeRestrictedViewDatasourceV2
*/
export interface OntologyIrObjectTypeRestrictedViewDatasource {
	restrictedViewRid: RestrictedViewName;
	propertyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
	writebackDatasetRid: DataSetName | undefined;
}
