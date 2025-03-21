import type { ColumnName } from "../../api/ColumnName.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { RestrictedViewRid } from "../../api/RestrictedViewRid.js";
/**
* The restricted view backing the object has a policy which references the column name of a column
* which is not mapped to any property of the object.
*/
export interface GpsPolicyColumnsFromRestrictedViewsAreMappedError {
	restrictedViewRidToMissingColumnNames: Record<RestrictedViewRid, Array<ColumnName>>;
	objectTypeRid: ObjectTypeRid;
}
