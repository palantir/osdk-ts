import { AddObject } from "./AddObject";
import { ModifyObject } from "./ModifyObject";
import { AddLink } from "./AddLink";

export interface ObjectEdit_AddObject extends AddObject {
    type: "addObject";
}

function isAddObject(obj: ObjectEdit): obj is ObjectEdit_AddObject {
    return (obj.type === "addObject");
}

export interface ObjectEdit_ModifyObject extends ModifyObject {
    type: "modifyObject";
}

function isModifyObject(obj: ObjectEdit): obj is ObjectEdit_ModifyObject {
    return (obj.type === "modifyObject");
}

export interface ObjectEdit_AddLink extends AddLink {
    type: "addLink";
}

function isAddLink(obj: ObjectEdit): obj is ObjectEdit_AddLink {
    return (obj.type === "addLink");
}

export interface ObjectEditVisitor<T> {
    addObject: (obj: AddObject) => T;
    modifyObject: (obj: ModifyObject) => T;
    addLink: (obj: AddLink) => T;
    unknown: (obj: ObjectEdit) => T;
}

function visit<T>(obj: ObjectEdit, visitor: ObjectEditVisitor<T>): T {
    if (isAddObject(obj)) {
        return visitor.addObject(obj);
    }

    if (isModifyObject(obj)) {
        return visitor.modifyObject(obj);
    }

    if (isAddLink(obj)) {
        return visitor.addLink(obj);
    }

    return visitor.unknown(obj);
}

export type ObjectEdit = ObjectEdit_AddObject | ObjectEdit_ModifyObject | ObjectEdit_AddLink;

export const ObjectEdit = {
    isAddObject: isAddObject,
    isModifyObject: isModifyObject,
    isAddLink: isAddLink,
    visit: visit,
};
