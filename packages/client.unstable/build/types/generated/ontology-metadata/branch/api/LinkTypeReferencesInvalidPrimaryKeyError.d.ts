import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An error representing when the primary key specified by a link type doesn't exist as a property on the specified object type or if the specified primary key is not actually the primary key on the object.
*/
export interface LinkTypeReferencesInvalidPrimaryKeyError {
	primaryKeyObjectType: ObjectTypeRid;
	foreignKeyObjectType: ObjectTypeRid;
	linkType: LinkTypeRid;
}
