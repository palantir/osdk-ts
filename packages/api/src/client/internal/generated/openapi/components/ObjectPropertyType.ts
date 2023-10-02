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

export interface ObjectPropertyType_Attachment extends AttachmentType {
    type: "attachment";
}

export interface ObjectPropertyType_Boolean extends BooleanType {
    type: "boolean";
}

export interface ObjectPropertyType_Byte extends ByteType {
    type: "byte";
}

export interface ObjectPropertyType_Date extends DateType {
    type: "date";
}

export interface ObjectPropertyType_Decimal extends DecimalType {
    type: "decimal";
}

export interface ObjectPropertyType_Double extends DoubleType {
    type: "double";
}

export interface ObjectPropertyType_Float extends FloatType {
    type: "float";
}

export interface ObjectPropertyType_Geopoint extends GeoPointType {
    type: "geopoint";
}

export interface ObjectPropertyType_Geoshape extends GeoShapeType {
    type: "geoshape";
}

export interface ObjectPropertyType_Integer extends IntegerType {
    type: "integer";
}

export interface ObjectPropertyType_Long extends LongType {
    type: "long";
}

export interface ObjectPropertyType_Short extends ShortType {
    type: "short";
}

export interface ObjectPropertyType_String extends StringType {
    type: "string";
}

export interface ObjectPropertyType_Timestamp extends TimestampType {
    type: "timestamp";
}

export interface ObjectPropertyType_Timeseries extends TimeseriesType {
    type: "timeseries";
}

export type ObjectPropertyType = ObjectPropertyType_Array | ObjectPropertyType_Attachment | ObjectPropertyType_Boolean | ObjectPropertyType_Byte | ObjectPropertyType_Date | ObjectPropertyType_Decimal | ObjectPropertyType_Double | ObjectPropertyType_Float | ObjectPropertyType_Geopoint | ObjectPropertyType_Geoshape | ObjectPropertyType_Integer | ObjectPropertyType_Long | ObjectPropertyType_Short | ObjectPropertyType_String | ObjectPropertyType_Timestamp | ObjectPropertyType_Timeseries;
