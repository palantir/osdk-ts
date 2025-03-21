import type { SharedPropertyTypeSoftLinkType } from "./SharedPropertyTypeSoftLinkType.js";
export interface SoftLinkType_sharedPropertyType {
	type: "sharedPropertyType";
	sharedPropertyType: SharedPropertyTypeSoftLinkType;
}
/**
* The type of SoftLink. Information on what is generating the relationship between the two properties.
*/
export type SoftLinkType = SoftLinkType_sharedPropertyType;
