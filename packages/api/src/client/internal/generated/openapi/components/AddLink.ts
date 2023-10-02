import { LinkTypeApiName } from "./LinkTypeApiName";
import { LinkSideObject } from "./LinkSideObject";

/** */
export type AddLink = { linkTypeApiNameAtoB: LinkTypeApiName; linkTypeApiNameBtoA: LinkTypeApiName; aSideObject: LinkSideObject; bSideObject: LinkSideObject; };
