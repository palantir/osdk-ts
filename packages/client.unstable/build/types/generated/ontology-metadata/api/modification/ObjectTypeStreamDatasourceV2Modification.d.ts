import type { ColumnName } from "../ColumnName.js";
import type { PropertySecurityGroupsModification } from "../PropertySecurityGroupsModification.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { RetentionPolicy } from "../RetentionPolicy.js";
import type { StreamLocator } from "../StreamLocator.js";
export interface ObjectTypeStreamDatasourceV2Modification {
	streamLocator: StreamLocator;
	propertyMapping: Record<PropertyTypeId, ColumnName>;
	propertySecurityGroups: PropertySecurityGroupsModification | undefined;
	retentionPolicy: RetentionPolicy | undefined;
}
