import type { ColumnName } from "./ColumnName.js";
import type { DatasetRid } from "./DatasetRid.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { RestrictedViewRid } from "./RestrictedViewRid.js";
/**
* Object type datasource that is backed by a restricted view in foundry, uniquely identified by its rid.
* Deprecated in favor of ObjectTypeRestrictedViewDatasourceV2
*/
export interface ObjectTypeRestrictedViewDatasource {
	restrictedViewRid: RestrictedViewRid;
	propertyMapping: Record<PropertyTypeRid, ColumnName>;
	writebackDatasetRid: DatasetRid | undefined;
}
