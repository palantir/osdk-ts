import { AnyType } from "./AnyType";
import { ModelApiArrayType } from "./ModelApiArrayType";
import { BooleanType } from "./BooleanType";
import { DateType } from "./DateType";
import { FloatType } from "./FloatType";
import { IntegerType } from "./IntegerType";
import { ModelApiMapType } from "./ModelApiMapType";
import { ModelApiNullType } from "./ModelApiNullType";
import { StringType } from "./StringType";
import { ModelApiStructType } from "./ModelApiStructType";
import { TimestampType } from "./TimestampType";
import { ModelApiUnionType } from "./ModelApiUnionType";

export interface ModelApiType_Any extends AnyType {
    type: "any";
}

function isAny(obj: ModelApiType): obj is ModelApiType_Any {
    return (obj.type === "any");
}

export interface ModelApiType_Array extends ModelApiArrayType {
    type: "array";
}

function isArray(obj: ModelApiType): obj is ModelApiType_Array {
    return (obj.type === "array");
}

export interface ModelApiType_Boolean extends BooleanType {
    type: "boolean";
}

function isBoolean(obj: ModelApiType): obj is ModelApiType_Boolean {
    return (obj.type === "boolean");
}

export interface ModelApiType_Date extends DateType {
    type: "date";
}

function isDate(obj: ModelApiType): obj is ModelApiType_Date {
    return (obj.type === "date");
}

export interface ModelApiType_Float extends FloatType {
    type: "float";
}

function isFloat(obj: ModelApiType): obj is ModelApiType_Float {
    return (obj.type === "float");
}

export interface ModelApiType_Integer extends IntegerType {
    type: "integer";
}

function isInteger(obj: ModelApiType): obj is ModelApiType_Integer {
    return (obj.type === "integer");
}

export interface ModelApiType_Map extends ModelApiMapType {
    type: "map";
}

function isMap(obj: ModelApiType): obj is ModelApiType_Map {
    return (obj.type === "map");
}

export interface ModelApiType_Null extends ModelApiNullType {
    type: "null";
}

function isNull(obj: ModelApiType): obj is ModelApiType_Null {
    return (obj.type === "null");
}

export interface ModelApiType_String extends StringType {
    type: "string";
}

function isString(obj: ModelApiType): obj is ModelApiType_String {
    return (obj.type === "string");
}

export interface ModelApiType_Struct extends ModelApiStructType {
    type: "struct";
}

function isStruct(obj: ModelApiType): obj is ModelApiType_Struct {
    return (obj.type === "struct");
}

export interface ModelApiType_Timestamp extends TimestampType {
    type: "timestamp";
}

function isTimestamp(obj: ModelApiType): obj is ModelApiType_Timestamp {
    return (obj.type === "timestamp");
}

export interface ModelApiType_Union extends ModelApiUnionType {
    type: "union";
}

function isUnion(obj: ModelApiType): obj is ModelApiType_Union {
    return (obj.type === "union");
}

export interface ModelApiTypeVisitor<T> {
    any: (obj: AnyType) => T;
    array: (obj: ModelApiArrayType) => T;
    boolean: (obj: BooleanType) => T;
    date: (obj: DateType) => T;
    float: (obj: FloatType) => T;
    integer: (obj: IntegerType) => T;
    map: (obj: ModelApiMapType) => T;
    null: (obj: ModelApiNullType) => T;
    string: (obj: StringType) => T;
    struct: (obj: ModelApiStructType) => T;
    timestamp: (obj: TimestampType) => T;
    union: (obj: ModelApiUnionType) => T;
    unknown: (obj: ModelApiType) => T;
}

function visit<T>(obj: ModelApiType, visitor: ModelApiTypeVisitor<T>): T {
    if (isAny(obj)) {
        return visitor.any(obj);
    }

    if (isArray(obj)) {
        return visitor.array(obj);
    }

    if (isBoolean(obj)) {
        return visitor.boolean(obj);
    }

    if (isDate(obj)) {
        return visitor.date(obj);
    }

    if (isFloat(obj)) {
        return visitor.float(obj);
    }

    if (isInteger(obj)) {
        return visitor.integer(obj);
    }

    if (isMap(obj)) {
        return visitor.map(obj);
    }

    if (isNull(obj)) {
        return visitor.null(obj);
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

    return visitor.unknown(obj);
}

export type ModelApiType = ModelApiType_Any | ModelApiType_Array | ModelApiType_Boolean | ModelApiType_Date | ModelApiType_Float | ModelApiType_Integer | ModelApiType_Map | ModelApiType_Null | ModelApiType_String | ModelApiType_Struct | ModelApiType_Timestamp | ModelApiType_Union;

export const ModelApiType = {
    isAny: isAny,
    isArray: isArray,
    isBoolean: isBoolean,
    isDate: isDate,
    isFloat: isFloat,
    isInteger: isInteger,
    isMap: isMap,
    isNull: isNull,
    isString: isString,
    isStruct: isStruct,
    isTimestamp: isTimestamp,
    isUnion: isUnion,
    visit: visit,
};
