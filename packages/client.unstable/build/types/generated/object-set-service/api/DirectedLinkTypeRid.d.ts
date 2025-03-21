import type { LinkSide } from "./LinkSide.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
/**
* Information that specifies side of the given link type rid
*/
export interface DirectedLinkTypeRid {
	linkTypeRid: LinkTypeRid;
	linkSide: LinkSide;
}
