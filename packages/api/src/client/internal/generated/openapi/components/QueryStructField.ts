import { StructFieldName } from "./StructFieldName";
import { QueryDataType } from "./QueryDataType";

export interface QueryStructField {
    name: StructFieldName;
    fieldType: QueryDataType;
}
