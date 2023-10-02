import { StructFieldName } from "./StructFieldName";
import { OntologyDataType } from "./OntologyDataType";

export interface OntologyStructField {
    name: StructFieldName;
    fieldType: OntologyDataType;
    required: boolean;
}
