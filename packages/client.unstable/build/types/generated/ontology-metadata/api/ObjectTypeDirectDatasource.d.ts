import type { DirectSourceRid } from "./DirectSourceRid.js";
import type { PropertySecurityGroups } from "./PropertySecurityGroups.js";
import type { PropertyTypeMappingInfo } from "./PropertyTypeMappingInfo.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* Object type datasource which is backed by a "direct write" source, such as an edge pipeline. This type
* of a datasource uses PropertySecurityGroups to allow grouping its properties into different security levels.
* This type is only compatible with object storage v2.
*/
export interface ObjectTypeDirectDatasource {
	directSourceRid: DirectSourceRid;
	propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
	propertySecurityGroups: PropertySecurityGroups;
}
