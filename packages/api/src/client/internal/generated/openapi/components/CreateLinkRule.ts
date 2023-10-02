import { LinkTypeApiName } from "./LinkTypeApiName";
import { ObjectTypeApiName } from "./ObjectTypeApiName";

export interface CreateLinkRule {
    linkTypeApiNameAtoB: LinkTypeApiName;
    linkTypeApiNameBtoA: LinkTypeApiName;
    aSideObjectTypeApiName: ObjectTypeApiName;
    bSideObjectTypeApiName: ObjectTypeApiName;
}
