import { CreateObjectRule } from "./CreateObjectRule";
import { ModifyObjectRule } from "./ModifyObjectRule";
import { DeleteObjectRule } from "./DeleteObjectRule";
import { CreateLinkRule } from "./CreateLinkRule";
import { DeleteLinkRule } from "./DeleteLinkRule";

export interface LogicRule_CreateObject extends CreateObjectRule {
    type: "createObject";
}

function isCreateObject(obj: LogicRule): obj is LogicRule_CreateObject {
    return (obj.type === "createObject");
}

function createObject(obj: CreateObjectRule): LogicRule_CreateObject {
    return {
        ...obj,
        type: "createObject",
    };
}

export interface LogicRule_ModifyObject extends ModifyObjectRule {
    type: "modifyObject";
}

function isModifyObject(obj: LogicRule): obj is LogicRule_ModifyObject {
    return (obj.type === "modifyObject");
}

function modifyObject(obj: ModifyObjectRule): LogicRule_ModifyObject {
    return {
        ...obj,
        type: "modifyObject",
    };
}

export interface LogicRule_DeleteObject extends DeleteObjectRule {
    type: "deleteObject";
}

function isDeleteObject(obj: LogicRule): obj is LogicRule_DeleteObject {
    return (obj.type === "deleteObject");
}

function deleteObject(obj: DeleteObjectRule): LogicRule_DeleteObject {
    return {
        ...obj,
        type: "deleteObject",
    };
}

export interface LogicRule_CreateLink extends CreateLinkRule {
    type: "createLink";
}

function isCreateLink(obj: LogicRule): obj is LogicRule_CreateLink {
    return (obj.type === "createLink");
}

function createLink(obj: CreateLinkRule): LogicRule_CreateLink {
    return {
        ...obj,
        type: "createLink",
    };
}

export interface LogicRule_DeleteLink extends DeleteLinkRule {
    type: "deleteLink";
}

function isDeleteLink(obj: LogicRule): obj is LogicRule_DeleteLink {
    return (obj.type === "deleteLink");
}

function deleteLink(obj: DeleteLinkRule): LogicRule_DeleteLink {
    return {
        ...obj,
        type: "deleteLink",
    };
}

export interface LogicRuleVisitor<T> {
    createObject: (obj: CreateObjectRule) => T;
    modifyObject: (obj: ModifyObjectRule) => T;
    deleteObject: (obj: DeleteObjectRule) => T;
    createLink: (obj: CreateLinkRule) => T;
    deleteLink: (obj: DeleteLinkRule) => T;
    unknown: (obj: LogicRule) => T;
}

function visit<T>(obj: LogicRule, visitor: LogicRuleVisitor<T>): T {
    if (isCreateObject(obj)) {
        return visitor.createObject(obj);
    }

    if (isModifyObject(obj)) {
        return visitor.modifyObject(obj);
    }

    if (isDeleteObject(obj)) {
        return visitor.deleteObject(obj);
    }

    if (isCreateLink(obj)) {
        return visitor.createLink(obj);
    }

    if (isDeleteLink(obj)) {
        return visitor.deleteLink(obj);
    }

    return visitor.unknown(obj);
}

export type LogicRule = LogicRule_CreateObject | LogicRule_ModifyObject | LogicRule_DeleteObject | LogicRule_CreateLink | LogicRule_DeleteLink;

export const LogicRule = {
    isCreateObject: isCreateObject,
    createObject: createObject,
    isModifyObject: isModifyObject,
    modifyObject: modifyObject,
    isDeleteObject: isDeleteObject,
    deleteObject: deleteObject,
    isCreateLink: isCreateLink,
    createLink: createLink,
    isDeleteLink: isDeleteLink,
    deleteLink: deleteLink,
    visit: visit,
};
