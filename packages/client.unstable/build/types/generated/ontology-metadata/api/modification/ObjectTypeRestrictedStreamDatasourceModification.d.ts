import type { ColumnName } from "../ColumnName.js";
import type { PolicyVersion } from "../PolicyVersion.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { RestrictedViewRid } from "../RestrictedViewRid.js";
import type { RetentionPolicy } from "../RetentionPolicy.js";
import type { StreamLocator } from "../StreamLocator.js";
export interface ObjectTypeRestrictedStreamDatasourceModification {
	streamLocator: StreamLocator;
	restrictedViewRid: RestrictedViewRid;
	policyVersion: PolicyVersion;
	propertyMapping: Record<PropertyTypeId, ColumnName>;
	retentionPolicy: RetentionPolicy;
}
