import type { BranchId } from "./BranchId.js";
import type { PropertyTypeMappingInfo } from "./PropertyTypeMappingInfo.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { TableRid } from "./TableRid.js";
/**
* Object type datasource that is backed by a table in foundry, uniquely identified by its locator.
* Supports edit only property types through PropertyTypeMappingInfo.
*/
export interface ObjectTypeTableDatasource {
	branchId: BranchId;
	propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
	tableRid: TableRid;
}
