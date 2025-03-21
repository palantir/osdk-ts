import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { PropertyTypeMappingInfo } from "../PropertyTypeMappingInfo.js";
import type { RestrictedViewRid } from "../RestrictedViewRid.js";
export interface ObjectTypeRestrictedViewDatasourceV2Modification {
	restrictedViewRid: RestrictedViewRid;
	propertyMapping: Record<PropertyTypeId, PropertyTypeMappingInfo>;
}
