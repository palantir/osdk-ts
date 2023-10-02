import { StructFieldName } from "./StructFieldName";
import { BaseType } from "./BaseType";

export interface StructField {
    name: StructFieldName;
    fieldType: BaseType;
}
