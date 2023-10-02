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

export interface QueryDataType_Attachment extends AttachmentType {
    type: "attachment";
}

export interface QueryDataType_Boolean extends BooleanType {
    type: "boolean";
}

export interface QueryDataType_Date extends DateType {
    type: "date";
}

export interface QueryDataType_Double extends DoubleType {
    type: "double";
}

export interface QueryDataType_Float extends FloatType {
    type: "float";
}

export interface QueryDataType_Integer extends IntegerType {
    type: "integer";
}

export interface QueryDataType_Long extends LongType {
    type: "long";
}

export interface QueryDataType_ObjectSet extends OntologyObjectSetType {
    type: "objectSet";
}

export interface QueryDataType_Object extends OntologyObjectType {
    type: "object";
}

export interface QueryDataType_Set extends QuerySetType {
    type: "set";
}

export interface QueryDataType_String extends StringType {
    type: "string";
}

export interface QueryDataType_Struct extends QueryStructType {
    type: "struct";
}

export interface QueryDataType_Timestamp extends TimestampType {
    type: "timestamp";
}

export interface QueryDataType_Union extends QueryUnionType {
    type: "union";
}

export interface QueryDataType_Null extends NullType {
    type: "null";
}

export interface QueryDataType_Unsupported extends UnsupportedType {
    type: "unsupported";
}

export type QueryDataType = QueryDataType_Array | QueryDataType_Attachment | QueryDataType_Boolean | QueryDataType_Date | QueryDataType_Double | QueryDataType_Float | QueryDataType_Integer | QueryDataType_Long | QueryDataType_ObjectSet | QueryDataType_Object | QueryDataType_Set | QueryDataType_String | QueryDataType_Struct | QueryDataType_Timestamp | QueryDataType_Union | QueryDataType_Null | QueryDataType_Unsupported;
