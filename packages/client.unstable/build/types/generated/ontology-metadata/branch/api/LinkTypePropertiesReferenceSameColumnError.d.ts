import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
/**
* An error when the properties of a link type reference the same backing column.
*/
export interface LinkTypePropertiesReferenceSameColumnError {
	linkType: LinkTypeRid;
}
