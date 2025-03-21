import type { RestrictedViewName } from "./blockdata/RestrictedViewName.js";
import type { StreamName } from "./blockdata/StreamName.js";
import type { ColumnName } from "./ColumnName.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { PolicyVersion } from "./PolicyVersion.js";
import type { RetentionPolicy } from "./RetentionPolicy.js";
/**
* Object type datasource representing a restricted view on top of a stream.
*/
export interface OntologyIrObjectTypeRestrictedStreamDatasource {
	restrictedViewRid: RestrictedViewName;
	policyVersion: PolicyVersion;
	streamLocator: StreamName;
	propertyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
	retentionPolicy: RetentionPolicy;
}
