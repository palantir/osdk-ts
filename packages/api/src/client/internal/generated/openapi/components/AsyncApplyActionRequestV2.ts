import { ParameterId } from "./ParameterId";
import { DataValue } from "./DataValue";

export interface AsyncApplyActionRequestV2 {
    parameters: Record<ParameterId, DataValue>;
}
