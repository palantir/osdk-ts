import type { BasePropertyType } from "../../api/BasePropertyType.js";
import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An error representing when the primary key and foreign key properties have different types.
*/
export interface PrimaryAndForeignKeyTypeMismatchError {
	primaryKeyObjectType: ObjectTypeRid;
	foreignKeyObjectType: ObjectTypeRid;
	linkType: LinkTypeRid;
	primaryKeyPropertyType: BasePropertyType;
	foreignKeyPropertyType: BasePropertyType;
}
