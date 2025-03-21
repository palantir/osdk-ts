import type { ColumnName } from "./ColumnName.js";
import type { PropertySecurityGroups } from "./PropertySecurityGroups.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { RetentionPolicy } from "./RetentionPolicy.js";
import type { StreamLocator } from "./StreamLocator.js";
/**
* Object type datasource that is backed by a stream in foundry, uniquely identified by its locator.
* Supports property security groups and should be used instead of ObjectTypeRestrictedStreamDatasource
* when granular policies are needed.
*/
export interface ObjectTypeStreamDatasourceV2 {
	streamLocator: StreamLocator;
	propertyMapping: Record<PropertyTypeRid, ColumnName>;
	propertySecurityGroups: PropertySecurityGroups | undefined;
	retentionPolicy: RetentionPolicy;
}
