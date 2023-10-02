import { ParameterId } from "./ParameterId";
import { DataValue } from "./DataValue";

export interface ExecuteQueryRequest {
    parameters: Record<ParameterId, DataValue>;
}
