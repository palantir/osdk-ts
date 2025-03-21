import type { EditsOnlyRid } from "./EditsOnlyRid.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrPropertySecurityGroups } from "./OntologyIrPropertySecurityGroups.js";
/**
* Object type datasource which is not backed by any dataset or restricted view. This type of a "datasource"
* only supports edits-only properties, and uses PropertySecurityGroups to allow grouping those properties into
* different security levels.
*
* This type is only compatible with object storage v2.
*/
export interface OntologyIrObjectTypeEditsOnlyDatasource {
	editsOnlyRid: EditsOnlyRid | undefined;
	properties: Array<ObjectTypeFieldApiName>;
	propertySecurityGroups: OntologyIrPropertySecurityGroups;
}
