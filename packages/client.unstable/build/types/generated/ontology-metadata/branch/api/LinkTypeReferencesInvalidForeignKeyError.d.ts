import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An error representing when the foreign key specified by a link type doesn't exist as a property on the specified object type.
*/
export interface LinkTypeReferencesInvalidForeignKeyError {
	primaryKeyObjectType: ObjectTypeRid;
	foreignKeyObjectType: ObjectTypeRid;
	linkType: LinkTypeRid;
}
