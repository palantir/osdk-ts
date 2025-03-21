import type { StreamName } from "./blockdata/StreamName.js";
import type { ColumnName } from "./ColumnName.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrPropertySecurityGroups } from "./OntologyIrPropertySecurityGroups.js";
import type { RetentionPolicy } from "./RetentionPolicy.js";
/**
* Object type datasource that is backed by a stream in foundry, uniquely identified by its locator.
* Supports property security groups and should be used instead of ObjectTypeRestrictedStreamDatasource
* when granular policies are needed.
*/
export interface OntologyIrObjectTypeStreamDatasourceV2 {
	streamLocator: StreamName;
	propertyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
	propertySecurityGroups: OntologyIrPropertySecurityGroups | undefined;
	retentionPolicy: RetentionPolicy;
}
