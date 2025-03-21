import type { LinkTypeId } from "../../api/LinkTypeId.js";
import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* The derived properties definition is referring to link type that does not exist or is deleted.
*/
export interface LinkTypeInDerivedPropertyDefinitionNotFoundOrDeletedError {
	objectType: ObjectTypeRid;
	linkTypeId: LinkTypeId | undefined;
	linkTypeRid: LinkTypeRid | undefined;
}
