import { FieldName } from "./FieldName";
import { DataValue } from "./DataValue";

export interface TransformDataRequest {
    inputs: Record<FieldName, DataValue>;
}
