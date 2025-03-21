import type { ColumnName } from "./ColumnName.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { RetentionPolicy } from "./RetentionPolicy.js";
import type { StreamLocator } from "./StreamLocator.js";
/**
* Object type datasource that is backed by a stream in foundry, uniquely identified by its locator.
*/
export interface ObjectTypeStreamDatasource {
	streamLocator: StreamLocator;
	propertyMapping: Record<PropertyTypeRid, ColumnName>;
	retentionPolicy: RetentionPolicy;
}
