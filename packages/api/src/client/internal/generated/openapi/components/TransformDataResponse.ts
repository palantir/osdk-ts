import { FieldName } from "./FieldName";
import { DataValue } from "./DataValue";

export interface TransformDataResponse {
    outputs: Record<FieldName, DataValue>;
}
