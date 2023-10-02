import { QueryArrayType } from "./QueryArrayType";
import { AttachmentType } from "./AttachmentType";
import { BooleanType } from "./BooleanType";
import { DateType } from "./DateType";
import { DoubleType } from "./DoubleType";
import { FloatType } from "./FloatType";
import { IntegerType } from "./IntegerType";
import { LongType } from "./LongType";
import { OntologyObjectSetType } from "./OntologyObjectSetType";
import { OntologyObjectType } from "./OntologyObjectType";
import { QuerySetType } from "./QuerySetType";
import { StringType } from "./StringType";
import { QueryStructType } from "./QueryStructType";
import { TimestampType } from "./TimestampType";
import { QueryUnionType } from "./QueryUnionType";
import { NullType } from "./NullType";
import { UnsupportedType } from "./UnsupportedType";

export interface QueryDataType_Array extends QueryArrayType {
    type: "array";
}

function isArray(obj: QueryDataType): obj is QueryDataType_Array {
    return (obj.type === "array");
}

function array(obj: QueryArrayType): QueryDataType_Array {
    return {
        ...obj,
        type: "array",
    };
}

export interface QueryDataType_Attachment extends AttachmentType {
    type: "attachment";
}

function isAttachment(obj: QueryDataType): obj is QueryDataType_Attachment {
    return (obj.type === "attachment");
}

function attachment(obj: AttachmentType): QueryDataType_Attachment {
    return {
        ...obj,
        type: "attachment",
    };
}

export interface QueryDataType_Boolean extends BooleanType {
    type: "boolean";
}

function isBoolean(obj: QueryDataType): obj is QueryDataType_Boolean {
    return (obj.type === "boolean");
}

function boolean(obj: BooleanType): QueryDataType_Boolean {
    return {
        ...obj,
        type: "boolean",
    };
}

export interface QueryDataType_Date extends DateType {
    type: "date";
}

function isDate(obj: QueryDataType): obj is QueryDataType_Date {
    return (obj.type === "date");
}

function date(obj: DateType): QueryDataType_Date {
    return {
        ...obj,
        type: "date",
    };
}

export interface QueryDataType_Double extends DoubleType {
    type: "double";
}

function isDouble(obj: QueryDataType): obj is QueryDataType_Double {
    return (obj.type === "double");
}

function double(obj: DoubleType): QueryDataType_Double {
    return {
        ...obj,
        type: "double",
    };
}

export interface QueryDataType_Float extends FloatType {
    type: "float";
}

function isFloat(obj: QueryDataType): obj is QueryDataType_Float {
    return (obj.type === "float");
}

function float(obj: FloatType): QueryDataType_Float {
    return {
        ...obj,
        type: "float",
    };
}

export interface QueryDataType_Integer extends IntegerType {
    type: "integer";
}

function isInteger(obj: QueryDataType): obj is QueryDataType_Integer {
    return (obj.type === "integer");
}

function integer(obj: IntegerType): QueryDataType_Integer {
    return {
        ...obj,
        type: "integer",
    };
}

export interface QueryDataType_Long extends LongType {
    type: "long";
}

function isLong(obj: QueryDataType): obj is QueryDataType_Long {
    return (obj.type === "long");
}

function long(obj: LongType): QueryDataType_Long {
    return {
        ...obj,
        type: "long",
    };
}

export interface QueryDataType_ObjectSet extends OntologyObjectSetType {
    type: "objectSet";
}

function isObjectSet(obj: QueryDataType): obj is QueryDataType_ObjectSet {
    return (obj.type === "objectSet");
}

function objectSet(obj: OntologyObjectSetType): QueryDataType_ObjectSet {
    return {
        ...obj,
        type: "objectSet",
    };
}

export interface QueryDataType_Object extends OntologyObjectType {
    type: "object";
}

function isObject(obj: QueryDataType): obj is QueryDataType_Object {
    return (obj.type === "object");
}

function object(obj: OntologyObjectType): QueryDataType_Object {
    return {
        ...obj,
        type: "object",
    };
}

export interface QueryDataType_Set extends QuerySetType {
    type: "set";
}

function isSet(obj: QueryDataType): obj is QueryDataType_Set {
    return (obj.type === "set");
}

function set(obj: QuerySetType): QueryDataType_Set {
    return {
        ...obj,
        type: "set",
    };
}

export interface QueryDataType_String extends StringType {
    type: "string";
}

function isString(obj: QueryDataType): obj is QueryDataType_String {
    return (obj.type === "string");
}

function string(obj: StringType): QueryDataType_String {
    return {
        ...obj,
        type: "string",
    };
}

export interface QueryDataType_Struct extends QueryStructType {
    type: "struct";
}

function isStruct(obj: QueryDataType): obj is QueryDataType_Struct {
    return (obj.type === "struct");
}

function struct(obj: QueryStructType): QueryDataType_Struct {
    return {
        ...obj,
        type: "struct",
    };
}

export interface QueryDataType_Timestamp extends TimestampType {
    type: "timestamp";
}

function isTimestamp(obj: QueryDataType): obj is QueryDataType_Timestamp {
    return (obj.type === "timestamp");
}

function timestamp(obj: TimestampType): QueryDataType_Timestamp {
    return {
        ...obj,
        type: "timestamp",
    };
}

export interface QueryDataType_Union extends QueryUnionType {
    type: "union";
}

function isUnion(obj: QueryDataType): obj is QueryDataType_Union {
    return (obj.type === "union");
}

function union(obj: QueryUnionType): QueryDataType_Union {
    return {
        ...obj,
        type: "union",
    };
}

export interface QueryDataType_Null extends NullType {
    type: "null";
}

function isNull(obj: QueryDataType): obj is QueryDataType_Null {
    return (obj.type === "null");
}

function null_(obj: NullType): QueryDataType_Null {
    return {
        ...obj,
        type: "null",
    };
}

export interface QueryDataType_Unsupported extends UnsupportedType {
    type: "unsupported";
}

function isUnsupported(obj: QueryDataType): obj is QueryDataType_Unsupported {
    return (obj.type === "unsupported");
}

function unsupported(obj: UnsupportedType): QueryDataType_Unsupported {
    return {
        ...obj,
        type: "unsupported",
    };
}

export interface QueryDataTypeVisitor<T> {
    array: (obj: QueryArrayType) => T;
    attachment: (obj: AttachmentType) => T;
    boolean: (obj: BooleanType) => T;
    date: (obj: DateType) => T;
    double: (obj: DoubleType) => T;
    float: (obj: FloatType) => T;
    integer: (obj: IntegerType) => T;
    long: (obj: LongType) => T;
    objectSet: (obj: OntologyObjectSetType) => T;
    object: (obj: OntologyObjectType) => T;
    set: (obj: QuerySetType) => T;
    string: (obj: StringType) => T;
    struct: (obj: QueryStructType) => T;
    timestamp: (obj: TimestampType) => T;
    union: (obj: QueryUnionType) => T;
    null: (obj: NullType) => T;
    unsupported: (obj: UnsupportedType) => T;
    unknown: (obj: QueryDataType) => T;
}

function visit<T>(obj: QueryDataType, visitor: QueryDataTypeVisitor<T>): T {
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

    if (isFloat(obj)) {
        return visitor.float(obj);
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

    if (isSet(obj)) {
        return visitor.set(obj);
    }

    if (isString(obj)) {
        return visitor.string(obj);
    }

    if (isStruct(obj)) {
        return visitor.struct(obj);
    }

    if (isTimestamp(obj)) {
        return visitor.timestamp(obj);
    }

    if (isUnion(obj)) {
        return visitor.union(obj);
    }

    if (isNull(obj)) {
        return visitor.null(obj);
    }

    if (isUnsupported(obj)) {
        return visitor.unsupported(obj);
    }

    return visitor.unknown(obj);
}

export type QueryDataType = QueryDataType_Array | QueryDataType_Attachment | QueryDataType_Boolean | QueryDataType_Date | QueryDataType_Double | QueryDataType_Float | QueryDataType_Integer | QueryDataType_Long | QueryDataType_ObjectSet | QueryDataType_Object | QueryDataType_Set | QueryDataType_String | QueryDataType_Struct | QueryDataType_Timestamp | QueryDataType_Union | QueryDataType_Null | QueryDataType_Unsupported;

export const QueryDataType = {
    isArray: isArray,
    array: array,
    isAttachment: isAttachment,
    attachment: attachment,
    isBoolean: isBoolean,
    boolean: boolean,
    isDate: isDate,
    date: date,
    isDouble: isDouble,
    double: double,
    isFloat: isFloat,
    float: float,
    isInteger: isInteger,
    integer: integer,
    isLong: isLong,
    long: long,
    isObjectSet: isObjectSet,
    objectSet: objectSet,
    isObject: isObject,
    object: object,
    isSet: isSet,
    set: set,
    isString: isString,
    string: string,
    isStruct: isStruct,
    struct: struct,
    isTimestamp: isTimestamp,
    timestamp: timestamp,
    isUnion: isUnion,
    union: union,
    isNull: isNull,
    null_: null_,
    isUnsupported: isUnsupported,
    unsupported: unsupported,
    visit: visit,
};
