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

export interface BaseType_Binary extends BinaryType {
    type: "binary";
}

export interface BaseType_Boolean extends BooleanType {
    type: "boolean";
}

export interface BaseType_Byte extends ByteType {
    type: "byte";
}

export interface BaseType_Date extends DateType {
    type: "date";
}

export interface BaseType_Decimal extends DecimalType {
    type: "decimal";
}

export interface BaseType_Double extends DoubleType {
    type: "double";
}

export interface BaseType_Float extends FloatType {
    type: "float";
}

export interface BaseType_Integer extends IntegerType {
    type: "integer";
}

export interface BaseType_Long extends LongType {
    type: "long";
}

export interface BaseType_Short extends ShortType {
    type: "short";
}

export interface BaseType_String extends StringType {
    type: "string";
}

export interface BaseType_Timestamp extends TimestampType {
    type: "timestamp";
}

export interface BaseType_Array extends ArrayType {
    type: "array";
}

export interface BaseType_Map extends MapType {
    type: "map";
}

export interface BaseType_Set extends SetType {
    type: "set";
}

export interface BaseType_Struct extends StructType {
    type: "struct";
}

export type BaseType = BaseType_Any | BaseType_Binary | BaseType_Boolean | BaseType_Byte | BaseType_Date | BaseType_Decimal | BaseType_Double | BaseType_Float | BaseType_Integer | BaseType_Long | BaseType_Short | BaseType_String | BaseType_Timestamp | BaseType_Array | BaseType_Map | BaseType_Set | BaseType_Struct;
