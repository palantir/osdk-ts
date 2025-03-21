import type { StreamName } from "./blockdata/StreamName.js";
import type { ColumnName } from "./ColumnName.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { RetentionPolicy } from "./RetentionPolicy.js";
/**
* Many to many link type datasource that is backed by a stream, uniquely identified by its StreamLocator.
*/
export interface OntologyIrManyToManyLinkTypeStreamDatasource {
	retentionPolicy: RetentionPolicy;
	streamLocator: StreamName;
	objectTypeAPrimaryKeyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
	objectTypeBPrimaryKeyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
}
