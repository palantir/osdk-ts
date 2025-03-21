import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
/**
* The foreign key is a derived property type, this is not allowed.
*/
export interface InvalidDerivedForeignKeyError {
	primaryKeyObjectType: ObjectTypeRid;
	foreignKeyObjectType: ObjectTypeRid;
	linkType: LinkTypeRid;
	foreignKeyPropertyTypeId: PropertyTypeId;
}
