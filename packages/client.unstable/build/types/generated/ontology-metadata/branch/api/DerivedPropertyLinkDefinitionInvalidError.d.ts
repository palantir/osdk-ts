import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* The link definition in the derived property definition is not compatible with the object type that the
* derived property definition belongs to. The link type specified must link the object type, and if a
* link type side is specified, it must be the opposite side from the current object type's side. The
* "source" side is always the side linking with the primary key.
*/
export interface DerivedPropertyLinkDefinitionInvalidError {
	objectTypeRid: ObjectTypeRid;
	linkTypeRid: LinkTypeRid;
}
