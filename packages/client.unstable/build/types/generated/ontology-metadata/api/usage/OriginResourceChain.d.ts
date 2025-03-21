import type { OriginResource } from "./OriginResource.js";
export interface OriginResourceChain_originResourceHierarchy {
	type: "originResourceHierarchy";
	originResourceHierarchy: Array<OriginResource>;
}
/**
* Fully identifies an origin of usage. Can be used to represent a parent-child relationship between
* different resources.
*/
export type OriginResourceChain = OriginResourceChain_originResourceHierarchy;
