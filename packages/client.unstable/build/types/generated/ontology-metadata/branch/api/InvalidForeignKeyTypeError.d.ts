import type { BasePropertyType } from "../../api/BasePropertyType.js";
import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An error representing when the foreign key property is an invalid type.
*/
export interface InvalidForeignKeyTypeError {
	primaryKeyObjectType: ObjectTypeRid;
	foreignKeyObjectType: ObjectTypeRid;
	linkType: LinkTypeRid;
	foreignKeyPropertyType: BasePropertyType;
}
