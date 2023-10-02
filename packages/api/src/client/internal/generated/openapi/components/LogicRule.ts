import { CreateObjectRule } from "./CreateObjectRule";
import { ModifyObjectRule } from "./ModifyObjectRule";
import { DeleteObjectRule } from "./DeleteObjectRule";
import { CreateLinkRule } from "./CreateLinkRule";
import { DeleteLinkRule } from "./DeleteLinkRule";

export interface LogicRule_CreateObject extends CreateObjectRule {
    type: "createObject";
}

export interface LogicRule_ModifyObject extends ModifyObjectRule {
    type: "modifyObject";
}

export interface LogicRule_DeleteObject extends DeleteObjectRule {
    type: "deleteObject";
}

export interface LogicRule_CreateLink extends CreateLinkRule {
    type: "createLink";
}

export interface LogicRule_DeleteLink extends DeleteLinkRule {
    type: "deleteLink";
}

export type LogicRule = LogicRule_CreateObject | LogicRule_ModifyObject | LogicRule_DeleteObject | LogicRule_CreateLink | LogicRule_DeleteLink;
