import { ParameterId } from "./ParameterId";
import { DataValue } from "./DataValue";

export interface AsyncApplyActionRequest {
    parameters: Record<ParameterId, DataValue>;
}
