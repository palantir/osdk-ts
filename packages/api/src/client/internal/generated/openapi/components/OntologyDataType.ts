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

export interface OntologyDataType_Binary extends BinaryType {
    type: "binary";
}

export interface OntologyDataType_Boolean extends BooleanType {
    type: "boolean";
}

export interface OntologyDataType_Byte extends ByteType {
    type: "byte";
}

export interface OntologyDataType_Date extends DateType {
    type: "date";
}

export interface OntologyDataType_Decimal extends DecimalType {
    type: "decimal";
}

export interface OntologyDataType_Double extends DoubleType {
    type: "double";
}

export interface OntologyDataType_Float extends FloatType {
    type: "float";
}

export interface OntologyDataType_Integer extends IntegerType {
    type: "integer";
}

export interface OntologyDataType_Long extends LongType {
    type: "long";
}

export interface OntologyDataType_Short extends ShortType {
    type: "short";
}

export interface OntologyDataType_String extends StringType {
    type: "string";
}

export interface OntologyDataType_Timestamp extends TimestampType {
    type: "timestamp";
}

export interface OntologyDataType_Array extends OntologyArrayType {
    type: "array";
}

export interface OntologyDataType_Map extends OntologyMapType {
    type: "map";
}

export interface OntologyDataType_Set extends OntologySetType {
    type: "set";
}

export interface OntologyDataType_Struct extends OntologyStructType {
    type: "struct";
}

export interface OntologyDataType_Object extends OntologyObjectType {
    type: "object";
}

export interface OntologyDataType_ObjectSet extends OntologyObjectSetType {
    type: "objectSet";
}

export interface OntologyDataType_Unsupported extends UnsupportedType {
    type: "unsupported";
}

export type OntologyDataType = OntologyDataType_Any | OntologyDataType_Binary | OntologyDataType_Boolean | OntologyDataType_Byte | OntologyDataType_Date | OntologyDataType_Decimal | OntologyDataType_Double | OntologyDataType_Float | OntologyDataType_Integer | OntologyDataType_Long | OntologyDataType_Short | OntologyDataType_String | OntologyDataType_Timestamp | OntologyDataType_Array | OntologyDataType_Map | OntologyDataType_Set | OntologyDataType_Struct | OntologyDataType_Object | OntologyDataType_ObjectSet | OntologyDataType_Unsupported;
