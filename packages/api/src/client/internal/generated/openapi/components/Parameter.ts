import { ValueType } from "./ValueType";
import { OntologyDataType } from "./OntologyDataType";

/** Details about a parameter of an action or query. */
export interface Parameter {
    description?: string;
    baseType: ValueType;
    dataType?: OntologyDataType;
    required: boolean;
}
