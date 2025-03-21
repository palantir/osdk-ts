import type { StreamName } from "./blockdata/StreamName.js";
import type { ColumnName } from "./ColumnName.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { RetentionPolicy } from "./RetentionPolicy.js";
/**
* Object type datasource that is backed by a stream in foundry, uniquely identified by its locator.
*/
export interface OntologyIrObjectTypeStreamDatasource {
	streamLocator: StreamName;
	propertyMapping: Record<ObjectTypeFieldApiName, ColumnName>;
	retentionPolicy: RetentionPolicy;
}
