import { ParameterId } from "./ParameterId";
import { DataValue } from "./DataValue";

export interface ValidateActionRequest {
    parameters: Record<ParameterId, DataValue>;
}
