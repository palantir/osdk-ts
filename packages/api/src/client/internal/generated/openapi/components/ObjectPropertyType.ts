import { OntologyObjectArrayType } from "./OntologyObjectArrayType";
import { AttachmentType } from "./AttachmentType";
import { BooleanType } from "./BooleanType";
import { ByteType } from "./ByteType";
import { DateType } from "./DateType";
import { DecimalType } from "./DecimalType";
import { DoubleType } from "./DoubleType";
import { FloatType } from "./FloatType";
import { GeoPointType } from "./GeoPointType";
import { GeoShapeType } from "./GeoShapeType";
import { IntegerType } from "./IntegerType";
import { LongType } from "./LongType";
import { ShortType } from "./ShortType";
import { StringType } from "./StringType";
import { TimestampType } from "./TimestampType";
import { TimeseriesType } from "./TimeseriesType";

export interface ObjectPropertyType_Array extends OntologyObjectArrayType {
    type: "array";
}

function isArray(obj: ObjectPropertyType): obj is ObjectPropertyType_Array {
    return (obj.type === "array");
}

export interface ObjectPropertyType_Attachment extends AttachmentType {
    type: "attachment";
}

function isAttachment(obj: ObjectPropertyType): obj is ObjectPropertyType_Attachment {
    return (obj.type === "attachment");
}

export interface ObjectPropertyType_Boolean extends BooleanType {
    type: "boolean";
}

function isBoolean(obj: ObjectPropertyType): obj is ObjectPropertyType_Boolean {
    return (obj.type === "boolean");
}

export interface ObjectPropertyType_Byte extends ByteType {
    type: "byte";
}

function isByte(obj: ObjectPropertyType): obj is ObjectPropertyType_Byte {
    return (obj.type === "byte");
}

export interface ObjectPropertyType_Date extends DateType {
    type: "date";
}

function isDate(obj: ObjectPropertyType): obj is ObjectPropertyType_Date {
    return (obj.type === "date");
}

export interface ObjectPropertyType_Decimal extends DecimalType {
    type: "decimal";
}

function isDecimal(obj: ObjectPropertyType): obj is ObjectPropertyType_Decimal {
    return (obj.type === "decimal");
}

export interface ObjectPropertyType_Double extends DoubleType {
    type: "double";
}

function isDouble(obj: ObjectPropertyType): obj is ObjectPropertyType_Double {
    return (obj.type === "double");
}

export interface ObjectPropertyType_Float extends FloatType {
    type: "float";
}

function isFloat(obj: ObjectPropertyType): obj is ObjectPropertyType_Float {
    return (obj.type === "float");
}

export interface ObjectPropertyType_Geopoint extends GeoPointType {
    type: "geopoint";
}

function isGeopoint(obj: ObjectPropertyType): obj is ObjectPropertyType_Geopoint {
    return (obj.type === "geopoint");
}

export interface ObjectPropertyType_Geoshape extends GeoShapeType {
    type: "geoshape";
}

function isGeoshape(obj: ObjectPropertyType): obj is ObjectPropertyType_Geoshape {
    return (obj.type === "geoshape");
}

export interface ObjectPropertyType_Integer extends IntegerType {
    type: "integer";
}

function isInteger(obj: ObjectPropertyType): obj is ObjectPropertyType_Integer {
    return (obj.type === "integer");
}

export interface ObjectPropertyType_Long extends LongType {
    type: "long";
}

function isLong(obj: ObjectPropertyType): obj is ObjectPropertyType_Long {
    return (obj.type === "long");
}

export interface ObjectPropertyType_Short extends ShortType {
    type: "short";
}

function isShort(obj: ObjectPropertyType): obj is ObjectPropertyType_Short {
    return (obj.type === "short");
}

export interface ObjectPropertyType_String extends StringType {
    type: "string";
}

function isString(obj: ObjectPropertyType): obj is ObjectPropertyType_String {
    return (obj.type === "string");
}

export interface ObjectPropertyType_Timestamp extends TimestampType {
    type: "timestamp";
}

function isTimestamp(obj: ObjectPropertyType): obj is ObjectPropertyType_Timestamp {
    return (obj.type === "timestamp");
}

export interface ObjectPropertyType_Timeseries extends TimeseriesType {
    type: "timeseries";
}

function isTimeseries(obj: ObjectPropertyType): obj is ObjectPropertyType_Timeseries {
    return (obj.type === "timeseries");
}

export interface ObjectPropertyTypeVisitor<T> {
    array: (obj: OntologyObjectArrayType) => T;
    attachment: (obj: AttachmentType) => T;
    boolean: (obj: BooleanType) => T;
    byte: (obj: ByteType) => T;
    date: (obj: DateType) => T;
    decimal: (obj: DecimalType) => T;
    double: (obj: DoubleType) => T;
    float: (obj: FloatType) => T;
    geopoint: (obj: GeoPointType) => T;
    geoshape: (obj: GeoShapeType) => T;
    integer: (obj: IntegerType) => T;
    long: (obj: LongType) => T;
    short: (obj: ShortType) => T;
    string: (obj: StringType) => T;
    timestamp: (obj: TimestampType) => T;
    timeseries: (obj: TimeseriesType) => T;
    unknown: (obj: ObjectPropertyType) => T;
}

function visit<T>(obj: ObjectPropertyType, visitor: ObjectPropertyTypeVisitor<T>): T {
    if (isArray(obj)) {
        return visitor.array(obj);
    }

    if (isAttachment(obj)) {
        return visitor.attachment(obj);
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

    if (isGeopoint(obj)) {
        return visitor.geopoint(obj);
    }

    if (isGeoshape(obj)) {
        return visitor.geoshape(obj);
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

    if (isTimeseries(obj)) {
        return visitor.timeseries(obj);
    }

    return visitor.unknown(obj);
}

export type ObjectPropertyType = ObjectPropertyType_Array | ObjectPropertyType_Attachment | ObjectPropertyType_Boolean | ObjectPropertyType_Byte | ObjectPropertyType_Date | ObjectPropertyType_Decimal | ObjectPropertyType_Double | ObjectPropertyType_Float | ObjectPropertyType_Geopoint | ObjectPropertyType_Geoshape | ObjectPropertyType_Integer | ObjectPropertyType_Long | ObjectPropertyType_Short | ObjectPropertyType_String | ObjectPropertyType_Timestamp | ObjectPropertyType_Timeseries;

export const ObjectPropertyType = {
    isArray: isArray,
    isAttachment: isAttachment,
    isBoolean: isBoolean,
    isByte: isByte,
    isDate: isDate,
    isDecimal: isDecimal,
    isDouble: isDouble,
    isFloat: isFloat,
    isGeopoint: isGeopoint,
    isGeoshape: isGeoshape,
    isInteger: isInteger,
    isLong: isLong,
    isShort: isShort,
    isString: isString,
    isTimestamp: isTimestamp,
    isTimeseries: isTimeseries,
    visit: visit,
};
