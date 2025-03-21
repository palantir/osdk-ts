import type { ColumnName } from "../ColumnName.js";
import type { DatasetRid } from "../DatasetRid.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { RestrictedViewRid } from "../RestrictedViewRid.js";
/**
* Deprecated in favor of ObjectTypeRestrictedViewDatasourceV2Modification
*/
export interface ObjectTypeRestrictedViewDatasourceModification {
	restrictedViewRid: RestrictedViewRid;
	propertyMapping: Record<PropertyTypeId, ColumnName>;
	writebackDatasetRid: DatasetRid | undefined;
}
