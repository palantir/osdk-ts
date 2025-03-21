import type { DirectSourceRid } from "./DirectSourceRid.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrPropertySecurityGroups } from "./OntologyIrPropertySecurityGroups.js";
import type { PropertyTypeMappingInfo } from "./PropertyTypeMappingInfo.js";
/**
* Object type datasource which is backed by a "direct write" source, such as an edge pipeline. This type
* of a datasource uses PropertySecurityGroups to allow grouping its properties into different security levels.
* This type is only compatible with object storage v2.
*/
export interface OntologyIrObjectTypeDirectDatasource {
	directSourceRid: DirectSourceRid;
	propertyMapping: Record<ObjectTypeFieldApiName, PropertyTypeMappingInfo>;
	propertySecurityGroups: OntologyIrPropertySecurityGroups;
}
