import type { ColumnName } from "../ColumnName.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { RetentionPolicy } from "../RetentionPolicy.js";
import type { StreamLocator } from "../StreamLocator.js";
export interface ManyToManyLinkTypeStreamDatasourceModification {
	streamLocator: StreamLocator;
	objectTypeAPrimaryKeyMapping: Record<PropertyTypeId, ColumnName>;
	objectTypeBPrimaryKeyMapping: Record<PropertyTypeId, ColumnName>;
	retentionPolicy: RetentionPolicy;
}
