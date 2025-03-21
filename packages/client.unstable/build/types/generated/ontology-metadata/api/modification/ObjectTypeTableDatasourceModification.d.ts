import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { PropertyTypeMappingInfo } from "../PropertyTypeMappingInfo.js";
import type { TableRid } from "../TableRid.js";
/**
* Object type datasource that is backed by a Table, uniquely identified by its rid.
*/
export interface ObjectTypeTableDatasourceModification {
	tableRid: TableRid;
	propertyMapping: Record<PropertyTypeId, PropertyTypeMappingInfo>;
}
