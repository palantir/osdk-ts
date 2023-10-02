import { AnyType } from "./AnyType";
import { BinaryType } from "./BinaryType";
import { BooleanType } from "./BooleanType";
import { ByteType } from "./ByteType";
import { DateType } from "./DateType";
import { DecimalType } from "./DecimalType";
import { DoubleType } from "./DoubleType";
import { FloatType } from "./FloatType";
import { IntegerType } from "./IntegerType";
import { LongType } from "./LongType";
import { ShortType } from "./ShortType";
import { StringType } from "./StringType";
import { TimestampType } from "./TimestampType";
import { OntologyArrayType } from "./OntologyArrayType";
import { OntologyMapType } from "./OntologyMapType";
import { OntologySetType } from "./OntologySetType";
import { OntologyStructType } from "./OntologyStructType";
import { OntologyObjectType } from "./OntologyObjectType";
import { OntologyObjectSetType } from "./OntologyObjectSetType";
import { UnsupportedType } from "./UnsupportedType";

export interface OntologyDataType_Any extends AnyType {
    type: "any";
}

function isAny(obj: OntologyDataType): obj is OntologyDataType_Any {
    return (obj.type === "any");
}

function any(obj: AnyType): OntologyDataType_Any {
    return {
        ...obj,
        type: "any",
    };
}

export interface OntologyDataType_Binary extends BinaryType {
    type: "binary";
}

function isBinary(obj: OntologyDataType): obj is OntologyDataType_Binary {
    return (obj.type === "binary");
}

function binary(obj: BinaryType): OntologyDataType_Binary {
    return {
        ...obj,
        type: "binary",
    };
}

export interface OntologyDataType_Boolean extends BooleanType {
    type: "boolean";
}

function isBoolean(obj: OntologyDataType): obj is OntologyDataType_Boolean {
    return (obj.type === "boolean");
}

function boolean(obj: BooleanType): OntologyDataType_Boolean {
    return {
        ...obj,
        type: "boolean",
    };
}

export interface OntologyDataType_Byte extends ByteType {
    type: "byte";
}

function isByte(obj: OntologyDataType): obj is OntologyDataType_Byte {
    return (obj.type === "byte");
}

function byte(obj: ByteType): OntologyDataType_Byte {
    return {
        ...obj,
        type: "byte",
    };
}

export interface OntologyDataType_Date extends DateType {
    type: "date";
}

function isDate(obj: OntologyDataType): obj is OntologyDataType_Date {
    return (obj.type === "date");
}

function date(obj: DateType): OntologyDataType_Date {
    return {
        ...obj,
        type: "date",
    };
}

export interface OntologyDataType_Decimal extends DecimalType {
    type: "decimal";
}

function isDecimal(obj: OntologyDataType): obj is OntologyDataType_Decimal {
    return (obj.type === "decimal");
}

function decimal(obj: DecimalType): OntologyDataType_Decimal {
    return {
        ...obj,
        type: "decimal",
    };
}

export interface OntologyDataType_Double extends DoubleType {
    type: "double";
}

function isDouble(obj: OntologyDataType): obj is OntologyDataType_Double {
    return (obj.type === "double");
}

function double(obj: DoubleType): OntologyDataType_Double {
    return {
        ...obj,
        type: "double",
    };
}

export interface OntologyDataType_Float extends FloatType {
    type: "float";
}

function isFloat(obj: OntologyDataType): obj is OntologyDataType_Float {
    return (obj.type === "float");
}

function float(obj: FloatType): OntologyDataType_Float {
    return {
        ...obj,
        type: "float",
    };
}

export interface OntologyDataType_Integer extends IntegerType {
    type: "integer";
}

function isInteger(obj: OntologyDataType): obj is OntologyDataType_Integer {
    return (obj.type === "integer");
}

function integer(obj: IntegerType): OntologyDataType_Integer {
    return {
        ...obj,
        type: "integer",
    };
}

export interface OntologyDataType_Long extends LongType {
    type: "long";
}

function isLong(obj: OntologyDataType): obj is OntologyDataType_Long {
    return (obj.type === "long");
}

function long(obj: LongType): OntologyDataType_Long {
    return {
        ...obj,
        type: "long",
    };
}

export interface OntologyDataType_Short extends ShortType {
    type: "short";
}

function isShort(obj: OntologyDataType): obj is OntologyDataType_Short {
    return (obj.type === "short");
}

function short(obj: ShortType): OntologyDataType_Short {
    return {
        ...obj,
        type: "short",
    };
}

export interface OntologyDataType_String extends StringType {
    type: "string";
}

function isString(obj: OntologyDataType): obj is OntologyDataType_String {
    return (obj.type === "string");
}

function string(obj: StringType): OntologyDataType_String {
    return {
        ...obj,
        type: "string",
    };
}

export interface OntologyDataType_Timestamp extends TimestampType {
    type: "timestamp";
}

function isTimestamp(obj: OntologyDataType): obj is OntologyDataType_Timestamp {
    return (obj.type === "timestamp");
}

function timestamp(obj: TimestampType): OntologyDataType_Timestamp {
    return {
        ...obj,
        type: "timestamp",
    };
}

export interface OntologyDataType_Array extends OntologyArrayType {
    type: "array";
}

function isArray(obj: OntologyDataType): obj is OntologyDataType_Array {
    return (obj.type === "array");
}

function array(obj: OntologyArrayType): OntologyDataType_Array {
    return {
        ...obj,
        type: "array",
    };
}

export interface OntologyDataType_Map extends OntologyMapType {
    type: "map";
}

function isMap(obj: OntologyDataType): obj is OntologyDataType_Map {
    return (obj.type === "map");
}

function map(obj: OntologyMapType): OntologyDataType_Map {
    return {
        ...obj,
        type: "map",
    };
}

export interface OntologyDataType_Set extends OntologySetType {
    type: "set";
}

function isSet(obj: OntologyDataType): obj is OntologyDataType_Set {
    return (obj.type === "set");
}

function set(obj: OntologySetType): OntologyDataType_Set {
    return {
        ...obj,
        type: "set",
    };
}

export interface OntologyDataType_Struct extends OntologyStructType {
    type: "struct";
}

function isStruct(obj: OntologyDataType): obj is OntologyDataType_Struct {
    return (obj.type === "struct");
}

function struct(obj: OntologyStructType): OntologyDataType_Struct {
    return {
        ...obj,
        type: "struct",
    };
}

export interface OntologyDataType_Object extends OntologyObjectType {
    type: "object";
}

function isObject(obj: OntologyDataType): obj is OntologyDataType_Object {
    return (obj.type === "object");
}

function object(obj: OntologyObjectType): OntologyDataType_Object {
    return {
        ...obj,
        type: "object",
    };
}

export interface OntologyDataType_ObjectSet extends OntologyObjectSetType {
    type: "objectSet";
}

function isObjectSet(obj: OntologyDataType): obj is OntologyDataType_ObjectSet {
    return (obj.type === "objectSet");
}

function objectSet(obj: OntologyObjectSetType): OntologyDataType_ObjectSet {
    return {
        ...obj,
        type: "objectSet",
    };
}

export interface OntologyDataType_Unsupported extends UnsupportedType {
    type: "unsupported";
}

function isUnsupported(obj: OntologyDataType): obj is OntologyDataType_Unsupported {
    return (obj.type === "unsupported");
}

function unsupported(obj: UnsupportedType): OntologyDataType_Unsupported {
    return {
        ...obj,
        type: "unsupported",
    };
}

export interface OntologyDataTypeVisitor<T> {
    any: (obj: AnyType) => T;
    binary: (obj: BinaryType) => T;
    boolean: (obj: BooleanType) => T;
    byte: (obj: ByteType) => T;
    date: (obj: DateType) => T;
    decimal: (obj: DecimalType) => T;
    double: (obj: DoubleType) => T;
    float: (obj: FloatType) => T;
    integer: (obj: IntegerType) => T;
    long: (obj: LongType) => T;
    short: (obj: ShortType) => T;
    string: (obj: StringType) => T;
    timestamp: (obj: TimestampType) => T;
    array: (obj: OntologyArrayType) => T;
    map: (obj: OntologyMapType) => T;
    set: (obj: OntologySetType) => T;
    struct: (obj: OntologyStructType) => T;
    object: (obj: OntologyObjectType) => T;
    objectSet: (obj: OntologyObjectSetType) => T;
    unsupported: (obj: UnsupportedType) => T;
    unknown: (obj: OntologyDataType) => T;
}

function visit<T>(obj: OntologyDataType, visitor: OntologyDataTypeVisitor<T>): T {
    if (isAny(obj)) {
        return visitor.any(obj);
    }

    if (isBinary(obj)) {
        return visitor.binary(obj);
    }

    if (isBoolean(obj)) {
        return visitor.boolean(obj);
    }

    if (isByte(obj)) {
        return visitor.byte(obj);
    }

    if (isDate(obj)) {
        return visitor.date(obj);
    }

    if (isDecimal(obj)) {
        return visitor.decimal(obj);
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

    if (isShort(obj)) {
        return visitor.short(obj);
    }

    if (isString(obj)) {
        return visitor.string(obj);
    }

    if (isTimestamp(obj)) {
        return visitor.timestamp(obj);
    }

    if (isArray(obj)) {
        return visitor.array(obj);
    }

    if (isMap(obj)) {
        return visitor.map(obj);
    }

    if (isSet(obj)) {
        return visitor.set(obj);
    }

    if (isStruct(obj)) {
        return visitor.struct(obj);
    }

    if (isObject(obj)) {
        return visitor.object(obj);
    }

    if (isObjectSet(obj)) {
        return visitor.objectSet(obj);
    }

    if (isUnsupported(obj)) {
        return visitor.unsupported(obj);
    }

    return visitor.unknown(obj);
}

export type OntologyDataType = OntologyDataType_Any | OntologyDataType_Binary | OntologyDataType_Boolean | OntologyDataType_Byte | OntologyDataType_Date | OntologyDataType_Decimal | OntologyDataType_Double | OntologyDataType_Float | OntologyDataType_Integer | OntologyDataType_Long | OntologyDataType_Short | OntologyDataType_String | OntologyDataType_Timestamp | OntologyDataType_Array | OntologyDataType_Map | OntologyDataType_Set | OntologyDataType_Struct | OntologyDataType_Object | OntologyDataType_ObjectSet | OntologyDataType_Unsupported;

export const OntologyDataType = {
    isAny: isAny,
    any: any,
    isBinary: isBinary,
    binary: binary,
    isBoolean: isBoolean,
    boolean: boolean,
    isByte: isByte,
    byte: byte,
    isDate: isDate,
    date: date,
    isDecimal: isDecimal,
    decimal: decimal,
    isDouble: isDouble,
    double: double,
    isFloat: isFloat,
    float: float,
    isInteger: isInteger,
    integer: integer,
    isLong: isLong,
    long: long,
    isShort: isShort,
    short: short,
    isString: isString,
    string: string,
    isTimestamp: isTimestamp,
    timestamp: timestamp,
    isArray: isArray,
    array: array,
    isMap: isMap,
    map: map,
    isSet: isSet,
    set: set,
    isStruct: isStruct,
    struct: struct,
    isObject: isObject,
    object: object,
    isObjectSet: isObjectSet,
    objectSet: objectSet,
    isUnsupported: isUnsupported,
    unsupported: unsupported,
    visit: visit,
};
