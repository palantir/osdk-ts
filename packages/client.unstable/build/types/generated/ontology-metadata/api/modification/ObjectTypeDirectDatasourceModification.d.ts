import type { DirectSourceRid } from "../DirectSourceRid.js";
import type { PropertySecurityGroupsModification } from "../PropertySecurityGroupsModification.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { PropertyTypeMappingInfo } from "../PropertyTypeMappingInfo.js";
export interface ObjectTypeDirectDatasourceModification {
	directSourceRid: DirectSourceRid;
	propertyMapping: Record<PropertyTypeId, PropertyTypeMappingInfo>;
	propertySecurityGroups: PropertySecurityGroupsModification;
}
