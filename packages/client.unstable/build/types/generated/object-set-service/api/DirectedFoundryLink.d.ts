import type { FoundryLink } from "./FoundryLink.js";
import type { LinkSide } from "./LinkSide.js";
/**
* A Foundry link with link side specified
*/
export interface DirectedFoundryLink {
	linkSide: LinkSide;
	link: FoundryLink;
}
