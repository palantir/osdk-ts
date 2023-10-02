import { LinkTypeApiName } from "./LinkTypeApiName";
import { LinkSideObject } from "./LinkSideObject";

export interface AddLink {
    linkTypeApiNameAtoB: LinkTypeApiName;
    linkTypeApiNameBtoA: LinkTypeApiName;
    aSideObject: LinkSideObject;
    bSideObject: LinkSideObject;
}
