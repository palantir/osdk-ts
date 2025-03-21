import type { EditsOnlyRid } from "./EditsOnlyRid.js";
import type { PropertySecurityGroups } from "./PropertySecurityGroups.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* Object type datasource which is not backed by any dataset or restricted view. This type of a "datasource"
* only supports edits-only properties, and uses PropertySecurityGroups to allow grouping those properties into
* different security levels.
*
* This type is only compatible with object storage v2.
*/
export interface ObjectTypeEditsOnlyDatasource {
	editsOnlyRid: EditsOnlyRid | undefined;
	properties: Array<PropertyTypeRid>;
	propertySecurityGroups: PropertySecurityGroups;
}
