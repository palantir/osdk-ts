import { AddObject } from "./AddObject";
import { ModifyObject } from "./ModifyObject";
import { AddLink } from "./AddLink";

export interface ObjectEdit_AddObject extends AddObject {
    type: "addObject";
}

export interface ObjectEdit_ModifyObject extends ModifyObject {
    type: "modifyObject";
}

export interface ObjectEdit_AddLink extends AddLink {
    type: "addLink";
}

export type ObjectEdit = ObjectEdit_AddObject | ObjectEdit_ModifyObject | ObjectEdit_AddLink;
