import { LinkTypeApiName } from "./LinkTypeApiName";
import { ObjectTypeApiName } from "./ObjectTypeApiName";

export interface DeleteLinkRule {
    linkTypeApiNameAtoB: LinkTypeApiName;
    linkTypeApiNameBtoA: LinkTypeApiName;
    aSideObjectTypeApiName: ObjectTypeApiName;
    bSideObjectTypeApiName: ObjectTypeApiName;
}
