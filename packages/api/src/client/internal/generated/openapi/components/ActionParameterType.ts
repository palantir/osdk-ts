import { ActionParameterArrayType } from "./ActionParameterArrayType";
import { AttachmentType } from "./AttachmentType";
import { BooleanType } from "./BooleanType";
import { DateType } from "./DateType";
import { DoubleType } from "./DoubleType";
import { IntegerType } from "./IntegerType";
import { LongType } from "./LongType";
import { OntologyObjectSetType } from "./OntologyObjectSetType";
import { OntologyObjectType } from "./OntologyObjectType";
import { StringType } from "./StringType";
import { TimestampType } from "./TimestampType";

export interface ActionParameterType_Array extends ActionParameterArrayType {
    type: "array";
}

function isArray(obj: ActionParameterType): obj is ActionParameterType_Array {
    return (obj.type === "array");
}

export interface ActionParameterType_Attachment extends AttachmentType {
    type: "attachment";
}

function isAttachment(obj: ActionParameterType): obj is ActionParameterType_Attachment {
    return (obj.type === "attachment");
}

export interface ActionParameterType_Boolean extends BooleanType {
    type: "boolean";
}

function isBoolean(obj: ActionParameterType): obj is ActionParameterType_Boolean {
    return (obj.type === "boolean");
}

export interface ActionParameterType_Date extends DateType {
    type: "date";
}

function isDate(obj: ActionParameterType): obj is ActionParameterType_Date {
    return (obj.type === "date");
}

export interface ActionParameterType_Double extends DoubleType {
    type: "double";
}

function isDouble(obj: ActionParameterType): obj is ActionParameterType_Double {
    return (obj.type === "double");
}

export interface ActionParameterType_Integer extends IntegerType {
    type: "integer";
}

function isInteger(obj: ActionParameterType): obj is ActionParameterType_Integer {
    return (obj.type === "integer");
}

export interface ActionParameterType_Long extends LongType {
    type: "long";
}

function isLong(obj: ActionParameterType): obj is ActionParameterType_Long {
    return (obj.type === "long");
}

export interface ActionParameterType_ObjectSet extends OntologyObjectSetType {
    type: "objectSet";
}

function isObjectSet(obj: ActionParameterType): obj is ActionParameterType_ObjectSet {
    return (obj.type === "objectSet");
}

export interface ActionParameterType_Object extends OntologyObjectType {
    type: "object";
}

function isObject(obj: ActionParameterType): obj is ActionParameterType_Object {
    return (obj.type === "object");
}

export interface ActionParameterType_String extends StringType {
    type: "string";
}

function isString(obj: ActionParameterType): obj is ActionParameterType_String {
    return (obj.type === "string");
}

export interface ActionParameterType_Timestamp extends TimestampType {
    type: "timestamp";
}

function isTimestamp(obj: ActionParameterType): obj is ActionParameterType_Timestamp {
    return (obj.type === "timestamp");
}

export interface ActionParameterTypeVisitor<T> {
    array: (obj: ActionParameterArrayType) => T;
    attachment: (obj: AttachmentType) => T;
    boolean: (obj: BooleanType) => T;
    date: (obj: DateType) => T;
    double: (obj: DoubleType) => T;
    integer: (obj: IntegerType) => T;
    long: (obj: LongType) => T;
    objectSet: (obj: OntologyObjectSetType) => T;
    object: (obj: OntologyObjectType) => T;
    string: (obj: StringType) => T;
    timestamp: (obj: TimestampType) => T;
    unknown: (obj: ActionParameterType) => T;
}

function visit<T>(obj: ActionParameterType, visitor: ActionParameterTypeVisitor<T>): T {
    if (isArray(obj)) {
        return visitor.array(obj);
    }

    if (isAttachment(obj)) {
        return visitor.attachment(obj);
    }

    if (isBoolean(obj)) {
        return visitor.boolean(obj);
    }

    if (isDate(obj)) {
        return visitor.date(obj);
    }

    if (isDouble(obj)) {
        return visitor.double(obj);
    }

    if (isInteger(obj)) {
        return visitor.integer(obj);
    }

    if (isLong(obj)) {
        return visitor.long(obj);
    }

    if (isObjectSet(obj)) {
        return visitor.objectSet(obj);
    }

    if (isObject(obj)) {
        return visitor.object(obj);
    }

    if (isString(obj)) {
        return visitor.string(obj);
    }

    if (isTimestamp(obj)) {
        return visitor.timestamp(obj);
    }

    return visitor.unknown(obj);
}

export type ActionParameterType = ActionParameterType_Array | ActionParameterType_Attachment | ActionParameterType_Boolean | ActionParameterType_Date | ActionParameterType_Double | ActionParameterType_Integer | ActionParameterType_Long | ActionParameterType_ObjectSet | ActionParameterType_Object | ActionParameterType_String | ActionParameterType_Timestamp;

export const ActionParameterType = {
    isArray: isArray,
    isAttachment: isAttachment,
    isBoolean: isBoolean,
    isDate: isDate,
    isDouble: isDouble,
    isInteger: isInteger,
    isLong: isLong,
    isObjectSet: isObjectSet,
    isObject: isObject,
    isString: isString,
    isTimestamp: isTimestamp,
    visit: visit,
};
