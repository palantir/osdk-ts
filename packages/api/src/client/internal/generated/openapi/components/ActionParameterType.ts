import { ActionParameterArrayType } from "./ActionParameterArrayType";
import { AttachmentType } from "./AttachmentType";
import { BooleanType } from "./BooleanType";
import { DateType } from "./DateType";
import { DoubleType } from "./DoubleType";
import { IntegerType } from "./IntegerType";
import { LongType } from "./LongType";
import { OntologyObjectSetType } from "./OntologyObjectSetType";
import { OntologyObjectType } from "./OntologyObjectType";
import { StringType } from "./StringType";
import { TimestampType } from "./TimestampType";

export interface ActionParameterType_Array extends ActionParameterArrayType {
    type: "array";
}

export interface ActionParameterType_Attachment extends AttachmentType {
    type: "attachment";
}

export interface ActionParameterType_Boolean extends BooleanType {
    type: "boolean";
}

export interface ActionParameterType_Date extends DateType {
    type: "date";
}

export interface ActionParameterType_Double extends DoubleType {
    type: "double";
}

export interface ActionParameterType_Integer extends IntegerType {
    type: "integer";
}

export interface ActionParameterType_Long extends LongType {
    type: "long";
}

export interface ActionParameterType_ObjectSet extends OntologyObjectSetType {
    type: "objectSet";
}

export interface ActionParameterType_Object extends OntologyObjectType {
    type: "object";
}

export interface ActionParameterType_String extends StringType {
    type: "string";
}

export interface ActionParameterType_Timestamp extends TimestampType {
    type: "timestamp";
}

export type ActionParameterType = ActionParameterType_Array | ActionParameterType_Attachment | ActionParameterType_Boolean | ActionParameterType_Date | ActionParameterType_Double | ActionParameterType_Integer | ActionParameterType_Long | ActionParameterType_ObjectSet | ActionParameterType_Object | ActionParameterType_String | ActionParameterType_Timestamp;
