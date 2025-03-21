import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An error representing when a many-to-many link type datasource has a column referencing a primary key that
* does not exist on the referenced object type.
*/
export interface ManyToManyLinkTypeDatasourcePrimaryKeyMismatchError {
	objectType: ObjectTypeRid;
	linkType: LinkTypeRid;
	datasource: string;
}
