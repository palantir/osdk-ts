import type { ColumnName } from "./ColumnName.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { RetentionPolicy } from "./RetentionPolicy.js";
import type { StreamLocator } from "./StreamLocator.js";
/**
* Many to many link type datasource that is backed by a stream, uniquely identified by its StreamLocator.
*/
export interface ManyToManyLinkTypeStreamDatasource {
	retentionPolicy: RetentionPolicy;
	streamLocator: StreamLocator;
	objectTypeAPrimaryKeyMapping: Record<PropertyTypeRid, ColumnName>;
	objectTypeBPrimaryKeyMapping: Record<PropertyTypeRid, ColumnName>;
}
