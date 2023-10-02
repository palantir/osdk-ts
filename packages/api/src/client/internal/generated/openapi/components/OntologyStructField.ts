import { StructFieldName } from "./StructFieldName";
import { OntologyDataType } from "./OntologyDataType";

export type OntologyStructField = { name: StructFieldName; fieldType: OntologyDataType; required: boolean; };
