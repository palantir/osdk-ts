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

export interface ModelApiType_Array extends ModelApiArrayType {
    type: "array";
}

export interface ModelApiType_Boolean extends BooleanType {
    type: "boolean";
}

export interface ModelApiType_Date extends DateType {
    type: "date";
}

export interface ModelApiType_Float extends FloatType {
    type: "float";
}

export interface ModelApiType_Integer extends IntegerType {
    type: "integer";
}

export interface ModelApiType_Map extends ModelApiMapType {
    type: "map";
}

export interface ModelApiType_Null extends ModelApiNullType {
    type: "null";
}

export interface ModelApiType_String extends StringType {
    type: "string";
}

export interface ModelApiType_Struct extends ModelApiStructType {
    type: "struct";
}

export interface ModelApiType_Timestamp extends TimestampType {
    type: "timestamp";
}

export interface ModelApiType_Union extends ModelApiUnionType {
    type: "union";
}

export type ModelApiType = ModelApiType_Any | ModelApiType_Array | ModelApiType_Boolean | ModelApiType_Date | ModelApiType_Float | ModelApiType_Integer | ModelApiType_Map | ModelApiType_Null | ModelApiType_String | ModelApiType_Struct | ModelApiType_Timestamp | ModelApiType_Union;
