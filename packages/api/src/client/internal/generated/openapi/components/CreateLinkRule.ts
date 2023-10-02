import { LinkTypeApiName } from "./LinkTypeApiName";
import { ObjectTypeApiName } from "./ObjectTypeApiName";

/** */
export type CreateLinkRule = { linkTypeApiNameAtoB: LinkTypeApiName; linkTypeApiNameBtoA: LinkTypeApiName; aSideObjectTypeApiName: ObjectTypeApiName; bSideObjectTypeApiName: ObjectTypeApiName; };
