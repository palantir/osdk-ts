import { ParameterId } from "./ParameterId";
import { DataValue } from "./DataValue";

export interface ApplyActionRequest {
    parameters: Record<ParameterId, DataValue>;
}
