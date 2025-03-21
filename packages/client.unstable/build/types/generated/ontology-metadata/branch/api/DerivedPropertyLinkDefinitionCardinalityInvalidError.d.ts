import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* The link type in the derived property definition is not valid for the derived property definition.
* For example, aggregation must be performed on a "many" side of a link, and linked property
* must be on an "one" side.
*/
export interface DerivedPropertyLinkDefinitionCardinalityInvalidError {
	objectTypeRid: ObjectTypeRid;
	linkTypeRid: LinkTypeRid;
}
