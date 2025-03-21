import type { ColumnName } from "./ColumnName.js";
import type { PolicyVersion } from "./PolicyVersion.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { RestrictedViewRid } from "./RestrictedViewRid.js";
import type { RetentionPolicy } from "./RetentionPolicy.js";
import type { StreamLocator } from "./StreamLocator.js";
/**
* Object type datasource representing a restricted view on top of a stream.
*/
export interface ObjectTypeRestrictedStreamDatasource {
	restrictedViewRid: RestrictedViewRid;
	policyVersion: PolicyVersion;
	streamLocator: StreamLocator;
	propertyMapping: Record<PropertyTypeRid, ColumnName>;
	retentionPolicy: RetentionPolicy;
}
