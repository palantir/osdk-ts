import { LinkTypeApiName } from "./LinkTypeApiName";
import { ObjectTypeApiName } from "./ObjectTypeApiName";

export type DeleteLinkRule = { linkTypeApiNameAtoB: LinkTypeApiName; linkTypeApiNameBtoA: LinkTypeApiName; aSideObjectTypeApiName: ObjectTypeApiName; bSideObjectTypeApiName: ObjectTypeApiName; };
