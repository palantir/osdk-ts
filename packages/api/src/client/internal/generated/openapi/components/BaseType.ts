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
import { ArrayType } from "./ArrayType";
import { MapType } from "./MapType";
import { SetType } from "./SetType";
import { StructType } from "./StructType";

export interface BaseType_Any extends AnyType {
    type: "any";
}

function isAny(obj: BaseType): obj is BaseType_Any {
    return (obj.type === "any");
}

function any(obj: AnyType): BaseType_Any {
    return {
        ...obj,
        type: "any",
    };
}

export interface BaseType_Binary extends BinaryType {
    type: "binary";
}

function isBinary(obj: BaseType): obj is BaseType_Binary {
    return (obj.type === "binary");
}

function binary(obj: BinaryType): BaseType_Binary {
    return {
        ...obj,
        type: "binary",
    };
}

export interface BaseType_Boolean extends BooleanType {
    type: "boolean";
}

function isBoolean(obj: BaseType): obj is BaseType_Boolean {
    return (obj.type === "boolean");
}

function boolean(obj: BooleanType): BaseType_Boolean {
    return {
        ...obj,
        type: "boolean",
    };
}

export interface BaseType_Byte extends ByteType {
    type: "byte";
}

function isByte(obj: BaseType): obj is BaseType_Byte {
    return (obj.type === "byte");
}

function byte(obj: ByteType): BaseType_Byte {
    return {
        ...obj,
        type: "byte",
    };
}

export interface BaseType_Date extends DateType {
    type: "date";
}

function isDate(obj: BaseType): obj is BaseType_Date {
    return (obj.type === "date");
}

function date(obj: DateType): BaseType_Date {
    return {
        ...obj,
        type: "date",
    };
}

export interface BaseType_Decimal extends DecimalType {
    type: "decimal";
}

function isDecimal(obj: BaseType): obj is BaseType_Decimal {
    return (obj.type === "decimal");
}

function decimal(obj: DecimalType): BaseType_Decimal {
    return {
        ...obj,
        type: "decimal",
    };
}

export interface BaseType_Double extends DoubleType {
    type: "double";
}

function isDouble(obj: BaseType): obj is BaseType_Double {
    return (obj.type === "double");
}

function double(obj: DoubleType): BaseType_Double {
    return {
        ...obj,
        type: "double",
    };
}

export interface BaseType_Float extends FloatType {
    type: "float";
}

function isFloat(obj: BaseType): obj is BaseType_Float {
    return (obj.type === "float");
}

function float(obj: FloatType): BaseType_Float {
    return {
        ...obj,
        type: "float",
    };
}

export interface BaseType_Integer extends IntegerType {
    type: "integer";
}

function isInteger(obj: BaseType): obj is BaseType_Integer {
    return (obj.type === "integer");
}

function integer(obj: IntegerType): BaseType_Integer {
    return {
        ...obj,
        type: "integer",
    };
}

export interface BaseType_Long extends LongType {
    type: "long";
}

function isLong(obj: BaseType): obj is BaseType_Long {
    return (obj.type === "long");
}

function long(obj: LongType): BaseType_Long {
    return {
        ...obj,
        type: "long",
    };
}

export interface BaseType_Short extends ShortType {
    type: "short";
}

function isShort(obj: BaseType): obj is BaseType_Short {
    return (obj.type === "short");
}

function short(obj: ShortType): BaseType_Short {
    return {
        ...obj,
        type: "short",
    };
}

export interface BaseType_String extends StringType {
    type: "string";
}

function isString(obj: BaseType): obj is BaseType_String {
    return (obj.type === "string");
}

function string(obj: StringType): BaseType_String {
    return {
        ...obj,
        type: "string",
    };
}

export interface BaseType_Timestamp extends TimestampType {
    type: "timestamp";
}

function isTimestamp(obj: BaseType): obj is BaseType_Timestamp {
    return (obj.type === "timestamp");
}

function timestamp(obj: TimestampType): BaseType_Timestamp {
    return {
        ...obj,
        type: "timestamp",
    };
}

export interface BaseType_Array extends ArrayType {
    type: "array";
}

function isArray(obj: BaseType): obj is BaseType_Array {
    return (obj.type === "array");
}

function array(obj: ArrayType): BaseType_Array {
    return {
        ...obj,
        type: "array",
    };
}

export interface BaseType_Map extends MapType {
    type: "map";
}

function isMap(obj: BaseType): obj is BaseType_Map {
    return (obj.type === "map");
}

function map(obj: MapType): BaseType_Map {
    return {
        ...obj,
        type: "map",
    };
}

export interface BaseType_Set extends SetType {
    type: "set";
}

function isSet(obj: BaseType): obj is BaseType_Set {
    return (obj.type === "set");
}

function set(obj: SetType): BaseType_Set {
    return {
        ...obj,
        type: "set",
    };
}

export interface BaseType_Struct extends StructType {
    type: "struct";
}

function isStruct(obj: BaseType): obj is BaseType_Struct {
    return (obj.type === "struct");
}

function struct(obj: StructType): BaseType_Struct {
    return {
        ...obj,
        type: "struct",
    };
}

export interface BaseTypeVisitor<T> {
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
    array: (obj: ArrayType) => T;
    map: (obj: MapType) => T;
    set: (obj: SetType) => T;
    struct: (obj: StructType) => T;
    unknown: (obj: BaseType) => T;
}

function visit<T>(obj: BaseType, visitor: BaseTypeVisitor<T>): T {
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

    return visitor.unknown(obj);
}

export type BaseType = BaseType_Any | BaseType_Binary | BaseType_Boolean | BaseType_Byte | BaseType_Date | BaseType_Decimal | BaseType_Double | BaseType_Float | BaseType_Integer | BaseType_Long | BaseType_Short | BaseType_String | BaseType_Timestamp | BaseType_Array | BaseType_Map | BaseType_Set | BaseType_Struct;

export const BaseType = {
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
    visit: visit,
};
